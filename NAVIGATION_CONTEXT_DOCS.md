# Sistema de Contexto de Navegación

Este sistema permite mostrar títulos y descripciones dinámicos basados en el estado de navegación actual del usuario en la jerarquía de datos.

## Archivos Modificados

### 1. `/src/data/navigation-context.ts`
Nuevo archivo que contiene:
- **NavigationContext**: Interface para definir título y descripción
- **NAVIGATION_CONTEXTS**: Mapeo de slugs a contextos específicos
- **getNavigationContext()**: Función para obtener el contexto apropiado
- **isRootLevel()**: Función para determinar si estamos en el nivel raíz

### 2. `/src/components/features/Home/Container.tsx`
Modificado para:
- Importar las funciones de contexto de navegación
- Usar `getNavigationContext()` para obtener título y descripción dinámicos
- Reemplazar el uso de `formData.label` y `formData.description` con los valores contextuales

## Cómo Funciona

1. **Nivel Raíz**: Cuando el usuario está en el nivel inicial (sin navegación previa), se muestra:
   ```json
   {
     "title": "Selecciona estatus migratorio del menor",
     "description": "Haz click en la opción que mejor represente el estatus migratorio del menor."
   }
   ```

2. **Navegación Contextual**: Cuando el usuario selecciona "Menor tiene únicamente nacionalidad dominicana", se muestra:
   ```json
   {
     "title": "Selecciona quién viajará con el menor", 
     "description": "Selecciona quien acompañará o será el responsable del menor al momento de viajar."
   }
   ```

3. **Fallback**: Si no se encuentra un contexto específico, se usa el contexto "default"

## Ejemplos de Uso

### Caso 1: Usuario en nivel raíz
- **Condición**: `navigationStack.length === 0`
- **Resultado**: Muestra el contexto "root"

### Caso 2: Usuario seleccionó una opción específica
- **Condición**: `formData.slug === "menor-tiene-únicamente-nacionalidad-dominicana"`
- **Resultado**: Muestra el contexto específico para ese slug

### Caso 3: Slug no encontrado
- **Condición**: Slug no existe en `NAVIGATION_CONTEXTS`
- **Resultado**: Muestra el contexto "default"

## Agregar Nuevos Contextos

Para agregar un nuevo contexto, simplemente añade una entrada en `NAVIGATION_CONTEXTS`:

```typescript
"nuevo-slug-aqui": {
  title: "Título para este contexto",
  description: "Descripción específica para esta situación."
}
```

## Ventajas del Sistema

1. **Separación de Responsabilidades**: Los títulos contextuales están separados de los datos de navegación
2. **Mantenibilidad**: Es fácil actualizar textos sin tocar la lógica de navegación
3. **Escalabilidad**: Fácil agregar nuevos contextos conforme crece la aplicación
4. **Flexibilidad**: Permite diferentes títulos/descripciones para el mismo nivel de navegación según el contexto

## Estructura de Datos Relacionada

El sistema funciona en conjunto con:
- `DATA_DUMB`: Contiene la estructura jerárquica de navegación
- `useFormDataStore`: Maneja el estado de navegación
- `navigationStack`: Rastrea el historial de navegación del usuario
