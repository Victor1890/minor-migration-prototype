import { defineMiddleware } from 'astro/middleware';
import { DATA_DUMB } from './data';
import { extractNodes } from './utils/array';

const nodes = extractNodes(DATA_DUMB.cases);

export const onRequest = defineMiddleware((context, next) => {

    const slug = decodeURIComponent(context.url.pathname)

    const node = nodes.find((node) => `/${node.slug}` === slug);

    context.locals.node = node || {
        slug: "",
        node: {
            id: "",
            slug: "",
            children: DATA_DUMB.cases,
            label: "",
            description: ""
        }
    }

    return next();
})