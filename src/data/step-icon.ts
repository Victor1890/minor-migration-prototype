import { DominicanIcon, DominicanWordIcon, PeopleTravelIcon, PeopleTravelWordIcon, PersonIcon, QuestionIcon, SchoolIcon, WordDominicanIcon, WordInternationalIcon } from "@/components/icons";

interface StatusMigrationMinor {
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    label?: string;
    description: string;
}

export const LABEL_ICON_DETAILS: Record<string, StatusMigrationMinor> = {
    "menor-tiene-únicamente-nacionalidad-dominicana": {
        icon: DominicanIcon,
        description: "El menor tiene nacionalidad dominicana y no cuenta con otra nacionalidad ni residencia en otro país"
    },
    "menor-dominicano-con-otra-nacionalidad-o-residencia-en-el-extranjero": {
        icon: DominicanWordIcon,
        description: "El menor tiene nacionalidad dominicana y además cuenta con nacionalidad extranjera o residencia legal en otro país"
    },
    "menor-es-extranjero-con-residencia-en-la-república-dominicana": {
        icon: WordDominicanIcon,
        description: " El menor tiene pasaporte extranjero, pero cuenta con residencia legal vigente en República Dominicana"
    },
    "menor-tiene-estatus-migratorio-de-no-residentes-(estudiantes,-deportistas,-artistas-y-estudiantes-de-intercambio)": {
        icon: SchoolIcon,
        description: "El menor está en República Dominicana por un tiempo limitado como estudiante, deportista, artista o sin residencia fija"
    },
    "menores-hijo/as-de-personal-de-organismos-internacionales-acreditados-en-el-país": {
        icon: WordInternationalIcon,
        description: "El menor es hijo de personal de un organismo internacional oficialmente acreditado en República Dominicana"
    },
    "tu-situacion-no-esta-en-la-lista-de-opciones": {
        icon: QuestionIcon,
        description: "Selecciona esta opción si no estás seguro de qué opción elegir o tu situación no aparece entre las disponibles"
    },
    "viaja-con-ambos-padres": {
        icon: PeopleTravelIcon,
        label: "Viajará con su padre y madre",
        description: "El menor saldrá del país con ambos padres"
    },
    "viaja-con-uno-de-los-padres": {
        icon: PersonIcon,
        label: "Viajará con uno de los padres",
        description: "El menor saldrá del país solo con uno de los padres"
    },
    "viaja-con-un-tercero": {
        icon: PeopleTravelWordIcon,
        label: "Viajará con un tercero o una aerolínea",
        description: "El menor viajará con alguien que no es su padre ni su madre, o bajo cuidado del personal de la aerolínea"
    },
    "el-menor-ha-estado-más-de-6-meses-en-el-país": {
        label: "Si",
        description: "El menor tiene más de seis meses en República Dominicana desde su última entrada al país"
    },
    "el-menor-no-ha-estado-más-de-6-meses-en-el-país": {
        label: "No",
        description: "El menor tiene menos de seis meses en República Dominicana desde su última entrada al país"
    }
}

export const LABEL_DETAILT_NOT_FOUND: Record<string, Partial<StatusMigrationMinor>> = {
    "menor-tiene-únicamente-nacionalidad-dominicana": {
        label: "Tiene nacionalidad dominicana únicamente"
    },
    "menor-dominicano-con-otra-nacionalidad-o-residencia-en-el-extranjero": {
        label: "Tiene doble nacionalidad o residencia en el extranjero"
    },
    "menor-es-extranjero-con-residencia-en-la-república-dominicana": {
        label: "Es extranjero con residencia en República Dominicana"
    },
    "menor-tiene-estatus-migratorio-de-no-residentes-(estudiantes,-deportistas,-artistas-y-estudiantes-de-intercambio)": {
        label: "Tiene estadía temporal como estudiante, deportista o artista"
    },
    "menores-hijo/as-de-personal-de-organismos-internacionales-acreditados-en-el-país": {
        label: "Es hijo de personal internacional acreditado en el país"
    },
    "tu-situacion-no-esta-en-la-lista-de-opciones": {
        label: "No veo mi caso o tengo dudas"
    },
    "viaja-con-ambos-padres": {
        label: "Viajará con su padre y madre"
    },
    "viaja-con-uno-de-los-padres": {
        label: "Viajará con uno de los padres"
    },
    "viaja-con-un-tercero": {
        label: "Viajará con un tercero o una aerolínea"
    },
}
