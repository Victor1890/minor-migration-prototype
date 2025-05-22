import {
  DominicanIcon,
  DominicanWithCountryIcon,
  PlanetIcon,
} from "@/components/icons";

export const STATUS_MIGRATION_MINOR = [
  {
    title: "Es dominicano",
    slug: "dominicano",
    icon: DominicanIcon,
    description: "El menor solo tiene nacionalidad dominicana. ",
  },
  {
    title: "Tiene doble nacionalidad",
    slug: "doble-nacionalidad",
    icon: DominicanWithCountryIcon,
    description:
      "El menor tiene nacionalidad dominicana y de otro país. Puede tener dos pasaportes y utilizar cualquiera de ellos para viajar.",
  },
  {
    title: "Es residente extranjero",
    slug: "residente-extranjero",
    icon: PlanetIcon,
    description:
      "El menor tiene una nacionalidad extranjera y reside legalmente en el país con carnet de residencia.",
  },
];

export const HAS_MINOR_STAYED_MORE_THAN_6_MONTHS = [
  {
    title: "El menor lleva más de 6 meses en el país",
    slug: "more-than-6-months",
    description: "(Requiere permiso de salida para salir del país)",
  },
  {
    title: "El menor lleva menos de 6 meses en el país",
    slug: "less-than-6-months",
    description: "(No requiere permiso de salida según normas migratorias)",
  },
];

export const CASE_LIST = [
  {
    label: "No cuenta con la autorización del padre o la madre",
    description: "Padre ausente o sin autorización requiere permiso legal.",
    value: "sin-autorizacion",
  },
  {
    label: "Declarado por ambos padres",
    description: "Padre y madre declaran que el menor viaja con uno de ellos.",
    value: "declarado-por-ambos-padres",
  },
  {
    label: "Padres residen en el exterior",
    description: "Padres en el extranjero requieren autorización consular.",
    value: "padres-fuera-del-pais",
  },
  {
    label: "Padre o madre fallecidos y viaja con una tercera persona",
    description: "Padre o madre fallecidos requieren autorización legal.",
    value: "padre-o-madre-fallecidos",
  },
  {
    label: "Adoptados por extranjeros o nacionales",
    description:
      "Menores adoptados por extranjeros o nacionales requieren autorización legal.",
    value: "adoptados-por-extranjeros-o-nacionales",
  },
  {
    label: "Viaja con un tutor legal",
    description: "Menor que viaja con tutor legal requiere autorización legal.",
    value: "viaja-con-tutor-legal",
  },
  {
    label: "Viaja bajo la responsabilidad de la línea aérea u otro acompañante",
    description:
      "Menor que viaja bajo la responsabilidad de la línea aérea u otro acompañante requiere autorización legal.",
    value: "viaja-bajo-responsabilidad-linea-aerea",
  },
  {
    label: "Los menores acompañados de ambos padres",
    description:
      "Los menores acompañados de ambos padres no requieren autorización.",
    value: "menores-acompanados-de-ambos-padres",
  },
  {
    label:
      "Los menores declarados bajo filiación materna o paterna, que viajen en compañía de la madre o el padre",
    description:
      "Los menores con un solo apellido (filiación materna o paterna) que viajan en compañía de la madre o el padre no requieren autorización.",
    value: "menores-con-un-solo-apellido-filiacion-materna-o-padre",
  },
  {
    label:
      "Los menores con residencia legal en otro país y permanencia inferior a los 6 meses en la República Dominicana",
    description:
      "Los menores con residencia legal en otro país y permanencia inferior a los 6 meses en la República Dominicana y viajen hacia su país de residencia, no requieren autorización.",
    value: "menores-con-residencia-legal-en-otro-pais",
  },
  {
    label:
      "Los menores con doble nacionalidad y permanencia inferior a los 6 meses en República Dominicana",
    description:
      "Los menores con doble nacionalidad y permanencia inferior a los 6 meses en República Dominicana y viajen hacia el país de su otra nacionalidad, no requieren autorización.",
    value:
      "menores-con-doble-nacionalidad-y-permanencia-inferior-a-los-6-meses-en-republica-dominicana",
  },
  {
    label:
      "Con residencia legal en la República Dominicana viajando en compañía de ambos padres",
    description:
      "Los menores con residencia legal en la Republica Dominicana viajando en compañía de ambos padres no requieren autorización.",
    value:
      "menores-con-residencia-legal-en-republica-dominicana-viajando-en-compania-de-ambos-padres",
  },
];

export const CASE_LIST_NOT_ALLOWED = [
  "menores-acompanados-de-ambos-padres",
  "menores-con-un-solo-apellido-filiacion-materna-o-padre",
  "menores-con-residencia-legal-en-otro-pais",
  "menores-con-doble-nacionalidad-y-permanencia-inferior-a-los-6-meses-en-republica-dominicana",
  "menores-con-residencia-legal-en-republica-dominicana-viajando-en-compania-de-ambos-padres",
];
