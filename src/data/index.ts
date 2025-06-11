import { DominicanIcon, DominicanWordIcon, WordDominicanIcon, PlanetIcon, BothParentIcon, PersonIcon, ClockIcon, MoneyIcon, CalendarIcon, PresentationIcon } from "@/components/icons";

interface StatusMigrationMinor {
    title: string;
    slug: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    description: string;
}

export const STATUS_MIGRATION_MINOR: StatusMigrationMinor[] = [
    {
        title: "Menor tiene únicamente nacionalidad dominicana ",
        slug: "nacionalidad-dominicana-unicamente",
        icon: DominicanIcon,
        description: "El menor tiene nacionalidad dominicana y no posee otra ciudadanía ni residencia en otro país."
    },
    {
        title: "Menor tiene doble nacionalidad o residencia en el extranjero",
        slug: "doble-nacionalidad-o-residencia-extranjero",
        icon: DominicanWordIcon,
        description: "El menor tiene nacionalidad dominicana y también posee ciudadanía extranjera o una residencia legal en otro país."
    },
    {
        title: "Menor es extranjero con residencia en la República Dominicana",
        slug: "es-extranjero-residencia-republica-dominicana",
        icon: WordDominicanIcon,
        description: "El menor tiene pasaporte extranjero, pero cuenta con residencia legal vigente en República Dominicana."
    },
    {
        title: "Tiene estatus migratorio de no residente",
        slug: "estatus-migratorio-no-residente",
        icon: PlanetIcon,
        description: "El menor se encuentra en RD por un período definido como estudiante, deportista, artista o en intercambio, sin residencia permanente."
    },
    {
        title: "Hijo de personal internacional acreditado en el país",
        slug: "minor-children-international-organizations",
        icon: PlanetIcon,
        description: "El menor es hijo de personal de un organismo internacional oficialmente acreditado en República Dominicana."
    }
]



export const HAS_MINOR_STAYED_MORE_THAN_6_MONTHS = [
    {
        title: "Sí, ha estado más de 6 meses en el país",
        slug: "more-than-6-months",
        description: "El menor ha permanecido en República Dominicana por más de seis meses desde su última entrada.",
    },
    {
        title: "No, ha estado menos de 6 meses en el país",
        slug: "less-than-6-months",
        description: "El menor ha permanecido en República Dominicana por menos de seis meses desde su última entrada.",
    }
]

export const DETAILS_OF_PROCESS_DOCUMENTATION: Array<Omit<StatusMigrationMinor, 'description'> & { description: string | string[] }> = [
    {
        title: "Horario de prestación",
        slug: "horario-de-prestacion",
        description: "Lunes a viernes de 8:00 AM. a 4:00 PM.  (En verano y navidad el horario se extiende hasta las 6:00 PM. por el aumento de la demanda)",
        icon: ClockIcon
    },
    {
        title: "Costo",
        slug: "costo",
        description: [
            "Un menor – <strong>RD$ 2,000.00</strong>",
            "<br />",
            "Menores adicionales en el mismo documento (Hermanos) – <strong>RD$ 2,000.00 por el primer menor</strong> – <strong>RD$ 1,500.00 (cada menor adicional)</strong>"
        ],
        icon: MoneyIcon
    },
    {
        title: "Tiempo de realización",
        slug: "tiempo-de-realizacion",
        description: "48 Horas laborables. Después de haber depositado físicamente los documentos requeridos.( Si al evaluar el expediente y en el sistema está todo correcto )",
        icon: CalendarIcon
    },
    {
        title: "Canal de Prestación",
        slug: "canal-de-prestacion",
        description: [
            "En línea: Completa todo el proceso desde el portal web de Migración.",
            "<br />",
            "Presencial: Puedes realizar el proceso directamente en las oficinas de Migración."
        ],
        icon: PresentationIcon
    }
];
