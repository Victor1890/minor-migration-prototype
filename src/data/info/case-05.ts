export const CASE_05 = {
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
}