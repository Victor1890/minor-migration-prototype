import { getNodeById } from "@/utils/array";

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
    "menor-tiene-únicamente-nacionalidad-dominicana": TravelWithParentData,
    "menor-dominicano-con-otra-nacionalidad-o-residencia-en-el-extranjero": MinorSixMonthsData,
    "menor-es-extranjero-con-residencia-en-la-república-dominicana": MinorSixMonthsData,
    "menor-tiene-estatus-migratorio-de-no-residentes-(estudiantes,-deportistas,-artistas-y-estudiantes-de-intercambio)": MinorSixMonthsData,
    "menores-hijo/as-de-personal-de-organismos-internacionales-acreditados-en-el-país": MinorSixMonthsData,
    "viaja-con-ambos-padres": DifferentSituationCase,
    "viaja-con-uno-de-los-padres": DifferentSituationCase,
    "viaja-con-un-tercero": DifferentSituationCase,

    "el-menor-ha-estado-más-de-6-meses-en-el-país": TravelWithParentData,
    "el-menor-no-ha-estado-más-de-6-meses-en-el-país": TravelWithParentData,
    "default": {
        title: "Selecciona una opción",
        description: "Elige la opción que mejor se adapte a tu situación."
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
