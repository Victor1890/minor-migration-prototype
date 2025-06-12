interface RequiredDocument {
    title: string;
    details?: string[];
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

export const DOCUMENTATION_DATA: DocumentationDataMap = {
    "nacionalidad-dominicana-unicamente": {
        "one-parent-or-other-person": {
            "no-tiene-autorizacion-de-uno-de-los-padres": {
                required: [
                    {
                        title: "Poder Notarial del padre que no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría",
                        details: [
                            "El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.",
                            "Este poder debe ser legalizado en la Procuraduría General de la República o en PuntoGOB Sambil."
                        ],
                    },
                    {
                        title: "Foto o copia de acta de nacimiento original, con el código QR legible",
                        details: ["Versión reciente con código QR o número de evento."],
                    },
                    {
                        title: "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                    },
                    {
                        title: "Foto o copia de la cédula del otro padre que autoriza",
                    },
                    {
                        title: "Foto o copia de la visa / residencia del acompañante",
                        details: ["Si viaja a un país que requiera visa o residencia"]
                    },
                    {
                        title: "Foto o copia de la visa / residencia del menor",
                        details: [
                            "Si viaja a un país que requiera visa o residencia"
                        ]
                    },
                    {
                        title: "Foto o copia del pasaporte del acompañante",
                        details: ["De la página principal con los datos biométricos."]
                    },
                    {
                        title: "Foto o copia del pasaporte del menor",
                        details: ["De la página principal con los datos biométricos."]
                    },
                    {
                        title: "Foto 2x2 reciente del menor",
                        details: ["De frente y reciente."]
                    },
                    {
                        title: "Recibo de pago",
                        details: ["Puede realizarse en línea o presencial en BanReservas a nombre del padre, madre o tutor."]
                    }
                ],
                onlineServiceSteps: [
                    {
                        title: "Entrar al portal https://servicios.migracion.gob.do",
                    },
                    {
                        title: "Crear un usuario en el portal de migración",
                    },
                    {
                        title: "Completar los formularios con los datos del menor y del acompañante"
                    },
                    {
                        title: "Escanear todos los documentos requeridos",
                        details: [
                            "Escanear todos los documentos en formato JPG",
                            "Incluye: autorización judicial, acta de nacimiento, pasaportes, cédulas, foto 2x2, etc"
                        ]
                    },
                    {
                        title: "Cargar los documentos escaneados o fotos a la plataforma",
                    },
                    {
                        title: "Esperar validación de los documentos",
                        details: [
                            "Migración revisará la solicitud",
                            "Si falta algún documento, recibirás un correo solicitando la corrección o carga adicional"
                        ]
                    },
                    {
                        title: "Realizar el pago",
                        details: [
                            "Una vez aprobados los documentos, recibirás una notificación para proceder al pago",
                            "Puedes pagar:"
                        ],
                        subDetails: [
                            {
                                title: "",
                                items: [
                                    "En línea (tarjeta de crédito).",
                                    "En una sucursal de Banreservas.",
                                    "Con tarjeta directamente en la oficina de certificaciones de la DGM."
                                ]
                            }
                        ]
                    },
                    {
                        title: "Depositar los documentos originales en la oficina de Migración",
                        details: [
                            "Luego de 24 horas laborables desde la solicitud, debes presentarte con el poder notarial en físico, la foto 2x2 y el comprobante de pago en la oficina que seleccionaste al iniciar el trámite."
                        ]
                    },
                    {
                        title: "Descargar la certificación en la plataforma: https://servicios.migracion.gob.do",
                        details: [
                            "La Certificación de Salida del Menor se entrega en un plazo de hasta 48 horas laborables si todo está en orden",
                            "Este documento debe ser presentado al momento de salir del país (aeropuerto, puerto o frontera)."
                        ]
                    }
                ],
            },
            "tiene-la-guarda-legal-del-menor": {
                required: [
                    {
                        title: "Poder Notarial de los padres, autorizando la salida del menor del país con el guarda, legalizado por procuraduría",
                        details: [
                            "Ambos padres deben firmar el poder notarial autorizando la salida del menor",
                            "Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil"
                        ],
                    },
                    {
                        title: "Foto o copia de acta de nacimiento original, con el código QR legible",
                        details: ["Versión reciente con código QR o número de evento."],
                    },
                    {
                        title: "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                    },
                    {
                        title: "Foto o copia de la cédula del otro padre que autoriza",
                    },
                    {
                        title: "Foto o copia de la visa / residencia del acompañante",
                        details: ["Si viaja a un país que requiera visa o residencia"]
                    },
                    {
                        title: "Foto o copia de la visa / residencia del menor",
                        details: [
                            "Si viaja a un país que requiera visa o residencia"
                        ]
                    },
                    {
                        title: "Foto o copia del pasaporte del acompañante",
                        details: ["De la página principal con los datos biométricos."]
                    },
                    {
                        title: "Foto o copia del pasaporte del menor",
                        details: ["De la página principal con los datos biométricos."]
                    },
                    {
                        title: "Foto 2x2 reciente del menor",
                        details: ["De frente y reciente."]
                    },
                    {
                        title: "Recibo de pago",
                        details: ["Puede realizarse en línea o presencial en BanReservas a nombre del padre, madre o tutor."]
                    }
                ],
                onlineServiceSteps: [
                    {
                        title: "Entrar al portal https://servicios.migracion.gob.do",
                    },
                    {
                        title: "Crear un usuario en el portal de migración",
                    },
                    {
                        title: "Completar los formularios con los datos del menor y del acompañante"
                    },
                    {
                        title: "Escanear todos los documentos requeridos",
                        details: [
                            "Escanear todos los documentos en formato JPG",
                            "Incluye: autorización judicial, acta de nacimiento, pasaportes, cédulas, foto 2x2, etc"
                        ]
                    },
                    {
                        title: "Cargar los documentos escaneados o fotos a la plataforma",
                    },
                    {
                        title: "Esperar validación de los documentos",
                        details: [
                            "Migración revisará la solicitud",
                            "Si falta algún documento, recibirás un correo solicitando la corrección o carga adicional"
                        ]
                    },
                    {
                        title: "Realizar el pago",
                        details: [
                            "Una vez aprobados los documentos, recibirás una notificación para proceder al pago",
                            "Puedes pagar:"
                        ],
                        subDetails: [
                            {
                                title: "",
                                items: [
                                    "En línea (tarjeta de crédito).",
                                    "En una sucursal de Banreservas.",
                                    "Con tarjeta directamente en la oficina de certificaciones de la DGM."
                                ]
                            }
                        ]
                    },
                    {
                        title: "Depositar los documentos originales en la oficina de Migración",
                        details: [
                            "Luego de 24 horas laborables desde la solicitud, debes presentarte con el poder notarial en físico, la foto 2x2 y el comprobante de pago en la oficina que seleccionaste al iniciar el trámite."
                        ]
                    },
                    {
                        title: "Descargar la certificación en la plataforma: https://servicios.migracion.gob.do",
                        details: [
                            "La Certificación de Salida del Menor se entrega en un plazo de hasta 48 horas laborables si todo está en orden",
                            "Este documento debe ser presentado al momento de salir del país (aeropuerto, puerto o frontera)."
                        ]
                    }
                ],
            },
            "menor-adoptado-por-personas-extranjeras-y-viaja-por-primera-vez": {
                required: [
                    {
                        title: "Sentencia del tribunal  de niños, niñas y adolescentes que evidencie la adopción",
                        details: [
                            "Ir al tribunal de niños, niñas y adolescentes",
                            "Solicitar la sentencia donde se les otorga la adopción"
                        ],
                    },
                    {
                        title: "Foto o copia de acta de nacimiento original, con el código QR legible",
                        details: ["Versión reciente con código QR o número de evento."],
                    },
                    {
                        title: "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                    },
                    {
                        title: "Foto o copia de la cédula del otro padre que autoriza",
                    },
                    {
                        title: "Foto o copia de la visa / residencia del acompañante",
                        details: ["Si viaja a un país que requiera visa o residencia"]
                    },
                    {
                        title: "Foto o copia de la visa / residencia del menor",
                        details: [
                            "Si viaja a un país que requiera visa o residencia"
                        ]
                    },
                    {
                        title: "Foto o copia del pasaporte del acompañante",
                        details: ["De la página principal con los datos biométricos."]
                    },
                    {
                        title: "Foto o copia del pasaporte del menor",
                        details: ["De la página principal con los datos biométricos."]
                    },
                    {
                        title: "Foto 2x2 reciente del menor",
                        details: ["De frente y reciente."]
                    },
                    {
                        title: "Recibo de pago",
                        details: ["Puede realizarse en línea o presencial en BanReservas a nombre del padre, madre o tutor."]
                    }
                ],
                onlineServiceSteps: [
                    {
                        title: "Entrar al portal https://servicios.migracion.gob.do",
                    },
                    {
                        title: "Crear un usuario en el portal de migración",
                    },
                    {
                        title: "Completar los formularios con los datos del menor y del acompañante"
                    },
                    {
                        title: "Escanear todos los documentos requeridos",
                        details: [
                            "Escanear todos los documentos en formato JPG",
                            "Incluye: autorización judicial, acta de nacimiento, pasaportes, cédulas, foto 2x2, etc"
                        ]
                    },
                    {
                        title: "Cargar los documentos escaneados o fotos a la plataforma",
                    },
                    {
                        title: "Esperar validación de los documentos",
                        details: [
                            "Migración revisará la solicitud",
                            "Si falta algún documento, recibirás un correo solicitando la corrección o carga adicional"
                        ]
                    },
                    {
                        title: "Realizar el pago",
                        details: [
                            "Una vez aprobados los documentos, recibirás una notificación para proceder al pago",
                            "Puedes pagar:"
                        ],
                        subDetails: [
                            {
                                title: "",
                                items: [
                                    "En línea (tarjeta de crédito).",
                                    "En una sucursal de Banreservas.",
                                    "Con tarjeta directamente en la oficina de certificaciones de la DGM."
                                ]
                            }
                        ]
                    },
                    {
                        title: "Depositar los documentos originales en la oficina de Migración",
                        details: [
                            "Luego de 24 horas laborables desde la solicitud, debes presentarte con el poder notarial en físico, la foto 2x2 y el comprobante de pago en la oficina que seleccionaste al iniciar el trámite."
                        ]
                    },
                    {
                        title: "Descargar la certificación en la plataforma: https://servicios.migracion.gob.do",
                        details: [
                            "La Certificación de Salida del Menor se entrega en un plazo de hasta 48 horas laborables si todo está en orden",
                            "Este documento debe ser presentado al momento de salir del país (aeropuerto, puerto o frontera)."
                        ]
                    }
                ],
            },
            "uno-de-los-padres-vive-en-el-extranjero": {
                required: [
                    {
                        title: "Poder consular de la embajada, consulado o representación del país en donde se encuentra el padre (debe ser apostillado y sellado en cancilleria) o Poder Notarial del país donde se encuentre el padre en  original apostilla de la Haya",
                        details: [
                            "El padre en el extranjero debe firmar el poder consular (en el consulado más cercana) autorizando la salida del menor",
                            "Este poder debe ser legalizado en el Ministerio de Relaciones Exteriores de la República Dominicana"
                        ],
                    },
                    {
                        title: "Foto o copia de acta de nacimiento original, con el código QR legible",
                        details: ["Versión reciente con código QR o número de evento."],
                    },
                    {
                        title: "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                    },
                    {
                        title: "Foto o copia de la cédula del otro padre que autoriza",
                    },
                    {
                        title: "Foto o copia de la visa / residencia del acompañante",
                        details: ["Si viaja a un país que requiera visa o residencia"]
                    },
                    {
                        title: "Foto o copia de la visa / residencia del menor",
                        details: [
                            "Si viaja a un país que requiera visa o residencia"
                        ]
                    },
                    {
                        title: "Foto o copia del pasaporte del acompañante",
                        details: ["De la página principal con los datos biométricos."]
                    },
                    {
                        title: "Foto o copia del pasaporte del menor",
                        details: ["De la página principal con los datos biométricos."]
                    },
                    {
                        title: "Foto 2x2 reciente del menor",
                        details: ["De frente y reciente."]
                    },
                    {
                        title: "Recibo de pago",
                        details: ["Puede realizarse en línea o presencial en BanReservas a nombre del padre, madre o tutor."]
                    }
                ],
                onlineServiceSteps: [
                    {
                        title: "Entrar al portal https://servicios.migracion.gob.do",
                    },
                    {
                        title: "Crear un usuario en el portal de migración",
                    },
                    {
                        title: "Completar los formularios con los datos del menor y del acompañante"
                    },
                    {
                        title: "Escanear todos los documentos requeridos",
                        details: [
                            "Escanear todos los documentos en formato JPG",
                            "Incluye: poder consular o notarial, acta de nacimiento, pasaportes, cédulas, foto 2x2, etc"
                        ]
                    },
                    {
                        title: "Cargar los documentos escaneados o fotos a la plataforma",
                    },
                    {
                        title: "Esperar validación de los documentos",
                        details: [
                            "Migración revisará la solicitud",
                            "Si falta algún documento, recibirás un correo solicitando la corrección o carga adicional"
                        ]
                    },
                    {
                        title: "Realizar el pago",
                        details: [
                            "Una vez aprobados los documentos, recibirás una notificación para proceder al pago",
                            "Puedes pagar:"
                        ],
                        subDetails: [
                            {
                                title: "",
                                items: [
                                    "En línea (tarjeta de crédito).",
                                    "En una sucursal de Banreservas.",
                                    "Con tarjeta directamente en la oficina de certificaciones de la DGM."
                                ]
                            }
                        ]
                    },
                    {
                        title: "Depositar los documentos originales en la oficina de Migración",
                        details: [
                            "Luego de 24 horas laborables desde la solicitud, debes presentarte con el poder notarial en físico, la foto 2x2 y el comprobante de pago en la oficina que seleccionaste al iniciar el trámite."
                        ]
                    },
                    {
                        title: "Descargar la certificación en la plataforma: https://servicios.migracion.gob.do",
                        details: [
                            "La Certificación de Salida del Menor se entrega en un plazo de hasta 48 horas laborables si todo está en orden",
                            "Este documento debe ser presentado al momento de salir del país (aeropuerto, puerto o frontera)."
                        ]
                    }
                ],
            },
            "tiene-guarda-legal-y-autorizacion-de-viaje-del-menor": {
                required: [
                    {
                        title: "Sentencia Judicial que otorga la guarda legal y autorización de viaje del menor",
                        details: [
                            "Ir al tribunal de niños, niñas y adolescentes",
                            "Solicitar la sentencia donde se les otorga la Guarda Legal y Autorización de viaje del menor"
                        ],
                    },
                    {
                        title: "Foto o copia de acta de nacimiento original, con el código QR legible",
                        details: ["Versión reciente con código QR o número de evento."],
                    },
                    {
                        title: "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                    },
                    {
                        title: "Foto o copia de la cédula del otro padre que autoriza",
                    },
                    {
                        title: "Foto o copia de la visa / residencia del acompañante",
                        details: ["Si viaja a un país que requiera visa o residencia"]
                    },
                    {
                        title: "Foto o copia de la visa / residencia del menor",
                        details: [
                            "Si viaja a un país que requiera visa o residencia"
                        ]
                    },
                    {
                        title: "Foto o copia del pasaporte del acompañante",
                        details: ["De la página principal con los datos biométricos."]
                    },
                    {
                        title: "Foto o copia del pasaporte del menor",
                        details: ["De la página principal con los datos biométricos."]
                    },
                    {
                        title: "Foto 2x2 reciente del menor",
                        details: ["De frente y reciente."]
                    },
                    {
                        title: "Recibo de pago",
                        details: ["Puede realizarse en línea o presencial en BanReservas a nombre del padre, madre o tutor."]
                    }
                ],
                onlineServiceSteps: [
                    {
                        title: "Entrar al portal https://servicios.migracion.gob.do",
                    },
                    {
                        title: "Crear un usuario en el portal de migración",
                    },
                    {
                        title: "Completar los formularios con los datos del menor y del acompañante"
                    },
                    {
                        title: "Escanear todos los documentos requeridos",
                        details: [
                            "Escanear todos los documentos en formato JPG",
                            "Incluye: sentencia judicial, acta de nacimiento, pasaportes, cédulas, foto 2x2, etc"
                        ]
                    },
                    {
                        title: "Cargar los documentos escaneados o fotos a la plataforma",
                    },
                    {
                        title: "Esperar validación de los documentos",
                        details: [
                            "Migración revisará la solicitud",
                            "Si falta algún documento, recibirás un correo solicitando la corrección o carga adicional"
                        ]
                    },
                    {
                        title: "Realizar el pago",
                        details: [
                            "Una vez aprobados los documentos, recibirás una notificación para proceder al pago",
                            "Puedes pagar:"
                        ],
                        subDetails: [
                            {
                                title: "",
                                items: [
                                    "En línea (tarjeta de crédito).",
                                    "En una sucursal de Banreservas.",
                                    "Con tarjeta directamente en la oficina de certificaciones de la DGM."
                                ]
                            }
                        ]
                    },
                    {
                        title: "Depositar los documentos originales en la oficina de Migración",
                        details: [
                            "Luego de 24 horas laborables desde la solicitud, debes presentarte con el poder notarial en físico, la foto 2x2 y el comprobante de pago en la oficina que seleccionaste al iniciar el trámite."
                        ]
                    },
                    {
                        title: "Descargar la certificación en la plataforma: https://servicios.migracion.gob.do",
                        details: [
                            "La Certificación de Salida del Menor se entrega en un plazo de hasta 48 horas laborables si todo está en orden",
                            "Este documento debe ser presentado al momento de salir del país (aeropuerto, puerto o frontera)."
                        ]
                    }
                ],
            }
        },
        "third-party": {
            "viaja-con-la-aerolinea": {
                required: [
                    {
                        title: "Poder Notarial de ambos padres, padre, madre o tutor legal autorizando la salida del menor del país con la aerolínea, legalizado por procuraduría",
                        details: [
                            "El padre que no viaja debe firmar el poder notarial autorizando la salida del menor",
                            "Este poder debe ser legalizado en la Procuraduría General de la República o en PuntoGOB Sambil"
                        ],
                    },
                    {
                        title: "Foto o copia de acta de nacimiento original, con el código QR legible",
                        details: ["Versión reciente con código QR o número de evento."],
                    },
                    {
                        title: "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                    },
                    {
                        title: "Foto o copia de la cédula del otro padre que autoriza",
                    },
                    {
                        title: "Foto o copia de la visa / residencia del acompañante",
                        details: ["Si viaja a un país que requiera visa o residencia"]
                    },
                    {
                        title: "Foto o copia de la visa / residencia del menor",
                        details: [
                            "Si viaja a un país que requiera visa o residencia"
                        ]
                    },
                    {
                        title: "Foto o copia del pasaporte del acompañante",
                        details: ["De la página principal con los datos biométricos."]
                    },
                    {
                        title: "Foto o copia del pasaporte del menor",
                        details: ["De la página principal con los datos biométricos."]
                    },
                    {
                        title: "Foto 2x2 reciente del menor",
                        details: ["De frente y reciente."]
                    },
                    {
                        title: "Recibo de pago",
                        details: ["Puede realizarse en línea o presencial en BanReservas a nombre del padre, madre o tutor."]
                    }
                ],
                onlineServiceSteps: [
                    {
                        title: "Entrar al portal https://servicios.migracion.gob.do",
                    },
                    {
                        title: "Crear un usuario en el portal de migración",
                    },
                    {
                        title: "Completar los formularios con los datos del menor y del acompañante"
                    },
                    {
                        title: "Escanear todos los documentos requeridos",
                        details: [
                            "Escanear todos los documentos en formato JPG",
                            "Incluye: poder notarial, acta de nacimiento, pasaportes, cédulas, foto 2x2, etc"
                        ]
                    },
                    {
                        title: "Cargar los documentos escaneados o fotos a la plataforma",
                    },
                    {
                        title: "Esperar validación de los documentos",
                        details: [
                            "Migración revisará la solicitud",
                            "Si falta algún documento, recibirás un correo solicitando la corrección o carga adicional"
                        ]
                    },
                    {
                        title: "Realizar el pago",
                        details: [
                            "Una vez aprobados los documentos, recibirás una notificación para proceder al pago",
                            "Puedes pagar:"
                        ],
                        subDetails: [
                            {
                                title: "",
                                items: [
                                    "En línea (tarjeta de crédito).",
                                    "En una sucursal de Banreservas.",
                                    "Con tarjeta directamente en la oficina de certificaciones de la DGM."
                                ]
                            }
                        ]
                    },
                    {
                        title: "Depositar los documentos originales en la oficina de Migración",
                        details: [
                            "Luego de 24 horas laborables desde la solicitud, debes presentarte con el poder notarial en físico, la foto 2x2 y el comprobante de pago en la oficina que seleccionaste al iniciar el trámite."
                        ]
                    },
                    {
                        title: "Descargar la certificación en la plataforma: https://servicios.migracion.gob.do",
                        details: [
                            "La Certificación de Salida del Menor se entrega en un plazo de hasta 48 horas laborables si todo está en orden",
                            "Este documento debe ser presentado al momento de salir del país (aeropuerto, puerto o frontera)."
                        ]
                    }
                ],
            },
            "viaja-con-el-colegio-centro-educativo-o-institucion-cultural": {
                required: [
                    {
                        title: "Poder Notarial de los padres, autorizando la salida del menor del país con el centro educativo, legalizado por procuraduría",
                        details: [
                            "Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerolínea",
                            "Este poder debe ser legalizado en la Procuraduría General de la República",
                            "Los padres de todos los menores pueden hacer un solo poder notarial, donde estén las firmas de todos los padres que autorizan la salida de los menores."
                        ],
                    },
                    {
                        title: "Foto o copia de acta de nacimiento original, con el código QR legible",
                        details: ["Versión reciente con código QR o número de evento."],
                    },
                    {
                        title: "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                    },
                    {
                        title: "Foto o copia de la cédula del otro padre que autoriza",
                    },
                    {
                        title: "Foto o copia de la visa / residencia del acompañante",
                        details: ["Si viaja a un país que requiera visa o residencia"]
                    },
                    {
                        title: "Foto o copia de la visa / residencia del menor",
                        details: [
                            "Si viaja a un país que requiera visa o residencia"
                        ]
                    },
                    {
                        title: "Foto o copia del pasaporte del acompañante",
                        details: ["De la página principal con los datos biométricos."]
                    },
                    {
                        title: "Foto o copia del pasaporte del menor",
                        details: ["De la página principal con los datos biométricos."]
                    },
                    {
                        title: "Foto 2x2 reciente del menor",
                        details: ["De frente y reciente."]
                    },
                    {
                        title: "Recibo de pago",
                        details: ["Puede realizarse en línea o presencial en BanReservas a nombre del padre, madre o tutor."]
                    }
                ],
                onlineServiceSteps: [
                    {
                        title: "Entrar al portal https://servicios.migracion.gob.do",
                    },
                    {
                        title: "Crear un usuario en el portal de migración",
                    },
                    {
                        title: "Completar los formularios con los datos del menor y del acompañante"
                    },
                    {
                        title: "Escanear todos los documentos requeridos",
                        details: [
                            "Escanear todos los documentos en formato JPG",
                            "Incluye: poder notarial, acta de nacimiento, pasaportes, cédulas, foto 2x2, etc"
                        ]
                    },
                    {
                        title: "Cargar los documentos escaneados o fotos a la plataforma",
                    },
                    {
                        title: "Esperar validación de los documentos",
                        details: [
                            "Migración revisará la solicitud",
                            "Si falta algún documento, recibirás un correo solicitando la corrección o carga adicional"
                        ]
                    },
                    {
                        title: "Realizar el pago",
                        details: [
                            "Una vez aprobados los documentos, recibirás una notificación para proceder al pago",
                            "Puedes pagar:"
                        ],
                        subDetails: [
                            {
                                title: "",
                                items: [
                                    "En línea (tarjeta de crédito).",
                                    "En una sucursal de Banreservas.",
                                    "Con tarjeta directamente en la oficina de certificaciones de la DGM."
                                ]
                            }
                        ]
                    },
                    {
                        title: "Depositar los documentos originales en la oficina de Migración",
                        details: [
                            "Luego de 24 horas laborables desde la solicitud, debes presentarte con el poder notarial en físico, la foto 2x2 y el comprobante de pago en la oficina que seleccionaste al iniciar el trámite."
                        ]
                    },
                    {
                        title: "Descargar la certificación en la plataforma: https://servicios.migracion.gob.do",
                        details: [
                            "La Certificación de Salida del Menor se entrega en un plazo de hasta 48 horas laborables si todo está en orden",
                            "Este documento debe ser presentado al momento de salir del país (aeropuerto, puerto o frontera)."
                        ]
                    }
                ],
            },
            "viaja-con-academia-seleccion-o-liga-deportiva": {
                required: [
                    {
                        title: "Poder Notarial de los padres, autorizando la salida del menor del país con la academia deportiva, legalizado por procuraduría",
                        details: [
                            "Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerolínea",
                            "Este poder debe ser legalizado en la Procuraduría General de la República",
                            "Los padres de todos los menores pueden hacer un solo poder notarial, donde estén las firmas de todos los padres que autorizan la salida de los menores."
                        ],
                    },
                    {
                        title: "Foto o copia de acta de nacimiento original, con el código QR legible",
                        details: ["Versión reciente con código QR o número de evento."],
                    },
                    {
                        title: "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                    },
                    {
                        title: "Foto o copia de la cédula del otro padre que autoriza",
                    },
                    {
                        title: "Foto o copia de la visa / residencia del acompañante",
                        details: ["Si viaja a un país que requiera visa o residencia"]
                    },
                    {
                        title: "Foto o copia de la visa / residencia del menor",
                        details: [
                            "Si viaja a un país que requiera visa o residencia"
                        ]
                    },
                    {
                        title: "Foto o copia del pasaporte del acompañante",
                        details: ["De la página principal con los datos biométricos."]
                    },
                    {
                        title: "Foto o copia del pasaporte del menor",
                        details: ["De la página principal con los datos biométricos."]
                    },
                    {
                        title: "Foto 2x2 reciente del menor",
                        details: ["De frente y reciente."]
                    },
                    {
                        title: "Recibo de pago",
                        details: ["Puede realizarse en línea o presencial en BanReservas a nombre del padre, madre o tutor."]
                    }
                ],
                onlineServiceSteps: [
                    {
                        title: "Entrar al portal https://servicios.migracion.gob.do",
                    },
                    {
                        title: "Crear un usuario en el portal de migración",
                    },
                    {
                        title: "Completar los formularios con los datos del menor y del acompañante"
                    },
                    {
                        title: "Escanear todos los documentos requeridos",
                        details: [
                            "Escanear todos los documentos en formato JPG",
                            "Incluye: poder notarial, acta de nacimiento, pasaportes, cédulas, foto 2x2, etc"
                        ]
                    },
                    {
                        title: "Cargar los documentos escaneados o fotos a la plataforma",
                    },
                    {
                        title: "Esperar validación de los documentos",
                        details: [
                            "Migración revisará la solicitud",
                            "Si falta algún documento, recibirás un correo solicitando la corrección o carga adicional"
                        ]
                    },
                    {
                        title: "Realizar el pago",
                        details: [
                            "Una vez aprobados los documentos, recibirás una notificación para proceder al pago",
                            "Puedes pagar:"
                        ],
                        subDetails: [
                            {
                                title: "",
                                items: [
                                    "En línea (tarjeta de crédito).",
                                    "En una sucursal de Banreservas.",
                                    "Con tarjeta directamente en la oficina de certificaciones de la DGM."
                                ]
                            }
                        ]
                    },
                    {
                        title: "Depositar los documentos originales en la oficina de Migración",
                        details: [
                            "Luego de 24 horas laborables desde la solicitud, debes presentarte con el poder notarial en físico, la foto 2x2 y el comprobante de pago en la oficina que seleccionaste al iniciar el trámite."
                        ]
                    },
                    {
                        title: "Descargar la certificación en la plataforma: https://servicios.migracion.gob.do",
                        details: [
                            "La Certificación de Salida del Menor se entrega en un plazo de hasta 48 horas laborables si todo está en orden",
                            "Este documento debe ser presentado al momento de salir del país (aeropuerto, puerto o frontera)."
                        ]
                    }
                ],
            },
            "viaja-con-la-persona-que-posee-la-guarda-custodia": {
                required: [
                    {
                        title: "Poder Notarial de los padres, autorizando la salida del menor del país con la academia deportiva, legalizado por procuraduría",
                        details: [
                            "Ambos padres deben firmar el poder notarial autorizando la salida del menor",
                            "Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil"
                        ],
                    },
                    {
                        title: "Foto o copia de acta de nacimiento original, con el código QR legible",
                        details: ["Versión reciente con código QR o número de evento."],
                    },
                    {
                        title: "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                    },
                    {
                        title: "Foto o copia de la cédula del otro padre que autoriza",
                    },
                    {
                        title: "Foto o copia de la visa / residencia del acompañante",
                        details: ["Si viaja a un país que requiera visa o residencia"]
                    },
                    {
                        title: "Foto o copia de la visa / residencia del menor",
                        details: [
                            "Si viaja a un país que requiera visa o residencia"
                        ]
                    },
                    {
                        title: "Foto o copia del pasaporte del acompañante",
                        details: ["De la página principal con los datos biométricos."]
                    },
                    {
                        title: "Foto o copia del pasaporte del menor",
                        details: ["De la página principal con los datos biométricos."]
                    },
                    {
                        title: "Foto 2x2 reciente del menor",
                        details: ["De frente y reciente."]
                    },
                    {
                        title: "Recibo de pago",
                        details: ["Puede realizarse en línea o presencial en BanReservas a nombre del padre, madre o tutor."]
                    }
                ],
                onlineServiceSteps: [
                    {
                        title: "Entrar al portal https://servicios.migracion.gob.do",
                    },
                    {
                        title: "Crear un usuario en el portal de migración",
                    },
                    {
                        title: "Completar los formularios con los datos del menor y del acompañante"
                    },
                    {
                        title: "Escanear todos los documentos requeridos",
                        details: [
                            "Escanear todos los documentos en formato JPG",
                            "Incluye: poder notarial, acta de nacimiento, pasaportes, cédulas, foto 2x2, etc"
                        ]
                    },
                    {
                        title: "Cargar los documentos escaneados o fotos a la plataforma",
                    },
                    {
                        title: "Esperar validación de los documentos",
                        details: [
                            "Migración revisará la solicitud",
                            "Si falta algún documento, recibirás un correo solicitando la corrección o carga adicional"
                        ]
                    },
                    {
                        title: "Realizar el pago",
                        details: [
                            "Una vez aprobados los documentos, recibirás una notificación para proceder al pago",
                            "Puedes pagar:"
                        ],
                        subDetails: [
                            {
                                title: "",
                                items: [
                                    "En línea (tarjeta de crédito).",
                                    "En una sucursal de Banreservas.",
                                    "Con tarjeta directamente en la oficina de certificaciones de la DGM."
                                ]
                            }
                        ]
                    },
                    {
                        title: "Depositar los documentos originales en la oficina de Migración",
                        details: [
                            "Luego de 24 horas laborables desde la solicitud, debes presentarte con el poder notarial en físico, la foto 2x2 y el comprobante de pago en la oficina que seleccionaste al iniciar el trámite."
                        ]
                    },
                    {
                        title: "Descargar la certificación en la plataforma: https://servicios.migracion.gob.do",
                        details: [
                            "La Certificación de Salida del Menor se entrega en un plazo de hasta 48 horas laborables si todo está en orden",
                            "Este documento debe ser presentado al momento de salir del país (aeropuerto, puerto o frontera)."
                        ]
                    }
                ],
            },
            "menor-tiene-un-solo-apellido-materno-y-no-viaja-con-su-madre": {
                required: [
                    {
                        title: "Poder Notarial de los padres, autorizando la salida del menor del país con la academia deportiva, legalizado por procuraduría",
                        details: [
                            "Ambos padres deben firmar el poder notarial autorizando la salida del menor",
                            "Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil"
                        ],
                    },
                    {
                        title: "Foto o copia de acta de nacimiento original, con el código QR legible",
                        details: ["Versión reciente con código QR o número de evento."],
                    },
                    {
                        title: "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                    },
                    {
                        title: "Foto o copia de la cédula del otro padre que autoriza",
                    },
                    {
                        title: "Foto o copia de la visa / residencia del acompañante",
                        details: ["Si viaja a un país que requiera visa o residencia"]
                    },
                    {
                        title: "Foto o copia de la visa / residencia del menor",
                        details: [
                            "Si viaja a un país que requiera visa o residencia"
                        ]
                    },
                    {
                        title: "Foto o copia del pasaporte del acompañante",
                        details: ["De la página principal con los datos biométricos."]
                    },
                    {
                        title: "Foto o copia del pasaporte del menor",
                        details: ["De la página principal con los datos biométricos."]
                    },
                    {
                        title: "Foto 2x2 reciente del menor",
                        details: ["De frente y reciente."]
                    },
                    {
                        title: "Recibo de pago",
                        details: ["Puede realizarse en línea o presencial en BanReservas a nombre del padre, madre o tutor."]
                    }
                ],
                onlineServiceSteps: [
                    {
                        title: "Entrar al portal https://servicios.migracion.gob.do",
                    },
                    {
                        title: "Crear un usuario en el portal de migración",
                    },
                    {
                        title: "Completar los formularios con los datos del menor y del acompañante"
                    },
                    {
                        title: "Escanear todos los documentos requeridos",
                        details: [
                            "Escanear todos los documentos en formato JPG",
                            "Incluye: poder notarial, acta de nacimiento, pasaportes, cédulas, foto 2x2, etc"
                        ]
                    },
                    {
                        title: "Cargar los documentos escaneados o fotos a la plataforma",
                    },
                    {
                        title: "Esperar validación de los documentos",
                        details: [
                            "Migración revisará la solicitud",
                            "Si falta algún documento, recibirás un correo solicitando la corrección o carga adicional"
                        ]
                    },
                    {
                        title: "Realizar el pago",
                        details: [
                            "Una vez aprobados los documentos, recibirás una notificación para proceder al pago",
                            "Puedes pagar:"
                        ],
                        subDetails: [
                            {
                                title: "",
                                items: [
                                    "En línea (tarjeta de crédito).",
                                    "En una sucursal de Banreservas.",
                                    "Con tarjeta directamente en la oficina de certificaciones de la DGM."
                                ]
                            }
                        ]
                    },
                    {
                        title: "Depositar los documentos originales en la oficina de Migración",
                        details: [
                            "Luego de 24 horas laborables desde la solicitud, debes presentarte con el poder notarial en físico, la foto 2x2 y el comprobante de pago en la oficina que seleccionaste al iniciar el trámite."
                        ]
                    },
                    {
                        title: "Descargar la certificación en la plataforma: https://servicios.migracion.gob.do",
                        details: [
                            "La Certificación de Salida del Menor se entrega en un plazo de hasta 48 horas laborables si todo está en orden",
                            "Este documento debe ser presentado al momento de salir del país (aeropuerto, puerto o frontera)."
                        ]
                    }
                ],
            },
            "uno-de-los-padres-ha-fallecido-y-no-viaja-con-el-padre-madre-sobreviviente": {
                required: [
                    {
                        title: "Poder Notarial de los padres, autorizando la salida del menor del país con la academia deportiva, legalizado por procuraduría",
                        details: [
                            "Ambos padres deben firmar el poder notarial autorizando la salida del menor",
                            "Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil"
                        ],
                    },
                    {
                        title: "Foto o copia de acta de nacimiento original, con el código QR legible",
                        details: ["Versión reciente con código QR o número de evento."],
                    },
                    {
                        title: "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                    },
                    {
                        title: "Foto o copia de la cédula del otro padre que autoriza",
                    },
                    {
                        title: "Foto o copia de la visa / residencia del acompañante",
                        details: ["Si viaja a un país que requiera visa o residencia"]
                    },
                    {
                        title: "Foto o copia de la visa / residencia del menor",
                        details: [
                            "Si viaja a un país que requiera visa o residencia"
                        ]
                    },
                    {
                        title: "Foto o copia del pasaporte del acompañante",
                        details: ["De la página principal con los datos biométricos."]
                    },
                    {
                        title: "Foto o copia del pasaporte del menor",
                        details: ["De la página principal con los datos biométricos."]
                    },
                    {
                        title: "Foto 2x2 reciente del menor",
                        details: ["De frente y reciente."]
                    },
                    {
                        title: "Recibo de pago",
                        details: ["Puede realizarse en línea o presencial en BanReservas a nombre del padre, madre o tutor."]
                    }
                ],
                onlineServiceSteps: [
                    {
                        title: "Entrar al portal https://servicios.migracion.gob.do",
                    },
                    {
                        title: "Crear un usuario en el portal de migración",
                    },
                    {
                        title: "Completar los formularios con los datos del menor y del acompañante"
                    },
                    {
                        title: "Escanear todos los documentos requeridos",
                        details: [
                            "Escanear todos los documentos en formato JPG",
                            "Incluye: poder notarial, acta de nacimiento, pasaportes, cédulas, foto 2x2, etc"
                        ]
                    },
                    {
                        title: "Cargar los documentos escaneados o fotos a la plataforma",
                    },
                    {
                        title: "Esperar validación de los documentos",
                        details: [
                            "Migración revisará la solicitud",
                            "Si falta algún documento, recibirás un correo solicitando la corrección o carga adicional"
                        ]
                    },
                    {
                        title: "Realizar el pago",
                        details: [
                            "Una vez aprobados los documentos, recibirás una notificación para proceder al pago",
                            "Puedes pagar:"
                        ],
                        subDetails: [
                            {
                                title: "",
                                items: [
                                    "En línea (tarjeta de crédito).",
                                    "En una sucursal de Banreservas.",
                                    "Con tarjeta directamente en la oficina de certificaciones de la DGM."
                                ]
                            }
                        ]
                    },
                    {
                        title: "Depositar los documentos originales en la oficina de Migración",
                        details: [
                            "Luego de 24 horas laborables desde la solicitud, debes presentarte con el poder notarial en físico, la foto 2x2 y el comprobante de pago en la oficina que seleccionaste al iniciar el trámite."
                        ]
                    },
                    {
                        title: "Descargar la certificación en la plataforma: https://servicios.migracion.gob.do",
                        details: [
                            "La Certificación de Salida del Menor se entrega en un plazo de hasta 48 horas laborables si todo está en orden",
                            "Este documento debe ser presentado al momento de salir del país (aeropuerto, puerto o frontera)."
                        ]
                    }
                ],
            },
            "viaja-con-una-persona-autorizada-por-el-tutor-legal": {
                required: [
                    {
                        title: "Poder Notarial del tutor legal que no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría",
                        details: [
                            "Ambos padres deben firmar el poder notarial autorizando la salida del menor",
                            "Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil"
                        ],
                    },
                    {
                        title: "Foto o copia de acta de nacimiento original, con el código QR legible",
                        details: ["Versión reciente con código QR o número de evento."],
                    },
                    {
                        title: "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                    },
                    {
                        title: "Foto o copia de la cédula del otro padre que autoriza",
                    },
                    {
                        title: "Foto o copia de la visa / residencia del acompañante",
                        details: ["Si viaja a un país que requiera visa o residencia"]
                    },
                    {
                        title: "Foto o copia de la visa / residencia del menor",
                        details: [
                            "Si viaja a un país que requiera visa o residencia"
                        ]
                    },
                    {
                        title: "Foto o copia del pasaporte del acompañante",
                        details: ["De la página principal con los datos biométricos."]
                    },
                    {
                        title: "Foto o copia del pasaporte del menor",
                        details: ["De la página principal con los datos biométricos."]
                    },
                    {
                        title: "Foto 2x2 reciente del menor",
                        details: ["De frente y reciente."]
                    },
                    {
                        title: "Recibo de pago",
                        details: ["Puede realizarse en línea o presencial en BanReservas a nombre del padre, madre o tutor."]
                    }
                ],
                onlineServiceSteps: [
                    {
                        title: "Entrar al portal https://servicios.migracion.gob.do",
                    },
                    {
                        title: "Crear un usuario en el portal de migración",
                    },
                    {
                        title: "Completar los formularios con los datos del menor y del acompañante"
                    },
                    {
                        title: "Escanear todos los documentos requeridos",
                        details: [
                            "Escanear todos los documentos en formato JPG",
                            "Incluye: poder notarial, acta de nacimiento, pasaportes, cédulas, foto 2x2, etc"
                        ]
                    },
                    {
                        title: "Cargar los documentos escaneados o fotos a la plataforma",
                    },
                    {
                        title: "Esperar validación de los documentos",
                        details: [
                            "Migración revisará la solicitud",
                            "Si falta algún documento, recibirás un correo solicitando la corrección o carga adicional"
                        ]
                    },
                    {
                        title: "Realizar el pago",
                        details: [
                            "Una vez aprobados los documentos, recibirás una notificación para proceder al pago",
                            "Puedes pagar:"
                        ],
                        subDetails: [
                            {
                                title: "",
                                items: [
                                    "En línea (tarjeta de crédito).",
                                    "En una sucursal de Banreservas.",
                                    "Con tarjeta directamente en la oficina de certificaciones de la DGM."
                                ]
                            }
                        ]
                    },
                    {
                        title: "Depositar los documentos originales en la oficina de Migración",
                        details: [
                            "Luego de 24 horas laborables desde la solicitud, debes presentarte con el poder notarial en físico, la foto 2x2 y el comprobante de pago en la oficina que seleccionaste al iniciar el trámite."
                        ]
                    },
                    {
                        title: "Descargar la certificación en la plataforma: https://servicios.migracion.gob.do",
                        details: [
                            "La Certificación de Salida del Menor se entrega en un plazo de hasta 48 horas laborables si todo está en orden",
                            "Este documento debe ser presentado al momento de salir del país (aeropuerto, puerto o frontera)."
                        ]
                    }
                ],
            }
        }
    }
}