export const DATA_DUMB = {
    "cases": [
        {
            "id": "1",
            "label": "Menor tiene únicamente nacionalidad dominicana",
            "slug": "menor-tiene-únicamente-nacionalidad-dominicana",
            "children": [
                {
                    "id": "1.1",
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
                    "id": "1.2",
                    "label": "Viaja con uno de los padres",
                    "slug": "viaja-con-uno-de-los-padres",
                    "description": "Cuando el menor viaja con uno de los padres",
                    "children": [
                        {
                            "id": "1.2.1",
                            "label": "Cuando uno de los padres autoriza al otro a viajar con el menor",
                            "slug": "cuando-uno-de-los-padres-autoriza-al-otro-a-viajar-con-el-menor",
                            "description": "Cuando uno de los padres autoriza al otro a viajar con el menor",
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
                            "id": "1.2.2",
                            "label": "Tiene la guarda legal del menor",
                            "slug": "tiene-la-guarda-legal-del-menor",
                            "description": "Cuando el menor viaja con la persona que tiene la guarda legal de este",
                            "children": [
                                {
                                    "document": {
                                        "Requisitos": "Poder Notarial de los padres, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría.",
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
                            "id": "1.2.3",
                            "label": "Menor tiene un solo apellido (el del madre) y viaja con su madre",
                            "slug": "menor-tiene-un-solo-apellido-(el-del-madre)-y-viaja-con-su-madre",
                            "description": "Cuando el menor ha sido declarado solo por la madre y es ella quien le acompaña a viajar",
                            "children": [
                                {
                                    "document": {
                                        "Requisitos": "Acta de nacimiento",
                                        "Notas requisitos": "No requiere el permiso, pero debe presentar acta de nacimiento en el  punto de Control Migratorio"
                                    },
                                    "process_online": {}
                                }
                            ]
                        },
                        {
                            "id": "1.2.4",
                            "label": "Viaja con uno de sus padres y el otro ha fallecido",
                            "slug": "viaja-con-uno-de-sus-padres-y-el-otro-ha-fallecido",
                            "description": "Cuando el menor viaja acompañado por su único padre o madre que aún está vivo",
                            "children": [
                                {
                                    "document": {
                                        "Requisitos": "No requiere el permiso, pero debe mostrar en Control Migratorio el acta de defunción y acta de nacimiento del menor"
                                    },
                                    "process_online": {}
                                }
                            ]
                        },
                        {
                            "id": "1.2.5",
                            "label": "Menor adoptado por personas extranjeras y viaja por primera vez",
                            "slug": "menor-adoptado-por-personas-extranjeras-y-viaja-por-primera-vez",
                            "description": "cuando el menor viaja por primera vez luego de ser adoptado por personas extranjeras",
                            "children": [
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
                            "id": "1.2.6",
                            "label": "Uno de los padres vive en el extranjero",
                            "slug": "uno-de-los-padres-vive-en-el-extranjero",
                            "description": "Cuando el menor viaja acompañado por el padre o madre que está en el país, y el padre o madre en el extranjero es quien autoriza la salida del menor",
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
                            "id": "1.2.7",
                            "label": "Tiene autorización de viaje del menor del tribunal Niños, Niñas y Adolescentes",
                            "slug": "tiene-autorización-de-viaje-del-menor-del-tribunal-niños,-niñas-y-adolescentes",
                            "description": "Cuando el menor viaja con la persona que tiene la guarda legal con autorización de viaje",
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
                            "id": "1.2.8",
                            "label": "Viaja a una actividad cultural, escolar, religiosa, deportiva u otra",
                            "slug": "viaja-a-una-actividad-cultural,-escolar,-religiosa,-deportiva-u-otra",
                            "description": "Cuando uno de los padres autoriza al otro a viajar con el menor para participar en actividad cultural, escolar, religiosa, deportiva u otra.",
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
                            "id": "1.2.9",
                            "label": "Cuando no se tiene la autorización de uno de los padres o tutores",
                            "slug": "cuando-no-se-tiene-la-autorización-de-uno-de-los-padres-o-tutores",
                            "description": "Cuando uno de los padres se niega a autorizar el viaje o está ausente en la vida del menor.",
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
                        }
                    ]
                },
                {
                    "id": "1.3",
                    "label": "Viaja con un tercero",
                    "slug": "viaja-con-un-tercero",
                    "description": "Cuando ambos padres o tutor legal autoriza a otra persona a viaja con el menor (familiares, amigos, aerolínea, centro educativo, liga deportiva, institución cultural, entre otros)",
                    "children": [
                        {
                            "id": "1.3.1",
                            "label": "Viaja con la aerolínea",
                            "slug": "viaja-con-la-aerolínea",
                            "description": "Cuando el menor viaja con la Aerolínea y cuenta con la autorización de ambos padres, padre, madre o tutor legal",
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
                            "id": "1.3.2",
                            "label": "Viaja con el colegio, centro educativo o institución cultural",
                            "slug": "viaja-con-el-colegio,-centro-educativo-o-institución-cultural",
                            "description": "Cuando el menor viaja con  una academia, centro educativo o institución cultural, y cuenta con la autorización de los padres, padre, madre o tutor legal",
                            "children": [
                                {
                                    "document": {
                                        "Requisitos": "Poder Notarial de los padres o tutores, autorizando la salida del menor del país con el centro educativo, legalizado por procuraduría.",
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
                            "id": "1.3.3",
                            "label": "Viaja con academia, selección o liga deportiva",
                            "slug": "viaja-con-academia,-selección-o-liga-deportiva",
                            "description": "Cuando el menor viaja con  una academia, selecció o liga deportiva, y cuenta con la autorización de ambos padres, padre, madre o tutor legal",
                            "children": [
                                {
                                    "document": {
                                        "Requisitos": "Poder Notarial (colectivo o individual) de los padres, autorizando la salida del o los menores del país, legalizado por procuraduría. En caso de que los padres esten fuera del pais, debera entregar el poder consular. En caso de que uno de los padres no quiere que viaje o no este presente en la vida del menor, debera entregar Autorizacion Judicial.",
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
                            "id": "1.3.4",
                            "label": "Viaja con la persona que posee la guarda custodia (de hecho o legal)",
                            "slug": "viaja-con-la-persona-que-posee-la-guarda-custodia-(de-hecho-o-legal)",
                            "description": "Cuando el menor viaja con la persona que tiene la guarda legal con autorización de viaje",
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
                            "id": "1.3.5",
                            "label": "Menor  tiene un solo apellido (materno) y  no viaja con su madre",
                            "slug": "menor-tiene-un-solo-apellido-(materno)-y-no-viaja-con-su-madre",
                            "description": "Cuando el menor ha sido declarado solo por la madre y es ella quien autoriza a otra persona a viajar con el menor",
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
                            "id": "1.3.6",
                            "label": "Uno de los padres ha fallecido y no viaja con el padre/madre sobreviviente",
                            "slug": "uno-de-los-padres-ha-fallecido-y-no-viaja-con-el-padre/madre-sobreviviente",
                            "description": "Cuando el menor viaja con la persona que ha autorizado el padre o madre sobreviviente",
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
                                        "Requisitos": "Acta de defunción del padre fallecido  con codigo QR y legible",
                                        "Notas requisitos": "Si el padre o madre fallece en el extranjero, debe presentar Acta de defunción extranjera (Certificate of Death). Aquellas que no sean en ingles, portuges, italiano deben ser traducidas ya que el personal no domina otros idiomas"
                                    },
                                    "process_online": {}
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
                                }
                            ]
                        },
                        {
                            "id": "1.3.7",
                            "label": "Viaja con una persona autorizada por el tutor legal",
                            "slug": "viaja-con-una-persona-autorizada-por-el-tutor-legal",
                            "description": "Cuando el menor viaja con la persona que ha autorizado el tutor legal",
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
                            "id": "1.3.8",
                            "label": "Viaja con abuelos, tíos, amigos u otras personas que no son los padres",
                            "slug": "viaja-con-abuelos,-tíos,-amigos-u-otras-personas-que-no-son-los-padres",
                            "description": "Cuando el menor viaja con terceros que han sido autorizado los padres o tutores legales",
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
                            "id": "1.3.9",
                            "label": "Cuando uno de los padres o tutores se niega a autorizar el viaje o está ausente en la vida del menor",
                            "slug": "cuando-uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-está-ausente-en-la-vida-del-menor",
                            "description": "Cuando no se tiene la autorización de viaje de parte de uno de los padres",
                            "children": [
                                {
                                    "document": {
                                        "Requisitos": "Sentencia Judicial que otorga la autorización de viaje del menor",
                                        "Notas requisitos": "Ir al tribunal de niños, niñas y adolescentes\r\nSolicitar la sentencia donde se les otorga la autorización de viaje"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Entrar al portal  https://servicios.migracion.gob.do",
                                        "Notas paso a paso": "Si la sentencia que posee tiene más de 1 año y 6 meses, debe depositar también la certificación de la sentencia, y la legalización"
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
                        }
                    ]
                }
            ]
        },
        {
            "id": "2",
            "label": "Menor dominicano con otra nacionalidad o residencia en el extranjero",
            "slug": "menor-dominicano-con-otra-nacionalidad-o-residencia-en-el-extranjero",
            "children": [
                {
                    "id": "2.1",
                    "label": "El menor ha estado más de 6 meses en el país",
                    "slug": "el-menor-ha-estado-más-de-6-meses-en-el-país",
                    "children": [
                        {
                            "id": "2.1.1",
                            "label": "Viaja con uno de los padres",
                            "slug": "viaja-con-uno-de-los-padres",
                            "description": "Cuando el menor viaja con uno de los padres",
                            "children": [
                                {
                                    "id": "2.1.1.1",
                                    "label": "Cuando uno de los padres autoriza al otro a viajar con el menor",
                                    "slug": "cuando-uno-de-los-padres-autoriza-al-otro-a-viajar-con-el-menor",
                                    "description": "Cuando uno de los padres autoriza al otro a viajar con el menor",
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
                                    "id": "2.1.1.2",
                                    "label": "Tiene la guarda legal del menor",
                                    "slug": "tiene-la-guarda-legal-del-menor",
                                    "description": "Cuando el menor viaja con la persona que tiene la guarda legal de este",
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
                                    "id": "2.1.1.3",
                                    "label": "Menor tiene un solo apellido (el del madre) y viaja con su madre",
                                    "slug": "menor-tiene-un-solo-apellido-(el-del-madre)-y-viaja-con-su-madre",
                                    "description": "Cuando el menor ha sido declarado solo por la madre y es ella quien le acompaña a viajar",
                                    "children": [
                                        {
                                            "document": {
                                                "Requisitos": "No requiere el permiso, pero debe mostrar Acta de Nacimiento ante Control Migratorio",
                                                "Notas requisitos": "Presentar acta en el aeropuerto"
                                            },
                                            "process_online": {}
                                        }
                                    ]
                                },
                                {
                                    "id": "2.1.1.4",
                                    "label": "Viaja con uno de sus padres y el otro ha fallecido",
                                    "slug": "viaja-con-uno-de-sus-padres-y-el-otro-ha-fallecido",
                                    "description": "Cuando el menor viaja acompañado por su único padre o madre que aún está vivo",
                                    "children": [
                                        {
                                            "document": {},
                                            "process_online": {}
                                        }
                                    ]
                                },
                                {
                                    "id": "2.1.1.5",
                                    "label": "Menor adoptado por personas extranjeras y viaja por primera vez",
                                    "slug": "menor-adoptado-por-personas-extranjeras-y-viaja-por-primera-vez",
                                    "description": "Cuando el menor viaja por primera vez luego de ser adoptado por personas extranjeras",
                                    "children": [
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
                                    "id": "2.1.1.6",
                                    "label": "Uno de los padres vive en el extranjero",
                                    "slug": "uno-de-los-padres-vive-en-el-extranjero",
                                    "description": "Cuando el menor viaja acompañado por el padre o madre que está en el país, y el padre o madre en el extranjero es quien autoriza la salida del menor",
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
                                    "id": "2.1.1.7",
                                    "label": "Tiene autorización de viaje del menor del tribunal Niños, Niñas y Adolescentes",
                                    "slug": "tiene-autorización-de-viaje-del-menor-del-tribunal-niños,-niñas-y-adolescentes",
                                    "description": "Cuando el menor viaja con la persona que tiene la guarda legal con autorización de viaje",
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
                                    "id": "2.1.1.8",
                                    "label": "Viaja a una actividad cultural, escolar o deportiva",
                                    "slug": "viaja-a-una-actividad-cultural,-escolar-o-deportiva",
                                    "description": "Cuando uno de los padres autoriza al otro a viajar con el menor para participar en actividad cultural, escolar, religiosa, deportiva u otra.",
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
                                    "id": "2.1.1.9",
                                    "label": "Cuando no se tiene la autorización de uno de los padres o tutores",
                                    "slug": "cuando-no-se-tiene-la-autorización-de-uno-de-los-padres-o-tutores",
                                    "description": "Cuando uno de los padres se niega a autorizar el viaje o está ausente en la vida del menor.",
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
                                }
                            ]
                        },
                        {
                            "id": "2.1.2",
                            "label": "Viaja con un tercero",
                            "slug": "viaja-con-un-tercero",
                            "children": [
                                {
                                    "id": "2.1.2.1",
                                    "label": "Viaja con la aerolínea",
                                    "slug": "viaja-con-la-aerolínea",
                                    "description": "Cuando el menor viaja con la Aerolínea y cuenta con la autorización de ambos padres, padre, madre o tutor legal",
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
                                    "id": "2.1.2.2",
                                    "label": "Viaja con el colegio, centro educativo o institución cultural",
                                    "slug": "viaja-con-el-colegio,-centro-educativo-o-institución-cultural",
                                    "description": "Cuando el menor viaja con  una academia, centro educativo o institución cultural, y cuenta con la autorización de los padres, padre, madre o tutor legal",
                                    "children": [
                                        {
                                            "document": {
                                                "Requisitos": "Poder Notarial de los padres o tutores, autorizando la salida del menor del país con el centro educativo, legalizado por procuraduría.",
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
                                    "id": "2.1.2.3",
                                    "label": "Viaja con academia, selección o liga deportiva",
                                    "slug": "viaja-con-academia,-selección-o-liga-deportiva",
                                    "description": "Cuando el menor viaja con  una academia, selecció o liga deportiva, y cuenta con la autorización de ambos padres, padre, madre o tutor legal",
                                    "children": [
                                        {
                                            "document": {
                                                "Requisitos": "Poder Notarial (colectivo o individual) de los padres, autorizando la salida del o los menores del país, legalizado por procuraduría. En caso de que los padres esten fuera del pais, debera entregar el poder consular. En caso de que uno de los padres no quiere que viaje o no este presente en la vida del menor, debera entregar Autorizacion Judicial.",
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
                                    "id": "2.1.2.4",
                                    "label": "Viaja con la persona que posee la guarda custodia (de hecho o legal)",
                                    "slug": "viaja-con-la-persona-que-posee-la-guarda-custodia-(de-hecho-o-legal)",
                                    "description": "Cuando el menor viaja con la persona que tiene la guarda legal con autorización de viaje",
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
                                    "id": "2.1.2.5",
                                    "label": "Menor  tiene un solo apellido (materno) y  no viaja con su madre",
                                    "slug": "menor-tiene-un-solo-apellido-(materno)-y-no-viaja-con-su-madre",
                                    "description": "Cuando el menor ha sido declarado solo por la madre y es ella quien autoriza a otra persona a viajar con el menor",
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
                                    "id": "2.1.2.6",
                                    "label": "Uno de los padres ha fallecido y no viaja con el padre/madre sobreviviente",
                                    "slug": "uno-de-los-padres-ha-fallecido-y-no-viaja-con-el-padre/madre-sobreviviente",
                                    "description": "Cuando el menor viaja con la persona que ha autorizado el padre o madre sobreviviente",
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
                                    "id": "2.1.2.7",
                                    "label": "Viaja con una persona autorizada por el tutor legal",
                                    "slug": "viaja-con-una-persona-autorizada-por-el-tutor-legal",
                                    "description": "Cuando el menor viaja con la persona que ha autorizado el tutor legal",
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
                                    "id": "2.1.2.8",
                                    "label": "Viaja con abuelos, tíos, amigos u otras personas que no son los padres",
                                    "slug": "viaja-con-abuelos,-tíos,-amigos-u-otras-personas-que-no-son-los-padres",
                                    "description": "Cuando el menor viaja con terceros que han sido autorizado los padres o tutores legales",
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
                                    "id": "2.1.2.9",
                                    "label": "Cuando no se tiene la autorización de uno de los padres o tutores",
                                    "slug": "cuando-no-se-tiene-la-autorización-de-uno-de-los-padres-o-tutores",
                                    "description": "Cuando uno de los padres se niega a autorizar el viaje o está ausente en la vida del menor",
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
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "2.2",
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
        },
        {
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
                            "label": "Viaja con uno de los padres",
                            "slug": "viaja-con-uno-de-los-padres",
                            "description": "Cuando el menor viaja con uno de los padres",
                            "children": [
                                {
                                    "id": "3.1.1.1",
                                    "label": "Cuando uno de los padres autoriza al otro a viajar con el menor",
                                    "slug": "cuando-uno-de-los-padres-autoriza-al-otro-a-viajar-con-el-menor",
                                    "description": "Cuando uno de los padres autoriza al otro a viajar con el menor",
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
                                    "id": "3.1.1.2",
                                    "label": "Tiene la guarda legal del menor",
                                    "slug": "tiene-la-guarda-legal-del-menor",
                                    "description": "Cuando el menor viaja con la persona que tiene la guarda legal de este",
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
                                    "id": "3.1.1.3",
                                    "label": "Menor tiene un solo apellido (el del madre) y viaja con su madre",
                                    "slug": "menor-tiene-un-solo-apellido-(el-del-madre)-y-viaja-con-su-madre",
                                    "description": "Cuando el menor ha sido declarado solo por la madre y es ella quien autoriza a otra persona a viajar con el menor",
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
                                    "id": "3.1.1.4",
                                    "label": "Viaja con uno de sus padres y el otro ha fallecido",
                                    "slug": "viaja-con-uno-de-sus-padres-y-el-otro-ha-fallecido",
                                    "description": "Cuando el menor viaja acompañado por su único padre o madre que aún está vivo",
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
                                    "id": "3.1.1.5",
                                    "label": "Menor adoptado por personas extranjeras y viaja por primera vez",
                                    "slug": "menor-adoptado-por-personas-extranjeras-y-viaja-por-primera-vez",
                                    "description": "Cuando el menor adoptado viaja con uno de los padres adoptivos",
                                    "children": [
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
                                    "id": "3.1.1.6",
                                    "label": "Uno de los padres vive en el extranjero",
                                    "slug": "uno-de-los-padres-vive-en-el-extranjero",
                                    "description": "Cuando el padre o madre que reside en el extranjero autoriza al otro padre o madre que residen en la República Dominicana a viajar con el menor",
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
                                    "id": "3.1.1.7",
                                    "label": "Tiene autorización de viaje del menor del tribunal Niños, Niñas y Adolescentes",
                                    "slug": "tiene-autorización-de-viaje-del-menor-del-tribunal-niños,-niñas-y-adolescentes",
                                    "description": "Cuando el menor viaja con la persona que tiene la guarda legal con autorización de viaje",
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
                                    "id": "3.1.1.8",
                                    "label": "Viaja a una actividad cultural, escolar o deportiva",
                                    "slug": "viaja-a-una-actividad-cultural,-escolar-o-deportiva",
                                    "description": "Cuando uno de los padres autoriza al otro a viajar con el menor para participar en actividad cultural, escolar, religiosa, deportiva u otra.",
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
                                    "id": "3.1.1.9",
                                    "label": "Cuando no se tiene la autorización de uno de los padres o tutores",
                                    "slug": "cuando-no-se-tiene-la-autorización-de-uno-de-los-padres-o-tutores",
                                    "description": "Cuando uno de los padres se niega a autorizar el viaje o está ausente en la vida del menor.",
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
                                }
                            ]
                        },
                        {
                            "id": "3.1.2",
                            "label": "Viaja con un tercero",
                            "slug": "viaja-con-un-tercero",
                            "children": [
                                {
                                    "id": "3.1.2.1",
                                    "label": "Viaja con la aerolínea",
                                    "slug": "viaja-con-la-aerolínea",
                                    "description": "Cuando el menor viaja con la Aerolínea y cuenta con la autorización de ambos padres, padre, madre o tutor legal",
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
                                    "id": "3.1.2.2",
                                    "label": "Viaja con el colegio, centro educativo o institución cultural",
                                    "slug": "viaja-con-el-colegio,-centro-educativo-o-institución-cultural",
                                    "description": "Cuando el menor viaja con  una academia, centro educativo o institución cultural, y cuenta con la autorización de los padres, padre, madre o tutor legal",
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
                                    "id": "3.1.2.3",
                                    "label": "Viaja con academia, selección o liga deportiva",
                                    "slug": "viaja-con-academia,-selección-o-liga-deportiva",
                                    "description": "Cuando el menor viaja con  una academia, selecció o liga deportiva, y cuenta con la autorización de ambos padres, padre, madre o tutor legal",
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
                                    "id": "3.1.2.4",
                                    "label": "Viaja con la persona que posee la guarda custodia (de hecho o legal)",
                                    "slug": "viaja-con-la-persona-que-posee-la-guarda-custodia-(de-hecho-o-legal)",
                                    "description": "Cuando el menor viaja con la persona que tiene la guarda legal con autorización de viaje",
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
                                    "id": "3.1.2.5",
                                    "label": "Menor  tiene un solo apellido (materno) y  no viaja con su madre",
                                    "slug": "menor-tiene-un-solo-apellido-(materno)-y-no-viaja-con-su-madre",
                                    "description": "Cuando el menor ha sido declarado solo por la madre y es ella quien autoriza a otra persona a viajar con el menor",
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
                                    "id": "3.1.2.6",
                                    "label": "Uno de los padres ha fallecido y no viaja con el padre/madre sobreviviente",
                                    "slug": "uno-de-los-padres-ha-fallecido-y-no-viaja-con-el-padre/madre-sobreviviente",
                                    "description": "Cuando el menor viaja con la persona que ha autorizado el padre o madre sobreviviente",
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
                                    "id": "3.1.2.7",
                                    "label": "Viaja con una persona autorizada por el tutor legal",
                                    "slug": "viaja-con-una-persona-autorizada-por-el-tutor-legal",
                                    "description": "Cuando el menor viaja con la persona que ha autorizado el tutor legal",
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
                                    "id": "3.1.2.8",
                                    "label": "Viaja con abuelos, tíos, amigos u otras personas que no son los padres",
                                    "slug": "viaja-con-abuelos,-tíos,-amigos-u-otras-personas-que-no-son-los-padres",
                                    "description": "Cuando el menor viaja con terceros que han sido autorizado los padres o tutores legales",
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
                                    "id": "3.1.2.9",
                                    "label": "Cuando no se tiene la autorización de uno de los padres o tutores",
                                    "slug": "cuando-no-se-tiene-la-autorización-de-uno-de-los-padres-o-tutores",
                                    "description": "Cuando uno de los padres se niega a autorizar el viaje o está ausente en la vida del menor.",
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
        },
        {
            "id": "4",
            "label": "Menor tiene estatus migratorio de no residente (estudiante, deportista, artista y estudiante de intercambio)",
            "slug": "menor-tiene-estatus-migratorio-de-no-residente-(estudiante,-deportista,-artista-y-estudiante-de-intercambio)",
            "children": [
                {
                    "id": "4.1",
                    "label": "El menor ha estado más de 6 meses en el país",
                    "slug": "el-menor-ha-estado-más-de-6-meses-en-el-país",
                    "children": [
                        {
                            "id": "4.1.1",
                            "label": "El menor viaja acompañado con la persona o entidad autorizada con la que entró y se dirigirse a su pais de origen.",
                            "slug": "el-menor-viaja-acompañado-con-la-persona-o-entidad-autorizada-con-la-que-entró-y-se-dirigirse-a-su-pais-de-origen.",
                            "description": "EL menor saldra del país con la misma persona u organizació con la que ingresó, y se dirige al mismo país de origen.",
                            "children": [
                                {
                                    "document": {
                                        "Requisitos": "Poder notarial extranjero autorizando la salida del menor",
                                        "Notas requisitos": "debe ser recibido en original y debe contener la apostilla de La Haya en original. Debe ser traducido al español y legalizada ante la procuraduría."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Entrar al portal  https://servicios.migracion.gob.do"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Acta de nacimiento del menor"
                                    },
                                    "process_online": {}
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante"
                                    },
                                    "process_online": {}
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia de la visa / residencia / permiso de estadía del menor"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Crear un usuario en el portal de migración"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia del pasaporte del acompañante"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Completar los formularios con los datos del menor y del acompañante."
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia del pasaporte del menor"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Escanear todos los documentos requeridos"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "1 Foto 2x2 reciente del menor"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Cargar los documentos escaneados o fotos a la plataforma"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Recibo de pago del servicio"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Esperar validación de los documentos"
                                    }
                                },
                                {
                                    "document": {},
                                    "process_online": {
                                        "Paso a paso": "Realizar el pago"
                                    }
                                },
                                {
                                    "document": {},
                                    "process_online": {
                                        "Paso a paso": "Depositar los documentos originales en la oficina de Migración"
                                    }
                                },
                                {
                                    "document": {},
                                    "process_online": {
                                        "Paso a paso": "Descargar la certificación en la plataforma: https://servicios.migracion.gob.do"
                                    }
                                }
                            ]
                        },
                        {
                            "id": "4.1.2",
                            "label": "El menor viaja acompañado  de ambos padres",
                            "slug": "el-menor-viaja-acompañado-de-ambos-padres",
                            "description": "No requiere el permiso de salida pero debe mostrar Acta de nacimiento del menor",
                            "children": [
                                {
                                    "document": {
                                        "Requisitos": "No requiere el permiso, pero debe mostrar el acta de nacimiento del menor"
                                    },
                                    "process_online": {}
                                }
                            ]
                        },
                        {
                            "id": "4.1.3",
                            "label": "El menor viaja con uno de los padres",
                            "slug": "el-menor-viaja-con-uno-de-los-padres",
                            "description": "Cuando uno de los padres autoriza al otro a viajar con el menor",
                            "children": [
                                {
                                    "document": {
                                        "Requisitos": "Poder Notarial del padre o madre que no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría.",
                                        "Notas requisitos": "El padre que no viaja debe firmar el poder notarial autorizando la salida del menor."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Entrar al portal  https://servicios.migracion.gob.do"
                                    }
                                },
                                {
                                    "document": {
                                        "Notas requisitos": "Este poder debe ser legalizado en la Procuraduría General de la República o en PuntoGOB"
                                    },
                                    "process_online": {}
                                },
                                {
                                    "document": {
                                        "Requisitos": "Acta de nacimiento del menor"
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
                                        "Paso a paso": "Escanear todos los documentos requeridos"
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
                                        "Paso a paso": "Esperar validación de los documentos"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia del pasaporte del acompañante",
                                        "Notas requisitos": "De la página principal con los datos biométricos."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Realizar el pago"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "Foto o copia del pasaporte del menor",
                                        "Notas requisitos": "De la página principal con los datos biométricos."
                                    },
                                    "process_online": {
                                        "Paso a paso": "Depositar los documentos originales en la oficina de Migración"
                                    }
                                },
                                {
                                    "document": {
                                        "Requisitos": "1 Foto 2x2 reciente del menor",
                                        "Notas requisitos": "De frente, reciente y fondo claro"
                                    },
                                    "process_online": {
                                        "Paso a paso": "Descargar la certificación en la plataforma: https://servicios.migracion.gob.do"
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
                        }
                    ]
                },
                {
                    "id": "4.2",
                    "label": "El menor no ha estado más de 6 meses en el país",
                    "slug": "el-menor-no-ha-estado-más-de-6-meses-en-el-país",
                    "children": [
                        {
                            "id": "4.2.1",
                            "label": "El menor viaja acompañado con una de las personas con las que entro y se dirigirse a su pais de origen.",
                            "slug": "el-menor-viaja-acompañado-con-una-de-las-personas-con-las-que-entro-y-se-dirigirse-a-su-pais-de-origen.",
                            "description": "EL menor saldra del país con la misma persona u organizació con la que ingresó, y se dirige al mismo país de origen.",
                            "children": [
                                {
                                    "document": {
                                        "Requisitos": "No requiere el permiso",
                                        "Notas requisitos": "No lo requiere si el menor viaja acompañado con una de las personas con las que entro y se dirigirse a su pais de origen."
                                    },
                                    "process_online": {}
                                }
                            ]
                        },
                        {
                            "id": "4.2.2",
                            "label": "El menor viaja acompañado  de ambos padres",
                            "slug": "el-menor-viaja-acompañado-de-ambos-padres",
                            "description": "No requiere el permiso de salida pero debe mostrar Acta de nacimiento del menor",
                            "children": [
                                {
                                    "document": {
                                        "Notas requisitos": "Entrar al portal  https://servicios.migracion.gob.do"
                                    },
                                    "process_online": {}
                                },
                                {
                                    "document": {
                                        "Notas requisitos": "Crear un usuario en el portal de migración"
                                    },
                                    "process_online": {}
                                },
                                {
                                    "document": {
                                        "Notas requisitos": "Completar los formularios con los datos del menor y del acompañante."
                                    },
                                    "process_online": {}
                                },
                                {
                                    "document": {
                                        "Notas requisitos": "Escanear todos los documentos requeridos"
                                    },
                                    "process_online": {}
                                },
                                {
                                    "document": {
                                        "Notas requisitos": "Cargar los documentos escaneados o fotos a la plataforma"
                                    },
                                    "process_online": {}
                                },
                                {
                                    "document": {
                                        "Notas requisitos": "Esperar validación de los documentos"
                                    },
                                    "process_online": {}
                                },
                                {
                                    "document": {
                                        "Notas requisitos": "Realizar el pago"
                                    },
                                    "process_online": {}
                                },
                                {
                                    "document": {
                                        "Notas requisitos": "Depositar los documentos originales en la oficina de Migración"
                                    },
                                    "process_online": {}
                                },
                                {
                                    "document": {
                                        "Notas requisitos": "Descargar la certificación en la plataforma: https://servicios.migracion.gob.do"
                                    },
                                    "process_online": {}
                                }
                            ]
                        },
                        {
                            "id": "4.2.3",
                            "label": "El menor viaja con uno de los padres",
                            "slug": "el-menor-viaja-con-uno-de-los-padres",
                            "description": "Cuando uno de los padres autoriza al otro a viajar con el menor",
                            "children": [
                                {
                                    "document": {
                                        "Notas requisitos": "Entrar al portal  https://servicios.migracion.gob.do"
                                    },
                                    "process_online": {}
                                },
                                {
                                    "document": {
                                        "Notas requisitos": "Crear un usuario en el portal de migración"
                                    },
                                    "process_online": {}
                                },
                                {
                                    "document": {
                                        "Notas requisitos": "Completar los formularios con los datos del menor y del acompañante."
                                    },
                                    "process_online": {}
                                },
                                {
                                    "document": {
                                        "Notas requisitos": "Escanear todos los documentos requeridos"
                                    },
                                    "process_online": {}
                                },
                                {
                                    "document": {
                                        "Notas requisitos": "Cargar los documentos escaneados o fotos a la plataforma"
                                    },
                                    "process_online": {}
                                },
                                {
                                    "document": {
                                        "Notas requisitos": "Esperar validación de los documentos"
                                    },
                                    "process_online": {}
                                },
                                {
                                    "document": {
                                        "Notas requisitos": "Realizar el pago"
                                    },
                                    "process_online": {}
                                },
                                {
                                    "document": {
                                        "Notas requisitos": "Depositar los documentos originales en la oficina de Migración"
                                    },
                                    "process_online": {}
                                },
                                {
                                    "document": {
                                        "Notas requisitos": "Descargar la certificación en la plataforma: https://servicios.migracion.gob.do"
                                    },
                                    "process_online": {}
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": "5",
            "label": "Menores hijo/as de personal de organismos internacionales acreditados en el país",
            "slug": "menores-hijo/as-de-personal-de-organismos-internacionales-acreditados-en-el-país",
            "children": [
                {
                    "id": "5.1",
                    "label": "El menor viaja acompañado  de ambos padres",
                    "slug": "el-menor-viaja-acompañado-de-ambos-padres",
                    "description": "Cuando el menor viaja con ambos padres",
                    "children": [
                        {
                            "document": {
                                "Requisitos": "Nada",
                                "Notas requisitos": "No requiere presentar PSM en Control Migratorio"
                            },
                            "process_online": {}
                        }
                    ]
                },
                {
                    "id": "5.2",
                    "label": "El menor viaja con uno de los padres",
                    "slug": "el-menor-viaja-con-uno-de-los-padres",
                    "description": "Cuando el menor viaja con uno de los padres",
                    "children": [
                        {
                            "document": {
                                "Requisitos": "Poder consular de la embajada, consulado o representación del país en donde se encuentra el padre (debe ser apostillado y sellado en cancilleria) o Poder Notarial del país donde se encuentre el padre en  original apostilla de la Haya",
                                "Notas requisitos": "El padre en el extranjero debe firmar el poder consular (en el consulado más cercana) autorizando la salida del menor.\r\nEste poder debe ser legalizado en el Ministerio de Relaciones Exteriores de la República Dominicana."
                            },
                            "process_online": {
                                "Paso a paso": "Entrar al portal  https://servicios.migracion.gob.do"
                            }
                        },
                        {
                            "document": {
                                "Requisitos": "Foto o copia de acta de nacimiento original, con el código QR legible",
                                "Notas requisitos": "Versión reciente con código QR o número de evento."
                            },
                            "process_online": {
                                "Paso a paso": "Crear un usuario en el portal de migración"
                            }
                        },
                        {
                            "document": {
                                "Requisitos": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud"
                            },
                            "process_online": {
                                "Paso a paso": "Completar los formularios con los datos del menor y del acompañante."
                            }
                        },
                        {
                            "document": {
                                "Requisitos": "Foto o copia de la cédula del otro padre que autoriza"
                            },
                            "process_online": {
                                "Paso a paso": "Escanear todos los documentos requeridos",
                                "Notas paso a paso": "Escanear todos los documentos en formato JPG.\r\nIncluye: poder notarial o consular, acta de nacimiento, pasaportes, cédulas, foto 2x2, etc."
                            }
                        },
                        {
                            "document": {
                                "Requisitos": "Foto o copia de la visa / residencia del acompañante",
                                "Notas requisitos": "Si viaja a un país que requiera visa o residencia"
                            },
                            "process_online": {
                                "Paso a paso": "Cargar los documentos escaneados o fotos a la plataforma"
                            }
                        },
                        {
                            "document": {
                                "Requisitos": "Foto o copia de la visa / residencia del menor",
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
                                "Requisitos": "Foto 2x2 reciente del menor",
                                "Notas requisitos": "De frente y reciente."
                            },
                            "process_online": {
                                "Paso a paso": "Descargar la certificación en la plataforma: https://servicios.migracion.gob.do",
                                "Notas paso a paso": "La Certificación de Salida del Menor se entrega en un plazo de hasta 48 horas laborables si todo está en orden.\r\nEste documento debe ser presentado al momento de salir del país (aeropuerto, puerto o frontera)."
                            }
                        },
                        {
                            "document": {
                                "Requisitos": "Recibo de pago",
                                "Notas requisitos": "Puede realizarse en línea o presencial en BanReservas a nombre del padre, madre o tutor."
                            },
                            "process_online": {}
                        }
                    ]
                }
            ]
        },
        {
            "id": "6",
            "label": "No veo mi caso o tengo dudas",
            "slug": "tu-situacion-no-esta-en-la-lista-de-opciones",
            "description": "Selecciona esta opción si no sabes cuál elegir o tu situación no está en la lista",
            "children": []
        }
    ],
    "termLegal": [
        {
            "Término legal": "Tutor legal",
            "Descripción": "Es una tercera persona o institucion, a quien un tribunal le concede los derechos legales sobre el menor.",
            "Otorgado por": "Tribunal de NNA",
            "Término": "Escanear documents",
            "Explicación sencilla": "Digitalizar un documento físico.",
            "Traducción para usuarios no técnicos": "Tomar una foto o copiar con el escáner.",
            "Sinónimos o equivalentes": "Digitalizar, subir como imagen"
        },
        {
            "Término legal": "Guarda legal",
            "Descripción": "Significa asumir la responsabilidad del cuidado, protección, educación y supervisión directa del niño o adolescente y se otorga a traves de un tribunal",
            "Otorgado por": "Tribunal de NNA",
            "Término": "Formato JPG / JPEG",
            "Explicación sencilla": "Tipo de archivo de imagen (como una foto).",
            "Traducción para usuarios no técnicos": "Foto tomada desde el celular o cámara.",
            "Sinónimos o equivalentes": "Imagen digital, foto digital"
        },
        {
            "Término legal": "Guarda y custodia de hecho (no de derecho)",
            "Descripción": "Es cuando un persona asume la responsabilidad del cuidado, protección, educación y supervisión directa del niño o adolescente sin haber sido designado formalmente por un tribunal.",
            "Otorgado por": "Acuerdo de boca",
            "Término": "Cargar documentos",
            "Explicación sencilla": "Subir archivos a la plataforma en línea.",
            "Traducción para usuarios no técnicos": "Subir fotos o documentos al sistema desde tu dispositivo.",
            "Sinónimos o equivalentes": "Subir, adjuntar, enviar archivos"
        },
        {
            "Término legal": "Custodia",
            "Descripción": "Se refiere a la responsabilidad limitada de cuidar directamente al niño o adolescente, durante un periodo de tiempo determinando.",
            "Otorgado por": "Acuerdo de boca",
            "Término": "Plataforma",
            "Explicación sencilla": "Sitio web que permite hacer trámites.",
            "Traducción para usuarios no técnicos": "Página web del gobierno para hacer la solicitud.",
            "Sinónimos o equivalentes": "Portal, sistema, sitio"
        },
        {
            "Término legal": "Filiación materna",
            "Descripción": "Cuando el menor solo tiene el apellido de la madre.",
            "Otorgado por": "Registro civil",
            "Término": "Validación de documentos",
            "Explicación sencilla": "Revisión que hace el sistema o personal para comprobar si los documentos son correctos.",
            "Traducción para usuarios no técnicos": "Verificación para ver si todo está bien.",
            "Sinónimos o equivalentes": "Revisión, chequeo"
        },
        {
            "Término legal": "Autoridad Parental Unilateral",
            "Descripción": "Es el otorgamiento judicial de toda responsabilidad parental a uno de los padres de manera temporal.",
            "Otorgado por": "Tribunal NNA",
            "Término": "Notificación",
            "Explicación sencilla": "Mensaje que informa sobre el estado del trámite.",
            "Traducción para usuarios no técnicos": "Aviso por correo o en la página.",
            "Sinónimos o equivalentes": "Alerta, mensaje, correo"
        },
        {
            "Término legal": "Organismos internacionales acreditados en el pais",
            "Descripción": "Son aquellas entidades internacionales que a traves de acuerdos tienen representación en el pais, para funciones especificas y que son debidamente avalados por el MIREX.",
            "Otorgado por": "Acreditado por el MIREX",
            "Término": "Usuario (en línea)",
            "Explicación sencilla": "Cuenta personal para entrar al portal.",
            "Traducción para usuarios no técnicos": "Nombre y contraseña para acceder al sistema.",
            "Sinónimos o equivalentes": "Cuenta, perfil"
        },
        {
            "Término legal": "Patria potestad",
            "Descripción": "Es el derecho legal que tienen los padres sobre sus hijos menores de edad.",
            "Otorgado por": "Registro civil",
            "Término": "Certificación descargable",
            "Explicación sencilla": "Documento que puedes bajar del sitio web.",
            "Traducción para usuarios no técnicos": "Documento digital que puedes guardar o imprimir.",
            "Sinónimos o equivalentes": "Comprobante, constancia"
        },
        {
            "Término legal": "Poder notarial",
            "Descripción": "Documento otorgado ante notario donde una persona (poderdante) autoriza a otra (apoderado) a actuar en su nombre.",
            "Término": "Portal web",
            "Explicación sencilla": "Página oficial de Migración en Internet.",
            "Traducción para usuarios no técnicos": "Página web del gobierno para trámites.",
            "Sinónimos o equivalentes": "Sitio, web oficial"
        },
        {
            "Término legal": "Poder consular",
            "Descripción": "Acto notarial realizado en un consulado dominicano en el exterior, que autentica firmas para documentos que luego serán legalizados u homologados.",
            "Término": "Click",
            "Explicación sencilla": "Acción de presionar un botón del mouse.",
            "Traducción para usuarios no técnicos": "Presiona, selecciona con el mouse.",
            "Sinónimos o equivalentes": "Seleccionar, pulsar"
        },
        {
            "Término legal": "Apostilla",
            "Descripción": "Certificación oficial bajo el Convenio de La Haya (1961) emitida por el MIREX que autentica la firma, sello y origen de un documento público dominicano para su validación en otros países .",
            "Término": "Sistema",
            "Explicación sencilla": "Conjunto de herramientas digitales que procesan tu solicitud.",
            "Traducción para usuarios no técnicos": "La parte tecnológica que hace funcionar el portal.",
            "Sinónimos o equivalentes": "Plataforma, aplicación"
        },
        {
            "Término legal": "Legalización de documentos mediante la Procuraduría General",
            "Descripción": "Consiste en autenticar la firma, sello y, por extensión, la corporación o calidad del funcionario público que certificó el documento. Es un trámite oficial que garantiza la validez de firmas en actos notariales, judiciales y documentos oficiales.",
            "Término": "Validación de documentos",
            "Explicación sencilla": "Verificación de que todo esté correcto.",
            "Traducción para usuarios no técnicos": "Revisión para ver si los papeles están bien.",
            "Sinónimos o equivalentes": "Chequeo, verificación"
        },
        {
            "Término legal": "Homologación",
            "Descripción": "Reconocimiento formal de validez de documentos emitidos en el extranjero, que puede requerir traducción, apostilla/legalización y aprobación por entidades dominicanas.",
            "Término": "Notificación",
            "Explicación sencilla": "Mensaje que informa algo sobre tu trámite.",
            "Traducción para usuarios no técnicos": "Aviso por correo o en el portal.",
            "Sinónimos o equivalentes": "Alerta, mensaje"
        },
        {
            "Término legal": "Tribunal de NNA",
            "Descripción": "Órgano judicial especializado en temas de Niños, Niñas y Adolescentes, encargado de tutelas, custodia y temas migratorios que involucren menores.",
            "Término": "Término",
            "Explicación sencilla": "Explicación sencilla",
            "Traducción para usuarios no técnicos": "Traducción para usuarios no técnicos",
            "Sinónimos o equivalentes": "Sinónimos o equivalentes"
        },
        {
            "Término legal": "Certificación de no apelación (no REVOCACIÓN)",
            "Descripción": "Documento judicial que certifica que una resolución sobre un menor ya es firme, al no haberse apelado o revocado dentro del plazo legal.",
            "Término": "Certificación descargable",
            "Explicación sencilla": "Documento que puedes guardar desde el portal.",
            "Traducción para usuarios no técnicos": "Comprobante que se puede imprimir.",
            "Sinónimos o equivalentes": "Constancia digital"
        },
        {
            "Término legal": "Estatus migratorio",
            "Descripción": "Se refiere a la condición legal de una persona dentro de un país",
            "Término": "Formulario",
            "Explicación sencilla": "Documento con preguntas para llenar.",
            "Traducción para usuarios no técnicos": "Pantalla donde escribes la información solicitada.",
            "Sinónimos o equivalentes": "Solicitud, registro"
        },
        {
            "Término legal": "Carta de ruta o salvo conducto",
            "Descripción": "Documento expedido por autoridades migratorias que permite el tránsito o regreso seguro al país, usualmente para casos especiales o menores sin documentos regulares.",
            "Término": "Datos biometricos",
            "Explicación sencilla": "Información personal (huellas, foto, iris) requerida por migración para identificación del menor en emisión de documentos migratorios, permisos y seguimiento.",
            "Traducción para usuarios no técnicos": "foto y datos de identificación"
        },
        {
            "Término legal": "Interes superior del menor",
            "Descripción": "Principio jurídico prioritario que coloca el bienestar y derechos del menor como la consideración principal en cualquier decisión administrativa o judicial."
        },
        {
            "Término legal": "Certificación de sentencia  (actualización)"
        },
        {
            "Término legal": "Legalización de certificación de sentencia"
        }
    ],
    "notPermissions": [
        // "1",
        "1.1",
        "1.2.3",
        "1.2.4",
        // "2",
        "2.1.1.3",
        "2.1.1.4",
        "2.2",
        // "3",
        "3.1.1.3",
        "3.1.1.4",
        "3.2",
        // "4",
        "4.1.2",
        "5.1"
    ],
    "notFoundCase": [
        "6"
    ]
}

export type HierarchyNode = typeof DATA_DUMB.cases[number];

export type NotPermission = typeof DATA_DUMB.notPermissions;

export type NotFoundCase = typeof DATA_DUMB.notFoundCase;