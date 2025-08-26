import { DominicanIcon, DominicanWordIcon, PeopleTravelIcon, PeopleTravelWordIcon, PersonIcon, QuestionIcon, SchoolIcon, WordDominicanIcon, WordInternationalIcon } from "@/components/icons";

export interface StatusMigrationMinor {
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    label?: string;
    description: string;
}

export const LABEL_ICON_DETAILS: Record<string, StatusMigrationMinor> = {
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad": { // 1
        icon: DominicanIcon,
        label: "Tiene nacionalidad dominicana únicamente",
        description: "El menor tiene nacionalidad dominicana y no cuenta con otra nacionalidad ni residencia en otro país"
    },
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y/o-reside-en-el-extranjero": { // 2
        icon: DominicanWordIcon,
        label: 'Tiene doble nacionalidad o residencia en el extranjero',
        description: "El menor tiene nacionalidad dominicana y además cuenta con nacionalidad extranjera o residencia legal en otro país"
    },
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana": { // 3
        icon: WordDominicanIcon,
        label: "Es extranjero con residencia en República Dominicana",
        description: "El menor tiene pasaporte extranjero, pero cuenta con residencia legal vigente en República Dominicana"
    },
    "el-menor-tiene-estadia-temporal-como-estudiante,-deportista-o-artista": { // 4
        icon: SchoolIcon,
        label: "Tiene estadía temporal como estudiante, deportista o artista",
        description: "El menor está en República Dominicana por un tiempo limitado como estudiante, deportista, artista o sin residencia fija"
    },
    "el-menor-es-hijo/a-de-personal-de-organismos-internacionales-acreditados-en-el-pais": { // 5
        icon: WordInternationalIcon,
        label: "Es hijo de personal internacional acreditado en el país",
        description: "El menor es hijo de personal de un organismo internacional oficialmente acreditado en República Dominicana"
    },
    "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir": {
        icon: QuestionIcon,
        label: "No veo mi caso o tengo dudas",
        description: "Selecciona esta opción si no sabes cuál elegir o tu situación no está en la lista"
    },
    "viajara-con-ambos-padres": {
        icon: PeopleTravelIcon,
        label: "Viajará con su padre y madre",
        description: "El menor saldrá del país con ambos padres"
    },
    "viajara-con-uno-de-los-padres": {
        icon: PersonIcon,
        label: "Viajará con uno de los padres",
        description: "El menor saldrá del país solo con uno de los padres"
    },
    "viajara-con-un-tercero": {
        icon: PeopleTravelWordIcon,
        label: "Viajará con un tercero o una aerolínea",
        description: "El menor viajará con alguien que no es su padre ni su madre, o bajo cuidado del personal de la aerolínea"
    },
    "el-menor-ha-estado-mas-de-6-meses-en-el-pais": {
        label: "Sí",
        description: "El menor tiene más de seis meses en República Dominicana desde su última entrada al país"
    },
    "el-menor-no-ha-estado-mas-de-6-meses-en-el-pais": {
        label: "No",
        description: "El menor tiene menos de seis meses en República Dominicana desde su última entrada al país"
    }
}

// export const LABEL_DETAILT_NOT_FOUND: Record<string, Partial<StatusMigrationMinor>> = {
//     "menor-tiene-únicamente-nacionalidad-dominicana": {
//         label: "Tiene nacionalidad dominicana únicamente"
//     },
//     "menor-dominicano-con-otra-nacionalidad-o-residencia-en-el-extranjero": {
//         label: "Tiene doble nacionalidad o residencia en el extranjero"
//     },
//     "menor-es-extranjero-con-residencia-en-la-república-dominicana": {
//         label: "Es extranjero con residencia en República Dominicana"
//     },
//     "menor-tiene-estatus-migratorio-de-no-residente-(estudiante,-deportista,-artista-y-estudiante-de-intercambio)": {
//         label: "Tiene estadía temporal como estudiante, deportista o artista"
//     },
//     "menores-hijo/as-de-personal-de-organismos-internacionales-acreditados-en-el-país": {
//         label: "Es hijo de personal internacional acreditado en el país"
//     },
//     "tu-situacion-no-esta-en-la-lista-de-opciones": {
//         label: "No veo mi caso o tengo dudas"
//     },
//     "viaja-con-ambos-padres": {
//         label: "Viajará con su padre y madre"
//     },
//     "viaja-con-uno-de-los-padres": {
//         label: "Viajará con uno de los padres"
//     },
//     "viaja-con-un-tercero": {
//         label: "Viajará con un tercero o una aerolínea"
//     },
// }
