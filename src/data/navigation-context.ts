import { getNodeById } from "@/utils/array";

export interface NavigationContext {
    title: string;
    description: string;
}

export interface NavigationContextMap {
    [key: string]: NavigationContext;
}

const TravelWithParentData: NavigationContext = {
    title: "Selecciona quién viajará el menor",
    description: "Selecciona quien acompañará o será el responsable del menor al momento de viajar."
}

const MinorSixMonthsData: NavigationContext = {
    title: "¿El menor ha permanecido más de 6 meses en el país?",
    description: "Selecciona la opción que corresponda."
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

// Tipos de vistas especiales
export type SpecialView = "not_found" | "no_viable" | null;

// Configuración de rutas que deben mostrar vistas especiales
interface SpecialViewConfig {
    [key: string]: {
        view: SpecialView;
        match: "exact" | "includes" | "startsWith" | "endsWith";
        path: string | string[];
    };
}

const SPECIAL_VIEW_ROUTES: SpecialViewConfig = {
    "dominican_both_parents": {
        view: "not_found",
        match: "includes",
        path: ["viaja-con-ambos-padres"]
    },
    "dominican_not_nationality": {
        view: "not_found",
        match: "includes",
        path: ["el-menor-no-ha-estado-más-de-6-meses-en-el-país"]
    },
    "not_found": {
        view: "no_viable",
        match: "exact",
        path: ["tu-situacion-no-esta-en-la-lista-de-opciones"]
    }
};

export function getSpecialView(navigationPath: string[]): SpecialView {
    // Iterar sobre las configuraciones de vistas especiales
    for (const [_, config] of Object.entries(SPECIAL_VIEW_ROUTES)) {
        const { view, match, path } = config;

        switch (match) {
            case "exact":
                if (Array.isArray(path)) {
                    // Verificar que la ruta coincida exactamente
                    if (navigationPath.length >= path.length) {
                        const matches = path.every((slug, index) => navigationPath[index] === slug);
                        if (matches) return view;
                    }
                } else {
                    // Verificar que la ruta sea exactamente el slug especificado
                    if (navigationPath.length === 1 && navigationPath[0] === path) {
                        return view;
                    }
                }
                break;

            case "includes":
                if (Array.isArray(path)) {
                    // Verificar si la ruta incluye todos los slugs especificados
                    if (path.some(slug => typeof slug === "string" && navigationPath.includes(slug))) {
                        return view;
                    }
                }

                // Verificar si la ruta incluye el slug especificado
                if (typeof path === "string" && navigationPath.includes(path)) {
                    return view;
                }
                break;

            case "startsWith":
                // Verificar si la ruta empieza con el slug especificado
                if (typeof path === "string" && navigationPath.length > 0 && navigationPath[0] === path) {
                    return view;
                }
                break;

            case "endsWith":
                // Verificar si la ruta termina con el slug especificado
                if (typeof path === "string" && navigationPath.length > 0 && navigationPath[navigationPath.length - 1] === path) {
                    return view;
                }
                break;
        }
    }

    return null;
}

export function buildNavigationPath(
    navigationStack: string[],
    currentSlug?: string,
    dataDumb?: any[]
): string[] {
    const path: string[] = [];

    // Agregar slugs del navigation stack (convertir IDs a slugs si es necesario)
    navigationStack.forEach(id => {
        // Si dataDumb está disponible, buscar el slug correspondiente al ID
        if (dataDumb) {
            const node = getNodeById(dataDumb, id, 'slug');
            if (node?.slug) {
                path.push(node.slug);
            }
        }
    });

    // Agregar el slug actual si existe
    if (currentSlug) {
        path.push(currentSlug);
    }

    return path;
}
