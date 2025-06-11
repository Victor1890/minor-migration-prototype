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
            {
                title: "No tiene autorización de uno de los padres",
                slug: "no-tiene-autorizacion-de-uno-de-los-padres",
                tooltip: "Cuando uno de los padres autoriza al otro a viajar con el menor"
            },
            {
                title: "Tiene la guarda legal del menor",
                slug: "tiene-la-guarda-legal-del-menor",
                tooltip: "Cuando el menor viaja con la persona que tiene la guarda legal de este"
            },
            {
                title: "Menor tiene un solo apellido (el del madre) y viaja con su madre",
                slug: "menor-tiene-un-solo-apellido-y-viaja-con-su-madre",
                tooltip: "Cuando el menor ha sido declarado solo por la madre y es ella quien le acompaña a viajar"
            },
            {
                title: "Viaja con uno de sus padres y el otro ha fallecido",
                slug: "viaja-con-uno-de-sus-padres-y-el-otro-ha-fallecido",
                tooltip: "Cuando el menor viaja acompañado por su único padre o madre que aún está vivo"
            },
            {
                title: "Menor adoptado por personas extranjeras y viaja por primera vez",
                slug: "menor-adoptado-por-personas-extranjeras-y-viaja-por-primera-vez",
                tooltip: "Cuando el menor viaja por primera vez luego de ser adoptado por personas extranjeras"
            },
            {
                title: "Uno de los padres vive en el extranjero",
                slug: "uno-de-los-padres-vive-en-el-extranjero",
                tooltip: "Cuando el menor viaja acompañado padre o madre que está en el país, y el padre en el extranjero es quien autoriza la salida del menor"
            },
            {
                title: "Tiene guarda legal y autorización de viaje del menor",
                slug: "tiene-guarda-legal-y-autorizacion-de-viaje-del-menor",
                tooltip: "Cuando el menor viaja con la persona que tiene la guarda legal con autorización de viaje"
            }
        ],
        "third-party": [
            {
                title: "Viaja con la aerolínea",
                slug: "viaja-con-la-aerolinea",
                tooltip: "Cuando el menor viaja con la Aerolínea y cuenta con la autorización de los padres, padre, madre o tutor legal"
            },
            {
                title: "Viaja con el colegio, centro educativo o institución cultural",
                slug: "viaja-con-el-colegio-centro-educativo-o-institucion-cultural",
                tooltip: "Cuando el menor viaja con  una academia, centro educativo o institución cultural, y cuenta con la autorización de los padres, padre, madre o tutor legal"
            },
            {
                title: "Viaja con academia, selección o liga deportiva",
                slug: "viaja-con-academia-seleccion-o-liga-deportiva",
                tooltip: "Cuando el menor viaja con una academia, selección o liga deportiva, y cuenta con la autorización de los padres, padre, madre o tutor legal"
            },
            {
                title: "Viaja con la persona que posee la guarda custodia",
                slug: "viaja-con-la-persona-que-posee-la-guarda-custodia",
                tooltip: "Cuando el menor viaja con la persona que tiene la guarda custodia del menor"
            },
            {
                title: "Menor  tiene un solo apellido (materno) y  no viaja con su madre",
                slug: "menor-tiene-un-solo-apellido-materno-y-no-viaja-con-su-madre",
                tooltip: "Cuando el menor ha sido declarado solo por la madre y no es ella quien le acompaña a viajar"
            },
            {
                title: "Uno de los padres ha fallecido y no viaja con el padre/madre sobreviviente",
                slug: "uno-de-los-padres-ha-fallecido-y-no-viaja-con-el-padre-madre-sobreviviente",
                tooltip: "Cuando el menor viaja acompañado por su único padre o madre que aún está vivo"
            },
            {
                title: "Viaja con una persona autorizada por el tutor legal",
                slug: "viaja-con-una-persona-autorizada-por-el-tutor-legal",
                tooltip: "Cuando el menor viaja con una persona distinta a sus padres o bajo la custodia de una aerolínea, pero cuenta con la autorización del tutor legal"
            },
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