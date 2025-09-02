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

    // Case 2
    "/el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y/o-reside-en-el-extranjero": MinorSixMonthsData,
    "/el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y/o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais": DifferentSituationCase,
    "/el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y/o-reside-en-el-extranjero/el-menor-no-ha-estado-mas-de-6-meses-en-el-pais": DifferentSituationCase,
    "/el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y/o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres": DifferentSituationCase,
    "/el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y/o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-un-tercero": DifferentSituationCase,

    // Case 3
    "/el-menor-es-extranjero-con-residencia-en-la-republica-dominicana": MinorSixMonthsData,
    "/el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais": TravelWithParentData,
    "/el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres": DifferentSituationCase,
    "/el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viaja-con-un-tercero": DifferentSituationCase,

    // Case 4
    "/el-menor-tiene-estadia-temporal-como-estudiante,-deportista-o-artista": MinorSixMonthsData,
    "/el-menor-tiene-estadia-temporal-como-estudiante,-deportista-o-artista/el-menor-ha-estado-mas-de-6-meses-en-el-pais": DifferentSituationCase,

    // Case 5
    "/el-menor-es-hijo/a-de-personal-de-organismos-internacionales-acreditados-en-el-pais": DifferentSituationCase,

    "default": {
        title: "default",
        description: "default"
    }
}

export function getNavigationContext(
    formDataSlug?: string,
    isRoot: boolean = false
): NavigationContext {
    if (isRoot || !formDataSlug) return NAVIGATION_CONTEXTS.root;

    const context = NAVIGATION_CONTEXTS[formDataSlug];

    return context || NAVIGATION_CONTEXTS.default;
}

export function isRootLevel(formDataSlug?: string, navigationStackLength: number = 0): boolean {
    return !formDataSlug || navigationStackLength === 0;
}
