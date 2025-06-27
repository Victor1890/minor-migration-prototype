import { DominicanIcon, DominicanWordIcon, PeopleTravelIcon, PeopleTravelWordIcon, PersonIcon, QuestionIcon, SchoolIcon, WordDominicanIcon, WordInternationalIcon } from "@/components/icons";

interface StatusMigrationMinor {
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    label?: string;
    description: string;
}

export const LABEL_ICON_DETAILS: Record<string, StatusMigrationMinor> = {
    "menor-tiene-únicamente-nacionalidad-dominicana": {
        icon: DominicanIcon,
        description: "El menor tiene nacionalidad dominicana y no posee otra ciudadanía ni residencia en otro país"
    },
    "menor-dominicano-con-otra-nacionalidad-o-residencia-en-el-extranjero": {
        icon: DominicanWordIcon,
        description: "El menor tiene nacionalidad dominicana y también posee ciudadanía extranjera o una residencia legal en otro país"
    },
    "menor-es-extranjero-con-residencia-en-la-república-dominicana": {
        icon: WordDominicanIcon,
        description: "El menor tiene pasaporte extranjero, pero cuenta con residencia legal vigente en República Dominicana"
    },
    "menor-tiene-estatus-migratorio-de-no-residentes-(estudiantes,-deportistas,-artistas-y-estudiantes-de-intercambio)": {
        icon: SchoolIcon,
        description: "El menor se encuentra en RD por un período definido como estudiante, deportista, artista o en intercambio, sin residencia permanente"
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
        description: "El menor viaja con ambos padres, quienes tienen la patria potestad y autorización para viajar juntos"
    },
    "viaja-con-uno-de-los-padres": {
        icon: PersonIcon,
        description: "El menor viaja con uno de los padres, quien tiene la patria potestad y autorización para viajar solo con el menor"
    },
    "viaja-con-un-tercero": {
        icon: PeopleTravelWordIcon,
        description: "El menor viaja con un tercero, quien no es padre o madre, y necesita autorización de ambos padres o tutores"
    },
    "el-menor-ha-estado-más-de-6-meses-en-el-país": {
        label: "Si",
        description: "El menor tiene más de seis meses en República Dominicana desde su última entrada al país."
    },
    "el-menor-no-ha-estado-más-de-6-meses-en-el-país": {
        label: "No",
        description: "El menor tiene menos de seis meses en República Dominicana desde su última entrada al país."
    }
}
