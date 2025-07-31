FROM oven/bun:alpine AS base
WORKDIR /project_name

# install dependencies into temp directory
# this will cache them and speed up future builds
FROM base AS install
RUN mkdir -p /temp/prod
COPY package.json bun.lock* .npmrc* /temp/prod/
WORKDIR /temp/prod
RUN bun install 

# copy node_modules from temp directory
# then copy all (non-ignored) project files into the image
FROM base AS release
COPY --from=install /temp/prod/node_modules ./node_modules
COPY . .

# Astro collects completely anonymous telemetry data about general usage.
# Learn more here: https://docs.astro.build/en/reference/cli-reference/#astro-telemetry
# Disable telemetry during the build
ENV ASTRO_TELEMETRY_DISABLED=1

RUN bun run build

# Production runtime - serve static files
FROM nginx:alpine AS runtime

# Copy built static files to nginx
COPY --from=release /project_name/dist /usr/share/nginx/html

# Create nginx configuration for SPA
RUN echo 'server { \
    listen 4321; \
    listen [::]:4321; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
    # Security headers \
    add_header X-Frame-Options "SAMEORIGIN" always; \
    add_header X-Content-Type-Options "nosniff" always; \
    add_header Referrer-Policy "no-referrer-when-downgrade" always; \
    add_header Content-Security-Policy "default-src '\''self'\'' http: https: data: blob: '\''unsafe-inline'\''" always; \
}' > /etc/nginx/conf.d/default.conf

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf.default 2>/dev/null || true

EXPOSE 4321

CMD ["nginx", "-g", "daemon off;"]