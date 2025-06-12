import { PeopleTravelIcon, PeopleTravelWordIcon, PersonIcon } from "@/components/icons";
// import { PeopleTravelIcon } from "@/components/icons/PeopleTravelIcon";

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
            title: "El menor viajara con ambos padres",
            slug: "both-parents",
            icon: PeopleTravelIcon,
            description: "El menor viajará junto a su madre y su padre."
        },
        {
            title: "El menor viajará con uno de los padres",
            slug: "one-parent-or-other-person",
            icon: PersonIcon,
            description: "El menor viajará solo con su madre, su padre, una persona distinta a sus padres o bajo la custodia de una aerolínea."
        },
        {
            title: "El menor viajará  con un tercero o una aerolínea",
            slug: "third-party",
            icon: PeopleTravelWordIcon,
            description: "El menor viajará bajo la custodia de una persona distinta a sus padres o bajo la custodia de una aerolínea."
        }
    ],
    "doble-nacionalidad-o-residencia-extranjero": [
        {
            title: "El menor viajará con uno de los padres",
            slug: "one-parent-or-other-person",
            icon: PersonIcon,
            description: "El menor viajará solo con su madre, su padre, una persona distinta a sus padres o bajo la custodia de una aerolínea."
        },
        {
            title: "El menor viajará  con un tercero o una aerolínea",
            slug: "third-party",
            icon: PeopleTravelWordIcon,
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
            title: "El menor viajará con uno de los padres",
            slug: "one-parent-or-other-person",
            icon: PersonIcon,
            description: "El menor viajará solo con su madre, su padre, una persona distinta a sus padres o bajo la custodia de una aerolínea."
        },
        {
            title: "El menor viajará  con un tercero o una aerolínea",
            slug: "third-party",
            icon: PeopleTravelWordIcon,
            description: "El menor viajará bajo la custodia de una persona distinta a sus padres o bajo la custodia de una aerolínea."
        },
    ]
}