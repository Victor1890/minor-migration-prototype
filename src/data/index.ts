
export const DATA_DUMB = {
    "cases": [
        {
            "id": "1",
            "label": "El menor es dominicano y no posee otra nacionalidad",
            "desc": null,
            "type": null,
            "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad",
            "children": [
                {
                    "id": "1.1",
                    "label": "Viajar\u00e1 con ambos padres",
                    "desc": "Cuando ambos padres viajaran con el menor",
                    "type": "not_required_permission",
                    "slug": "viajara-con-ambos-padres",
                    "requirements": [
                        {
                            "requirement": "Ninguno",
                            "requirement_notes": "No requiere presentar PSM en Control Migratorio"
                        }
                    ],
                    "children": []
                },
                {
                    "id": "1.2",
                    "label": "Viajar\u00e1 con uno de los padres",
                    "desc": "Cuando el menor viaja con uno de los padres",
                    "type": null,
                    "slug": "viajara-con-uno-de-los-padres",
                    "children": [
                        {
                            "id": "1.2.1",
                            "label": "Uno de los padres autoriza al otro a viajar",
                            "desc": "Cuando uno de los padres autoriza al otro a viajar con el menor",
                            "type": "document",
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
                            "children": []
                        },
                        {
                            "id": "1.2.2",
                            "label": "Viajar\u00e1 con la persona que posee la guarda legal",
                            "desc": "Cuando el menor viaja con la persona que tiene la guarda legal de este",
                            "type": "document",
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
                            "children": []
                        },
                        {
                            "id": "1.2.3",
                            "label": "El menor tiene solo apellido materno y viajar\u00e1 con su madre ",
                            "desc": "Cuando el menor ha sido declarado solo por la madre y es ella quien le acompa\u00f1a a viajar",
                            "type": "not_required_permission",
                            "slug": "el-menor-tiene-solo-apellido-materno-y-viajara-con-su-madre-",
                            "requirements": [
                                {
                                    "requirement": "Acta de nacimiento",
                                    "requirement_notes": "No requiere el permiso, pero debe presentar acta de nacimiento en el  punto de Control Migratorio"
                                }
                            ],
                            "children": []
                        },
                        {
                            "id": "1.2.4",
                            "label": "Viajar\u00e1 con uno de los padres y el otro ha fallecido",
                            "desc": "Cuando el menor viaja acompa\u00f1ado por su \u00fanico padre o madre que a\u00fan est\u00e1 vivo",
                            "type": "not_required_permission",
                            "slug": "viajara-con-uno-de-los-padres-y-el-otro-ha-fallecido",
                            "requirements": [
                                {
                                    "requirement": "No requiere el permiso, pero debe mostrar en Control Migratorio el acta de defunci\u00f3n y acta de nacimiento del menor",
                                    "requirement_notes": null
                                }
                            ],
                            "children": []
                        },
                        {
                            "id": "1.2.5",
                            "label": "El menor fue adoptado por personas extranjeras y viaja por primera vez",
                            "desc": "cuando el menor viaja por primera vez luego de ser adoptado por personas extranjeras",
                            "type": "document",
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
                            "children": []
                        },
                        {
                            "id": "1.2.6",
                            "label": "Uno de los padres vive en el extranjero y autoriza el viaje",
                            "desc": "Cuando el menor viaja acompa\u00f1ado por el padre o madre que est\u00e1 en el pa\u00eds, y el padre o madre en el extranjero es quien autoriza la salida del menor",
                            "type": "document",
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
                            "children": []
                        },
                        {
                            "id": "1.2.7",
                            "label": "Tiene autorizaci\u00f3n de viaje del menor\u00a0del tribunal Ni\u00f1os, Ni\u00f1as y Adolescentes",
                            "desc": "Cuando el menor viaja con la persona que tiene la guarda legal con autorizaci\u00f3n de viaje ",
                            "type": "document",
                            "slug": "tiene-autorizacion-de-viaje-del-menordel-tribunal-ninos,-ninas-y-adolescentes",
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
                            "children": []
                        },
                        {
                            "id": "1.2.8",
                            "label": "Viajar\u00e1 a una actividad cultural, escolar, religiosa, deportiva u otra",
                            "desc": "Cuando uno de los padres autoriza al otro a viajar con el menor para participar en actividad cultural, escolar, religiosa, deportiva u otra.",
                            "type": "document",
                            "slug": "viajara-a-una-actividad-cultural,-escolar,-religiosa,-deportiva-u-otra",
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
                            "children": []
                        },
                        {
                            "id": "1.2.9",
                            "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
                            "desc": "Cuando uno de los padres se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor.",
                            "type": "document",
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
                            "children": []
                        },
                        {
                            "id": "1.2.10",
                            "label": "No veo el caso del menor o tengo dudas para elegir",
                            "desc": "No veo el caso del menor o tengo dudas para elegir",
                            "type": "not_found",
                            "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "1.3",
                    "label": "Viajar\u00e1 con un tercero\u00a0",
                    "desc": "Cuando ambos padres o tutor legal autoriza a otra persona a viaja con el menor (familiares, amigos, aerol\u00ednea, centro educativo, liga deportiva, instituci\u00f3n cultural, entre otros)",
                    "type": null,
                    "slug": "viajara-con-un-tercero",
                    "children": [
                        {
                            "id": "1.3.1",
                            "label": "Viajar\u00e1 con la aerol\u00ednea",
                            "desc": "Cuando el menor viaja con la Aerol\u00ednea y cuenta con la autorizaci\u00f3n de ambos padres, padre, madre o tutor legal",
                            "type": "document",
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
                            "children": []
                        },
                        {
                            "id": "1.3.2",
                            "label": "Viajar\u00e1 con el colegio, centro educativo o instituci\u00f3n cultural",
                            "desc": "Cuando el menor viaja con  una academia, centro educativo o instituci\u00f3n cultural, y cuenta con la autorizaci\u00f3n de los padres, padre, madre o tutor legal",
                            "type": "document",
                            "slug": "viajara-con-el-colegio,-centro-educativo-o-institucion-cultural",
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
                            "children": []
                        },
                        {
                            "id": "1.3.3",
                            "label": "Viajar\u00e1 con academia, selecci\u00f3n o liga deportiva",
                            "desc": "Cuando el menor viaja con  una academia, selecci\u00f3 o liga deportiva, y cuenta con la autorizaci\u00f3n de ambos padres, padre, madre o tutor legal",
                            "type": "document",
                            "slug": "viajara-con-academia,-seleccion-o-liga-deportiva",
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
                            "children": []
                        },
                        {
                            "id": "1.3.4",
                            "label": "Viajar\u00e1 con la persona que posee la guarda custodia (de hecho o legal)",
                            "desc": "Cuando el menor viaja con la persona que tiene la guarda legal con autorizaci\u00f3n de viaje ",
                            "type": "document",
                            "slug": "viajara-con-la-persona-que-posee-la-guarda-custodia-(de-hecho-o-legal)",
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
                            "children": []
                        },
                        {
                            "id": "1.3.5",
                            "label": "El menor tiene solo apellido materno y no viajar\u00e1 con su madre ",
                            "desc": "Cuando el menor ha sido declarado solo por la madre y es ella quien autoriza a otra persona a viajar con el menor",
                            "type": "document",
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
                            "children": []
                        },
                        {
                            "id": "1.3.6",
                            "label": "Uno de los padres ha fallecido y no viajar\u00e1 con el padre sobreviviente",
                            "desc": "Cuando el menor viaja con la persona que ha autorizado el padre o madre sobreviviente",
                            "type": "document",
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
                            "children": []
                        },
                        {
                            "id": "1.3.7",
                            "label": "Viajar\u00e1 con una persona autorizada por el tutor legal ",
                            "desc": "Cuando el menor viaja con la persona que ha autorizado el tutor legal",
                            "type": "document",
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
                            "children": []
                        },
                        {
                            "id": "1.3.8",
                            "label": "Viajar\u00e1 con abuelos, t\u00edos, amigos u otras personas que no son los padres",
                            "desc": "Cuando el menor viaja con terceros que han sido autorizado los padres o tutores legales",
                            "type": "document",
                            "slug": "viajara-con-abuelos,-tios,-amigos-u-otras-personas-que-no-son-los-padres",
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
                            "children": []
                        },
                        {
                            "id": "1.3.9",
                            "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
                            "desc": "Cuando no se tiene la autorizaci\u00f3n de viaje de parte de uno de los padres",
                            "type": "document",
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
                            "children": []
                        },
                        {
                            "id": "1.3.10",
                            "label": "No veo el caso del menor o tengo dudas para elegir",
                            "desc": "No veo el caso del menor o tengo dudas para elegir",
                            "type": "not_found",
                            "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
                            "children": []
                        }
                    ]
                }
            ]
        },
        {
            "id": "2",
            "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero\u00a0",
            "desc": null,
            "type": null,
            "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y/o-reside-en-el-extranjero",
            "children": [
                {
                    "id": "2.1",
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "desc": null,
                    "type": null,
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "children": [
                        {
                            "id": "2.1.1",
                            "label": "Viajar\u00e1 con uno de los padres",
                            "desc": "Cuando el menor viaja con uno de los padres",
                            "type": null,
                            "slug": "viajara-con-uno-de-los-padres",
                            "children": [
                                {
                                    "id": "2.1.1.1",
                                    "label": "Uno de los padres autoriza al otro a viajar",
                                    "desc": "Cuando uno de los padres autoriza al otro a viajar con el menor",
                                    "type": "document",
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
                                    "children": []
                                },
                                {
                                    "id": "2.1.1.2",
                                    "label": "Viajar\u00e1 con la persona que posee la guarda legal",
                                    "desc": "Cuando el menor viaja con la persona que tiene la guarda legal de este",
                                    "type": "document",
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
                                    "children": []
                                },
                                {
                                    "id": "2.1.1.3",
                                    "label": "El menor tiene solo apellido materno y viajar\u00e1 con su madre ",
                                    "desc": "Cuando el menor ha sido declarado solo por la madre y es ella quien le acompa\u00f1a a viajar",
                                    "type": "not_required_permission",
                                    "slug": "el-menor-tiene-solo-apellido-materno-y-viajara-con-su-madre-",
                                    "children": []
                                },
                                {
                                    "id": "2.1.1.4",
                                    "label": "Viajar\u00e1 con uno de sus padres y el otro ha fallecido",
                                    "desc": "Cuando el menor viaja acompa\u00f1ado por su \u00fanico padre o madre que a\u00fan est\u00e1 vivo",
                                    "type": "not_required_permission",
                                    "slug": "viajara-con-uno-de-sus-padres-y-el-otro-ha-fallecido",
                                    "children": []
                                },
                                {
                                    "id": "2.1.1.5",
                                    "label": "El menor fue adoptado por personas extranjeras y viajar\u00e1 por primera vez",
                                    "desc": "Cuando el menor viaja por primera vez luego de ser adoptado por personas extranjeras",
                                    "type": "document",
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
                                    "children": []
                                },
                                {
                                    "id": "2.1.1.6",
                                    "label": "Uno de los padres vive en el extranjero y autoriza el viaje",
                                    "desc": "Cuando el menor viaja acompa\u00f1ado por el padre o madre que est\u00e1 en el pa\u00eds, y el padre o madre en el extranjero es quien autoriza la salida del menor",
                                    "type": "document",
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
                                    "children": []
                                },
                                {
                                    "id": "2.1.1.7",
                                    "label": "Tiene autorizaci\u00f3n de viaje del menor\u00a0del tribunal Ni\u00f1os, Ni\u00f1as y Adolescentes",
                                    "desc": "Cuando el menor viaja con la persona que tiene la guarda legal con autorizaci\u00f3n de viaje",
                                    "type": "document",
                                    "slug": "tiene-autorizacion-de-viaje-del-menordel-tribunal-ninos,-ninas-y-adolescentes",
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
                                    "children": []
                                },
                                {
                                    "id": "2.1.1.8",
                                    "label": "Viajar\u00e1 a una actividad cultural, escolar o deportiva",
                                    "desc": "Cuando uno de los padres autoriza al otro a viajar con el menor para participar en actividad cultural, escolar, religiosa, deportiva u otra.",
                                    "type": "document",
                                    "slug": "viajara-a-una-actividad-cultural,-escolar-o-deportiva",
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
                                    "children": []
                                },
                                {
                                    "id": "2.1.1.9",
                                    "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
                                    "desc": "Cuando uno de los padres se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor.",
                                    "type": "document",
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
                                    "children": []
                                },
                                {
                                    "id": "2.1.1.10",
                                    "label": "No veo el caso del menor o tengo dudas para elegir",
                                    "desc": "No veo el caso del menor o tengo dudas para elegir",
                                    "type": "not_found",
                                    "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": "2.1.2",
                            "label": "Viajar\u00e1 con un tercero\u00a0",
                            "desc": null,
                            "type": null,
                            "slug": "viajara-con-un-tercero",
                            "children": [
                                {
                                    "id": "2.1.2.1",
                                    "label": "Viajar\u00e1 con la aerol\u00ednea",
                                    "desc": "Cuando el menor viaja con la Aerol\u00ednea y cuenta con la autorizaci\u00f3n de ambos padres, padre, madre o tutor legal",
                                    "type": "document",
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
                                    "children": []
                                },
                                {
                                    "id": "2.1.2.2",
                                    "label": "Viajar\u00e1 con el colegio, centro educativo o instituci\u00f3n cultural",
                                    "desc": "Cuando el menor viaja con  una academia, centro educativo o instituci\u00f3n cultural, y cuenta con la autorizaci\u00f3n de los padres, padre, madre o tutor legal",
                                    "type": "document",
                                    "slug": "viajara-con-el-colegio,-centro-educativo-o-institucion-cultural",
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
                                    "children": []
                                },
                                {
                                    "id": "2.1.2.3",
                                    "label": "Viajar\u00e1 con academia, selecci\u00f3n o liga deportiva",
                                    "desc": "Cuando el menor viaja con  una academia, selecci\u00f3 o liga deportiva, y cuenta con la autorizaci\u00f3n de ambos padres, padre, madre o tutor legal",
                                    "type": "document",
                                    "slug": "viajara-con-academia,-seleccion-o-liga-deportiva",
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
                                    "children": []
                                },
                                {
                                    "id": "2.1.2.4",
                                    "label": "Viaja con la persona que posee la guarda custodia (de hecho o legal)",
                                    "desc": "Cuando el menor viaja con la persona que tiene la guarda legal con autorizaci\u00f3n de viaje ",
                                    "type": "document",
                                    "slug": "viaja-con-la-persona-que-posee-la-guarda-custodia-(de-hecho-o-legal)",
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
                                    "children": []
                                },
                                {
                                    "id": "2.1.2.5",
                                    "label": "El menor tiene solo apellido materno y no viajar\u00e1 con su madre ",
                                    "desc": "Cuando el menor ha sido declarado solo por la madre y es ella quien autoriza a otra persona a viajar con el menor",
                                    "type": "document",
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
                                    "children": []
                                },
                                {
                                    "id": "2.1.2.6",
                                    "label": "Uno de los padres ha fallecido y no viajar\u00e1 con el padre sobreviviente",
                                    "desc": "Cuando el menor viaja con la persona que ha autorizado el padre o madre sobreviviente",
                                    "type": "document",
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
                                    "children": []
                                },
                                {
                                    "id": "2.1.2.7",
                                    "label": "Viajar\u00e1 con una persona autorizada por el tutor legal ",
                                    "desc": "Cuando el menor viaja con la persona que ha autorizado el tutor legal",
                                    "type": "document",
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
                                    "children": []
                                },
                                {
                                    "id": "2.1.2.8",
                                    "label": "Viajar\u00e1 con abuelos, t\u00edos, amigos u otras personas que no son los padres",
                                    "desc": "Cuando el menor viaja con terceros que han sido autorizado los padres o tutores legales",
                                    "type": "document",
                                    "slug": "viajara-con-abuelos,-tios,-amigos-u-otras-personas-que-no-son-los-padres",
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
                                    "children": []
                                },
                                {
                                    "id": "2.1.2.9",
                                    "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
                                    "desc": "Cuando uno de los padres se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
                                    "type": "document",
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
                                    "children": []
                                },
                                {
                                    "id": "2.1.2.10",
                                    "label": "No veo el caso del menor o tengo dudas para elegir",
                                    "desc": "No veo el caso del menor o tengo dudas para elegir",
                                    "type": "not_found",
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
                    "slug": "el-menor-no-ha-estado-mas-de-6-meses-en-el-pais",
                    "children": []
                }
            ]
        },
        {
            "id": "3",
            "label": "El menor es extranjero con residencia en la Rep\u00fablica Dominicana\u00a0",
            "desc": null,
            "type": null,
            "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana",
            "children": [
                {
                    "id": "3.1",
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "desc": null,
                    "type": null,
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "children": [
                        {
                            "id": "3.1.1",
                            "label": "Viajar\u00e1 con uno de los padres",
                            "desc": "Cuando el menor viaja con uno de los padres",
                            "type": null,
                            "slug": "viajara-con-uno-de-los-padres",
                            "children": [
                                {
                                    "id": "3.1.1.1",
                                    "label": "Uno de los padres autoriza al otro a viajar",
                                    "desc": "Cuando uno de los padres autoriza al otro a viajar con el menor",
                                    "type": "document",
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
                                    "children": []
                                },
                                {
                                    "id": "3.1.1.2",
                                    "label": "Viajar\u00e1 con la persona que posee la guarda legal",
                                    "desc": "Cuando el menor viaja con la persona que tiene la guarda legal de este",
                                    "type": "document",
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
                                    "children": []
                                },
                                {
                                    "id": "3.1.1.3",
                                    "label": "El menor tiene solo apellido materno y viajar\u00e1 con su madre ",
                                    "desc": "Cuando el menor ha sido declarado solo por la madre y es ella quien autoriza a otra persona a viajar con el menor",
                                    "type": "not_required_permission",
                                    "slug": "el-menor-tiene-solo-apellido-materno-y-viajara-con-su-madre-",
                                    "children": []
                                },
                                {
                                    "id": "3.1.1.4",
                                    "label": "Viajar\u00e1 con uno de sus padres y el otro ha fallecido",
                                    "desc": "Cuando el menor viaja acompa\u00f1ado por su \u00fanico padre o madre que a\u00fan est\u00e1 vivo",
                                    "type": "not_required_permission",
                                    "slug": "viajara-con-uno-de-sus-padres-y-el-otro-ha-fallecido",
                                    "children": []
                                },
                                {
                                    "id": "3.1.1.5",
                                    "label": "El menor fue adoptado por personas extranjeras y viaja por primera vez",
                                    "desc": "Cuando el menor adoptado viaja con uno de los padres adoptivos",
                                    "type": "document",
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
                                    "children": []
                                },
                                {
                                    "id": "3.1.1.6",
                                    "label": "Uno de los padres vive en el extranjero y autoriza el viaje",
                                    "desc": "Cuando el padre o madre que reside en el extranjero autoriza al otro padre o madre que residen en la Rep\u00fablica Dominicana a viajar con el menor",
                                    "type": "document",
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
                                    "children": []
                                },
                                {
                                    "id": "3.1.1.7",
                                    "label": "Tiene autorizaci\u00f3n de viaje del menor\u00a0del tribunal Ni\u00f1os, Ni\u00f1as y Adolescentes",
                                    "desc": "Cuando el menor viaja con la persona que tiene la guarda legal con autorizaci\u00f3n de viaje",
                                    "type": "document",
                                    "slug": "tiene-autorizacion-de-viaje-del-menordel-tribunal-ninos,-ninas-y-adolescentes",
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
                                    "children": []
                                },
                                {
                                    "id": "3.1.1.8",
                                    "label": "Viajar\u00e1 a una actividad cultural, escolar, religiosa, deportiva u otra",
                                    "desc": "Cuando uno de los padres autoriza al otro a viajar con el menor para participar en actividad cultural, escolar, religiosa, deportiva u otra.",
                                    "type": "document",
                                    "slug": "viajara-a-una-actividad-cultural,-escolar,-religiosa,-deportiva-u-otra",
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
                                    "children": []
                                },
                                {
                                    "id": "3.1.1.9",
                                    "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
                                    "desc": "Cuando uno de los padres se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor.",
                                    "type": "document",
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
                                    "children": []
                                },
                                {
                                    "id": "3.1.1.10",
                                    "label": "No veo el caso del menor o tengo dudas para elegir",
                                    "desc": "No veo el caso del menor o tengo dudas para elegir",
                                    "type": "not_found",
                                    "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": "3.1.2",
                            "label": "Viaja con un tercero\u00a0",
                            "desc": null,
                            "type": null,
                            "slug": "viaja-con-un-tercero",
                            "children": [
                                {
                                    "id": "3.1.2.1",
                                    "label": "Viajar\u00e1 con la aerol\u00ednea",
                                    "desc": "Cuando el menor viaja con la Aerol\u00ednea y cuenta con la autorizaci\u00f3n de ambos padres, padre, madre o tutor legal",
                                    "type": "document",
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
                                    "children": []
                                },
                                {
                                    "id": "3.1.2.2",
                                    "label": "Viajar\u00e1 con el colegio, centro educativo o instituci\u00f3n cultural",
                                    "desc": "Cuando el menor viaja con  una academia, centro educativo o instituci\u00f3n cultural, y cuenta con la autorizaci\u00f3n de los padres, padre, madre o tutor legal",
                                    "type": "document",
                                    "slug": "viajara-con-el-colegio,-centro-educativo-o-institucion-cultural",
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
                                    "children": []
                                },
                                {
                                    "id": "3.1.2.3",
                                    "label": "Viajar\u00e1 con academia, selecci\u00f3n o liga deportiva",
                                    "desc": "Cuando el menor viaja con  una academia, selecci\u00f3 o liga deportiva, y cuenta con la autorizaci\u00f3n de ambos padres, padre, madre o tutor legal",
                                    "type": "document",
                                    "slug": "viajara-con-academia,-seleccion-o-liga-deportiva",
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
                                    "children": []
                                },
                                {
                                    "id": "3.1.2.4",
                                    "label": "Viaja con la persona que posee la guarda custodia (de hecho o legal)",
                                    "desc": "Cuando el menor viaja con la persona que tiene la guarda legal con autorizaci\u00f3n de viaje ",
                                    "type": "document",
                                    "slug": "viaja-con-la-persona-que-posee-la-guarda-custodia-(de-hecho-o-legal)",
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
                                    "children": []
                                },
                                {
                                    "id": "3.1.2.5",
                                    "label": "El menor tiene solo apellido materno y no viajar\u00e1 con su madre ",
                                    "desc": "Cuando el menor ha sido declarado solo por la madre y es ella quien autoriza a otra persona a viajar con el menor",
                                    "type": "document",
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
                                    "children": []
                                },
                                {
                                    "id": "3.1.2.6",
                                    "label": "Uno de los padres ha fallecido y no viajar\u00e1 con el padre sobreviviente",
                                    "desc": "Cuando el menor viaja con la persona que ha autorizado el padre o madre sobreviviente",
                                    "type": "document",
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
                                    "children": []
                                },
                                {
                                    "id": "3.1.2.7",
                                    "label": "Viajar\u00e1 con una persona autorizada por el tutor legal ",
                                    "desc": "Cuando el menor viaja con la persona que ha autorizado el tutor legal",
                                    "type": "document",
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
                                    "children": []
                                },
                                {
                                    "id": "3.1.2.8",
                                    "label": "Viajar\u00e1 con abuelos, t\u00edos, amigos u otras personas que no son los padres",
                                    "desc": "Cuando el menor viaja con terceros que han sido autorizado los padres o tutores legales",
                                    "type": "document",
                                    "slug": "viajara-con-abuelos,-tios,-amigos-u-otras-personas-que-no-son-los-padres",
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
                                    "children": []
                                },
                                {
                                    "id": "3.1.2.9",
                                    "label": "Uno de los padres o tutores se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor",
                                    "desc": "Cuando uno de los padres se niega a autorizar el viaje o est\u00e1 ausente en la vida del menor.",
                                    "type": "document",
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
                                    "children": []
                                },
                                {
                                    "id": "3.1.2.10",
                                    "label": "No veo el caso del menor o tengo dudas para elegir",
                                    "desc": "No veo el caso del menor o tengo dudas para elegir",
                                    "type": "not_found",
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
                    "desc": null,
                    "type": "not_required_permission",
                    "slug": "el-menor-no-ha-estado-mas-de-6-meses-en-el-pais",
                    "children": []
                }
            ]
        },
        {
            "id": "4",
            "label": "El menor tiene estad\u00eda temporal como estudiante, deportista o artista",
            "desc": null,
            "type": null,
            "slug": "el-menor-tiene-estadia-temporal-como-estudiante,-deportista-o-artista",
            "children": [
                {
                    "id": "4.1",
                    "label": "El menor ha estado m\u00e1s de 6 meses en el pa\u00eds",
                    "desc": null,
                    "type": null,
                    "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
                    "children": [
                        {
                            "id": "4.1.1",
                            "label": "El menor viajar\u00e1 acompa\u00f1ado con la persona o entidad autorizada con la que entr\u00f3 y se dirigirse a su pa\u00eds de origen",
                            "desc": "EL menor saldra del pa\u00eds con la misma persona u organizaci\u00f3 con la que ingres\u00f3, y se dirige al mismo pa\u00eds de origen.",
                            "type": "document",
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
                            "children": []
                        },
                        {
                            "id": "4.1.2",
                            "label": "El menor viajar\u00e1 acompa\u00f1ado de ambos padres",
                            "desc": "No requiere el permiso de salida pero debe mostrar Acta de nacimiento del menor",
                            "type": "not_required_permission",
                            "slug": "el-menor-viajara-acompanado-de-ambos-padres",
                            "requirements": [
                                {
                                    "requirement": "No requiere el permiso, pero debe mostrar el acta de nacimiento del menor",
                                    "requirement_notes": null
                                }
                            ],
                            "children": []
                        },
                        {
                            "id": "4.1.3",
                            "label": "El menor viajar\u00e1 con uno de los padres",
                            "desc": "Cuando uno de los padres autoriza al otro a viajar con el menor",
                            "type": "document",
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
                            "children": []
                        },
                        {
                            "id": "4.1.4",
                            "label": "No veo el caso del menor o tengo dudas para elegir",
                            "desc": "No veo el caso del menor o tengo dudas para elegir",
                            "type": "not_found",
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
                    "slug": "el-menor-no-ha-estado-mas-de-6-meses-en-el-pais",
                    "requirements": [
                        {
                            "requirement": "No requiere el permiso",
                            "requirement_notes": "No lo requiere si el menor viaja acompa\u00f1ado con una de las personas con las que entro y se dirigirse a su pais de origen."
                        }
                    ],
                    "children": []
                }
            ]
        },
        {
            "id": "5",
            "label": "El menor es hijo/a de personal de organismos internacionales acreditados en el pa\u00eds",
            "desc": null,
            "type": null,
            "slug": "el-menor-es-hijo/a-de-personal-de-organismos-internacionales-acreditados-en-el-pais",
            "children": [
                {
                    "id": "5.1",
                    "label": "El menor viajar\u00e1 acompa\u00f1ado de ambos padres",
                    "desc": "Cuando el menor viaja con ambos padres",
                    "type": "document",
                    "slug": "el-menor-viajara-acompanado-de-ambos-padres",
                    "requirements": [
                        {
                            "requirement": "Nada",
                            "requirement_notes": "No requiere presentar PSM en Control Migratorio"
                        }
                    ],
                    "children": []
                },
                {
                    "id": "5.2",
                    "label": "El menor viajar\u00e1 con uno de los padres",
                    "desc": "Cuando el menor viaja con uno de los padres ",
                    "type": "document",
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
                    "children": []
                },
                {
                    "id": "5.3",
                    "label": "El menor viajar\u00e1 con un tercero\u00a0",
                    "desc": null,
                    "type": "document",
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
                    "children": []
                },
                {
                    "id": "5.4",
                    "label": "No veo el caso del menor o tengo dudas para elegir",
                    "desc": null,
                    "type": "not_found",
                    "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
                    "children": []
                }
            ]
        },
        {
            "id": "6",
            "label": "No veo el caso del menor o tengo dudas para elegir",
            "desc": "No veo el caso del menor o tengo dudas para elegir",
            "type": "not_found",
            "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
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
            "Término legal": "Homologación",
            "Descripción": "Reconocimiento formal de validez de documentos emitidos en el extranjero, que puede requerir traducción, apostilla/legalización y aprobación por entidades dominicanas.",
            "Término": "Notificándote",
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
    ]
}

export type HierarchyNode = typeof DATA_DUMB.cases[number] & {
    requirements: {
        requirement: string;
        requirement_notes: string;
    }[];
}
