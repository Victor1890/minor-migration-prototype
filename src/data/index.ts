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
    {
        "id": "1",
        "label": "Menor tiene únicamente nacionalidad dominicana",
        "slug": "menor-tiene-únicamente-nacionalidad-dominicana",
        "children": [
            {
                "id": "1.1",
                "label": "Viaja con ambos padres",
                "slug": "viaja-con-ambos-padres",
                "children": [
                    {
                        "Requisitos": [],
                        "Notas requisitos": "Ninguno",
                        "Paso a paso": "No requiere presentar PSM en Control Migratorio"
                    }
                ]
            },
            {
                "id": "1.2",
                "label": "Viaja con uno de los padres",
                "slug": "viaja-con-uno-de-los-padres",
                "children": [
                    {
                        "id": "1.2.1",
                        "label": "Cuando uno de los padres autoriza al otro a viajar con el menor",
                        "slug": "cuando-uno-de-los-padres-autoriza-al-otro-a-viajar-con-el-menor",
                        "description": "Cuando uno de los padres autoriza al otro a viajar con el menor",
                        "children": [
                            {
                                "Requisitos": "1",
                                "Notas requisitos": "Poder Notarial del padre o madre que no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría. ",
                                "Paso a paso": "· El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en PuntoGOB ",
                                "Notas paso a paso": "1. Entrar al portal  https://servicios.migracion.gob.do"
                            },
                            {
                                "Requisitos": "2",
                                "Notas requisitos": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                                "Paso a paso": [],
                                "Notas paso a paso": "2. Crear un usuario en el portal de migración"
                            },
                            {
                                "Requisitos": "3",
                                "Notas requisitos": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                                "Paso a paso": "Versión nueva",
                                "Notas paso a paso": "3. Completar los formularios con los datos del menor y del acompañante."
                            },
                            {
                                "Requisitos": "4",
                                "Notas requisitos": "Foto o copia de la cédula del otro padre que autoriza",
                                "Paso a paso": "Versión nueva",
                                "Notas paso a paso": "4. Escanear todos los documentos requeridos"
                            },
                            {
                                "Requisitos": "5",
                                "Notas requisitos": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                "Paso a paso": "Si viaja a un país que requiera visa o residencia",
                                "Notas paso a paso": "5. Cargar los documentos escaneados o fotos a la plataforma"
                            },
                            {
                                "Requisitos": "6",
                                "Notas requisitos": "Foto o copia de la visa / residencia / permiso de estadía del menor",
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
                                "Notas requisitos": "1 Foto 2x2 reciente del menor",
                                "Paso a paso": "De frente, reciente y fondo claro",
                                "Notas paso a paso": "9. Descargar la certificación en la plataforma: https://servicios.migracion.gob.do"
                            },
                            {
                                "Requisitos": "10",
                                "Notas requisitos": "Recibo de pago del servicio ",
                                "Paso a paso": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor.",
                                "Notas paso a paso": []
                            }
                        ]
                    },
                    {
                        "id": "1.2.2",
                        "label": "Tiene la guarda (de hecho o legal) del menor",
                        "slug": "tiene-la-guarda-(de-hecho-o-legal)-del-menor",
                        "description": "Cuando el menor viaja con la persona que tiene la guarda legal de este",
                        "children": [
                            {
                                "Requisitos": "1",
                                "Notas requisitos": "Poder Notarial de los padres, autorizando la salida del menor del país con el guarda, legalizado por procuraduría. ",
                                "Paso a paso": "· Ambos padres deben firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil.",
                                "Notas paso a paso": "1. Entrar al portal  https://servicios.migracion.gob.do"
                            },
                            {
                                "Requisitos": "2",
                                "Notas requisitos": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                                "Paso a paso": [],
                                "Notas paso a paso": "2. Crear un usuario en el portal de migración"
                            },
                            {
                                "Requisitos": "3",
                                "Notas requisitos": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                                "Paso a paso": "Versión nueva",
                                "Notas paso a paso": "3. Completar los formularios con los datos del menor y del acompañante."
                            },
                            {
                                "Requisitos": "4",
                                "Notas requisitos": "Foto o copia de la cédula del otro padre que autoriza",
                                "Paso a paso": "Versión nueva",
                                "Notas paso a paso": "4. Escanear todos los documentos requeridos"
                            },
                            {
                                "Requisitos": "5",
                                "Notas requisitos": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                "Paso a paso": "Si viaja a un país que requiera visa o residencia",
                                "Notas paso a paso": "5. Cargar los documentos escaneados o fotos a la plataforma"
                            },
                            {
                                "Requisitos": "6",
                                "Notas requisitos": "Foto o copia de la visa / residencia / permiso de estadía del menor",
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
                                "Notas requisitos": "1 Foto 2x2 reciente del menor",
                                "Paso a paso": "De frente, reciente y fondo claro",
                                "Notas paso a paso": "9. Descargar la certificación en la plataforma: https://servicios.migracion.gob.do"
                            },
                            {
                                "Requisitos": "10",
                                "Notas requisitos": "Recibo de pago del servicio ",
                                "Paso a paso": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor.",
                                "Notas paso a paso": []
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
                                "Requisitos": "1",
                                "Notas requisitos": "Acta de nacimiento",
                                "Paso a paso": "Presentar acta en el  punto de Control Migratorio",
                                "Notas paso a paso": []
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
                                "Requisitos": "1",
                                "Notas requisitos": "Mostrar en Control Migratorio el acta de defunción y acta de nacimiento del menor",
                                "Paso a paso": [],
                                "Notas paso a paso": []
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
                                "Requisitos": "1",
                                "Notas requisitos": "Sentencia del tribunal  de niños, niñas y adolescentes que evidencie la adopción",
                                "Paso a paso": "· Ir al tribunal de niños, niñas y adolescentes\r\n· Solicitar la sentencia donde se les otorga la adopción",
                                "Notas paso a paso": "1. Entrar al portal  https://servicios.migracion.gob.do"
                            },
                            {
                                "Requisitos": "2",
                                "Notas requisitos": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                                "Paso a paso": [],
                                "Notas paso a paso": "2. Crear un usuario en el portal de migración"
                            },
                            {
                                "Requisitos": "3",
                                "Notas requisitos": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                                "Paso a paso": "Versión nueva",
                                "Notas paso a paso": "3. Completar los formularios con los datos del menor y del acompañante."
                            },
                            {
                                "Requisitos": "4",
                                "Notas requisitos": "Foto o copia de la cédula del otro padre que autoriza",
                                "Paso a paso": "Versión nueva",
                                "Notas paso a paso": "4. Escanear todos los documentos requeridos"
                            },
                            {
                                "Requisitos": "5",
                                "Notas requisitos": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                "Paso a paso": "Si viaja a un país que requiera visa o residencia",
                                "Notas paso a paso": "5. Cargar los documentos escaneados o fotos a la plataforma"
                            },
                            {
                                "Requisitos": "6",
                                "Notas requisitos": "Foto o copia de la visa / residencia / permiso de estadía del menor",
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
                                "Notas requisitos": "1 Foto 2x2 reciente del menor",
                                "Paso a paso": "De frente, reciente y fondo claro",
                                "Notas paso a paso": "9. Descargar la certificación en la plataforma: https://servicios.migracion.gob.do"
                            },
                            {
                                "Requisitos": "10",
                                "Notas requisitos": "Recibo de pago del servicio ",
                                "Paso a paso": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor.",
                                "Notas paso a paso": []
                            }
                        ]
                    },
                    {
                        "id": "1.2.6",
                        "label": "Uno de los padres vive en el extranjero",
                        "slug": "uno-de-los-padres-vive-en-el-extranjero",
                        "description": "Cuando el menor viaja acompañado padre o madre que está en el país, y el padre en el extranjero es quien autoriza la salida del menor",
                        "children": [
                            {
                                "Requisitos": "1",
                                "Notas requisitos": "Poder consular de la embajada, consulado o representación del país en donde se encuentra el padre (debe ser apostillado y sellado en cancilleria) o Poder Notarial del país donde se encuentre el padre en  original apostilla de la Haya",
                                "Paso a paso": "· El padre en el extranjero debe firmar el poder consular (en el consulado más cercana) autorizando la salida del menor.\r\n· Este poder debe ser legalizado en el Ministerio de Relaciones Exteriores de la República Dominicana.",
                                "Notas paso a paso": "1. Entrar al portal  https://servicios.migracion.gob.do"
                            },
                            {
                                "Requisitos": "2",
                                "Notas requisitos": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                                "Paso a paso": [],
                                "Notas paso a paso": "2. Crear un usuario en el portal de migración"
                            },
                            {
                                "Requisitos": "3",
                                "Notas requisitos": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                                "Paso a paso": "Versión nueva",
                                "Notas paso a paso": "3. Completar los formularios con los datos del menor y del acompañante."
                            },
                            {
                                "Requisitos": "4",
                                "Notas requisitos": "Foto o copia de la cédula del otro padre que autoriza",
                                "Paso a paso": "Versión nueva",
                                "Notas paso a paso": "4. Escanear todos los documentos requeridos"
                            },
                            {
                                "Requisitos": "5",
                                "Notas requisitos": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                "Paso a paso": "Si viaja a un país que requiera visa o residencia",
                                "Notas paso a paso": "5. Cargar los documentos escaneados o fotos a la plataforma"
                            },
                            {
                                "Requisitos": "6",
                                "Notas requisitos": "Foto o copia de la visa / residencia / permiso de estadía del menor",
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
                                "Notas requisitos": "1 Foto 2x2 reciente del menor",
                                "Paso a paso": "De frente, reciente y fondo claro",
                                "Notas paso a paso": "9. Descargar la certificación en la plataforma: https://servicios.migracion.gob.do"
                            },
                            {
                                "Requisitos": "10",
                                "Notas requisitos": "Recibo de pago del servicio ",
                                "Paso a paso": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor.",
                                "Notas paso a paso": []
                            }
                        ]
                    },
                    {
                        "id": "1.2.7",
                        "label": "Tiene autorización de viaje del menor del tribunal NNA",
                        "slug": "tiene-autorización-de-viaje-del-menor-del-tribunal-nna",
                        "description": "Cuando el menor viaja con la persona que tiene la guarda legal con autorización de viaje",
                        "children": [
                            {
                                "Requisitos": "1",
                                "Notas requisitos": "Sentencia Judicial que otorga la guarda legal y autorización de viaje del menor",
                                "Paso a paso": "· Ir al tribunal de niños, niñas y adolescentes\r\n· Solicitar la sentencia donde se les otorga la Guarda Legal y Autorización de viaje del menor",
                                "Notas paso a paso": "1. Entrar al portal  https://servicios.migracion.gob.do"
                            },
                            {
                                "Requisitos": "2",
                                "Notas requisitos": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                                "Paso a paso": [],
                                "Notas paso a paso": "2. Crear un usuario en el portal de migración"
                            },
                            {
                                "Requisitos": "3",
                                "Notas requisitos": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                                "Paso a paso": "Versión nueva",
                                "Notas paso a paso": "3. Completar los formularios con los datos del menor y del acompañante."
                            },
                            {
                                "Requisitos": "4",
                                "Notas requisitos": "Foto o copia de la cédula del otro padre que autoriza",
                                "Paso a paso": "Versión nueva",
                                "Notas paso a paso": "4. Escanear todos los documentos requeridos"
                            },
                            {
                                "Requisitos": "5",
                                "Notas requisitos": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                "Paso a paso": "Si viaja a un país que requiera visa o residencia",
                                "Notas paso a paso": "5. Cargar los documentos escaneados o fotos a la plataforma"
                            },
                            {
                                "Requisitos": "6",
                                "Notas requisitos": "Foto o copia de la visa / residencia / permiso de estadía del menor",
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
                                "Notas requisitos": "1 Foto 2x2 reciente del menor",
                                "Paso a paso": "De frente, reciente y fondo claro",
                                "Notas paso a paso": "9. Descargar la certificación en la plataforma: https://servicios.migracion.gob.do"
                            },
                            {
                                "Requisitos": "10",
                                "Notas requisitos": "Recibo de pago del servicio ",
                                "Paso a paso": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor.",
                                "Notas paso a paso": []
                            }
                        ]
                    },
                    {
                        "id": "1.2.8",
                        "label": "Viaja a una actividad cultural, escolar o deportiva",
                        "slug": "viaja-a-una-actividad-cultural,-escolar-o-deportiva",
                        "children": [
                            {
                                "Requisitos": "1",
                                "Notas requisitos": "Poder Notarial del padre que no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría. ",
                                "Paso a paso": "· El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en PuntoGOB Sambil",
                                "Notas paso a paso": "1. Entrar al portal  https://servicios.migracion.gob.do"
                            },
                            {
                                "Requisitos": "2",
                                "Notas requisitos": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                                "Paso a paso": [],
                                "Notas paso a paso": "2. Crear un usuario en el portal de migración"
                            },
                            {
                                "Requisitos": "3",
                                "Notas requisitos": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                                "Paso a paso": "Versión nueva",
                                "Notas paso a paso": "3. Completar los formularios con los datos del menor y del acompañante."
                            },
                            {
                                "Requisitos": "4",
                                "Notas requisitos": "Foto o copia de la cédula del otro padre que autoriza",
                                "Paso a paso": "Versión nueva",
                                "Notas paso a paso": "4. Escanear todos los documentos requeridos"
                            },
                            {
                                "Requisitos": "5",
                                "Notas requisitos": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                "Paso a paso": "Si viaja a un país que requiera visa o residencia",
                                "Notas paso a paso": "5. Cargar los documentos escaneados o fotos a la plataforma"
                            },
                            {
                                "Requisitos": "6",
                                "Notas requisitos": "Foto o copia de la visa / residencia / permiso de estadía del menor",
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
                                "Notas requisitos": "1 Foto 2x2 reciente del menor",
                                "Paso a paso": "De frente, reciente y fondo claro",
                                "Notas paso a paso": "9. Descargar la certificación en la plataforma: https://servicios.migracion.gob.do"
                            },
                            {
                                "Requisitos": "10",
                                "Notas requisitos": "Recibo de pago del servicio ",
                                "Paso a paso": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor.",
                                "Notas paso a paso": []
                            }
                        ]
                    },
                    {
                        "id": "1.2.9",
                        "label": "Cuando no se tiene la autorización de uno de los padres",
                        "slug": "cuando-no-se-tiene-la-autorización-de-uno-de-los-padres",
                        "children": [
                            {
                                "Requisitos": "1",
                                "Notas requisitos": "Sentencia Judicial que otorga la guarda legal y autorización de viaje del menor",
                                "Paso a paso": "· Ir al tribunal de niños, niñas y adolescentes\r\n· Solicitar la sentencia donde se les otorga la patria potestad ",
                                "Notas paso a paso": "1. Entrar al portal  https://servicios.migracion.gob.do"
                            },
                            {
                                "Requisitos": "2",
                                "Notas requisitos": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                                "Paso a paso": [],
                                "Notas paso a paso": "2. Crear un usuario en el portal de migración"
                            },
                            {
                                "Requisitos": "3",
                                "Notas requisitos": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                                "Paso a paso": "Versión nueva",
                                "Notas paso a paso": "3. Completar los formularios con los datos del menor y del acompañante."
                            },
                            {
                                "Requisitos": "4",
                                "Notas requisitos": "Foto o copia de la cédula del otro padre que autoriza",
                                "Paso a paso": "Versión nueva",
                                "Notas paso a paso": "4. Escanear todos los documentos requeridos"
                            },
                            {
                                "Requisitos": "5",
                                "Notas requisitos": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                "Paso a paso": "Si viaja a un país que requiera visa o residencia",
                                "Notas paso a paso": "5. Cargar los documentos escaneados o fotos a la plataforma"
                            },
                            {
                                "Requisitos": "6",
                                "Notas requisitos": "Foto o copia de la visa / residencia / permiso de estadía del menor",
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
                                "Notas requisitos": "1 Foto 2x2 reciente del menor",
                                "Paso a paso": "De frente, reciente y fondo claro",
                                "Notas paso a paso": "9. Descargar la certificación en la plataforma: https://servicios.migracion.gob.do"
                            },
                            {
                                "Requisitos": "10",
                                "Notas requisitos": "Recibo de pago del servicio ",
                                "Paso a paso": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor.",
                                "Notas paso a paso": []
                            }
                        ]
                    }
                ]
            },
            {
                "id": "1.3",
                "label": "Viaja con un tercero",
                "slug": "viaja-con-un-tercero",
                "children": [
                    {
                        "id": "1.3.1",
                        "label": "Viaja con la aerolínea",
                        "slug": "viaja-con-la-aerolínea",
                        "description": "Cuando el menor viaja con la Aerolínea y cuenta con la autorización de los padres, padre, madre o tutor legal",
                        "children": [
                            {
                                "Requisitos": "1",
                                "Notas requisitos": "Poder Notarial de ambos padres, padre, madre o tutor legal autorizando la salida del menor del país con la aerolínea, legalizado por procuraduría. ",
                                "Paso a paso": "· El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en PuntoGOB Sambil",
                                "Notas paso a paso": "1. Entrar al portal  https://servicios.migracion.gob.do"
                            },
                            {
                                "Requisitos": "2",
                                "Notas requisitos": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                                "Paso a paso": [],
                                "Notas paso a paso": "2. Crear un usuario en el portal de migración"
                            },
                            {
                                "Requisitos": "3",
                                "Notas requisitos": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                                "Paso a paso": "Versión nueva",
                                "Notas paso a paso": "3. Completar los formularios con los datos del menor y del acompañante."
                            },
                            {
                                "Requisitos": "4",
                                "Notas requisitos": "Foto o copia de la cédula del otro padre que autoriza",
                                "Paso a paso": "Versión nueva",
                                "Notas paso a paso": "4. Escanear todos los documentos requeridos"
                            },
                            {
                                "Requisitos": "5",
                                "Notas requisitos": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                "Paso a paso": "Si viaja a un país que requiera visa o residencia",
                                "Notas paso a paso": "5. Cargar los documentos escaneados o fotos a la plataforma"
                            },
                            {
                                "Requisitos": "6",
                                "Notas requisitos": "Foto o copia de la visa / residencia / permiso de estadía del menor",
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
                                "Notas requisitos": "1 Foto 2x2 reciente del menor",
                                "Paso a paso": "De frente, reciente y fondo claro",
                                "Notas paso a paso": "9. Descargar la certificación en la plataforma: https://servicios.migracion.gob.do"
                            },
                            {
                                "Requisitos": "10",
                                "Notas requisitos": "Recibo de pago del servicio ",
                                "Paso a paso": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor.",
                                "Notas paso a paso": []
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
                                "Requisitos": "1",
                                "Notas requisitos": "Poder Notarial de los padres, autorizando la salida del menor del país con el centro educativo, legalizado por procuraduría. ",
                                "Paso a paso": "· Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerolínea. \r\n· Este poder debe ser legalizado en la Procuraduría General de la República.\r\n· Los padres de todos los menores pueden hacer un solo poder notarial, donde estén las firmas de todos los padres que autorizan la salida de los menores.",
                                "Notas paso a paso": "1. Entrar al portal  https://servicios.migracion.gob.do"
                            },
                            {
                                "Requisitos": "2",
                                "Notas requisitos": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                                "Paso a paso": [],
                                "Notas paso a paso": "2. Crear un usuario en el portal de migración"
                            },
                            {
                                "Requisitos": "3",
                                "Notas requisitos": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                                "Paso a paso": "Versión nueva",
                                "Notas paso a paso": "3. Completar los formularios con los datos del menor y del acompañante."
                            },
                            {
                                "Requisitos": "4",
                                "Notas requisitos": "Foto o copia de la cédula del otro padre que autoriza",
                                "Paso a paso": "Versión nueva",
                                "Notas paso a paso": "4. Escanear todos los documentos requeridos"
                            },
                            {
                                "Requisitos": "5",
                                "Notas requisitos": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                "Paso a paso": "Si viaja a un país que requiera visa o residencia",
                                "Notas paso a paso": "5. Cargar los documentos escaneados o fotos a la plataforma"
                            },
                            {
                                "Requisitos": "6",
                                "Notas requisitos": "Foto o copia de la visa / residencia / permiso de estadía del menor",
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
                                "Notas requisitos": "1 Foto 2x2 reciente del menor",
                                "Paso a paso": "De frente, reciente y fondo claro",
                                "Notas paso a paso": "9. Descargar la certificación en la plataforma: https://servicios.migracion.gob.do"
                            },
                            {
                                "Requisitos": "10",
                                "Notas requisitos": "Recibo de pago del servicio ",
                                "Paso a paso": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor.",
                                "Notas paso a paso": []
                            }
                        ]
                    },
                    {
                        "id": "1.3.3",
                        "label": "Viaja con academia, selección o liga deportiva",
                        "slug": "viaja-con-academia,-selección-o-liga-deportiva",
                        "children": [
                            {
                                "Requisitos": "1",
                                "Notas requisitos": "Poder Notarial de los padres, autorizando la salida del menor del país con la academia deportiva, legalizado por procuraduría. ",
                                "Paso a paso": "· Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerolínea. \r\n· Este poder debe ser legalizado en la Procuraduría General de la República.\r\n· Los padres de todos los menores pueden hacer un solo poder notarial, donde estén las firmas de todos los padres que autorizan la salida de los menores.",
                                "Notas paso a paso": "1. Entrar al portal  https://servicios.migracion.gob.do"
                            },
                            {
                                "Requisitos": "2",
                                "Notas requisitos": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                                "Paso a paso": [],
                                "Notas paso a paso": "2. Crear un usuario en el portal de migración"
                            },
                            {
                                "Requisitos": "3",
                                "Notas requisitos": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                                "Paso a paso": "Versión nueva",
                                "Notas paso a paso": "3. Completar los formularios con los datos del menor y del acompañante."
                            },
                            {
                                "Requisitos": "4",
                                "Notas requisitos": "Foto o copia de la cédula del otro padre que autoriza",
                                "Paso a paso": "Versión nueva",
                                "Notas paso a paso": "4. Escanear todos los documentos requeridos"
                            },
                            {
                                "Requisitos": "5",
                                "Notas requisitos": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                "Paso a paso": "Si viaja a un país que requiera visa o residencia",
                                "Notas paso a paso": "5. Cargar los documentos escaneados o fotos a la plataforma"
                            },
                            {
                                "Requisitos": "6",
                                "Notas requisitos": "Foto o copia de la visa / residencia / permiso de estadía del menor",
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
                                "Notas requisitos": "1 Foto 2x2 reciente del menor",
                                "Paso a paso": "De frente, reciente y fondo claro",
                                "Notas paso a paso": "9. Descargar la certificación en la plataforma: https://servicios.migracion.gob.do"
                            },
                            {
                                "Requisitos": "10",
                                "Notas requisitos": "Recibo de pago del servicio ",
                                "Paso a paso": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor.",
                                "Notas paso a paso": []
                            }
                        ]
                    },
                    {
                        "id": "1.3.4",
                        "label": "Viaja con la persona que posee la guarda custodia (de hecho o legal)",
                        "slug": "viaja-con-la-persona-que-posee-la-guarda-custodia-(de-hecho-o-legal)",
                        "children": [
                            {
                                "Requisitos": "1",
                                "Notas requisitos": "Poder Notarial de los padres, autorizando la salida del menor del país con el guarda custodia legal, legalizado por procuraduría. ",
                                "Paso a paso": "· Ambos padres deben firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil.",
                                "Notas paso a paso": "1. Entrar al portal  https://servicios.migracion.gob.do"
                            },
                            {
                                "Requisitos": "2",
                                "Notas requisitos": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                                "Paso a paso": [],
                                "Notas paso a paso": "2. Crear un usuario en el portal de migración"
                            },
                            {
                                "Requisitos": "3",
                                "Notas requisitos": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                                "Paso a paso": "Versión nueva",
                                "Notas paso a paso": "3. Completar los formularios con los datos del menor y del acompañante."
                            },
                            {
                                "Requisitos": "4",
                                "Notas requisitos": "Foto o copia de la cédula del otro padre que autoriza",
                                "Paso a paso": "Versión nueva",
                                "Notas paso a paso": "4. Escanear todos los documentos requeridos"
                            },
                            {
                                "Requisitos": "5",
                                "Notas requisitos": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                "Paso a paso": "Si viaja a un país que requiera visa o residencia",
                                "Notas paso a paso": "5. Cargar los documentos escaneados o fotos a la plataforma"
                            },
                            {
                                "Requisitos": "6",
                                "Notas requisitos": "Foto o copia de la visa / residencia / permiso de estadía del menor",
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
                                "Notas requisitos": "1 Foto 2x2 reciente del menor",
                                "Paso a paso": "De frente, reciente y fondo claro",
                                "Notas paso a paso": "9. Descargar la certificación en la plataforma: https://servicios.migracion.gob.do"
                            },
                            {
                                "Requisitos": "10",
                                "Notas requisitos": "Recibo de pago del servicio ",
                                "Paso a paso": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor.",
                                "Notas paso a paso": []
                            }
                        ]
                    },
                    {
                        "id": "1.3.5",
                        "label": "Menor  tiene un solo apellido (materno) y  no viaja con su madre",
                        "slug": "menor-tiene-un-solo-apellido-(materno)-y-no-viaja-con-su-madre",
                        "children": [
                            {
                                "Requisitos": "1",
                                "Notas requisitos": "Poder Notarial de la madre que no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría. ",
                                "Paso a paso": "· La madre debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil.",
                                "Notas paso a paso": "1. Entrar al portal  https://servicios.migracion.gob.do"
                            },
                            {
                                "Requisitos": "2",
                                "Notas requisitos": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                                "Paso a paso": [],
                                "Notas paso a paso": "2. Crear un usuario en el portal de migración"
                            },
                            {
                                "Requisitos": "3",
                                "Notas requisitos": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                                "Paso a paso": "Versión nueva",
                                "Notas paso a paso": "3. Completar los formularios con los datos del menor y del acompañante."
                            },
                            {
                                "Requisitos": "4",
                                "Notas requisitos": "Foto o copia de la cédula del otro padre que autoriza",
                                "Paso a paso": "Versión nueva",
                                "Notas paso a paso": "4. Escanear todos los documentos requeridos"
                            },
                            {
                                "Requisitos": "5",
                                "Notas requisitos": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                "Paso a paso": "Si viaja a un país que requiera visa o residencia",
                                "Notas paso a paso": "5. Cargar los documentos escaneados o fotos a la plataforma"
                            },
                            {
                                "Requisitos": "6",
                                "Notas requisitos": "Foto o copia de la visa / residencia / permiso de estadía del menor",
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
                                "Notas requisitos": "1 Foto 2x2 reciente del menor",
                                "Paso a paso": "De frente, reciente y fondo claro",
                                "Notas paso a paso": "9. Descargar la certificación en la plataforma: https://servicios.migracion.gob.do"
                            },
                            {
                                "Requisitos": "10",
                                "Notas requisitos": "Recibo de pago del servicio ",
                                "Paso a paso": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor.",
                                "Notas paso a paso": []
                            }
                        ]
                    },
                    {
                        "id": "1.3.6",
                        "label": "Uno de los padres ha fallecido y no viaja con el padre/madre sobreviviente",
                        "slug": "uno-de-los-padres-ha-fallecido-y-no-viaja-con-el-padre/madre-sobreviviente",
                        "children": [
                            {
                                "Requisitos": "1",
                                "Notas requisitos": "Poder Notarial del padre sobreviviente que no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría. ",
                                "Paso a paso": "· El padre sobreviviente debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil.",
                                "Notas paso a paso": "1. Entrar al portal  https://servicios.migracion.gob.do"
                            },
                            {
                                "Requisitos": "2",
                                "Notas requisitos": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                                "Paso a paso": [],
                                "Notas paso a paso": "2. Crear un usuario en el portal de migración"
                            },
                            {
                                "Requisitos": "3",
                                "Notas requisitos": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                                "Paso a paso": "Versión nueva",
                                "Notas paso a paso": "3. Completar los formularios con los datos del menor y del acompañante."
                            },
                            {
                                "Requisitos": "4",
                                "Notas requisitos": "Foto o copia de la cédula del otro padre que autoriza",
                                "Paso a paso": "Versión nueva",
                                "Notas paso a paso": "4. Escanear todos los documentos requeridos"
                            },
                            {
                                "Requisitos": "5",
                                "Notas requisitos": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                "Paso a paso": "Si viaja a un país que requiera visa o residencia",
                                "Notas paso a paso": "5. Cargar los documentos escaneados o fotos a la plataforma"
                            },
                            {
                                "Requisitos": "6",
                                "Notas requisitos": "Foto o copia de la visa / residencia / permiso de estadía del menor",
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
                                "Notas requisitos": "1 Foto 2x2 reciente del menor",
                                "Paso a paso": "De frente, reciente y fondo claro",
                                "Notas paso a paso": "9. Descargar la certificación en la plataforma: https://servicios.migracion.gob.do"
                            },
                            {
                                "Requisitos": "10",
                                "Notas requisitos": "Recibo de pago del servicio ",
                                "Paso a paso": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor.",
                                "Notas paso a paso": []
                            }
                        ]
                    },
                    {
                        "id": "1.3.7",
                        "label": "Viaja con una persona autorizada por el tutor legal",
                        "slug": "viaja-con-una-persona-autorizada-por-el-tutor-legal",
                        "children": [
                            {
                                "Requisitos": "1",
                                "Notas requisitos": "Poder Notarial del tutor legal que no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría. ",
                                "Paso a paso": "· El tutor legal debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil.",
                                "Notas paso a paso": "1. Entrar al portal  https://servicios.migracion.gob.do"
                            },
                            {
                                "Requisitos": "2",
                                "Notas requisitos": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                                "Paso a paso": [],
                                "Notas paso a paso": "2. Crear un usuario en el portal de migración"
                            },
                            {
                                "Requisitos": "3",
                                "Notas requisitos": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                                "Paso a paso": "Versión nueva",
                                "Notas paso a paso": "3. Completar los formularios con los datos del menor y del acompañante."
                            },
                            {
                                "Requisitos": "4",
                                "Notas requisitos": "Foto o copia de la cédula del otro padre que autoriza",
                                "Paso a paso": "Versión nueva",
                                "Notas paso a paso": "4. Escanear todos los documentos requeridos"
                            },
                            {
                                "Requisitos": "5",
                                "Notas requisitos": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                "Paso a paso": "Si viaja a un país que requiera visa o residencia",
                                "Notas paso a paso": "5. Cargar los documentos escaneados o fotos a la plataforma"
                            },
                            {
                                "Requisitos": "6",
                                "Notas requisitos": "Foto o copia de la visa / residencia / permiso de estadía del menor",
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
                                "Notas requisitos": "1 Foto 2x2 reciente del menor",
                                "Paso a paso": "De frente, reciente y fondo claro",
                                "Notas paso a paso": "9. Descargar la certificación en la plataforma: https://servicios.migracion.gob.do"
                            },
                            {
                                "Requisitos": "10",
                                "Notas requisitos": "Recibo de pago del servicio ",
                                "Paso a paso": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor.",
                                "Notas paso a paso": []
                            }
                        ]
                    },
                    {
                        "id": "1.3.8",
                        "label": "Ambos padres viven en el extranjero",
                        "slug": "ambos-padres-viven-en-el-extranjero",
                        "description": "Revisar caso",
                        "children": [
                            {
                                "Requisitos": "1",
                                "Notas requisitos": "Poder consular de la embajada, consulado o representación del país en donde se encuentra el padre (debe ser apostillado y sellado en cancilleria) o Poder Notarial del país donde se encuentre el padre en  original apostilla de la Haya",
                                "Paso a paso": "· El padre en el extranjero debe firmar el poder consular (en el consulado más cercana) autorizando la salida del menor.\r\n· Este poder debe ser legalizado en el Ministerio de Relaciones Exteriores de la República Dominicana.",
                                "Notas paso a paso": "1. Entrar al portal  https://servicios.migracion.gob.do"
                            },
                            {
                                "Requisitos": "2",
                                "Notas requisitos": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                                "Paso a paso": [],
                                "Notas paso a paso": "2. Crear un usuario en el portal de migración"
                            },
                            {
                                "Requisitos": "3",
                                "Notas requisitos": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                                "Paso a paso": "Versión nueva",
                                "Notas paso a paso": "3. Completar los formularios con los datos del menor y del acompañante."
                            },
                            {
                                "Requisitos": "4",
                                "Notas requisitos": "Foto o copia de la cédula del otro padre que autoriza",
                                "Paso a paso": "Versión nueva",
                                "Notas paso a paso": "4. Escanear todos los documentos requeridos"
                            },
                            {
                                "Requisitos": "5",
                                "Notas requisitos": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                "Paso a paso": "Si viaja a un país que requiera visa o residencia",
                                "Notas paso a paso": "5. Cargar los documentos escaneados o fotos a la plataforma"
                            },
                            {
                                "Requisitos": "6",
                                "Notas requisitos": "Foto o copia de la visa / residencia / permiso de estadía del menor",
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
                                "Notas requisitos": "1 Foto 2x2 reciente del menor",
                                "Paso a paso": "De frente, reciente y fondo claro",
                                "Notas paso a paso": "9. Descargar la certificación en la plataforma: https://servicios.migracion.gob.do"
                            },
                            {
                                "Requisitos": "10",
                                "Notas requisitos": "Recibo de pago del servicio ",
                                "Paso a paso": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor.",
                                "Notas paso a paso": []
                            }
                        ]
                    },
                    {
                        "id": "1.3.9",
                        "label": "Cuando no se tiene la autorización de uno de los padres",
                        "slug": "cuando-no-se-tiene-la-autorización-de-uno-de-los-padres",
                        "children": [
                            {
                                "Requisitos": "1",
                                "Notas requisitos": "Sentencia Judicial que otorga la guarda legal y autorización de viaje del menor",
                                "Paso a paso": "· Ir al tribunal de niños, niñas y adolescentes\r\n· Solicitar la sentencia donde se les otorga la patria potestad ",
                                "Notas paso a paso": "1. Entrar al portal  https://servicios.migracion.gob.do"
                            },
                            {
                                "Requisitos": "2",
                                "Notas requisitos": "Poder Notarial del padre que tiene la patria potestad y no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría. ",
                                "Paso a paso": "· El padre debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil.",
                                "Notas paso a paso": "2. Crear un usuario en el portal de migración"
                            },
                            {
                                "Requisitos": "3",
                                "Notas requisitos": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                                "Paso a paso": [],
                                "Notas paso a paso": "3. Completar los formularios con los datos del menor y del acompañante."
                            },
                            {
                                "Requisitos": "4",
                                "Notas requisitos": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                                "Paso a paso": "Versión nueva",
                                "Notas paso a paso": "4. Escanear todos los documentos requeridos"
                            },
                            {
                                "Requisitos": "5",
                                "Notas requisitos": "Foto o copia de la cédula del otro padre que autoriza",
                                "Paso a paso": "Versión nueva",
                                "Notas paso a paso": "5. Cargar los documentos escaneados o fotos a la plataforma"
                            },
                            {
                                "Requisitos": "6",
                                "Notas requisitos": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                "Paso a paso": "Si viaja a un país que requiera visa o residencia",
                                "Notas paso a paso": "6. Esperar validación de los documentos"
                            },
                            {
                                "Requisitos": "7",
                                "Notas requisitos": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                "Paso a paso": "Si viaja a un país que requiera visa o residencia",
                                "Notas paso a paso": "7. Realizar el pago"
                            },
                            {
                                "Requisitos": "8",
                                "Notas requisitos": "Foto o copia del pasaporte del acompañante",
                                "Paso a paso": "De la página principal con los datos biométricos.",
                                "Notas paso a paso": "8. Depositar los documentos originales en la oficina de Migración"
                            },
                            {
                                "Requisitos": "9",
                                "Notas requisitos": "Foto o copia del pasaporte del menor",
                                "Paso a paso": "De la página principal con los datos biométricos.",
                                "Notas paso a paso": "9. Descargar la certificación en la plataforma: https://servicios.migracion.gob.do"
                            },
                            {
                                "Requisitos": "10",
                                "Notas requisitos": "1 Foto 2x2 reciente del menor",
                                "Paso a paso": "De frente, reciente y fondo claro",
                                "Notas paso a paso": []
                            },
                            {
                                "Requisitos": "11",
                                "Notas requisitos": "Recibo de pago del servicio ",
                                "Paso a paso": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor.",
                                "Notas paso a paso": []
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
                        "children": [
                            {
                                "id": "2.1.1.1",
                                "label": "El padre que no viaja autoriza la salida del menor",
                                "slug": "el-padre-que-no-viaja-autoriza-la-salida-del-menor",
                                "children": [
                                    {
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
                            {
                                "id": "2.1.1.2",
                                "label": "Tiene la guarda legal del menor",
                                "slug": "tiene-la-guarda-legal-del-menor",
                                "children": [
                                    {
                                        "Requisitos": "1",
                                        "Notas requisitos": "Poder Notarial de los padres, autorizando la salida del menor del país con el guarda, legalizado por procuraduría. ",
                                        "Paso a paso": "· Ambos padres deben firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil.",
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
                            {
                                "id": "2.1.1.3",
                                "label": "Menor tiene un solo apellido (el del madre) y viaja con su madre",
                                "slug": "menor-tiene-un-solo-apellido-(el-del-madre)-y-viaja-con-su-madre",
                                "children": [
                                    {
                                        "Requisitos": "1",
                                        "Notas requisitos": "Acta de nacimiento",
                                        "Paso a paso": "Presentar acta en el aeropuerto",
                                        "Notas paso a paso": []
                                    }
                                ]
                            },
                            {
                                "id": "2.1.1.4",
                                "label": "Viaja con uno de sus padres y el otro ha fallecido",
                                "slug": "viaja-con-uno-de-sus-padres-y-el-otro-ha-fallecido",
                                "children": [
                                    {
                                        "Requisitos": "Mostrar en Control Migratorio el acta de defunción y acta de nacimiento del menor",
                                        "Notas requisitos": [],
                                        "Paso a paso": [],
                                        "Notas paso a paso": []
                                    }
                                ]
                            },
                            {
                                "id": "2.1.1.5",
                                "label": "Menores adoptados por extranjeros que viajan por primera vez",
                                "slug": "menores-adoptados-por-extranjeros-que-viajan-por-primera-vez",
                                "children": [
                                    {
                                        "Requisitos": "1",
                                        "Notas requisitos": "Sentencia del tribunal  de niños, niñas y adolescentes que evidencie la adopción",
                                        "Paso a paso": "· Ir al tribunal de niños, niñas y adolescentes\r\n· Solicitar la sentencia donde se les otorga la adopción",
                                        "Notas paso a paso": []
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
                            {
                                "id": "2.1.1.6",
                                "label": "Uno de los padres vive en el extranjero",
                                "slug": "uno-de-los-padres-vive-en-el-extranjero",
                                "children": [
                                    {
                                        "Requisitos": "1",
                                        "Notas requisitos": "Poder consular de la embajada, consulado o representación del país en donde se encuentra el padre (debe ser apostillado y sellado en cancilleria) o Poder Notarial del país donde se encuentre el padre en  original apostilla de la Haya",
                                        "Paso a paso": "· El padre en el extranjero debe firmar el poder consular (en el consulado más cercana) autorizando la salida del menor.\r\n· Este poder debe ser legalizado en el Ministerio de Relaciones Exteriores de la República Dominicana.",
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
                            {
                                "id": "2.1.1.7",
                                "label": "Tiene autorización de viaje del menor del tribunal NNA",
                                "slug": "tiene-autorización-de-viaje-del-menor-del-tribunal-nna",
                                "children": [
                                    {
                                        "Requisitos": "1",
                                        "Notas requisitos": "Sentencia Judicial que otorga la guarda legal y autorizacion de viaje del menor",
                                        "Paso a paso": "· Ir al tribunal de niños, niñas y adolescentes\r\n· Solicitar la sentencia donde se les otorga la Guarda Legal y Autorización de viaje del menor",
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
                            {
                                "id": "2.1.1.8",
                                "label": "Viaja a actividad cultural, escolar o deportiva",
                                "slug": "viaja-a-actividad-cultural,-escolar-o-deportiva",
                                "children": [
                                    {
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
                            {
                                "id": "2.1.1.9",
                                "label": "Cuando no se tiene la autorización de uno de los padres",
                                "slug": "cuando-no-se-tiene-la-autorización-de-uno-de-los-padres",
                                "children": [
                                    {
                                        "Requisitos": "1",
                                        "Notas requisitos": "Sentencia Judicial que otorga la guarda legal y autorización de viaje del menor",
                                        "Paso a paso": "· Ir al tribunal de niños, niñas y adolescentes\r\n· Solicitar la sentencia donde se les otorga la patria potestad ",
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
                            },
                            {
                                "id": "2.1.2.2",
                                "label": "Viaja con el colegio, centro educativo o institución cultural",
                                "slug": "viaja-con-el-colegio,-centro-educativo-o-institución-cultural",
                                "children": [
                                    {
                                        "Requisitos": "1",
                                        "Notas requisitos": "Poder Notarial de los padres, autorizando la salida del menor del país con el centro educativo, legalizado por procuraduría. ",
                                        "Paso a paso": "· Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerolínea. \r\n· Este poder debe ser legalizado en la Procuraduría General de la República.\r\n· Los padres de todos los menores pueden hacer un solo poder notarial, donde estén las firmas de todos los padres que autorizan la salida de los menores.",
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
                            {
                                "id": "2.1.2.3",
                                "label": "Viaja con academia, selección o liga deportiva",
                                "slug": "viaja-con-academia,-selección-o-liga-deportiva",
                                "children": [
                                    {
                                        "Requisitos": "1",
                                        "Notas requisitos": "Poder Notarial de los padres, autorizando la salida del menor del país con la academia deportiva, legalizado por procuraduría. ",
                                        "Paso a paso": "· Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerolínea. \r\n· Este poder debe ser legalizado en la Procuraduría General de la República.\r\n· Los padres de todos los menores pueden hacer un solo poder notarial, donde estén las firmas de todos los padres que autorizan la salida de los menores.",
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
                            {
                                "id": "2.1.2.4",
                                "label": "Viaja con la persona que posee la guarda custodia",
                                "slug": "viaja-con-la-persona-que-posee-la-guarda-custodia",
                                "children": [
                                    {
                                        "Requisitos": "1",
                                        "Notas requisitos": "Poder Notarial de los padres, autorizando la salida del menor del país con el guarda custodia, legalizado por procuraduría. ",
                                        "Paso a paso": "· Ambos padres deben firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil.",
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
                            {
                                "id": "2.1.2.5",
                                "label": "Menor  tiene un solo apellido (materno) y  no viaja con su madre",
                                "slug": "menor-tiene-un-solo-apellido-(materno)-y-no-viaja-con-su-madre",
                                "children": [
                                    {
                                        "Requisitos": "1",
                                        "Notas requisitos": "Poder Notarial del padre que no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría. ",
                                        "Paso a paso": "· La madre debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil.",
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
                            {
                                "id": "2.1.2.6",
                                "label": "Uno de los padres ha fallecido y no viaja con el padre/madre sobreviviente",
                                "slug": "uno-de-los-padres-ha-fallecido-y-no-viaja-con-el-padre/madre-sobreviviente",
                                "children": [
                                    {
                                        "Requisitos": "1",
                                        "Notas requisitos": "Poder Notarial del padre sobreviviente que no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría. ",
                                        "Paso a paso": "· El padre sobreviviente debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil.",
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
                            {
                                "id": "2.1.2.7",
                                "label": "Viaja con una persona autorizada por el tutor legal",
                                "slug": "viaja-con-una-persona-autorizada-por-el-tutor-legal",
                                "children": [
                                    {
                                        "Requisitos": "1",
                                        "Notas requisitos": "Poder Notarial del tutor legal que no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría. ",
                                        "Paso a paso": "· El tutor legal debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil.",
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
                            {
                                "id": "2.1.2.8",
                                "label": "Ambos padres vive en el extranjero",
                                "slug": "ambos-padres-vive-en-el-extranjero",
                                "description": "Revisar caso",
                                "children": [
                                    {
                                        "Requisitos": "1",
                                        "Notas requisitos": "Poder consular de la embajada, consulado o representación del país en donde se encuentra el padre (debe ser apostillado y sellado en cancilleria) o Poder Notarial del país donde se encuentre el padre en  original apostilla de la Haya",
                                        "Paso a paso": "· El padre en el extranjero debe firmar el poder consular (en el consulado más cercana) autorizando la salida del menor.\r\n· Este poder debe ser legalizado en el Ministerio de Relaciones Exteriores de la República Dominicana.",
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
                            {
                                "id": "2.1.2.9",
                                "label": "Cuando no se tiene la autorización de uno de los padres",
                                "slug": "cuando-no-se-tiene-la-autorización-de-uno-de-los-padres",
                                "children": [
                                    {
                                        "Requisitos": "1",
                                        "Notas requisitos": "Sentencia Judicial que otorga la guarda legal y autorización de viaje del menor",
                                        "Paso a paso": "· Ir al tribunal de niños, niñas y adolescentes\r\n· Solicitar la sentencia donde se les otorga la patria potestad ",
                                        "Notas paso a paso": "1. Entrar al portal  https://servicios.migracion.gob.do"
                                    },
                                    {
                                        "Requisitos": "2",
                                        "Notas requisitos": "Poder Notarial del padre que tiene la patria potestad y no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría. ",
                                        "Paso a paso": "· El padre debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil.",
                                        "Notas paso a paso": "2. Crear un usuario en el portal de migración"
                                    },
                                    {
                                        "Requisitos": "3",
                                        "Notas requisitos": "Foto o copia de acta de nacimiento original, con el código QR legible  ",
                                        "Paso a paso": "Versión reciente con código QR o número de evento.",
                                        "Notas paso a paso": "3. Completar los formularios con los datos del menor y del acompañante."
                                    },
                                    {
                                        "Requisitos": "4",
                                        "Notas requisitos": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                                        "Paso a paso": [],
                                        "Notas paso a paso": "4. Escanear todos los documentos requeridos"
                                    },
                                    {
                                        "Requisitos": "5",
                                        "Notas requisitos": "Foto o copia de la cédula del otro padre que autoriza",
                                        "Paso a paso": [],
                                        "Notas paso a paso": "5. Cargar los documentos escaneados o fotos a la plataforma"
                                    },
                                    {
                                        "Requisitos": "6",
                                        "Notas requisitos": "Foto o copia de la visa / residencia del acompañante",
                                        "Paso a paso": "Si viaja a un país que requiera visa o residencia",
                                        "Notas paso a paso": "6. Esperar validación de los documentos"
                                    },
                                    {
                                        "Requisitos": "7",
                                        "Notas requisitos": "Foto o copia de la visa / residencia del menor",
                                        "Paso a paso": "Si viaja a un país que requiera visa o residencia",
                                        "Notas paso a paso": "7. Realizar el pago"
                                    },
                                    {
                                        "Requisitos": "8",
                                        "Notas requisitos": "Foto o copia del pasaporte del acompañante",
                                        "Paso a paso": "De la página principal con los datos biométricos.",
                                        "Notas paso a paso": "8. Depositar los documentos originales en la oficina de Migración"
                                    },
                                    {
                                        "Requisitos": "9",
                                        "Notas requisitos": "Foto o copia del pasaporte del menor",
                                        "Paso a paso": "De la página principal con los datos biométricos.",
                                        "Notas paso a paso": "9. Descargar la certificación en la plataforma: https://servicios.migracion.gob.do"
                                    },
                                    {
                                        "Requisitos": "10",
                                        "Notas requisitos": "Foto 2x2 reciente del menor",
                                        "Paso a paso": "De frente y reciente.",
                                        "Notas paso a paso": []
                                    },
                                    {
                                        "Requisitos": "11",
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
                        "children": [
                            {
                                "id": "3.1.1.1",
                                "label": "El padre que no viaja autoriza la salida del menor",
                                "slug": "el-padre-que-no-viaja-autoriza-la-salida-del-menor",
                                "children": [
                                    {
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
                            {
                                "id": "3.1.1.2",
                                "label": "Tiene la guarda legal del menor",
                                "slug": "tiene-la-guarda-legal-del-menor",
                                "children": [
                                    {
                                        "Requisitos": "1",
                                        "Notas requisitos": "Poder Notarial de los padres, autorizando la salida del menor del país con el guarda, legalizado por procuraduría. ",
                                        "Paso a paso": "· Ambos padres deben firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil.",
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
                            {
                                "id": "3.1.1.3",
                                "label": "Menor tiene un solo apellido (el del madre) y viaja con su madre",
                                "slug": "menor-tiene-un-solo-apellido-(el-del-madre)-y-viaja-con-su-madre",
                                "children": [
                                    {
                                        "Requisitos": "1",
                                        "Notas requisitos": "Acta de nacimiento",
                                        "Paso a paso": "Presentar acta en el aeropuerto",
                                        "Notas paso a paso": []
                                    }
                                ]
                            },
                            {
                                "id": "3.1.1.4",
                                "label": "Viaja con uno de sus padres y el otro ha fallecido",
                                "slug": "viaja-con-uno-de-sus-padres-y-el-otro-ha-fallecido",
                                "children": [
                                    {
                                        "Requisitos": "Nada",
                                        "Notas requisitos": "No requiere presentar PSM",
                                        "Paso a paso": [],
                                        "Notas paso a paso": []
                                    }
                                ]
                            },
                            {
                                "id": "3.1.1.5",
                                "label": "Menor adoptado por personas extranjeras y viaja por primera vez",
                                "slug": "menor-adoptado-por-personas-extranjeras-y-viaja-por-primera-vez",
                                "children": [
                                    {
                                        "Requisitos": "1",
                                        "Notas requisitos": "Sentencia del tribunal  de niños, niñas y adolescentes que evidencie la adopción",
                                        "Paso a paso": "· Ir al tribunal de niños, niñas y adolescentes\r\n· Solicitar la sentencia donde se les otorga la adopción",
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
                            {
                                "id": "3.1.1.6",
                                "label": "Uno de los padres vive en el extranjero",
                                "slug": "uno-de-los-padres-vive-en-el-extranjero",
                                "children": [
                                    {
                                        "Requisitos": "1",
                                        "Notas requisitos": "Poder consular de la embajada, consulado o representación del país en donde se encuentra el padre (debe ser apostillado y sellado en cancilleria) o Poder Notarial del país donde se encuentre el padre en  original apostilla de la Haya",
                                        "Paso a paso": "· El padre en el extranjero debe firmar el poder consular (en el consulado más cercana) autorizando la salida del menor.\r\n· Este poder debe ser legalizado en el Ministerio de Relaciones Exteriores de la República Dominicana.",
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
                            {
                                "id": "3.1.1.7",
                                "label": "Tiene autorización de viaje del menor del tribunal NNA",
                                "slug": "tiene-autorización-de-viaje-del-menor-del-tribunal-nna",
                                "children": [
                                    {
                                        "Requisitos": "1",
                                        "Notas requisitos": "Sentencia Judicial que otorga la guarda legal y autorizacion de viaje del menor",
                                        "Paso a paso": "· Ir al tribunal de niños, niñas y adolescentes\r\n· Solicitar la sentencia donde se les otorga la Guarda Legal y Autorización de viaje del menor",
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
                            {
                                "id": "3.1.1.8",
                                "label": "Viaja a actividad cultural, escolar o deportiva",
                                "slug": "viaja-a-actividad-cultural,-escolar-o-deportiva",
                                "children": [
                                    {
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
                            {
                                "id": "3.1.1.9",
                                "label": "Cuando no se tiene la autorización de uno de los padres",
                                "slug": "cuando-no-se-tiene-la-autorización-de-uno-de-los-padres",
                                "children": [
                                    {
                                        "Requisitos": "1",
                                        "Notas requisitos": "Sentencia Judicial que otorga la guarda legal y autorización de viaje del menor",
                                        "Paso a paso": "· Ir al tribunal de niños, niñas y adolescentes\r\n· Solicitar la sentencia donde se les otorga la patria potestad ",
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
                            },
                            {
                                "id": "3.1.2.2",
                                "label": "Viaja con el colegio, centro educativo o institución cultural",
                                "slug": "viaja-con-el-colegio,-centro-educativo-o-institución-cultural",
                                "children": [
                                    {
                                        "Requisitos": "1",
                                        "Notas requisitos": "Poder Notarial de los padres, autorizando la salida del menor del país con el centro educativo, legalizado por procuraduría. ",
                                        "Paso a paso": "· Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerolínea. \r\n· Este poder debe ser legalizado en la Procuraduría General de la República.\r\n· Los padres de todos los menores pueden hacer un solo poder notarial, donde estén las firmas de todos los padres que autorizan la salida de los menores.",
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
                            {
                                "id": "3.1.2.3",
                                "label": "Viaja con academia, selección o liga deportiva",
                                "slug": "viaja-con-academia,-selección-o-liga-deportiva",
                                "children": [
                                    {
                                        "Requisitos": "1",
                                        "Notas requisitos": "Poder Notarial de los padres, autorizando la salida del menor del país con la academia deportiva, legalizado por procuraduría. ",
                                        "Paso a paso": "· Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerolínea. \r\n· Este poder debe ser legalizado en la Procuraduría General de la República.\r\n· Los padres de todos los menores pueden hacer un solo poder notarial, donde estén las firmas de todos los padres que autorizan la salida de los menores.",
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
                            {
                                "id": "3.1.2.4",
                                "label": "Viaja con la persona que posee la guarda custodia",
                                "slug": "viaja-con-la-persona-que-posee-la-guarda-custodia",
                                "children": [
                                    {
                                        "Requisitos": "1",
                                        "Notas requisitos": "Poder Notarial de los padres, autorizando la salida del menor del país con el guarda custodia, legalizado por procuraduría. ",
                                        "Paso a paso": "· Ambos padres deben firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil.",
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
                            {
                                "id": "3.1.2.5",
                                "label": "Menor  tiene un solo apellido (materno) y  no viaja con su madre",
                                "slug": "menor-tiene-un-solo-apellido-(materno)-y-no-viaja-con-su-madre",
                                "children": [
                                    {
                                        "Requisitos": "1",
                                        "Notas requisitos": "Poder Notarial del padre que no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría. ",
                                        "Paso a paso": "· La madre debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil.",
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
                            {
                                "id": "3.1.2.6",
                                "label": "Uno de los padres ha fallecido y no viaja con el padre/madre sobreviviente",
                                "slug": "uno-de-los-padres-ha-fallecido-y-no-viaja-con-el-padre/madre-sobreviviente",
                                "children": [
                                    {
                                        "Requisitos": "1",
                                        "Notas requisitos": "Poder Notarial del padre sobreviviente que no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría. ",
                                        "Paso a paso": "· El padre sobreviviente debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil.",
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
                            {
                                "id": "3.1.2.7",
                                "label": "Viaja con una persona autorizada por el tutor legal",
                                "slug": "viaja-con-una-persona-autorizada-por-el-tutor-legal",
                                "children": [
                                    {
                                        "Requisitos": "1",
                                        "Notas requisitos": "Poder Notarial del tutor legal que no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría. ",
                                        "Paso a paso": "· El tutor legal debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil.",
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
                            {
                                "id": "3.1.2.8",
                                "label": "Ambos padres viven en el extranjero",
                                "slug": "ambos-padres-viven-en-el-extranjero",
                                "description": "Revisar caso",
                                "children": [
                                    {
                                        "Requisitos": "1",
                                        "Notas requisitos": "Poder consular de la embajada, consulado o representación del país en donde se encuentra el padre (debe ser apostillado y sellado en cancilleria) o Poder Notarial del país donde se encuentre el padre en  original apostilla de la Haya",
                                        "Paso a paso": "· El padre en el extranjero debe firmar el poder consular (en el consulado más cercana) autorizando la salida del menor.\r\n· Este poder debe ser legalizado en el Ministerio de Relaciones Exteriores de la República Dominicana.",
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
                            {
                                "id": "3.1.2.9",
                                "label": "Cuando no se tiene la autorización de uno de los padres",
                                "slug": "cuando-no-se-tiene-la-autorización-de-uno-de-los-padres",
                                "children": [
                                    {
                                        "Requisitos": "1",
                                        "Notas requisitos": "Sentencia Judicial que otorga la guarda legal y autorización de viaje del menor",
                                        "Paso a paso": "· Ir al tribunal de niños, niñas y adolescentes\r\n· Solicitar la sentencia donde se les otorga la patria potestad ",
                                        "Notas paso a paso": "1. Entrar al portal  https://servicios.migracion.gob.do"
                                    },
                                    {
                                        "Requisitos": "2",
                                        "Notas requisitos": "Poder Notarial del padre que tiene la patria potestad y no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría. ",
                                        "Paso a paso": "· El padre debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil.",
                                        "Notas paso a paso": "2. Crear un usuario en el portal de migración"
                                    },
                                    {
                                        "Requisitos": "3",
                                        "Notas requisitos": "Foto o copia de acta de nacimiento original, con el código QR legible  ",
                                        "Paso a paso": "Versión reciente con código QR o número de evento.",
                                        "Notas paso a paso": "3. Completar los formularios con los datos del menor y del acompañante."
                                    },
                                    {
                                        "Requisitos": "4",
                                        "Notas requisitos": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                                        "Paso a paso": [],
                                        "Notas paso a paso": "4. Escanear todos los documentos requeridos"
                                    },
                                    {
                                        "Requisitos": "5",
                                        "Notas requisitos": "Foto o copia de la cédula del otro padre que autoriza",
                                        "Paso a paso": [],
                                        "Notas paso a paso": "5. Cargar los documentos escaneados o fotos a la plataforma"
                                    },
                                    {
                                        "Requisitos": "6",
                                        "Notas requisitos": "Foto o copia de la visa / residencia del acompañante",
                                        "Paso a paso": "Si viaja a un país que requiera visa o residencia",
                                        "Notas paso a paso": "6. Esperar validación de los documentos"
                                    },
                                    {
                                        "Requisitos": "7",
                                        "Notas requisitos": "Foto o copia de la visa / residencia del menor",
                                        "Paso a paso": "Si viaja a un país que requiera visa o residencia",
                                        "Notas paso a paso": "7. Realizar el pago"
                                    },
                                    {
                                        "Requisitos": "8",
                                        "Notas requisitos": "Foto o copia del pasaporte del acompañante",
                                        "Paso a paso": "De la página principal con los datos biométricos.",
                                        "Notas paso a paso": "8. Depositar los documentos originales en la oficina de Migración"
                                    },
                                    {
                                        "Requisitos": "9",
                                        "Notas requisitos": "Foto o copia del pasaporte del menor",
                                        "Paso a paso": "De la página principal con los datos biométricos.",
                                        "Notas paso a paso": "9. Descargar la certificación en la plataforma: https://servicios.migracion.gob.do"
                                    },
                                    {
                                        "Requisitos": "10",
                                        "Notas requisitos": "Foto 2x2 reciente del menor",
                                        "Paso a paso": "De frente y reciente.",
                                        "Notas paso a paso": []
                                    },
                                    {
                                        "Requisitos": "11",
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
                "id": "3.2",
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
    },
    {
        "id": "4",
        "label": "Menor tiene estatus migratorio de no residentes (estudiantes, deportistas, artistas y estudiantes de intercambio)",
        "slug": "menor-tiene-estatus-migratorio-de-no-residentes-(estudiantes,-deportistas,-artistas-y-estudiantes-de-intercambio)",
        "children": [
            {
                "Requisitos": "1",
                "Notas requisitos": "No requiere presentar PSM",
                "Paso a paso": "No requiere presentar PSM"
            }
        ]
    },
    {
        "id": "5",
        "label": "Menores hijo/as de personal de organismos internacionales acreditados en el país",
        "slug": "menores-hijo/as-de-personal-de-organismos-internacionales-acreditados-en-el-país",
        "description": "En teoria no debe necesitar permiso y no pagan impuesto de estadia, preguntar a estefania o maria",
        "children": [
            {
                "id": "5.1",
                "label": "Ambos padres están  en República Dominicana",
                "slug": "ambos-padres-están-en-república-dominicana",
                "description": "Se puede plantear pedir una autorizacion de la embajada y no tener que solicitar permiso",
                "children": [
                    {
                        "Requisitos": [],
                        "Notas requisitos": "Nada",
                        "Paso a paso": "No requiere presentar PSM en Control Migratorio"
                    }
                ]
            },
            {
                "id": "5.2",
                "label": "Un padre está en el extranjero y otro en República Dominicana",
                "slug": "un-padre-está-en-el-extranjero-y-otro-en-república-dominicana",
                "children": [
                    {
                        "Requisitos": "1",
                        "Notas requisitos": "Poder consular de la embajada, consulado o representación del país en donde se encuentra el padre (debe ser apostillado y sellado en cancilleria) o Poder Notarial del país donde se encuentre el padre en  original apostilla de la Haya",
                        "Paso a paso": "· El padre en el extranjero debe firmar el poder consular (en el consulado más cercana) autorizando la salida del menor.\r\n· Este poder debe ser legalizado en el Ministerio de Relaciones Exteriores de la República Dominicana.",
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
    },
    {
        id: "6",
        label: "¿Tu situación no está en la lista de opciones?",
        slug: "tu-situacion-no-esta-en-la-lista-de-opciones",
        description: "Selecciona esta opción si no estás seguro de qué opción elegir o tu situación no aparece entre las disponibles",
        children: []
    }
];

export type HierarchyNode = typeof DATA_DUMB[number];