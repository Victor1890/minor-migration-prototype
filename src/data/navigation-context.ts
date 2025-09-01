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
    title: "Selecciona la situación que mejor describe al menor",
    description: "Así sabrás si necesitas el permiso y qué documentos llevar."
}

export const NAVIGATION_CONTEXTS: NavigationContextMap = {
    // Modo inicial - nivel raíz
    "root": {
        title: "Selecciona estatus migratorio del menor",
        description: "Haz click en la opción que mejor represente el estatus migratorio del menor."
    },
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad": TravelWithParentData,
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y/o-reside-en-el-extranjero": MinorSixMonthsData,
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana": MinorSixMonthsData,
    "el-menor-tiene-estadia-temporal-como-estudiante,-deportista-o-artista": MinorSixMonthsData,
    "el-menor-es-hijo/a-de-personal-de-organismos-internacionales-acreditados-en-el-pais": MinorSixMonthsData,
    "viajara-con-ambos-padres": DifferentSituationCase,
    "viajara-con-uno-de-los-padres": DifferentSituationCase,
    "viajara-con-un-tercero": DifferentSituationCase,

    "el-menor-ha-estado-mas-de-6-meses-en-el-pais": TravelWithParentData,
    "el-menor-no-ha-estado-mas-de-6-meses-en-el-pais": TravelWithParentData,
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
