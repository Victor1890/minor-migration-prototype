import type { NodeRoute } from "./data-route";

export interface NavigationContext {
    title: string;
    description: string;
}

export interface NavigationContextMap {
    [key: string]: NavigationContext;
}

const TravelWithParentData: NavigationContext = {
    title: "¿Con quién viajará el menor?",
    description: "Elige la opción que mejor describa con quién saldrá del país el menor."
}

const MinorSixMonthsData: NavigationContext = {
    title: "¿El menor ha estado en el país más de 6 meses seguidos?",
    description: "Elige la opción que mejor describa el caso del menor."
}

const DifferentSituationCase: NavigationContext = {
    title: "¿Cuál de estas opciones describe mejor la situación del menor?",
    description: "Esto nos ayudará a determinar si el menor necesita permiso de viaje y qué documentos debes llevar."
}

export const NAVIGATION_CONTEXTS: NavigationContextMap = {
    // Modo inicial - nivel raíz
    "root": {
        title: "Selecciona estatus migratorio del menor",
        description: "Haz click en la opción que mejor represente el estatus migratorio del menor."
    },

    // Case 1
    "/el-menor-es-dominicano-y-no-posee-otra-nacionalidad": TravelWithParentData,
    "/el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-uno-de-los-padres": DifferentSituationCase,
    "/el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-un-tercero": DifferentSituationCase,
    "/el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-su-tutor-legal---tutores-legales": DifferentSituationCase,

    // Case 2
    "/el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero": MinorSixMonthsData,
    "/el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais": DifferentSituationCase,
    "/el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-no-ha-estado-mas-de-6-meses-en-el-pais": DifferentSituationCase,
    "/el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres": DifferentSituationCase,
    "/el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-un-tercero": DifferentSituationCase,
    "/el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-su-tutor-legal---tutores-legales": DifferentSituationCase,

    // Case 3
    "/el-menor-es-extranjero-con-residencia-en-la-republica-dominicana": MinorSixMonthsData,
    "/el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais": TravelWithParentData,
    "/el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres": DifferentSituationCase,
    "/el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-un-tercero": DifferentSituationCase,
    "/el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-su-tutor-legal---tutores-legales": DifferentSituationCase,

    // Case 4
    "/el-menor-tiene-estadia-temporal-como-estudiante-deportista-o-artista": MinorSixMonthsData,
    "/el-menor-tiene-estadia-temporal-como-estudiante-deportista-o-artista/el-menor-ha-estado-mas-de-6-meses-en-el-pais": DifferentSituationCase,

    // Case 5
    "/el-menor-es-hijo-a-de-personal-de-organismos-internacionales-acreditados-en-el-pais": DifferentSituationCase,

    "default": {
        title: "default",
        description: "default"
    }
}

export function getNavigationContext(
    slug: string,
    isRoot: boolean = false
): NavigationContext {

    slug = slug.startsWith("/") ? slug : `/${slug}`;

    if (isRoot || !slug) return NAVIGATION_CONTEXTS.root;

    const context = NAVIGATION_CONTEXTS[slug];

    return context || NAVIGATION_CONTEXTS.default;
}

export function isRootLevel(formDataSlug?: string, navigationStackLength: number = 0): boolean {
    return !formDataSlug || navigationStackLength === 0;
}

export type ViewComponentType = "not_required_permission" | "not_found" | "document"

interface ViewComponent {
    title: string;
    description: string;
    type: ViewComponentType;
}

export function getViewComponentByType(payload: NodeRoute): ViewComponent | null {

    if (Array.isArray(payload)) return null

    const type = payload?.type;

    if (!type) return null

    switch (type) {
        case "not_required_permission":
            return {
                title: "El menor no necesita permiso para salir del país",
                description:
                    "No te preocupes, no necesitas un permiso especial para este caso.",
                type,
            };
        case "not_found":
            return {
                title: "¿Tienes dudas o no ves el caso del menor entre las opciones?",
                description:
                    "¡No te preocupes! Podemos ayudarte a identificar la opción correcta o guiarte paso a paso si no estás seguro",
                type,
            }
        case "document":
            return {
                title: "Documentos obligatorios y pasos a seguir",
                description:
                    "Antes de iniciar tu solicitud, asegúrate de contar con todos los documentos necesarios y seguir el paso a paso para completar el proceso sin contratiempos",
                type
            }
        default:
            return null;
    }

}