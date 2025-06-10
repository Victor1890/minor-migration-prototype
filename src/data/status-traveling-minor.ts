import { BothParentIcon, PersonIcon } from "@/components/icons";

interface StatusTravelingMinor {
    title: string;
    slug: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    description: string;
}

type StatusTravelingMinorDataMap = {
    [key: string]: StatusTravelingMinor[]
}

export const STATUS_TRAVELING_MINOR: StatusTravelingMinorDataMap = {
    "nacionalidad-dominicana-unicamente": [
        {
            title: "Viaja con ambos padres",
            slug: "both-parents",
            icon: BothParentIcon,
            description: "El menor viajará junto a su madre y su padre."
        },
        {
            title: "Viaja con uno de los padres",
            slug: "one-parent-or-other-person",
            icon: PersonIcon,
            description: "El menor viajará solo con su madre, su padre, una persona distinta a sus padres o bajo la custodia de una aerolínea."
        },
        {
            title: "Viaja con un tercero",
            slug: "third-party",
            icon: PersonIcon,
            description: "El menor viajará bajo la custodia de una persona distinta a sus padres o bajo la custodia de una aerolínea."
        }
    ],
    "doble-nacionalidad-o-residencia-extranjero": [
        {
            title: "Viaja con uno de los padres",
            slug: "one-parent-or-other-person",
            icon: PersonIcon,
            description: "El menor viajará solo con su madre, su padre, una persona distinta a sus padres o bajo la custodia de una aerolínea."
        },
        {
            title: "Viaja con un tercero",
            slug: "third-party",
            icon: PersonIcon,
            description: "El menor viajará bajo la custodia de una persona distinta a sus padres o bajo la custodia de una aerolínea."
        },
        {
            title: "El menor no ha estado más de 6 meses en el país",
            slug: "less-than-6-months",
            icon: PersonIcon,
            description: "El menor ha permanecido en República Dominicana por menos de seis meses desde su última entrada."
        }
    ],
    "es-extranjero-residencia-republica-dominicana": [
        {
            title: "Viaja con uno de los padres",
            slug: "one-parent-or-other-person",
            icon: PersonIcon,
            description: "El menor viajará solo con su madre, su padre, una persona distinta a sus padres o bajo la custodia de una aerolínea."
        },
        {
            title: "Viaja con un tercero",
            slug: "third-party",
            icon: PersonIcon,
            description: "El menor viajará bajo la custodia de una persona distinta a sus padres o bajo la custodia de una aerolínea."
        },
    ]
}