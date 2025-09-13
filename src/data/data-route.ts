export const DATA_ROUTE = {
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad": [
        {
            "id": "1.1",
            "label": "Viajar\u00e1 con ambos padres",
            "desc": "Cuando ambos padres viajaran con el menor",
            "type": "not_required_permission",
            "has_icon": true,
            "slug": "viajara-con-ambos-padres",
            "requirements": [
                {
                    "requirement": "Ninguno",
                    "requirement_notes": "No requiere presentar PSM en Control Migratorio"
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es dominicano y no posee otra nacionalidad",
                    "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                    "id": "1"
                },
                {
                    "label": "Viajar\u00e1 con ambos padres",
                    "slug": "viajara-con-ambos-padres",
                    "id": "1.1"
                }
            ]
        },
        {
            "id": "1.2",
            "label": "Viajar\u00e1 con uno de los padres",
            "desc": "Cuando el menor viaja con uno de los padres",
            "type": null,
            "has_icon": true,
            "slug": "viajara-con-uno-de-los-padres",
            "children": [
                {
                    "id": "1.2.1",
                    "label": "Uno de los padres autoriza al otro a viajar",
                    "desc": "Cuando uno de los padres autoriza al otro a viajar con el menor",
                    "type": "document",
                    "has_icon": false,
                    "slug": "uno-de-los-padres-autoriza-al-otro-a-viajar",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial del padre o madre que no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda. ",
                            "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB "
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es dominicano y no posee otra nacionalidad",
                            "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                            "id": "1"
                        },
                        {
                            "label": "Viajar\u00e1 con uno de los padres",
                            "slug": "viajara-con-uno-de-los-padres",
                            "id": "1.2"
                        },
                        {
                            "label": "Uno de los padres autoriza al otro a viajar",
                            "slug": "uno-de-los-padres-autoriza-al-otro-a-viajar",
                            "id": "1.2.1"
                        }
                    ]
                },
                {
                    "id": "1.2.2",
                    "label": "Viajar\u00e1 con la persona que posee la guarda legal",
                    "desc": "Cuando el menor viaja con la persona que tiene la guarda legal de este",
                    "type": "document",
                    "has_icon": false,
                    "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial de los padres, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                            "requirement_notes": "\u00b7 Ambos padres o tutores deben firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es dominicano y no posee otra nacionalidad",
                            "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                            "id": "1"
                        },
                        {
                            "label": "Viajar\u00e1 con uno de los padres",
                            "slug": "viajara-con-uno-de-los-padres",
                            "id": "1.2"
                        },
                        {
                            "label": "Viajar\u00e1 con la persona que posee la guarda legal",
                            "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
                            "id": "1.2.2"
                        }
                    ]
                },
                {
                    "id": "1.2.3",
                    "label": "El menor tiene solo apellido materno y viajar\u00e1 con su madre ",
                    "desc": "Cuando el menor ha sido declarado solo por la madre y es ella quien le acompa\u00f1a a viajar",
                    "type": "not_required_permission",
                    "has_icon": false,
                    "slug": "el-menor-tiene-solo-apellido-materno-y-viajara-con-su-madre-",
                    "requirements": [
                        {
                            "requirement": "Acta de nacimiento",
                            "requirement_notes": "No requiere el permiso, pero debe presentar acta de nacimiento en el  punto de Control Migratorio"
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es dominicano y no posee otra nacionalidad",
                            "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                            "id": "1"
                        },
                        {
                            "label": "Viajar\u00e1 con uno de los padres",
                            "slug": "viajara-con-uno-de-los-padres",
                            "id": "1.2"
                        },
                        {
                            "label": "El menor tiene solo apellido materno y viajar\u00e1 con su madre ",
                            "slug": "el-menor-tiene-solo-apellido-materno-y-viajara-con-su-madre-",
                            "id": "1.2.3"
                        }
                    ]
                },
                {
                    "id": "1.2.4",
                    "label": "Viajar\u00e1 con uno de los padres y el otro ha fallecido",
                    "desc": "Cuando el menor viaja acompa\u00f1ado por su \u00fanico padre o madre que a\u00fan est\u00e1 vivo",
                    "type": "not_required_permission",
                    "has_icon": false,
                    "slug": "viajara-con-uno-de-los-padres-y-el-otro-ha-fallecido",
                    "requirements": [
                        {
                            "requirement": "No requiere el permiso, pero debe mostrar en Control Migratorio el acta de defunci\u00f3n y acta de nacimiento del menor",
                            "requirement_notes": null
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es dominicano y no posee otra nacionalidad",
                            "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                            "id": "1"
                        },
                        {
                            "label": "Viajar\u00e1 con uno de los padres",
                            "slug": "viajara-con-uno-de-los-padres",
                            "id": "1.2"
                        },
                        {
                            "label": "Viajar\u00e1 con uno de los padres y el otro ha fallecido",
                            "slug": "viajara-con-uno-de-los-padres-y-el-otro-ha-fallecido",
                            "id": "1.2.4"
                        }
                    ]
                },
                {
                    "id": "1.2.5",
                    "label": "El menor fue adoptado por personas extranjeras y viaja por primera vez",
                    "desc": "cuando el menor viaja por primera vez luego de ser adoptado por personas extranjeras",
                    "type": "document",
                    "has_icon": false,
                    "slug": "el-menor-fue-adoptado-por-personas-extranjeras-y-viaja-por-primera-vez",
                    "requirements": [
                        {
                            "requirement": "Sentencia del tribunal  de ni\u00f1os, ni\u00f1as y adolescentes que evidencie la adopci\u00f3n",
                            "requirement_notes": "\u00b7 Ir al tribunal de ni\u00f1os, ni\u00f1as y adolescentes\r\n\u00b7 Solicitar la sentencia donde se les otorga la adopci\u00f3n, original y certificada. "
                        },
                        {
                            "requirement": "Poder Notarial del padre que tiene la patria potestad y no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda. ",
                            "requirement_notes": "\u00b7 El padre debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula o pasaporte del otro padre que autoriza",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del otro padre adoptivo que viaja con el menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es dominicano y no posee otra nacionalidad",
                            "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                            "id": "1"
                        },
                        {
                            "label": "Viajar\u00e1 con uno de los padres",
                            "slug": "viajara-con-uno-de-los-padres",
                            "id": "1.2"
                        },
                        {
                            "label": "El menor fue adoptado por personas extranjeras y viaja por primera vez",
                            "slug": "el-menor-fue-adoptado-por-personas-extranjeras-y-viaja-por-primera-vez",
                            "id": "1.2.5"
                        }
                    ]
                },
                {
                    "id": "1.2.6",
                    "label": "Uno de los padres vive en el extranjero y autoriza el viaje",
                    "desc": "Cuando el menor viaja acompa\u00f1ado por el padre o madre que est\u00e1 en el pa\u00eds, y el padre o madre en el extranjero es quien autoriza la salida del menor",
                    "type": "document",
                    "has_icon": false,
                    "slug": "uno-de-los-padres-vive-en-el-extranjero-y-autoriza-el-viaje",
                    "requirements": [
                        {
                            "requirement": "Poder consular otorgado en el pa\u00eds en donde se encuentra el padre (debe ser apostillado y sellado en cancilleria) o Poder Notarial legalizado del pa\u00eds donde se encuentre el padre en  original con apostilla de la Haya",
                            "requirement_notes": "\u00b7 El padre en el extranjero debe firmar el poder consular (en el consulado m\u00e1s cercana) autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en el Ministerio de Relaciones Exteriores de la Rep\u00fablica Dominicana."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es dominicano y no posee otra nacionalidad",
                            "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                            "id": "1"
                        },
                        {
                            "label": "Viajar\u00e1 con uno de los padres",
                            "slug": "viajara-con-uno-de-los-padres",
                            "id": "1.2"
                        },
                        {
                            "label": "Uno de los padres vive en el extranjero y autoriza el viaje",
                            "slug": "uno-de-los-padres-vive-en-el-extranjero-y-autoriza-el-viaje",
                            "id": "1.2.6"
                        }
                    ]
                },
                {
                    "id": "1.2.7",
                    "label": "Tiene autorizaci\u00f3n de viaje del menor\u00a0del tribunal Ni\u00f1os, Ni\u00f1as y Adolescentes",
                    "desc": "Cuando el menor viaja con la persona que tiene la guarda legal con autorizaci\u00f3n de viaje ",
                    "type": "document",
                    "has_icon": false,
                    "slug": "tiene-autorizacion-de-viaje-del-menordel-tribunal-ninos-ninas-y-adolescentes",
                    "requirements": [
                        {
                            "requirement": "Autorizaci\u00f3n judicial (sentencia, auto o resoluci\u00f3n) que autoriza el viaje del Menor",
                            "requirement_notes": "\u00b7 Ir al tribunal de ni\u00f1os, ni\u00f1as y adolescentes\r\n\u00b7 Solicitar la sentencia donde se les otorga la Guarda Legal y Autorizaci\u00f3n de viaje del menor"
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es dominicano y no posee otra nacionalidad",
                            "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                            "id": "1"
                        },
                        {
                            "label": "Viajar\u00e1 con uno de los padres",
                            "slug": "viajara-con-uno-de-los-padres",
                            "id": "1.2"
                        },
                        {
                            "label": "Tiene autorizaci\u00f3n de viaje del menor\u00a0del tribunal Ni\u00f1os, Ni\u00f1as y Adolescentes",
                            "slug": "tiene-autorizacion-de-viaje-del-menordel-tribunal-ninos-ninas-y-adolescentes",
                            "id": "1.2.7"
                        }
                    ]
                },
                {
                    "id": "1.2.8",
                    "label": "Viajar\u00e1 a una actividad cultural, escolar, religiosa, deportiva u otra",
                    "desc": "Cuando uno de los padres autoriza al otro a viajar con el menor para participar en actividad cultural, escolar, religiosa, deportiva u otra.",
                    "type": "document",
                    "has_icon": false,
                    "slug": "viajara-a-una-actividad-cultural-escolar-religiosa-deportiva-u-otra",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial del padre que no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda. ",
                            "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB Sambil"
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es dominicano y no posee otra nacionalidad",
                            "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                            "id": "1"
                        },
                        {
                            "label": "Viajar\u00e1 con uno de los padres",
                            "slug": "viajara-con-uno-de-los-padres",
                            "id": "1.2"
                        },
                        {
                            "label": "Viajar\u00e1 a una actividad cultural, escolar, religiosa, deportiva u otra",
                            "slug": "viajara-a-una-actividad-cultural-escolar-religiosa-deportiva-u-otra",
                            "id": "1.2.8"
                        }
                    ]
                },
                {
                    "id": "1.2.9",
                    "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
                    "desc": "Cuando uno de los padres se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor.",
                    "type": "document",
                    "has_icon": false,
                    "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
                    "requirements": [
                        {
                            "requirement": "Sentencia judicial que autoriza el viaje del Menor o sentencia judical que otorga la autoridad parental unilateral al padre que viaja",
                            "requirement_notes": "\u00b7 Ir al tribunal de ni\u00f1os, ni\u00f1as y adolescentes\r\n\u00b7 Solicitar la sentencia donde se les otorga la patria potestad "
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o  madre que realiza la solicitud",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del padre acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del padre acompa\u00f1ante",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es dominicano y no posee otra nacionalidad",
                            "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                            "id": "1"
                        },
                        {
                            "label": "Viajar\u00e1 con uno de los padres",
                            "slug": "viajara-con-uno-de-los-padres",
                            "id": "1.2"
                        },
                        {
                            "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
                            "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
                            "id": "1.2.9"
                        }
                    ]
                },
                {
                    "id": "1.2.10",
                    "label": "No veo el caso del menor o tengo dudas para elegir",
                    "desc": "No veo el caso del menor o tengo dudas para elegir",
                    "type": "not_found",
                    "has_icon": false,
                    "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
                    "children": []
                }
            ]
        },
        {
            "id": "1.3",
            "label": "Viajar\u00e1 con su tutor legal / tutores legales",
            "desc": null,
            "type": null,
            "has_icon": true,
            "slug": "viajara-con-su-tutor-legal---tutores-legales",
            "children": [
                {
                    "id": "1.3.1",
                    "label": "El menor viajar\u00e1 con el tutor legal y el otro tutor autoriza",
                    "desc": null,
                    "type": "document",
                    "has_icon": false,
                    "slug": "el-menor-viajara-con-el-tutor-legal-y-el-otro-tutor-autoriza",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial del padre o madre que no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda. ",
                            "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB "
                        },
                        {
                            "requirement": "Sentencia judicial que otorga la tutor\u00eda legal sobre el/los menor/es",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es dominicano y no posee otra nacionalidad",
                            "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                            "id": "1"
                        },
                        {
                            "label": "Viajar\u00e1 con su tutor legal / tutores legales",
                            "slug": "viajara-con-su-tutor-legal---tutores-legales",
                            "id": "1.3"
                        },
                        {
                            "label": "El menor viajar\u00e1 con el tutor legal y el otro tutor autoriza",
                            "slug": "el-menor-viajara-con-el-tutor-legal-y-el-otro-tutor-autoriza",
                            "id": "1.3.1"
                        }
                    ]
                },
                {
                    "id": "1.3.2",
                    "label": "El menor tiene un solo tutor legal y viajar\u00e1 con \u00e9l",
                    "desc": null,
                    "type": "not_required_permission",
                    "has_icon": false,
                    "slug": "el-menor-tiene-un-solo-tutor-legal-y-viajara-con-el",
                    "requirements": [
                        {
                            "requirement": "No requiere el permiso, pero debe mostrar en Control Migratorio la sentencia que muestra la tutor\u00eda legal \u00fanica sobre el/los menor/es",
                            "requirement_notes": null
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es dominicano y no posee otra nacionalidad",
                            "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                            "id": "1"
                        },
                        {
                            "label": "Viajar\u00e1 con su tutor legal / tutores legales",
                            "slug": "viajara-con-su-tutor-legal---tutores-legales",
                            "id": "1.3"
                        },
                        {
                            "label": "El menor tiene un solo tutor legal y viajar\u00e1 con \u00e9l",
                            "slug": "el-menor-tiene-un-solo-tutor-legal-y-viajara-con-el",
                            "id": "1.3.2"
                        }
                    ]
                },
                {
                    "id": "1.3.3",
                    "label": "El menor viajar\u00e1 con ambos tutores legales",
                    "desc": null,
                    "type": "not_required_permission",
                    "has_icon": false,
                    "slug": "el-menor-viajara-con-ambos-tutores-legales",
                    "requirements": [
                        {
                            "requirement": "Presentar la sentencia que otorga la tutor\u00eda legal de/los menor/es",
                            "requirement_notes": "No requiere presentar PSM en Control Migratorio"
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es dominicano y no posee otra nacionalidad",
                            "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                            "id": "1"
                        },
                        {
                            "label": "Viajar\u00e1 con su tutor legal / tutores legales",
                            "slug": "viajara-con-su-tutor-legal---tutores-legales",
                            "id": "1.3"
                        },
                        {
                            "label": "El menor viajar\u00e1 con ambos tutores legales",
                            "slug": "el-menor-viajara-con-ambos-tutores-legales",
                            "id": "1.3.3"
                        }
                    ]
                },
                {
                    "id": "1.3.4",
                    "label": "No veo el caso del menor o tengo dudas para elegir",
                    "desc": null,
                    "type": "not_found",
                    "has_icon": false,
                    "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
                    "children": []
                }
            ]
        },
        {
            "id": "1.4",
            "label": "Viajar\u00e1 con un tercero\u00a0",
            "desc": "Cuando ambos padres o tutor legal autoriza a otra persona a viaja con el menor (familiares, amigos, aerol\u00ednea, centro educativo, liga deportiva, instituci\u00f3n cultural, entre otros)",
            "type": null,
            "has_icon": true,
            "slug": "viajara-con-un-tercero",
            "children": [
                {
                    "id": "1.4.1",
                    "label": "Viajar\u00e1 con la aerol\u00ednea",
                    "desc": "Cuando el menor viaja con la Aerol\u00ednea y cuenta con la autorizaci\u00f3n de ambos padres, padre, madre o tutor legal",
                    "type": "document",
                    "has_icon": false,
                    "slug": "viajara-con-la-aerolinea",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial de ambos padres, padre, madre o tutor (seg\u00fan el caso) legal autorizando la salida del menor del pa\u00eds con la aerol\u00ednea, legalizado por procuradur\u00eda o sentencia judicial",
                            "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB Sambil"
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de la o las personas que autorizan",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        },
                        {
                            "requirement": "Boleto o reserva del viaje",
                            "requirement_notes": null
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es dominicano y no posee otra nacionalidad",
                            "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                            "id": "1"
                        },
                        {
                            "label": "Viajar\u00e1 con un tercero\u00a0",
                            "slug": "viajara-con-un-tercero",
                            "id": "1.4"
                        },
                        {
                            "label": "Viajar\u00e1 con la aerol\u00ednea",
                            "slug": "viajara-con-la-aerolinea",
                            "id": "1.4.1"
                        }
                    ]
                },
                {
                    "id": "1.4.2",
                    "label": "Viajar\u00e1 con el colegio, centro educativo o instituci\u00f3n cultural",
                    "desc": "Cuando el menor viaja con  una academia, centro educativo o instituci\u00f3n cultural, y cuenta con la autorizaci\u00f3n de los padres, padre, madre o tutor legal",
                    "type": "document",
                    "has_icon": false,
                    "slug": "viajara-con-el-colegio-centro-educativo-o-institucion-cultural",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial de los padres o tutores, autorizando la salida del menor del pa\u00eds con el centro educativo, legalizado por procuradur\u00eda",
                            "requirement_notes": "\u00b7 Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerol\u00ednea. \r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica.\r\n\u00b7 Los padres de todos los menores pueden hacer un solo poder notarial, donde est\u00e9n las firmas de todos los padres que autorizan la salida de los menores."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es dominicano y no posee otra nacionalidad",
                            "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                            "id": "1"
                        },
                        {
                            "label": "Viajar\u00e1 con un tercero\u00a0",
                            "slug": "viajara-con-un-tercero",
                            "id": "1.4"
                        },
                        {
                            "label": "Viajar\u00e1 con el colegio, centro educativo o instituci\u00f3n cultural",
                            "slug": "viajara-con-el-colegio-centro-educativo-o-institucion-cultural",
                            "id": "1.4.2"
                        }
                    ]
                },
                {
                    "id": "1.4.3",
                    "label": "Viajar\u00e1 con academia, selecci\u00f3n o liga deportiva",
                    "desc": "Cuando el menor viaja con  una academia, selecci\u00f3 o liga deportiva, y cuenta con la autorizaci\u00f3n de ambos padres, padre, madre o tutor legal",
                    "type": "document",
                    "has_icon": false,
                    "slug": "viajara-con-academia-seleccion-o-liga-deportiva",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial (colectivo o individual) de los padres, autorizando la salida del o los menores del pa\u00eds, legalizado por procuradur\u00eda. En caso de que los padres esten fuera del pais, debera entregar el poder consular. En caso de que uno de los padres no quiere que viaje o no este presente en la vida del menor, debera entregar Autorizacion Judicial. ",
                            "requirement_notes": "\u00b7 Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerol\u00ednea. \r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica.\r\n\u00b7 Los padres de todos los menores pueden hacer un solo poder notarial, donde est\u00e9n las firmas de todos los padres que autorizan la salida de los menores."
                        },
                        {
                            "requirement": "Carta o comunicaci\u00f3n de la organizaci\u00f3n (Academia, iglesia o liga Deportiva) local especificando el motivo del viaje",
                            "requirement_notes": "Opcional"
                        },
                        {
                            "requirement": "Carta de invitaci\u00f3n de la actividad a la que asistir\u00e1 el menor",
                            "requirement_notes": "Opcional"
                        },
                        {
                            "requirement": "Fotos o copias de las actas de nacimiento originales del (de los)  menor(es) , con el c\u00f3digo QR legible\u00a0\u00a0",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompa\u00f1ante o responsable",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es dominicano y no posee otra nacionalidad",
                            "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                            "id": "1"
                        },
                        {
                            "label": "Viajar\u00e1 con un tercero\u00a0",
                            "slug": "viajara-con-un-tercero",
                            "id": "1.4"
                        },
                        {
                            "label": "Viajar\u00e1 con academia, selecci\u00f3n o liga deportiva",
                            "slug": "viajara-con-academia-seleccion-o-liga-deportiva",
                            "id": "1.4.3"
                        }
                    ]
                },
                {
                    "id": "1.4.4",
                    "label": "Viajar\u00e1 con la persona que posee la guarda legal",
                    "desc": "Cuando el menor viaja con la persona que tiene la guarda legal con autorizaci\u00f3n de viaje ",
                    "type": "document",
                    "has_icon": false,
                    "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial de ambos padres, autorizando la salida del menor del pa\u00eds con el guarda custodia (de hecho o legal), legalizado por procuradur\u00eda",
                            "requirement_notes": "\u00b7 Ambos padres deben firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Fotos o copias de las c\u00e9dulas de identidad del padre y de la madre; o del tutor ",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula del acompa\u00f1ante ( si aplica)",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es dominicano y no posee otra nacionalidad",
                            "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                            "id": "1"
                        },
                        {
                            "label": "Viajar\u00e1 con un tercero\u00a0",
                            "slug": "viajara-con-un-tercero",
                            "id": "1.4"
                        },
                        {
                            "label": "Viajar\u00e1 con la persona que posee la guarda legal",
                            "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
                            "id": "1.4.4"
                        }
                    ]
                },
                {
                    "id": "1.4.5",
                    "label": "El menor tiene solo apellido materno y no viajar\u00e1 con su madre ",
                    "desc": "Cuando el menor ha sido declarado solo por la madre y es ella quien autoriza a otra persona a viajar con el menor",
                    "type": "document",
                    "has_icon": false,
                    "slug": "el-menor-tiene-solo-apellido-materno-y-no-viajara-con-su-madre-",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial de la madre, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                            "requirement_notes": "\u00b7 La madre debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de identidad de la madre ",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de identidad del acompa\u00f1ante (si aplica)",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es dominicano y no posee otra nacionalidad",
                            "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                            "id": "1"
                        },
                        {
                            "label": "Viajar\u00e1 con un tercero\u00a0",
                            "slug": "viajara-con-un-tercero",
                            "id": "1.4"
                        },
                        {
                            "label": "El menor tiene solo apellido materno y no viajar\u00e1 con su madre ",
                            "slug": "el-menor-tiene-solo-apellido-materno-y-no-viajara-con-su-madre-",
                            "id": "1.4.5"
                        }
                    ]
                },
                {
                    "id": "1.4.6",
                    "label": "Uno de los padres ha fallecido y no viajar\u00e1 con el padre sobreviviente",
                    "desc": "Cuando el menor viaja con la persona que ha autorizado el padre o madre sobreviviente",
                    "type": "document",
                    "has_icon": false,
                    "slug": "uno-de-los-padres-ha-fallecido-y-no-viajara-con-el-padre-sobreviviente",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial del padre sobreviviente, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                            "requirement_notes": "\u00b7 El padre sobreviviente debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                        },
                        {
                            "requirement": "Acta de defunci\u00f3n del padre fallecido  con codigo QR y legible",
                            "requirement_notes": "Si el padre o madre fallece en el extranjero, debe presentar Acta de defunci\u00f3n extranjera (Certificate of Death). Aquellas que no sean en ingles, portuges, italiano deben ser traducidas ya que el personal no domina otros idiomas"
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es dominicano y no posee otra nacionalidad",
                            "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                            "id": "1"
                        },
                        {
                            "label": "Viajar\u00e1 con un tercero\u00a0",
                            "slug": "viajara-con-un-tercero",
                            "id": "1.4"
                        },
                        {
                            "label": "Uno de los padres ha fallecido y no viajar\u00e1 con el padre sobreviviente",
                            "slug": "uno-de-los-padres-ha-fallecido-y-no-viajara-con-el-padre-sobreviviente",
                            "id": "1.4.6"
                        }
                    ]
                },
                {
                    "id": "1.4.7",
                    "label": "Viajar\u00e1 con una persona autorizada por el tutor legal ",
                    "desc": "Cuando el menor viaja con la persona que ha autorizado el tutor legal",
                    "type": "document",
                    "has_icon": false,
                    "slug": "viajara-con-una-persona-autorizada-por-el-tutor-legal-",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial del tutor (es) legal, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                            "requirement_notes": "\u00b7 El tutor legal debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de identidad de el o los tutores que realizan la solicitud",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                        },
                        {
                            "requirement": "Sentencia que otorga la tutor\u00eda legal del menor",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "C\u00e9dula del acompa\u00f1ante",
                            "requirement_notes": null
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es dominicano y no posee otra nacionalidad",
                            "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                            "id": "1"
                        },
                        {
                            "label": "Viajar\u00e1 con un tercero\u00a0",
                            "slug": "viajara-con-un-tercero",
                            "id": "1.4"
                        },
                        {
                            "label": "Viajar\u00e1 con una persona autorizada por el tutor legal ",
                            "slug": "viajara-con-una-persona-autorizada-por-el-tutor-legal-",
                            "id": "1.4.7"
                        }
                    ]
                },
                {
                    "id": "1.4.8",
                    "label": "Viajar\u00e1 con abuelos, t\u00edos, amigos u otras personas que no son los padres",
                    "desc": "Cuando el menor viaja con terceros que han sido autorizado los padres o tutores legales",
                    "type": "document",
                    "has_icon": false,
                    "slug": "viajara-con-abuelos-tios-amigos-u-otras-personas-que-no-son-los-padres",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial de los padres, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                            "requirement_notes": "\u00b7 Ambos padres deben firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Fotos o copia sde las c\u00e9dulas de identidad de ambos padres o tutor (es) ",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        },
                        {
                            "requirement": "C\u00e9dula del acompa\u00f1ante ",
                            "requirement_notes": null
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es dominicano y no posee otra nacionalidad",
                            "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                            "id": "1"
                        },
                        {
                            "label": "Viajar\u00e1 con un tercero\u00a0",
                            "slug": "viajara-con-un-tercero",
                            "id": "1.4"
                        },
                        {
                            "label": "Viajar\u00e1 con abuelos, t\u00edos, amigos u otras personas que no son los padres",
                            "slug": "viajara-con-abuelos-tios-amigos-u-otras-personas-que-no-son-los-padres",
                            "id": "1.4.8"
                        }
                    ]
                },
                {
                    "id": "1.4.9",
                    "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
                    "desc": "Cuando no se tiene la autorizaci\u00f3n de viaje de parte de uno de los padres",
                    "type": "document",
                    "has_icon": false,
                    "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
                    "requirements": [
                        {
                            "requirement": "Sentencia Judicial que otorga la autorizaci\u00f3n de viaje del menor",
                            "requirement_notes": "\u00b7 Ir al tribunal de ni\u00f1os, ni\u00f1as y adolescentes\r\n\u00b7 Solicitar la sentencia donde se les otorga la autorizaci\u00f3n de viaje "
                        },
                        {
                            "requirement": "Poder Notarial del padre que tiene la autorizaci\u00f3n de viaje y no viaja, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                            "requirement_notes": "\u00b7 El padre debe firmar el poder notarial autorizando la salida del menor\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil"
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "C\u00e9dula de identidad del acompa\u00f1ante (si aplica)",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es dominicano y no posee otra nacionalidad",
                            "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                            "id": "1"
                        },
                        {
                            "label": "Viajar\u00e1 con un tercero\u00a0",
                            "slug": "viajara-con-un-tercero",
                            "id": "1.4"
                        },
                        {
                            "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
                            "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
                            "id": "1.4.9"
                        }
                    ]
                },
                {
                    "id": "1.4.10",
                    "label": "No veo el caso del menor o tengo dudas para elegir",
                    "desc": "No veo el caso del menor o tengo dudas para elegir",
                    "type": "not_found",
                    "has_icon": false,
                    "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
                    "children": []
                }
            ]
        }
    ],
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-ambos-padres": {
        "id": "1.1",
        "label": "Viajar\u00e1 con ambos padres",
        "desc": "Cuando ambos padres viajaran con el menor",
        "type": "not_required_permission",
        "has_icon": true,
        "slug": "viajara-con-ambos-padres",
        "requirements": [
            {
                "requirement": "Ninguno",
                "requirement_notes": "No requiere presentar PSM en Control Migratorio"
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es dominicano y no posee otra nacionalidad",
                "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                "id": "1"
            },
            {
                "label": "Viajar\u00e1 con ambos padres",
                "slug": "viajara-con-ambos-padres",
                "id": "1.1"
            }
        ]
    },
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-uno-de-los-padres": [
        {
            "id": "1.2.1",
            "label": "Uno de los padres autoriza al otro a viajar",
            "desc": "Cuando uno de los padres autoriza al otro a viajar con el menor",
            "type": "document",
            "has_icon": false,
            "slug": "uno-de-los-padres-autoriza-al-otro-a-viajar",
            "requirements": [
                {
                    "requirement": "Poder Notarial del padre o madre que no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda. ",
                    "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB "
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es dominicano y no posee otra nacionalidad",
                    "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                    "id": "1"
                },
                {
                    "label": "Viajar\u00e1 con uno de los padres",
                    "slug": "viajara-con-uno-de-los-padres",
                    "id": "1.2"
                },
                {
                    "label": "Uno de los padres autoriza al otro a viajar",
                    "slug": "uno-de-los-padres-autoriza-al-otro-a-viajar",
                    "id": "1.2.1"
                }
            ]
        },
        {
            "id": "1.2.2",
            "label": "Viajar\u00e1 con la persona que posee la guarda legal",
            "desc": "Cuando el menor viaja con la persona que tiene la guarda legal de este",
            "type": "document",
            "has_icon": false,
            "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
            "requirements": [
                {
                    "requirement": "Poder Notarial de los padres, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                    "requirement_notes": "\u00b7 Ambos padres o tutores deben firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es dominicano y no posee otra nacionalidad",
                    "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                    "id": "1"
                },
                {
                    "label": "Viajar\u00e1 con uno de los padres",
                    "slug": "viajara-con-uno-de-los-padres",
                    "id": "1.2"
                },
                {
                    "label": "Viajar\u00e1 con la persona que posee la guarda legal",
                    "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
                    "id": "1.2.2"
                }
            ]
        },
        {
            "id": "1.2.3",
            "label": "El menor tiene solo apellido materno y viajar\u00e1 con su madre ",
            "desc": "Cuando el menor ha sido declarado solo por la madre y es ella quien le acompa\u00f1a a viajar",
            "type": "not_required_permission",
            "has_icon": false,
            "slug": "el-menor-tiene-solo-apellido-materno-y-viajara-con-su-madre-",
            "requirements": [
                {
                    "requirement": "Acta de nacimiento",
                    "requirement_notes": "No requiere el permiso, pero debe presentar acta de nacimiento en el  punto de Control Migratorio"
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es dominicano y no posee otra nacionalidad",
                    "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                    "id": "1"
                },
                {
                    "label": "Viajar\u00e1 con uno de los padres",
                    "slug": "viajara-con-uno-de-los-padres",
                    "id": "1.2"
                },
                {
                    "label": "El menor tiene solo apellido materno y viajar\u00e1 con su madre ",
                    "slug": "el-menor-tiene-solo-apellido-materno-y-viajara-con-su-madre-",
                    "id": "1.2.3"
                }
            ]
        },
        {
            "id": "1.2.4",
            "label": "Viajar\u00e1 con uno de los padres y el otro ha fallecido",
            "desc": "Cuando el menor viaja acompa\u00f1ado por su \u00fanico padre o madre que a\u00fan est\u00e1 vivo",
            "type": "not_required_permission",
            "has_icon": false,
            "slug": "viajara-con-uno-de-los-padres-y-el-otro-ha-fallecido",
            "requirements": [
                {
                    "requirement": "No requiere el permiso, pero debe mostrar en Control Migratorio el acta de defunci\u00f3n y acta de nacimiento del menor",
                    "requirement_notes": null
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es dominicano y no posee otra nacionalidad",
                    "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                    "id": "1"
                },
                {
                    "label": "Viajar\u00e1 con uno de los padres",
                    "slug": "viajara-con-uno-de-los-padres",
                    "id": "1.2"
                },
                {
                    "label": "Viajar\u00e1 con uno de los padres y el otro ha fallecido",
                    "slug": "viajara-con-uno-de-los-padres-y-el-otro-ha-fallecido",
                    "id": "1.2.4"
                }
            ]
        },
        {
            "id": "1.2.5",
            "label": "El menor fue adoptado por personas extranjeras y viaja por primera vez",
            "desc": "cuando el menor viaja por primera vez luego de ser adoptado por personas extranjeras",
            "type": "document",
            "has_icon": false,
            "slug": "el-menor-fue-adoptado-por-personas-extranjeras-y-viaja-por-primera-vez",
            "requirements": [
                {
                    "requirement": "Sentencia del tribunal  de ni\u00f1os, ni\u00f1as y adolescentes que evidencie la adopci\u00f3n",
                    "requirement_notes": "\u00b7 Ir al tribunal de ni\u00f1os, ni\u00f1as y adolescentes\r\n\u00b7 Solicitar la sentencia donde se les otorga la adopci\u00f3n, original y certificada. "
                },
                {
                    "requirement": "Poder Notarial del padre que tiene la patria potestad y no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda. ",
                    "requirement_notes": "\u00b7 El padre debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula o pasaporte del otro padre que autoriza",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del otro padre adoptivo que viaja con el menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es dominicano y no posee otra nacionalidad",
                    "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                    "id": "1"
                },
                {
                    "label": "Viajar\u00e1 con uno de los padres",
                    "slug": "viajara-con-uno-de-los-padres",
                    "id": "1.2"
                },
                {
                    "label": "El menor fue adoptado por personas extranjeras y viaja por primera vez",
                    "slug": "el-menor-fue-adoptado-por-personas-extranjeras-y-viaja-por-primera-vez",
                    "id": "1.2.5"
                }
            ]
        },
        {
            "id": "1.2.6",
            "label": "Uno de los padres vive en el extranjero y autoriza el viaje",
            "desc": "Cuando el menor viaja acompa\u00f1ado por el padre o madre que est\u00e1 en el pa\u00eds, y el padre o madre en el extranjero es quien autoriza la salida del menor",
            "type": "document",
            "has_icon": false,
            "slug": "uno-de-los-padres-vive-en-el-extranjero-y-autoriza-el-viaje",
            "requirements": [
                {
                    "requirement": "Poder consular otorgado en el pa\u00eds en donde se encuentra el padre (debe ser apostillado y sellado en cancilleria) o Poder Notarial legalizado del pa\u00eds donde se encuentre el padre en  original con apostilla de la Haya",
                    "requirement_notes": "\u00b7 El padre en el extranjero debe firmar el poder consular (en el consulado m\u00e1s cercana) autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en el Ministerio de Relaciones Exteriores de la Rep\u00fablica Dominicana."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es dominicano y no posee otra nacionalidad",
                    "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                    "id": "1"
                },
                {
                    "label": "Viajar\u00e1 con uno de los padres",
                    "slug": "viajara-con-uno-de-los-padres",
                    "id": "1.2"
                },
                {
                    "label": "Uno de los padres vive en el extranjero y autoriza el viaje",
                    "slug": "uno-de-los-padres-vive-en-el-extranjero-y-autoriza-el-viaje",
                    "id": "1.2.6"
                }
            ]
        },
        {
            "id": "1.2.7",
            "label": "Tiene autorizaci\u00f3n de viaje del menor\u00a0del tribunal Ni\u00f1os, Ni\u00f1as y Adolescentes",
            "desc": "Cuando el menor viaja con la persona que tiene la guarda legal con autorizaci\u00f3n de viaje ",
            "type": "document",
            "has_icon": false,
            "slug": "tiene-autorizacion-de-viaje-del-menordel-tribunal-ninos-ninas-y-adolescentes",
            "requirements": [
                {
                    "requirement": "Autorizaci\u00f3n judicial (sentencia, auto o resoluci\u00f3n) que autoriza el viaje del Menor",
                    "requirement_notes": "\u00b7 Ir al tribunal de ni\u00f1os, ni\u00f1as y adolescentes\r\n\u00b7 Solicitar la sentencia donde se les otorga la Guarda Legal y Autorizaci\u00f3n de viaje del menor"
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es dominicano y no posee otra nacionalidad",
                    "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                    "id": "1"
                },
                {
                    "label": "Viajar\u00e1 con uno de los padres",
                    "slug": "viajara-con-uno-de-los-padres",
                    "id": "1.2"
                },
                {
                    "label": "Tiene autorizaci\u00f3n de viaje del menor\u00a0del tribunal Ni\u00f1os, Ni\u00f1as y Adolescentes",
                    "slug": "tiene-autorizacion-de-viaje-del-menordel-tribunal-ninos-ninas-y-adolescentes",
                    "id": "1.2.7"
                }
            ]
        },
        {
            "id": "1.2.8",
            "label": "Viajar\u00e1 a una actividad cultural, escolar, religiosa, deportiva u otra",
            "desc": "Cuando uno de los padres autoriza al otro a viajar con el menor para participar en actividad cultural, escolar, religiosa, deportiva u otra.",
            "type": "document",
            "has_icon": false,
            "slug": "viajara-a-una-actividad-cultural-escolar-religiosa-deportiva-u-otra",
            "requirements": [
                {
                    "requirement": "Poder Notarial del padre que no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda. ",
                    "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB Sambil"
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es dominicano y no posee otra nacionalidad",
                    "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                    "id": "1"
                },
                {
                    "label": "Viajar\u00e1 con uno de los padres",
                    "slug": "viajara-con-uno-de-los-padres",
                    "id": "1.2"
                },
                {
                    "label": "Viajar\u00e1 a una actividad cultural, escolar, religiosa, deportiva u otra",
                    "slug": "viajara-a-una-actividad-cultural-escolar-religiosa-deportiva-u-otra",
                    "id": "1.2.8"
                }
            ]
        },
        {
            "id": "1.2.9",
            "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
            "desc": "Cuando uno de los padres se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor.",
            "type": "document",
            "has_icon": false,
            "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
            "requirements": [
                {
                    "requirement": "Sentencia judicial que autoriza el viaje del Menor o sentencia judical que otorga la autoridad parental unilateral al padre que viaja",
                    "requirement_notes": "\u00b7 Ir al tribunal de ni\u00f1os, ni\u00f1as y adolescentes\r\n\u00b7 Solicitar la sentencia donde se les otorga la patria potestad "
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o  madre que realiza la solicitud",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del padre acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del padre acompa\u00f1ante",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es dominicano y no posee otra nacionalidad",
                    "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                    "id": "1"
                },
                {
                    "label": "Viajar\u00e1 con uno de los padres",
                    "slug": "viajara-con-uno-de-los-padres",
                    "id": "1.2"
                },
                {
                    "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
                    "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
                    "id": "1.2.9"
                }
            ]
        },
        {
            "id": "1.2.10",
            "label": "No veo el caso del menor o tengo dudas para elegir",
            "desc": "No veo el caso del menor o tengo dudas para elegir",
            "type": "not_found",
            "has_icon": false,
            "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
            "children": []
        }
    ],
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-uno-de-los-padres/uno-de-los-padres-autoriza-al-otro-a-viajar": {
        "id": "1.2.1",
        "label": "Uno de los padres autoriza al otro a viajar",
        "desc": "Cuando uno de los padres autoriza al otro a viajar con el menor",
        "type": "document",
        "has_icon": false,
        "slug": "uno-de-los-padres-autoriza-al-otro-a-viajar",
        "requirements": [
            {
                "requirement": "Poder Notarial del padre o madre que no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda. ",
                "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB "
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es dominicano y no posee otra nacionalidad",
                "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                "id": "1"
            },
            {
                "label": "Viajar\u00e1 con uno de los padres",
                "slug": "viajara-con-uno-de-los-padres",
                "id": "1.2"
            },
            {
                "label": "Uno de los padres autoriza al otro a viajar",
                "slug": "uno-de-los-padres-autoriza-al-otro-a-viajar",
                "id": "1.2.1"
            }
        ]
    },
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-uno-de-los-padres/viajara-con-la-persona-que-posee-la-guarda-legal": {
        "id": "1.2.2",
        "label": "Viajar\u00e1 con la persona que posee la guarda legal",
        "desc": "Cuando el menor viaja con la persona que tiene la guarda legal de este",
        "type": "document",
        "has_icon": false,
        "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
        "requirements": [
            {
                "requirement": "Poder Notarial de los padres, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                "requirement_notes": "\u00b7 Ambos padres o tutores deben firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es dominicano y no posee otra nacionalidad",
                "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                "id": "1"
            },
            {
                "label": "Viajar\u00e1 con uno de los padres",
                "slug": "viajara-con-uno-de-los-padres",
                "id": "1.2"
            },
            {
                "label": "Viajar\u00e1 con la persona que posee la guarda legal",
                "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
                "id": "1.2.2"
            }
        ]
    },
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-uno-de-los-padres/el-menor-tiene-solo-apellido-materno-y-viajara-con-su-madre-": {
        "id": "1.2.3",
        "label": "El menor tiene solo apellido materno y viajar\u00e1 con su madre ",
        "desc": "Cuando el menor ha sido declarado solo por la madre y es ella quien le acompa\u00f1a a viajar",
        "type": "not_required_permission",
        "has_icon": false,
        "slug": "el-menor-tiene-solo-apellido-materno-y-viajara-con-su-madre-",
        "requirements": [
            {
                "requirement": "Acta de nacimiento",
                "requirement_notes": "No requiere el permiso, pero debe presentar acta de nacimiento en el  punto de Control Migratorio"
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es dominicano y no posee otra nacionalidad",
                "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                "id": "1"
            },
            {
                "label": "Viajar\u00e1 con uno de los padres",
                "slug": "viajara-con-uno-de-los-padres",
                "id": "1.2"
            },
            {
                "label": "El menor tiene solo apellido materno y viajar\u00e1 con su madre ",
                "slug": "el-menor-tiene-solo-apellido-materno-y-viajara-con-su-madre-",
                "id": "1.2.3"
            }
        ]
    },
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-uno-de-los-padres/viajara-con-uno-de-los-padres-y-el-otro-ha-fallecido": {
        "id": "1.2.4",
        "label": "Viajar\u00e1 con uno de los padres y el otro ha fallecido",
        "desc": "Cuando el menor viaja acompa\u00f1ado por su \u00fanico padre o madre que a\u00fan est\u00e1 vivo",
        "type": "not_required_permission",
        "has_icon": false,
        "slug": "viajara-con-uno-de-los-padres-y-el-otro-ha-fallecido",
        "requirements": [
            {
                "requirement": "No requiere el permiso, pero debe mostrar en Control Migratorio el acta de defunci\u00f3n y acta de nacimiento del menor",
                "requirement_notes": null
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es dominicano y no posee otra nacionalidad",
                "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                "id": "1"
            },
            {
                "label": "Viajar\u00e1 con uno de los padres",
                "slug": "viajara-con-uno-de-los-padres",
                "id": "1.2"
            },
            {
                "label": "Viajar\u00e1 con uno de los padres y el otro ha fallecido",
                "slug": "viajara-con-uno-de-los-padres-y-el-otro-ha-fallecido",
                "id": "1.2.4"
            }
        ]
    },
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-uno-de-los-padres/el-menor-fue-adoptado-por-personas-extranjeras-y-viaja-por-primera-vez": {
        "id": "1.2.5",
        "label": "El menor fue adoptado por personas extranjeras y viaja por primera vez",
        "desc": "cuando el menor viaja por primera vez luego de ser adoptado por personas extranjeras",
        "type": "document",
        "has_icon": false,
        "slug": "el-menor-fue-adoptado-por-personas-extranjeras-y-viaja-por-primera-vez",
        "requirements": [
            {
                "requirement": "Sentencia del tribunal  de ni\u00f1os, ni\u00f1as y adolescentes que evidencie la adopci\u00f3n",
                "requirement_notes": "\u00b7 Ir al tribunal de ni\u00f1os, ni\u00f1as y adolescentes\r\n\u00b7 Solicitar la sentencia donde se les otorga la adopci\u00f3n, original y certificada. "
            },
            {
                "requirement": "Poder Notarial del padre que tiene la patria potestad y no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda. ",
                "requirement_notes": "\u00b7 El padre debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula o pasaporte del otro padre que autoriza",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del otro padre adoptivo que viaja con el menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es dominicano y no posee otra nacionalidad",
                "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                "id": "1"
            },
            {
                "label": "Viajar\u00e1 con uno de los padres",
                "slug": "viajara-con-uno-de-los-padres",
                "id": "1.2"
            },
            {
                "label": "El menor fue adoptado por personas extranjeras y viaja por primera vez",
                "slug": "el-menor-fue-adoptado-por-personas-extranjeras-y-viaja-por-primera-vez",
                "id": "1.2.5"
            }
        ]
    },
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-uno-de-los-padres/uno-de-los-padres-vive-en-el-extranjero-y-autoriza-el-viaje": {
        "id": "1.2.6",
        "label": "Uno de los padres vive en el extranjero y autoriza el viaje",
        "desc": "Cuando el menor viaja acompa\u00f1ado por el padre o madre que est\u00e1 en el pa\u00eds, y el padre o madre en el extranjero es quien autoriza la salida del menor",
        "type": "document",
        "has_icon": false,
        "slug": "uno-de-los-padres-vive-en-el-extranjero-y-autoriza-el-viaje",
        "requirements": [
            {
                "requirement": "Poder consular otorgado en el pa\u00eds en donde se encuentra el padre (debe ser apostillado y sellado en cancilleria) o Poder Notarial legalizado del pa\u00eds donde se encuentre el padre en  original con apostilla de la Haya",
                "requirement_notes": "\u00b7 El padre en el extranjero debe firmar el poder consular (en el consulado m\u00e1s cercana) autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en el Ministerio de Relaciones Exteriores de la Rep\u00fablica Dominicana."
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es dominicano y no posee otra nacionalidad",
                "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                "id": "1"
            },
            {
                "label": "Viajar\u00e1 con uno de los padres",
                "slug": "viajara-con-uno-de-los-padres",
                "id": "1.2"
            },
            {
                "label": "Uno de los padres vive en el extranjero y autoriza el viaje",
                "slug": "uno-de-los-padres-vive-en-el-extranjero-y-autoriza-el-viaje",
                "id": "1.2.6"
            }
        ]
    },
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-uno-de-los-padres/tiene-autorizacion-de-viaje-del-menordel-tribunal-ninos-ninas-y-adolescentes": {
        "id": "1.2.7",
        "label": "Tiene autorizaci\u00f3n de viaje del menor\u00a0del tribunal Ni\u00f1os, Ni\u00f1as y Adolescentes",
        "desc": "Cuando el menor viaja con la persona que tiene la guarda legal con autorizaci\u00f3n de viaje ",
        "type": "document",
        "has_icon": false,
        "slug": "tiene-autorizacion-de-viaje-del-menordel-tribunal-ninos-ninas-y-adolescentes",
        "requirements": [
            {
                "requirement": "Autorizaci\u00f3n judicial (sentencia, auto o resoluci\u00f3n) que autoriza el viaje del Menor",
                "requirement_notes": "\u00b7 Ir al tribunal de ni\u00f1os, ni\u00f1as y adolescentes\r\n\u00b7 Solicitar la sentencia donde se les otorga la Guarda Legal y Autorizaci\u00f3n de viaje del menor"
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es dominicano y no posee otra nacionalidad",
                "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                "id": "1"
            },
            {
                "label": "Viajar\u00e1 con uno de los padres",
                "slug": "viajara-con-uno-de-los-padres",
                "id": "1.2"
            },
            {
                "label": "Tiene autorizaci\u00f3n de viaje del menor\u00a0del tribunal Ni\u00f1os, Ni\u00f1as y Adolescentes",
                "slug": "tiene-autorizacion-de-viaje-del-menordel-tribunal-ninos-ninas-y-adolescentes",
                "id": "1.2.7"
            }
        ]
    },
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-uno-de-los-padres/viajara-a-una-actividad-cultural-escolar-religiosa-deportiva-u-otra": {
        "id": "1.2.8",
        "label": "Viajar\u00e1 a una actividad cultural, escolar, religiosa, deportiva u otra",
        "desc": "Cuando uno de los padres autoriza al otro a viajar con el menor para participar en actividad cultural, escolar, religiosa, deportiva u otra.",
        "type": "document",
        "has_icon": false,
        "slug": "viajara-a-una-actividad-cultural-escolar-religiosa-deportiva-u-otra",
        "requirements": [
            {
                "requirement": "Poder Notarial del padre que no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda. ",
                "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB Sambil"
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es dominicano y no posee otra nacionalidad",
                "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                "id": "1"
            },
            {
                "label": "Viajar\u00e1 con uno de los padres",
                "slug": "viajara-con-uno-de-los-padres",
                "id": "1.2"
            },
            {
                "label": "Viajar\u00e1 a una actividad cultural, escolar, religiosa, deportiva u otra",
                "slug": "viajara-a-una-actividad-cultural-escolar-religiosa-deportiva-u-otra",
                "id": "1.2.8"
            }
        ]
    },
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-uno-de-los-padres/uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor": {
        "id": "1.2.9",
        "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
        "desc": "Cuando uno de los padres se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor.",
        "type": "document",
        "has_icon": false,
        "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
        "requirements": [
            {
                "requirement": "Sentencia judicial que autoriza el viaje del Menor o sentencia judical que otorga la autoridad parental unilateral al padre que viaja",
                "requirement_notes": "\u00b7 Ir al tribunal de ni\u00f1os, ni\u00f1as y adolescentes\r\n\u00b7 Solicitar la sentencia donde se les otorga la patria potestad "
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o  madre que realiza la solicitud",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del padre acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del padre acompa\u00f1ante",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es dominicano y no posee otra nacionalidad",
                "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                "id": "1"
            },
            {
                "label": "Viajar\u00e1 con uno de los padres",
                "slug": "viajara-con-uno-de-los-padres",
                "id": "1.2"
            },
            {
                "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
                "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
                "id": "1.2.9"
            }
        ]
    },
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-uno-de-los-padres/no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir": {
        "id": "1.2.10",
        "label": "No veo el caso del menor o tengo dudas para elegir",
        "desc": "No veo el caso del menor o tengo dudas para elegir",
        "type": "not_found",
        "has_icon": false,
        "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
        "children": []
    },
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-su-tutor-legal---tutores-legales": [
        {
            "id": "1.3.1",
            "label": "El menor viajar\u00e1 con el tutor legal y el otro tutor autoriza",
            "desc": null,
            "type": "document",
            "has_icon": false,
            "slug": "el-menor-viajara-con-el-tutor-legal-y-el-otro-tutor-autoriza",
            "requirements": [
                {
                    "requirement": "Poder Notarial del padre o madre que no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda. ",
                    "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB "
                },
                {
                    "requirement": "Sentencia judicial que otorga la tutor\u00eda legal sobre el/los menor/es",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es dominicano y no posee otra nacionalidad",
                    "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                    "id": "1"
                },
                {
                    "label": "Viajar\u00e1 con su tutor legal / tutores legales",
                    "slug": "viajara-con-su-tutor-legal---tutores-legales",
                    "id": "1.3"
                },
                {
                    "label": "El menor viajar\u00e1 con el tutor legal y el otro tutor autoriza",
                    "slug": "el-menor-viajara-con-el-tutor-legal-y-el-otro-tutor-autoriza",
                    "id": "1.3.1"
                }
            ]
        },
        {
            "id": "1.3.2",
            "label": "El menor tiene un solo tutor legal y viajar\u00e1 con \u00e9l",
            "desc": null,
            "type": "not_required_permission",
            "has_icon": false,
            "slug": "el-menor-tiene-un-solo-tutor-legal-y-viajara-con-el",
            "requirements": [
                {
                    "requirement": "No requiere el permiso, pero debe mostrar en Control Migratorio la sentencia que muestra la tutor\u00eda legal \u00fanica sobre el/los menor/es",
                    "requirement_notes": null
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es dominicano y no posee otra nacionalidad",
                    "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                    "id": "1"
                },
                {
                    "label": "Viajar\u00e1 con su tutor legal / tutores legales",
                    "slug": "viajara-con-su-tutor-legal---tutores-legales",
                    "id": "1.3"
                },
                {
                    "label": "El menor tiene un solo tutor legal y viajar\u00e1 con \u00e9l",
                    "slug": "el-menor-tiene-un-solo-tutor-legal-y-viajara-con-el",
                    "id": "1.3.2"
                }
            ]
        },
        {
            "id": "1.3.3",
            "label": "El menor viajar\u00e1 con ambos tutores legales",
            "desc": null,
            "type": "not_required_permission",
            "has_icon": false,
            "slug": "el-menor-viajara-con-ambos-tutores-legales",
            "requirements": [
                {
                    "requirement": "Presentar la sentencia que otorga la tutor\u00eda legal de/los menor/es",
                    "requirement_notes": "No requiere presentar PSM en Control Migratorio"
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es dominicano y no posee otra nacionalidad",
                    "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                    "id": "1"
                },
                {
                    "label": "Viajar\u00e1 con su tutor legal / tutores legales",
                    "slug": "viajara-con-su-tutor-legal---tutores-legales",
                    "id": "1.3"
                },
                {
                    "label": "El menor viajar\u00e1 con ambos tutores legales",
                    "slug": "el-menor-viajara-con-ambos-tutores-legales",
                    "id": "1.3.3"
                }
            ]
        },
        {
            "id": "1.3.4",
            "label": "No veo el caso del menor o tengo dudas para elegir",
            "desc": null,
            "type": "not_found",
            "has_icon": false,
            "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
            "children": []
        }
    ],
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-su-tutor-legal---tutores-legales/el-menor-viajara-con-el-tutor-legal-y-el-otro-tutor-autoriza": {
        "id": "1.3.1",
        "label": "El menor viajar\u00e1 con el tutor legal y el otro tutor autoriza",
        "desc": null,
        "type": "document",
        "has_icon": false,
        "slug": "el-menor-viajara-con-el-tutor-legal-y-el-otro-tutor-autoriza",
        "requirements": [
            {
                "requirement": "Poder Notarial del padre o madre que no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda. ",
                "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB "
            },
            {
                "requirement": "Sentencia judicial que otorga la tutor\u00eda legal sobre el/los menor/es",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es dominicano y no posee otra nacionalidad",
                "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                "id": "1"
            },
            {
                "label": "Viajar\u00e1 con su tutor legal / tutores legales",
                "slug": "viajara-con-su-tutor-legal---tutores-legales",
                "id": "1.3"
            },
            {
                "label": "El menor viajar\u00e1 con el tutor legal y el otro tutor autoriza",
                "slug": "el-menor-viajara-con-el-tutor-legal-y-el-otro-tutor-autoriza",
                "id": "1.3.1"
            }
        ]
    },
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-su-tutor-legal---tutores-legales/el-menor-tiene-un-solo-tutor-legal-y-viajara-con-el": {
        "id": "1.3.2",
        "label": "El menor tiene un solo tutor legal y viajar\u00e1 con \u00e9l",
        "desc": null,
        "type": "not_required_permission",
        "has_icon": false,
        "slug": "el-menor-tiene-un-solo-tutor-legal-y-viajara-con-el",
        "requirements": [
            {
                "requirement": "No requiere el permiso, pero debe mostrar en Control Migratorio la sentencia que muestra la tutor\u00eda legal \u00fanica sobre el/los menor/es",
                "requirement_notes": null
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es dominicano y no posee otra nacionalidad",
                "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                "id": "1"
            },
            {
                "label": "Viajar\u00e1 con su tutor legal / tutores legales",
                "slug": "viajara-con-su-tutor-legal---tutores-legales",
                "id": "1.3"
            },
            {
                "label": "El menor tiene un solo tutor legal y viajar\u00e1 con \u00e9l",
                "slug": "el-menor-tiene-un-solo-tutor-legal-y-viajara-con-el",
                "id": "1.3.2"
            }
        ]
    },
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-su-tutor-legal---tutores-legales/el-menor-viajara-con-ambos-tutores-legales": {
        "id": "1.3.3",
        "label": "El menor viajar\u00e1 con ambos tutores legales",
        "desc": null,
        "type": "not_required_permission",
        "has_icon": false,
        "slug": "el-menor-viajara-con-ambos-tutores-legales",
        "requirements": [
            {
                "requirement": "Presentar la sentencia que otorga la tutor\u00eda legal de/los menor/es",
                "requirement_notes": "No requiere presentar PSM en Control Migratorio"
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es dominicano y no posee otra nacionalidad",
                "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                "id": "1"
            },
            {
                "label": "Viajar\u00e1 con su tutor legal / tutores legales",
                "slug": "viajara-con-su-tutor-legal---tutores-legales",
                "id": "1.3"
            },
            {
                "label": "El menor viajar\u00e1 con ambos tutores legales",
                "slug": "el-menor-viajara-con-ambos-tutores-legales",
                "id": "1.3.3"
            }
        ]
    },
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-su-tutor-legal---tutores-legales/no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir": {
        "id": "1.3.4",
        "label": "No veo el caso del menor o tengo dudas para elegir",
        "desc": null,
        "type": "not_found",
        "has_icon": false,
        "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
        "children": []
    },
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-un-tercero": [
        {
            "id": "1.4.1",
            "label": "Viajar\u00e1 con la aerol\u00ednea",
            "desc": "Cuando el menor viaja con la Aerol\u00ednea y cuenta con la autorizaci\u00f3n de ambos padres, padre, madre o tutor legal",
            "type": "document",
            "has_icon": false,
            "slug": "viajara-con-la-aerolinea",
            "requirements": [
                {
                    "requirement": "Poder Notarial de ambos padres, padre, madre o tutor (seg\u00fan el caso) legal autorizando la salida del menor del pa\u00eds con la aerol\u00ednea, legalizado por procuradur\u00eda o sentencia judicial",
                    "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB Sambil"
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de la o las personas que autorizan",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                },
                {
                    "requirement": "Boleto o reserva del viaje",
                    "requirement_notes": null
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es dominicano y no posee otra nacionalidad",
                    "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                    "id": "1"
                },
                {
                    "label": "Viajar\u00e1 con un tercero\u00a0",
                    "slug": "viajara-con-un-tercero",
                    "id": "1.4"
                },
                {
                    "label": "Viajar\u00e1 con la aerol\u00ednea",
                    "slug": "viajara-con-la-aerolinea",
                    "id": "1.4.1"
                }
            ]
        },
        {
            "id": "1.4.2",
            "label": "Viajar\u00e1 con el colegio, centro educativo o instituci\u00f3n cultural",
            "desc": "Cuando el menor viaja con  una academia, centro educativo o instituci\u00f3n cultural, y cuenta con la autorizaci\u00f3n de los padres, padre, madre o tutor legal",
            "type": "document",
            "has_icon": false,
            "slug": "viajara-con-el-colegio-centro-educativo-o-institucion-cultural",
            "requirements": [
                {
                    "requirement": "Poder Notarial de los padres o tutores, autorizando la salida del menor del pa\u00eds con el centro educativo, legalizado por procuradur\u00eda",
                    "requirement_notes": "\u00b7 Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerol\u00ednea. \r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica.\r\n\u00b7 Los padres de todos los menores pueden hacer un solo poder notarial, donde est\u00e9n las firmas de todos los padres que autorizan la salida de los menores."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es dominicano y no posee otra nacionalidad",
                    "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                    "id": "1"
                },
                {
                    "label": "Viajar\u00e1 con un tercero\u00a0",
                    "slug": "viajara-con-un-tercero",
                    "id": "1.4"
                },
                {
                    "label": "Viajar\u00e1 con el colegio, centro educativo o instituci\u00f3n cultural",
                    "slug": "viajara-con-el-colegio-centro-educativo-o-institucion-cultural",
                    "id": "1.4.2"
                }
            ]
        },
        {
            "id": "1.4.3",
            "label": "Viajar\u00e1 con academia, selecci\u00f3n o liga deportiva",
            "desc": "Cuando el menor viaja con  una academia, selecci\u00f3 o liga deportiva, y cuenta con la autorizaci\u00f3n de ambos padres, padre, madre o tutor legal",
            "type": "document",
            "has_icon": false,
            "slug": "viajara-con-academia-seleccion-o-liga-deportiva",
            "requirements": [
                {
                    "requirement": "Poder Notarial (colectivo o individual) de los padres, autorizando la salida del o los menores del pa\u00eds, legalizado por procuradur\u00eda. En caso de que los padres esten fuera del pais, debera entregar el poder consular. En caso de que uno de los padres no quiere que viaje o no este presente en la vida del menor, debera entregar Autorizacion Judicial. ",
                    "requirement_notes": "\u00b7 Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerol\u00ednea. \r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica.\r\n\u00b7 Los padres de todos los menores pueden hacer un solo poder notarial, donde est\u00e9n las firmas de todos los padres que autorizan la salida de los menores."
                },
                {
                    "requirement": "Carta o comunicaci\u00f3n de la organizaci\u00f3n (Academia, iglesia o liga Deportiva) local especificando el motivo del viaje",
                    "requirement_notes": "Opcional"
                },
                {
                    "requirement": "Carta de invitaci\u00f3n de la actividad a la que asistir\u00e1 el menor",
                    "requirement_notes": "Opcional"
                },
                {
                    "requirement": "Fotos o copias de las actas de nacimiento originales del (de los)  menor(es) , con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante o responsable",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es dominicano y no posee otra nacionalidad",
                    "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                    "id": "1"
                },
                {
                    "label": "Viajar\u00e1 con un tercero\u00a0",
                    "slug": "viajara-con-un-tercero",
                    "id": "1.4"
                },
                {
                    "label": "Viajar\u00e1 con academia, selecci\u00f3n o liga deportiva",
                    "slug": "viajara-con-academia-seleccion-o-liga-deportiva",
                    "id": "1.4.3"
                }
            ]
        },
        {
            "id": "1.4.4",
            "label": "Viajar\u00e1 con la persona que posee la guarda legal",
            "desc": "Cuando el menor viaja con la persona que tiene la guarda legal con autorizaci\u00f3n de viaje ",
            "type": "document",
            "has_icon": false,
            "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
            "requirements": [
                {
                    "requirement": "Poder Notarial de ambos padres, autorizando la salida del menor del pa\u00eds con el guarda custodia (de hecho o legal), legalizado por procuradur\u00eda",
                    "requirement_notes": "\u00b7 Ambos padres deben firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": null
                },
                {
                    "requirement": "Fotos o copias de las c\u00e9dulas de identidad del padre y de la madre; o del tutor ",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula del acompa\u00f1ante ( si aplica)",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es dominicano y no posee otra nacionalidad",
                    "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                    "id": "1"
                },
                {
                    "label": "Viajar\u00e1 con un tercero\u00a0",
                    "slug": "viajara-con-un-tercero",
                    "id": "1.4"
                },
                {
                    "label": "Viajar\u00e1 con la persona que posee la guarda legal",
                    "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
                    "id": "1.4.4"
                }
            ]
        },
        {
            "id": "1.4.5",
            "label": "El menor tiene solo apellido materno y no viajar\u00e1 con su madre ",
            "desc": "Cuando el menor ha sido declarado solo por la madre y es ella quien autoriza a otra persona a viajar con el menor",
            "type": "document",
            "has_icon": false,
            "slug": "el-menor-tiene-solo-apellido-materno-y-no-viajara-con-su-madre-",
            "requirements": [
                {
                    "requirement": "Poder Notarial de la madre, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                    "requirement_notes": "\u00b7 La madre debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de identidad de la madre ",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de identidad del acompa\u00f1ante (si aplica)",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es dominicano y no posee otra nacionalidad",
                    "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                    "id": "1"
                },
                {
                    "label": "Viajar\u00e1 con un tercero\u00a0",
                    "slug": "viajara-con-un-tercero",
                    "id": "1.4"
                },
                {
                    "label": "El menor tiene solo apellido materno y no viajar\u00e1 con su madre ",
                    "slug": "el-menor-tiene-solo-apellido-materno-y-no-viajara-con-su-madre-",
                    "id": "1.4.5"
                }
            ]
        },
        {
            "id": "1.4.6",
            "label": "Uno de los padres ha fallecido y no viajar\u00e1 con el padre sobreviviente",
            "desc": "Cuando el menor viaja con la persona que ha autorizado el padre o madre sobreviviente",
            "type": "document",
            "has_icon": false,
            "slug": "uno-de-los-padres-ha-fallecido-y-no-viajara-con-el-padre-sobreviviente",
            "requirements": [
                {
                    "requirement": "Poder Notarial del padre sobreviviente, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                    "requirement_notes": "\u00b7 El padre sobreviviente debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                },
                {
                    "requirement": "Acta de defunci\u00f3n del padre fallecido  con codigo QR y legible",
                    "requirement_notes": "Si el padre o madre fallece en el extranjero, debe presentar Acta de defunci\u00f3n extranjera (Certificate of Death). Aquellas que no sean en ingles, portuges, italiano deben ser traducidas ya que el personal no domina otros idiomas"
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es dominicano y no posee otra nacionalidad",
                    "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                    "id": "1"
                },
                {
                    "label": "Viajar\u00e1 con un tercero\u00a0",
                    "slug": "viajara-con-un-tercero",
                    "id": "1.4"
                },
                {
                    "label": "Uno de los padres ha fallecido y no viajar\u00e1 con el padre sobreviviente",
                    "slug": "uno-de-los-padres-ha-fallecido-y-no-viajara-con-el-padre-sobreviviente",
                    "id": "1.4.6"
                }
            ]
        },
        {
            "id": "1.4.7",
            "label": "Viajar\u00e1 con una persona autorizada por el tutor legal ",
            "desc": "Cuando el menor viaja con la persona que ha autorizado el tutor legal",
            "type": "document",
            "has_icon": false,
            "slug": "viajara-con-una-persona-autorizada-por-el-tutor-legal-",
            "requirements": [
                {
                    "requirement": "Poder Notarial del tutor (es) legal, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                    "requirement_notes": "\u00b7 El tutor legal debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de identidad de el o los tutores que realizan la solicitud",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                },
                {
                    "requirement": "Sentencia que otorga la tutor\u00eda legal del menor",
                    "requirement_notes": null
                },
                {
                    "requirement": "C\u00e9dula del acompa\u00f1ante",
                    "requirement_notes": null
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es dominicano y no posee otra nacionalidad",
                    "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                    "id": "1"
                },
                {
                    "label": "Viajar\u00e1 con un tercero\u00a0",
                    "slug": "viajara-con-un-tercero",
                    "id": "1.4"
                },
                {
                    "label": "Viajar\u00e1 con una persona autorizada por el tutor legal ",
                    "slug": "viajara-con-una-persona-autorizada-por-el-tutor-legal-",
                    "id": "1.4.7"
                }
            ]
        },
        {
            "id": "1.4.8",
            "label": "Viajar\u00e1 con abuelos, t\u00edos, amigos u otras personas que no son los padres",
            "desc": "Cuando el menor viaja con terceros que han sido autorizado los padres o tutores legales",
            "type": "document",
            "has_icon": false,
            "slug": "viajara-con-abuelos-tios-amigos-u-otras-personas-que-no-son-los-padres",
            "requirements": [
                {
                    "requirement": "Poder Notarial de los padres, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                    "requirement_notes": "\u00b7 Ambos padres deben firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": null
                },
                {
                    "requirement": "Fotos o copia sde las c\u00e9dulas de identidad de ambos padres o tutor (es) ",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                },
                {
                    "requirement": "C\u00e9dula del acompa\u00f1ante ",
                    "requirement_notes": null
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es dominicano y no posee otra nacionalidad",
                    "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                    "id": "1"
                },
                {
                    "label": "Viajar\u00e1 con un tercero\u00a0",
                    "slug": "viajara-con-un-tercero",
                    "id": "1.4"
                },
                {
                    "label": "Viajar\u00e1 con abuelos, t\u00edos, amigos u otras personas que no son los padres",
                    "slug": "viajara-con-abuelos-tios-amigos-u-otras-personas-que-no-son-los-padres",
                    "id": "1.4.8"
                }
            ]
        },
        {
            "id": "1.4.9",
            "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
            "desc": "Cuando no se tiene la autorizaci\u00f3n de viaje de parte de uno de los padres",
            "type": "document",
            "has_icon": false,
            "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
            "requirements": [
                {
                    "requirement": "Sentencia Judicial que otorga la autorizaci\u00f3n de viaje del menor",
                    "requirement_notes": "\u00b7 Ir al tribunal de ni\u00f1os, ni\u00f1as y adolescentes\r\n\u00b7 Solicitar la sentencia donde se les otorga la autorizaci\u00f3n de viaje "
                },
                {
                    "requirement": "Poder Notarial del padre que tiene la autorizaci\u00f3n de viaje y no viaja, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                    "requirement_notes": "\u00b7 El padre debe firmar el poder notarial autorizando la salida del menor\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil"
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "C\u00e9dula de identidad del acompa\u00f1ante (si aplica)",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es dominicano y no posee otra nacionalidad",
                    "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                    "id": "1"
                },
                {
                    "label": "Viajar\u00e1 con un tercero\u00a0",
                    "slug": "viajara-con-un-tercero",
                    "id": "1.4"
                },
                {
                    "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
                    "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
                    "id": "1.4.9"
                }
            ]
        },
        {
            "id": "1.4.10",
            "label": "No veo el caso del menor o tengo dudas para elegir",
            "desc": "No veo el caso del menor o tengo dudas para elegir",
            "type": "not_found",
            "has_icon": false,
            "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
            "children": []
        }
    ],
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-un-tercero/viajara-con-la-aerolinea": {
        "id": "1.4.1",
        "label": "Viajar\u00e1 con la aerol\u00ednea",
        "desc": "Cuando el menor viaja con la Aerol\u00ednea y cuenta con la autorizaci\u00f3n de ambos padres, padre, madre o tutor legal",
        "type": "document",
        "has_icon": false,
        "slug": "viajara-con-la-aerolinea",
        "requirements": [
            {
                "requirement": "Poder Notarial de ambos padres, padre, madre o tutor (seg\u00fan el caso) legal autorizando la salida del menor del pa\u00eds con la aerol\u00ednea, legalizado por procuradur\u00eda o sentencia judicial",
                "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB Sambil"
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de la o las personas que autorizan",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
            },
            {
                "requirement": "Boleto o reserva del viaje",
                "requirement_notes": null
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es dominicano y no posee otra nacionalidad",
                "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                "id": "1"
            },
            {
                "label": "Viajar\u00e1 con un tercero\u00a0",
                "slug": "viajara-con-un-tercero",
                "id": "1.4"
            },
            {
                "label": "Viajar\u00e1 con la aerol\u00ednea",
                "slug": "viajara-con-la-aerolinea",
                "id": "1.4.1"
            }
        ]
    },
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-un-tercero/viajara-con-el-colegio-centro-educativo-o-institucion-cultural": {
        "id": "1.4.2",
        "label": "Viajar\u00e1 con el colegio, centro educativo o instituci\u00f3n cultural",
        "desc": "Cuando el menor viaja con  una academia, centro educativo o instituci\u00f3n cultural, y cuenta con la autorizaci\u00f3n de los padres, padre, madre o tutor legal",
        "type": "document",
        "has_icon": false,
        "slug": "viajara-con-el-colegio-centro-educativo-o-institucion-cultural",
        "requirements": [
            {
                "requirement": "Poder Notarial de los padres o tutores, autorizando la salida del menor del pa\u00eds con el centro educativo, legalizado por procuradur\u00eda",
                "requirement_notes": "\u00b7 Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerol\u00ednea. \r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica.\r\n\u00b7 Los padres de todos los menores pueden hacer un solo poder notarial, donde est\u00e9n las firmas de todos los padres que autorizan la salida de los menores."
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es dominicano y no posee otra nacionalidad",
                "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                "id": "1"
            },
            {
                "label": "Viajar\u00e1 con un tercero\u00a0",
                "slug": "viajara-con-un-tercero",
                "id": "1.4"
            },
            {
                "label": "Viajar\u00e1 con el colegio, centro educativo o instituci\u00f3n cultural",
                "slug": "viajara-con-el-colegio-centro-educativo-o-institucion-cultural",
                "id": "1.4.2"
            }
        ]
    },
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-un-tercero/viajara-con-academia-seleccion-o-liga-deportiva": {
        "id": "1.4.3",
        "label": "Viajar\u00e1 con academia, selecci\u00f3n o liga deportiva",
        "desc": "Cuando el menor viaja con  una academia, selecci\u00f3 o liga deportiva, y cuenta con la autorizaci\u00f3n de ambos padres, padre, madre o tutor legal",
        "type": "document",
        "has_icon": false,
        "slug": "viajara-con-academia-seleccion-o-liga-deportiva",
        "requirements": [
            {
                "requirement": "Poder Notarial (colectivo o individual) de los padres, autorizando la salida del o los menores del pa\u00eds, legalizado por procuradur\u00eda. En caso de que los padres esten fuera del pais, debera entregar el poder consular. En caso de que uno de los padres no quiere que viaje o no este presente en la vida del menor, debera entregar Autorizacion Judicial. ",
                "requirement_notes": "\u00b7 Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerol\u00ednea. \r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica.\r\n\u00b7 Los padres de todos los menores pueden hacer un solo poder notarial, donde est\u00e9n las firmas de todos los padres que autorizan la salida de los menores."
            },
            {
                "requirement": "Carta o comunicaci\u00f3n de la organizaci\u00f3n (Academia, iglesia o liga Deportiva) local especificando el motivo del viaje",
                "requirement_notes": "Opcional"
            },
            {
                "requirement": "Carta de invitaci\u00f3n de la actividad a la que asistir\u00e1 el menor",
                "requirement_notes": "Opcional"
            },
            {
                "requirement": "Fotos o copias de las actas de nacimiento originales del (de los)  menor(es) , con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del acompa\u00f1ante o responsable",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es dominicano y no posee otra nacionalidad",
                "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                "id": "1"
            },
            {
                "label": "Viajar\u00e1 con un tercero\u00a0",
                "slug": "viajara-con-un-tercero",
                "id": "1.4"
            },
            {
                "label": "Viajar\u00e1 con academia, selecci\u00f3n o liga deportiva",
                "slug": "viajara-con-academia-seleccion-o-liga-deportiva",
                "id": "1.4.3"
            }
        ]
    },
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-un-tercero/viajara-con-la-persona-que-posee-la-guarda-legal": {
        "id": "1.4.4",
        "label": "Viajar\u00e1 con la persona que posee la guarda legal",
        "desc": "Cuando el menor viaja con la persona que tiene la guarda legal con autorizaci\u00f3n de viaje ",
        "type": "document",
        "has_icon": false,
        "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
        "requirements": [
            {
                "requirement": "Poder Notarial de ambos padres, autorizando la salida del menor del pa\u00eds con el guarda custodia (de hecho o legal), legalizado por procuradur\u00eda",
                "requirement_notes": "\u00b7 Ambos padres deben firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": null
            },
            {
                "requirement": "Fotos o copias de las c\u00e9dulas de identidad del padre y de la madre; o del tutor ",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula del acompa\u00f1ante ( si aplica)",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es dominicano y no posee otra nacionalidad",
                "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                "id": "1"
            },
            {
                "label": "Viajar\u00e1 con un tercero\u00a0",
                "slug": "viajara-con-un-tercero",
                "id": "1.4"
            },
            {
                "label": "Viajar\u00e1 con la persona que posee la guarda legal",
                "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
                "id": "1.4.4"
            }
        ]
    },
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-un-tercero/el-menor-tiene-solo-apellido-materno-y-no-viajara-con-su-madre-": {
        "id": "1.4.5",
        "label": "El menor tiene solo apellido materno y no viajar\u00e1 con su madre ",
        "desc": "Cuando el menor ha sido declarado solo por la madre y es ella quien autoriza a otra persona a viajar con el menor",
        "type": "document",
        "has_icon": false,
        "slug": "el-menor-tiene-solo-apellido-materno-y-no-viajara-con-su-madre-",
        "requirements": [
            {
                "requirement": "Poder Notarial de la madre, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                "requirement_notes": "\u00b7 La madre debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de identidad de la madre ",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de identidad del acompa\u00f1ante (si aplica)",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es dominicano y no posee otra nacionalidad",
                "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                "id": "1"
            },
            {
                "label": "Viajar\u00e1 con un tercero\u00a0",
                "slug": "viajara-con-un-tercero",
                "id": "1.4"
            },
            {
                "label": "El menor tiene solo apellido materno y no viajar\u00e1 con su madre ",
                "slug": "el-menor-tiene-solo-apellido-materno-y-no-viajara-con-su-madre-",
                "id": "1.4.5"
            }
        ]
    },
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-un-tercero/uno-de-los-padres-ha-fallecido-y-no-viajara-con-el-padre-sobreviviente": {
        "id": "1.4.6",
        "label": "Uno de los padres ha fallecido y no viajar\u00e1 con el padre sobreviviente",
        "desc": "Cuando el menor viaja con la persona que ha autorizado el padre o madre sobreviviente",
        "type": "document",
        "has_icon": false,
        "slug": "uno-de-los-padres-ha-fallecido-y-no-viajara-con-el-padre-sobreviviente",
        "requirements": [
            {
                "requirement": "Poder Notarial del padre sobreviviente, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                "requirement_notes": "\u00b7 El padre sobreviviente debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
            },
            {
                "requirement": "Acta de defunci\u00f3n del padre fallecido  con codigo QR y legible",
                "requirement_notes": "Si el padre o madre fallece en el extranjero, debe presentar Acta de defunci\u00f3n extranjera (Certificate of Death). Aquellas que no sean en ingles, portuges, italiano deben ser traducidas ya que el personal no domina otros idiomas"
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es dominicano y no posee otra nacionalidad",
                "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                "id": "1"
            },
            {
                "label": "Viajar\u00e1 con un tercero\u00a0",
                "slug": "viajara-con-un-tercero",
                "id": "1.4"
            },
            {
                "label": "Uno de los padres ha fallecido y no viajar\u00e1 con el padre sobreviviente",
                "slug": "uno-de-los-padres-ha-fallecido-y-no-viajara-con-el-padre-sobreviviente",
                "id": "1.4.6"
            }
        ]
    },
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-un-tercero/viajara-con-una-persona-autorizada-por-el-tutor-legal-": {
        "id": "1.4.7",
        "label": "Viajar\u00e1 con una persona autorizada por el tutor legal ",
        "desc": "Cuando el menor viaja con la persona que ha autorizado el tutor legal",
        "type": "document",
        "has_icon": false,
        "slug": "viajara-con-una-persona-autorizada-por-el-tutor-legal-",
        "requirements": [
            {
                "requirement": "Poder Notarial del tutor (es) legal, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                "requirement_notes": "\u00b7 El tutor legal debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de identidad de el o los tutores que realizan la solicitud",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
            },
            {
                "requirement": "Sentencia que otorga la tutor\u00eda legal del menor",
                "requirement_notes": null
            },
            {
                "requirement": "C\u00e9dula del acompa\u00f1ante",
                "requirement_notes": null
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es dominicano y no posee otra nacionalidad",
                "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                "id": "1"
            },
            {
                "label": "Viajar\u00e1 con un tercero\u00a0",
                "slug": "viajara-con-un-tercero",
                "id": "1.4"
            },
            {
                "label": "Viajar\u00e1 con una persona autorizada por el tutor legal ",
                "slug": "viajara-con-una-persona-autorizada-por-el-tutor-legal-",
                "id": "1.4.7"
            }
        ]
    },
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-un-tercero/viajara-con-abuelos-tios-amigos-u-otras-personas-que-no-son-los-padres": {
        "id": "1.4.8",
        "label": "Viajar\u00e1 con abuelos, t\u00edos, amigos u otras personas que no son los padres",
        "desc": "Cuando el menor viaja con terceros que han sido autorizado los padres o tutores legales",
        "type": "document",
        "has_icon": false,
        "slug": "viajara-con-abuelos-tios-amigos-u-otras-personas-que-no-son-los-padres",
        "requirements": [
            {
                "requirement": "Poder Notarial de los padres, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                "requirement_notes": "\u00b7 Ambos padres deben firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": null
            },
            {
                "requirement": "Fotos o copia sde las c\u00e9dulas de identidad de ambos padres o tutor (es) ",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
            },
            {
                "requirement": "C\u00e9dula del acompa\u00f1ante ",
                "requirement_notes": null
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es dominicano y no posee otra nacionalidad",
                "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                "id": "1"
            },
            {
                "label": "Viajar\u00e1 con un tercero\u00a0",
                "slug": "viajara-con-un-tercero",
                "id": "1.4"
            },
            {
                "label": "Viajar\u00e1 con abuelos, t\u00edos, amigos u otras personas que no son los padres",
                "slug": "viajara-con-abuelos-tios-amigos-u-otras-personas-que-no-son-los-padres",
                "id": "1.4.8"
            }
        ]
    },
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-un-tercero/uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor": {
        "id": "1.4.9",
        "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
        "desc": "Cuando no se tiene la autorizaci\u00f3n de viaje de parte de uno de los padres",
        "type": "document",
        "has_icon": false,
        "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
        "requirements": [
            {
                "requirement": "Sentencia Judicial que otorga la autorizaci\u00f3n de viaje del menor",
                "requirement_notes": "\u00b7 Ir al tribunal de ni\u00f1os, ni\u00f1as y adolescentes\r\n\u00b7 Solicitar la sentencia donde se les otorga la autorizaci\u00f3n de viaje "
            },
            {
                "requirement": "Poder Notarial del padre que tiene la autorizaci\u00f3n de viaje y no viaja, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                "requirement_notes": "\u00b7 El padre debe firmar el poder notarial autorizando la salida del menor\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil"
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "C\u00e9dula de identidad del acompa\u00f1ante (si aplica)",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es dominicano y no posee otra nacionalidad",
                "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
                "id": "1"
            },
            {
                "label": "Viajar\u00e1 con un tercero\u00a0",
                "slug": "viajara-con-un-tercero",
                "id": "1.4"
            },
            {
                "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
                "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
                "id": "1.4.9"
            }
        ]
    },
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-un-tercero/no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir": {
        "id": "1.4.10",
        "label": "No veo el caso del menor o tengo dudas para elegir",
        "desc": "No veo el caso del menor o tengo dudas para elegir",
        "type": "not_found",
        "has_icon": false,
        "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
        "children": []
    },
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero": [
        {
            "id": "2.1",
            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
            "desc": null,
            "type": null,
            "has_icon": false,
            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
            "children": [
                {
                    "id": "2.1.1",
                    "label": "Viajar\u00e1 con ambos padres",
                    "desc": null,
                    "type": "not_required_permission",
                    "has_icon": true,
                    "slug": "viajara-con-ambos-padres",
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                            "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                            "id": "2"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "2.1"
                        },
                        {
                            "label": "Viajar\u00e1 con ambos padres",
                            "slug": "viajara-con-ambos-padres",
                            "id": "2.1.1"
                        }
                    ]
                },
                {
                    "id": "2.1.2",
                    "label": "Viajar\u00e1 con uno de los padres",
                    "desc": "Cuando el menor viaja con uno de los padres",
                    "type": null,
                    "has_icon": true,
                    "slug": "viajara-con-uno-de-los-padres",
                    "children": [
                        {
                            "id": "2.1.2.1",
                            "label": "Uno de los padres autoriza al otro a viajar",
                            "desc": "Cuando uno de los padres autoriza al otro a viajar con el menor",
                            "type": "document",
                            "has_icon": false,
                            "slug": "uno-de-los-padres-autoriza-al-otro-a-viajar",
                            "requirements": [
                                {
                                    "requirement": "Poder Notarial del padre o madre que no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda",
                                    "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB "
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                                }
                            ],
                            "children": [],
                            "histories": [
                                {
                                    "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                                    "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                                    "id": "2"
                                },
                                {
                                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                                    "id": "2.1"
                                },
                                {
                                    "label": "Viajar\u00e1 con uno de los padres",
                                    "slug": "viajara-con-uno-de-los-padres",
                                    "id": "2.1.2"
                                },
                                {
                                    "label": "Uno de los padres autoriza al otro a viajar",
                                    "slug": "uno-de-los-padres-autoriza-al-otro-a-viajar",
                                    "id": "2.1.2.1"
                                }
                            ]
                        },
                        {
                            "id": "2.1.2.2",
                            "label": "Viajar\u00e1 con la persona que posee la guarda legal",
                            "desc": "Cuando el menor viaja con la persona que tiene la guarda legal de este",
                            "type": "document",
                            "has_icon": false,
                            "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
                            "requirements": [
                                {
                                    "requirement": "Poder Notarial de los padres, autorizando la salida del menor del pa\u00eds con el guarda, legalizado por procuradur\u00eda",
                                    "requirement_notes": "\u00b7 Ambos padres o tutores deben firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                                }
                            ],
                            "children": [],
                            "histories": [
                                {
                                    "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                                    "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                                    "id": "2"
                                },
                                {
                                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                                    "id": "2.1"
                                },
                                {
                                    "label": "Viajar\u00e1 con uno de los padres",
                                    "slug": "viajara-con-uno-de-los-padres",
                                    "id": "2.1.2"
                                },
                                {
                                    "label": "Viajar\u00e1 con la persona que posee la guarda legal",
                                    "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
                                    "id": "2.1.2.2"
                                }
                            ]
                        },
                        {
                            "id": "2.1.2.3",
                            "label": "El menor tiene solo apellido materno y viajar\u00e1 con su madre ",
                            "desc": "Cuando el menor ha sido declarado solo por la madre y es ella quien le acompa\u00f1a a viajar",
                            "type": "not_required_permission",
                            "has_icon": false,
                            "slug": "el-menor-tiene-solo-apellido-materno-y-viajara-con-su-madre-",
                            "children": [],
                            "histories": [
                                {
                                    "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                                    "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                                    "id": "2"
                                },
                                {
                                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                                    "id": "2.1"
                                },
                                {
                                    "label": "Viajar\u00e1 con uno de los padres",
                                    "slug": "viajara-con-uno-de-los-padres",
                                    "id": "2.1.2"
                                },
                                {
                                    "label": "El menor tiene solo apellido materno y viajar\u00e1 con su madre ",
                                    "slug": "el-menor-tiene-solo-apellido-materno-y-viajara-con-su-madre-",
                                    "id": "2.1.2.3"
                                }
                            ]
                        },
                        {
                            "id": "2.1.2.4",
                            "label": "Viajar\u00e1 con uno de sus padres y el otro ha fallecido",
                            "desc": "Cuando el menor viaja acompa\u00f1ado por su \u00fanico padre o madre que a\u00fan est\u00e1 vivo",
                            "type": "not_required_permission",
                            "has_icon": false,
                            "slug": "viajara-con-uno-de-sus-padres-y-el-otro-ha-fallecido",
                            "children": [],
                            "histories": [
                                {
                                    "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                                    "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                                    "id": "2"
                                },
                                {
                                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                                    "id": "2.1"
                                },
                                {
                                    "label": "Viajar\u00e1 con uno de los padres",
                                    "slug": "viajara-con-uno-de-los-padres",
                                    "id": "2.1.2"
                                },
                                {
                                    "label": "Viajar\u00e1 con uno de sus padres y el otro ha fallecido",
                                    "slug": "viajara-con-uno-de-sus-padres-y-el-otro-ha-fallecido",
                                    "id": "2.1.2.4"
                                }
                            ]
                        },
                        {
                            "id": "2.1.2.5",
                            "label": "El menor fue adoptado por personas extranjeras y viajar\u00e1 por primera vez",
                            "desc": "Cuando el menor viaja por primera vez luego de ser adoptado por personas extranjeras",
                            "type": "document",
                            "has_icon": false,
                            "slug": "el-menor-fue-adoptado-por-personas-extranjeras-y-viajara-por-primera-vez",
                            "requirements": [
                                {
                                    "requirement": "Sentencia del tribunal  de ni\u00f1os, ni\u00f1as y adolescentes que evidencie la adopci\u00f3n",
                                    "requirement_notes": "\u00b7 Ir al tribunal de ni\u00f1os, ni\u00f1as y adolescentes\r\n\u00b7 Solicitar la sentencia donde se les otorga la adopci\u00f3n, original y certificada. "
                                },
                                {
                                    "requirement": "Poder Notarial del padre que tiene la patria potestad y no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda",
                                    "requirement_notes": "\u00b7 El padre debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula o pasaporte del otro padre que autoriza",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del otro padre adoptivo que viaja con el menor",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                                }
                            ],
                            "children": [],
                            "histories": [
                                {
                                    "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                                    "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                                    "id": "2"
                                },
                                {
                                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                                    "id": "2.1"
                                },
                                {
                                    "label": "Viajar\u00e1 con uno de los padres",
                                    "slug": "viajara-con-uno-de-los-padres",
                                    "id": "2.1.2"
                                },
                                {
                                    "label": "El menor fue adoptado por personas extranjeras y viajar\u00e1 por primera vez",
                                    "slug": "el-menor-fue-adoptado-por-personas-extranjeras-y-viajara-por-primera-vez",
                                    "id": "2.1.2.5"
                                }
                            ]
                        },
                        {
                            "id": "2.1.2.6",
                            "label": "Uno de los padres vive en el extranjero y autoriza el viaje",
                            "desc": "Cuando el menor viaja acompa\u00f1ado por el padre o madre que est\u00e1 en el pa\u00eds, y el padre o madre en el extranjero es quien autoriza la salida del menor",
                            "type": "document",
                            "has_icon": false,
                            "slug": "uno-de-los-padres-vive-en-el-extranjero-y-autoriza-el-viaje",
                            "requirements": [
                                {
                                    "requirement": "Poder consular otorgado en el pa\u00eds en donde se encuentra el padre (debe ser apostillado y sellado en cancilleria) o Poder Notarial legalizado del pa\u00eds donde se encuentre el padre en  original con apostilla de la Haya",
                                    "requirement_notes": "\u00b7 El padre en el extranjero debe firmar el poder consular (en el consulado m\u00e1s cercana) autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en el Ministerio de Relaciones Exteriores de la Rep\u00fablica Dominicana."
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                                }
                            ],
                            "children": [],
                            "histories": [
                                {
                                    "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                                    "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                                    "id": "2"
                                },
                                {
                                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                                    "id": "2.1"
                                },
                                {
                                    "label": "Viajar\u00e1 con uno de los padres",
                                    "slug": "viajara-con-uno-de-los-padres",
                                    "id": "2.1.2"
                                },
                                {
                                    "label": "Uno de los padres vive en el extranjero y autoriza el viaje",
                                    "slug": "uno-de-los-padres-vive-en-el-extranjero-y-autoriza-el-viaje",
                                    "id": "2.1.2.6"
                                }
                            ]
                        },
                        {
                            "id": "2.1.2.7",
                            "label": "Tiene autorizaci\u00f3n de viaje del menor\u00a0del tribunal Ni\u00f1os, Ni\u00f1as y Adolescentes",
                            "desc": "Cuando el menor viaja con la persona que tiene la guarda legal con autorizaci\u00f3n de viaje",
                            "type": "document",
                            "has_icon": false,
                            "slug": "tiene-autorizacion-de-viaje-del-menordel-tribunal-ninos-ninas-y-adolescentes",
                            "requirements": [
                                {
                                    "requirement": "Autorizaci\u00f3n judicial (sentencia, auto o resoluci\u00f3n) que autoriza el viaje del Menor",
                                    "requirement_notes": "\u00b7 Ir al tribunal de ni\u00f1os, ni\u00f1as y adolescentes\r\n\u00b7 Solicitar la sentencia donde se les otorga la Guarda Legal y Autorizaci\u00f3n de viaje del menor"
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                                }
                            ],
                            "children": [],
                            "histories": [
                                {
                                    "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                                    "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                                    "id": "2"
                                },
                                {
                                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                                    "id": "2.1"
                                },
                                {
                                    "label": "Viajar\u00e1 con uno de los padres",
                                    "slug": "viajara-con-uno-de-los-padres",
                                    "id": "2.1.2"
                                },
                                {
                                    "label": "Tiene autorizaci\u00f3n de viaje del menor\u00a0del tribunal Ni\u00f1os, Ni\u00f1as y Adolescentes",
                                    "slug": "tiene-autorizacion-de-viaje-del-menordel-tribunal-ninos-ninas-y-adolescentes",
                                    "id": "2.1.2.7"
                                }
                            ]
                        },
                        {
                            "id": "2.1.2.8",
                            "label": "Viajar\u00e1 a una actividad cultural, escolar o deportiva",
                            "desc": "Cuando uno de los padres autoriza al otro a viajar con el menor para participar en actividad cultural, escolar, religiosa, deportiva u otra.",
                            "type": "document",
                            "has_icon": false,
                            "slug": "viajara-a-una-actividad-cultural-escolar-o-deportiva",
                            "requirements": [
                                {
                                    "requirement": "Poder Notarial del padre que no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda",
                                    "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB Sambil"
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                                }
                            ],
                            "children": [],
                            "histories": [
                                {
                                    "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                                    "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                                    "id": "2"
                                },
                                {
                                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                                    "id": "2.1"
                                },
                                {
                                    "label": "Viajar\u00e1 con uno de los padres",
                                    "slug": "viajara-con-uno-de-los-padres",
                                    "id": "2.1.2"
                                },
                                {
                                    "label": "Viajar\u00e1 a una actividad cultural, escolar o deportiva",
                                    "slug": "viajara-a-una-actividad-cultural-escolar-o-deportiva",
                                    "id": "2.1.2.8"
                                }
                            ]
                        },
                        {
                            "id": "2.1.2.9",
                            "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
                            "desc": "Cuando uno de los padres se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor.",
                            "type": "document",
                            "has_icon": false,
                            "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
                            "requirements": [
                                {
                                    "requirement": "Sentencia judicial que autoriza el viaje del Menor o sentencia judical que otorga la autoridad parental unilateral al padre que viaja",
                                    "requirement_notes": "\u00b7 Ir al tribunal de ni\u00f1os, ni\u00f1as y adolescentes\r\n\u00b7 Solicitar la sentencia donde se les otorga la patria potestad "
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o  madre que realiza la solicitud",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del padre acompa\u00f1ante",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del padre acompa\u00f1ante",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                                }
                            ],
                            "children": [],
                            "histories": [
                                {
                                    "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                                    "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                                    "id": "2"
                                },
                                {
                                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                                    "id": "2.1"
                                },
                                {
                                    "label": "Viajar\u00e1 con uno de los padres",
                                    "slug": "viajara-con-uno-de-los-padres",
                                    "id": "2.1.2"
                                },
                                {
                                    "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
                                    "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
                                    "id": "2.1.2.9"
                                }
                            ]
                        },
                        {
                            "id": "2.1.2.10",
                            "label": "No veo el caso del menor o tengo dudas para elegir",
                            "desc": "No veo el caso del menor o tengo dudas para elegir",
                            "type": "not_found",
                            "has_icon": false,
                            "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "2.1.3",
                    "label": "Viajar\u00e1 con su tutor legal / tutores legales",
                    "desc": null,
                    "type": null,
                    "has_icon": true,
                    "slug": "viajara-con-su-tutor-legal---tutores-legales",
                    "children": [
                        {
                            "id": "2.1.3.1",
                            "label": "El menor viajar\u00e1 con el tutor legal y el otro tutor autoriza",
                            "desc": null,
                            "type": "document",
                            "has_icon": false,
                            "slug": "el-menor-viajara-con-el-tutor-legal-y-el-otro-tutor-autoriza",
                            "requirements": [
                                {
                                    "requirement": "Poder Notarial del padre o madre que no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda. ",
                                    "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB "
                                },
                                {
                                    "requirement": "Sentencia judicial que otorga la tutor\u00eda legal sobre el/los menor/es",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                                }
                            ],
                            "children": [],
                            "histories": [
                                {
                                    "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                                    "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                                    "id": "2"
                                },
                                {
                                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                                    "id": "2.1"
                                },
                                {
                                    "label": "Viajar\u00e1 con su tutor legal / tutores legales",
                                    "slug": "viajara-con-su-tutor-legal---tutores-legales",
                                    "id": "2.1.3"
                                },
                                {
                                    "label": "El menor viajar\u00e1 con el tutor legal y el otro tutor autoriza",
                                    "slug": "el-menor-viajara-con-el-tutor-legal-y-el-otro-tutor-autoriza",
                                    "id": "2.1.3.1"
                                }
                            ]
                        },
                        {
                            "id": "2.1.3.2",
                            "label": "El menor tiene un solo tutor legal y viajar\u00e1 con \u00e9l",
                            "desc": null,
                            "type": "not_required_permission",
                            "has_icon": false,
                            "slug": "el-menor-tiene-un-solo-tutor-legal-y-viajara-con-el",
                            "requirements": [
                                {
                                    "requirement": "No requiere el permiso, pero debe mostrar en Control Migratorio la sentencia que muestra la tutor\u00eda legal \u00fanica sobre el/los menor/es",
                                    "requirement_notes": null
                                }
                            ],
                            "children": [],
                            "histories": [
                                {
                                    "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                                    "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                                    "id": "2"
                                },
                                {
                                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                                    "id": "2.1"
                                },
                                {
                                    "label": "Viajar\u00e1 con su tutor legal / tutores legales",
                                    "slug": "viajara-con-su-tutor-legal---tutores-legales",
                                    "id": "2.1.3"
                                },
                                {
                                    "label": "El menor tiene un solo tutor legal y viajar\u00e1 con \u00e9l",
                                    "slug": "el-menor-tiene-un-solo-tutor-legal-y-viajara-con-el",
                                    "id": "2.1.3.2"
                                }
                            ]
                        },
                        {
                            "id": "2.1.3.3",
                            "label": "El menor viajar\u00e1 con ambos tutores legales",
                            "desc": null,
                            "type": "not_required_permission",
                            "has_icon": false,
                            "slug": "el-menor-viajara-con-ambos-tutores-legales",
                            "requirements": [
                                {
                                    "requirement": "Presentar la sentencia que otorga la tutor\u00eda legal de/los menor/es",
                                    "requirement_notes": "No requiere presentar PSM en Control Migratorio"
                                }
                            ],
                            "children": [],
                            "histories": [
                                {
                                    "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                                    "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                                    "id": "2"
                                },
                                {
                                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                                    "id": "2.1"
                                },
                                {
                                    "label": "Viajar\u00e1 con su tutor legal / tutores legales",
                                    "slug": "viajara-con-su-tutor-legal---tutores-legales",
                                    "id": "2.1.3"
                                },
                                {
                                    "label": "El menor viajar\u00e1 con ambos tutores legales",
                                    "slug": "el-menor-viajara-con-ambos-tutores-legales",
                                    "id": "2.1.3.3"
                                }
                            ]
                        },
                        {
                            "id": "2.1.3.4",
                            "label": "No veo el caso del menor o tengo dudas para elegir",
                            "desc": null,
                            "type": "not_found",
                            "has_icon": false,
                            "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "2.1.4",
                    "label": "Viajar\u00e1 con un tercero\u00a0",
                    "desc": null,
                    "type": null,
                    "has_icon": true,
                    "slug": "viajara-con-un-tercero",
                    "children": [
                        {
                            "id": "2.1.4.1",
                            "label": "Viajar\u00e1 con la aerol\u00ednea",
                            "desc": "Cuando el menor viaja con la Aerol\u00ednea y cuenta con la autorizaci\u00f3n de ambos padres, padre, madre o tutor legal",
                            "type": "document",
                            "has_icon": false,
                            "slug": "viajara-con-la-aerolinea",
                            "requirements": [
                                {
                                    "requirement": "Poder Notarial de ambos padres, padre, madre o tutor (seg\u00fan el caso) legal autorizando la salida del menor del pa\u00eds con la aerol\u00ednea, legalizado por procuradur\u00eda o sentencia judicial",
                                    "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB Sambil"
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula de la o las personas que autorizan",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                                },
                                {
                                    "requirement": "Boleto o reserva del viaje",
                                    "requirement_notes": null
                                }
                            ],
                            "children": [],
                            "histories": [
                                {
                                    "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                                    "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                                    "id": "2"
                                },
                                {
                                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                                    "id": "2.1"
                                },
                                {
                                    "label": "Viajar\u00e1 con un tercero\u00a0",
                                    "slug": "viajara-con-un-tercero",
                                    "id": "2.1.4"
                                },
                                {
                                    "label": "Viajar\u00e1 con la aerol\u00ednea",
                                    "slug": "viajara-con-la-aerolinea",
                                    "id": "2.1.4.1"
                                }
                            ]
                        },
                        {
                            "id": "2.1.4.2",
                            "label": "Viajar\u00e1 con el colegio, centro educativo o instituci\u00f3n cultural",
                            "desc": "Cuando el menor viaja con  una academia, centro educativo o instituci\u00f3n cultural, y cuenta con la autorizaci\u00f3n de los padres, padre, madre o tutor legal",
                            "type": "document",
                            "has_icon": false,
                            "slug": "viajara-con-el-colegio-centro-educativo-o-institucion-cultural",
                            "requirements": [
                                {
                                    "requirement": "Poder Notarial de los padres o tutores, autorizando la salida del menor del pa\u00eds con el centro educativo, legalizado por procuradur\u00eda",
                                    "requirement_notes": "\u00b7 Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerol\u00ednea. \r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica.\r\n\u00b7 Los padres de todos los menores pueden hacer un solo poder notarial, donde est\u00e9n las firmas de todos los padres que autorizan la salida de los menores."
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                                }
                            ],
                            "children": [],
                            "histories": [
                                {
                                    "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                                    "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                                    "id": "2"
                                },
                                {
                                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                                    "id": "2.1"
                                },
                                {
                                    "label": "Viajar\u00e1 con un tercero\u00a0",
                                    "slug": "viajara-con-un-tercero",
                                    "id": "2.1.4"
                                },
                                {
                                    "label": "Viajar\u00e1 con el colegio, centro educativo o instituci\u00f3n cultural",
                                    "slug": "viajara-con-el-colegio-centro-educativo-o-institucion-cultural",
                                    "id": "2.1.4.2"
                                }
                            ]
                        },
                        {
                            "id": "2.1.4.3",
                            "label": "Viajar\u00e1 con academia, selecci\u00f3n o liga deportiva",
                            "desc": "Cuando el menor viaja con  una academia, selecci\u00f3 o liga deportiva, y cuenta con la autorizaci\u00f3n de ambos padres, padre, madre o tutor legal",
                            "type": "document",
                            "has_icon": false,
                            "slug": "viajara-con-academia-seleccion-o-liga-deportiva",
                            "requirements": [
                                {
                                    "requirement": "Poder Notarial (colectivo o individual) de los padres, autorizando la salida del o los menores del pa\u00eds, legalizado por procuradur\u00eda. En caso de que los padres esten fuera del pais, debera entregar el poder consular. En caso de que uno de los padres no quiere que viaje o no este presente en la vida del menor, debera entregar Autorizacion Judicial. ",
                                    "requirement_notes": "\u00b7 Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerol\u00ednea. \r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica.\r\n\u00b7 Los padres de todos los menores pueden hacer un solo poder notarial, donde est\u00e9n las firmas de todos los padres que autorizan la salida de los menores."
                                },
                                {
                                    "requirement": "Carta o comunicaci\u00f3n de la organizaci\u00f3n (Academia, iglesia o liga Deportiva) local especificando el motivo del viaje",
                                    "requirement_notes": "Opcional"
                                },
                                {
                                    "requirement": "Carta de invitaci\u00f3n de la actividad a la que asistira el menor",
                                    "requirement_notes": "Opcional"
                                },
                                {
                                    "requirement": "Fotos o copias de las actas de nacimiento originales del (de los)  menor(es) , con el c\u00f3digo QR legible\u00a0\u00a0",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante o responsable",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                                }
                            ],
                            "children": [],
                            "histories": [
                                {
                                    "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                                    "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                                    "id": "2"
                                },
                                {
                                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                                    "id": "2.1"
                                },
                                {
                                    "label": "Viajar\u00e1 con un tercero\u00a0",
                                    "slug": "viajara-con-un-tercero",
                                    "id": "2.1.4"
                                },
                                {
                                    "label": "Viajar\u00e1 con academia, selecci\u00f3n o liga deportiva",
                                    "slug": "viajara-con-academia-seleccion-o-liga-deportiva",
                                    "id": "2.1.4.3"
                                }
                            ]
                        },
                        {
                            "id": "2.1.4.4",
                            "label": "Viajar\u00e1 con la persona que posee la guarda legal",
                            "desc": "Cuando el menor viaja con la persona que tiene la guarda legal con autorizaci\u00f3n de viaje ",
                            "type": "document",
                            "has_icon": false,
                            "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
                            "requirements": [
                                {
                                    "requirement": "Poder Notarial de ambos padres, autorizando la salida del menor del pa\u00eds con el guarda custodia (de hecho o legal), legalizado por procuradur\u00eda. ",
                                    "requirement_notes": "\u00b7 Ambos padres deben firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Fotos o copias de las c\u00e9dulas de identidad del padre y de la madre; o del tutor ",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula del acompa\u00f1ante ( si aplica)",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                                }
                            ],
                            "children": [],
                            "histories": [
                                {
                                    "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                                    "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                                    "id": "2"
                                },
                                {
                                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                                    "id": "2.1"
                                },
                                {
                                    "label": "Viajar\u00e1 con un tercero\u00a0",
                                    "slug": "viajara-con-un-tercero",
                                    "id": "2.1.4"
                                },
                                {
                                    "label": "Viajar\u00e1 con la persona que posee la guarda legal",
                                    "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
                                    "id": "2.1.4.4"
                                }
                            ]
                        },
                        {
                            "id": "2.1.4.5",
                            "label": "El menor tiene solo apellido materno y no viajar\u00e1 con su madre ",
                            "desc": "Cuando el menor ha sido declarado solo por la madre y es ella quien autoriza a otra persona a viajar con el menor",
                            "type": "document",
                            "has_icon": false,
                            "slug": "el-menor-tiene-solo-apellido-materno-y-no-viajara-con-su-madre-",
                            "requirements": [
                                {
                                    "requirement": "Poder Notarial de la madre, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                                    "requirement_notes": "\u00b7 La madre debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula de identidad de la madre ",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula de identidad del acompa\u00f1ante (si aplica)",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                                }
                            ],
                            "children": [],
                            "histories": [
                                {
                                    "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                                    "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                                    "id": "2"
                                },
                                {
                                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                                    "id": "2.1"
                                },
                                {
                                    "label": "Viajar\u00e1 con un tercero\u00a0",
                                    "slug": "viajara-con-un-tercero",
                                    "id": "2.1.4"
                                },
                                {
                                    "label": "El menor tiene solo apellido materno y no viajar\u00e1 con su madre ",
                                    "slug": "el-menor-tiene-solo-apellido-materno-y-no-viajara-con-su-madre-",
                                    "id": "2.1.4.5"
                                }
                            ]
                        },
                        {
                            "id": "2.1.4.6",
                            "label": "Uno de los padres ha fallecido y no viajar\u00e1 con el padre sobreviviente",
                            "desc": "Cuando el menor viaja con la persona que ha autorizado el padre o madre sobreviviente",
                            "type": "document",
                            "has_icon": false,
                            "slug": "uno-de-los-padres-ha-fallecido-y-no-viajara-con-el-padre-sobreviviente",
                            "requirements": [
                                {
                                    "requirement": "Poder Notarial del padre sobreviviente, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                                    "requirement_notes": "\u00b7 El padre sobreviviente debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                                },
                                {
                                    "requirement": "Acta de defunci\u00f3n del padre fallecido  con codigo QR legible",
                                    "requirement_notes": null
                                }
                            ],
                            "children": [],
                            "histories": [
                                {
                                    "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                                    "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                                    "id": "2"
                                },
                                {
                                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                                    "id": "2.1"
                                },
                                {
                                    "label": "Viajar\u00e1 con un tercero\u00a0",
                                    "slug": "viajara-con-un-tercero",
                                    "id": "2.1.4"
                                },
                                {
                                    "label": "Uno de los padres ha fallecido y no viajar\u00e1 con el padre sobreviviente",
                                    "slug": "uno-de-los-padres-ha-fallecido-y-no-viajara-con-el-padre-sobreviviente",
                                    "id": "2.1.4.6"
                                }
                            ]
                        },
                        {
                            "id": "2.1.4.7",
                            "label": "Viajar\u00e1 con una persona autorizada por el tutor legal ",
                            "desc": "Cuando el menor viaja con la persona que ha autorizado el tutor legal",
                            "type": "document",
                            "has_icon": false,
                            "slug": "viajara-con-una-persona-autorizada-por-el-tutor-legal-",
                            "requirements": [
                                {
                                    "requirement": "Poder Notarial del tutor (es) legal, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                                    "requirement_notes": "\u00b7 El tutor legal debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula de identidad de el o los tutores que realizan la solicitud",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                                },
                                {
                                    "requirement": "Sentencia que otorga la tutor\u00eda legal del menor",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "C\u00e9dula del acompa\u00f1ante",
                                    "requirement_notes": null
                                }
                            ],
                            "children": [],
                            "histories": [
                                {
                                    "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                                    "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                                    "id": "2"
                                },
                                {
                                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                                    "id": "2.1"
                                },
                                {
                                    "label": "Viajar\u00e1 con un tercero\u00a0",
                                    "slug": "viajara-con-un-tercero",
                                    "id": "2.1.4"
                                },
                                {
                                    "label": "Viajar\u00e1 con una persona autorizada por el tutor legal ",
                                    "slug": "viajara-con-una-persona-autorizada-por-el-tutor-legal-",
                                    "id": "2.1.4.7"
                                }
                            ]
                        },
                        {
                            "id": "2.1.4.8",
                            "label": "Viajar\u00e1 con abuelos, t\u00edos, amigos u otras personas que no son los padres",
                            "desc": "Cuando el menor viaja con terceros que han sido autorizado los padres o tutores legales",
                            "type": "document",
                            "has_icon": false,
                            "slug": "viajara-con-abuelos-tios-amigos-u-otras-personas-que-no-son-los-padres",
                            "requirements": [
                                {
                                    "requirement": "Poder Notarial de los padres, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                                    "requirement_notes": "\u00b7 Ambos padres deben firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Fotos o copia sde las c\u00e9dulas de identidad de ambos padres o tutor (es) ",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                                },
                                {
                                    "requirement": "C\u00e9dula del acompa\u00f1ante ",
                                    "requirement_notes": null
                                }
                            ],
                            "children": [],
                            "histories": [
                                {
                                    "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                                    "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                                    "id": "2"
                                },
                                {
                                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                                    "id": "2.1"
                                },
                                {
                                    "label": "Viajar\u00e1 con un tercero\u00a0",
                                    "slug": "viajara-con-un-tercero",
                                    "id": "2.1.4"
                                },
                                {
                                    "label": "Viajar\u00e1 con abuelos, t\u00edos, amigos u otras personas que no son los padres",
                                    "slug": "viajara-con-abuelos-tios-amigos-u-otras-personas-que-no-son-los-padres",
                                    "id": "2.1.4.8"
                                }
                            ]
                        },
                        {
                            "id": "2.1.4.9",
                            "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
                            "desc": "Cuando uno de los padres se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
                            "type": "document",
                            "has_icon": false,
                            "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
                            "requirements": [
                                {
                                    "requirement": "Sentencia Judicial que otorga la autorizaci\u00f3n de viaje del menor",
                                    "requirement_notes": "\u00b7 Ir al tribunal de ni\u00f1os, ni\u00f1as y adolescentes\r\n\u00b7 Solicitar la sentencia donde se les otorga la autorizaci\u00f3n de viaje "
                                },
                                {
                                    "requirement": "Poder Notarial del padre que tiene la autorizaci\u00f3n de viaje y no viaja, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                                    "requirement_notes": "\u00b7 El padre debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "C\u00e9dula de identidad del acompa\u00f1ante (si aplica)",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                                }
                            ],
                            "children": [],
                            "histories": [
                                {
                                    "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                                    "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                                    "id": "2"
                                },
                                {
                                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                                    "id": "2.1"
                                },
                                {
                                    "label": "Viajar\u00e1 con un tercero\u00a0",
                                    "slug": "viajara-con-un-tercero",
                                    "id": "2.1.4"
                                },
                                {
                                    "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
                                    "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
                                    "id": "2.1.4.9"
                                }
                            ]
                        },
                        {
                            "id": "2.1.4.10",
                            "label": "No veo el caso del menor o tengo dudas para elegir",
                            "desc": "No veo el caso del menor o tengo dudas para elegir",
                            "type": "not_found",
                            "has_icon": false,
                            "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
                            "children": []
                        }
                    ]
                }
            ]
        },
        {
            "id": "2.2",
            "label": "El menor no ha estado m\u00e1s de 6 meses en el pa\u00eds",
            "desc": null,
            "type": "not_required_permission",
            "has_icon": false,
            "slug": "el-menor-no-ha-estado-mas-de-6-meses-en-el-pais",
            "children": [
                {
                    "id": "2.2.1",
                    "label": "No se requiere permiso",
                    "desc": null,
                    "type": "not_required_permission",
                    "has_icon": false,
                    "slug": "no-se-requiere-permiso",
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                            "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                            "id": "2"
                        },
                        {
                            "label": "El menor no ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-no-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "2.2"
                        },
                        {
                            "label": "No se requiere permiso",
                            "slug": "no-se-requiere-permiso",
                            "id": "2.2.1"
                        }
                    ]
                }
            ],
            "histories": [
                {
                    "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                    "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                    "id": "2"
                },
                {
                    "label": "El menor no ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-no-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "2.2"
                }
            ]
        }
    ],
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais": [
        {
            "id": "2.1.1",
            "label": "Viajar\u00e1 con ambos padres",
            "desc": null,
            "type": "not_required_permission",
            "has_icon": true,
            "slug": "viajara-con-ambos-padres",
            "children": [],
            "histories": [
                {
                    "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                    "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                    "id": "2"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "2.1"
                },
                {
                    "label": "Viajar\u00e1 con ambos padres",
                    "slug": "viajara-con-ambos-padres",
                    "id": "2.1.1"
                }
            ]
        },
        {
            "id": "2.1.2",
            "label": "Viajar\u00e1 con uno de los padres",
            "desc": "Cuando el menor viaja con uno de los padres",
            "type": null,
            "has_icon": true,
            "slug": "viajara-con-uno-de-los-padres",
            "children": [
                {
                    "id": "2.1.2.1",
                    "label": "Uno de los padres autoriza al otro a viajar",
                    "desc": "Cuando uno de los padres autoriza al otro a viajar con el menor",
                    "type": "document",
                    "has_icon": false,
                    "slug": "uno-de-los-padres-autoriza-al-otro-a-viajar",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial del padre o madre que no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda",
                            "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB "
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                            "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                            "id": "2"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "2.1"
                        },
                        {
                            "label": "Viajar\u00e1 con uno de los padres",
                            "slug": "viajara-con-uno-de-los-padres",
                            "id": "2.1.2"
                        },
                        {
                            "label": "Uno de los padres autoriza al otro a viajar",
                            "slug": "uno-de-los-padres-autoriza-al-otro-a-viajar",
                            "id": "2.1.2.1"
                        }
                    ]
                },
                {
                    "id": "2.1.2.2",
                    "label": "Viajar\u00e1 con la persona que posee la guarda legal",
                    "desc": "Cuando el menor viaja con la persona que tiene la guarda legal de este",
                    "type": "document",
                    "has_icon": false,
                    "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial de los padres, autorizando la salida del menor del pa\u00eds con el guarda, legalizado por procuradur\u00eda",
                            "requirement_notes": "\u00b7 Ambos padres o tutores deben firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                            "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                            "id": "2"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "2.1"
                        },
                        {
                            "label": "Viajar\u00e1 con uno de los padres",
                            "slug": "viajara-con-uno-de-los-padres",
                            "id": "2.1.2"
                        },
                        {
                            "label": "Viajar\u00e1 con la persona que posee la guarda legal",
                            "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
                            "id": "2.1.2.2"
                        }
                    ]
                },
                {
                    "id": "2.1.2.3",
                    "label": "El menor tiene solo apellido materno y viajar\u00e1 con su madre ",
                    "desc": "Cuando el menor ha sido declarado solo por la madre y es ella quien le acompa\u00f1a a viajar",
                    "type": "not_required_permission",
                    "has_icon": false,
                    "slug": "el-menor-tiene-solo-apellido-materno-y-viajara-con-su-madre-",
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                            "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                            "id": "2"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "2.1"
                        },
                        {
                            "label": "Viajar\u00e1 con uno de los padres",
                            "slug": "viajara-con-uno-de-los-padres",
                            "id": "2.1.2"
                        },
                        {
                            "label": "El menor tiene solo apellido materno y viajar\u00e1 con su madre ",
                            "slug": "el-menor-tiene-solo-apellido-materno-y-viajara-con-su-madre-",
                            "id": "2.1.2.3"
                        }
                    ]
                },
                {
                    "id": "2.1.2.4",
                    "label": "Viajar\u00e1 con uno de sus padres y el otro ha fallecido",
                    "desc": "Cuando el menor viaja acompa\u00f1ado por su \u00fanico padre o madre que a\u00fan est\u00e1 vivo",
                    "type": "not_required_permission",
                    "has_icon": false,
                    "slug": "viajara-con-uno-de-sus-padres-y-el-otro-ha-fallecido",
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                            "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                            "id": "2"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "2.1"
                        },
                        {
                            "label": "Viajar\u00e1 con uno de los padres",
                            "slug": "viajara-con-uno-de-los-padres",
                            "id": "2.1.2"
                        },
                        {
                            "label": "Viajar\u00e1 con uno de sus padres y el otro ha fallecido",
                            "slug": "viajara-con-uno-de-sus-padres-y-el-otro-ha-fallecido",
                            "id": "2.1.2.4"
                        }
                    ]
                },
                {
                    "id": "2.1.2.5",
                    "label": "El menor fue adoptado por personas extranjeras y viajar\u00e1 por primera vez",
                    "desc": "Cuando el menor viaja por primera vez luego de ser adoptado por personas extranjeras",
                    "type": "document",
                    "has_icon": false,
                    "slug": "el-menor-fue-adoptado-por-personas-extranjeras-y-viajara-por-primera-vez",
                    "requirements": [
                        {
                            "requirement": "Sentencia del tribunal  de ni\u00f1os, ni\u00f1as y adolescentes que evidencie la adopci\u00f3n",
                            "requirement_notes": "\u00b7 Ir al tribunal de ni\u00f1os, ni\u00f1as y adolescentes\r\n\u00b7 Solicitar la sentencia donde se les otorga la adopci\u00f3n, original y certificada. "
                        },
                        {
                            "requirement": "Poder Notarial del padre que tiene la patria potestad y no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda",
                            "requirement_notes": "\u00b7 El padre debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula o pasaporte del otro padre que autoriza",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del otro padre adoptivo que viaja con el menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                            "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                            "id": "2"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "2.1"
                        },
                        {
                            "label": "Viajar\u00e1 con uno de los padres",
                            "slug": "viajara-con-uno-de-los-padres",
                            "id": "2.1.2"
                        },
                        {
                            "label": "El menor fue adoptado por personas extranjeras y viajar\u00e1 por primera vez",
                            "slug": "el-menor-fue-adoptado-por-personas-extranjeras-y-viajara-por-primera-vez",
                            "id": "2.1.2.5"
                        }
                    ]
                },
                {
                    "id": "2.1.2.6",
                    "label": "Uno de los padres vive en el extranjero y autoriza el viaje",
                    "desc": "Cuando el menor viaja acompa\u00f1ado por el padre o madre que est\u00e1 en el pa\u00eds, y el padre o madre en el extranjero es quien autoriza la salida del menor",
                    "type": "document",
                    "has_icon": false,
                    "slug": "uno-de-los-padres-vive-en-el-extranjero-y-autoriza-el-viaje",
                    "requirements": [
                        {
                            "requirement": "Poder consular otorgado en el pa\u00eds en donde se encuentra el padre (debe ser apostillado y sellado en cancilleria) o Poder Notarial legalizado del pa\u00eds donde se encuentre el padre en  original con apostilla de la Haya",
                            "requirement_notes": "\u00b7 El padre en el extranjero debe firmar el poder consular (en el consulado m\u00e1s cercana) autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en el Ministerio de Relaciones Exteriores de la Rep\u00fablica Dominicana."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                            "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                            "id": "2"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "2.1"
                        },
                        {
                            "label": "Viajar\u00e1 con uno de los padres",
                            "slug": "viajara-con-uno-de-los-padres",
                            "id": "2.1.2"
                        },
                        {
                            "label": "Uno de los padres vive en el extranjero y autoriza el viaje",
                            "slug": "uno-de-los-padres-vive-en-el-extranjero-y-autoriza-el-viaje",
                            "id": "2.1.2.6"
                        }
                    ]
                },
                {
                    "id": "2.1.2.7",
                    "label": "Tiene autorizaci\u00f3n de viaje del menor\u00a0del tribunal Ni\u00f1os, Ni\u00f1as y Adolescentes",
                    "desc": "Cuando el menor viaja con la persona que tiene la guarda legal con autorizaci\u00f3n de viaje",
                    "type": "document",
                    "has_icon": false,
                    "slug": "tiene-autorizacion-de-viaje-del-menordel-tribunal-ninos-ninas-y-adolescentes",
                    "requirements": [
                        {
                            "requirement": "Autorizaci\u00f3n judicial (sentencia, auto o resoluci\u00f3n) que autoriza el viaje del Menor",
                            "requirement_notes": "\u00b7 Ir al tribunal de ni\u00f1os, ni\u00f1as y adolescentes\r\n\u00b7 Solicitar la sentencia donde se les otorga la Guarda Legal y Autorizaci\u00f3n de viaje del menor"
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                            "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                            "id": "2"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "2.1"
                        },
                        {
                            "label": "Viajar\u00e1 con uno de los padres",
                            "slug": "viajara-con-uno-de-los-padres",
                            "id": "2.1.2"
                        },
                        {
                            "label": "Tiene autorizaci\u00f3n de viaje del menor\u00a0del tribunal Ni\u00f1os, Ni\u00f1as y Adolescentes",
                            "slug": "tiene-autorizacion-de-viaje-del-menordel-tribunal-ninos-ninas-y-adolescentes",
                            "id": "2.1.2.7"
                        }
                    ]
                },
                {
                    "id": "2.1.2.8",
                    "label": "Viajar\u00e1 a una actividad cultural, escolar o deportiva",
                    "desc": "Cuando uno de los padres autoriza al otro a viajar con el menor para participar en actividad cultural, escolar, religiosa, deportiva u otra.",
                    "type": "document",
                    "has_icon": false,
                    "slug": "viajara-a-una-actividad-cultural-escolar-o-deportiva",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial del padre que no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda",
                            "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB Sambil"
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                            "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                            "id": "2"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "2.1"
                        },
                        {
                            "label": "Viajar\u00e1 con uno de los padres",
                            "slug": "viajara-con-uno-de-los-padres",
                            "id": "2.1.2"
                        },
                        {
                            "label": "Viajar\u00e1 a una actividad cultural, escolar o deportiva",
                            "slug": "viajara-a-una-actividad-cultural-escolar-o-deportiva",
                            "id": "2.1.2.8"
                        }
                    ]
                },
                {
                    "id": "2.1.2.9",
                    "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
                    "desc": "Cuando uno de los padres se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor.",
                    "type": "document",
                    "has_icon": false,
                    "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
                    "requirements": [
                        {
                            "requirement": "Sentencia judicial que autoriza el viaje del Menor o sentencia judical que otorga la autoridad parental unilateral al padre que viaja",
                            "requirement_notes": "\u00b7 Ir al tribunal de ni\u00f1os, ni\u00f1as y adolescentes\r\n\u00b7 Solicitar la sentencia donde se les otorga la patria potestad "
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o  madre que realiza la solicitud",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del padre acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del padre acompa\u00f1ante",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                            "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                            "id": "2"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "2.1"
                        },
                        {
                            "label": "Viajar\u00e1 con uno de los padres",
                            "slug": "viajara-con-uno-de-los-padres",
                            "id": "2.1.2"
                        },
                        {
                            "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
                            "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
                            "id": "2.1.2.9"
                        }
                    ]
                },
                {
                    "id": "2.1.2.10",
                    "label": "No veo el caso del menor o tengo dudas para elegir",
                    "desc": "No veo el caso del menor o tengo dudas para elegir",
                    "type": "not_found",
                    "has_icon": false,
                    "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
                    "children": []
                }
            ]
        },
        {
            "id": "2.1.3",
            "label": "Viajar\u00e1 con su tutor legal / tutores legales",
            "desc": null,
            "type": null,
            "has_icon": true,
            "slug": "viajara-con-su-tutor-legal---tutores-legales",
            "children": [
                {
                    "id": "2.1.3.1",
                    "label": "El menor viajar\u00e1 con el tutor legal y el otro tutor autoriza",
                    "desc": null,
                    "type": "document",
                    "has_icon": false,
                    "slug": "el-menor-viajara-con-el-tutor-legal-y-el-otro-tutor-autoriza",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial del padre o madre que no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda. ",
                            "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB "
                        },
                        {
                            "requirement": "Sentencia judicial que otorga la tutor\u00eda legal sobre el/los menor/es",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                            "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                            "id": "2"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "2.1"
                        },
                        {
                            "label": "Viajar\u00e1 con su tutor legal / tutores legales",
                            "slug": "viajara-con-su-tutor-legal---tutores-legales",
                            "id": "2.1.3"
                        },
                        {
                            "label": "El menor viajar\u00e1 con el tutor legal y el otro tutor autoriza",
                            "slug": "el-menor-viajara-con-el-tutor-legal-y-el-otro-tutor-autoriza",
                            "id": "2.1.3.1"
                        }
                    ]
                },
                {
                    "id": "2.1.3.2",
                    "label": "El menor tiene un solo tutor legal y viajar\u00e1 con \u00e9l",
                    "desc": null,
                    "type": "not_required_permission",
                    "has_icon": false,
                    "slug": "el-menor-tiene-un-solo-tutor-legal-y-viajara-con-el",
                    "requirements": [
                        {
                            "requirement": "No requiere el permiso, pero debe mostrar en Control Migratorio la sentencia que muestra la tutor\u00eda legal \u00fanica sobre el/los menor/es",
                            "requirement_notes": null
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                            "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                            "id": "2"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "2.1"
                        },
                        {
                            "label": "Viajar\u00e1 con su tutor legal / tutores legales",
                            "slug": "viajara-con-su-tutor-legal---tutores-legales",
                            "id": "2.1.3"
                        },
                        {
                            "label": "El menor tiene un solo tutor legal y viajar\u00e1 con \u00e9l",
                            "slug": "el-menor-tiene-un-solo-tutor-legal-y-viajara-con-el",
                            "id": "2.1.3.2"
                        }
                    ]
                },
                {
                    "id": "2.1.3.3",
                    "label": "El menor viajar\u00e1 con ambos tutores legales",
                    "desc": null,
                    "type": "not_required_permission",
                    "has_icon": false,
                    "slug": "el-menor-viajara-con-ambos-tutores-legales",
                    "requirements": [
                        {
                            "requirement": "Presentar la sentencia que otorga la tutor\u00eda legal de/los menor/es",
                            "requirement_notes": "No requiere presentar PSM en Control Migratorio"
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                            "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                            "id": "2"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "2.1"
                        },
                        {
                            "label": "Viajar\u00e1 con su tutor legal / tutores legales",
                            "slug": "viajara-con-su-tutor-legal---tutores-legales",
                            "id": "2.1.3"
                        },
                        {
                            "label": "El menor viajar\u00e1 con ambos tutores legales",
                            "slug": "el-menor-viajara-con-ambos-tutores-legales",
                            "id": "2.1.3.3"
                        }
                    ]
                },
                {
                    "id": "2.1.3.4",
                    "label": "No veo el caso del menor o tengo dudas para elegir",
                    "desc": null,
                    "type": "not_found",
                    "has_icon": false,
                    "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
                    "children": []
                }
            ]
        },
        {
            "id": "2.1.4",
            "label": "Viajar\u00e1 con un tercero\u00a0",
            "desc": null,
            "type": null,
            "has_icon": true,
            "slug": "viajara-con-un-tercero",
            "children": [
                {
                    "id": "2.1.4.1",
                    "label": "Viajar\u00e1 con la aerol\u00ednea",
                    "desc": "Cuando el menor viaja con la Aerol\u00ednea y cuenta con la autorizaci\u00f3n de ambos padres, padre, madre o tutor legal",
                    "type": "document",
                    "has_icon": false,
                    "slug": "viajara-con-la-aerolinea",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial de ambos padres, padre, madre o tutor (seg\u00fan el caso) legal autorizando la salida del menor del pa\u00eds con la aerol\u00ednea, legalizado por procuradur\u00eda o sentencia judicial",
                            "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB Sambil"
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de la o las personas que autorizan",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        },
                        {
                            "requirement": "Boleto o reserva del viaje",
                            "requirement_notes": null
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                            "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                            "id": "2"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "2.1"
                        },
                        {
                            "label": "Viajar\u00e1 con un tercero\u00a0",
                            "slug": "viajara-con-un-tercero",
                            "id": "2.1.4"
                        },
                        {
                            "label": "Viajar\u00e1 con la aerol\u00ednea",
                            "slug": "viajara-con-la-aerolinea",
                            "id": "2.1.4.1"
                        }
                    ]
                },
                {
                    "id": "2.1.4.2",
                    "label": "Viajar\u00e1 con el colegio, centro educativo o instituci\u00f3n cultural",
                    "desc": "Cuando el menor viaja con  una academia, centro educativo o instituci\u00f3n cultural, y cuenta con la autorizaci\u00f3n de los padres, padre, madre o tutor legal",
                    "type": "document",
                    "has_icon": false,
                    "slug": "viajara-con-el-colegio-centro-educativo-o-institucion-cultural",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial de los padres o tutores, autorizando la salida del menor del pa\u00eds con el centro educativo, legalizado por procuradur\u00eda",
                            "requirement_notes": "\u00b7 Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerol\u00ednea. \r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica.\r\n\u00b7 Los padres de todos los menores pueden hacer un solo poder notarial, donde est\u00e9n las firmas de todos los padres que autorizan la salida de los menores."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                            "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                            "id": "2"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "2.1"
                        },
                        {
                            "label": "Viajar\u00e1 con un tercero\u00a0",
                            "slug": "viajara-con-un-tercero",
                            "id": "2.1.4"
                        },
                        {
                            "label": "Viajar\u00e1 con el colegio, centro educativo o instituci\u00f3n cultural",
                            "slug": "viajara-con-el-colegio-centro-educativo-o-institucion-cultural",
                            "id": "2.1.4.2"
                        }
                    ]
                },
                {
                    "id": "2.1.4.3",
                    "label": "Viajar\u00e1 con academia, selecci\u00f3n o liga deportiva",
                    "desc": "Cuando el menor viaja con  una academia, selecci\u00f3 o liga deportiva, y cuenta con la autorizaci\u00f3n de ambos padres, padre, madre o tutor legal",
                    "type": "document",
                    "has_icon": false,
                    "slug": "viajara-con-academia-seleccion-o-liga-deportiva",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial (colectivo o individual) de los padres, autorizando la salida del o los menores del pa\u00eds, legalizado por procuradur\u00eda. En caso de que los padres esten fuera del pais, debera entregar el poder consular. En caso de que uno de los padres no quiere que viaje o no este presente en la vida del menor, debera entregar Autorizacion Judicial. ",
                            "requirement_notes": "\u00b7 Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerol\u00ednea. \r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica.\r\n\u00b7 Los padres de todos los menores pueden hacer un solo poder notarial, donde est\u00e9n las firmas de todos los padres que autorizan la salida de los menores."
                        },
                        {
                            "requirement": "Carta o comunicaci\u00f3n de la organizaci\u00f3n (Academia, iglesia o liga Deportiva) local especificando el motivo del viaje",
                            "requirement_notes": "Opcional"
                        },
                        {
                            "requirement": "Carta de invitaci\u00f3n de la actividad a la que asistira el menor",
                            "requirement_notes": "Opcional"
                        },
                        {
                            "requirement": "Fotos o copias de las actas de nacimiento originales del (de los)  menor(es) , con el c\u00f3digo QR legible\u00a0\u00a0",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompa\u00f1ante o responsable",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                            "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                            "id": "2"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "2.1"
                        },
                        {
                            "label": "Viajar\u00e1 con un tercero\u00a0",
                            "slug": "viajara-con-un-tercero",
                            "id": "2.1.4"
                        },
                        {
                            "label": "Viajar\u00e1 con academia, selecci\u00f3n o liga deportiva",
                            "slug": "viajara-con-academia-seleccion-o-liga-deportiva",
                            "id": "2.1.4.3"
                        }
                    ]
                },
                {
                    "id": "2.1.4.4",
                    "label": "Viajar\u00e1 con la persona que posee la guarda legal",
                    "desc": "Cuando el menor viaja con la persona que tiene la guarda legal con autorizaci\u00f3n de viaje ",
                    "type": "document",
                    "has_icon": false,
                    "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial de ambos padres, autorizando la salida del menor del pa\u00eds con el guarda custodia (de hecho o legal), legalizado por procuradur\u00eda. ",
                            "requirement_notes": "\u00b7 Ambos padres deben firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Fotos o copias de las c\u00e9dulas de identidad del padre y de la madre; o del tutor ",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula del acompa\u00f1ante ( si aplica)",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                            "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                            "id": "2"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "2.1"
                        },
                        {
                            "label": "Viajar\u00e1 con un tercero\u00a0",
                            "slug": "viajara-con-un-tercero",
                            "id": "2.1.4"
                        },
                        {
                            "label": "Viajar\u00e1 con la persona que posee la guarda legal",
                            "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
                            "id": "2.1.4.4"
                        }
                    ]
                },
                {
                    "id": "2.1.4.5",
                    "label": "El menor tiene solo apellido materno y no viajar\u00e1 con su madre ",
                    "desc": "Cuando el menor ha sido declarado solo por la madre y es ella quien autoriza a otra persona a viajar con el menor",
                    "type": "document",
                    "has_icon": false,
                    "slug": "el-menor-tiene-solo-apellido-materno-y-no-viajara-con-su-madre-",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial de la madre, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                            "requirement_notes": "\u00b7 La madre debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de identidad de la madre ",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de identidad del acompa\u00f1ante (si aplica)",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                            "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                            "id": "2"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "2.1"
                        },
                        {
                            "label": "Viajar\u00e1 con un tercero\u00a0",
                            "slug": "viajara-con-un-tercero",
                            "id": "2.1.4"
                        },
                        {
                            "label": "El menor tiene solo apellido materno y no viajar\u00e1 con su madre ",
                            "slug": "el-menor-tiene-solo-apellido-materno-y-no-viajara-con-su-madre-",
                            "id": "2.1.4.5"
                        }
                    ]
                },
                {
                    "id": "2.1.4.6",
                    "label": "Uno de los padres ha fallecido y no viajar\u00e1 con el padre sobreviviente",
                    "desc": "Cuando el menor viaja con la persona que ha autorizado el padre o madre sobreviviente",
                    "type": "document",
                    "has_icon": false,
                    "slug": "uno-de-los-padres-ha-fallecido-y-no-viajara-con-el-padre-sobreviviente",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial del padre sobreviviente, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                            "requirement_notes": "\u00b7 El padre sobreviviente debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                        },
                        {
                            "requirement": "Acta de defunci\u00f3n del padre fallecido  con codigo QR legible",
                            "requirement_notes": null
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                            "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                            "id": "2"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "2.1"
                        },
                        {
                            "label": "Viajar\u00e1 con un tercero\u00a0",
                            "slug": "viajara-con-un-tercero",
                            "id": "2.1.4"
                        },
                        {
                            "label": "Uno de los padres ha fallecido y no viajar\u00e1 con el padre sobreviviente",
                            "slug": "uno-de-los-padres-ha-fallecido-y-no-viajara-con-el-padre-sobreviviente",
                            "id": "2.1.4.6"
                        }
                    ]
                },
                {
                    "id": "2.1.4.7",
                    "label": "Viajar\u00e1 con una persona autorizada por el tutor legal ",
                    "desc": "Cuando el menor viaja con la persona que ha autorizado el tutor legal",
                    "type": "document",
                    "has_icon": false,
                    "slug": "viajara-con-una-persona-autorizada-por-el-tutor-legal-",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial del tutor (es) legal, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                            "requirement_notes": "\u00b7 El tutor legal debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de identidad de el o los tutores que realizan la solicitud",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                        },
                        {
                            "requirement": "Sentencia que otorga la tutor\u00eda legal del menor",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "C\u00e9dula del acompa\u00f1ante",
                            "requirement_notes": null
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                            "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                            "id": "2"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "2.1"
                        },
                        {
                            "label": "Viajar\u00e1 con un tercero\u00a0",
                            "slug": "viajara-con-un-tercero",
                            "id": "2.1.4"
                        },
                        {
                            "label": "Viajar\u00e1 con una persona autorizada por el tutor legal ",
                            "slug": "viajara-con-una-persona-autorizada-por-el-tutor-legal-",
                            "id": "2.1.4.7"
                        }
                    ]
                },
                {
                    "id": "2.1.4.8",
                    "label": "Viajar\u00e1 con abuelos, t\u00edos, amigos u otras personas que no son los padres",
                    "desc": "Cuando el menor viaja con terceros que han sido autorizado los padres o tutores legales",
                    "type": "document",
                    "has_icon": false,
                    "slug": "viajara-con-abuelos-tios-amigos-u-otras-personas-que-no-son-los-padres",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial de los padres, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                            "requirement_notes": "\u00b7 Ambos padres deben firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Fotos o copia sde las c\u00e9dulas de identidad de ambos padres o tutor (es) ",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        },
                        {
                            "requirement": "C\u00e9dula del acompa\u00f1ante ",
                            "requirement_notes": null
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                            "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                            "id": "2"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "2.1"
                        },
                        {
                            "label": "Viajar\u00e1 con un tercero\u00a0",
                            "slug": "viajara-con-un-tercero",
                            "id": "2.1.4"
                        },
                        {
                            "label": "Viajar\u00e1 con abuelos, t\u00edos, amigos u otras personas que no son los padres",
                            "slug": "viajara-con-abuelos-tios-amigos-u-otras-personas-que-no-son-los-padres",
                            "id": "2.1.4.8"
                        }
                    ]
                },
                {
                    "id": "2.1.4.9",
                    "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
                    "desc": "Cuando uno de los padres se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
                    "type": "document",
                    "has_icon": false,
                    "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
                    "requirements": [
                        {
                            "requirement": "Sentencia Judicial que otorga la autorizaci\u00f3n de viaje del menor",
                            "requirement_notes": "\u00b7 Ir al tribunal de ni\u00f1os, ni\u00f1as y adolescentes\r\n\u00b7 Solicitar la sentencia donde se les otorga la autorizaci\u00f3n de viaje "
                        },
                        {
                            "requirement": "Poder Notarial del padre que tiene la autorizaci\u00f3n de viaje y no viaja, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                            "requirement_notes": "\u00b7 El padre debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "C\u00e9dula de identidad del acompa\u00f1ante (si aplica)",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                            "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                            "id": "2"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "2.1"
                        },
                        {
                            "label": "Viajar\u00e1 con un tercero\u00a0",
                            "slug": "viajara-con-un-tercero",
                            "id": "2.1.4"
                        },
                        {
                            "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
                            "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
                            "id": "2.1.4.9"
                        }
                    ]
                },
                {
                    "id": "2.1.4.10",
                    "label": "No veo el caso del menor o tengo dudas para elegir",
                    "desc": "No veo el caso del menor o tengo dudas para elegir",
                    "type": "not_found",
                    "has_icon": false,
                    "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
                    "children": []
                }
            ]
        }
    ],
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-ambos-padres": {
        "id": "2.1.1",
        "label": "Viajar\u00e1 con ambos padres",
        "desc": null,
        "type": "not_required_permission",
        "has_icon": true,
        "slug": "viajara-con-ambos-padres",
        "children": [],
        "histories": [
            {
                "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                "id": "2"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "2.1"
            },
            {
                "label": "Viajar\u00e1 con ambos padres",
                "slug": "viajara-con-ambos-padres",
                "id": "2.1.1"
            }
        ]
    },
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres": [
        {
            "id": "2.1.2.1",
            "label": "Uno de los padres autoriza al otro a viajar",
            "desc": "Cuando uno de los padres autoriza al otro a viajar con el menor",
            "type": "document",
            "has_icon": false,
            "slug": "uno-de-los-padres-autoriza-al-otro-a-viajar",
            "requirements": [
                {
                    "requirement": "Poder Notarial del padre o madre que no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda",
                    "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB "
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                    "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                    "id": "2"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "2.1"
                },
                {
                    "label": "Viajar\u00e1 con uno de los padres",
                    "slug": "viajara-con-uno-de-los-padres",
                    "id": "2.1.2"
                },
                {
                    "label": "Uno de los padres autoriza al otro a viajar",
                    "slug": "uno-de-los-padres-autoriza-al-otro-a-viajar",
                    "id": "2.1.2.1"
                }
            ]
        },
        {
            "id": "2.1.2.2",
            "label": "Viajar\u00e1 con la persona que posee la guarda legal",
            "desc": "Cuando el menor viaja con la persona que tiene la guarda legal de este",
            "type": "document",
            "has_icon": false,
            "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
            "requirements": [
                {
                    "requirement": "Poder Notarial de los padres, autorizando la salida del menor del pa\u00eds con el guarda, legalizado por procuradur\u00eda",
                    "requirement_notes": "\u00b7 Ambos padres o tutores deben firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                    "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                    "id": "2"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "2.1"
                },
                {
                    "label": "Viajar\u00e1 con uno de los padres",
                    "slug": "viajara-con-uno-de-los-padres",
                    "id": "2.1.2"
                },
                {
                    "label": "Viajar\u00e1 con la persona que posee la guarda legal",
                    "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
                    "id": "2.1.2.2"
                }
            ]
        },
        {
            "id": "2.1.2.3",
            "label": "El menor tiene solo apellido materno y viajar\u00e1 con su madre ",
            "desc": "Cuando el menor ha sido declarado solo por la madre y es ella quien le acompa\u00f1a a viajar",
            "type": "not_required_permission",
            "has_icon": false,
            "slug": "el-menor-tiene-solo-apellido-materno-y-viajara-con-su-madre-",
            "children": [],
            "histories": [
                {
                    "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                    "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                    "id": "2"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "2.1"
                },
                {
                    "label": "Viajar\u00e1 con uno de los padres",
                    "slug": "viajara-con-uno-de-los-padres",
                    "id": "2.1.2"
                },
                {
                    "label": "El menor tiene solo apellido materno y viajar\u00e1 con su madre ",
                    "slug": "el-menor-tiene-solo-apellido-materno-y-viajara-con-su-madre-",
                    "id": "2.1.2.3"
                }
            ]
        },
        {
            "id": "2.1.2.4",
            "label": "Viajar\u00e1 con uno de sus padres y el otro ha fallecido",
            "desc": "Cuando el menor viaja acompa\u00f1ado por su \u00fanico padre o madre que a\u00fan est\u00e1 vivo",
            "type": "not_required_permission",
            "has_icon": false,
            "slug": "viajara-con-uno-de-sus-padres-y-el-otro-ha-fallecido",
            "children": [],
            "histories": [
                {
                    "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                    "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                    "id": "2"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "2.1"
                },
                {
                    "label": "Viajar\u00e1 con uno de los padres",
                    "slug": "viajara-con-uno-de-los-padres",
                    "id": "2.1.2"
                },
                {
                    "label": "Viajar\u00e1 con uno de sus padres y el otro ha fallecido",
                    "slug": "viajara-con-uno-de-sus-padres-y-el-otro-ha-fallecido",
                    "id": "2.1.2.4"
                }
            ]
        },
        {
            "id": "2.1.2.5",
            "label": "El menor fue adoptado por personas extranjeras y viajar\u00e1 por primera vez",
            "desc": "Cuando el menor viaja por primera vez luego de ser adoptado por personas extranjeras",
            "type": "document",
            "has_icon": false,
            "slug": "el-menor-fue-adoptado-por-personas-extranjeras-y-viajara-por-primera-vez",
            "requirements": [
                {
                    "requirement": "Sentencia del tribunal  de ni\u00f1os, ni\u00f1as y adolescentes que evidencie la adopci\u00f3n",
                    "requirement_notes": "\u00b7 Ir al tribunal de ni\u00f1os, ni\u00f1as y adolescentes\r\n\u00b7 Solicitar la sentencia donde se les otorga la adopci\u00f3n, original y certificada. "
                },
                {
                    "requirement": "Poder Notarial del padre que tiene la patria potestad y no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda",
                    "requirement_notes": "\u00b7 El padre debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula o pasaporte del otro padre que autoriza",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del otro padre adoptivo que viaja con el menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                    "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                    "id": "2"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "2.1"
                },
                {
                    "label": "Viajar\u00e1 con uno de los padres",
                    "slug": "viajara-con-uno-de-los-padres",
                    "id": "2.1.2"
                },
                {
                    "label": "El menor fue adoptado por personas extranjeras y viajar\u00e1 por primera vez",
                    "slug": "el-menor-fue-adoptado-por-personas-extranjeras-y-viajara-por-primera-vez",
                    "id": "2.1.2.5"
                }
            ]
        },
        {
            "id": "2.1.2.6",
            "label": "Uno de los padres vive en el extranjero y autoriza el viaje",
            "desc": "Cuando el menor viaja acompa\u00f1ado por el padre o madre que est\u00e1 en el pa\u00eds, y el padre o madre en el extranjero es quien autoriza la salida del menor",
            "type": "document",
            "has_icon": false,
            "slug": "uno-de-los-padres-vive-en-el-extranjero-y-autoriza-el-viaje",
            "requirements": [
                {
                    "requirement": "Poder consular otorgado en el pa\u00eds en donde se encuentra el padre (debe ser apostillado y sellado en cancilleria) o Poder Notarial legalizado del pa\u00eds donde se encuentre el padre en  original con apostilla de la Haya",
                    "requirement_notes": "\u00b7 El padre en el extranjero debe firmar el poder consular (en el consulado m\u00e1s cercana) autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en el Ministerio de Relaciones Exteriores de la Rep\u00fablica Dominicana."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                    "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                    "id": "2"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "2.1"
                },
                {
                    "label": "Viajar\u00e1 con uno de los padres",
                    "slug": "viajara-con-uno-de-los-padres",
                    "id": "2.1.2"
                },
                {
                    "label": "Uno de los padres vive en el extranjero y autoriza el viaje",
                    "slug": "uno-de-los-padres-vive-en-el-extranjero-y-autoriza-el-viaje",
                    "id": "2.1.2.6"
                }
            ]
        },
        {
            "id": "2.1.2.7",
            "label": "Tiene autorizaci\u00f3n de viaje del menor\u00a0del tribunal Ni\u00f1os, Ni\u00f1as y Adolescentes",
            "desc": "Cuando el menor viaja con la persona que tiene la guarda legal con autorizaci\u00f3n de viaje",
            "type": "document",
            "has_icon": false,
            "slug": "tiene-autorizacion-de-viaje-del-menordel-tribunal-ninos-ninas-y-adolescentes",
            "requirements": [
                {
                    "requirement": "Autorizaci\u00f3n judicial (sentencia, auto o resoluci\u00f3n) que autoriza el viaje del Menor",
                    "requirement_notes": "\u00b7 Ir al tribunal de ni\u00f1os, ni\u00f1as y adolescentes\r\n\u00b7 Solicitar la sentencia donde se les otorga la Guarda Legal y Autorizaci\u00f3n de viaje del menor"
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                    "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                    "id": "2"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "2.1"
                },
                {
                    "label": "Viajar\u00e1 con uno de los padres",
                    "slug": "viajara-con-uno-de-los-padres",
                    "id": "2.1.2"
                },
                {
                    "label": "Tiene autorizaci\u00f3n de viaje del menor\u00a0del tribunal Ni\u00f1os, Ni\u00f1as y Adolescentes",
                    "slug": "tiene-autorizacion-de-viaje-del-menordel-tribunal-ninos-ninas-y-adolescentes",
                    "id": "2.1.2.7"
                }
            ]
        },
        {
            "id": "2.1.2.8",
            "label": "Viajar\u00e1 a una actividad cultural, escolar o deportiva",
            "desc": "Cuando uno de los padres autoriza al otro a viajar con el menor para participar en actividad cultural, escolar, religiosa, deportiva u otra.",
            "type": "document",
            "has_icon": false,
            "slug": "viajara-a-una-actividad-cultural-escolar-o-deportiva",
            "requirements": [
                {
                    "requirement": "Poder Notarial del padre que no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda",
                    "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB Sambil"
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                    "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                    "id": "2"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "2.1"
                },
                {
                    "label": "Viajar\u00e1 con uno de los padres",
                    "slug": "viajara-con-uno-de-los-padres",
                    "id": "2.1.2"
                },
                {
                    "label": "Viajar\u00e1 a una actividad cultural, escolar o deportiva",
                    "slug": "viajara-a-una-actividad-cultural-escolar-o-deportiva",
                    "id": "2.1.2.8"
                }
            ]
        },
        {
            "id": "2.1.2.9",
            "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
            "desc": "Cuando uno de los padres se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor.",
            "type": "document",
            "has_icon": false,
            "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
            "requirements": [
                {
                    "requirement": "Sentencia judicial que autoriza el viaje del Menor o sentencia judical que otorga la autoridad parental unilateral al padre que viaja",
                    "requirement_notes": "\u00b7 Ir al tribunal de ni\u00f1os, ni\u00f1as y adolescentes\r\n\u00b7 Solicitar la sentencia donde se les otorga la patria potestad "
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o  madre que realiza la solicitud",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del padre acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del padre acompa\u00f1ante",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                    "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                    "id": "2"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "2.1"
                },
                {
                    "label": "Viajar\u00e1 con uno de los padres",
                    "slug": "viajara-con-uno-de-los-padres",
                    "id": "2.1.2"
                },
                {
                    "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
                    "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
                    "id": "2.1.2.9"
                }
            ]
        },
        {
            "id": "2.1.2.10",
            "label": "No veo el caso del menor o tengo dudas para elegir",
            "desc": "No veo el caso del menor o tengo dudas para elegir",
            "type": "not_found",
            "has_icon": false,
            "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
            "children": []
        }
    ],
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres/uno-de-los-padres-autoriza-al-otro-a-viajar": {
        "id": "2.1.2.1",
        "label": "Uno de los padres autoriza al otro a viajar",
        "desc": "Cuando uno de los padres autoriza al otro a viajar con el menor",
        "type": "document",
        "has_icon": false,
        "slug": "uno-de-los-padres-autoriza-al-otro-a-viajar",
        "requirements": [
            {
                "requirement": "Poder Notarial del padre o madre que no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda",
                "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB "
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                "id": "2"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "2.1"
            },
            {
                "label": "Viajar\u00e1 con uno de los padres",
                "slug": "viajara-con-uno-de-los-padres",
                "id": "2.1.2"
            },
            {
                "label": "Uno de los padres autoriza al otro a viajar",
                "slug": "uno-de-los-padres-autoriza-al-otro-a-viajar",
                "id": "2.1.2.1"
            }
        ]
    },
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres/viajara-con-la-persona-que-posee-la-guarda-legal": {
        "id": "2.1.2.2",
        "label": "Viajar\u00e1 con la persona que posee la guarda legal",
        "desc": "Cuando el menor viaja con la persona que tiene la guarda legal de este",
        "type": "document",
        "has_icon": false,
        "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
        "requirements": [
            {
                "requirement": "Poder Notarial de los padres, autorizando la salida del menor del pa\u00eds con el guarda, legalizado por procuradur\u00eda",
                "requirement_notes": "\u00b7 Ambos padres o tutores deben firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                "id": "2"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "2.1"
            },
            {
                "label": "Viajar\u00e1 con uno de los padres",
                "slug": "viajara-con-uno-de-los-padres",
                "id": "2.1.2"
            },
            {
                "label": "Viajar\u00e1 con la persona que posee la guarda legal",
                "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
                "id": "2.1.2.2"
            }
        ]
    },
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres/el-menor-tiene-solo-apellido-materno-y-viajara-con-su-madre-": {
        "id": "2.1.2.3",
        "label": "El menor tiene solo apellido materno y viajar\u00e1 con su madre ",
        "desc": "Cuando el menor ha sido declarado solo por la madre y es ella quien le acompa\u00f1a a viajar",
        "type": "not_required_permission",
        "has_icon": false,
        "slug": "el-menor-tiene-solo-apellido-materno-y-viajara-con-su-madre-",
        "children": [],
        "histories": [
            {
                "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                "id": "2"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "2.1"
            },
            {
                "label": "Viajar\u00e1 con uno de los padres",
                "slug": "viajara-con-uno-de-los-padres",
                "id": "2.1.2"
            },
            {
                "label": "El menor tiene solo apellido materno y viajar\u00e1 con su madre ",
                "slug": "el-menor-tiene-solo-apellido-materno-y-viajara-con-su-madre-",
                "id": "2.1.2.3"
            }
        ]
    },
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres/viajara-con-uno-de-sus-padres-y-el-otro-ha-fallecido": {
        "id": "2.1.2.4",
        "label": "Viajar\u00e1 con uno de sus padres y el otro ha fallecido",
        "desc": "Cuando el menor viaja acompa\u00f1ado por su \u00fanico padre o madre que a\u00fan est\u00e1 vivo",
        "type": "not_required_permission",
        "has_icon": false,
        "slug": "viajara-con-uno-de-sus-padres-y-el-otro-ha-fallecido",
        "children": [],
        "histories": [
            {
                "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                "id": "2"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "2.1"
            },
            {
                "label": "Viajar\u00e1 con uno de los padres",
                "slug": "viajara-con-uno-de-los-padres",
                "id": "2.1.2"
            },
            {
                "label": "Viajar\u00e1 con uno de sus padres y el otro ha fallecido",
                "slug": "viajara-con-uno-de-sus-padres-y-el-otro-ha-fallecido",
                "id": "2.1.2.4"
            }
        ]
    },
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres/el-menor-fue-adoptado-por-personas-extranjeras-y-viajara-por-primera-vez": {
        "id": "2.1.2.5",
        "label": "El menor fue adoptado por personas extranjeras y viajar\u00e1 por primera vez",
        "desc": "Cuando el menor viaja por primera vez luego de ser adoptado por personas extranjeras",
        "type": "document",
        "has_icon": false,
        "slug": "el-menor-fue-adoptado-por-personas-extranjeras-y-viajara-por-primera-vez",
        "requirements": [
            {
                "requirement": "Sentencia del tribunal  de ni\u00f1os, ni\u00f1as y adolescentes que evidencie la adopci\u00f3n",
                "requirement_notes": "\u00b7 Ir al tribunal de ni\u00f1os, ni\u00f1as y adolescentes\r\n\u00b7 Solicitar la sentencia donde se les otorga la adopci\u00f3n, original y certificada. "
            },
            {
                "requirement": "Poder Notarial del padre que tiene la patria potestad y no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda",
                "requirement_notes": "\u00b7 El padre debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula o pasaporte del otro padre que autoriza",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del otro padre adoptivo que viaja con el menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                "id": "2"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "2.1"
            },
            {
                "label": "Viajar\u00e1 con uno de los padres",
                "slug": "viajara-con-uno-de-los-padres",
                "id": "2.1.2"
            },
            {
                "label": "El menor fue adoptado por personas extranjeras y viajar\u00e1 por primera vez",
                "slug": "el-menor-fue-adoptado-por-personas-extranjeras-y-viajara-por-primera-vez",
                "id": "2.1.2.5"
            }
        ]
    },
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres/uno-de-los-padres-vive-en-el-extranjero-y-autoriza-el-viaje": {
        "id": "2.1.2.6",
        "label": "Uno de los padres vive en el extranjero y autoriza el viaje",
        "desc": "Cuando el menor viaja acompa\u00f1ado por el padre o madre que est\u00e1 en el pa\u00eds, y el padre o madre en el extranjero es quien autoriza la salida del menor",
        "type": "document",
        "has_icon": false,
        "slug": "uno-de-los-padres-vive-en-el-extranjero-y-autoriza-el-viaje",
        "requirements": [
            {
                "requirement": "Poder consular otorgado en el pa\u00eds en donde se encuentra el padre (debe ser apostillado y sellado en cancilleria) o Poder Notarial legalizado del pa\u00eds donde se encuentre el padre en  original con apostilla de la Haya",
                "requirement_notes": "\u00b7 El padre en el extranjero debe firmar el poder consular (en el consulado m\u00e1s cercana) autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en el Ministerio de Relaciones Exteriores de la Rep\u00fablica Dominicana."
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                "id": "2"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "2.1"
            },
            {
                "label": "Viajar\u00e1 con uno de los padres",
                "slug": "viajara-con-uno-de-los-padres",
                "id": "2.1.2"
            },
            {
                "label": "Uno de los padres vive en el extranjero y autoriza el viaje",
                "slug": "uno-de-los-padres-vive-en-el-extranjero-y-autoriza-el-viaje",
                "id": "2.1.2.6"
            }
        ]
    },
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres/tiene-autorizacion-de-viaje-del-menordel-tribunal-ninos-ninas-y-adolescentes": {
        "id": "2.1.2.7",
        "label": "Tiene autorizaci\u00f3n de viaje del menor\u00a0del tribunal Ni\u00f1os, Ni\u00f1as y Adolescentes",
        "desc": "Cuando el menor viaja con la persona que tiene la guarda legal con autorizaci\u00f3n de viaje",
        "type": "document",
        "has_icon": false,
        "slug": "tiene-autorizacion-de-viaje-del-menordel-tribunal-ninos-ninas-y-adolescentes",
        "requirements": [
            {
                "requirement": "Autorizaci\u00f3n judicial (sentencia, auto o resoluci\u00f3n) que autoriza el viaje del Menor",
                "requirement_notes": "\u00b7 Ir al tribunal de ni\u00f1os, ni\u00f1as y adolescentes\r\n\u00b7 Solicitar la sentencia donde se les otorga la Guarda Legal y Autorizaci\u00f3n de viaje del menor"
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                "id": "2"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "2.1"
            },
            {
                "label": "Viajar\u00e1 con uno de los padres",
                "slug": "viajara-con-uno-de-los-padres",
                "id": "2.1.2"
            },
            {
                "label": "Tiene autorizaci\u00f3n de viaje del menor\u00a0del tribunal Ni\u00f1os, Ni\u00f1as y Adolescentes",
                "slug": "tiene-autorizacion-de-viaje-del-menordel-tribunal-ninos-ninas-y-adolescentes",
                "id": "2.1.2.7"
            }
        ]
    },
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres/viajara-a-una-actividad-cultural-escolar-o-deportiva": {
        "id": "2.1.2.8",
        "label": "Viajar\u00e1 a una actividad cultural, escolar o deportiva",
        "desc": "Cuando uno de los padres autoriza al otro a viajar con el menor para participar en actividad cultural, escolar, religiosa, deportiva u otra.",
        "type": "document",
        "has_icon": false,
        "slug": "viajara-a-una-actividad-cultural-escolar-o-deportiva",
        "requirements": [
            {
                "requirement": "Poder Notarial del padre que no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda",
                "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB Sambil"
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                "id": "2"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "2.1"
            },
            {
                "label": "Viajar\u00e1 con uno de los padres",
                "slug": "viajara-con-uno-de-los-padres",
                "id": "2.1.2"
            },
            {
                "label": "Viajar\u00e1 a una actividad cultural, escolar o deportiva",
                "slug": "viajara-a-una-actividad-cultural-escolar-o-deportiva",
                "id": "2.1.2.8"
            }
        ]
    },
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres/uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor": {
        "id": "2.1.2.9",
        "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
        "desc": "Cuando uno de los padres se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor.",
        "type": "document",
        "has_icon": false,
        "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
        "requirements": [
            {
                "requirement": "Sentencia judicial que autoriza el viaje del Menor o sentencia judical que otorga la autoridad parental unilateral al padre que viaja",
                "requirement_notes": "\u00b7 Ir al tribunal de ni\u00f1os, ni\u00f1as y adolescentes\r\n\u00b7 Solicitar la sentencia donde se les otorga la patria potestad "
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o  madre que realiza la solicitud",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del padre acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del padre acompa\u00f1ante",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                "id": "2"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "2.1"
            },
            {
                "label": "Viajar\u00e1 con uno de los padres",
                "slug": "viajara-con-uno-de-los-padres",
                "id": "2.1.2"
            },
            {
                "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
                "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
                "id": "2.1.2.9"
            }
        ]
    },
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres/no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir": {
        "id": "2.1.2.10",
        "label": "No veo el caso del menor o tengo dudas para elegir",
        "desc": "No veo el caso del menor o tengo dudas para elegir",
        "type": "not_found",
        "has_icon": false,
        "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
        "children": []
    },
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-su-tutor-legal---tutores-legales": [
        {
            "id": "2.1.3.1",
            "label": "El menor viajar\u00e1 con el tutor legal y el otro tutor autoriza",
            "desc": null,
            "type": "document",
            "has_icon": false,
            "slug": "el-menor-viajara-con-el-tutor-legal-y-el-otro-tutor-autoriza",
            "requirements": [
                {
                    "requirement": "Poder Notarial del padre o madre que no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda. ",
                    "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB "
                },
                {
                    "requirement": "Sentencia judicial que otorga la tutor\u00eda legal sobre el/los menor/es",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                    "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                    "id": "2"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "2.1"
                },
                {
                    "label": "Viajar\u00e1 con su tutor legal / tutores legales",
                    "slug": "viajara-con-su-tutor-legal---tutores-legales",
                    "id": "2.1.3"
                },
                {
                    "label": "El menor viajar\u00e1 con el tutor legal y el otro tutor autoriza",
                    "slug": "el-menor-viajara-con-el-tutor-legal-y-el-otro-tutor-autoriza",
                    "id": "2.1.3.1"
                }
            ]
        },
        {
            "id": "2.1.3.2",
            "label": "El menor tiene un solo tutor legal y viajar\u00e1 con \u00e9l",
            "desc": null,
            "type": "not_required_permission",
            "has_icon": false,
            "slug": "el-menor-tiene-un-solo-tutor-legal-y-viajara-con-el",
            "requirements": [
                {
                    "requirement": "No requiere el permiso, pero debe mostrar en Control Migratorio la sentencia que muestra la tutor\u00eda legal \u00fanica sobre el/los menor/es",
                    "requirement_notes": null
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                    "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                    "id": "2"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "2.1"
                },
                {
                    "label": "Viajar\u00e1 con su tutor legal / tutores legales",
                    "slug": "viajara-con-su-tutor-legal---tutores-legales",
                    "id": "2.1.3"
                },
                {
                    "label": "El menor tiene un solo tutor legal y viajar\u00e1 con \u00e9l",
                    "slug": "el-menor-tiene-un-solo-tutor-legal-y-viajara-con-el",
                    "id": "2.1.3.2"
                }
            ]
        },
        {
            "id": "2.1.3.3",
            "label": "El menor viajar\u00e1 con ambos tutores legales",
            "desc": null,
            "type": "not_required_permission",
            "has_icon": false,
            "slug": "el-menor-viajara-con-ambos-tutores-legales",
            "requirements": [
                {
                    "requirement": "Presentar la sentencia que otorga la tutor\u00eda legal de/los menor/es",
                    "requirement_notes": "No requiere presentar PSM en Control Migratorio"
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                    "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                    "id": "2"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "2.1"
                },
                {
                    "label": "Viajar\u00e1 con su tutor legal / tutores legales",
                    "slug": "viajara-con-su-tutor-legal---tutores-legales",
                    "id": "2.1.3"
                },
                {
                    "label": "El menor viajar\u00e1 con ambos tutores legales",
                    "slug": "el-menor-viajara-con-ambos-tutores-legales",
                    "id": "2.1.3.3"
                }
            ]
        },
        {
            "id": "2.1.3.4",
            "label": "No veo el caso del menor o tengo dudas para elegir",
            "desc": null,
            "type": "not_found",
            "has_icon": false,
            "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
            "children": []
        }
    ],
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-su-tutor-legal---tutores-legales/el-menor-viajara-con-el-tutor-legal-y-el-otro-tutor-autoriza": {
        "id": "2.1.3.1",
        "label": "El menor viajar\u00e1 con el tutor legal y el otro tutor autoriza",
        "desc": null,
        "type": "document",
        "has_icon": false,
        "slug": "el-menor-viajara-con-el-tutor-legal-y-el-otro-tutor-autoriza",
        "requirements": [
            {
                "requirement": "Poder Notarial del padre o madre que no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda. ",
                "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB "
            },
            {
                "requirement": "Sentencia judicial que otorga la tutor\u00eda legal sobre el/los menor/es",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                "id": "2"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "2.1"
            },
            {
                "label": "Viajar\u00e1 con su tutor legal / tutores legales",
                "slug": "viajara-con-su-tutor-legal---tutores-legales",
                "id": "2.1.3"
            },
            {
                "label": "El menor viajar\u00e1 con el tutor legal y el otro tutor autoriza",
                "slug": "el-menor-viajara-con-el-tutor-legal-y-el-otro-tutor-autoriza",
                "id": "2.1.3.1"
            }
        ]
    },
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-su-tutor-legal---tutores-legales/el-menor-tiene-un-solo-tutor-legal-y-viajara-con-el": {
        "id": "2.1.3.2",
        "label": "El menor tiene un solo tutor legal y viajar\u00e1 con \u00e9l",
        "desc": null,
        "type": "not_required_permission",
        "has_icon": false,
        "slug": "el-menor-tiene-un-solo-tutor-legal-y-viajara-con-el",
        "requirements": [
            {
                "requirement": "No requiere el permiso, pero debe mostrar en Control Migratorio la sentencia que muestra la tutor\u00eda legal \u00fanica sobre el/los menor/es",
                "requirement_notes": null
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                "id": "2"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "2.1"
            },
            {
                "label": "Viajar\u00e1 con su tutor legal / tutores legales",
                "slug": "viajara-con-su-tutor-legal---tutores-legales",
                "id": "2.1.3"
            },
            {
                "label": "El menor tiene un solo tutor legal y viajar\u00e1 con \u00e9l",
                "slug": "el-menor-tiene-un-solo-tutor-legal-y-viajara-con-el",
                "id": "2.1.3.2"
            }
        ]
    },
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-su-tutor-legal---tutores-legales/el-menor-viajara-con-ambos-tutores-legales": {
        "id": "2.1.3.3",
        "label": "El menor viajar\u00e1 con ambos tutores legales",
        "desc": null,
        "type": "not_required_permission",
        "has_icon": false,
        "slug": "el-menor-viajara-con-ambos-tutores-legales",
        "requirements": [
            {
                "requirement": "Presentar la sentencia que otorga la tutor\u00eda legal de/los menor/es",
                "requirement_notes": "No requiere presentar PSM en Control Migratorio"
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                "id": "2"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "2.1"
            },
            {
                "label": "Viajar\u00e1 con su tutor legal / tutores legales",
                "slug": "viajara-con-su-tutor-legal---tutores-legales",
                "id": "2.1.3"
            },
            {
                "label": "El menor viajar\u00e1 con ambos tutores legales",
                "slug": "el-menor-viajara-con-ambos-tutores-legales",
                "id": "2.1.3.3"
            }
        ]
    },
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-su-tutor-legal---tutores-legales/no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir": {
        "id": "2.1.3.4",
        "label": "No veo el caso del menor o tengo dudas para elegir",
        "desc": null,
        "type": "not_found",
        "has_icon": false,
        "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
        "children": []
    },
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-un-tercero": [
        {
            "id": "2.1.4.1",
            "label": "Viajar\u00e1 con la aerol\u00ednea",
            "desc": "Cuando el menor viaja con la Aerol\u00ednea y cuenta con la autorizaci\u00f3n de ambos padres, padre, madre o tutor legal",
            "type": "document",
            "has_icon": false,
            "slug": "viajara-con-la-aerolinea",
            "requirements": [
                {
                    "requirement": "Poder Notarial de ambos padres, padre, madre o tutor (seg\u00fan el caso) legal autorizando la salida del menor del pa\u00eds con la aerol\u00ednea, legalizado por procuradur\u00eda o sentencia judicial",
                    "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB Sambil"
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de la o las personas que autorizan",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                },
                {
                    "requirement": "Boleto o reserva del viaje",
                    "requirement_notes": null
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                    "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                    "id": "2"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "2.1"
                },
                {
                    "label": "Viajar\u00e1 con un tercero\u00a0",
                    "slug": "viajara-con-un-tercero",
                    "id": "2.1.4"
                },
                {
                    "label": "Viajar\u00e1 con la aerol\u00ednea",
                    "slug": "viajara-con-la-aerolinea",
                    "id": "2.1.4.1"
                }
            ]
        },
        {
            "id": "2.1.4.2",
            "label": "Viajar\u00e1 con el colegio, centro educativo o instituci\u00f3n cultural",
            "desc": "Cuando el menor viaja con  una academia, centro educativo o instituci\u00f3n cultural, y cuenta con la autorizaci\u00f3n de los padres, padre, madre o tutor legal",
            "type": "document",
            "has_icon": false,
            "slug": "viajara-con-el-colegio-centro-educativo-o-institucion-cultural",
            "requirements": [
                {
                    "requirement": "Poder Notarial de los padres o tutores, autorizando la salida del menor del pa\u00eds con el centro educativo, legalizado por procuradur\u00eda",
                    "requirement_notes": "\u00b7 Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerol\u00ednea. \r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica.\r\n\u00b7 Los padres de todos los menores pueden hacer un solo poder notarial, donde est\u00e9n las firmas de todos los padres que autorizan la salida de los menores."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                    "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                    "id": "2"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "2.1"
                },
                {
                    "label": "Viajar\u00e1 con un tercero\u00a0",
                    "slug": "viajara-con-un-tercero",
                    "id": "2.1.4"
                },
                {
                    "label": "Viajar\u00e1 con el colegio, centro educativo o instituci\u00f3n cultural",
                    "slug": "viajara-con-el-colegio-centro-educativo-o-institucion-cultural",
                    "id": "2.1.4.2"
                }
            ]
        },
        {
            "id": "2.1.4.3",
            "label": "Viajar\u00e1 con academia, selecci\u00f3n o liga deportiva",
            "desc": "Cuando el menor viaja con  una academia, selecci\u00f3 o liga deportiva, y cuenta con la autorizaci\u00f3n de ambos padres, padre, madre o tutor legal",
            "type": "document",
            "has_icon": false,
            "slug": "viajara-con-academia-seleccion-o-liga-deportiva",
            "requirements": [
                {
                    "requirement": "Poder Notarial (colectivo o individual) de los padres, autorizando la salida del o los menores del pa\u00eds, legalizado por procuradur\u00eda. En caso de que los padres esten fuera del pais, debera entregar el poder consular. En caso de que uno de los padres no quiere que viaje o no este presente en la vida del menor, debera entregar Autorizacion Judicial. ",
                    "requirement_notes": "\u00b7 Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerol\u00ednea. \r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica.\r\n\u00b7 Los padres de todos los menores pueden hacer un solo poder notarial, donde est\u00e9n las firmas de todos los padres que autorizan la salida de los menores."
                },
                {
                    "requirement": "Carta o comunicaci\u00f3n de la organizaci\u00f3n (Academia, iglesia o liga Deportiva) local especificando el motivo del viaje",
                    "requirement_notes": "Opcional"
                },
                {
                    "requirement": "Carta de invitaci\u00f3n de la actividad a la que asistira el menor",
                    "requirement_notes": "Opcional"
                },
                {
                    "requirement": "Fotos o copias de las actas de nacimiento originales del (de los)  menor(es) , con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante o responsable",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                    "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                    "id": "2"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "2.1"
                },
                {
                    "label": "Viajar\u00e1 con un tercero\u00a0",
                    "slug": "viajara-con-un-tercero",
                    "id": "2.1.4"
                },
                {
                    "label": "Viajar\u00e1 con academia, selecci\u00f3n o liga deportiva",
                    "slug": "viajara-con-academia-seleccion-o-liga-deportiva",
                    "id": "2.1.4.3"
                }
            ]
        },
        {
            "id": "2.1.4.4",
            "label": "Viajar\u00e1 con la persona que posee la guarda legal",
            "desc": "Cuando el menor viaja con la persona que tiene la guarda legal con autorizaci\u00f3n de viaje ",
            "type": "document",
            "has_icon": false,
            "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
            "requirements": [
                {
                    "requirement": "Poder Notarial de ambos padres, autorizando la salida del menor del pa\u00eds con el guarda custodia (de hecho o legal), legalizado por procuradur\u00eda. ",
                    "requirement_notes": "\u00b7 Ambos padres deben firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": null
                },
                {
                    "requirement": "Fotos o copias de las c\u00e9dulas de identidad del padre y de la madre; o del tutor ",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula del acompa\u00f1ante ( si aplica)",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                    "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                    "id": "2"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "2.1"
                },
                {
                    "label": "Viajar\u00e1 con un tercero\u00a0",
                    "slug": "viajara-con-un-tercero",
                    "id": "2.1.4"
                },
                {
                    "label": "Viajar\u00e1 con la persona que posee la guarda legal",
                    "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
                    "id": "2.1.4.4"
                }
            ]
        },
        {
            "id": "2.1.4.5",
            "label": "El menor tiene solo apellido materno y no viajar\u00e1 con su madre ",
            "desc": "Cuando el menor ha sido declarado solo por la madre y es ella quien autoriza a otra persona a viajar con el menor",
            "type": "document",
            "has_icon": false,
            "slug": "el-menor-tiene-solo-apellido-materno-y-no-viajara-con-su-madre-",
            "requirements": [
                {
                    "requirement": "Poder Notarial de la madre, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                    "requirement_notes": "\u00b7 La madre debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de identidad de la madre ",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de identidad del acompa\u00f1ante (si aplica)",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                    "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                    "id": "2"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "2.1"
                },
                {
                    "label": "Viajar\u00e1 con un tercero\u00a0",
                    "slug": "viajara-con-un-tercero",
                    "id": "2.1.4"
                },
                {
                    "label": "El menor tiene solo apellido materno y no viajar\u00e1 con su madre ",
                    "slug": "el-menor-tiene-solo-apellido-materno-y-no-viajara-con-su-madre-",
                    "id": "2.1.4.5"
                }
            ]
        },
        {
            "id": "2.1.4.6",
            "label": "Uno de los padres ha fallecido y no viajar\u00e1 con el padre sobreviviente",
            "desc": "Cuando el menor viaja con la persona que ha autorizado el padre o madre sobreviviente",
            "type": "document",
            "has_icon": false,
            "slug": "uno-de-los-padres-ha-fallecido-y-no-viajara-con-el-padre-sobreviviente",
            "requirements": [
                {
                    "requirement": "Poder Notarial del padre sobreviviente, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                    "requirement_notes": "\u00b7 El padre sobreviviente debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                },
                {
                    "requirement": "Acta de defunci\u00f3n del padre fallecido  con codigo QR legible",
                    "requirement_notes": null
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                    "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                    "id": "2"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "2.1"
                },
                {
                    "label": "Viajar\u00e1 con un tercero\u00a0",
                    "slug": "viajara-con-un-tercero",
                    "id": "2.1.4"
                },
                {
                    "label": "Uno de los padres ha fallecido y no viajar\u00e1 con el padre sobreviviente",
                    "slug": "uno-de-los-padres-ha-fallecido-y-no-viajara-con-el-padre-sobreviviente",
                    "id": "2.1.4.6"
                }
            ]
        },
        {
            "id": "2.1.4.7",
            "label": "Viajar\u00e1 con una persona autorizada por el tutor legal ",
            "desc": "Cuando el menor viaja con la persona que ha autorizado el tutor legal",
            "type": "document",
            "has_icon": false,
            "slug": "viajara-con-una-persona-autorizada-por-el-tutor-legal-",
            "requirements": [
                {
                    "requirement": "Poder Notarial del tutor (es) legal, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                    "requirement_notes": "\u00b7 El tutor legal debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de identidad de el o los tutores que realizan la solicitud",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                },
                {
                    "requirement": "Sentencia que otorga la tutor\u00eda legal del menor",
                    "requirement_notes": null
                },
                {
                    "requirement": "C\u00e9dula del acompa\u00f1ante",
                    "requirement_notes": null
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                    "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                    "id": "2"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "2.1"
                },
                {
                    "label": "Viajar\u00e1 con un tercero\u00a0",
                    "slug": "viajara-con-un-tercero",
                    "id": "2.1.4"
                },
                {
                    "label": "Viajar\u00e1 con una persona autorizada por el tutor legal ",
                    "slug": "viajara-con-una-persona-autorizada-por-el-tutor-legal-",
                    "id": "2.1.4.7"
                }
            ]
        },
        {
            "id": "2.1.4.8",
            "label": "Viajar\u00e1 con abuelos, t\u00edos, amigos u otras personas que no son los padres",
            "desc": "Cuando el menor viaja con terceros que han sido autorizado los padres o tutores legales",
            "type": "document",
            "has_icon": false,
            "slug": "viajara-con-abuelos-tios-amigos-u-otras-personas-que-no-son-los-padres",
            "requirements": [
                {
                    "requirement": "Poder Notarial de los padres, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                    "requirement_notes": "\u00b7 Ambos padres deben firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": null
                },
                {
                    "requirement": "Fotos o copia sde las c\u00e9dulas de identidad de ambos padres o tutor (es) ",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                },
                {
                    "requirement": "C\u00e9dula del acompa\u00f1ante ",
                    "requirement_notes": null
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                    "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                    "id": "2"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "2.1"
                },
                {
                    "label": "Viajar\u00e1 con un tercero\u00a0",
                    "slug": "viajara-con-un-tercero",
                    "id": "2.1.4"
                },
                {
                    "label": "Viajar\u00e1 con abuelos, t\u00edos, amigos u otras personas que no son los padres",
                    "slug": "viajara-con-abuelos-tios-amigos-u-otras-personas-que-no-son-los-padres",
                    "id": "2.1.4.8"
                }
            ]
        },
        {
            "id": "2.1.4.9",
            "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
            "desc": "Cuando uno de los padres se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
            "type": "document",
            "has_icon": false,
            "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
            "requirements": [
                {
                    "requirement": "Sentencia Judicial que otorga la autorizaci\u00f3n de viaje del menor",
                    "requirement_notes": "\u00b7 Ir al tribunal de ni\u00f1os, ni\u00f1as y adolescentes\r\n\u00b7 Solicitar la sentencia donde se les otorga la autorizaci\u00f3n de viaje "
                },
                {
                    "requirement": "Poder Notarial del padre que tiene la autorizaci\u00f3n de viaje y no viaja, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                    "requirement_notes": "\u00b7 El padre debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "C\u00e9dula de identidad del acompa\u00f1ante (si aplica)",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                    "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                    "id": "2"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "2.1"
                },
                {
                    "label": "Viajar\u00e1 con un tercero\u00a0",
                    "slug": "viajara-con-un-tercero",
                    "id": "2.1.4"
                },
                {
                    "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
                    "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
                    "id": "2.1.4.9"
                }
            ]
        },
        {
            "id": "2.1.4.10",
            "label": "No veo el caso del menor o tengo dudas para elegir",
            "desc": "No veo el caso del menor o tengo dudas para elegir",
            "type": "not_found",
            "has_icon": false,
            "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
            "children": []
        }
    ],
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-un-tercero/viajara-con-la-aerolinea": {
        "id": "2.1.4.1",
        "label": "Viajar\u00e1 con la aerol\u00ednea",
        "desc": "Cuando el menor viaja con la Aerol\u00ednea y cuenta con la autorizaci\u00f3n de ambos padres, padre, madre o tutor legal",
        "type": "document",
        "has_icon": false,
        "slug": "viajara-con-la-aerolinea",
        "requirements": [
            {
                "requirement": "Poder Notarial de ambos padres, padre, madre o tutor (seg\u00fan el caso) legal autorizando la salida del menor del pa\u00eds con la aerol\u00ednea, legalizado por procuradur\u00eda o sentencia judicial",
                "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB Sambil"
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de la o las personas que autorizan",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
            },
            {
                "requirement": "Boleto o reserva del viaje",
                "requirement_notes": null
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                "id": "2"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "2.1"
            },
            {
                "label": "Viajar\u00e1 con un tercero\u00a0",
                "slug": "viajara-con-un-tercero",
                "id": "2.1.4"
            },
            {
                "label": "Viajar\u00e1 con la aerol\u00ednea",
                "slug": "viajara-con-la-aerolinea",
                "id": "2.1.4.1"
            }
        ]
    },
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-un-tercero/viajara-con-el-colegio-centro-educativo-o-institucion-cultural": {
        "id": "2.1.4.2",
        "label": "Viajar\u00e1 con el colegio, centro educativo o instituci\u00f3n cultural",
        "desc": "Cuando el menor viaja con  una academia, centro educativo o instituci\u00f3n cultural, y cuenta con la autorizaci\u00f3n de los padres, padre, madre o tutor legal",
        "type": "document",
        "has_icon": false,
        "slug": "viajara-con-el-colegio-centro-educativo-o-institucion-cultural",
        "requirements": [
            {
                "requirement": "Poder Notarial de los padres o tutores, autorizando la salida del menor del pa\u00eds con el centro educativo, legalizado por procuradur\u00eda",
                "requirement_notes": "\u00b7 Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerol\u00ednea. \r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica.\r\n\u00b7 Los padres de todos los menores pueden hacer un solo poder notarial, donde est\u00e9n las firmas de todos los padres que autorizan la salida de los menores."
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                "id": "2"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "2.1"
            },
            {
                "label": "Viajar\u00e1 con un tercero\u00a0",
                "slug": "viajara-con-un-tercero",
                "id": "2.1.4"
            },
            {
                "label": "Viajar\u00e1 con el colegio, centro educativo o instituci\u00f3n cultural",
                "slug": "viajara-con-el-colegio-centro-educativo-o-institucion-cultural",
                "id": "2.1.4.2"
            }
        ]
    },
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-un-tercero/viajara-con-academia-seleccion-o-liga-deportiva": {
        "id": "2.1.4.3",
        "label": "Viajar\u00e1 con academia, selecci\u00f3n o liga deportiva",
        "desc": "Cuando el menor viaja con  una academia, selecci\u00f3 o liga deportiva, y cuenta con la autorizaci\u00f3n de ambos padres, padre, madre o tutor legal",
        "type": "document",
        "has_icon": false,
        "slug": "viajara-con-academia-seleccion-o-liga-deportiva",
        "requirements": [
            {
                "requirement": "Poder Notarial (colectivo o individual) de los padres, autorizando la salida del o los menores del pa\u00eds, legalizado por procuradur\u00eda. En caso de que los padres esten fuera del pais, debera entregar el poder consular. En caso de que uno de los padres no quiere que viaje o no este presente en la vida del menor, debera entregar Autorizacion Judicial. ",
                "requirement_notes": "\u00b7 Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerol\u00ednea. \r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica.\r\n\u00b7 Los padres de todos los menores pueden hacer un solo poder notarial, donde est\u00e9n las firmas de todos los padres que autorizan la salida de los menores."
            },
            {
                "requirement": "Carta o comunicaci\u00f3n de la organizaci\u00f3n (Academia, iglesia o liga Deportiva) local especificando el motivo del viaje",
                "requirement_notes": "Opcional"
            },
            {
                "requirement": "Carta de invitaci\u00f3n de la actividad a la que asistira el menor",
                "requirement_notes": "Opcional"
            },
            {
                "requirement": "Fotos o copias de las actas de nacimiento originales del (de los)  menor(es) , con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del acompa\u00f1ante o responsable",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                "id": "2"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "2.1"
            },
            {
                "label": "Viajar\u00e1 con un tercero\u00a0",
                "slug": "viajara-con-un-tercero",
                "id": "2.1.4"
            },
            {
                "label": "Viajar\u00e1 con academia, selecci\u00f3n o liga deportiva",
                "slug": "viajara-con-academia-seleccion-o-liga-deportiva",
                "id": "2.1.4.3"
            }
        ]
    },
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-un-tercero/viajara-con-la-persona-que-posee-la-guarda-legal": {
        "id": "2.1.4.4",
        "label": "Viajar\u00e1 con la persona que posee la guarda legal",
        "desc": "Cuando el menor viaja con la persona que tiene la guarda legal con autorizaci\u00f3n de viaje ",
        "type": "document",
        "has_icon": false,
        "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
        "requirements": [
            {
                "requirement": "Poder Notarial de ambos padres, autorizando la salida del menor del pa\u00eds con el guarda custodia (de hecho o legal), legalizado por procuradur\u00eda. ",
                "requirement_notes": "\u00b7 Ambos padres deben firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": null
            },
            {
                "requirement": "Fotos o copias de las c\u00e9dulas de identidad del padre y de la madre; o del tutor ",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula del acompa\u00f1ante ( si aplica)",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                "id": "2"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "2.1"
            },
            {
                "label": "Viajar\u00e1 con un tercero\u00a0",
                "slug": "viajara-con-un-tercero",
                "id": "2.1.4"
            },
            {
                "label": "Viajar\u00e1 con la persona que posee la guarda legal",
                "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
                "id": "2.1.4.4"
            }
        ]
    },
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-un-tercero/el-menor-tiene-solo-apellido-materno-y-no-viajara-con-su-madre-": {
        "id": "2.1.4.5",
        "label": "El menor tiene solo apellido materno y no viajar\u00e1 con su madre ",
        "desc": "Cuando el menor ha sido declarado solo por la madre y es ella quien autoriza a otra persona a viajar con el menor",
        "type": "document",
        "has_icon": false,
        "slug": "el-menor-tiene-solo-apellido-materno-y-no-viajara-con-su-madre-",
        "requirements": [
            {
                "requirement": "Poder Notarial de la madre, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                "requirement_notes": "\u00b7 La madre debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de identidad de la madre ",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de identidad del acompa\u00f1ante (si aplica)",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                "id": "2"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "2.1"
            },
            {
                "label": "Viajar\u00e1 con un tercero\u00a0",
                "slug": "viajara-con-un-tercero",
                "id": "2.1.4"
            },
            {
                "label": "El menor tiene solo apellido materno y no viajar\u00e1 con su madre ",
                "slug": "el-menor-tiene-solo-apellido-materno-y-no-viajara-con-su-madre-",
                "id": "2.1.4.5"
            }
        ]
    },
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-un-tercero/uno-de-los-padres-ha-fallecido-y-no-viajara-con-el-padre-sobreviviente": {
        "id": "2.1.4.6",
        "label": "Uno de los padres ha fallecido y no viajar\u00e1 con el padre sobreviviente",
        "desc": "Cuando el menor viaja con la persona que ha autorizado el padre o madre sobreviviente",
        "type": "document",
        "has_icon": false,
        "slug": "uno-de-los-padres-ha-fallecido-y-no-viajara-con-el-padre-sobreviviente",
        "requirements": [
            {
                "requirement": "Poder Notarial del padre sobreviviente, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                "requirement_notes": "\u00b7 El padre sobreviviente debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
            },
            {
                "requirement": "Acta de defunci\u00f3n del padre fallecido  con codigo QR legible",
                "requirement_notes": null
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                "id": "2"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "2.1"
            },
            {
                "label": "Viajar\u00e1 con un tercero\u00a0",
                "slug": "viajara-con-un-tercero",
                "id": "2.1.4"
            },
            {
                "label": "Uno de los padres ha fallecido y no viajar\u00e1 con el padre sobreviviente",
                "slug": "uno-de-los-padres-ha-fallecido-y-no-viajara-con-el-padre-sobreviviente",
                "id": "2.1.4.6"
            }
        ]
    },
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-un-tercero/viajara-con-una-persona-autorizada-por-el-tutor-legal-": {
        "id": "2.1.4.7",
        "label": "Viajar\u00e1 con una persona autorizada por el tutor legal ",
        "desc": "Cuando el menor viaja con la persona que ha autorizado el tutor legal",
        "type": "document",
        "has_icon": false,
        "slug": "viajara-con-una-persona-autorizada-por-el-tutor-legal-",
        "requirements": [
            {
                "requirement": "Poder Notarial del tutor (es) legal, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                "requirement_notes": "\u00b7 El tutor legal debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de identidad de el o los tutores que realizan la solicitud",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
            },
            {
                "requirement": "Sentencia que otorga la tutor\u00eda legal del menor",
                "requirement_notes": null
            },
            {
                "requirement": "C\u00e9dula del acompa\u00f1ante",
                "requirement_notes": null
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                "id": "2"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "2.1"
            },
            {
                "label": "Viajar\u00e1 con un tercero\u00a0",
                "slug": "viajara-con-un-tercero",
                "id": "2.1.4"
            },
            {
                "label": "Viajar\u00e1 con una persona autorizada por el tutor legal ",
                "slug": "viajara-con-una-persona-autorizada-por-el-tutor-legal-",
                "id": "2.1.4.7"
            }
        ]
    },
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-un-tercero/viajara-con-abuelos-tios-amigos-u-otras-personas-que-no-son-los-padres": {
        "id": "2.1.4.8",
        "label": "Viajar\u00e1 con abuelos, t\u00edos, amigos u otras personas que no son los padres",
        "desc": "Cuando el menor viaja con terceros que han sido autorizado los padres o tutores legales",
        "type": "document",
        "has_icon": false,
        "slug": "viajara-con-abuelos-tios-amigos-u-otras-personas-que-no-son-los-padres",
        "requirements": [
            {
                "requirement": "Poder Notarial de los padres, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                "requirement_notes": "\u00b7 Ambos padres deben firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": null
            },
            {
                "requirement": "Fotos o copia sde las c\u00e9dulas de identidad de ambos padres o tutor (es) ",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
            },
            {
                "requirement": "C\u00e9dula del acompa\u00f1ante ",
                "requirement_notes": null
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                "id": "2"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "2.1"
            },
            {
                "label": "Viajar\u00e1 con un tercero\u00a0",
                "slug": "viajara-con-un-tercero",
                "id": "2.1.4"
            },
            {
                "label": "Viajar\u00e1 con abuelos, t\u00edos, amigos u otras personas que no son los padres",
                "slug": "viajara-con-abuelos-tios-amigos-u-otras-personas-que-no-son-los-padres",
                "id": "2.1.4.8"
            }
        ]
    },
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-un-tercero/uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor": {
        "id": "2.1.4.9",
        "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
        "desc": "Cuando uno de los padres se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
        "type": "document",
        "has_icon": false,
        "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
        "requirements": [
            {
                "requirement": "Sentencia Judicial que otorga la autorizaci\u00f3n de viaje del menor",
                "requirement_notes": "\u00b7 Ir al tribunal de ni\u00f1os, ni\u00f1as y adolescentes\r\n\u00b7 Solicitar la sentencia donde se les otorga la autorizaci\u00f3n de viaje "
            },
            {
                "requirement": "Poder Notarial del padre que tiene la autorizaci\u00f3n de viaje y no viaja, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                "requirement_notes": "\u00b7 El padre debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "C\u00e9dula de identidad del acompa\u00f1ante (si aplica)",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                "id": "2"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "2.1"
            },
            {
                "label": "Viajar\u00e1 con un tercero\u00a0",
                "slug": "viajara-con-un-tercero",
                "id": "2.1.4"
            },
            {
                "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
                "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
                "id": "2.1.4.9"
            }
        ]
    },
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-un-tercero/no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir": {
        "id": "2.1.4.10",
        "label": "No veo el caso del menor o tengo dudas para elegir",
        "desc": "No veo el caso del menor o tengo dudas para elegir",
        "type": "not_found",
        "has_icon": false,
        "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
        "children": []
    },
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-no-ha-estado-mas-de-6-meses-en-el-pais": [
        {
            "id": "2.2.1",
            "label": "No se requiere permiso",
            "desc": null,
            "type": "not_required_permission",
            "has_icon": false,
            "slug": "no-se-requiere-permiso",
            "children": [],
            "histories": [
                {
                    "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                    "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                    "id": "2"
                },
                {
                    "label": "El menor no ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-no-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "2.2"
                },
                {
                    "label": "No se requiere permiso",
                    "slug": "no-se-requiere-permiso",
                    "id": "2.2.1"
                }
            ]
        }
    ],
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-no-ha-estado-mas-de-6-meses-en-el-pais/no-se-requiere-permiso": {
        "id": "2.2.1",
        "label": "No se requiere permiso",
        "desc": null,
        "type": "not_required_permission",
        "has_icon": false,
        "slug": "no-se-requiere-permiso",
        "children": [],
        "histories": [
            {
                "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
                "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero",
                "id": "2"
            },
            {
                "label": "El menor no ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-no-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "2.2"
            },
            {
                "label": "No se requiere permiso",
                "slug": "no-se-requiere-permiso",
                "id": "2.2.1"
            }
        ]
    },
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana": [
        {
            "id": "3.1",
            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
            "desc": "Cuando el menor viaja con uno de los padres",
            "type": null,
            "has_icon": false,
            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
            "children": [
                {
                    "id": "3.1.1",
                    "label": "Viajar\u00e1 con ambos padres",
                    "desc": "Cuando uno de los padres autoriza al otro a viajar con el menor",
                    "type": "not_required_permission",
                    "has_icon": true,
                    "slug": "viajara-con-ambos-padres",
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                            "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                            "id": "3"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "3.1"
                        },
                        {
                            "label": "Viajar\u00e1 con ambos padres",
                            "slug": "viajara-con-ambos-padres",
                            "id": "3.1.1"
                        }
                    ]
                },
                {
                    "id": "3.1.2",
                    "label": "Viajar\u00e1 con uno de los padres",
                    "desc": "Cuando el menor viaja con la persona que tiene la guarda legal de este",
                    "type": null,
                    "has_icon": true,
                    "slug": "viajara-con-uno-de-los-padres",
                    "children": [
                        {
                            "id": "3.1.2.1",
                            "label": "Uno de los padres autoriza al otro a viajar",
                            "desc": "Cuando el menor ha sido declarado solo por la madre y es ella quien autoriza a otra persona a viajar con el menor",
                            "type": "document",
                            "has_icon": false,
                            "slug": "uno-de-los-padres-autoriza-al-otro-a-viajar",
                            "requirements": [
                                {
                                    "requirement": "Poder Notarial del padre o madre que no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda",
                                    "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB "
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                                }
                            ],
                            "children": [],
                            "histories": [
                                {
                                    "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                                    "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                                    "id": "3"
                                },
                                {
                                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                                    "id": "3.1"
                                },
                                {
                                    "label": "Viajar\u00e1 con uno de los padres",
                                    "slug": "viajara-con-uno-de-los-padres",
                                    "id": "3.1.2"
                                },
                                {
                                    "label": "Uno de los padres autoriza al otro a viajar",
                                    "slug": "uno-de-los-padres-autoriza-al-otro-a-viajar",
                                    "id": "3.1.2.1"
                                }
                            ]
                        },
                        {
                            "id": "3.1.2.2",
                            "label": "Viajar\u00e1 con la persona que posee la guarda legal",
                            "desc": "Cuando el menor viaja acompa\u00f1ado por su \u00fanico padre o madre que a\u00fan est\u00e1 vivo",
                            "type": "document",
                            "has_icon": false,
                            "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
                            "requirements": [
                                {
                                    "requirement": "Poder Notarial de los padres, autorizando la salida del menor del pa\u00eds con el guarda, legalizado por procuradur\u00eda",
                                    "requirement_notes": "\u00b7 Ambos padres o tutores deben firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                                }
                            ],
                            "children": [],
                            "histories": [
                                {
                                    "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                                    "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                                    "id": "3"
                                },
                                {
                                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                                    "id": "3.1"
                                },
                                {
                                    "label": "Viajar\u00e1 con uno de los padres",
                                    "slug": "viajara-con-uno-de-los-padres",
                                    "id": "3.1.2"
                                },
                                {
                                    "label": "Viajar\u00e1 con la persona que posee la guarda legal",
                                    "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
                                    "id": "3.1.2.2"
                                }
                            ]
                        },
                        {
                            "id": "3.1.2.3",
                            "label": "El menor tiene solo apellido materno y viajar\u00e1 con su madre ",
                            "desc": "Cuando el menor adoptado viaja con uno de los padres adoptivos",
                            "type": "not_required_permission",
                            "has_icon": false,
                            "slug": "el-menor-tiene-solo-apellido-materno-y-viajara-con-su-madre-",
                            "children": [],
                            "histories": [
                                {
                                    "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                                    "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                                    "id": "3"
                                },
                                {
                                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                                    "id": "3.1"
                                },
                                {
                                    "label": "Viajar\u00e1 con uno de los padres",
                                    "slug": "viajara-con-uno-de-los-padres",
                                    "id": "3.1.2"
                                },
                                {
                                    "label": "El menor tiene solo apellido materno y viajar\u00e1 con su madre ",
                                    "slug": "el-menor-tiene-solo-apellido-materno-y-viajara-con-su-madre-",
                                    "id": "3.1.2.3"
                                }
                            ]
                        },
                        {
                            "id": "3.1.2.4",
                            "label": "Viajar\u00e1 con uno de sus padres y el otro ha fallecido",
                            "desc": "Cuando el padre o madre que reside en el extranjero autoriza al otro padre o madre que residen en la Rep\u00fablica Dominicana a viajar con el menor",
                            "type": "not_required_permission",
                            "has_icon": false,
                            "slug": "viajara-con-uno-de-sus-padres-y-el-otro-ha-fallecido",
                            "children": [],
                            "histories": [
                                {
                                    "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                                    "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                                    "id": "3"
                                },
                                {
                                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                                    "id": "3.1"
                                },
                                {
                                    "label": "Viajar\u00e1 con uno de los padres",
                                    "slug": "viajara-con-uno-de-los-padres",
                                    "id": "3.1.2"
                                },
                                {
                                    "label": "Viajar\u00e1 con uno de sus padres y el otro ha fallecido",
                                    "slug": "viajara-con-uno-de-sus-padres-y-el-otro-ha-fallecido",
                                    "id": "3.1.2.4"
                                }
                            ]
                        },
                        {
                            "id": "3.1.2.5",
                            "label": "El menor fue adoptado por personas extranjeras y viaja por primera vez",
                            "desc": "Cuando el menor viaja con la persona que tiene la guarda legal con autorizaci\u00f3n de viaje",
                            "type": "document",
                            "has_icon": false,
                            "slug": "el-menor-fue-adoptado-por-personas-extranjeras-y-viaja-por-primera-vez",
                            "requirements": [
                                {
                                    "requirement": "Sentencia del tribunal  de ni\u00f1os, ni\u00f1as y adolescentes que evidencie la adopci\u00f3n",
                                    "requirement_notes": "\u00b7 Ir al tribunal de ni\u00f1os, ni\u00f1as y adolescentes\r\n\u00b7 Solicitar la sentencia donde se les otorga la adopci\u00f3n, original y certificada. "
                                },
                                {
                                    "requirement": "Poder Notarial del padre que tiene la patria potestad y no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda. ",
                                    "requirement_notes": "\u00b7 El padre debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula o pasaporte del otro padre que autoriza",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del otro padre adoptivo que viaja con el menor",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                                }
                            ],
                            "children": [],
                            "histories": [
                                {
                                    "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                                    "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                                    "id": "3"
                                },
                                {
                                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                                    "id": "3.1"
                                },
                                {
                                    "label": "Viajar\u00e1 con uno de los padres",
                                    "slug": "viajara-con-uno-de-los-padres",
                                    "id": "3.1.2"
                                },
                                {
                                    "label": "El menor fue adoptado por personas extranjeras y viaja por primera vez",
                                    "slug": "el-menor-fue-adoptado-por-personas-extranjeras-y-viaja-por-primera-vez",
                                    "id": "3.1.2.5"
                                }
                            ]
                        },
                        {
                            "id": "3.1.2.6",
                            "label": "Uno de los padres vive en el extranjero y autoriza el viaje",
                            "desc": "Cuando uno de los padres autoriza al otro a viajar con el menor para participar en actividad cultural, escolar, religiosa, deportiva u otra.",
                            "type": "document",
                            "has_icon": false,
                            "slug": "uno-de-los-padres-vive-en-el-extranjero-y-autoriza-el-viaje",
                            "requirements": [
                                {
                                    "requirement": "Poder consular otorgado en el pa\u00eds en donde se encuentra el padre (debe ser apostillado y sellado en cancilleria) o Poder Notarial legalizado del pa\u00eds donde se encuentre el padre en  original con apostilla de la Haya",
                                    "requirement_notes": "\u00b7 El padre en el extranjero debe firmar el poder consular (en el consulado m\u00e1s cercana) autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en el Ministerio de Relaciones Exteriores de la Rep\u00fablica Dominicana."
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                                }
                            ],
                            "children": [],
                            "histories": [
                                {
                                    "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                                    "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                                    "id": "3"
                                },
                                {
                                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                                    "id": "3.1"
                                },
                                {
                                    "label": "Viajar\u00e1 con uno de los padres",
                                    "slug": "viajara-con-uno-de-los-padres",
                                    "id": "3.1.2"
                                },
                                {
                                    "label": "Uno de los padres vive en el extranjero y autoriza el viaje",
                                    "slug": "uno-de-los-padres-vive-en-el-extranjero-y-autoriza-el-viaje",
                                    "id": "3.1.2.6"
                                }
                            ]
                        },
                        {
                            "id": "3.1.2.7",
                            "label": "Tiene autorizaci\u00f3n de viaje del menor\u00a0del tribunal Ni\u00f1os, Ni\u00f1as y Adolescentes",
                            "desc": "Cuando uno de los padres se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor.",
                            "type": "document",
                            "has_icon": false,
                            "slug": "tiene-autorizacion-de-viaje-del-menordel-tribunal-ninos-ninas-y-adolescentes",
                            "requirements": [
                                {
                                    "requirement": "Autorizaci\u00f3n judicial (sentencia, auto o resoluci\u00f3n) que autoriza el viaje del Menor",
                                    "requirement_notes": "\u00b7 Ir al tribunal de ni\u00f1os, ni\u00f1as y adolescentes\r\n\u00b7 Solicitar la sentencia donde se les otorga la Guarda Legal y Autorizaci\u00f3n de viaje del menor"
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                                }
                            ],
                            "children": [],
                            "histories": [
                                {
                                    "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                                    "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                                    "id": "3"
                                },
                                {
                                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                                    "id": "3.1"
                                },
                                {
                                    "label": "Viajar\u00e1 con uno de los padres",
                                    "slug": "viajara-con-uno-de-los-padres",
                                    "id": "3.1.2"
                                },
                                {
                                    "label": "Tiene autorizaci\u00f3n de viaje del menor\u00a0del tribunal Ni\u00f1os, Ni\u00f1as y Adolescentes",
                                    "slug": "tiene-autorizacion-de-viaje-del-menordel-tribunal-ninos-ninas-y-adolescentes",
                                    "id": "3.1.2.7"
                                }
                            ]
                        },
                        {
                            "id": "3.1.2.8",
                            "label": "Viajar\u00e1 a una actividad cultural, escolar, religiosa, deportiva u otra",
                            "desc": "No veo el caso del menor o tengo dudas para elegir",
                            "type": "document",
                            "has_icon": false,
                            "slug": "viajara-a-una-actividad-cultural-escolar-religiosa-deportiva-u-otra",
                            "requirements": [
                                {
                                    "requirement": "Poder Notarial del padre que no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda",
                                    "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB Sambil"
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                                }
                            ],
                            "children": [],
                            "histories": [
                                {
                                    "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                                    "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                                    "id": "3"
                                },
                                {
                                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                                    "id": "3.1"
                                },
                                {
                                    "label": "Viajar\u00e1 con uno de los padres",
                                    "slug": "viajara-con-uno-de-los-padres",
                                    "id": "3.1.2"
                                },
                                {
                                    "label": "Viajar\u00e1 a una actividad cultural, escolar, religiosa, deportiva u otra",
                                    "slug": "viajara-a-una-actividad-cultural-escolar-religiosa-deportiva-u-otra",
                                    "id": "3.1.2.8"
                                }
                            ]
                        },
                        {
                            "id": "3.1.2.9",
                            "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
                            "desc": null,
                            "type": "document",
                            "has_icon": false,
                            "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
                            "requirements": [
                                {
                                    "requirement": "Sentencia judicial que autoriza el viaje del Menor o sentencia judical que otorga la autoridad parental unilateral al padre que viaja",
                                    "requirement_notes": "\u00b7 Ir al tribunal de ni\u00f1os, ni\u00f1as y adolescentes\r\n\u00b7 Solicitar la sentencia donde se les otorga la patria potestad "
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o  madre que realiza la solicitud",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del padre acompa\u00f1ante",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del padre acompa\u00f1ante",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                                }
                            ],
                            "children": [],
                            "histories": [
                                {
                                    "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                                    "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                                    "id": "3"
                                },
                                {
                                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                                    "id": "3.1"
                                },
                                {
                                    "label": "Viajar\u00e1 con uno de los padres",
                                    "slug": "viajara-con-uno-de-los-padres",
                                    "id": "3.1.2"
                                },
                                {
                                    "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
                                    "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
                                    "id": "3.1.2.9"
                                }
                            ]
                        },
                        {
                            "id": "3.1.2.10",
                            "label": "No veo el caso del menor o tengo dudas para elegir",
                            "desc": null,
                            "type": "not_found",
                            "has_icon": false,
                            "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "3.1.3",
                    "label": "Viajar\u00e1 con su tutor legal / tutores legales",
                    "desc": null,
                    "type": null,
                    "has_icon": true,
                    "slug": "viajara-con-su-tutor-legal---tutores-legales",
                    "children": [
                        {
                            "id": "3.1.3.1",
                            "label": "El menor viajar\u00e1 con el tutor legal y el otro tutor autoriza",
                            "desc": null,
                            "type": "document",
                            "has_icon": false,
                            "slug": "el-menor-viajara-con-el-tutor-legal-y-el-otro-tutor-autoriza",
                            "requirements": [
                                {
                                    "requirement": "Poder Notarial del padre o madre que no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda. ",
                                    "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB "
                                },
                                {
                                    "requirement": "Sentencia judicial que otorga la tutor\u00eda legal sobre el/los menor/es",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                                }
                            ],
                            "children": [],
                            "histories": [
                                {
                                    "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                                    "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                                    "id": "3"
                                },
                                {
                                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                                    "id": "3.1"
                                },
                                {
                                    "label": "Viajar\u00e1 con su tutor legal / tutores legales",
                                    "slug": "viajara-con-su-tutor-legal---tutores-legales",
                                    "id": "3.1.3"
                                },
                                {
                                    "label": "El menor viajar\u00e1 con el tutor legal y el otro tutor autoriza",
                                    "slug": "el-menor-viajara-con-el-tutor-legal-y-el-otro-tutor-autoriza",
                                    "id": "3.1.3.1"
                                }
                            ]
                        },
                        {
                            "id": "3.1.3.2",
                            "label": "El menor tiene un solo tutor legal y viajar\u00e1 con \u00e9l",
                            "desc": null,
                            "type": "not_required_permission",
                            "has_icon": false,
                            "slug": "el-menor-tiene-un-solo-tutor-legal-y-viajara-con-el",
                            "requirements": [
                                {
                                    "requirement": "No requiere el permiso, pero debe mostrar en Control Migratorio la sentencia que muestra la tutor\u00eda legal \u00fanica sobre el/los menor/es",
                                    "requirement_notes": null
                                }
                            ],
                            "children": [],
                            "histories": [
                                {
                                    "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                                    "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                                    "id": "3"
                                },
                                {
                                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                                    "id": "3.1"
                                },
                                {
                                    "label": "Viajar\u00e1 con su tutor legal / tutores legales",
                                    "slug": "viajara-con-su-tutor-legal---tutores-legales",
                                    "id": "3.1.3"
                                },
                                {
                                    "label": "El menor tiene un solo tutor legal y viajar\u00e1 con \u00e9l",
                                    "slug": "el-menor-tiene-un-solo-tutor-legal-y-viajara-con-el",
                                    "id": "3.1.3.2"
                                }
                            ]
                        },
                        {
                            "id": "3.1.3.3",
                            "label": "El menor viajar\u00e1 con ambos tutores legales",
                            "desc": null,
                            "type": "not_required_permission",
                            "has_icon": false,
                            "slug": "el-menor-viajara-con-ambos-tutores-legales",
                            "requirements": [
                                {
                                    "requirement": "Presentar la sentencia que otorga la tutor\u00eda legal de/los menor/es",
                                    "requirement_notes": "No requiere presentar PSM en Control Migratorio"
                                }
                            ],
                            "children": [],
                            "histories": [
                                {
                                    "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                                    "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                                    "id": "3"
                                },
                                {
                                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                                    "id": "3.1"
                                },
                                {
                                    "label": "Viajar\u00e1 con su tutor legal / tutores legales",
                                    "slug": "viajara-con-su-tutor-legal---tutores-legales",
                                    "id": "3.1.3"
                                },
                                {
                                    "label": "El menor viajar\u00e1 con ambos tutores legales",
                                    "slug": "el-menor-viajara-con-ambos-tutores-legales",
                                    "id": "3.1.3.3"
                                }
                            ]
                        },
                        {
                            "id": "3.1.3.4",
                            "label": "No veo el caso del menor o tengo dudas para elegir",
                            "desc": null,
                            "type": "not_found",
                            "has_icon": false,
                            "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "3.1.4",
                    "label": "Viajar\u00e1 con un tercero\u00a0",
                    "desc": null,
                    "type": null,
                    "has_icon": true,
                    "slug": "viajara-con-un-tercero",
                    "children": [
                        {
                            "id": "3.1.4.1",
                            "label": "Viajar\u00e1 con la aerol\u00ednea",
                            "desc": "Cuando el menor viaja con la Aerol\u00ednea y cuenta con la autorizaci\u00f3n de ambos padres, padre, madre o tutor legal",
                            "type": "document",
                            "has_icon": false,
                            "slug": "viajara-con-la-aerolinea",
                            "requirements": [
                                {
                                    "requirement": "Poder Notarial de ambos padres, padre, madre o tutor (seg\u00fan el caso) legal autorizando la salida del menor del pa\u00eds con la aerol\u00ednea, legalizado por procuradur\u00eda o sentencia judicial.",
                                    "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB Sambil"
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula de la o las personas que autorizan",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                                },
                                {
                                    "requirement": "Boleto o reserva del viaje",
                                    "requirement_notes": null
                                }
                            ],
                            "children": [],
                            "histories": [
                                {
                                    "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                                    "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                                    "id": "3"
                                },
                                {
                                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                                    "id": "3.1"
                                },
                                {
                                    "label": "Viajar\u00e1 con un tercero\u00a0",
                                    "slug": "viajara-con-un-tercero",
                                    "id": "3.1.4"
                                },
                                {
                                    "label": "Viajar\u00e1 con la aerol\u00ednea",
                                    "slug": "viajara-con-la-aerolinea",
                                    "id": "3.1.4.1"
                                }
                            ]
                        },
                        {
                            "id": "3.1.4.2",
                            "label": "Viajar\u00e1 con el colegio, centro educativo o instituci\u00f3n cultural",
                            "desc": "Cuando el menor viaja con  una academia, centro educativo o instituci\u00f3n cultural, y cuenta con la autorizaci\u00f3n de los padres, padre, madre o tutor legal",
                            "type": "document",
                            "has_icon": false,
                            "slug": "viajara-con-el-colegio-centro-educativo-o-institucion-cultural",
                            "requirements": [
                                {
                                    "requirement": "Si ambos padres est\u00e1n en el pa\u00eds:\r\n\r\nPresentar un Poder Notarial (individual o conjunto) emitido por los padres, autorizando la salida del menor. Este poder debe estar legalizado por la Procuradur\u00eda General de la Rep\u00fablica\r\n\r\nSi uno o ambos padres est\u00e1n fuera del pa\u00eds:\r\n\r\nPresentar un Poder Consular emitido desde el pa\u00eds donde se encuentren, autorizando la salida del menor.\r\n\r\nSi uno de los padres no est\u00e1 de acuerdo o no est\u00e1 presente en la vida del menor:\r\n\r\nPresentar una Autorizaci\u00f3n Judicial, emitida por un tribunal competente, que permita la salida del menor.",
                                    "requirement_notes": "\u00b7 Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerol\u00ednea. \r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica.\r\n\u00b7 Los padres de todos los menores pueden hacer un solo poder notarial, donde est\u00e9n las firmas de todos los padres que autorizan la salida de los menores."
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                                }
                            ],
                            "children": [],
                            "histories": [
                                {
                                    "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                                    "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                                    "id": "3"
                                },
                                {
                                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                                    "id": "3.1"
                                },
                                {
                                    "label": "Viajar\u00e1 con un tercero\u00a0",
                                    "slug": "viajara-con-un-tercero",
                                    "id": "3.1.4"
                                },
                                {
                                    "label": "Viajar\u00e1 con el colegio, centro educativo o instituci\u00f3n cultural",
                                    "slug": "viajara-con-el-colegio-centro-educativo-o-institucion-cultural",
                                    "id": "3.1.4.2"
                                }
                            ]
                        },
                        {
                            "id": "3.1.4.3",
                            "label": "Viajar\u00e1 con academia, selecci\u00f3n o liga deportiva",
                            "desc": "Cuando el menor viaja con  una academia, selecci\u00f3 o liga deportiva, y cuenta con la autorizaci\u00f3n de ambos padres, padre, madre o tutor legal",
                            "type": "document",
                            "has_icon": false,
                            "slug": "viajara-con-academia-seleccion-o-liga-deportiva",
                            "requirements": [
                                {
                                    "requirement": "Si ambos padres est\u00e1n en el pa\u00eds:\r\n\r\nPresentar un Poder Notarial (individual o conjunto) emitido por los padres, autorizando la salida del menor. Este poder debe estar legalizado por la Procuradur\u00eda General de la Rep\u00fablica.\r\n\r\nSi uno o ambos padres est\u00e1n fuera del pa\u00eds:\r\n\r\nPresentar un Poder Consular emitido desde el pa\u00eds donde se encuentren, autorizando la salida del menor.\r\n\r\nSi uno de los padres no est\u00e1 de acuerdo o no est\u00e1 presente en la vida del menor:\r\n\r\nPresentar una Autorizaci\u00f3n Judicial, emitida por un tribunal competente, que permita la salida del menor.",
                                    "requirement_notes": "\u00b7 Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerol\u00ednea. \r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica.\r\n\u00b7 Los padres de todos los menores pueden hacer un solo poder notarial, donde est\u00e9n las firmas de todos los padres que autorizan la salida de los menores."
                                },
                                {
                                    "requirement": "Carta o comunicaci\u00f3n de la organizaci\u00f3n (Academia, iglesia o liga Deportiva) local especificando el motivo del viaje",
                                    "requirement_notes": "Opcional"
                                },
                                {
                                    "requirement": "Carta de invitaci\u00f3n de la actividad a la que asistira el menor",
                                    "requirement_notes": "Opcional"
                                },
                                {
                                    "requirement": "Fotos o copias de las actas de nacimiento originales del (de los)  menor(es) , con el c\u00f3digo QR legible\u00a0\u00a0",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Fotos o copias de las c\u00e9dulas de identidad de los padres, madres o tutores",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Fotos o copias de la c\u00e9dula de la persona que realiza la solicitud.",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Fotos o copias de las visas / residencias / permisos de estad\u00edas de menores",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante o responsable",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "Fotos o copias de los pasaportes de los menores",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente de cada menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                                }
                            ],
                            "children": [],
                            "histories": [
                                {
                                    "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                                    "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                                    "id": "3"
                                },
                                {
                                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                                    "id": "3.1"
                                },
                                {
                                    "label": "Viajar\u00e1 con un tercero\u00a0",
                                    "slug": "viajara-con-un-tercero",
                                    "id": "3.1.4"
                                },
                                {
                                    "label": "Viajar\u00e1 con academia, selecci\u00f3n o liga deportiva",
                                    "slug": "viajara-con-academia-seleccion-o-liga-deportiva",
                                    "id": "3.1.4.3"
                                }
                            ]
                        },
                        {
                            "id": "3.1.4.4",
                            "label": "Viajar\u00e1 con la persona que posee la guarda legal",
                            "desc": "Cuando el menor viaja con la persona que tiene la guarda legal con autorizaci\u00f3n de viaje ",
                            "type": "document",
                            "has_icon": false,
                            "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
                            "requirements": [
                                {
                                    "requirement": "Poder Notarial de ambos padres, autorizando la salida del menor del pa\u00eds con el guarda custodia (de hecho o legal), legalizado por procuradur\u00eda",
                                    "requirement_notes": "\u00b7 Ambos padres deben firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Fotos o copias de las c\u00e9dulas de identidad del padre y de la madre; o del tutor ",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula del acompa\u00f1ante ( si aplica)",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                                }
                            ],
                            "children": [],
                            "histories": [
                                {
                                    "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                                    "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                                    "id": "3"
                                },
                                {
                                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                                    "id": "3.1"
                                },
                                {
                                    "label": "Viajar\u00e1 con un tercero\u00a0",
                                    "slug": "viajara-con-un-tercero",
                                    "id": "3.1.4"
                                },
                                {
                                    "label": "Viajar\u00e1 con la persona que posee la guarda legal",
                                    "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
                                    "id": "3.1.4.4"
                                }
                            ]
                        },
                        {
                            "id": "3.1.4.5",
                            "label": "El menor tiene solo apellido materno y no viajar\u00e1 con su madre ",
                            "desc": "Cuando el menor ha sido declarado solo por la madre y es ella quien autoriza a otra persona a viajar con el menor",
                            "type": "document",
                            "has_icon": false,
                            "slug": "el-menor-tiene-solo-apellido-materno-y-no-viajara-con-su-madre-",
                            "requirements": [
                                {
                                    "requirement": "Poder Notarial de la madre, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                                    "requirement_notes": "\u00b7 La madre debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula de identidad de la madre ",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula de identidad del acompa\u00f1ante (si aplica)",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                                }
                            ],
                            "children": [],
                            "histories": [
                                {
                                    "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                                    "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                                    "id": "3"
                                },
                                {
                                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                                    "id": "3.1"
                                },
                                {
                                    "label": "Viajar\u00e1 con un tercero\u00a0",
                                    "slug": "viajara-con-un-tercero",
                                    "id": "3.1.4"
                                },
                                {
                                    "label": "El menor tiene solo apellido materno y no viajar\u00e1 con su madre ",
                                    "slug": "el-menor-tiene-solo-apellido-materno-y-no-viajara-con-su-madre-",
                                    "id": "3.1.4.5"
                                }
                            ]
                        },
                        {
                            "id": "3.1.4.6",
                            "label": "Uno de los padres ha fallecido y no viajar\u00e1 con el padre sobreviviente",
                            "desc": "Cuando el menor viaja con la persona que ha autorizado el padre o madre sobreviviente",
                            "type": "document",
                            "has_icon": false,
                            "slug": "uno-de-los-padres-ha-fallecido-y-no-viajara-con-el-padre-sobreviviente",
                            "requirements": [
                                {
                                    "requirement": "Poder Notarial del padre sobreviviente, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                                    "requirement_notes": "\u00b7 El padre sobreviviente debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                                },
                                {
                                    "requirement": "Acta de defunci\u00f3n del padre fallecido  con codigo QR legible",
                                    "requirement_notes": null
                                }
                            ],
                            "children": [],
                            "histories": [
                                {
                                    "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                                    "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                                    "id": "3"
                                },
                                {
                                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                                    "id": "3.1"
                                },
                                {
                                    "label": "Viajar\u00e1 con un tercero\u00a0",
                                    "slug": "viajara-con-un-tercero",
                                    "id": "3.1.4"
                                },
                                {
                                    "label": "Uno de los padres ha fallecido y no viajar\u00e1 con el padre sobreviviente",
                                    "slug": "uno-de-los-padres-ha-fallecido-y-no-viajara-con-el-padre-sobreviviente",
                                    "id": "3.1.4.6"
                                }
                            ]
                        },
                        {
                            "id": "3.1.4.7",
                            "label": "Viajar\u00e1 con una persona autorizada por el tutor legal ",
                            "desc": "Cuando el menor viaja con la persona que ha autorizado el tutor legal",
                            "type": "document",
                            "has_icon": false,
                            "slug": "viajara-con-una-persona-autorizada-por-el-tutor-legal-",
                            "requirements": [
                                {
                                    "requirement": "Poder Notarial del tutor (es) legal, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                                    "requirement_notes": "\u00b7 El tutor legal debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula de identidad de el o los tutores que realizan la solicitud",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                                },
                                {
                                    "requirement": "Sentencia que otorga la tutor\u00eda legal del menor",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "C\u00e9dula del acompa\u00f1ante",
                                    "requirement_notes": null
                                }
                            ],
                            "children": [],
                            "histories": [
                                {
                                    "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                                    "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                                    "id": "3"
                                },
                                {
                                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                                    "id": "3.1"
                                },
                                {
                                    "label": "Viajar\u00e1 con un tercero\u00a0",
                                    "slug": "viajara-con-un-tercero",
                                    "id": "3.1.4"
                                },
                                {
                                    "label": "Viajar\u00e1 con una persona autorizada por el tutor legal ",
                                    "slug": "viajara-con-una-persona-autorizada-por-el-tutor-legal-",
                                    "id": "3.1.4.7"
                                }
                            ]
                        },
                        {
                            "id": "3.1.4.8",
                            "label": "Viajar\u00e1 con abuelos, t\u00edos, amigos u otras personas que no son los padres",
                            "desc": "Cuando el menor viaja con terceros que han sido autorizado los padres o tutores legales",
                            "type": "document",
                            "has_icon": false,
                            "slug": "viajara-con-abuelos-tios-amigos-u-otras-personas-que-no-son-los-padres",
                            "requirements": [
                                {
                                    "requirement": "Poder Notarial de los padres, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                                    "requirement_notes": "\u00b7 Ambos padres deben firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Fotos o copia sde las c\u00e9dulas de identidad de ambos padres o tutor (es) ",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                                },
                                {
                                    "requirement": "C\u00e9dula del acompa\u00f1ante ",
                                    "requirement_notes": null
                                }
                            ],
                            "children": [],
                            "histories": [
                                {
                                    "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                                    "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                                    "id": "3"
                                },
                                {
                                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                                    "id": "3.1"
                                },
                                {
                                    "label": "Viajar\u00e1 con un tercero\u00a0",
                                    "slug": "viajara-con-un-tercero",
                                    "id": "3.1.4"
                                },
                                {
                                    "label": "Viajar\u00e1 con abuelos, t\u00edos, amigos u otras personas que no son los padres",
                                    "slug": "viajara-con-abuelos-tios-amigos-u-otras-personas-que-no-son-los-padres",
                                    "id": "3.1.4.8"
                                }
                            ]
                        },
                        {
                            "id": "3.1.4.9",
                            "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
                            "desc": "Cuando uno de los padres se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor.",
                            "type": "document",
                            "has_icon": false,
                            "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
                            "requirements": [
                                {
                                    "requirement": "Sentencia Judicial que otorga la autorizaci\u00f3n de viaje del menor",
                                    "requirement_notes": "\u00b7 Ir al tribunal de ni\u00f1os, ni\u00f1as y adolescentes\r\n\u00b7 Solicitar la sentencia donde se les otorga la autorizaci\u00f3n de viaje "
                                },
                                {
                                    "requirement": "Poder Notarial del padre que tiene la autorizaci\u00f3n de viaje y no viaja, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                                    "requirement_notes": "\u00b7 El padre debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "C\u00e9dula de identidad del acompa\u00f1ante (si aplica)",
                                    "requirement_notes": "Versi\u00f3n nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                                }
                            ],
                            "children": [],
                            "histories": [
                                {
                                    "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                                    "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                                    "id": "3"
                                },
                                {
                                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                                    "id": "3.1"
                                },
                                {
                                    "label": "Viajar\u00e1 con un tercero\u00a0",
                                    "slug": "viajara-con-un-tercero",
                                    "id": "3.1.4"
                                },
                                {
                                    "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
                                    "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
                                    "id": "3.1.4.9"
                                }
                            ]
                        },
                        {
                            "id": "3.1.4.10",
                            "label": "No veo el caso del menor o tengo dudas para elegir",
                            "desc": "No veo el caso del menor o tengo dudas para elegir",
                            "type": "not_found",
                            "has_icon": false,
                            "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
                            "children": []
                        }
                    ]
                }
            ]
        },
        {
            "id": "3.2",
            "label": "El menor no ha estado m\u00e1s de 6 meses en el pa\u00eds",
            "desc": "Menor es extranjero con residencia en la Rep\u00fablica Dominicana y ha estado menos de seis meses no requiere el Permiso de Salida del Menor",
            "type": "not_required_permission",
            "has_icon": false,
            "slug": "el-menor-no-ha-estado-mas-de-6-meses-en-el-pais",
            "children": [
                {
                    "id": "3.2.1",
                    "label": "No se requiere permiso.",
                    "desc": null,
                    "type": "not_required_permission",
                    "has_icon": false,
                    "slug": "no-se-requiere-permiso.",
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                            "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                            "id": "3"
                        },
                        {
                            "label": "El menor no ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-no-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "3.2"
                        },
                        {
                            "label": "No se requiere permiso.",
                            "slug": "no-se-requiere-permiso.",
                            "id": "3.2.1"
                        }
                    ]
                }
            ],
            "histories": [
                {
                    "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                    "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                    "id": "3"
                },
                {
                    "label": "El menor no ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-no-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "3.2"
                }
            ]
        }
    ],
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais": [
        {
            "id": "3.1.1",
            "label": "Viajar\u00e1 con ambos padres",
            "desc": "Cuando uno de los padres autoriza al otro a viajar con el menor",
            "type": "not_required_permission",
            "has_icon": true,
            "slug": "viajara-con-ambos-padres",
            "children": [],
            "histories": [
                {
                    "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                    "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                    "id": "3"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "3.1"
                },
                {
                    "label": "Viajar\u00e1 con ambos padres",
                    "slug": "viajara-con-ambos-padres",
                    "id": "3.1.1"
                }
            ]
        },
        {
            "id": "3.1.2",
            "label": "Viajar\u00e1 con uno de los padres",
            "desc": "Cuando el menor viaja con la persona que tiene la guarda legal de este",
            "type": null,
            "has_icon": true,
            "slug": "viajara-con-uno-de-los-padres",
            "children": [
                {
                    "id": "3.1.2.1",
                    "label": "Uno de los padres autoriza al otro a viajar",
                    "desc": "Cuando el menor ha sido declarado solo por la madre y es ella quien autoriza a otra persona a viajar con el menor",
                    "type": "document",
                    "has_icon": false,
                    "slug": "uno-de-los-padres-autoriza-al-otro-a-viajar",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial del padre o madre que no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda",
                            "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB "
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                            "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                            "id": "3"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "3.1"
                        },
                        {
                            "label": "Viajar\u00e1 con uno de los padres",
                            "slug": "viajara-con-uno-de-los-padres",
                            "id": "3.1.2"
                        },
                        {
                            "label": "Uno de los padres autoriza al otro a viajar",
                            "slug": "uno-de-los-padres-autoriza-al-otro-a-viajar",
                            "id": "3.1.2.1"
                        }
                    ]
                },
                {
                    "id": "3.1.2.2",
                    "label": "Viajar\u00e1 con la persona que posee la guarda legal",
                    "desc": "Cuando el menor viaja acompa\u00f1ado por su \u00fanico padre o madre que a\u00fan est\u00e1 vivo",
                    "type": "document",
                    "has_icon": false,
                    "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial de los padres, autorizando la salida del menor del pa\u00eds con el guarda, legalizado por procuradur\u00eda",
                            "requirement_notes": "\u00b7 Ambos padres o tutores deben firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                            "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                            "id": "3"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "3.1"
                        },
                        {
                            "label": "Viajar\u00e1 con uno de los padres",
                            "slug": "viajara-con-uno-de-los-padres",
                            "id": "3.1.2"
                        },
                        {
                            "label": "Viajar\u00e1 con la persona que posee la guarda legal",
                            "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
                            "id": "3.1.2.2"
                        }
                    ]
                },
                {
                    "id": "3.1.2.3",
                    "label": "El menor tiene solo apellido materno y viajar\u00e1 con su madre ",
                    "desc": "Cuando el menor adoptado viaja con uno de los padres adoptivos",
                    "type": "not_required_permission",
                    "has_icon": false,
                    "slug": "el-menor-tiene-solo-apellido-materno-y-viajara-con-su-madre-",
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                            "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                            "id": "3"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "3.1"
                        },
                        {
                            "label": "Viajar\u00e1 con uno de los padres",
                            "slug": "viajara-con-uno-de-los-padres",
                            "id": "3.1.2"
                        },
                        {
                            "label": "El menor tiene solo apellido materno y viajar\u00e1 con su madre ",
                            "slug": "el-menor-tiene-solo-apellido-materno-y-viajara-con-su-madre-",
                            "id": "3.1.2.3"
                        }
                    ]
                },
                {
                    "id": "3.1.2.4",
                    "label": "Viajar\u00e1 con uno de sus padres y el otro ha fallecido",
                    "desc": "Cuando el padre o madre que reside en el extranjero autoriza al otro padre o madre que residen en la Rep\u00fablica Dominicana a viajar con el menor",
                    "type": "not_required_permission",
                    "has_icon": false,
                    "slug": "viajara-con-uno-de-sus-padres-y-el-otro-ha-fallecido",
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                            "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                            "id": "3"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "3.1"
                        },
                        {
                            "label": "Viajar\u00e1 con uno de los padres",
                            "slug": "viajara-con-uno-de-los-padres",
                            "id": "3.1.2"
                        },
                        {
                            "label": "Viajar\u00e1 con uno de sus padres y el otro ha fallecido",
                            "slug": "viajara-con-uno-de-sus-padres-y-el-otro-ha-fallecido",
                            "id": "3.1.2.4"
                        }
                    ]
                },
                {
                    "id": "3.1.2.5",
                    "label": "El menor fue adoptado por personas extranjeras y viaja por primera vez",
                    "desc": "Cuando el menor viaja con la persona que tiene la guarda legal con autorizaci\u00f3n de viaje",
                    "type": "document",
                    "has_icon": false,
                    "slug": "el-menor-fue-adoptado-por-personas-extranjeras-y-viaja-por-primera-vez",
                    "requirements": [
                        {
                            "requirement": "Sentencia del tribunal  de ni\u00f1os, ni\u00f1as y adolescentes que evidencie la adopci\u00f3n",
                            "requirement_notes": "\u00b7 Ir al tribunal de ni\u00f1os, ni\u00f1as y adolescentes\r\n\u00b7 Solicitar la sentencia donde se les otorga la adopci\u00f3n, original y certificada. "
                        },
                        {
                            "requirement": "Poder Notarial del padre que tiene la patria potestad y no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda. ",
                            "requirement_notes": "\u00b7 El padre debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula o pasaporte del otro padre que autoriza",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del otro padre adoptivo que viaja con el menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                            "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                            "id": "3"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "3.1"
                        },
                        {
                            "label": "Viajar\u00e1 con uno de los padres",
                            "slug": "viajara-con-uno-de-los-padres",
                            "id": "3.1.2"
                        },
                        {
                            "label": "El menor fue adoptado por personas extranjeras y viaja por primera vez",
                            "slug": "el-menor-fue-adoptado-por-personas-extranjeras-y-viaja-por-primera-vez",
                            "id": "3.1.2.5"
                        }
                    ]
                },
                {
                    "id": "3.1.2.6",
                    "label": "Uno de los padres vive en el extranjero y autoriza el viaje",
                    "desc": "Cuando uno de los padres autoriza al otro a viajar con el menor para participar en actividad cultural, escolar, religiosa, deportiva u otra.",
                    "type": "document",
                    "has_icon": false,
                    "slug": "uno-de-los-padres-vive-en-el-extranjero-y-autoriza-el-viaje",
                    "requirements": [
                        {
                            "requirement": "Poder consular otorgado en el pa\u00eds en donde se encuentra el padre (debe ser apostillado y sellado en cancilleria) o Poder Notarial legalizado del pa\u00eds donde se encuentre el padre en  original con apostilla de la Haya",
                            "requirement_notes": "\u00b7 El padre en el extranjero debe firmar el poder consular (en el consulado m\u00e1s cercana) autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en el Ministerio de Relaciones Exteriores de la Rep\u00fablica Dominicana."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                            "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                            "id": "3"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "3.1"
                        },
                        {
                            "label": "Viajar\u00e1 con uno de los padres",
                            "slug": "viajara-con-uno-de-los-padres",
                            "id": "3.1.2"
                        },
                        {
                            "label": "Uno de los padres vive en el extranjero y autoriza el viaje",
                            "slug": "uno-de-los-padres-vive-en-el-extranjero-y-autoriza-el-viaje",
                            "id": "3.1.2.6"
                        }
                    ]
                },
                {
                    "id": "3.1.2.7",
                    "label": "Tiene autorizaci\u00f3n de viaje del menor\u00a0del tribunal Ni\u00f1os, Ni\u00f1as y Adolescentes",
                    "desc": "Cuando uno de los padres se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor.",
                    "type": "document",
                    "has_icon": false,
                    "slug": "tiene-autorizacion-de-viaje-del-menordel-tribunal-ninos-ninas-y-adolescentes",
                    "requirements": [
                        {
                            "requirement": "Autorizaci\u00f3n judicial (sentencia, auto o resoluci\u00f3n) que autoriza el viaje del Menor",
                            "requirement_notes": "\u00b7 Ir al tribunal de ni\u00f1os, ni\u00f1as y adolescentes\r\n\u00b7 Solicitar la sentencia donde se les otorga la Guarda Legal y Autorizaci\u00f3n de viaje del menor"
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                            "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                            "id": "3"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "3.1"
                        },
                        {
                            "label": "Viajar\u00e1 con uno de los padres",
                            "slug": "viajara-con-uno-de-los-padres",
                            "id": "3.1.2"
                        },
                        {
                            "label": "Tiene autorizaci\u00f3n de viaje del menor\u00a0del tribunal Ni\u00f1os, Ni\u00f1as y Adolescentes",
                            "slug": "tiene-autorizacion-de-viaje-del-menordel-tribunal-ninos-ninas-y-adolescentes",
                            "id": "3.1.2.7"
                        }
                    ]
                },
                {
                    "id": "3.1.2.8",
                    "label": "Viajar\u00e1 a una actividad cultural, escolar, religiosa, deportiva u otra",
                    "desc": "No veo el caso del menor o tengo dudas para elegir",
                    "type": "document",
                    "has_icon": false,
                    "slug": "viajara-a-una-actividad-cultural-escolar-religiosa-deportiva-u-otra",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial del padre que no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda",
                            "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB Sambil"
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                            "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                            "id": "3"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "3.1"
                        },
                        {
                            "label": "Viajar\u00e1 con uno de los padres",
                            "slug": "viajara-con-uno-de-los-padres",
                            "id": "3.1.2"
                        },
                        {
                            "label": "Viajar\u00e1 a una actividad cultural, escolar, religiosa, deportiva u otra",
                            "slug": "viajara-a-una-actividad-cultural-escolar-religiosa-deportiva-u-otra",
                            "id": "3.1.2.8"
                        }
                    ]
                },
                {
                    "id": "3.1.2.9",
                    "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
                    "desc": null,
                    "type": "document",
                    "has_icon": false,
                    "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
                    "requirements": [
                        {
                            "requirement": "Sentencia judicial que autoriza el viaje del Menor o sentencia judical que otorga la autoridad parental unilateral al padre que viaja",
                            "requirement_notes": "\u00b7 Ir al tribunal de ni\u00f1os, ni\u00f1as y adolescentes\r\n\u00b7 Solicitar la sentencia donde se les otorga la patria potestad "
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o  madre que realiza la solicitud",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del padre acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del padre acompa\u00f1ante",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                            "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                            "id": "3"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "3.1"
                        },
                        {
                            "label": "Viajar\u00e1 con uno de los padres",
                            "slug": "viajara-con-uno-de-los-padres",
                            "id": "3.1.2"
                        },
                        {
                            "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
                            "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
                            "id": "3.1.2.9"
                        }
                    ]
                },
                {
                    "id": "3.1.2.10",
                    "label": "No veo el caso del menor o tengo dudas para elegir",
                    "desc": null,
                    "type": "not_found",
                    "has_icon": false,
                    "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
                    "children": []
                }
            ]
        },
        {
            "id": "3.1.3",
            "label": "Viajar\u00e1 con su tutor legal / tutores legales",
            "desc": null,
            "type": null,
            "has_icon": true,
            "slug": "viajara-con-su-tutor-legal---tutores-legales",
            "children": [
                {
                    "id": "3.1.3.1",
                    "label": "El menor viajar\u00e1 con el tutor legal y el otro tutor autoriza",
                    "desc": null,
                    "type": "document",
                    "has_icon": false,
                    "slug": "el-menor-viajara-con-el-tutor-legal-y-el-otro-tutor-autoriza",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial del padre o madre que no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda. ",
                            "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB "
                        },
                        {
                            "requirement": "Sentencia judicial que otorga la tutor\u00eda legal sobre el/los menor/es",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                            "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                            "id": "3"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "3.1"
                        },
                        {
                            "label": "Viajar\u00e1 con su tutor legal / tutores legales",
                            "slug": "viajara-con-su-tutor-legal---tutores-legales",
                            "id": "3.1.3"
                        },
                        {
                            "label": "El menor viajar\u00e1 con el tutor legal y el otro tutor autoriza",
                            "slug": "el-menor-viajara-con-el-tutor-legal-y-el-otro-tutor-autoriza",
                            "id": "3.1.3.1"
                        }
                    ]
                },
                {
                    "id": "3.1.3.2",
                    "label": "El menor tiene un solo tutor legal y viajar\u00e1 con \u00e9l",
                    "desc": null,
                    "type": "not_required_permission",
                    "has_icon": false,
                    "slug": "el-menor-tiene-un-solo-tutor-legal-y-viajara-con-el",
                    "requirements": [
                        {
                            "requirement": "No requiere el permiso, pero debe mostrar en Control Migratorio la sentencia que muestra la tutor\u00eda legal \u00fanica sobre el/los menor/es",
                            "requirement_notes": null
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                            "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                            "id": "3"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "3.1"
                        },
                        {
                            "label": "Viajar\u00e1 con su tutor legal / tutores legales",
                            "slug": "viajara-con-su-tutor-legal---tutores-legales",
                            "id": "3.1.3"
                        },
                        {
                            "label": "El menor tiene un solo tutor legal y viajar\u00e1 con \u00e9l",
                            "slug": "el-menor-tiene-un-solo-tutor-legal-y-viajara-con-el",
                            "id": "3.1.3.2"
                        }
                    ]
                },
                {
                    "id": "3.1.3.3",
                    "label": "El menor viajar\u00e1 con ambos tutores legales",
                    "desc": null,
                    "type": "not_required_permission",
                    "has_icon": false,
                    "slug": "el-menor-viajara-con-ambos-tutores-legales",
                    "requirements": [
                        {
                            "requirement": "Presentar la sentencia que otorga la tutor\u00eda legal de/los menor/es",
                            "requirement_notes": "No requiere presentar PSM en Control Migratorio"
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                            "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                            "id": "3"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "3.1"
                        },
                        {
                            "label": "Viajar\u00e1 con su tutor legal / tutores legales",
                            "slug": "viajara-con-su-tutor-legal---tutores-legales",
                            "id": "3.1.3"
                        },
                        {
                            "label": "El menor viajar\u00e1 con ambos tutores legales",
                            "slug": "el-menor-viajara-con-ambos-tutores-legales",
                            "id": "3.1.3.3"
                        }
                    ]
                },
                {
                    "id": "3.1.3.4",
                    "label": "No veo el caso del menor o tengo dudas para elegir",
                    "desc": null,
                    "type": "not_found",
                    "has_icon": false,
                    "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
                    "children": []
                }
            ]
        },
        {
            "id": "3.1.4",
            "label": "Viajar\u00e1 con un tercero\u00a0",
            "desc": null,
            "type": null,
            "has_icon": true,
            "slug": "viajara-con-un-tercero",
            "children": [
                {
                    "id": "3.1.4.1",
                    "label": "Viajar\u00e1 con la aerol\u00ednea",
                    "desc": "Cuando el menor viaja con la Aerol\u00ednea y cuenta con la autorizaci\u00f3n de ambos padres, padre, madre o tutor legal",
                    "type": "document",
                    "has_icon": false,
                    "slug": "viajara-con-la-aerolinea",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial de ambos padres, padre, madre o tutor (seg\u00fan el caso) legal autorizando la salida del menor del pa\u00eds con la aerol\u00ednea, legalizado por procuradur\u00eda o sentencia judicial.",
                            "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB Sambil"
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de la o las personas que autorizan",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                        },
                        {
                            "requirement": "Boleto o reserva del viaje",
                            "requirement_notes": null
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                            "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                            "id": "3"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "3.1"
                        },
                        {
                            "label": "Viajar\u00e1 con un tercero\u00a0",
                            "slug": "viajara-con-un-tercero",
                            "id": "3.1.4"
                        },
                        {
                            "label": "Viajar\u00e1 con la aerol\u00ednea",
                            "slug": "viajara-con-la-aerolinea",
                            "id": "3.1.4.1"
                        }
                    ]
                },
                {
                    "id": "3.1.4.2",
                    "label": "Viajar\u00e1 con el colegio, centro educativo o instituci\u00f3n cultural",
                    "desc": "Cuando el menor viaja con  una academia, centro educativo o instituci\u00f3n cultural, y cuenta con la autorizaci\u00f3n de los padres, padre, madre o tutor legal",
                    "type": "document",
                    "has_icon": false,
                    "slug": "viajara-con-el-colegio-centro-educativo-o-institucion-cultural",
                    "requirements": [
                        {
                            "requirement": "Si ambos padres est\u00e1n en el pa\u00eds:\r\n\r\nPresentar un Poder Notarial (individual o conjunto) emitido por los padres, autorizando la salida del menor. Este poder debe estar legalizado por la Procuradur\u00eda General de la Rep\u00fablica\r\n\r\nSi uno o ambos padres est\u00e1n fuera del pa\u00eds:\r\n\r\nPresentar un Poder Consular emitido desde el pa\u00eds donde se encuentren, autorizando la salida del menor.\r\n\r\nSi uno de los padres no est\u00e1 de acuerdo o no est\u00e1 presente en la vida del menor:\r\n\r\nPresentar una Autorizaci\u00f3n Judicial, emitida por un tribunal competente, que permita la salida del menor.",
                            "requirement_notes": "\u00b7 Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerol\u00ednea. \r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica.\r\n\u00b7 Los padres de todos los menores pueden hacer un solo poder notarial, donde est\u00e9n las firmas de todos los padres que autorizan la salida de los menores."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                            "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                            "id": "3"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "3.1"
                        },
                        {
                            "label": "Viajar\u00e1 con un tercero\u00a0",
                            "slug": "viajara-con-un-tercero",
                            "id": "3.1.4"
                        },
                        {
                            "label": "Viajar\u00e1 con el colegio, centro educativo o instituci\u00f3n cultural",
                            "slug": "viajara-con-el-colegio-centro-educativo-o-institucion-cultural",
                            "id": "3.1.4.2"
                        }
                    ]
                },
                {
                    "id": "3.1.4.3",
                    "label": "Viajar\u00e1 con academia, selecci\u00f3n o liga deportiva",
                    "desc": "Cuando el menor viaja con  una academia, selecci\u00f3 o liga deportiva, y cuenta con la autorizaci\u00f3n de ambos padres, padre, madre o tutor legal",
                    "type": "document",
                    "has_icon": false,
                    "slug": "viajara-con-academia-seleccion-o-liga-deportiva",
                    "requirements": [
                        {
                            "requirement": "Si ambos padres est\u00e1n en el pa\u00eds:\r\n\r\nPresentar un Poder Notarial (individual o conjunto) emitido por los padres, autorizando la salida del menor. Este poder debe estar legalizado por la Procuradur\u00eda General de la Rep\u00fablica.\r\n\r\nSi uno o ambos padres est\u00e1n fuera del pa\u00eds:\r\n\r\nPresentar un Poder Consular emitido desde el pa\u00eds donde se encuentren, autorizando la salida del menor.\r\n\r\nSi uno de los padres no est\u00e1 de acuerdo o no est\u00e1 presente en la vida del menor:\r\n\r\nPresentar una Autorizaci\u00f3n Judicial, emitida por un tribunal competente, que permita la salida del menor.",
                            "requirement_notes": "\u00b7 Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerol\u00ednea. \r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica.\r\n\u00b7 Los padres de todos los menores pueden hacer un solo poder notarial, donde est\u00e9n las firmas de todos los padres que autorizan la salida de los menores."
                        },
                        {
                            "requirement": "Carta o comunicaci\u00f3n de la organizaci\u00f3n (Academia, iglesia o liga Deportiva) local especificando el motivo del viaje",
                            "requirement_notes": "Opcional"
                        },
                        {
                            "requirement": "Carta de invitaci\u00f3n de la actividad a la que asistira el menor",
                            "requirement_notes": "Opcional"
                        },
                        {
                            "requirement": "Fotos o copias de las actas de nacimiento originales del (de los)  menor(es) , con el c\u00f3digo QR legible\u00a0\u00a0",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Fotos o copias de las c\u00e9dulas de identidad de los padres, madres o tutores",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Fotos o copias de la c\u00e9dula de la persona que realiza la solicitud.",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Fotos o copias de las visas / residencias / permisos de estad\u00edas de menores",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompa\u00f1ante o responsable",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "Fotos o copias de los pasaportes de los menores",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente de cada menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                            "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                            "id": "3"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "3.1"
                        },
                        {
                            "label": "Viajar\u00e1 con un tercero\u00a0",
                            "slug": "viajara-con-un-tercero",
                            "id": "3.1.4"
                        },
                        {
                            "label": "Viajar\u00e1 con academia, selecci\u00f3n o liga deportiva",
                            "slug": "viajara-con-academia-seleccion-o-liga-deportiva",
                            "id": "3.1.4.3"
                        }
                    ]
                },
                {
                    "id": "3.1.4.4",
                    "label": "Viajar\u00e1 con la persona que posee la guarda legal",
                    "desc": "Cuando el menor viaja con la persona que tiene la guarda legal con autorizaci\u00f3n de viaje ",
                    "type": "document",
                    "has_icon": false,
                    "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial de ambos padres, autorizando la salida del menor del pa\u00eds con el guarda custodia (de hecho o legal), legalizado por procuradur\u00eda",
                            "requirement_notes": "\u00b7 Ambos padres deben firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Fotos o copias de las c\u00e9dulas de identidad del padre y de la madre; o del tutor ",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula del acompa\u00f1ante ( si aplica)",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                            "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                            "id": "3"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "3.1"
                        },
                        {
                            "label": "Viajar\u00e1 con un tercero\u00a0",
                            "slug": "viajara-con-un-tercero",
                            "id": "3.1.4"
                        },
                        {
                            "label": "Viajar\u00e1 con la persona que posee la guarda legal",
                            "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
                            "id": "3.1.4.4"
                        }
                    ]
                },
                {
                    "id": "3.1.4.5",
                    "label": "El menor tiene solo apellido materno y no viajar\u00e1 con su madre ",
                    "desc": "Cuando el menor ha sido declarado solo por la madre y es ella quien autoriza a otra persona a viajar con el menor",
                    "type": "document",
                    "has_icon": false,
                    "slug": "el-menor-tiene-solo-apellido-materno-y-no-viajara-con-su-madre-",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial de la madre, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                            "requirement_notes": "\u00b7 La madre debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de identidad de la madre ",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de identidad del acompa\u00f1ante (si aplica)",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                            "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                            "id": "3"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "3.1"
                        },
                        {
                            "label": "Viajar\u00e1 con un tercero\u00a0",
                            "slug": "viajara-con-un-tercero",
                            "id": "3.1.4"
                        },
                        {
                            "label": "El menor tiene solo apellido materno y no viajar\u00e1 con su madre ",
                            "slug": "el-menor-tiene-solo-apellido-materno-y-no-viajara-con-su-madre-",
                            "id": "3.1.4.5"
                        }
                    ]
                },
                {
                    "id": "3.1.4.6",
                    "label": "Uno de los padres ha fallecido y no viajar\u00e1 con el padre sobreviviente",
                    "desc": "Cuando el menor viaja con la persona que ha autorizado el padre o madre sobreviviente",
                    "type": "document",
                    "has_icon": false,
                    "slug": "uno-de-los-padres-ha-fallecido-y-no-viajara-con-el-padre-sobreviviente",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial del padre sobreviviente, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                            "requirement_notes": "\u00b7 El padre sobreviviente debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                        },
                        {
                            "requirement": "Acta de defunci\u00f3n del padre fallecido  con codigo QR legible",
                            "requirement_notes": null
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                            "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                            "id": "3"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "3.1"
                        },
                        {
                            "label": "Viajar\u00e1 con un tercero\u00a0",
                            "slug": "viajara-con-un-tercero",
                            "id": "3.1.4"
                        },
                        {
                            "label": "Uno de los padres ha fallecido y no viajar\u00e1 con el padre sobreviviente",
                            "slug": "uno-de-los-padres-ha-fallecido-y-no-viajara-con-el-padre-sobreviviente",
                            "id": "3.1.4.6"
                        }
                    ]
                },
                {
                    "id": "3.1.4.7",
                    "label": "Viajar\u00e1 con una persona autorizada por el tutor legal ",
                    "desc": "Cuando el menor viaja con la persona que ha autorizado el tutor legal",
                    "type": "document",
                    "has_icon": false,
                    "slug": "viajara-con-una-persona-autorizada-por-el-tutor-legal-",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial del tutor (es) legal, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                            "requirement_notes": "\u00b7 El tutor legal debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de identidad de el o los tutores que realizan la solicitud",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                        },
                        {
                            "requirement": "Sentencia que otorga la tutor\u00eda legal del menor",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "C\u00e9dula del acompa\u00f1ante",
                            "requirement_notes": null
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                            "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                            "id": "3"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "3.1"
                        },
                        {
                            "label": "Viajar\u00e1 con un tercero\u00a0",
                            "slug": "viajara-con-un-tercero",
                            "id": "3.1.4"
                        },
                        {
                            "label": "Viajar\u00e1 con una persona autorizada por el tutor legal ",
                            "slug": "viajara-con-una-persona-autorizada-por-el-tutor-legal-",
                            "id": "3.1.4.7"
                        }
                    ]
                },
                {
                    "id": "3.1.4.8",
                    "label": "Viajar\u00e1 con abuelos, t\u00edos, amigos u otras personas que no son los padres",
                    "desc": "Cuando el menor viaja con terceros que han sido autorizado los padres o tutores legales",
                    "type": "document",
                    "has_icon": false,
                    "slug": "viajara-con-abuelos-tios-amigos-u-otras-personas-que-no-son-los-padres",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial de los padres, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                            "requirement_notes": "\u00b7 Ambos padres deben firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Fotos o copia sde las c\u00e9dulas de identidad de ambos padres o tutor (es) ",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        },
                        {
                            "requirement": "C\u00e9dula del acompa\u00f1ante ",
                            "requirement_notes": null
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                            "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                            "id": "3"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "3.1"
                        },
                        {
                            "label": "Viajar\u00e1 con un tercero\u00a0",
                            "slug": "viajara-con-un-tercero",
                            "id": "3.1.4"
                        },
                        {
                            "label": "Viajar\u00e1 con abuelos, t\u00edos, amigos u otras personas que no son los padres",
                            "slug": "viajara-con-abuelos-tios-amigos-u-otras-personas-que-no-son-los-padres",
                            "id": "3.1.4.8"
                        }
                    ]
                },
                {
                    "id": "3.1.4.9",
                    "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
                    "desc": "Cuando uno de los padres se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor.",
                    "type": "document",
                    "has_icon": false,
                    "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
                    "requirements": [
                        {
                            "requirement": "Sentencia Judicial que otorga la autorizaci\u00f3n de viaje del menor",
                            "requirement_notes": "\u00b7 Ir al tribunal de ni\u00f1os, ni\u00f1as y adolescentes\r\n\u00b7 Solicitar la sentencia donde se les otorga la autorizaci\u00f3n de viaje "
                        },
                        {
                            "requirement": "Poder Notarial del padre que tiene la autorizaci\u00f3n de viaje y no viaja, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                            "requirement_notes": "\u00b7 El padre debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "C\u00e9dula de identidad del acompa\u00f1ante (si aplica)",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                            "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                            "id": "3"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "3.1"
                        },
                        {
                            "label": "Viajar\u00e1 con un tercero\u00a0",
                            "slug": "viajara-con-un-tercero",
                            "id": "3.1.4"
                        },
                        {
                            "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
                            "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
                            "id": "3.1.4.9"
                        }
                    ]
                },
                {
                    "id": "3.1.4.10",
                    "label": "No veo el caso del menor o tengo dudas para elegir",
                    "desc": "No veo el caso del menor o tengo dudas para elegir",
                    "type": "not_found",
                    "has_icon": false,
                    "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
                    "children": []
                }
            ]
        }
    ],
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-ambos-padres": {
        "id": "3.1.1",
        "label": "Viajar\u00e1 con ambos padres",
        "desc": "Cuando uno de los padres autoriza al otro a viajar con el menor",
        "type": "not_required_permission",
        "has_icon": true,
        "slug": "viajara-con-ambos-padres",
        "children": [],
        "histories": [
            {
                "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                "id": "3"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "3.1"
            },
            {
                "label": "Viajar\u00e1 con ambos padres",
                "slug": "viajara-con-ambos-padres",
                "id": "3.1.1"
            }
        ]
    },
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres": [
        {
            "id": "3.1.2.1",
            "label": "Uno de los padres autoriza al otro a viajar",
            "desc": "Cuando el menor ha sido declarado solo por la madre y es ella quien autoriza a otra persona a viajar con el menor",
            "type": "document",
            "has_icon": false,
            "slug": "uno-de-los-padres-autoriza-al-otro-a-viajar",
            "requirements": [
                {
                    "requirement": "Poder Notarial del padre o madre que no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda",
                    "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB "
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                    "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                    "id": "3"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "3.1"
                },
                {
                    "label": "Viajar\u00e1 con uno de los padres",
                    "slug": "viajara-con-uno-de-los-padres",
                    "id": "3.1.2"
                },
                {
                    "label": "Uno de los padres autoriza al otro a viajar",
                    "slug": "uno-de-los-padres-autoriza-al-otro-a-viajar",
                    "id": "3.1.2.1"
                }
            ]
        },
        {
            "id": "3.1.2.2",
            "label": "Viajar\u00e1 con la persona que posee la guarda legal",
            "desc": "Cuando el menor viaja acompa\u00f1ado por su \u00fanico padre o madre que a\u00fan est\u00e1 vivo",
            "type": "document",
            "has_icon": false,
            "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
            "requirements": [
                {
                    "requirement": "Poder Notarial de los padres, autorizando la salida del menor del pa\u00eds con el guarda, legalizado por procuradur\u00eda",
                    "requirement_notes": "\u00b7 Ambos padres o tutores deben firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                    "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                    "id": "3"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "3.1"
                },
                {
                    "label": "Viajar\u00e1 con uno de los padres",
                    "slug": "viajara-con-uno-de-los-padres",
                    "id": "3.1.2"
                },
                {
                    "label": "Viajar\u00e1 con la persona que posee la guarda legal",
                    "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
                    "id": "3.1.2.2"
                }
            ]
        },
        {
            "id": "3.1.2.3",
            "label": "El menor tiene solo apellido materno y viajar\u00e1 con su madre ",
            "desc": "Cuando el menor adoptado viaja con uno de los padres adoptivos",
            "type": "not_required_permission",
            "has_icon": false,
            "slug": "el-menor-tiene-solo-apellido-materno-y-viajara-con-su-madre-",
            "children": [],
            "histories": [
                {
                    "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                    "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                    "id": "3"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "3.1"
                },
                {
                    "label": "Viajar\u00e1 con uno de los padres",
                    "slug": "viajara-con-uno-de-los-padres",
                    "id": "3.1.2"
                },
                {
                    "label": "El menor tiene solo apellido materno y viajar\u00e1 con su madre ",
                    "slug": "el-menor-tiene-solo-apellido-materno-y-viajara-con-su-madre-",
                    "id": "3.1.2.3"
                }
            ]
        },
        {
            "id": "3.1.2.4",
            "label": "Viajar\u00e1 con uno de sus padres y el otro ha fallecido",
            "desc": "Cuando el padre o madre que reside en el extranjero autoriza al otro padre o madre que residen en la Rep\u00fablica Dominicana a viajar con el menor",
            "type": "not_required_permission",
            "has_icon": false,
            "slug": "viajara-con-uno-de-sus-padres-y-el-otro-ha-fallecido",
            "children": [],
            "histories": [
                {
                    "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                    "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                    "id": "3"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "3.1"
                },
                {
                    "label": "Viajar\u00e1 con uno de los padres",
                    "slug": "viajara-con-uno-de-los-padres",
                    "id": "3.1.2"
                },
                {
                    "label": "Viajar\u00e1 con uno de sus padres y el otro ha fallecido",
                    "slug": "viajara-con-uno-de-sus-padres-y-el-otro-ha-fallecido",
                    "id": "3.1.2.4"
                }
            ]
        },
        {
            "id": "3.1.2.5",
            "label": "El menor fue adoptado por personas extranjeras y viaja por primera vez",
            "desc": "Cuando el menor viaja con la persona que tiene la guarda legal con autorizaci\u00f3n de viaje",
            "type": "document",
            "has_icon": false,
            "slug": "el-menor-fue-adoptado-por-personas-extranjeras-y-viaja-por-primera-vez",
            "requirements": [
                {
                    "requirement": "Sentencia del tribunal  de ni\u00f1os, ni\u00f1as y adolescentes que evidencie la adopci\u00f3n",
                    "requirement_notes": "\u00b7 Ir al tribunal de ni\u00f1os, ni\u00f1as y adolescentes\r\n\u00b7 Solicitar la sentencia donde se les otorga la adopci\u00f3n, original y certificada. "
                },
                {
                    "requirement": "Poder Notarial del padre que tiene la patria potestad y no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda. ",
                    "requirement_notes": "\u00b7 El padre debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula o pasaporte del otro padre que autoriza",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del otro padre adoptivo que viaja con el menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                    "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                    "id": "3"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "3.1"
                },
                {
                    "label": "Viajar\u00e1 con uno de los padres",
                    "slug": "viajara-con-uno-de-los-padres",
                    "id": "3.1.2"
                },
                {
                    "label": "El menor fue adoptado por personas extranjeras y viaja por primera vez",
                    "slug": "el-menor-fue-adoptado-por-personas-extranjeras-y-viaja-por-primera-vez",
                    "id": "3.1.2.5"
                }
            ]
        },
        {
            "id": "3.1.2.6",
            "label": "Uno de los padres vive en el extranjero y autoriza el viaje",
            "desc": "Cuando uno de los padres autoriza al otro a viajar con el menor para participar en actividad cultural, escolar, religiosa, deportiva u otra.",
            "type": "document",
            "has_icon": false,
            "slug": "uno-de-los-padres-vive-en-el-extranjero-y-autoriza-el-viaje",
            "requirements": [
                {
                    "requirement": "Poder consular otorgado en el pa\u00eds en donde se encuentra el padre (debe ser apostillado y sellado en cancilleria) o Poder Notarial legalizado del pa\u00eds donde se encuentre el padre en  original con apostilla de la Haya",
                    "requirement_notes": "\u00b7 El padre en el extranjero debe firmar el poder consular (en el consulado m\u00e1s cercana) autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en el Ministerio de Relaciones Exteriores de la Rep\u00fablica Dominicana."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                    "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                    "id": "3"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "3.1"
                },
                {
                    "label": "Viajar\u00e1 con uno de los padres",
                    "slug": "viajara-con-uno-de-los-padres",
                    "id": "3.1.2"
                },
                {
                    "label": "Uno de los padres vive en el extranjero y autoriza el viaje",
                    "slug": "uno-de-los-padres-vive-en-el-extranjero-y-autoriza-el-viaje",
                    "id": "3.1.2.6"
                }
            ]
        },
        {
            "id": "3.1.2.7",
            "label": "Tiene autorizaci\u00f3n de viaje del menor\u00a0del tribunal Ni\u00f1os, Ni\u00f1as y Adolescentes",
            "desc": "Cuando uno de los padres se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor.",
            "type": "document",
            "has_icon": false,
            "slug": "tiene-autorizacion-de-viaje-del-menordel-tribunal-ninos-ninas-y-adolescentes",
            "requirements": [
                {
                    "requirement": "Autorizaci\u00f3n judicial (sentencia, auto o resoluci\u00f3n) que autoriza el viaje del Menor",
                    "requirement_notes": "\u00b7 Ir al tribunal de ni\u00f1os, ni\u00f1as y adolescentes\r\n\u00b7 Solicitar la sentencia donde se les otorga la Guarda Legal y Autorizaci\u00f3n de viaje del menor"
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                    "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                    "id": "3"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "3.1"
                },
                {
                    "label": "Viajar\u00e1 con uno de los padres",
                    "slug": "viajara-con-uno-de-los-padres",
                    "id": "3.1.2"
                },
                {
                    "label": "Tiene autorizaci\u00f3n de viaje del menor\u00a0del tribunal Ni\u00f1os, Ni\u00f1as y Adolescentes",
                    "slug": "tiene-autorizacion-de-viaje-del-menordel-tribunal-ninos-ninas-y-adolescentes",
                    "id": "3.1.2.7"
                }
            ]
        },
        {
            "id": "3.1.2.8",
            "label": "Viajar\u00e1 a una actividad cultural, escolar, religiosa, deportiva u otra",
            "desc": "No veo el caso del menor o tengo dudas para elegir",
            "type": "document",
            "has_icon": false,
            "slug": "viajara-a-una-actividad-cultural-escolar-religiosa-deportiva-u-otra",
            "requirements": [
                {
                    "requirement": "Poder Notarial del padre que no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda",
                    "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB Sambil"
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                    "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                    "id": "3"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "3.1"
                },
                {
                    "label": "Viajar\u00e1 con uno de los padres",
                    "slug": "viajara-con-uno-de-los-padres",
                    "id": "3.1.2"
                },
                {
                    "label": "Viajar\u00e1 a una actividad cultural, escolar, religiosa, deportiva u otra",
                    "slug": "viajara-a-una-actividad-cultural-escolar-religiosa-deportiva-u-otra",
                    "id": "3.1.2.8"
                }
            ]
        },
        {
            "id": "3.1.2.9",
            "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
            "desc": null,
            "type": "document",
            "has_icon": false,
            "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
            "requirements": [
                {
                    "requirement": "Sentencia judicial que autoriza el viaje del Menor o sentencia judical que otorga la autoridad parental unilateral al padre que viaja",
                    "requirement_notes": "\u00b7 Ir al tribunal de ni\u00f1os, ni\u00f1as y adolescentes\r\n\u00b7 Solicitar la sentencia donde se les otorga la patria potestad "
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o  madre que realiza la solicitud",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del padre acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del padre acompa\u00f1ante",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                    "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                    "id": "3"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "3.1"
                },
                {
                    "label": "Viajar\u00e1 con uno de los padres",
                    "slug": "viajara-con-uno-de-los-padres",
                    "id": "3.1.2"
                },
                {
                    "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
                    "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
                    "id": "3.1.2.9"
                }
            ]
        },
        {
            "id": "3.1.2.10",
            "label": "No veo el caso del menor o tengo dudas para elegir",
            "desc": null,
            "type": "not_found",
            "has_icon": false,
            "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
            "children": []
        }
    ],
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres/uno-de-los-padres-autoriza-al-otro-a-viajar": {
        "id": "3.1.2.1",
        "label": "Uno de los padres autoriza al otro a viajar",
        "desc": "Cuando el menor ha sido declarado solo por la madre y es ella quien autoriza a otra persona a viajar con el menor",
        "type": "document",
        "has_icon": false,
        "slug": "uno-de-los-padres-autoriza-al-otro-a-viajar",
        "requirements": [
            {
                "requirement": "Poder Notarial del padre o madre que no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda",
                "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB "
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                "id": "3"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "3.1"
            },
            {
                "label": "Viajar\u00e1 con uno de los padres",
                "slug": "viajara-con-uno-de-los-padres",
                "id": "3.1.2"
            },
            {
                "label": "Uno de los padres autoriza al otro a viajar",
                "slug": "uno-de-los-padres-autoriza-al-otro-a-viajar",
                "id": "3.1.2.1"
            }
        ]
    },
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres/viajara-con-la-persona-que-posee-la-guarda-legal": {
        "id": "3.1.2.2",
        "label": "Viajar\u00e1 con la persona que posee la guarda legal",
        "desc": "Cuando el menor viaja acompa\u00f1ado por su \u00fanico padre o madre que a\u00fan est\u00e1 vivo",
        "type": "document",
        "has_icon": false,
        "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
        "requirements": [
            {
                "requirement": "Poder Notarial de los padres, autorizando la salida del menor del pa\u00eds con el guarda, legalizado por procuradur\u00eda",
                "requirement_notes": "\u00b7 Ambos padres o tutores deben firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                "id": "3"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "3.1"
            },
            {
                "label": "Viajar\u00e1 con uno de los padres",
                "slug": "viajara-con-uno-de-los-padres",
                "id": "3.1.2"
            },
            {
                "label": "Viajar\u00e1 con la persona que posee la guarda legal",
                "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
                "id": "3.1.2.2"
            }
        ]
    },
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres/el-menor-tiene-solo-apellido-materno-y-viajara-con-su-madre-": {
        "id": "3.1.2.3",
        "label": "El menor tiene solo apellido materno y viajar\u00e1 con su madre ",
        "desc": "Cuando el menor adoptado viaja con uno de los padres adoptivos",
        "type": "not_required_permission",
        "has_icon": false,
        "slug": "el-menor-tiene-solo-apellido-materno-y-viajara-con-su-madre-",
        "children": [],
        "histories": [
            {
                "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                "id": "3"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "3.1"
            },
            {
                "label": "Viajar\u00e1 con uno de los padres",
                "slug": "viajara-con-uno-de-los-padres",
                "id": "3.1.2"
            },
            {
                "label": "El menor tiene solo apellido materno y viajar\u00e1 con su madre ",
                "slug": "el-menor-tiene-solo-apellido-materno-y-viajara-con-su-madre-",
                "id": "3.1.2.3"
            }
        ]
    },
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres/viajara-con-uno-de-sus-padres-y-el-otro-ha-fallecido": {
        "id": "3.1.2.4",
        "label": "Viajar\u00e1 con uno de sus padres y el otro ha fallecido",
        "desc": "Cuando el padre o madre que reside en el extranjero autoriza al otro padre o madre que residen en la Rep\u00fablica Dominicana a viajar con el menor",
        "type": "not_required_permission",
        "has_icon": false,
        "slug": "viajara-con-uno-de-sus-padres-y-el-otro-ha-fallecido",
        "children": [],
        "histories": [
            {
                "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                "id": "3"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "3.1"
            },
            {
                "label": "Viajar\u00e1 con uno de los padres",
                "slug": "viajara-con-uno-de-los-padres",
                "id": "3.1.2"
            },
            {
                "label": "Viajar\u00e1 con uno de sus padres y el otro ha fallecido",
                "slug": "viajara-con-uno-de-sus-padres-y-el-otro-ha-fallecido",
                "id": "3.1.2.4"
            }
        ]
    },
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres/el-menor-fue-adoptado-por-personas-extranjeras-y-viaja-por-primera-vez": {
        "id": "3.1.2.5",
        "label": "El menor fue adoptado por personas extranjeras y viaja por primera vez",
        "desc": "Cuando el menor viaja con la persona que tiene la guarda legal con autorizaci\u00f3n de viaje",
        "type": "document",
        "has_icon": false,
        "slug": "el-menor-fue-adoptado-por-personas-extranjeras-y-viaja-por-primera-vez",
        "requirements": [
            {
                "requirement": "Sentencia del tribunal  de ni\u00f1os, ni\u00f1as y adolescentes que evidencie la adopci\u00f3n",
                "requirement_notes": "\u00b7 Ir al tribunal de ni\u00f1os, ni\u00f1as y adolescentes\r\n\u00b7 Solicitar la sentencia donde se les otorga la adopci\u00f3n, original y certificada. "
            },
            {
                "requirement": "Poder Notarial del padre que tiene la patria potestad y no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda. ",
                "requirement_notes": "\u00b7 El padre debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula o pasaporte del otro padre que autoriza",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del otro padre adoptivo que viaja con el menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                "id": "3"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "3.1"
            },
            {
                "label": "Viajar\u00e1 con uno de los padres",
                "slug": "viajara-con-uno-de-los-padres",
                "id": "3.1.2"
            },
            {
                "label": "El menor fue adoptado por personas extranjeras y viaja por primera vez",
                "slug": "el-menor-fue-adoptado-por-personas-extranjeras-y-viaja-por-primera-vez",
                "id": "3.1.2.5"
            }
        ]
    },
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres/uno-de-los-padres-vive-en-el-extranjero-y-autoriza-el-viaje": {
        "id": "3.1.2.6",
        "label": "Uno de los padres vive en el extranjero y autoriza el viaje",
        "desc": "Cuando uno de los padres autoriza al otro a viajar con el menor para participar en actividad cultural, escolar, religiosa, deportiva u otra.",
        "type": "document",
        "has_icon": false,
        "slug": "uno-de-los-padres-vive-en-el-extranjero-y-autoriza-el-viaje",
        "requirements": [
            {
                "requirement": "Poder consular otorgado en el pa\u00eds en donde se encuentra el padre (debe ser apostillado y sellado en cancilleria) o Poder Notarial legalizado del pa\u00eds donde se encuentre el padre en  original con apostilla de la Haya",
                "requirement_notes": "\u00b7 El padre en el extranjero debe firmar el poder consular (en el consulado m\u00e1s cercana) autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en el Ministerio de Relaciones Exteriores de la Rep\u00fablica Dominicana."
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                "id": "3"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "3.1"
            },
            {
                "label": "Viajar\u00e1 con uno de los padres",
                "slug": "viajara-con-uno-de-los-padres",
                "id": "3.1.2"
            },
            {
                "label": "Uno de los padres vive en el extranjero y autoriza el viaje",
                "slug": "uno-de-los-padres-vive-en-el-extranjero-y-autoriza-el-viaje",
                "id": "3.1.2.6"
            }
        ]
    },
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres/tiene-autorizacion-de-viaje-del-menordel-tribunal-ninos-ninas-y-adolescentes": {
        "id": "3.1.2.7",
        "label": "Tiene autorizaci\u00f3n de viaje del menor\u00a0del tribunal Ni\u00f1os, Ni\u00f1as y Adolescentes",
        "desc": "Cuando uno de los padres se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor.",
        "type": "document",
        "has_icon": false,
        "slug": "tiene-autorizacion-de-viaje-del-menordel-tribunal-ninos-ninas-y-adolescentes",
        "requirements": [
            {
                "requirement": "Autorizaci\u00f3n judicial (sentencia, auto o resoluci\u00f3n) que autoriza el viaje del Menor",
                "requirement_notes": "\u00b7 Ir al tribunal de ni\u00f1os, ni\u00f1as y adolescentes\r\n\u00b7 Solicitar la sentencia donde se les otorga la Guarda Legal y Autorizaci\u00f3n de viaje del menor"
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                "id": "3"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "3.1"
            },
            {
                "label": "Viajar\u00e1 con uno de los padres",
                "slug": "viajara-con-uno-de-los-padres",
                "id": "3.1.2"
            },
            {
                "label": "Tiene autorizaci\u00f3n de viaje del menor\u00a0del tribunal Ni\u00f1os, Ni\u00f1as y Adolescentes",
                "slug": "tiene-autorizacion-de-viaje-del-menordel-tribunal-ninos-ninas-y-adolescentes",
                "id": "3.1.2.7"
            }
        ]
    },
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres/viajara-a-una-actividad-cultural-escolar-religiosa-deportiva-u-otra": {
        "id": "3.1.2.8",
        "label": "Viajar\u00e1 a una actividad cultural, escolar, religiosa, deportiva u otra",
        "desc": "No veo el caso del menor o tengo dudas para elegir",
        "type": "document",
        "has_icon": false,
        "slug": "viajara-a-una-actividad-cultural-escolar-religiosa-deportiva-u-otra",
        "requirements": [
            {
                "requirement": "Poder Notarial del padre que no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda",
                "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB Sambil"
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                "id": "3"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "3.1"
            },
            {
                "label": "Viajar\u00e1 con uno de los padres",
                "slug": "viajara-con-uno-de-los-padres",
                "id": "3.1.2"
            },
            {
                "label": "Viajar\u00e1 a una actividad cultural, escolar, religiosa, deportiva u otra",
                "slug": "viajara-a-una-actividad-cultural-escolar-religiosa-deportiva-u-otra",
                "id": "3.1.2.8"
            }
        ]
    },
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres/uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor": {
        "id": "3.1.2.9",
        "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
        "desc": null,
        "type": "document",
        "has_icon": false,
        "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
        "requirements": [
            {
                "requirement": "Sentencia judicial que autoriza el viaje del Menor o sentencia judical que otorga la autoridad parental unilateral al padre que viaja",
                "requirement_notes": "\u00b7 Ir al tribunal de ni\u00f1os, ni\u00f1as y adolescentes\r\n\u00b7 Solicitar la sentencia donde se les otorga la patria potestad "
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o  madre que realiza la solicitud",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del padre acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del padre acompa\u00f1ante",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                "id": "3"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "3.1"
            },
            {
                "label": "Viajar\u00e1 con uno de los padres",
                "slug": "viajara-con-uno-de-los-padres",
                "id": "3.1.2"
            },
            {
                "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
                "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
                "id": "3.1.2.9"
            }
        ]
    },
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres/no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir": {
        "id": "3.1.2.10",
        "label": "No veo el caso del menor o tengo dudas para elegir",
        "desc": null,
        "type": "not_found",
        "has_icon": false,
        "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
        "children": []
    },
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-su-tutor-legal---tutores-legales": [
        {
            "id": "3.1.3.1",
            "label": "El menor viajar\u00e1 con el tutor legal y el otro tutor autoriza",
            "desc": null,
            "type": "document",
            "has_icon": false,
            "slug": "el-menor-viajara-con-el-tutor-legal-y-el-otro-tutor-autoriza",
            "requirements": [
                {
                    "requirement": "Poder Notarial del padre o madre que no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda. ",
                    "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB "
                },
                {
                    "requirement": "Sentencia judicial que otorga la tutor\u00eda legal sobre el/los menor/es",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                    "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                    "id": "3"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "3.1"
                },
                {
                    "label": "Viajar\u00e1 con su tutor legal / tutores legales",
                    "slug": "viajara-con-su-tutor-legal---tutores-legales",
                    "id": "3.1.3"
                },
                {
                    "label": "El menor viajar\u00e1 con el tutor legal y el otro tutor autoriza",
                    "slug": "el-menor-viajara-con-el-tutor-legal-y-el-otro-tutor-autoriza",
                    "id": "3.1.3.1"
                }
            ]
        },
        {
            "id": "3.1.3.2",
            "label": "El menor tiene un solo tutor legal y viajar\u00e1 con \u00e9l",
            "desc": null,
            "type": "not_required_permission",
            "has_icon": false,
            "slug": "el-menor-tiene-un-solo-tutor-legal-y-viajara-con-el",
            "requirements": [
                {
                    "requirement": "No requiere el permiso, pero debe mostrar en Control Migratorio la sentencia que muestra la tutor\u00eda legal \u00fanica sobre el/los menor/es",
                    "requirement_notes": null
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                    "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                    "id": "3"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "3.1"
                },
                {
                    "label": "Viajar\u00e1 con su tutor legal / tutores legales",
                    "slug": "viajara-con-su-tutor-legal---tutores-legales",
                    "id": "3.1.3"
                },
                {
                    "label": "El menor tiene un solo tutor legal y viajar\u00e1 con \u00e9l",
                    "slug": "el-menor-tiene-un-solo-tutor-legal-y-viajara-con-el",
                    "id": "3.1.3.2"
                }
            ]
        },
        {
            "id": "3.1.3.3",
            "label": "El menor viajar\u00e1 con ambos tutores legales",
            "desc": null,
            "type": "not_required_permission",
            "has_icon": false,
            "slug": "el-menor-viajara-con-ambos-tutores-legales",
            "requirements": [
                {
                    "requirement": "Presentar la sentencia que otorga la tutor\u00eda legal de/los menor/es",
                    "requirement_notes": "No requiere presentar PSM en Control Migratorio"
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                    "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                    "id": "3"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "3.1"
                },
                {
                    "label": "Viajar\u00e1 con su tutor legal / tutores legales",
                    "slug": "viajara-con-su-tutor-legal---tutores-legales",
                    "id": "3.1.3"
                },
                {
                    "label": "El menor viajar\u00e1 con ambos tutores legales",
                    "slug": "el-menor-viajara-con-ambos-tutores-legales",
                    "id": "3.1.3.3"
                }
            ]
        },
        {
            "id": "3.1.3.4",
            "label": "No veo el caso del menor o tengo dudas para elegir",
            "desc": null,
            "type": "not_found",
            "has_icon": false,
            "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
            "children": []
        }
    ],
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-su-tutor-legal---tutores-legales/el-menor-viajara-con-el-tutor-legal-y-el-otro-tutor-autoriza": {
        "id": "3.1.3.1",
        "label": "El menor viajar\u00e1 con el tutor legal y el otro tutor autoriza",
        "desc": null,
        "type": "document",
        "has_icon": false,
        "slug": "el-menor-viajara-con-el-tutor-legal-y-el-otro-tutor-autoriza",
        "requirements": [
            {
                "requirement": "Poder Notarial del padre o madre que no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda. ",
                "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB "
            },
            {
                "requirement": "Sentencia judicial que otorga la tutor\u00eda legal sobre el/los menor/es",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                "id": "3"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "3.1"
            },
            {
                "label": "Viajar\u00e1 con su tutor legal / tutores legales",
                "slug": "viajara-con-su-tutor-legal---tutores-legales",
                "id": "3.1.3"
            },
            {
                "label": "El menor viajar\u00e1 con el tutor legal y el otro tutor autoriza",
                "slug": "el-menor-viajara-con-el-tutor-legal-y-el-otro-tutor-autoriza",
                "id": "3.1.3.1"
            }
        ]
    },
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-su-tutor-legal---tutores-legales/el-menor-tiene-un-solo-tutor-legal-y-viajara-con-el": {
        "id": "3.1.3.2",
        "label": "El menor tiene un solo tutor legal y viajar\u00e1 con \u00e9l",
        "desc": null,
        "type": "not_required_permission",
        "has_icon": false,
        "slug": "el-menor-tiene-un-solo-tutor-legal-y-viajara-con-el",
        "requirements": [
            {
                "requirement": "No requiere el permiso, pero debe mostrar en Control Migratorio la sentencia que muestra la tutor\u00eda legal \u00fanica sobre el/los menor/es",
                "requirement_notes": null
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                "id": "3"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "3.1"
            },
            {
                "label": "Viajar\u00e1 con su tutor legal / tutores legales",
                "slug": "viajara-con-su-tutor-legal---tutores-legales",
                "id": "3.1.3"
            },
            {
                "label": "El menor tiene un solo tutor legal y viajar\u00e1 con \u00e9l",
                "slug": "el-menor-tiene-un-solo-tutor-legal-y-viajara-con-el",
                "id": "3.1.3.2"
            }
        ]
    },
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-su-tutor-legal---tutores-legales/el-menor-viajara-con-ambos-tutores-legales": {
        "id": "3.1.3.3",
        "label": "El menor viajar\u00e1 con ambos tutores legales",
        "desc": null,
        "type": "not_required_permission",
        "has_icon": false,
        "slug": "el-menor-viajara-con-ambos-tutores-legales",
        "requirements": [
            {
                "requirement": "Presentar la sentencia que otorga la tutor\u00eda legal de/los menor/es",
                "requirement_notes": "No requiere presentar PSM en Control Migratorio"
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                "id": "3"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "3.1"
            },
            {
                "label": "Viajar\u00e1 con su tutor legal / tutores legales",
                "slug": "viajara-con-su-tutor-legal---tutores-legales",
                "id": "3.1.3"
            },
            {
                "label": "El menor viajar\u00e1 con ambos tutores legales",
                "slug": "el-menor-viajara-con-ambos-tutores-legales",
                "id": "3.1.3.3"
            }
        ]
    },
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-su-tutor-legal---tutores-legales/no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir": {
        "id": "3.1.3.4",
        "label": "No veo el caso del menor o tengo dudas para elegir",
        "desc": null,
        "type": "not_found",
        "has_icon": false,
        "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
        "children": []
    },
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-un-tercero": [
        {
            "id": "3.1.4.1",
            "label": "Viajar\u00e1 con la aerol\u00ednea",
            "desc": "Cuando el menor viaja con la Aerol\u00ednea y cuenta con la autorizaci\u00f3n de ambos padres, padre, madre o tutor legal",
            "type": "document",
            "has_icon": false,
            "slug": "viajara-con-la-aerolinea",
            "requirements": [
                {
                    "requirement": "Poder Notarial de ambos padres, padre, madre o tutor (seg\u00fan el caso) legal autorizando la salida del menor del pa\u00eds con la aerol\u00ednea, legalizado por procuradur\u00eda o sentencia judicial.",
                    "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB Sambil"
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de la o las personas que autorizan",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                },
                {
                    "requirement": "Boleto o reserva del viaje",
                    "requirement_notes": null
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                    "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                    "id": "3"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "3.1"
                },
                {
                    "label": "Viajar\u00e1 con un tercero\u00a0",
                    "slug": "viajara-con-un-tercero",
                    "id": "3.1.4"
                },
                {
                    "label": "Viajar\u00e1 con la aerol\u00ednea",
                    "slug": "viajara-con-la-aerolinea",
                    "id": "3.1.4.1"
                }
            ]
        },
        {
            "id": "3.1.4.2",
            "label": "Viajar\u00e1 con el colegio, centro educativo o instituci\u00f3n cultural",
            "desc": "Cuando el menor viaja con  una academia, centro educativo o instituci\u00f3n cultural, y cuenta con la autorizaci\u00f3n de los padres, padre, madre o tutor legal",
            "type": "document",
            "has_icon": false,
            "slug": "viajara-con-el-colegio-centro-educativo-o-institucion-cultural",
            "requirements": [
                {
                    "requirement": "Si ambos padres est\u00e1n en el pa\u00eds:\r\n\r\nPresentar un Poder Notarial (individual o conjunto) emitido por los padres, autorizando la salida del menor. Este poder debe estar legalizado por la Procuradur\u00eda General de la Rep\u00fablica\r\n\r\nSi uno o ambos padres est\u00e1n fuera del pa\u00eds:\r\n\r\nPresentar un Poder Consular emitido desde el pa\u00eds donde se encuentren, autorizando la salida del menor.\r\n\r\nSi uno de los padres no est\u00e1 de acuerdo o no est\u00e1 presente en la vida del menor:\r\n\r\nPresentar una Autorizaci\u00f3n Judicial, emitida por un tribunal competente, que permita la salida del menor.",
                    "requirement_notes": "\u00b7 Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerol\u00ednea. \r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica.\r\n\u00b7 Los padres de todos los menores pueden hacer un solo poder notarial, donde est\u00e9n las firmas de todos los padres que autorizan la salida de los menores."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                    "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                    "id": "3"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "3.1"
                },
                {
                    "label": "Viajar\u00e1 con un tercero\u00a0",
                    "slug": "viajara-con-un-tercero",
                    "id": "3.1.4"
                },
                {
                    "label": "Viajar\u00e1 con el colegio, centro educativo o instituci\u00f3n cultural",
                    "slug": "viajara-con-el-colegio-centro-educativo-o-institucion-cultural",
                    "id": "3.1.4.2"
                }
            ]
        },
        {
            "id": "3.1.4.3",
            "label": "Viajar\u00e1 con academia, selecci\u00f3n o liga deportiva",
            "desc": "Cuando el menor viaja con  una academia, selecci\u00f3 o liga deportiva, y cuenta con la autorizaci\u00f3n de ambos padres, padre, madre o tutor legal",
            "type": "document",
            "has_icon": false,
            "slug": "viajara-con-academia-seleccion-o-liga-deportiva",
            "requirements": [
                {
                    "requirement": "Si ambos padres est\u00e1n en el pa\u00eds:\r\n\r\nPresentar un Poder Notarial (individual o conjunto) emitido por los padres, autorizando la salida del menor. Este poder debe estar legalizado por la Procuradur\u00eda General de la Rep\u00fablica.\r\n\r\nSi uno o ambos padres est\u00e1n fuera del pa\u00eds:\r\n\r\nPresentar un Poder Consular emitido desde el pa\u00eds donde se encuentren, autorizando la salida del menor.\r\n\r\nSi uno de los padres no est\u00e1 de acuerdo o no est\u00e1 presente en la vida del menor:\r\n\r\nPresentar una Autorizaci\u00f3n Judicial, emitida por un tribunal competente, que permita la salida del menor.",
                    "requirement_notes": "\u00b7 Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerol\u00ednea. \r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica.\r\n\u00b7 Los padres de todos los menores pueden hacer un solo poder notarial, donde est\u00e9n las firmas de todos los padres que autorizan la salida de los menores."
                },
                {
                    "requirement": "Carta o comunicaci\u00f3n de la organizaci\u00f3n (Academia, iglesia o liga Deportiva) local especificando el motivo del viaje",
                    "requirement_notes": "Opcional"
                },
                {
                    "requirement": "Carta de invitaci\u00f3n de la actividad a la que asistira el menor",
                    "requirement_notes": "Opcional"
                },
                {
                    "requirement": "Fotos o copias de las actas de nacimiento originales del (de los)  menor(es) , con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": null
                },
                {
                    "requirement": "Fotos o copias de las c\u00e9dulas de identidad de los padres, madres o tutores",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Fotos o copias de la c\u00e9dula de la persona que realiza la solicitud.",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Fotos o copias de las visas / residencias / permisos de estad\u00edas de menores",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante o responsable",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "Fotos o copias de los pasaportes de los menores",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente de cada menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                    "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                    "id": "3"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "3.1"
                },
                {
                    "label": "Viajar\u00e1 con un tercero\u00a0",
                    "slug": "viajara-con-un-tercero",
                    "id": "3.1.4"
                },
                {
                    "label": "Viajar\u00e1 con academia, selecci\u00f3n o liga deportiva",
                    "slug": "viajara-con-academia-seleccion-o-liga-deportiva",
                    "id": "3.1.4.3"
                }
            ]
        },
        {
            "id": "3.1.4.4",
            "label": "Viajar\u00e1 con la persona que posee la guarda legal",
            "desc": "Cuando el menor viaja con la persona que tiene la guarda legal con autorizaci\u00f3n de viaje ",
            "type": "document",
            "has_icon": false,
            "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
            "requirements": [
                {
                    "requirement": "Poder Notarial de ambos padres, autorizando la salida del menor del pa\u00eds con el guarda custodia (de hecho o legal), legalizado por procuradur\u00eda",
                    "requirement_notes": "\u00b7 Ambos padres deben firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": null
                },
                {
                    "requirement": "Fotos o copias de las c\u00e9dulas de identidad del padre y de la madre; o del tutor ",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula del acompa\u00f1ante ( si aplica)",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                    "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                    "id": "3"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "3.1"
                },
                {
                    "label": "Viajar\u00e1 con un tercero\u00a0",
                    "slug": "viajara-con-un-tercero",
                    "id": "3.1.4"
                },
                {
                    "label": "Viajar\u00e1 con la persona que posee la guarda legal",
                    "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
                    "id": "3.1.4.4"
                }
            ]
        },
        {
            "id": "3.1.4.5",
            "label": "El menor tiene solo apellido materno y no viajar\u00e1 con su madre ",
            "desc": "Cuando el menor ha sido declarado solo por la madre y es ella quien autoriza a otra persona a viajar con el menor",
            "type": "document",
            "has_icon": false,
            "slug": "el-menor-tiene-solo-apellido-materno-y-no-viajara-con-su-madre-",
            "requirements": [
                {
                    "requirement": "Poder Notarial de la madre, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                    "requirement_notes": "\u00b7 La madre debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de identidad de la madre ",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de identidad del acompa\u00f1ante (si aplica)",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                    "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                    "id": "3"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "3.1"
                },
                {
                    "label": "Viajar\u00e1 con un tercero\u00a0",
                    "slug": "viajara-con-un-tercero",
                    "id": "3.1.4"
                },
                {
                    "label": "El menor tiene solo apellido materno y no viajar\u00e1 con su madre ",
                    "slug": "el-menor-tiene-solo-apellido-materno-y-no-viajara-con-su-madre-",
                    "id": "3.1.4.5"
                }
            ]
        },
        {
            "id": "3.1.4.6",
            "label": "Uno de los padres ha fallecido y no viajar\u00e1 con el padre sobreviviente",
            "desc": "Cuando el menor viaja con la persona que ha autorizado el padre o madre sobreviviente",
            "type": "document",
            "has_icon": false,
            "slug": "uno-de-los-padres-ha-fallecido-y-no-viajara-con-el-padre-sobreviviente",
            "requirements": [
                {
                    "requirement": "Poder Notarial del padre sobreviviente, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                    "requirement_notes": "\u00b7 El padre sobreviviente debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                },
                {
                    "requirement": "Acta de defunci\u00f3n del padre fallecido  con codigo QR legible",
                    "requirement_notes": null
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                    "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                    "id": "3"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "3.1"
                },
                {
                    "label": "Viajar\u00e1 con un tercero\u00a0",
                    "slug": "viajara-con-un-tercero",
                    "id": "3.1.4"
                },
                {
                    "label": "Uno de los padres ha fallecido y no viajar\u00e1 con el padre sobreviviente",
                    "slug": "uno-de-los-padres-ha-fallecido-y-no-viajara-con-el-padre-sobreviviente",
                    "id": "3.1.4.6"
                }
            ]
        },
        {
            "id": "3.1.4.7",
            "label": "Viajar\u00e1 con una persona autorizada por el tutor legal ",
            "desc": "Cuando el menor viaja con la persona que ha autorizado el tutor legal",
            "type": "document",
            "has_icon": false,
            "slug": "viajara-con-una-persona-autorizada-por-el-tutor-legal-",
            "requirements": [
                {
                    "requirement": "Poder Notarial del tutor (es) legal, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                    "requirement_notes": "\u00b7 El tutor legal debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de identidad de el o los tutores que realizan la solicitud",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                },
                {
                    "requirement": "Sentencia que otorga la tutor\u00eda legal del menor",
                    "requirement_notes": null
                },
                {
                    "requirement": "C\u00e9dula del acompa\u00f1ante",
                    "requirement_notes": null
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                    "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                    "id": "3"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "3.1"
                },
                {
                    "label": "Viajar\u00e1 con un tercero\u00a0",
                    "slug": "viajara-con-un-tercero",
                    "id": "3.1.4"
                },
                {
                    "label": "Viajar\u00e1 con una persona autorizada por el tutor legal ",
                    "slug": "viajara-con-una-persona-autorizada-por-el-tutor-legal-",
                    "id": "3.1.4.7"
                }
            ]
        },
        {
            "id": "3.1.4.8",
            "label": "Viajar\u00e1 con abuelos, t\u00edos, amigos u otras personas que no son los padres",
            "desc": "Cuando el menor viaja con terceros que han sido autorizado los padres o tutores legales",
            "type": "document",
            "has_icon": false,
            "slug": "viajara-con-abuelos-tios-amigos-u-otras-personas-que-no-son-los-padres",
            "requirements": [
                {
                    "requirement": "Poder Notarial de los padres, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                    "requirement_notes": "\u00b7 Ambos padres deben firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": null
                },
                {
                    "requirement": "Fotos o copia sde las c\u00e9dulas de identidad de ambos padres o tutor (es) ",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                },
                {
                    "requirement": "C\u00e9dula del acompa\u00f1ante ",
                    "requirement_notes": null
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                    "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                    "id": "3"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "3.1"
                },
                {
                    "label": "Viajar\u00e1 con un tercero\u00a0",
                    "slug": "viajara-con-un-tercero",
                    "id": "3.1.4"
                },
                {
                    "label": "Viajar\u00e1 con abuelos, t\u00edos, amigos u otras personas que no son los padres",
                    "slug": "viajara-con-abuelos-tios-amigos-u-otras-personas-que-no-son-los-padres",
                    "id": "3.1.4.8"
                }
            ]
        },
        {
            "id": "3.1.4.9",
            "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
            "desc": "Cuando uno de los padres se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor.",
            "type": "document",
            "has_icon": false,
            "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
            "requirements": [
                {
                    "requirement": "Sentencia Judicial que otorga la autorizaci\u00f3n de viaje del menor",
                    "requirement_notes": "\u00b7 Ir al tribunal de ni\u00f1os, ni\u00f1as y adolescentes\r\n\u00b7 Solicitar la sentencia donde se les otorga la autorizaci\u00f3n de viaje "
                },
                {
                    "requirement": "Poder Notarial del padre que tiene la autorizaci\u00f3n de viaje y no viaja, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                    "requirement_notes": "\u00b7 El padre debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "C\u00e9dula de identidad del acompa\u00f1ante (si aplica)",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                    "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                    "id": "3"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "3.1"
                },
                {
                    "label": "Viajar\u00e1 con un tercero\u00a0",
                    "slug": "viajara-con-un-tercero",
                    "id": "3.1.4"
                },
                {
                    "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
                    "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
                    "id": "3.1.4.9"
                }
            ]
        },
        {
            "id": "3.1.4.10",
            "label": "No veo el caso del menor o tengo dudas para elegir",
            "desc": "No veo el caso del menor o tengo dudas para elegir",
            "type": "not_found",
            "has_icon": false,
            "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
            "children": []
        }
    ],
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-un-tercero/viajara-con-la-aerolinea": {
        "id": "3.1.4.1",
        "label": "Viajar\u00e1 con la aerol\u00ednea",
        "desc": "Cuando el menor viaja con la Aerol\u00ednea y cuenta con la autorizaci\u00f3n de ambos padres, padre, madre o tutor legal",
        "type": "document",
        "has_icon": false,
        "slug": "viajara-con-la-aerolinea",
        "requirements": [
            {
                "requirement": "Poder Notarial de ambos padres, padre, madre o tutor (seg\u00fan el caso) legal autorizando la salida del menor del pa\u00eds con la aerol\u00ednea, legalizado por procuradur\u00eda o sentencia judicial.",
                "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB Sambil"
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de la o las personas que autorizan",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
            },
            {
                "requirement": "Boleto o reserva del viaje",
                "requirement_notes": null
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                "id": "3"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "3.1"
            },
            {
                "label": "Viajar\u00e1 con un tercero\u00a0",
                "slug": "viajara-con-un-tercero",
                "id": "3.1.4"
            },
            {
                "label": "Viajar\u00e1 con la aerol\u00ednea",
                "slug": "viajara-con-la-aerolinea",
                "id": "3.1.4.1"
            }
        ]
    },
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-un-tercero/viajara-con-el-colegio-centro-educativo-o-institucion-cultural": {
        "id": "3.1.4.2",
        "label": "Viajar\u00e1 con el colegio, centro educativo o instituci\u00f3n cultural",
        "desc": "Cuando el menor viaja con  una academia, centro educativo o instituci\u00f3n cultural, y cuenta con la autorizaci\u00f3n de los padres, padre, madre o tutor legal",
        "type": "document",
        "has_icon": false,
        "slug": "viajara-con-el-colegio-centro-educativo-o-institucion-cultural",
        "requirements": [
            {
                "requirement": "Si ambos padres est\u00e1n en el pa\u00eds:\r\n\r\nPresentar un Poder Notarial (individual o conjunto) emitido por los padres, autorizando la salida del menor. Este poder debe estar legalizado por la Procuradur\u00eda General de la Rep\u00fablica\r\n\r\nSi uno o ambos padres est\u00e1n fuera del pa\u00eds:\r\n\r\nPresentar un Poder Consular emitido desde el pa\u00eds donde se encuentren, autorizando la salida del menor.\r\n\r\nSi uno de los padres no est\u00e1 de acuerdo o no est\u00e1 presente en la vida del menor:\r\n\r\nPresentar una Autorizaci\u00f3n Judicial, emitida por un tribunal competente, que permita la salida del menor.",
                "requirement_notes": "\u00b7 Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerol\u00ednea. \r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica.\r\n\u00b7 Los padres de todos los menores pueden hacer un solo poder notarial, donde est\u00e9n las firmas de todos los padres que autorizan la salida de los menores."
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                "id": "3"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "3.1"
            },
            {
                "label": "Viajar\u00e1 con un tercero\u00a0",
                "slug": "viajara-con-un-tercero",
                "id": "3.1.4"
            },
            {
                "label": "Viajar\u00e1 con el colegio, centro educativo o instituci\u00f3n cultural",
                "slug": "viajara-con-el-colegio-centro-educativo-o-institucion-cultural",
                "id": "3.1.4.2"
            }
        ]
    },
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-un-tercero/viajara-con-academia-seleccion-o-liga-deportiva": {
        "id": "3.1.4.3",
        "label": "Viajar\u00e1 con academia, selecci\u00f3n o liga deportiva",
        "desc": "Cuando el menor viaja con  una academia, selecci\u00f3 o liga deportiva, y cuenta con la autorizaci\u00f3n de ambos padres, padre, madre o tutor legal",
        "type": "document",
        "has_icon": false,
        "slug": "viajara-con-academia-seleccion-o-liga-deportiva",
        "requirements": [
            {
                "requirement": "Si ambos padres est\u00e1n en el pa\u00eds:\r\n\r\nPresentar un Poder Notarial (individual o conjunto) emitido por los padres, autorizando la salida del menor. Este poder debe estar legalizado por la Procuradur\u00eda General de la Rep\u00fablica.\r\n\r\nSi uno o ambos padres est\u00e1n fuera del pa\u00eds:\r\n\r\nPresentar un Poder Consular emitido desde el pa\u00eds donde se encuentren, autorizando la salida del menor.\r\n\r\nSi uno de los padres no est\u00e1 de acuerdo o no est\u00e1 presente en la vida del menor:\r\n\r\nPresentar una Autorizaci\u00f3n Judicial, emitida por un tribunal competente, que permita la salida del menor.",
                "requirement_notes": "\u00b7 Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerol\u00ednea. \r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica.\r\n\u00b7 Los padres de todos los menores pueden hacer un solo poder notarial, donde est\u00e9n las firmas de todos los padres que autorizan la salida de los menores."
            },
            {
                "requirement": "Carta o comunicaci\u00f3n de la organizaci\u00f3n (Academia, iglesia o liga Deportiva) local especificando el motivo del viaje",
                "requirement_notes": "Opcional"
            },
            {
                "requirement": "Carta de invitaci\u00f3n de la actividad a la que asistira el menor",
                "requirement_notes": "Opcional"
            },
            {
                "requirement": "Fotos o copias de las actas de nacimiento originales del (de los)  menor(es) , con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": null
            },
            {
                "requirement": "Fotos o copias de las c\u00e9dulas de identidad de los padres, madres o tutores",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Fotos o copias de la c\u00e9dula de la persona que realiza la solicitud.",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Fotos o copias de las visas / residencias / permisos de estad\u00edas de menores",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del acompa\u00f1ante o responsable",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "Fotos o copias de los pasaportes de los menores",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "1 Foto 2x2 reciente de cada menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                "id": "3"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "3.1"
            },
            {
                "label": "Viajar\u00e1 con un tercero\u00a0",
                "slug": "viajara-con-un-tercero",
                "id": "3.1.4"
            },
            {
                "label": "Viajar\u00e1 con academia, selecci\u00f3n o liga deportiva",
                "slug": "viajara-con-academia-seleccion-o-liga-deportiva",
                "id": "3.1.4.3"
            }
        ]
    },
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-un-tercero/viajara-con-la-persona-que-posee-la-guarda-legal": {
        "id": "3.1.4.4",
        "label": "Viajar\u00e1 con la persona que posee la guarda legal",
        "desc": "Cuando el menor viaja con la persona que tiene la guarda legal con autorizaci\u00f3n de viaje ",
        "type": "document",
        "has_icon": false,
        "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
        "requirements": [
            {
                "requirement": "Poder Notarial de ambos padres, autorizando la salida del menor del pa\u00eds con el guarda custodia (de hecho o legal), legalizado por procuradur\u00eda",
                "requirement_notes": "\u00b7 Ambos padres deben firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": null
            },
            {
                "requirement": "Fotos o copias de las c\u00e9dulas de identidad del padre y de la madre; o del tutor ",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula del acompa\u00f1ante ( si aplica)",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                "id": "3"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "3.1"
            },
            {
                "label": "Viajar\u00e1 con un tercero\u00a0",
                "slug": "viajara-con-un-tercero",
                "id": "3.1.4"
            },
            {
                "label": "Viajar\u00e1 con la persona que posee la guarda legal",
                "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
                "id": "3.1.4.4"
            }
        ]
    },
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-un-tercero/el-menor-tiene-solo-apellido-materno-y-no-viajara-con-su-madre-": {
        "id": "3.1.4.5",
        "label": "El menor tiene solo apellido materno y no viajar\u00e1 con su madre ",
        "desc": "Cuando el menor ha sido declarado solo por la madre y es ella quien autoriza a otra persona a viajar con el menor",
        "type": "document",
        "has_icon": false,
        "slug": "el-menor-tiene-solo-apellido-materno-y-no-viajara-con-su-madre-",
        "requirements": [
            {
                "requirement": "Poder Notarial de la madre, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                "requirement_notes": "\u00b7 La madre debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de identidad de la madre ",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de identidad del acompa\u00f1ante (si aplica)",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                "id": "3"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "3.1"
            },
            {
                "label": "Viajar\u00e1 con un tercero\u00a0",
                "slug": "viajara-con-un-tercero",
                "id": "3.1.4"
            },
            {
                "label": "El menor tiene solo apellido materno y no viajar\u00e1 con su madre ",
                "slug": "el-menor-tiene-solo-apellido-materno-y-no-viajara-con-su-madre-",
                "id": "3.1.4.5"
            }
        ]
    },
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-un-tercero/uno-de-los-padres-ha-fallecido-y-no-viajara-con-el-padre-sobreviviente": {
        "id": "3.1.4.6",
        "label": "Uno de los padres ha fallecido y no viajar\u00e1 con el padre sobreviviente",
        "desc": "Cuando el menor viaja con la persona que ha autorizado el padre o madre sobreviviente",
        "type": "document",
        "has_icon": false,
        "slug": "uno-de-los-padres-ha-fallecido-y-no-viajara-con-el-padre-sobreviviente",
        "requirements": [
            {
                "requirement": "Poder Notarial del padre sobreviviente, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                "requirement_notes": "\u00b7 El padre sobreviviente debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
            },
            {
                "requirement": "Acta de defunci\u00f3n del padre fallecido  con codigo QR legible",
                "requirement_notes": null
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                "id": "3"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "3.1"
            },
            {
                "label": "Viajar\u00e1 con un tercero\u00a0",
                "slug": "viajara-con-un-tercero",
                "id": "3.1.4"
            },
            {
                "label": "Uno de los padres ha fallecido y no viajar\u00e1 con el padre sobreviviente",
                "slug": "uno-de-los-padres-ha-fallecido-y-no-viajara-con-el-padre-sobreviviente",
                "id": "3.1.4.6"
            }
        ]
    },
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-un-tercero/viajara-con-una-persona-autorizada-por-el-tutor-legal-": {
        "id": "3.1.4.7",
        "label": "Viajar\u00e1 con una persona autorizada por el tutor legal ",
        "desc": "Cuando el menor viaja con la persona que ha autorizado el tutor legal",
        "type": "document",
        "has_icon": false,
        "slug": "viajara-con-una-persona-autorizada-por-el-tutor-legal-",
        "requirements": [
            {
                "requirement": "Poder Notarial del tutor (es) legal, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                "requirement_notes": "\u00b7 El tutor legal debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de identidad de el o los tutores que realizan la solicitud",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
            },
            {
                "requirement": "Sentencia que otorga la tutor\u00eda legal del menor",
                "requirement_notes": null
            },
            {
                "requirement": "C\u00e9dula del acompa\u00f1ante",
                "requirement_notes": null
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                "id": "3"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "3.1"
            },
            {
                "label": "Viajar\u00e1 con un tercero\u00a0",
                "slug": "viajara-con-un-tercero",
                "id": "3.1.4"
            },
            {
                "label": "Viajar\u00e1 con una persona autorizada por el tutor legal ",
                "slug": "viajara-con-una-persona-autorizada-por-el-tutor-legal-",
                "id": "3.1.4.7"
            }
        ]
    },
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-un-tercero/viajara-con-abuelos-tios-amigos-u-otras-personas-que-no-son-los-padres": {
        "id": "3.1.4.8",
        "label": "Viajar\u00e1 con abuelos, t\u00edos, amigos u otras personas que no son los padres",
        "desc": "Cuando el menor viaja con terceros que han sido autorizado los padres o tutores legales",
        "type": "document",
        "has_icon": false,
        "slug": "viajara-con-abuelos-tios-amigos-u-otras-personas-que-no-son-los-padres",
        "requirements": [
            {
                "requirement": "Poder Notarial de los padres, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                "requirement_notes": "\u00b7 Ambos padres deben firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": null
            },
            {
                "requirement": "Fotos o copia sde las c\u00e9dulas de identidad de ambos padres o tutor (es) ",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
            },
            {
                "requirement": "C\u00e9dula del acompa\u00f1ante ",
                "requirement_notes": null
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                "id": "3"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "3.1"
            },
            {
                "label": "Viajar\u00e1 con un tercero\u00a0",
                "slug": "viajara-con-un-tercero",
                "id": "3.1.4"
            },
            {
                "label": "Viajar\u00e1 con abuelos, t\u00edos, amigos u otras personas que no son los padres",
                "slug": "viajara-con-abuelos-tios-amigos-u-otras-personas-que-no-son-los-padres",
                "id": "3.1.4.8"
            }
        ]
    },
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-un-tercero/uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor": {
        "id": "3.1.4.9",
        "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
        "desc": "Cuando uno de los padres se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor.",
        "type": "document",
        "has_icon": false,
        "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
        "requirements": [
            {
                "requirement": "Sentencia Judicial que otorga la autorizaci\u00f3n de viaje del menor",
                "requirement_notes": "\u00b7 Ir al tribunal de ni\u00f1os, ni\u00f1as y adolescentes\r\n\u00b7 Solicitar la sentencia donde se les otorga la autorizaci\u00f3n de viaje "
            },
            {
                "requirement": "Poder Notarial del padre que tiene la autorizaci\u00f3n de viaje y no viaja, autorizando la salida del menor del pa\u00eds con el acompa\u00f1ante, legalizado por procuradur\u00eda",
                "requirement_notes": "\u00b7 El padre debe firmar el poder notarial autorizando la salida del menor.\r\n\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en el PuntoGOB Sambil."
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original del menor, con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de identidad del padre o madre que realiza la solicitud",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "C\u00e9dula de identidad del acompa\u00f1ante (si aplica)",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                "id": "3"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "3.1"
            },
            {
                "label": "Viajar\u00e1 con un tercero\u00a0",
                "slug": "viajara-con-un-tercero",
                "id": "3.1.4"
            },
            {
                "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
                "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
                "id": "3.1.4.9"
            }
        ]
    },
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-un-tercero/no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir": {
        "id": "3.1.4.10",
        "label": "No veo el caso del menor o tengo dudas para elegir",
        "desc": "No veo el caso del menor o tengo dudas para elegir",
        "type": "not_found",
        "has_icon": false,
        "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
        "children": []
    },
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-no-ha-estado-mas-de-6-meses-en-el-pais": [
        {
            "id": "3.2.1",
            "label": "No se requiere permiso.",
            "desc": null,
            "type": "not_required_permission",
            "has_icon": false,
            "slug": "no-se-requiere-permiso.",
            "children": [],
            "histories": [
                {
                    "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                    "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                    "id": "3"
                },
                {
                    "label": "El menor no ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-no-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "3.2"
                },
                {
                    "label": "No se requiere permiso.",
                    "slug": "no-se-requiere-permiso.",
                    "id": "3.2.1"
                }
            ]
        }
    ],
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-no-ha-estado-mas-de-6-meses-en-el-pais/no-se-requiere-permiso.": {
        "id": "3.2.1",
        "label": "No se requiere permiso.",
        "desc": null,
        "type": "not_required_permission",
        "has_icon": false,
        "slug": "no-se-requiere-permiso.",
        "children": [],
        "histories": [
            {
                "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
                "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
                "id": "3"
            },
            {
                "label": "El menor no ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-no-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "3.2"
            },
            {
                "label": "No se requiere permiso.",
                "slug": "no-se-requiere-permiso.",
                "id": "3.2.1"
            }
        ]
    },
    "el-menor-tiene-estadia-temporal-como-estudiante-deportista-o-artista": [
        {
            "id": "4.1",
            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
            "desc": null,
            "type": null,
            "has_icon": false,
            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
            "children": [
                {
                    "id": "4.1.1",
                    "label": "El menor viajar\u00e1 acompa\u00f1ado con la persona o entidad autorizada con la que entr\u00f3 y se dirigirse a su pa\u00eds de origen",
                    "desc": "EL menor saldra del pa\u00eds con la misma persona u organizaci\u00f3 con la que ingres\u00f3, y se dirige al mismo pa\u00eds de origen.",
                    "type": "document",
                    "has_icon": false,
                    "slug": "el-menor-viajara-acompanado-con-la-persona-o-entidad-autorizada-con-la-que-entro-y-se-dirigirse-a-su-pais-de-origen",
                    "requirements": [
                        {
                            "requirement": "Poder notarial extranjero autorizando la salida del menor",
                            "requirement_notes": "Debe ser recibido en original y debe contener la apostilla de La Haya en original. Debe ser traducido al espa\u00f1ol y legalizada ante la procuradur\u00eda."
                        },
                        {
                            "requirement": "Acta de nacimiento del menor",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": null
                        },
                        {
                            "requirement": null,
                            "requirement_notes": null
                        },
                        {
                            "requirement": null,
                            "requirement_notes": null
                        },
                        {
                            "requirement": null,
                            "requirement_notes": null
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor tiene estad\u00eda temporal como estudiante, deportista o artista",
                            "slug": "el-menor-tiene-estadia-temporal-como-estudiante-deportista-o-artista",
                            "id": "4"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "4.1"
                        },
                        {
                            "label": "El menor viajar\u00e1 acompa\u00f1ado con la persona o entidad autorizada con la que entr\u00f3 y se dirigirse a su pa\u00eds de origen",
                            "slug": "el-menor-viajara-acompanado-con-la-persona-o-entidad-autorizada-con-la-que-entro-y-se-dirigirse-a-su-pais-de-origen",
                            "id": "4.1.1"
                        }
                    ]
                },
                {
                    "id": "4.1.2",
                    "label": "El menor viajar\u00e1 acompa\u00f1ado de ambos padres",
                    "desc": "No requiere el permiso de salida pero debe mostrar Acta de nacimiento del menor",
                    "type": "not_required_permission",
                    "has_icon": false,
                    "slug": "el-menor-viajara-acompanado-de-ambos-padres",
                    "requirements": [
                        {
                            "requirement": "No requiere el permiso, pero debe mostrar el acta de nacimiento del menor",
                            "requirement_notes": null
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor tiene estad\u00eda temporal como estudiante, deportista o artista",
                            "slug": "el-menor-tiene-estadia-temporal-como-estudiante-deportista-o-artista",
                            "id": "4"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "4.1"
                        },
                        {
                            "label": "El menor viajar\u00e1 acompa\u00f1ado de ambos padres",
                            "slug": "el-menor-viajara-acompanado-de-ambos-padres",
                            "id": "4.1.2"
                        }
                    ]
                },
                {
                    "id": "4.1.3",
                    "label": "El menor viajar\u00e1 con uno de los padres",
                    "desc": "Cuando uno de los padres autoriza al otro a viajar con el menor",
                    "type": "document",
                    "has_icon": false,
                    "slug": "el-menor-viajara-con-uno-de-los-padres",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial del padre o madre que no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda",
                            "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor"
                        },
                        {
                            "requirement": null,
                            "requirement_notes": "\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB "
                        },
                        {
                            "requirement": "Acta de nacimiento del menor",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la c\u00e9dula del pasaporte del padre o madre que realiza la solicitud",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del otro padre que autoriza",
                            "requirement_notes": "Versi\u00f3n nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                            "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor tiene estad\u00eda temporal como estudiante, deportista o artista",
                            "slug": "el-menor-tiene-estadia-temporal-como-estudiante-deportista-o-artista",
                            "id": "4"
                        },
                        {
                            "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "4.1"
                        },
                        {
                            "label": "El menor viajar\u00e1 con uno de los padres",
                            "slug": "el-menor-viajara-con-uno-de-los-padres",
                            "id": "4.1.3"
                        }
                    ]
                },
                {
                    "id": "4.1.4",
                    "label": "No veo el caso del menor o tengo dudas para elegir",
                    "desc": "No veo el caso del menor o tengo dudas para elegir",
                    "type": "not_found",
                    "has_icon": false,
                    "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
                    "children": []
                }
            ]
        },
        {
            "id": "4.2",
            "label": "El menor no ha estado m\u00e1s de 6 meses en el pa\u00eds",
            "desc": null,
            "type": "not_required_permission",
            "has_icon": false,
            "slug": "el-menor-no-ha-estado-mas-de-6-meses-en-el-pais",
            "children": [
                {
                    "id": "4.2.1",
                    "label": "No se requiere permiso.",
                    "desc": null,
                    "type": "not_required_permission",
                    "has_icon": false,
                    "slug": "no-se-requiere-permiso.",
                    "requirements": [
                        {
                            "requirement": "No requiere el permiso",
                            "requirement_notes": "No lo requiere si el menor viaja acompa\u00f1ado con una de las personas con las que entro y se dirigirse a su pais de origen."
                        }
                    ],
                    "children": [],
                    "histories": [
                        {
                            "label": "El menor tiene estad\u00eda temporal como estudiante, deportista o artista",
                            "slug": "el-menor-tiene-estadia-temporal-como-estudiante-deportista-o-artista",
                            "id": "4"
                        },
                        {
                            "label": "El menor no ha estado m\u00e1s de 6 meses en el pa\u00eds",
                            "slug": "el-menor-no-ha-estado-mas-de-6-meses-en-el-pais",
                            "id": "4.2"
                        },
                        {
                            "label": "No se requiere permiso.",
                            "slug": "no-se-requiere-permiso.",
                            "id": "4.2.1"
                        }
                    ]
                }
            ],
            "histories": [
                {
                    "label": "El menor tiene estad\u00eda temporal como estudiante, deportista o artista",
                    "slug": "el-menor-tiene-estadia-temporal-como-estudiante-deportista-o-artista",
                    "id": "4"
                },
                {
                    "label": "El menor no ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-no-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "4.2"
                }
            ]
        }
    ],
    "el-menor-tiene-estadia-temporal-como-estudiante-deportista-o-artista/el-menor-ha-estado-mas-de-6-meses-en-el-pais": [
        {
            "id": "4.1.1",
            "label": "El menor viajar\u00e1 acompa\u00f1ado con la persona o entidad autorizada con la que entr\u00f3 y se dirigirse a su pa\u00eds de origen",
            "desc": "EL menor saldra del pa\u00eds con la misma persona u organizaci\u00f3 con la que ingres\u00f3, y se dirige al mismo pa\u00eds de origen.",
            "type": "document",
            "has_icon": false,
            "slug": "el-menor-viajara-acompanado-con-la-persona-o-entidad-autorizada-con-la-que-entro-y-se-dirigirse-a-su-pais-de-origen",
            "requirements": [
                {
                    "requirement": "Poder notarial extranjero autorizando la salida del menor",
                    "requirement_notes": "Debe ser recibido en original y debe contener la apostilla de La Haya en original. Debe ser traducido al espa\u00f1ol y legalizada ante la procuradur\u00eda."
                },
                {
                    "requirement": "Acta de nacimiento del menor",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": null
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": null
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": null
                },
                {
                    "requirement": null,
                    "requirement_notes": null
                },
                {
                    "requirement": null,
                    "requirement_notes": null
                },
                {
                    "requirement": null,
                    "requirement_notes": null
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor tiene estad\u00eda temporal como estudiante, deportista o artista",
                    "slug": "el-menor-tiene-estadia-temporal-como-estudiante-deportista-o-artista",
                    "id": "4"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "4.1"
                },
                {
                    "label": "El menor viajar\u00e1 acompa\u00f1ado con la persona o entidad autorizada con la que entr\u00f3 y se dirigirse a su pa\u00eds de origen",
                    "slug": "el-menor-viajara-acompanado-con-la-persona-o-entidad-autorizada-con-la-que-entro-y-se-dirigirse-a-su-pais-de-origen",
                    "id": "4.1.1"
                }
            ]
        },
        {
            "id": "4.1.2",
            "label": "El menor viajar\u00e1 acompa\u00f1ado de ambos padres",
            "desc": "No requiere el permiso de salida pero debe mostrar Acta de nacimiento del menor",
            "type": "not_required_permission",
            "has_icon": false,
            "slug": "el-menor-viajara-acompanado-de-ambos-padres",
            "requirements": [
                {
                    "requirement": "No requiere el permiso, pero debe mostrar el acta de nacimiento del menor",
                    "requirement_notes": null
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor tiene estad\u00eda temporal como estudiante, deportista o artista",
                    "slug": "el-menor-tiene-estadia-temporal-como-estudiante-deportista-o-artista",
                    "id": "4"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "4.1"
                },
                {
                    "label": "El menor viajar\u00e1 acompa\u00f1ado de ambos padres",
                    "slug": "el-menor-viajara-acompanado-de-ambos-padres",
                    "id": "4.1.2"
                }
            ]
        },
        {
            "id": "4.1.3",
            "label": "El menor viajar\u00e1 con uno de los padres",
            "desc": "Cuando uno de los padres autoriza al otro a viajar con el menor",
            "type": "document",
            "has_icon": false,
            "slug": "el-menor-viajara-con-uno-de-los-padres",
            "requirements": [
                {
                    "requirement": "Poder Notarial del padre o madre que no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda",
                    "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor"
                },
                {
                    "requirement": null,
                    "requirement_notes": "\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB "
                },
                {
                    "requirement": "Acta de nacimiento del menor",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula del pasaporte del padre o madre que realiza la solicitud",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia del pasaporte del otro padre que autoriza",
                    "requirement_notes": "Versi\u00f3n nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor tiene estad\u00eda temporal como estudiante, deportista o artista",
                    "slug": "el-menor-tiene-estadia-temporal-como-estudiante-deportista-o-artista",
                    "id": "4"
                },
                {
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "4.1"
                },
                {
                    "label": "El menor viajar\u00e1 con uno de los padres",
                    "slug": "el-menor-viajara-con-uno-de-los-padres",
                    "id": "4.1.3"
                }
            ]
        },
        {
            "id": "4.1.4",
            "label": "No veo el caso del menor o tengo dudas para elegir",
            "desc": "No veo el caso del menor o tengo dudas para elegir",
            "type": "not_found",
            "has_icon": false,
            "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
            "children": []
        }
    ],
    "el-menor-tiene-estadia-temporal-como-estudiante-deportista-o-artista/el-menor-ha-estado-mas-de-6-meses-en-el-pais/el-menor-viajara-acompanado-con-la-persona-o-entidad-autorizada-con-la-que-entro-y-se-dirigirse-a-su-pais-de-origen": {
        "id": "4.1.1",
        "label": "El menor viajar\u00e1 acompa\u00f1ado con la persona o entidad autorizada con la que entr\u00f3 y se dirigirse a su pa\u00eds de origen",
        "desc": "EL menor saldra del pa\u00eds con la misma persona u organizaci\u00f3 con la que ingres\u00f3, y se dirige al mismo pa\u00eds de origen.",
        "type": "document",
        "has_icon": false,
        "slug": "el-menor-viajara-acompanado-con-la-persona-o-entidad-autorizada-con-la-que-entro-y-se-dirigirse-a-su-pais-de-origen",
        "requirements": [
            {
                "requirement": "Poder notarial extranjero autorizando la salida del menor",
                "requirement_notes": "Debe ser recibido en original y debe contener la apostilla de La Haya en original. Debe ser traducido al espa\u00f1ol y legalizada ante la procuradur\u00eda."
            },
            {
                "requirement": "Acta de nacimiento del menor",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": null
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": null
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": null
            },
            {
                "requirement": null,
                "requirement_notes": null
            },
            {
                "requirement": null,
                "requirement_notes": null
            },
            {
                "requirement": null,
                "requirement_notes": null
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor tiene estad\u00eda temporal como estudiante, deportista o artista",
                "slug": "el-menor-tiene-estadia-temporal-como-estudiante-deportista-o-artista",
                "id": "4"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "4.1"
            },
            {
                "label": "El menor viajar\u00e1 acompa\u00f1ado con la persona o entidad autorizada con la que entr\u00f3 y se dirigirse a su pa\u00eds de origen",
                "slug": "el-menor-viajara-acompanado-con-la-persona-o-entidad-autorizada-con-la-que-entro-y-se-dirigirse-a-su-pais-de-origen",
                "id": "4.1.1"
            }
        ]
    },
    "el-menor-tiene-estadia-temporal-como-estudiante-deportista-o-artista/el-menor-ha-estado-mas-de-6-meses-en-el-pais/el-menor-viajara-acompanado-de-ambos-padres": {
        "id": "4.1.2",
        "label": "El menor viajar\u00e1 acompa\u00f1ado de ambos padres",
        "desc": "No requiere el permiso de salida pero debe mostrar Acta de nacimiento del menor",
        "type": "not_required_permission",
        "has_icon": false,
        "slug": "el-menor-viajara-acompanado-de-ambos-padres",
        "requirements": [
            {
                "requirement": "No requiere el permiso, pero debe mostrar el acta de nacimiento del menor",
                "requirement_notes": null
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor tiene estad\u00eda temporal como estudiante, deportista o artista",
                "slug": "el-menor-tiene-estadia-temporal-como-estudiante-deportista-o-artista",
                "id": "4"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "4.1"
            },
            {
                "label": "El menor viajar\u00e1 acompa\u00f1ado de ambos padres",
                "slug": "el-menor-viajara-acompanado-de-ambos-padres",
                "id": "4.1.2"
            }
        ]
    },
    "el-menor-tiene-estadia-temporal-como-estudiante-deportista-o-artista/el-menor-ha-estado-mas-de-6-meses-en-el-pais/el-menor-viajara-con-uno-de-los-padres": {
        "id": "4.1.3",
        "label": "El menor viajar\u00e1 con uno de los padres",
        "desc": "Cuando uno de los padres autoriza al otro a viajar con el menor",
        "type": "document",
        "has_icon": false,
        "slug": "el-menor-viajara-con-uno-de-los-padres",
        "requirements": [
            {
                "requirement": "Poder Notarial del padre o madre que no viaja, autorizando la salida del menor del pa\u00eds con el otro padre, legalizado por procuradur\u00eda",
                "requirement_notes": "\u00b7 El padre que no viaja debe firmar el poder notarial autorizando la salida del menor"
            },
            {
                "requirement": null,
                "requirement_notes": "\u00b7 Este poder debe ser legalizado en la Procuradur\u00eda General de la Rep\u00fablica o en PuntoGOB "
            },
            {
                "requirement": "Acta de nacimiento del menor",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula del pasaporte del padre o madre que realiza la solicitud",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia del pasaporte del otro padre que autoriza",
                "requirement_notes": "Versi\u00f3n nueva"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda o trabajo del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia / permiso de estad\u00eda del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos."
            },
            {
                "requirement": "1 Foto 2x2 reciente del menor",
                "requirement_notes": "De frente, reciente y fondo claro"
            },
            {
                "requirement": "Recibo de pago del servicio ",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor tiene estad\u00eda temporal como estudiante, deportista o artista",
                "slug": "el-menor-tiene-estadia-temporal-como-estudiante-deportista-o-artista",
                "id": "4"
            },
            {
                "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "4.1"
            },
            {
                "label": "El menor viajar\u00e1 con uno de los padres",
                "slug": "el-menor-viajara-con-uno-de-los-padres",
                "id": "4.1.3"
            }
        ]
    },
    "el-menor-tiene-estadia-temporal-como-estudiante-deportista-o-artista/el-menor-ha-estado-mas-de-6-meses-en-el-pais/no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir": {
        "id": "4.1.4",
        "label": "No veo el caso del menor o tengo dudas para elegir",
        "desc": "No veo el caso del menor o tengo dudas para elegir",
        "type": "not_found",
        "has_icon": false,
        "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
        "children": []
    },
    "el-menor-tiene-estadia-temporal-como-estudiante-deportista-o-artista/el-menor-no-ha-estado-mas-de-6-meses-en-el-pais": [
        {
            "id": "4.2.1",
            "label": "No se requiere permiso.",
            "desc": null,
            "type": "not_required_permission",
            "has_icon": false,
            "slug": "no-se-requiere-permiso.",
            "requirements": [
                {
                    "requirement": "No requiere el permiso",
                    "requirement_notes": "No lo requiere si el menor viaja acompa\u00f1ado con una de las personas con las que entro y se dirigirse a su pais de origen."
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor tiene estad\u00eda temporal como estudiante, deportista o artista",
                    "slug": "el-menor-tiene-estadia-temporal-como-estudiante-deportista-o-artista",
                    "id": "4"
                },
                {
                    "label": "El menor no ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "slug": "el-menor-no-ha-estado-mas-de-6-meses-en-el-pais",
                    "id": "4.2"
                },
                {
                    "label": "No se requiere permiso.",
                    "slug": "no-se-requiere-permiso.",
                    "id": "4.2.1"
                }
            ]
        }
    ],
    "el-menor-tiene-estadia-temporal-como-estudiante-deportista-o-artista/el-menor-no-ha-estado-mas-de-6-meses-en-el-pais/no-se-requiere-permiso.": {
        "id": "4.2.1",
        "label": "No se requiere permiso.",
        "desc": null,
        "type": "not_required_permission",
        "has_icon": false,
        "slug": "no-se-requiere-permiso.",
        "requirements": [
            {
                "requirement": "No requiere el permiso",
                "requirement_notes": "No lo requiere si el menor viaja acompa\u00f1ado con una de las personas con las que entro y se dirigirse a su pais de origen."
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor tiene estad\u00eda temporal como estudiante, deportista o artista",
                "slug": "el-menor-tiene-estadia-temporal-como-estudiante-deportista-o-artista",
                "id": "4"
            },
            {
                "label": "El menor no ha estado m\u00e1s de 6 meses en el pa\u00eds",
                "slug": "el-menor-no-ha-estado-mas-de-6-meses-en-el-pais",
                "id": "4.2"
            },
            {
                "label": "No se requiere permiso.",
                "slug": "no-se-requiere-permiso.",
                "id": "4.2.1"
            }
        ]
    },
    "el-menor-es-hijo-a-de-personal-de-organismos-internacionales-acreditados-en-el-pais": [
        {
            "id": "5.1",
            "label": "El menor viajar\u00e1 acompa\u00f1ado de ambos padres",
            "desc": "Cuando el menor viaja con ambos padres",
            "type": "not_required_permission",
            "has_icon": false,
            "slug": "el-menor-viajara-acompanado-de-ambos-padres",
            "requirements": [
                {
                    "requirement": "Nada",
                    "requirement_notes": "No requiere presentar PSM en Control Migratorio"
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es hijo/a de personal de organismos internacionales acreditados en el pa\u00eds",
                    "slug": "el-menor-es-hijo-a-de-personal-de-organismos-internacionales-acreditados-en-el-pais",
                    "id": "5"
                },
                {
                    "label": "El menor viajar\u00e1 acompa\u00f1ado de ambos padres",
                    "slug": "el-menor-viajara-acompanado-de-ambos-padres",
                    "id": "5.1"
                }
            ]
        },
        {
            "id": "5.2",
            "label": "El menor viajar\u00e1 con uno de los padres",
            "desc": "Cuando el menor viaja con uno de los padres ",
            "type": "document",
            "has_icon": false,
            "slug": "el-menor-viajara-con-uno-de-los-padres",
            "requirements": [
                {
                    "requirement": "Poder consular de la embajada, consulado o representaci\u00f3n del pa\u00eds en donde se encuentra el padre (debe ser apostillado y sellado en cancilleria) o Poder Notarial del pa\u00eds donde se encuentre el padre en  original apostilla de la Haya",
                    "requirement_notes": "\u00b7 El padre en el extranjero debe firmar el poder consular autorizando la salida del menor."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original, con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": "Versi\u00f3n reciente con c\u00f3digo QR o n\u00famero de evento."
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la visa / residencia del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente y reciente"
                },
                {
                    "requirement": "Recibo de pago",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial en BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es hijo/a de personal de organismos internacionales acreditados en el pa\u00eds",
                    "slug": "el-menor-es-hijo-a-de-personal-de-organismos-internacionales-acreditados-en-el-pais",
                    "id": "5"
                },
                {
                    "label": "El menor viajar\u00e1 con uno de los padres",
                    "slug": "el-menor-viajara-con-uno-de-los-padres",
                    "id": "5.2"
                }
            ]
        },
        {
            "id": "5.3",
            "label": "El menor viajar\u00e1 con un tercero\u00a0",
            "desc": null,
            "type": "document",
            "has_icon": false,
            "slug": "el-menor-viajara-con-un-tercero",
            "requirements": [
                {
                    "requirement": "Poder consular de la embajada, consulado o representaci\u00f3n del pa\u00eds en donde se encuentran los padres (debe ser apostillado y sellado en cancilleria) o Poder Notarial del pa\u00eds donde se encuentren los padres en  original apostilla de la Haya",
                    "requirement_notes": "\u00b7 Los padres en el extranjero deben firmar el poder consular autorizando la salida del menor"
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original, con el c\u00f3digo QR legible\u00a0\u00a0",
                    "requirement_notes": "Versi\u00f3n reciente con c\u00f3digo QR o n\u00famero de evento."
                },
                {
                    "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la visa / residencia del acompa\u00f1ante",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia del menor",
                    "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
                },
                {
                    "requirement": "Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente y reciente"
                },
                {
                    "requirement": "Recibo de pago",
                    "requirement_notes": "Puede realizarse en l\u00ednea o presencial en BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": [],
            "histories": [
                {
                    "label": "El menor es hijo/a de personal de organismos internacionales acreditados en el pa\u00eds",
                    "slug": "el-menor-es-hijo-a-de-personal-de-organismos-internacionales-acreditados-en-el-pais",
                    "id": "5"
                },
                {
                    "label": "El menor viajar\u00e1 con un tercero\u00a0",
                    "slug": "el-menor-viajara-con-un-tercero",
                    "id": "5.3"
                }
            ]
        },
        {
            "id": "5.4",
            "label": "No veo el caso del menor o tengo dudas para elegir",
            "desc": null,
            "type": "not_found",
            "has_icon": false,
            "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
            "children": []
        }
    ],
    "el-menor-es-hijo-a-de-personal-de-organismos-internacionales-acreditados-en-el-pais/el-menor-viajara-acompanado-de-ambos-padres": {
        "id": "5.1",
        "label": "El menor viajar\u00e1 acompa\u00f1ado de ambos padres",
        "desc": "Cuando el menor viaja con ambos padres",
        "type": "not_required_permission",
        "has_icon": false,
        "slug": "el-menor-viajara-acompanado-de-ambos-padres",
        "requirements": [
            {
                "requirement": "Nada",
                "requirement_notes": "No requiere presentar PSM en Control Migratorio"
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es hijo/a de personal de organismos internacionales acreditados en el pa\u00eds",
                "slug": "el-menor-es-hijo-a-de-personal-de-organismos-internacionales-acreditados-en-el-pais",
                "id": "5"
            },
            {
                "label": "El menor viajar\u00e1 acompa\u00f1ado de ambos padres",
                "slug": "el-menor-viajara-acompanado-de-ambos-padres",
                "id": "5.1"
            }
        ]
    },
    "el-menor-es-hijo-a-de-personal-de-organismos-internacionales-acreditados-en-el-pais/el-menor-viajara-con-uno-de-los-padres": {
        "id": "5.2",
        "label": "El menor viajar\u00e1 con uno de los padres",
        "desc": "Cuando el menor viaja con uno de los padres ",
        "type": "document",
        "has_icon": false,
        "slug": "el-menor-viajara-con-uno-de-los-padres",
        "requirements": [
            {
                "requirement": "Poder consular de la embajada, consulado o representaci\u00f3n del pa\u00eds en donde se encuentra el padre (debe ser apostillado y sellado en cancilleria) o Poder Notarial del pa\u00eds donde se encuentre el padre en  original apostilla de la Haya",
                "requirement_notes": "\u00b7 El padre en el extranjero debe firmar el poder consular autorizando la salida del menor."
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original, con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": "Versi\u00f3n reciente con c\u00f3digo QR o n\u00famero de evento."
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula del otro padre que autoriza",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la visa / residencia del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "Foto 2x2 reciente del menor",
                "requirement_notes": "De frente y reciente"
            },
            {
                "requirement": "Recibo de pago",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial en BanReservas a nombre del padre, madre o tutor"
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es hijo/a de personal de organismos internacionales acreditados en el pa\u00eds",
                "slug": "el-menor-es-hijo-a-de-personal-de-organismos-internacionales-acreditados-en-el-pais",
                "id": "5"
            },
            {
                "label": "El menor viajar\u00e1 con uno de los padres",
                "slug": "el-menor-viajara-con-uno-de-los-padres",
                "id": "5.2"
            }
        ]
    },
    "el-menor-es-hijo-a-de-personal-de-organismos-internacionales-acreditados-en-el-pais/el-menor-viajara-con-un-tercero": {
        "id": "5.3",
        "label": "El menor viajar\u00e1 con un tercero\u00a0",
        "desc": null,
        "type": "document",
        "has_icon": false,
        "slug": "el-menor-viajara-con-un-tercero",
        "requirements": [
            {
                "requirement": "Poder consular de la embajada, consulado o representaci\u00f3n del pa\u00eds en donde se encuentran los padres (debe ser apostillado y sellado en cancilleria) o Poder Notarial del pa\u00eds donde se encuentren los padres en  original apostilla de la Haya",
                "requirement_notes": "\u00b7 Los padres en el extranjero deben firmar el poder consular autorizando la salida del menor"
            },
            {
                "requirement": "Foto o copia de acta de nacimiento original, con el c\u00f3digo QR legible\u00a0\u00a0",
                "requirement_notes": "Versi\u00f3n reciente con c\u00f3digo QR o n\u00famero de evento."
            },
            {
                "requirement": "Foto o copia de la c\u00e9dula de identidad del padre, madre o tutor que realiza la solicitud",
                "requirement_notes": null
            },
            {
                "requirement": "Foto o copia de la visa / residencia del acompa\u00f1ante",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia de la visa / residencia del menor",
                "requirement_notes": "Si viaja a un pa\u00eds que requiera visa o residencia"
            },
            {
                "requirement": "Foto o copia del pasaporte del acompa\u00f1ante",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "Foto o copia del pasaporte del menor",
                "requirement_notes": "De la p\u00e1gina principal con los datos biom\u00e9tricos"
            },
            {
                "requirement": "Foto 2x2 reciente del menor",
                "requirement_notes": "De frente y reciente"
            },
            {
                "requirement": "Recibo de pago",
                "requirement_notes": "Puede realizarse en l\u00ednea o presencial en BanReservas a nombre del padre, madre o tutor"
            }
        ],
        "children": [],
        "histories": [
            {
                "label": "El menor es hijo/a de personal de organismos internacionales acreditados en el pa\u00eds",
                "slug": "el-menor-es-hijo-a-de-personal-de-organismos-internacionales-acreditados-en-el-pais",
                "id": "5"
            },
            {
                "label": "El menor viajar\u00e1 con un tercero\u00a0",
                "slug": "el-menor-viajara-con-un-tercero",
                "id": "5.3"
            }
        ]
    },
    "el-menor-es-hijo-a-de-personal-de-organismos-internacionales-acreditados-en-el-pais/no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir": {
        "id": "5.4",
        "label": "No veo el caso del menor o tengo dudas para elegir",
        "desc": null,
        "type": "not_found",
        "has_icon": false,
        "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
        "children": []
    },
    "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir": {
        "id": "6",
        "label": "No veo el caso del menor o tengo dudas para elegir",
        "desc": "No veo el caso del menor o tengo dudas para elegir",
        "type": "not_found",
        "has_icon": true,
        "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
        "children": []
    }
}

export type NodeRoute = Prettify<typeof DATA_ROUTE[keyof typeof DATA_ROUTE]>;