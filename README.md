# Documentación del Componente de Migración para Menores

## 🐳 Deployment con Docker

### Ejecutar el Script de Setup

Para realizar el build y ejecución de Docker de manera fácil y automatizada, **ejecute el script `setup.sh`**:

```bash
./setup.sh
```

Este script automáticamente:

- ✅ Verifica los prerequisitos (Docker, Docker Compose)
- ✅ Construye la imagen Docker (si no existe)
- ✅ Ejecuta el contenedor en modo detached
- ✅ Muestra la URL para acceder a la aplicación

### Instrucciones Paso a Paso

1. **Hacer el script ejecutable** (solo la primera vez):

   ```bash
   chmod +x setup.sh
   ```

2. **Ejecutar el script**:

   ```bash
   ./setup.sh
   ```

3. **Acceder a la aplicación** en: <http://localhost:4321>

### Comandos Docker Manuales (Alternativo)

Si prefiere ejecutar los comandos Docker manualmente:

```bash
# Construir la imagen
VERSION="v1.0.0" docker compose -f compose.build.yaml build

# Ejecutar el contenedor
VERSION="v1.0.0" docker compose -f compose.build.yaml up -d

# Ver logs
docker compose -f compose.build.yaml logs -f

# Detener el contenedor
docker compose -f compose.build.yaml down
```

### Requisitos

- Docker y Docker Compose instalados
- El script `setup.sh` en el directorio raíz del proyecto
