import { Info } from "lucide-react";

// Tipos de datos para documentación
interface RequiredDocument {
    title: string;
    details?: string[];
}

interface AdditionalNote {
    title: string;
    details: string[];
}

interface OnlineServiceStep {
    title: string;
    details?: string[];
    alert?: {
        title: string;
        details: string[];
        nestedDetails?: {
            title: string;
            items: string[];
        }[];
    };
    subDetails?: {
        title: string;
        items: string[];
    }[];
}

interface PresentialServiceStep {
    // Esta interfaz se implementará cuando se tenga información para el servicio presencial
    title: string;
    details?: string[];
}

interface DocumentationData {
    title: string;
    illustration: {
        src: string;
        alt: string;
    };
    requiredDocuments: RequiredDocument[];
    additionalNote: AdditionalNote;
    sections: {
        detailsOfProcess: {
            title: string;
            defaultValue: string;
        };
        onlineServiceSteps: {
            title: string;
            value: string;
            steps: OnlineServiceStep[];
        };
        presentialServiceSteps: {
            title: string;
            value: string;
            steps: PresentialServiceStep[];
        };
    };
}

// Datos de documentación
export const documentationData: DocumentationData = {
    title: "Documentos obligatorios",
    illustration: {
        src: "/document-01.jpg",
        alt: "Person reading documents illustration",
    },
    requiredDocuments: [
        {
            title: "Autorización judicial",
            details: [
                "Resolución emitida por el Tribunal de Niños, Niñas y Adolescentes, autorizando la salida del menor.",
                "Esta autorización suple la firma del padre o madre que no autoriza.",
                "Debe estar certificada y legalizada por la Procuraduría General de la República.",
            ],
        },
        {
            title: "Acta de nacimiento del menor",
            details: ["Versión reciente con código QR o número de evento."],
        },
        {
            title: "Copia o foto del pasaporte del menor",
            details: [
                "Una foto o copia de la página principal con los datos biométricos.",
            ],
        },
        {
            title: "Copia del pasaporte del acompañante",
            details: [
                "Solo si el menor viaja con un tercero. Debe incluir los datos biométricos (si es extranjero).",
            ],
        },
        {
            title: "Copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
            details: [
                "Solo si el menor viaja con un tercero. Debe incluir los datos biométricos (si es extranjero).",
            ],
        },
        {
            title: "Fotografía 2x2 del menor",
            details: ["De frente y reciente."],
        },
        {
            title: "Comprobante de pago",
            details: [
                "Puede realizarse en línea o presencial en BanReservas a nombre del padre, madre o tutor.",
            ],
        },
    ],
    additionalNote: {
        title: "Nota adicional",
        details: [
            "El permiso de salida tiene una vigencia de 90 días desde su emisión.",
            "La autorización judicial solo puede ser tramitada en República Dominicana.",
            "Si el menor tiene custodia exclusiva otorgada por sentencia, esta debe presentarse además del permiso judicial (si aplica).",
        ],
    },
    sections: {
        detailsOfProcess: {
            title: "Detalles del proceso",
            defaultValue: "details-of-process",
        },
        onlineServiceSteps: {
            title: "Pasos para solicitar el servicio en linea",
            value: "steps-to-request-service",
            steps: [
                {
                    title: "Obtener la autorización judicial",
                    details: [],
                    alert: {
                        title: "Este es el paso más importante y obligatorio para este caso.",
                        details: [
                            "Acudir a la Sala de Niños, Niñas y Adolescentes correspondiente al lugar de residencia del menor.",
                            "Presentar una solicitud formal explicando la situación (por qué no se cuenta con el otro padre).",
                            "Adjuntar documentación como:",
                        ],
                        nestedDetails: [
                            {
                                title: "",
                                items: [
                                    "Acta de nacimiento del menor.",
                                    "Identificación del padre o madre solicitante.",
                                    "Pruebas de la imposibilidad de contactar o del desacuerdo del otro progenitor (si aplica).",
                                ],
                            },
                        ],
                    },
                },
                {
                    title: "Digitalizar todos los documentos requeridos",
                    details: [
                        "Escanear todos los documentos en formato JPG.",
                        "Asegurar buena calidad de los documentos: pasaportes, cédulas, foto 2x2, etc.",
                    ],
                },
                {
                    title: "Realizar la solicitud en línea",
                    details: [
                        "Completar los formularios con los datos del menor, del padre/madre solicitante y del acompañante (si aplica).",
                        "Subir todos los documentos escaneados en formato JPG.",
                    ],
                },
                {
                    title: "Esperar validación de los documentos",
                    details: [
                        "Migración revisará la solicitud.",
                        "Si falta algún documento, recibirás un correo solicitando la corrección o cargo adicional.",
                    ],
                },
                {
                    title: "Realizar el pago",
                    details: [
                        "Una vez aprobados los documentos, recibirás una notificación para proceder al pago.",
                        "Opciones de pago:",
                    ],
                    subDetails: [
                        {
                            title: "",
                            items: [
                                "En línea (tarjeta de crédito).",
                                "En una sucursal de Banreservas.",
                                "Con tarjeta directamente en la oficina de certificaciones de la DGM.",
                            ],
                        },
                    ],
                },
                {
                    title: "Depositar los documentos originales en la oficina de Migración",
                    details: [
                        "Luego de 24 horas laborables desde la solicitud, debes presentarte con los documentos originales y el comprobante de pago en la oficina de certificaciones de la DGM a elegir al tramite.",
                    ],
                },
                {
                    title: "Retirar la certificación",
                    details: [
                        "La Certificación de Salida de Menor se entrega en un plazo de hasta 48 horas laborables si todo está en orden.",
                        "Esta documento debe ser presentado al momento de salir del país (aeropuerto, puerto o frontera).",
                    ],
                },
            ],
        },
        presentialServiceSteps: {
            title: "Pasos para solicitar el servicio de manera presencial",
            value: "steps-to-request-service-presential",
            steps: [], // Datos no proporcionados en el componente original
        },
    },
};

type DocumentationDataMap = {
    [key: string]: {
        [key: string]: {
            // [key: string]: RequiredDocument[];
            [key: string]: {
                required: RequiredDocument[];
                onlineServiceSteps: OnlineServiceStep[];
            }
        }
    }
};
