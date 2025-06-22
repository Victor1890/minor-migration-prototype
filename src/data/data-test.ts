// Este archivo contiene la estructura DATA_DUMB que representa los pasos y requisitos para el proceso.
// Puedes usar esta estructura para alimentar los componentes del flujo de pasos.
//
// Ejemplo de cómo mapear los datos a los componentes:
//
// Paso 1: Usa StatusMigrationMinor y muestra las opciones de DATA_DUMB (nivel raíz)
// Paso 2: Usa MinorStayedOver6Months y muestra las opciones de children del seleccionado en Step 1
// Paso 3: Usa SpecialConditionsPresent y muestra las opciones de children del seleccionado en Step 2
// Document page: Usa Documentation y muestra los requisitos y pasos de children del seleccionado en Step 3
//
// Puedes navegar la estructura usando los campos 'children' para avanzar de nivel.
//
// Implementación sugerida:
// - Al seleccionar una opción en cada paso, guarda el nodo seleccionado y muestra sus hijos en el siguiente paso.
// - Cuando llegues a un nodo hoja (sin children o con solo requisitos), muestra la página de documentación.

export const DATA_DUMB = [
    { // Step 1
        "id": "2",
        "label": "Menor dominicano con otra nacionalidad o residencia en el extranjero",
        "slug": "menor-dominicano-con-otra-nacionalidad-o-residencia-en-el-extranjero",
        "children": [
            { // Step 2
                "id": "2.1",
                "label": "El menor ha estado más de 6 meses en el país",
                "slug": "el-menor-ha-estado-más-de-6-meses-en-el-país",
                "children": [
                    { // Step 3
                        "id": "2.1.1",
                        "label": "Viaja con uno de los padres",
                        "slug": "viaja-con-uno-de-los-padres",
                        "children": [
                            { // Step 4
                                "id": "2.1.1.1",
                                "label": "El padre que no viaja autoriza la salida del menor",
                                "slug": "el-padre-que-no-viaja-autoriza-la-salida-del-menor",
                                "children": [
                                    { // Documentation page
                                        "Requisitos": "1",
                                        "Notas requisitos": "Poder Notarial del padre que no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría. ",
                                        "Paso a paso": "· El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en PuntoGOB Sambil",
                                        "Notas paso a paso": "1. Entrar al portal  https://servicios.migracion.gob.do"
                                    },
                                    {
                                        "Requisitos": "2",
                                        "Notas requisitos": "Foto o copia de acta de nacimiento original, con el código QR legible  ",
                                        "Paso a paso": "Versión reciente con código QR o número de evento.",
                                        "Notas paso a paso": "2. Crear un usuario en el portal de migración"
                                    },
                                    {
                                        "Requisitos": "3",
                                        "Notas requisitos": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                                        "Paso a paso": [],
                                        "Notas paso a paso": "3. Completar los formularios con los datos del menor y del acompañante."
                                    },
                                    {
                                        "Requisitos": "4",
                                        "Notas requisitos": "Foto o copia de la cédula del otro padre que autoriza",
                                        "Paso a paso": [],
                                        "Notas paso a paso": "4. Escanear todos los documentos requeridos"
                                    },
                                    {
                                        "Requisitos": "5",
                                        "Notas requisitos": "Foto o copia de la visa / residencia del acompañante",
                                        "Paso a paso": "Si viaja a un país que requiera visa o residencia",
                                        "Notas paso a paso": "5. Cargar los documentos escaneados o fotos a la plataforma"
                                    },
                                    {
                                        "Requisitos": "6",
                                        "Notas requisitos": "Foto o copia de la visa / residencia del menor",
                                        "Paso a paso": "Si viaja a un país que requiera visa o residencia",
                                        "Notas paso a paso": "6. Esperar validación de los documentos"
                                    },
                                    {
                                        "Requisitos": "7",
                                        "Notas requisitos": "Foto o copia del pasaporte del acompañante",
                                        "Paso a paso": "De la página principal con los datos biométricos.",
                                        "Notas paso a paso": "7. Realizar el pago"
                                    },
                                    {
                                        "Requisitos": "8",
                                        "Notas requisitos": "Foto o copia del pasaporte del menor",
                                        "Paso a paso": "De la página principal con los datos biométricos.",
                                        "Notas paso a paso": "8. Depositar los documentos originales en la oficina de Migración"
                                    },
                                    {
                                        "Requisitos": "9",
                                        "Notas requisitos": "Foto 2x2 reciente del menor",
                                        "Paso a paso": "De frente y reciente.",
                                        "Notas paso a paso": "9. Descargar la certificación en la plataforma: https://servicios.migracion.gob.do"
                                    },
                                    {
                                        "Requisitos": "10",
                                        "Notas requisitos": "Recibo de pago",
                                        "Paso a paso": "Puede realizarse en línea o presencial en BanReservas a nombre del padre, madre o tutor.",
                                        "Notas paso a paso": []
                                    }
                                ]
                            },
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
                                "children": [
                                    {
                                        "Requisitos": "1",
                                        "Notas requisitos": "Poder Notarial de los padres, autorizando la salida del menor del país con la aerolínea, legalizado por procuraduría. ",
                                        "Paso a paso": "· El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en PuntoGOB Sambil",
                                        "Notas paso a paso": "1. Entrar al portal  https://servicios.migracion.gob.do"
                                    },
                                    {
                                        "Requisitos": "2",
                                        "Notas requisitos": "Foto o copia de acta de nacimiento original, con el código QR legible  ",
                                        "Paso a paso": "Versión reciente con código QR o número de evento.",
                                        "Notas paso a paso": "2. Crear un usuario en el portal de migración"
                                    },
                                    {
                                        "Requisitos": "3",
                                        "Notas requisitos": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                                        "Paso a paso": [],
                                        "Notas paso a paso": "3. Completar los formularios con los datos del menor y del acompañante."
                                    },
                                    {
                                        "Requisitos": "4",
                                        "Notas requisitos": "Foto o copia de la cédula del otro padre que autoriza",
                                        "Paso a paso": [],
                                        "Notas paso a paso": "4. Escanear todos los documentos requeridos"
                                    },
                                    {
                                        "Requisitos": "5",
                                        "Notas requisitos": "Foto o copia de la visa / residencia del acompañante",
                                        "Paso a paso": "Si viaja a un país que requiera visa o residencia",
                                        "Notas paso a paso": "5. Cargar los documentos escaneados o fotos a la plataforma"
                                    },
                                    {
                                        "Requisitos": "6",
                                        "Notas requisitos": "Foto o copia de la visa / residencia del menor",
                                        "Paso a paso": "Si viaja a un país que requiera visa o residencia",
                                        "Notas paso a paso": "6. Esperar validación de los documentos"
                                    },
                                    {
                                        "Requisitos": "7",
                                        "Notas requisitos": "Foto o copia del pasaporte del acompañante",
                                        "Paso a paso": "De la página principal con los datos biométricos.",
                                        "Notas paso a paso": "7. Realizar el pago"
                                    },
                                    {
                                        "Requisitos": "8",
                                        "Notas requisitos": "Foto o copia del pasaporte del menor",
                                        "Paso a paso": "De la página principal con los datos biométricos.",
                                        "Notas paso a paso": "8. Depositar los documentos originales en la oficina de Migración"
                                    },
                                    {
                                        "Requisitos": "9",
                                        "Notas requisitos": "Foto 2x2 reciente del menor",
                                        "Paso a paso": "De frente y reciente.",
                                        "Notas paso a paso": "9. Descargar la certificación en la plataforma: https://servicios.migracion.gob.do"
                                    },
                                    {
                                        "Requisitos": "10",
                                        "Notas requisitos": "Recibo de pago",
                                        "Paso a paso": "Puede realizarse en línea o presencial en BanReservas a nombre del padre, madre o tutor.",
                                        "Notas paso a paso": []
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
                        "Requisitos": "Nada",
                        "Notas requisitos": "No requiere presentar PSM",
                        "Paso a paso": [],
                        "Notas paso a paso": []
                    }
                ]
            }
        ]
    }
]