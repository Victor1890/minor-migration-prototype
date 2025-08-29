import { ChildInternationalPersonnelIcon, DominicanFlagIcon, DominicanFlagWithWordIcon, FamilyTravelIcon, HelpQuestionIcon, SingleParentTravelIcon, StudentAthleteIcon, ThirdPartyAirlineTravelIcon, WordIcon } from "@/components/icons/v2";

export interface StatusMigrationMinor {
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    label?: string;
    description?: string;
}

export const LABEL_ICON_DETAILS: Record<string, StatusMigrationMinor> = {
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad": { // 1
        icon: DominicanFlagIcon,
        label: "Tiene nacionalidad dominicana únicamente",
    },
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y/o-reside-en-el-extranjero": { // 2
        icon: DominicanFlagWithWordIcon,
    },
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana": { // 3
        icon: WordIcon,
    },
    "el-menor-tiene-estadia-temporal-como-estudiante,-deportista-o-artista": { // 4
        icon: StudentAthleteIcon,
    },
    "el-menor-es-hijo/a-de-personal-de-organismos-internacionales-acreditados-en-el-pais": { // 5
        icon: ChildInternationalPersonnelIcon,
    },
    "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir": {
        icon: HelpQuestionIcon,
    },
    "viajara-con-ambos-padres": {
        icon: FamilyTravelIcon,
    },
    "viajara-con-uno-de-los-padres": {
        icon: SingleParentTravelIcon,
    },
    "viajara-con-un-tercero": {
        icon: ThirdPartyAirlineTravelIcon,
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