import { CaseListOfMinor } from "./CaseListOfMinor";
import { MinorStayedMore } from "./MinorStayedMore";
import { StatusMigrationMinor } from "./StatusMigrationMinor";
import { Documentation } from "./Documentation";

export const STEPS = [
  {
    title: "¿Cuál es el estatus migratorio del menor?",
    description:
      "Elige el estatus del menor según su nacionalidad o residencia haciendo click en alguna de las opciones.",
    component: StatusMigrationMinor,
  },

  {
    title: "¿Cuál es tu situación?",
    description:
      "Selecciona el escenario que más se parece a tu caso para mostrarte solo la información que necesitas.",
    component: CaseListOfMinor,
  },
  {
    title: "Requisitos y pasos para tu caso",
    description:
      "Aplica cuando uno de los padres está en desacuerdo o no puede ser localizado para firmar el poder notarial. Se requiere la autorización del Tribunal de Niños, Niñas y Adolescentes.",
    component: Documentation,
  },
];

export const STEP_NOT_FOUND = {
  title: "No necesitas un permiso de salida en este caso!",
  description:
    "Según la normativa de la Dirección General de Migración, los menores con doble nacionalidad o extranjeros con residencia legal no necesitan una certificación de salida si han permanecido en el país por menos de seis (6) meses.",
  component: null,
};
