export const CASE_03 = {
    "id": "3",
    "label": "Menor es extranjero con residencia en la República Dominicana",
    "slug": "menor-es-extranjero-con-residencia-en-la-república-dominicana",
    "children": [
        {
            "id": "3.1",
            "label": "El menor ha estado más de 6 meses en el país",
            "slug": "el-menor-ha-estado-más-de-6-meses-en-el-país",
            "children": [
                {
                    "id": "3.1.1",
                    "label": "Viaja con ambos padres",
                    "slug": "viaja-con-ambos-padres",
                    "description": "Cuando ambos padres viajaran con el menor",
                    "children": [
                        {
                            "document": {
                                "Requisitos": "Ninguno",
                                "Notas requisitos": "No requiere presentar PSM en Control Migratorio"
                            },
                            "process_online": {}
                        }
                    ]
                },
                {
                    "id": "3.1.2",
                    "label": "Viaja con uno de los padres",
                    "slug": "viaja-con-uno-de-los-padres",
                    "description": "Cuando el menor viaja con uno de los padres",
                    "children": [
                        {
                            "id": "3.1.2.1",
                            "label": "Cuando uno de los padres autoriza al otro a viajar con el menor",
                            "slug": "cuando-uno-de-los-padres-autoriza-al-otro-a-viajar-con-el-menor",
                            "description": "Cuando uno de los padres autoriza al otro a viajar con el menor",
                            "type": "modal-info",
                            "children": [
                                {
                                    "document": {
                                        "Requisitos": "Poder Notarial del padre o madre que no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría.",
                                        "Notas requisitos": "El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\nEste poder debe ser legalizado en la Procuraduría General de la República o en PuntoGOB"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Entrar al portal  https://servicios.migracion.gob.do"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de acta de nacimiento original del menor, con el código QR legible"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Crear un usuario en el portal de migración"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la cédula de identidad del padre o madre que realiza la solicitud",
                                        "Notas requisitos": "Versión nueva"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Completar los formularios con los datos del menor y del acompañante."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la cédula del otro padre que autoriza",
                                        "Notas requisitos": "Versión nueva"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Escanear todos los documentos requeridos",
                                        "Notas paso a paso": "Escanear todos los documentos en formato JPG.\r\nIncluye: poder notarial, acta de nacimiento, pasaportes, cédulas, foto 2x2, etc."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                        "Notas requisitos": "Si viaja a un país que requiera visa o residencia"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Cargar los documentos escaneados o fotos a la plataforma"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                        "Notas requisitos": "Si viaja a un país que requiera visa o residencia"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Esperar validación de los documentos",
                                        "Notas paso a paso": "Migración revisará la solicitud.\r\nSi falta algún documento, recibirás un correo solicitando la corrección o carga adicional."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia del pasaporte del acompañante",
                                        "Notas requisitos": "De la página principal con los datos biométricos."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Realizar el pago",
                                        "Notas paso a paso": "Una vez aprobados los documentos, recibirás una notificación para proceder al pago.\r\nPuedes pagar:\r\n        - En línea (tarjeta de crédito).\r\n        - En una sucursal de Banreservas.\r\n        - Con tarjeta directamente en la oficina de certificaciones de la DGM."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia del pasaporte del menor",
                                        "Notas requisitos": "De la página principal con los datos biométricos."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Depositar los documentos originales en la oficina de Migración",
                                        "Notas paso a paso": "Luego de 24 horas laborables desde la solicitud, debes presentarte con el poder notarial en físico, la foto 2x2 y el\r\ncomprobante de pago en la oficina que seleccionaste al iniciar el trámite."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "1 Foto 2x2 reciente del menor",
                                        "Notas requisitos": "De frente, reciente y fondo claro"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Descargar la certificación en la plataforma: https://servicios.migracion.gob.do",
                                        "Notas paso a paso": "La Certificación de Salida del Menor se entrega en un plazo de hasta 48 horas laborables si todo está en\r\norden.\r\nEste documento debe ser presentado al momento de salir del país (aeropuerto, puerto o frontera)."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Recibo de pago del servicio",
                                        "Notas requisitos": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                                    },
                                    "process_online": {}
                                }
                            ]
                        },
                        {
                            "id": "3.1.2.2",
                            "label": "Tiene la guarda legal del menor",
                            "slug": "tiene-la-guarda-legal-del-menor",
                            "description": "Cuando el menor viaja con la persona que tiene la guarda legal de este",
                            "type": "modal-info",
                            "children": [
                                {
                                    "document": {
                                        "Requisitos": "Poder Notarial de los padres, autorizando la salida del menor del país con el guarda, legalizado por procuraduría.",
                                        "Notas requisitos": "Ambos padres o tutores deben firmar el poder notarial autorizando la salida del menor.\r\nEste poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Entrar al portal  https://servicios.migracion.gob.do"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de acta de nacimiento original del menor, con el código QR legible"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Crear un usuario en el portal de migración"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                                        "Notas requisitos": "Versión nueva"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Completar los formularios con los datos del menor y del acompañante."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la cédula del otro padre que autoriza",
                                        "Notas requisitos": "Versión nueva"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Escanear todos los documentos requeridos",
                                        "Notas paso a paso": "Escanear todos los documentos en formato JPG.\r\nIncluye: poder notarial, acta de nacimiento, pasaportes, cédulas, foto 2x2, etc."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                        "Notas requisitos": "Si viaja a un país que requiera visa o residencia"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Cargar los documentos escaneados o fotos a la plataforma"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                        "Notas requisitos": "Si viaja a un país que requiera visa o residencia"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Esperar validación de los documentos",
                                        "Notas paso a paso": "Migración revisará la solicitud.\r\nSi falta algún documento, recibirás un correo solicitando la corrección o carga adicional."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia del pasaporte del acompañante",
                                        "Notas requisitos": "De la página principal con los datos biométricos."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Realizar el pago",
                                        "Notas paso a paso": "Una vez aprobados los documentos, recibirás una notificación para proceder al pago.\r\nPuedes pagar:\r\n        - En línea (tarjeta de crédito).\r\n        - En una sucursal de Banreservas.\r\n        - Con tarjeta directamente en la oficina de certificaciones de la DGM."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia del pasaporte del menor",
                                        "Notas requisitos": "De la página principal con los datos biométricos."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Depositar los documentos originales en la oficina de Migración",
                                        "Notas paso a paso": "Luego de 24 horas laborables desde la solicitud, debes presentarte con el poder notarial en físico, la foto 2x2 y el\r\ncomprobante de pago en la oficina que seleccionaste al iniciar el trámite."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "1 Foto 2x2 reciente del menor",
                                        "Notas requisitos": "De frente, reciente y fondo claro"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Descargar la certificación en la plataforma: https://servicios.migracion.gob.do",
                                        "Notas paso a paso": "La Certificación de Salida del Menor se entrega en un plazo de hasta 48 horas laborables si todo está en\r\norden.\r\nEste documento debe ser presentado al momento de salir del país (aeropuerto, puerto o frontera)."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Recibo de pago del servicio",
                                        "Notas requisitos": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                                    },
                                    "process_online": {}
                                }
                            ]
                        },
                        {
                            "id": "3.1.2.3",
                            "label": "Menor tiene un solo apellido (el del madre) y viaja con su madre",
                            "slug": "menor-tiene-un-solo-apellido-(el-del-madre)-y-viaja-con-su-madre",
                            "description": "Cuando el menor ha sido declarado solo por la madre y es ella quien autoriza a otra persona a viajar con el menor",
                            "type": "modal-info",
                            "children": [
                                {
                                    "document": {
                                        "Requisitos": "No requiere el permiso, pero debe presentar Acta de nacimiento ante Control Migratorio",
                                        "Notas requisitos": "Presentar Acta de Nacimiento en el aeropuerto"
                                    },
                                    "process_online": {}
                                }
                            ]
                        },
                        {
                            "id": "3.1.2.4",
                            "label": "Viaja con uno de sus padres y el otro ha fallecido",
                            "slug": "viaja-con-uno-de-sus-padres-y-el-otro-ha-fallecido",
                            "description": "Cuando el menor viaja acompañado por su único padre o madre que aún está vivo",
                            "type": "modal-info",
                            "children": [
                                {
                                    "document": {
                                        "Requisitos": "No requiere presentar PSM"
                                    },
                                    "process_online": {}
                                }
                            ]
                        },
                        {
                            "id": "3.1.2.5",
                            "label": "Menor adoptado por personas extranjeras y viaja por primera vez",
                            "slug": "menor-adoptado-por-personas-extranjeras-y-viaja-por-primera-vez",
                            "description": "Cuando el menor adoptado viaja con uno de los padres adoptivos",

                            "type": "modal-info", "children": [
                                {
                                    "document": {
                                        "Requisitos": "Sentencia del tribunal  de niños, niñas y adolescentes que evidencie la adopción",
                                        "Notas requisitos": "Ir al tribunal de niños, niñas y adolescentes\r\nSolicitar la sentencia donde se les otorga la adopción, original y certificada."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Entrar al portal  https://servicios.migracion.gob.do"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Poder Notarial del padre que tiene la patria potestad y no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría.",
                                        "Notas requisitos": "El padre debe firmar el poder notarial autorizando la salida del menor.\r\nEste poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Crear un usuario en el portal de migración"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de acta de nacimiento original del menor, con el código QR legible"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Completar los formularios con los datos del menor y del acompañante."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la cédula o pasaporte del otro padre que autoriza",
                                        "Notas requisitos": "Versión nueva"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Escanear todos los documentos requeridos",
                                        "Notas paso a paso": "Escanear todos los documentos en formato JPG.\r\nIncluye: autorización judicial, poder notarial, acta de nacimiento, pasaportes, cédulas, foto 2x2, etc."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                        "Notas requisitos": "Si viaja a un país que requiera visa o residencia"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Cargar los documentos escaneados o fotos a la plataforma"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                        "Notas requisitos": "Si viaja a un país que requiera visa o residencia"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Esperar validación de los documentos",
                                        "Notas paso a paso": "Migración revisará la solicitud.\r\nSi falta algún documento, recibirás un correo solicitando la corrección o carga adicional."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia del pasaporte del otro padre adoptivo que viaja con el menor",
                                        "Notas requisitos": "De la página principal con los datos biométricos."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Realizar el pago",
                                        "Notas paso a paso": "Una vez aprobados los documentos, recibirás una notificación para proceder al pago.\r\nPuedes pagar:\r\n        - En línea (tarjeta de crédito).\r\n        - En una sucursal de Banreservas.\r\n        - Con tarjeta directamente en la oficina de certificaciones de la DGM."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia del pasaporte del menor",
                                        "Notas requisitos": "De la página principal con los datos biométricos."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Depositar los documentos originales en la oficina de Migración",
                                        "Notas paso a paso": "Luego de 24 horas laborables desde la solicitud, debes presentarte con la sentencia judicial, el poder notarial, la foto 2x2 y el comprobante de pago en la oficina que seleccionaste al iniciar el trámite."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "1 Foto 2x2 reciente del menor",
                                        "Notas requisitos": "De frente, reciente y fondo claro"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Descargar la certificación en la plataforma: https://servicios.migracion.gob.do",
                                        "Notas paso a paso": "La Certificación de Salida del Menor se entrega en un plazo de hasta 48 horas laborables si todo está en orden.\r\nEste documento debe ser presentado al momento de salir del país (aeropuerto, puerto o frontera)."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Recibo de pago del servicio",
                                        "Notas requisitos": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                                    },
                                    "process_online": {}
                                }
                            ]
                        },
                        {
                            "id": "3.1.2.6",
                            "label": "Uno de los padres vive en el extranjero",
                            "slug": "uno-de-los-padres-vive-en-el-extranjero",
                            "description": "Cuando el padre o madre que reside en el extranjero autoriza al otro padre o madre que residen en la República Dominicana a viajar con el menor",
                            "type": "modal-info",
                            "children": [
                                {
                                    "document": {
                                        "Requisitos": "Poder consular otorgado en el país en donde se encuentra el padre (debe ser apostillado y sellado en cancilleria) o Poder Notarial legalizado del país donde se encuentre el padre en  original con apostilla de la Haya",
                                        "Notas requisitos": "El padre en el extranjero debe firmar el poder consular (en el consulado más cercana) autorizando la salida del menor.\r\nEste poder debe ser legalizado en el Ministerio de Relaciones Exteriores de la República Dominicana."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Entrar al portal  https://servicios.migracion.gob.do"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de acta de nacimiento original del menor, con el código QR legible"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Crear un usuario en el portal de migración"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                                        "Notas requisitos": "Versión nueva"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Completar los formularios con los datos del menor y del acompañante."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la cédula del otro padre que autoriza",
                                        "Notas requisitos": "Versión nueva"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Escanear todos los documentos requeridos",
                                        "Notas paso a paso": "Escanear todos los documentos en formato JPG.\r\nIncluye: poder consular o notarial, acta de nacimiento, pasaportes, cédulas, foto 2x2, etc."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                        "Notas requisitos": "Si viaja a un país que requiera visa o residencia"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Cargar los documentos escaneados o fotos a la plataforma"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                        "Notas requisitos": "Si viaja a un país que requiera visa o residencia"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Esperar validación de los documentos",
                                        "Notas paso a paso": "Migración revisará la solicitud.\r\nSi falta algún documento, recibirás un correo solicitando la corrección o carga adicional."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia del pasaporte del acompañante",
                                        "Notas requisitos": "De la página principal con los datos biométricos."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Realizar el pago",
                                        "Notas paso a paso": "Una vez aprobados los documentos, recibirás una notificación para proceder al pago.\r\nPuedes pagar:\r\n        - En línea (tarjeta de crédito).\r\n        - En una sucursal de Banreservas.\r\n        - Con tarjeta directamente en la oficina de certificaciones de la DGM."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia del pasaporte del menor",
                                        "Notas requisitos": "De la página principal con los datos biométricos."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Depositar los documentos originales en la oficina de Migración",
                                        "Notas paso a paso": "Luego de 24 horas laborables desde la solicitud, debes presentarte con el poder consular o notarial, la foto 2x2 y el comprobante de pago en la oficina que seleccionaste al iniciar el trámite."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "1 Foto 2x2 reciente del menor",
                                        "Notas requisitos": "De frente, reciente y fondo claro"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Descargar la certificación en la plataforma: https://servicios.migracion.gob.do",
                                        "Notas paso a paso": "La Certificación de Salida del Menor se entrega en un plazo de hasta 48 horas laborables si todo está en orden.\r\nEste documento debe ser presentado al momento de salir del país (aeropuerto, puerto o frontera)."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Recibo de pago del servicio",
                                        "Notas requisitos": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                                    },
                                    "process_online": {}
                                }
                            ]
                        },
                        {
                            "id": "3.1.2.7",
                            "label": "Tiene autorización de viaje del menor del tribunal Niños, Niñas y Adolescentes",
                            "slug": "tiene-autorización-de-viaje-del-menor-del-tribunal-niños,-niñas-y-adolescentes",
                            "description": "Cuando el menor viaja con la persona que tiene la guarda legal con autorización de viaje",
                            "type": "modal-info",
                            "children": [
                                {
                                    "document": {
                                        "Requisitos": "Autorización judicial (sentencia, auto o resolución) que autoriza el viaje del Menor",
                                        "Notas requisitos": "Ir al tribunal de niños, niñas y adolescentes\r\nSolicitar la sentencia donde se les otorga la Guarda Legal y Autorización de viaje del menor"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Entrar al portal  https://servicios.migracion.gob.do"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de acta de nacimiento original del menor, con el código QR legible"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Crear un usuario en el portal de migración"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la cédula de identidad del padre o madre que realiza la solicitud",
                                        "Notas requisitos": "Versión nueva"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Completar los formularios con los datos del menor y del acompañante."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la cédula del otro padre que autoriza",
                                        "Notas requisitos": "Versión nueva"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Escanear todos los documentos requeridos",
                                        "Notas paso a paso": "Escanear todos los documentos en formato JPG.\r\nIncluye: sentencia judicial, acta de nacimiento, pasaportes, cédulas, foto 2x2, etc."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                        "Notas requisitos": "Si viaja a un país que requiera visa o residencia"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Cargar los documentos escaneados o fotos a la plataforma"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                        "Notas requisitos": "Si viaja a un país que requiera visa o residencia"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Esperar validación de los documentos",
                                        "Notas paso a paso": "Migración revisará la solicitud.\r\nSi falta algún documento, recibirás un correo solicitando la corrección o carga adicional."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia del pasaporte del acompañante",
                                        "Notas requisitos": "De la página principal con los datos biométricos."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Realizar el pago",
                                        "Notas paso a paso": "Una vez aprobados los documentos, recibirás una notificación para proceder al pago.\r\nPuedes pagar:\r\n        - En línea (tarjeta de crédito).\r\n        - En una sucursal de Banreservas.\r\n        - Con tarjeta directamente en la oficina de certificaciones de la DGM."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia del pasaporte del menor",
                                        "Notas requisitos": "De la página principal con los datos biométricos."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Depositar los documentos originales en la oficina de Migración",
                                        "Notas paso a paso": "Luego de 24 horas laborables desde la solicitud, debes presentarte con la sentencia judicial, la foto 2x2 y el comprobante de pago en la oficina que seleccionaste al iniciar el trámite."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "1 Foto 2x2 reciente del menor",
                                        "Notas requisitos": "De frente, reciente y fondo claro"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Descargar la certificación en la plataforma: https://servicios.migracion.gob.do",
                                        "Notas paso a paso": "La Certificación de Salida del Menor se entrega en un plazo de hasta 48 horas laborables si todo está en orden.\r\nEste documento debe ser presentado al momento de salir del país (aeropuerto, puerto o frontera)."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Recibo de pago del servicio",
                                        "Notas requisitos": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                                    },
                                    "process_online": {}
                                }
                            ]
                        },
                        {
                            "id": "3.1.2.8",
                            "label": "Viaja a una actividad cultural, escolar o deportiva",
                            "slug": "viaja-a-una-actividad-cultural,-escolar-o-deportiva",
                            "description": "Cuando uno de los padres autoriza al otro a viajar con el menor para participar en actividad cultural, escolar, religiosa, deportiva u otra.",
                            "type": "modal-info",
                            "children": [
                                {
                                    "document": {
                                        "Requisitos": "Poder Notarial del padre que no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría.",
                                        "Notas requisitos": "El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\nEste poder debe ser legalizado en la Procuraduría General de la República o en PuntoGOB Sambil"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Entrar al portal  https://servicios.migracion.gob.do"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de acta de nacimiento original del menor, con el código QR legible"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Crear un usuario en el portal de migración"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la cédula de identidad del padre o madre que realiza la solicitud",
                                        "Notas requisitos": "Versión nueva"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Completar los formularios con los datos del menor y del acompañante."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la cédula del otro padre que autoriza",
                                        "Notas requisitos": "Versión nueva"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Escanear todos los documentos requeridos",
                                        "Notas paso a paso": "Escanear todos los documentos en formato JPG.\r\nIncluye: poder notarial, acta de nacimiento, pasaportes, cédulas, foto 2x2, etc."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                        "Notas requisitos": "Si viaja a un país que requiera visa o residencia"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Cargar los documentos escaneados o fotos a la plataforma"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                        "Notas requisitos": "Si viaja a un país que requiera visa o residencia"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Esperar validación de los documentos",
                                        "Notas paso a paso": "Migración revisará la solicitud.\r\nSi falta algún documento, recibirás un correo solicitando la corrección o carga adicional."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia del pasaporte del acompañante",
                                        "Notas requisitos": "De la página principal con los datos biométricos."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Realizar el pago",
                                        "Notas paso a paso": "Una vez aprobados los documentos, recibirás una notificación para proceder al pago.\r\nPuedes pagar:\r\n        - En línea (tarjeta de crédito).\r\n        - En una sucursal de Banreservas.\r\n        - Con tarjeta directamente en la oficina de certificaciones de la DGM."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia del pasaporte del menor",
                                        "Notas requisitos": "De la página principal con los datos biométricos."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Depositar los documentos originales en la oficina de Migración",
                                        "Notas paso a paso": "Luego de 24 horas laborables desde la solicitud, debes presentarte con el poder notarial en físico, la foto 2x2 y el\r\ncomprobante de pago en la oficina que seleccionaste al iniciar el trámite."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "1 Foto 2x2 reciente del menor",
                                        "Notas requisitos": "De frente, reciente y fondo claro"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Descargar la certificación en la plataforma: https://servicios.migracion.gob.do",
                                        "Notas paso a paso": "La Certificación de Salida del Menor se entrega en un plazo de hasta 48 horas laborables si todo está en\r\norden.\r\nEste documento debe ser presentado al momento de salir del país (aeropuerto, puerto o frontera)."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Recibo de pago del servicio",
                                        "Notas requisitos": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                                    },
                                    "process_online": {}
                                }
                            ]
                        },
                        {
                            "id": "3.1.2.9",
                            "label": "Cuando no se tiene la autorización de uno de los padres o tutores",
                            "slug": "cuando-no-se-tiene-la-autorización-de-uno-de-los-padres-o-tutores",
                            "description": "Cuando uno de los padres se niega a autorizar el viaje o está ausente en la vida del menor.",
                            "type": "modal-info",
                            "children": [
                                {
                                    "document": {
                                        "Requisitos": "Sentencia judicial que autoriza el viaje del Menor o sentencia judical que otorga la autoridad parental unilateral al padre que viaja",
                                        "Notas requisitos": "Ir al tribunal de niños, niñas y adolescentes\r\nSolicitar la sentencia donde se les otorga la patria potestad"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Entrar al portal  https://servicios.migracion.gob.do"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de acta de nacimiento original del menor, con el código QR legible",
                                        "Notas requisitos": "Versión nueva"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Crear un usuario en el portal de migración"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la cédula de identidad del padre o  madre que realiza la solicitud",
                                        "Notas requisitos": "Versión nueva"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Completar los formularios con los datos del menor y del acompañante."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del padre acompañante",
                                        "Notas requisitos": "Si viaja a un país que requiera visa o residencia"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Escanear todos los documentos requeridos",
                                        "Notas paso a paso": "Escanear todos los documentos en formato JPG.\r\nIncluye: sentencia judicial, acta de nacimiento, pasaportes, cédulas, foto 2x2, etc."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                        "Notas requisitos": "Si viaja a un país que requiera visa o residencia"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Cargar los documentos escaneados o fotos a la plataforma"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia del pasaporte del padre acompañante",
                                        "Notas requisitos": "De la página principal con los datos biométricos."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Esperar validación de los documentos",
                                        "Notas paso a paso": "Migración revisará la solicitud.\r\nSi falta algún documento, recibirás un correo solicitando la corrección o carga adicional."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia del pasaporte del menor",
                                        "Notas requisitos": "De la página principal con los datos biométricos."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Realizar el pago",
                                        "Notas paso a paso": "Una vez aprobados los documentos, recibirás una notificación para proceder al pago.\r\nPuedes pagar:\r\n        - En línea (tarjeta de crédito).\r\n        - En una sucursal de Banreservas.\r\n        - Con tarjeta directamente en la oficina de certificaciones de la DGM."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "1 Foto 2x2 reciente del menor",
                                        "Notas requisitos": "De frente, reciente y fondo claro"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Depositar los documentos originales en la oficina de Migración",
                                        "Notas paso a paso": "Luego de 24 horas laborables desde la solicitud, debes presentarte con la sentencia judicial, la foto 2x2 y el comprobante de pago en la oficina que seleccionaste al iniciar el trámite."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Recibo de pago del servicio",
                                        "Notas requisitos": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Descargar la certificación en la plataforma: https://servicios.migracion.gob.do",
                                        "Notas paso a paso": "La Certificación de Salida del Menor se entrega en un plazo de hasta 48 horas laborables si todo está en orden.\r\nEste documento debe ser presentado al momento de salir del país (aeropuerto, puerto o frontera)."
                                    }
                                }
                            ]
                        },
                        {
                            "id": "3.1.2.10",
                            "label": "No veo mi caso o tengo dudas",
                            "slug": "tu-situacion-no-esta-en-la-lista-de-opciones",
                            "description": "Selecciona esta opción si no sabes cuál elegir o tu situación no está en la lista",
                            "type": "modal-info",
                            "children": [
                                {
                                    "document": {},
                                    "process_online": {}
                                },
                            ]
                        }
                    ]
                },
                {
                    "id": "3.1.3",
                    "label": "Viaja con un tercero",
                    "slug": "viaja-con-un-tercero",
                    "children": [
                        {
                            "id": "3.1.3.1",
                            "label": "Viaja con la aerolínea",
                            "slug": "viaja-con-la-aerolínea",
                            "description": "Cuando el menor viaja con la Aerolínea y cuenta con la autorización de ambos padres, padre, madre o tutor legal",
                            "type": "modal-info",
                            "children": [
                                {
                                    "document": {
                                        "Requisitos": "Poder Notarial de ambos padres, padre, madre o tutor (según el caso) legal autorizando la salida del menor del país con la aerolínea, legalizado por procuraduría o sentencia judicial.",
                                        "Notas requisitos": "El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\nEste poder debe ser legalizado en la Procuraduría General de la República o en PuntoGOB Sambil"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Entrar al portal  https://servicios.migracion.gob.do"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de acta de nacimiento original del menor, con el código QR legible"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Crear un usuario en el portal de migración"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                                        "Notas requisitos": "Versión nueva"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Completar los formularios con los datos del menor y del acompañante."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la cédula de la o las personas que autorizan",
                                        "Notas requisitos": "Versión nueva"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Escanear todos los documentos requeridos",
                                        "Notas paso a paso": "Escanear todos los documentos en formato JPG.\r\nIncluye: poder notaral, acta de nacimiento, pasaportes, cédulas, foto 2x2, etc."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                        "Notas requisitos": "Si viaja a un país que requiera visa o residencia"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Cargar los documentos escaneados o fotos a la plataforma"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia del pasaporte del menor",
                                        "Notas requisitos": "De la página principal con los datos biométricos."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Esperar validación de los documentos",
                                        "Notas paso a paso": "Migración revisará la solicitud.\r\nSi falta algún documento, recibirás un correo solicitando la corrección o carga adicional."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "1 Foto 2x2 reciente del menor",
                                        "Notas requisitos": "De frente, reciente y fondo claro"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Realizar el pago",
                                        "Notas paso a paso": "Una vez aprobados los documentos, recibirás una notificación para proceder al pago.\r\nPuedes pagar:\r\n        - En línea (tarjeta de crédito).\r\n        - En una sucursal de Banreservas.\r\n        - Con tarjeta directamente en la oficina de certificaciones de la DGM."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Recibo de pago del servicio",
                                        "Notas requisitos": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Depositar los documentos originales en la oficina de Migración",
                                        "Notas paso a paso": "Luego de 24 horas laborables desde la solicitud, debes presentarte con el poder notarial en físico, la foto 2x2 y el\r\ncomprobante de pago en la oficina que seleccionaste al iniciar el trámite."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Boleto o reserva del viaje"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Descargar la certificación en la plataforma: https://servicios.migracion.gob.do",
                                        "Notas paso a paso": "La Certificación de Salida del Menor se entrega en un plazo de hasta 48 horas laborables si todo está en\r\norden.\r\nEste documento debe ser presentado al momento de salir del país (aeropuerto, puerto o frontera)."
                                    }
                                }
                            ]
                        },
                        {
                            "id": "3.1.3.2",
                            "label": "Viaja con el colegio, centro educativo o institución cultural",
                            "slug": "viaja-con-el-colegio,-centro-educativo-o-institución-cultural",
                            "description": "Cuando el menor viaja con  una academia, centro educativo o institución cultural, y cuenta con la autorización de los padres, padre, madre o tutor legal",
                            "type": "modal-info",
                            "children": [
                                {
                                    "document": {
                                        "Requisitos": "Si ambos padres están en el país:\r\n\r\nPresentar un Poder Notarial (individual o conjunto) emitido por los padres, autorizando la salida del menor. Este poder debe estar legalizado por la Procuraduría General de la República.\r\n\r\nSi uno o ambos padres están fuera del país:\r\n\r\nPresentar un Poder Consular emitido desde el país donde se encuentren, autorizando la salida del menor.\r\n\r\nSi uno de los padres no está de acuerdo o no está presente en la vida del menor:\r\n\r\nPresentar una Autorización Judicial, emitida por un tribunal competente, que permita la salida del menor.",
                                        "Notas requisitos": "Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerolínea. \r\nEste poder debe ser legalizado en la Procuraduría General de la República.\r\nLos padres de todos los menores pueden hacer un solo poder notarial, donde estén las firmas de todos los padres que autorizan la salida de los menores."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Entrar al portal  https://servicios.migracion.gob.do"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de acta de nacimiento original del menor, con el código QR legible"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Crear un usuario en el portal de migración"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                                        "Notas requisitos": "Versión nueva"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Completar los formularios con los datos del menor y del acompañante."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la cédula del otro padre que autoriza",
                                        "Notas requisitos": "Versión nueva"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Escanear todos los documentos requeridos",
                                        "Notas paso a paso": "Escanear todos los documentos en formato JPG.\r\nIncluye: poder notarial, acta de nacimiento, pasaportes, cédulas, foto 2x2, etc."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                        "Notas requisitos": "Si viaja a un país que requiera visa o residencia"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Cargar los documentos escaneados o fotos a la plataforma"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                        "Notas requisitos": "Si viaja a un país que requiera visa o residencia"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Esperar validación de los documentos",
                                        "Notas paso a paso": "Migración revisará la solicitud.\r\nSi falta algún documento, recibirás un correo solicitando la corrección o carga adicional."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia del pasaporte del acompañante",
                                        "Notas requisitos": "De la página principal con los datos biométricos."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Realizar el pago",
                                        "Notas paso a paso": "Una vez aprobados los documentos, recibirás una notificación para proceder al pago.\r\nPuedes pagar:\r\n        - En línea (tarjeta de crédito).\r\n        - En una sucursal de Banreservas.\r\n        - Con tarjeta directamente en la oficina de certificaciones de la DGM."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia del pasaporte del menor",
                                        "Notas requisitos": "De la página principal con los datos biométricos."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Depositar los documentos originales en la oficina de Migración",
                                        "Notas paso a paso": "Luego de 24 horas laborables desde la solicitud, debes presentarte con el poder notarial en físico, la foto 2x2 y el\r\ncomprobante de pago en la oficina que seleccionaste al iniciar el trámite."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "1 Foto 2x2 reciente del menor",
                                        "Notas requisitos": "De frente, reciente y fondo claro"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Descargar la certificación en la plataforma: https://servicios.migracion.gob.do",
                                        "Notas paso a paso": "La Certificación de Salida del Menor se entrega en un plazo de hasta 48 horas laborables si todo está en\r\norden.\r\nEste documento debe ser presentado al momento de salir del país (aeropuerto, puerto o frontera)."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Recibo de pago del servicio",
                                        "Notas requisitos": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                                    },
                                    "process_online": {}
                                }
                            ]
                        },
                        {
                            "id": "3.1.3.3",
                            "label": "Viaja con academia, selección o liga deportiva",
                            "slug": "viaja-con-academia,-selección-o-liga-deportiva",
                            "description": "Cuando el menor viaja con  una academia, selecció o liga deportiva, y cuenta con la autorización de ambos padres, padre, madre o tutor legal",
                            "type": "modal-info",
                            "children": [
                                {
                                    "document": {
                                        "Requisitos": "Si ambos padres están en el país:\r\n\r\nPresentar un Poder Notarial (individual o conjunto) emitido por los padres, autorizando la salida del menor. Este poder debe estar legalizado por la Procuraduría General de la República.\r\n\r\nSi uno o ambos padres están fuera del país:\r\n\r\nPresentar un Poder Consular emitido desde el país donde se encuentren, autorizando la salida del menor.\r\n\r\nSi uno de los padres no está de acuerdo o no está presente en la vida del menor:\r\n\r\nPresentar una Autorización Judicial, emitida por un tribunal competente, que permita la salida del menor.",
                                        "Notas requisitos": "Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerolínea. \r\nEste poder debe ser legalizado en la Procuraduría General de la República.\r\nLos padres de todos los menores pueden hacer un solo poder notarial, donde estén las firmas de todos los padres que autorizan la salida de los menores."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Entrar al portal  https://servicios.migracion.gob.do"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Carta o comunicación de la organización (Academia, iglesia o liga Deportiva) local especificando el motivo del viaje",
                                        "Notas requisitos": "Opcional"
                                    },
                                    "process_online": {}
                                },
                                {
                                    "document": {
                                        "Requisitos": "Carta de invitación de la actividad a la que asistira el menor",
                                        "Notas requisitos": "Opcional"
                                    },
                                    "process_online": {}
                                },
                                {
                                    "document": {
                                        "Requisitos": "Fotos o copias de las actas de nacimiento originales del (de los)  menor(es) , con el código QR legible"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Crear un usuario en el portal de migración"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Fotos o copias de las cédulas de identidad de los padres, madres o tutores",
                                        "Notas requisitos": "Versión nueva"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Completar los formularios con los datos del menor y del acompañante."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Fotos o copias de la cédula de la persona que realiza la solicitud.",
                                        "Notas requisitos": "Versión nueva"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Escanear todos los documentos requeridos",
                                        "Notas paso a paso": "Escanear todos los documentos en formato JPG.\r\nIncluye: poder notarial, acta de nacimiento, pasaportes, cédulas, foto 2x2, etc."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                        "Notas requisitos": "Si viaja a un país que requiera visa o residencia"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Cargar los documentos escaneados o fotos a la plataforma"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Fotos o copias de las visas / residencias / permisos de estadías de menores",
                                        "Notas requisitos": "Si viaja a un país que requiera visa o residencia"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Esperar validación de los documentos",
                                        "Notas paso a paso": "Migración revisará la solicitud.\r\nSi falta algún documento, recibirás un correo solicitando la corrección o carga adicional."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia del pasaporte del acompañante o responsable",
                                        "Notas requisitos": "De la página principal con los datos biométricos."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Realizar el pago",
                                        "Notas paso a paso": "Una vez aprobados los documentos, recibirás una notificación para proceder al pago.\r\nPuedes pagar:\r\n        - En línea (tarjeta de crédito).\r\n        - En una sucursal de Banreservas.\r\n        - Con tarjeta directamente en la oficina de certificaciones de la DGM."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Fotos o copias de los pasaportes de los menores",
                                        "Notas requisitos": "De la página principal con los datos biométricos."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Depositar los documentos originales en la oficina de Migración",
                                        "Notas paso a paso": "Luego de 24 horas laborables desde la solicitud, debes presentarte con el poder notarial en físico, la foto 2x2 y el\r\ncomprobante de pago en la oficina que seleccionaste al iniciar el trámite."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "1 Foto 2x2 reciente de cada menor",
                                        "Notas requisitos": "De frente, reciente y fondo claro"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Descargar la certificación en la plataforma: https://servicios.migracion.gob.do",
                                        "Notas paso a paso": "La Certificación de Salida del Menor se entrega en un plazo de hasta 48 horas laborables si todo está en\r\norden.\r\nEste documento debe ser presentado al momento de salir del país (aeropuerto, puerto o frontera)."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Recibo de pago del servicio",
                                        "Notas requisitos": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                                    },
                                    "process_online": {}
                                }
                            ]
                        },
                        {
                            "id": "3.1.3.4",
                            "label": "Viaja con la persona que posee la guarda custodia (de hecho o legal)",
                            "slug": "viaja-con-la-persona-que-posee-la-guarda-custodia-(de-hecho-o-legal)",
                            "description": "Cuando el menor viaja con la persona que tiene la guarda legal con autorización de viaje",
                            "type": "modal-info",
                            "children": [
                                {
                                    "document": {
                                        "Requisitos": "Poder Notarial de ambos padres, autorizando la salida del menor del país con el guarda custodia (de hecho o legal), legalizado por procuraduría.",
                                        "Notas requisitos": "Ambos padres deben firmar el poder notarial autorizando la salida del menor.\r\nEste poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Entrar al portal  https://servicios.migracion.gob.do"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de acta de nacimiento original del menor, con el código QR legible"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Crear un usuario en el portal de migración"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Fotos o copias de las cédulas de identidad del padre y de la madre; o del tutor",
                                        "Notas requisitos": "Versión nueva"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Completar los formularios con los datos del menor y del acompañante."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la cédula del acompañante ( si aplica)"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Escanear todos los documentos requeridos",
                                        "Notas paso a paso": "Escanear todos los documentos en formato JPG.\r\nIncluye: poder notarial, acta de nacimiento, pasaportes, cédulas, foto 2x2, etc."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                        "Notas requisitos": "Si viaja a un país que requiera visa o residencia"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Cargar los documentos escaneados o fotos a la plataforma"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                        "Notas requisitos": "Si viaja a un país que requiera visa o residencia"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Esperar validación de los documentos",
                                        "Notas paso a paso": "Migración revisará la solicitud.\r\nSi falta algún documento, recibirás un correo solicitando la corrección o carga adicional."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia del pasaporte del acompañante",
                                        "Notas requisitos": "De la página principal con los datos biométricos."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Realizar el pago",
                                        "Notas paso a paso": "Una vez aprobados los documentos, recibirás una notificación para proceder al pago.\r\nPuedes pagar:\r\n        - En línea (tarjeta de crédito).\r\n        - En una sucursal de Banreservas.\r\n        - Con tarjeta directamente en la oficina de certificaciones de la DGM."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia del pasaporte del menor",
                                        "Notas requisitos": "De la página principal con los datos biométricos."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Depositar los documentos originales en la oficina de Migración",
                                        "Notas paso a paso": "Luego de 24 horas laborables desde la solicitud, debes presentarte con el poder notarial en físico, la foto 2x2 y el\r\ncomprobante de pago en la oficina que seleccionaste al iniciar el trámite."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "1 Foto 2x2 reciente del menor",
                                        "Notas requisitos": "De frente, reciente y fondo claro"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Descargar la certificación en la plataforma: https://servicios.migracion.gob.do",
                                        "Notas paso a paso": "La Certificación de Salida del Menor se entrega en un plazo de hasta 48 horas laborables si todo está en\r\norden.\r\nEste documento debe ser presentado al momento de salir del país (aeropuerto, puerto o frontera)."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Recibo de pago del servicio",
                                        "Notas requisitos": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                                    },
                                    "process_online": {}
                                }
                            ]
                        },
                        {
                            "id": "3.1.3.5",
                            "label": "Menor  tiene un solo apellido (materno) y  no viaja con su madre",
                            "slug": "menor-tiene-un-solo-apellido-(materno)-y-no-viaja-con-su-madre",
                            "description": "Cuando el menor ha sido declarado solo por la madre y es ella quien autoriza a otra persona a viajar con el menor",
                            "type": "modal-info",
                            "children": [
                                {
                                    "document": {
                                        "Requisitos": "Poder Notarial de la madre, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría.",
                                        "Notas requisitos": "La madre debe firmar el poder notarial autorizando la salida del menor.\r\nEste poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Entrar al portal  https://servicios.migracion.gob.do"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de acta de nacimiento original del menor, con el código QR legible"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Crear un usuario en el portal de migración"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la cédula de identidad de la madre",
                                        "Notas requisitos": "Versión nueva"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Completar los formularios con los datos del menor y del acompañante."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la cédula de identidad del acompañante (si aplica)",
                                        "Notas requisitos": "Versión nueva"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Escanear todos los documentos requeridos",
                                        "Notas paso a paso": "Escanear todos los documentos en formato JPG.\r\nIncluye: poder notarial, acta de nacimiento, pasaportes, cédulas, foto 2x2, etc."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                        "Notas requisitos": "Si viaja a un país que requiera visa o residencia"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Cargar los documentos escaneados o fotos a la plataforma"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                        "Notas requisitos": "Si viaja a un país que requiera visa o residencia"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Esperar validación de los documentos",
                                        "Notas paso a paso": "Migración revisará la solicitud.\r\nSi falta algún documento, recibirás un correo solicitando la corrección o carga adicional."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia del pasaporte del acompañante",
                                        "Notas requisitos": "De la página principal con los datos biométricos."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Realizar el pago",
                                        "Notas paso a paso": "Una vez aprobados los documentos, recibirás una notificación para proceder al pago.\r\nPuedes pagar:\r\n        - En línea (tarjeta de crédito).\r\n        - En una sucursal de Banreservas.\r\n        - Con tarjeta directamente en la oficina de certificaciones de la DGM."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia del pasaporte del menor",
                                        "Notas requisitos": "De la página principal con los datos biométricos."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Depositar los documentos originales en la oficina de Migración",
                                        "Notas paso a paso": "Luego de 24 horas laborables desde la solicitud, debes presentarte con el poder notarial en físico, la foto 2x2 y el comprobante de pago en la oficina que seleccionaste al iniciar el trámite."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "1 Foto 2x2 reciente del menor",
                                        "Notas requisitos": "De frente, reciente y fondo claro"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Descargar la certificación en la plataforma: https://servicios.migracion.gob.do",
                                        "Notas paso a paso": "La Certificación de Salida del Menor se entrega en un plazo de hasta 48 horas laborables si todo está en orden.\r\nEste documento debe ser presentado al momento de salir del país (aeropuerto, puerto o frontera)."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Recibo de pago del servicio",
                                        "Notas requisitos": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                                    },
                                    "process_online": {}
                                }
                            ]
                        },
                        {
                            "id": "3.1.3.6",
                            "label": "Uno de los padres ha fallecido y no viaja con el padre/madre sobreviviente",
                            "slug": "uno-de-los-padres-ha-fallecido-y-no-viaja-con-el-padre/madre-sobreviviente",
                            "description": "Cuando el menor viaja con la persona que ha autorizado el padre o madre sobreviviente",
                            "type": "modal-info",
                            "children": [
                                {
                                    "document": {
                                        "Requisitos": "Poder Notarial del padre sobreviviente, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría.",
                                        "Notas requisitos": "El padre sobreviviente debe firmar el poder notarial autorizando la salida del menor.\r\nEste poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Entrar al portal  https://servicios.migracion.gob.do"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de acta de nacimiento original del menor, con el código QR legible"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Crear un usuario en el portal de migración"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la cédula de identidad del padre o madre que realiza la solicitud",
                                        "Notas requisitos": "Versión nueva"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Completar los formularios con los datos del menor y del acompañante."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la cédula del otro padre que autoriza",
                                        "Notas requisitos": "Versión nueva"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Escanear todos los documentos requeridos",
                                        "Notas paso a paso": "Escanear todos los documentos en formato JPG.\r\nIncluye: poder notarial, acta de nacimiento, pasaportes, cédulas, foto 2x2, etc."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                        "Notas requisitos": "Si viaja a un país que requiera visa o residencia"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Cargar los documentos escaneados o fotos a la plataforma"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                        "Notas requisitos": "Si viaja a un país que requiera visa o residencia"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Esperar validación de los documentos",
                                        "Notas paso a paso": "Migración revisará la solicitud.\r\nSi falta algún documento, recibirás un correo solicitando la corrección o carga adicional."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia del pasaporte del acompañante",
                                        "Notas requisitos": "De la página principal con los datos biométricos."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Realizar el pago",
                                        "Notas paso a paso": "Una vez aprobados los documentos, recibirás una notificación para proceder al pago.\r\nPuedes pagar:\r\n        - En línea (tarjeta de crédito).\r\n        - En una sucursal de Banreservas.\r\n        - Con tarjeta directamente en la oficina de certificaciones de la DGM."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia del pasaporte del menor",
                                        "Notas requisitos": "De la página principal con los datos biométricos."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Depositar los documentos originales en la oficina de Migración",
                                        "Notas paso a paso": "Luego de 24 horas laborables desde la solicitud, debes presentarte con el poder notarial en físico, la foto 2x2 y el comprobante de pago en la oficina que seleccionaste al iniciar el trámite."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "1 Foto 2x2 reciente del menor",
                                        "Notas requisitos": "De frente, reciente y fondo claro"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Descargar la certificación en la plataforma: https://servicios.migracion.gob.do",
                                        "Notas paso a paso": "La Certificación de Salida del Menor se entrega en un plazo de hasta 48 horas laborables si todo está en orden.\r\nEste documento debe ser presentado al momento de salir del país (aeropuerto, puerto o frontera)."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Recibo de pago del servicio",
                                        "Notas requisitos": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                                    },
                                    "process_online": {}
                                },
                                {
                                    "document": {
                                        "Requisitos": "Acta de defunción del padre fallecido  con codigo QR legible"
                                    },
                                    "process_online": {}
                                }
                            ]
                        },
                        {
                            "id": "3.1.3.7",
                            "label": "Viaja con una persona autorizada por el tutor legal",
                            "slug": "viaja-con-una-persona-autorizada-por-el-tutor-legal",
                            "description": "Cuando el menor viaja con la persona que ha autorizado el tutor legal",
                            "type": "modal-info",
                            "children": [
                                {
                                    "document": {
                                        "Requisitos": "Poder Notarial del tutor (es) legal, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría.",
                                        "Notas requisitos": "El tutor legal debe firmar el poder notarial autorizando la salida del menor.\r\nEste poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Entrar al portal  https://servicios.migracion.gob.do"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de acta de nacimiento original del menor, con el código QR legible"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Crear un usuario en el portal de migración"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la cédula de identidad de el o los tutores que realizan la solicitud",
                                        "Notas requisitos": "Versión nueva"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Completar los formularios con los datos del menor y del acompañante."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                        "Notas requisitos": "Si viaja a un país que requiera visa o residencia"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Escanear todos los documentos requeridos",
                                        "Notas paso a paso": "Escanear todos los documentos en formato JPG.\r\nIncluye: poder notarial, acta de nacimiento, pasaportes, cédulas, foto 2x2, etc."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                        "Notas requisitos": "Si viaja a un país que requiera visa o residencia"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Cargar los documentos escaneados o fotos a la plataforma"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia del pasaporte del acompañante",
                                        "Notas requisitos": "De la página principal con los datos biométricos."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Esperar validación de los documentos",
                                        "Notas paso a paso": "Migración revisará la solicitud.\r\nSi falta algún documento, recibirás un correo solicitando la corrección o carga adicional."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia del pasaporte del menor",
                                        "Notas requisitos": "De la página principal con los datos biométricos."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Realizar el pago",
                                        "Notas paso a paso": "Una vez aprobados los documentos, recibirás una notificación para proceder al pago.\r\nPuedes pagar:\r\n        - En línea (tarjeta de crédito).\r\n        - En una sucursal de Banreservas.\r\n        - Con tarjeta directamente en la oficina de certificaciones de la DGM."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "1 Foto 2x2 reciente del menor",
                                        "Notas requisitos": "De frente, reciente y fondo claro"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Depositar los documentos originales en la oficina de Migración",
                                        "Notas paso a paso": "Luego de 24 horas laborables desde la solicitud, debes presentarte con el poder notarial en físico, la foto 2x2 y el comprobante de pago en la oficina que seleccionaste al iniciar el trámite."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Recibo de pago del servicio",
                                        "Notas requisitos": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Descargar la certificación en la plataforma: https://servicios.migracion.gob.do",
                                        "Notas paso a paso": "La Certificación de Salida del Menor se entrega en un plazo de hasta 48 horas laborables si todo está en orden.\r\nEste documento debe ser presentado al momento de salir del país (aeropuerto, puerto o frontera)."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Sentencia que otorga la tutoría legal del menor"
                                    },
                                    "process_online": {}
                                },
                                {
                                    "document": {
                                        "Requisitos": "Cédula del acompañante"
                                    },
                                    "process_online": {}
                                }
                            ]
                        },
                        {
                            "id": "3.1.3.8",
                            "label": "Viaja con abuelos, tíos, amigos u otras personas que no son los padres",
                            "slug": "viaja-con-abuelos,-tíos,-amigos-u-otras-personas-que-no-son-los-padres",
                            "description": "Cuando el menor viaja con terceros que han sido autorizado los padres o tutores legales",
                            "type": "modal-info",
                            "children": [
                                {
                                    "document": {
                                        "Requisitos": "Poder Notarial de los padres, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría.",
                                        "Notas requisitos": "Ambos padres deben firmar el poder notarial autorizando la salida del menor.\r\nEste poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Entrar al portal  https://servicios.migracion.gob.do"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de acta de nacimiento original del menor, con el código QR legible"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Crear un usuario en el portal de migración"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Fotos o copia sde las cédulas de identidad de ambos padres o tutor (es)",
                                        "Notas requisitos": "Versión nueva"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Completar los formularios con los datos del menor y del acompañante."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                        "Notas requisitos": "Si viaja a un país que requiera visa o residencia"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Escanear todos los documentos requeridos",
                                        "Notas paso a paso": "Escanear todos los documentos en formato JPG.\r\nIncluye: poder notarial o consular, acta de nacimiento, pasaportes, cédulas, foto 2x2, etc."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                        "Notas requisitos": "Si viaja a un país que requiera visa o residencia"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Cargar los documentos escaneados o fotos a la plataforma"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia del pasaporte del acompañante",
                                        "Notas requisitos": "De la página principal con los datos biométricos."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Esperar validación de los documentos",
                                        "Notas paso a paso": "Migración revisará la solicitud.\r\nSi falta algún documento, recibirás un correo solicitando la corrección o carga adicional."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia del pasaporte del menor",
                                        "Notas requisitos": "De la página principal con los datos biométricos."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Realizar el pago",
                                        "Notas paso a paso": "Una vez aprobados los documentos, recibirás una notificación para proceder al pago.\r\nPuedes pagar:\r\n        - En línea (tarjeta de crédito).\r\n        - En una sucursal de Banreservas.\r\n        - Con tarjeta directamente en la oficina de certificaciones de la DGM."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "1 Foto 2x2 reciente del menor",
                                        "Notas requisitos": "De frente, reciente y fondo claro"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Depositar los documentos originales en la oficina de Migración",
                                        "Notas paso a paso": "Luego de 24 horas laborables desde la solicitud, debes presentarte con el poder consular o notarial, la foto 2x2 y el comprobante de pago en la oficina que seleccionaste al iniciar el trámite."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Recibo de pago del servicio",
                                        "Notas requisitos": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Descargar la certificación en la plataforma: https://servicios.migracion.gob.do",
                                        "Notas paso a paso": "La Certificación de Salida del Menor se entrega en un plazo de hasta 48 horas laborables si todo está en orden.\r\nEste documento debe ser presentado al momento de salir del país (aeropuerto, puerto o frontera)."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Cédula del acompañante"
                                    },
                                    "process_online": {}
                                }
                            ]
                        },
                        {
                            "id": "3.1.3.9",
                            "label": "Cuando no se tiene la autorización de uno de los padres o tutores",
                            "slug": "cuando-no-se-tiene-la-autorización-de-uno-de-los-padres-o-tutores",
                            "description": "Cuando uno de los padres se niega a autorizar el viaje o está ausente en la vida del menor.",
                            "type": "modal-info",
                            "children": [
                                {
                                    "document": {
                                        "Requisitos": "Sentencia Judicial que otorga la autorización de viaje del menor",
                                        "Notas requisitos": "Ir al tribunal de niños, niñas y adolescentes\r\nSolicitar la sentencia donde se les otorga la autorización de viaje"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Entrar al portal  https://servicios.migracion.gob.do"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Poder Notarial del padre que tiene la autorización de viaje y no viaja, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría.",
                                        "Notas requisitos": "El padre debe firmar el poder notarial autorizando la salida del menor.\r\nEste poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Crear un usuario en el portal de migración"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de acta de nacimiento original del menor, con el código QR legible"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Completar los formularios con los datos del menor y del acompañante."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la cédula de identidad del padre o madre que realiza la solicitud",
                                        "Notas requisitos": "Versión nueva"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Escanear todos los documentos requeridos",
                                        "Notas paso a paso": "Escanear todos los documentos en formato JPG.\r\nIncluye: sentencia judicial, acta de nacimiento, pasaportes, cédulas, foto 2x2, etc."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Cédula de identidad del acompañante (si aplica)",
                                        "Notas requisitos": "Versión nueva"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Cargar los documentos escaneados o fotos a la plataforma"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                        "Notas requisitos": "Si viaja a un país que requiera visa o residencia"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Esperar validación de los documentos",
                                        "Notas paso a paso": "Migración revisará la solicitud.\r\nSi falta algún documento, recibirás un correo solicitando la corrección o carga adicional."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                        "Notas requisitos": "Si viaja a un país que requiera visa o residencia"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Realizar el pago",
                                        "Notas paso a paso": "Una vez aprobados los documentos, recibirás una notificación para proceder al pago.\r\nPuedes pagar:\r\n        - En línea (tarjeta de crédito).\r\n        - En una sucursal de Banreservas.\r\n        - Con tarjeta directamente en la oficina de certificaciones de la DGM."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia del pasaporte del acompañante",
                                        "Notas requisitos": "De la página principal con los datos biométricos."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Depositar los documentos originales en la oficina de Migración",
                                        "Notas paso a paso": "Luego de 24 horas laborables desde la solicitud, debes presentarte con la sentencia judicial, la foto 2x2 y el comprobante de pago en la oficina que seleccionaste al iniciar el trámite."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia del pasaporte del menor",
                                        "Notas requisitos": "De la página principal con los datos biométricos."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Descargar la certificación en la plataforma: https://servicios.migracion.gob.do",
                                        "Notas paso a paso": "La Certificación de Salida del Menor se entrega en un plazo de hasta 48 horas laborables si todo está en orden.\r\nEste documento debe ser presentado al momento de salir del país (aeropuerto, puerto o frontera)."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "1 Foto 2x2 reciente del menor",
                                        "Notas requisitos": "De frente, reciente y fondo claro"
                                    },
                                    "process_online": {}
                                },
                                {
                                    "document": {
                                        "Requisitos": "Recibo de pago del servicio",
                                        "Notas requisitos": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                                    },
                                    "process_online": {}
                                }
                            ]
                        },
                        {
                            "id": "3.1.3.10",
                            "label": "No veo mi caso o tengo dudas",
                            "slug": "tu-situacion-no-esta-en-la-lista-de-opciones",
                            "description": "Selecciona esta opción si no sabes cuál elegir o tu situación no está en la lista",
                            "type": "modal-info",
                            "children": [
                                {
                                    "document": {},
                                    "process_online": {}
                                },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": "3.2",
            "label": "El menor no ha estado más de 6 meses en el país",
            "slug": "el-menor-no-ha-estado-más-de-6-meses-en-el-país",
            "children": [
                {
                    "document": {
                        "Requisitos": "No requiere presentar PSM"
                    },
                    "process_online": {}
                }
            ]
        }
    ]
}