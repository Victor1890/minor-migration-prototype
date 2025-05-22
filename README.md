# Documentación del Componente de Migración para Menores

Este documento proporciona información sobre cómo modificar la información de los pasos (steps) en el formulario y cómo cambiar el comportamiento final del paso relacionado con el `handleSubmit`.

## Estructura del Proyecto

La aplicación está construida con:
- **React** para los componentes de interfaz
- **Astro** como framework de desarrollo
- **TypeScript** para el tipado de código

## Modificación de la Información de los Pasos (Steps)

Los pasos del formulario se definen en el archivo `src/data/steps/index.ts`. Cada paso contiene:
- `title`: Título que aparece en la parte superior de cada paso
- `description`: Descripción que aparece debajo del título
- `component`: Componente que se renderiza para ese paso

### Modificación de los Pasos:

1. **Para modificar títulos y descripciones de los pasos:**
   
   Editar el archivo:
   ```
   src/data/steps/index.ts
   ```

   Ejemplo de la estructura actual:
   ```typescript
   export const STEPS = [
       {
           title: "¿Cuál es el estatus migratorio del menor?",
           description: "Elige el estatus del menor según su nacionalidad o residencia haciendo click en alguna de las opciones.",
           component: StatusMigrationMinor,
       },
       // Más pasos...
   ]
   ```

2. **Para modificar las opciones disponibles en cada paso:**

   Editar el archivo:
   ```
   src/data/home.ts
   ```

   Este archivo contiene las diferentes opciones para cada tipo de paso:
   - `STATUS_MIGRATION_MINOR`: Opciones para el estatus migratorio
   - `HAS_MINOR_STAYED_MORE_THAN_6_MONTHS`: Opciones para la duración de estadía
   - `CASE_LIST`: Opciones para las diferentes situaciones

   Ejemplo:
   ```typescript
   export const STATUS_MIGRATION_MINOR = [
       {
           title: "Es Dominicano",
           slug: "dominicano",
           icon: DominicanIcon,
           description: "El menor solo tiene la nacionalidad dominicana...",
       },
       // Más opciones...
   ]
   ```

3. **Para modificar los componentes de cada paso:**

   Editar los archivos en:
   - `src/data/steps/StatusMigrationMinor.tsx`
   - `src/data/steps/MinorStayedMore.tsx`
   - `src/data/steps/CaseListOfMinor.tsx`
   - `src/data/steps/Documentation.tsx`

## Modificación del `handleSubmit`

El `handleSubmit` se encuentra en el archivo `src/components/features/Home/index.tsx`. Esta función controla qué sucede cuando el usuario hace clic en el botón "Continuar" o "Iniciar el trámite" (en el último paso).

### Para modificar el comportamiento de `handleSubmit`:

1. **Ubicación del código:**
   ```
   src/components/features/Home/index.tsx
   ```

2. **Estructura actual:**
   ```typescript
   const handleSubmit = () => {
     // Redirect to the next step
     if (isLastStep) {
       // Handle the final submission
       console.log("Final form data:", formData);
       return;
     }

     goToNextStep();
   };
   ```

3. **Posibles modificaciones:**

   - **Para redirigir a otra página después del último paso:**
     ```typescript
     const handleSubmit = () => {
       if (isLastStep) {
         // Guardar datos en localStorage si es necesario
         localStorage.setItem('formData', JSON.stringify(formData));
         
         // Redirigir a otra página
         window.location.href = '/confirmacion';
         return;
       }

       goToNextStep();
     };
     ```

   - **Para enviar los datos a una API:**
     ```typescript
     const handleSubmit = async () => {
       if (isLastStep) {
         try {
           // Mostrar un estado de carga si es necesario
           
           // Enviar datos a una API
           const response = await fetch('https://api.example.com/submit', {
             method: 'POST',
             headers: {
               'Content-Type': 'application/json',
             },
             body: JSON.stringify(formData),
           });
           
           const result = await response.json();
           
           // Redirigir o mostrar mensaje de éxito
           if (result.success) {
             window.location.href = '/exito';
           }
         } catch (error) {
           console.error('Error al enviar los datos:', error);
           // Mostrar mensaje de error al usuario
         }
         return;
       }

       goToNextStep();
     };
     ```

   - **Para mostrar un modal de confirmación:**
     ```typescript
     const handleSubmit = () => {
       if (isLastStep) {
         // Abrir un modal de confirmación
         setShowConfirmModal(true);
         return;
       }

       goToNextStep();
     };
     ```

## Flujo de Datos en la Aplicación

El estado del formulario se maneja a través del custom hook `useFormNavigation` ubicado en `src/components/features/Home/hooks/useFormNavigation.ts`. Este hook proporciona:

- `currentStep`: Paso actual
- `formData`: Datos del formulario
- `updateFormData`: Función para actualizar los datos
- `goToNextStep`, `goToPreviousStep`: Funciones para navegar entre pasos
- `isFirstStep`, `isLastStep`: Indicadores de posición en el flujo

## Consideraciones Adicionales

1. **Testing**: Después de cualquier modificación, asegúrate de probar completamente el flujo del formulario.
2. **Tipos de datos**: Si añades nuevos campos al formulario, actualiza también la interfaz `IFormData` en `useFormNavigation.ts`.
3. **Estilos**: Los estilos se manejan principalmente con Tailwind CSS, por lo que cualquier cambio visual puede requerir modificaciones de las clases CSS.
# migracion-
