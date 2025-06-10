interface SpecialConditionPresentData {
    title: string;
    slug: string
    tooltip: string;
}

type SpecialConditionPresentDataMap = {
    [key: string]: {
        [key: string]: SpecialConditionPresentData[]
    }
}

export const SPECIAL_CONDITION_PRESENT_DATA: SpecialConditionPresentDataMap = {
    "nacionalidad-dominicana-unicamente": {
        "one-parent-or-other-person": [
            ...[
                "No tiene autorización de uno de los padres",
                "Tiene la guarda legal del menor",
                "Menor tiene un solo apellido (el del madre) y viaja con su madre",
                "Viaja con uno de sus padres y el otro ha fallecido",
                "Menor adoptado por personas extranjeras y viaja por primera vez",
                "Uno de los padres vive en el extranjero",
                "Ambos padres viven en el extranjero",
                "Tiene guarda legal y autorización de viaje del menor",
            ].map(x => ({
                title: x,
                slug: x.toLowerCase().replace(/ /g, "-"),
                tooltip: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }))
        ],
        "third-party": [
            ...[
                "Viaja con la aerolínea",
                "Viaja con el colegio, centro educativo o institución cultural",
                "Viaja con academia, selección o liga deportiva",
                "Viaja con la persona que posee la guarda custodia ",
                "Menor  tiene un solo apellido (materno) y  no viaja con su madre ",
                "Uno de los padres ha fallecido y no viaja con el padre/madre sobreviviente",
                "Viaja con una persona autorizada por el tutor legal ",
            ].map(x => ({
                title: x,
                slug: x.toLowerCase().replace(/ /g, "-"),
                tooltip: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }))
        ]
    },
    "doble-nacionalidad-o-residencia-extranjero": {
        "one-parent-or-other-person": [
            ...[
                "No  tiene la autorización de uno de los padres",
                "Tiene la guarda legal del menor ",
                "Menor tiene un solo apellido (el del madre) y viaja con su madre",
                "Viaja con uno de sus padres y el otro ha fallecido",
                "Menores adoptados por extranjeros que viajan por primera vez",
                "Uno de los padres vive en el extranjero",
                "Ambos padres vive en el extranjero",
                "Tiene guarda legal y autorización de viaje del menor",
            ].map(x => ({
                title: x,
                slug: x.toLowerCase().replace(/ /g, "-"),
                tooltip: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }))
        ],
        "third-party": [
            ...[
                "Viaja con la aerolínea",
                "Viaja con el colegio, centro educativo o institución cultural",
                "Viaja con academia, selección o liga deportiva",
                "Viaja con la persona que posee la guarda custodia ",
                "Menor  tiene un solo apellido (materno) y  no viaja con su madre ",
                "Uno de los padres ha fallecido y no viaja con el padre/madre sobreviviente",
                "Viaja con una persona autorizada por el tutor legal",
            ].map(x => ({
                title: x,
                slug: x.toLowerCase().replace(/ /g, "-"),
                tooltip: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }))
        ]
    },
    "es-extranjero-residencia-republica-dominicana": {
        "one-parent-or-other-person": [
            ...[
                "No tiene autorización de uno de los padres",
                "Tiene la guarda legal del menor",
                "Menor tiene un solo apellido (el del madre) y viaja con su madre",
                "Viaja con uno de sus padres y el otro ha fallecido",
                "Menor adoptado por personas extranjeras y viaja por primera vez",
                "Uno de los padres vive en el extranjero",
                "Ambos padres viven en el extranjero",
                "Tiene guarda legal y autorización de viaje del menor",
            ].map(x => ({
                title: x,
                slug: x.toLowerCase().replace(/ /g, "-"),
                tooltip: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }))
        ],
        "third-party": [
            ...[
                "Viaja con la aerolínea",
                "Viaja con el colegio, centro educativo o institución cultural",
                "Viaja con academia, selección o liga deportiva",
                "Viaja con la persona que posee la guarda custodia ",
                "Menor  tiene un solo apellido (materno) y  no viaja con su madre ",
                "Uno de los padres ha fallecido y no viaja con el padre/madre sobreviviente",
                "Viaja con una persona autorizada por el tutor legal",
            ].map(x => ({
                title: x,
                slug: x.toLowerCase().replace(/ /g, "-"),
                tooltip: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }))
        ]
    }
}