import type { ReactNode } from "react";

interface StepToRequiredService {
  label: string;
  details:
    | {
        label: string | ReactNode;
        list: string[];
      }[]
    | string
    | string[];
}

export const STEP_TO_REQUIRED_SERVICE: StepToRequiredService[] = [
  {
    label: "Reúne todos los documentos obligatorios",
    details:
      "Asegúrate de tener todos los documentos vigentes, completos y organizados.(Pasaportes, acta de nacimiento, cédulas, fotos, poder notarial, entre otros).",
  },
  {
    label: "Entra al portal de servicios de Migración",
    details: [
      {
        label: (
          <>
            Ve a{" "}
            <a
              href="https://servicios.migracion.gob.do"
              target="_black"
              rel="noopener noreferrer"
            >
              https://servicios.migracion.gob.do
            </a>
            ,
          </>
        ),
        list: [
          "Crea una cuenta si no tienes.",
          "Elige el servicio “Permiso de menor” y completa el formulario con los datos solicitados.",
        ],
      },
    ],
  },
  {
    label: "Carga los documentos",
    details: [
      "Todos los documentos deben estar en formato JPG.",
      "Verifica que los nombres coincidan con los del formulario.",
    ],
  },
  {
    label: "Espera la validación de tu solicitud",
    details: [
      {
        label: "Migración revisará los documentos cargados.",
        list: [
          "Si falta algo, recibirás un correo para completar la solicitud.",
          "Si todo está correcto, te llegará una notificación para realizar el pago.",
        ],
      },
    ],
  },
  {
    label: "Realiza el pago del servicio",
    details: [
      {
        label: "Puedes pagar:",
        list: [
          "En línea, con tarjeta de crédito.",
          // "En línea, a través de la aplicación de Banreservas.",
          "En una sucursal de Banreservas.",
        ],
      },
      {
        label: "Tarifas:",
        list: [
          "RD$ 2,000 por el primer menor.",
          "RD$ 1,500 por cada menor adicional.",
        ],
      },
    ],
  },
  {
    label:
      "Preséntate en la oficina seleccionada con los documentos originales",
    details: [
      "Luego de 24 horas laborables desde que enviaste la solicitud, acude con todos los documentos originales y el comprobante de pago.",
      "Horario: lunes a viernes de 8:00 a.m. a 4:00 p.m. (hasta las 6:00 p.m. en temporada alta).",
    ],
  },
];
