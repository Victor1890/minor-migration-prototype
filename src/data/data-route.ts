export const DATA_ROUTER = {
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad": [
        {
            "id": "1",
            "label": "El menor es dominicano y no posee otra nacionalidad",
            "desc": null,
            "type": null,
            "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad"
        }
    ],
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-ambos-padres": [
        {
            "id": "1.1",
            "label": "Viajará con ambos padres",
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
        }
    ],
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-uno-de-los-padres": [
        {
            "id": "1.2",
            "label": "Viajará con uno de los padres",
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
                            "requirement": "Poder Notarial del padre o madre que no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría. ",
                            "requirement_notes": "· El padre que no viaja debe firmar el poder notarial autorizando la salida del menor\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en PuntoGOB "
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la cédula de identidad del padre o madre que realiza la solicitud",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompañante",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        }
                    ],
                    "children": []
                },
                {
                    "id": "1.2.2",
                    "label": "Viajará con la persona que posee la guarda legal",
                    "desc": "Cuando el menor viaja con la persona que tiene la guarda legal de este",
                    "type": "document",
                    "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial de los padres, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría",
                            "requirement_notes": "· Ambos padres o tutores deben firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompañante",
                            "requirement_notes": "De la página principal con los datos biométricos."
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos."
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                        }
                    ],
                    "children": []
                },
                {
                    "id": "1.2.3",
                    "label": "El menor tiene solo apellido materno y viajará con su madre ",
                    "desc": "Cuando el menor ha sido declarado solo por la madre y es ella quien le acompaña a viajar",
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
                    "label": "Viajará con uno de los padres y el otro ha fallecido",
                    "desc": "Cuando el menor viaja acompañado por su único padre o madre que aún está vivo",
                    "type": "not_required_permission",
                    "slug": "viajara-con-uno-de-los-padres-y-el-otro-ha-fallecido",
                    "requirements": [
                        {
                            "requirement": "No requiere el permiso, pero debe mostrar en Control Migratorio el acta de defunción y acta de nacimiento del menor",
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
                            "requirement": "Sentencia del tribunal  de niños, niñas y adolescentes que evidencie la adopción",
                            "requirement_notes": "· Ir al tribunal de niños, niñas y adolescentes\r\n· Solicitar la sentencia donde se les otorga la adopción, original y certificada. "
                        },
                        {
                            "requirement": "Poder Notarial del padre que tiene la patria potestad y no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría. ",
                            "requirement_notes": "· El padre debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la cédula o pasaporte del otro padre que autoriza",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del otro padre adoptivo que viaja con el menor",
                            "requirement_notes": "De la página principal con los datos biométricos."
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos."
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                        }
                    ],
                    "children": []
                },
                {
                    "id": "1.2.6",
                    "label": "Uno de los padres vive en el extranjero y autoriza el viaje",
                    "desc": "Cuando el menor viaja acompañado por el padre o madre que está en el país, y el padre o madre en el extranjero es quien autoriza la salida del menor",
                    "type": "document",
                    "slug": "uno-de-los-padres-vive-en-el-extranjero-y-autoriza-el-viaje",
                    "requirements": [
                        {
                            "requirement": "Poder consular otorgado en el país en donde se encuentra el padre (debe ser apostillado y sellado en cancilleria) o Poder Notarial legalizado del país donde se encuentre el padre en  original con apostilla de la Haya",
                            "requirement_notes": "· El padre en el extranjero debe firmar el poder consular (en el consulado más cercana) autorizando la salida del menor.\r\n· Este poder debe ser legalizado en el Ministerio de Relaciones Exteriores de la República Dominicana."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompañante",
                            "requirement_notes": "De la página principal con los datos biométricos."
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos."
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                        }
                    ],
                    "children": []
                },
                {
                    "id": "1.2.7",
                    "label": "Tiene autorización de viaje del menor del tribunal Niños, Niñas y Adolescentes",
                    "desc": "Cuando el menor viaja con la persona que tiene la guarda legal con autorización de viaje ",
                    "type": "document",
                    "slug": "tiene-autorizacion-de-viaje-del-menordel-tribunal-ninos-ninas-y-adolescentes",
                    "requirements": [
                        {
                            "requirement": "Autorización judicial (sentencia, auto o resolución) que autoriza el viaje del Menor",
                            "requirement_notes": "· Ir al tribunal de niños, niñas y adolescentes\r\n· Solicitar la sentencia donde se les otorga la Guarda Legal y Autorización de viaje del menor"
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la cédula de identidad del padre o madre que realiza la solicitud",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompañante",
                            "requirement_notes": "De la página principal con los datos biométricos."
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos."
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                        }
                    ],
                    "children": []
                },
                {
                    "id": "1.2.8",
                    "label": "Viajará a una actividad cultural, escolar, religiosa, deportiva u otra",
                    "desc": "Cuando uno de los padres autoriza al otro a viajar con el menor para participar en actividad cultural, escolar, religiosa, deportiva u otra.",
                    "type": "document",
                    "slug": "viajara-a-una-actividad-cultural-escolar-religiosa-deportiva-u-otra",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial del padre que no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría. ",
                            "requirement_notes": "· El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en PuntoGOB Sambil"
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la cédula de identidad del padre o madre que realiza la solicitud",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompañante",
                            "requirement_notes": "De la página principal con los datos biométricos."
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos."
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                        }
                    ],
                    "children": []
                },
                {
                    "id": "1.2.9",
                    "label": "Uno de los padres o tutores se niega a autorizar el viaje o está ausente en la vida del menor",
                    "desc": "Cuando uno de los padres se niega a autorizar el viaje o está ausente en la vida del menor.",
                    "type": "document",
                    "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
                    "requirements": [
                        {
                            "requirement": "Sentencia judicial que autoriza el viaje del Menor o sentencia judical que otorga la autoridad parental unilateral al padre que viaja",
                            "requirement_notes": "· Ir al tribunal de niños, niñas y adolescentes\r\n· Solicitar la sentencia donde se les otorga la patria potestad "
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la cédula de identidad del padre o  madre que realiza la solicitud",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del padre acompañante",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del padre acompañante",
                            "requirement_notes": "De la página principal con los datos biométricos."
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos."
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
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
        }
    ],
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-uno-de-los-padres/uno-de-los-padres-autoriza-al-otro-a-viajar": [
        {
            "id": "1.2.1",
            "label": "Uno de los padres autoriza al otro a viajar",
            "desc": "Cuando uno de los padres autoriza al otro a viajar con el menor",
            "type": "document",
            "slug": "uno-de-los-padres-autoriza-al-otro-a-viajar",
            "requirements": [
                {
                    "requirement": "Poder Notarial del padre o madre que no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría. ",
                    "requirement_notes": "· El padre que no viaja debe firmar el poder notarial autorizando la salida del menor\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en PuntoGOB "
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la cédula de identidad del padre o madre que realiza la solicitud",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompañante",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-uno-de-los-padres/viajara-con-la-persona-que-posee-la-guarda-legal": [
        {
            "id": "1.2.2",
            "label": "Viajará con la persona que posee la guarda legal",
            "desc": "Cuando el menor viaja con la persona que tiene la guarda legal de este",
            "type": "document",
            "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
            "requirements": [
                {
                    "requirement": "Poder Notarial de los padres, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría",
                    "requirement_notes": "· Ambos padres o tutores deben firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompañante",
                    "requirement_notes": "De la página principal con los datos biométricos."
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos."
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-uno-de-los-padres/el-menor-tiene-solo-apellido-materno-y-viajara-con-su-madre-": [
        {
            "id": "1.2.3",
            "label": "El menor tiene solo apellido materno y viajará con su madre ",
            "desc": "Cuando el menor ha sido declarado solo por la madre y es ella quien le acompaña a viajar",
            "type": "not_required_permission",
            "slug": "el-menor-tiene-solo-apellido-materno-y-viajara-con-su-madre-",
            "requirements": [
                {
                    "requirement": "Acta de nacimiento",
                    "requirement_notes": "No requiere el permiso, pero debe presentar acta de nacimiento en el  punto de Control Migratorio"
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-uno-de-los-padres/viajara-con-uno-de-los-padres-y-el-otro-ha-fallecido": [
        {
            "id": "1.2.4",
            "label": "Viajará con uno de los padres y el otro ha fallecido",
            "desc": "Cuando el menor viaja acompañado por su único padre o madre que aún está vivo",
            "type": "not_required_permission",
            "slug": "viajara-con-uno-de-los-padres-y-el-otro-ha-fallecido",
            "requirements": [
                {
                    "requirement": "No requiere el permiso, pero debe mostrar en Control Migratorio el acta de defunción y acta de nacimiento del menor",
                    "requirement_notes": null
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-uno-de-los-padres/el-menor-fue-adoptado-por-personas-extranjeras-y-viaja-por-primera-vez": [
        {
            "id": "1.2.5",
            "label": "El menor fue adoptado por personas extranjeras y viaja por primera vez",
            "desc": "cuando el menor viaja por primera vez luego de ser adoptado por personas extranjeras",
            "type": "document",
            "slug": "el-menor-fue-adoptado-por-personas-extranjeras-y-viaja-por-primera-vez",
            "requirements": [
                {
                    "requirement": "Sentencia del tribunal  de niños, niñas y adolescentes que evidencie la adopción",
                    "requirement_notes": "· Ir al tribunal de niños, niñas y adolescentes\r\n· Solicitar la sentencia donde se les otorga la adopción, original y certificada. "
                },
                {
                    "requirement": "Poder Notarial del padre que tiene la patria potestad y no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría. ",
                    "requirement_notes": "· El padre debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la cédula o pasaporte del otro padre que autoriza",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del otro padre adoptivo que viaja con el menor",
                    "requirement_notes": "De la página principal con los datos biométricos."
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos."
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-uno-de-los-padres/uno-de-los-padres-vive-en-el-extranjero-y-autoriza-el-viaje": [
        {
            "id": "1.2.6",
            "label": "Uno de los padres vive en el extranjero y autoriza el viaje",
            "desc": "Cuando el menor viaja acompañado por el padre o madre que está en el país, y el padre o madre en el extranjero es quien autoriza la salida del menor",
            "type": "document",
            "slug": "uno-de-los-padres-vive-en-el-extranjero-y-autoriza-el-viaje",
            "requirements": [
                {
                    "requirement": "Poder consular otorgado en el país en donde se encuentra el padre (debe ser apostillado y sellado en cancilleria) o Poder Notarial legalizado del país donde se encuentre el padre en  original con apostilla de la Haya",
                    "requirement_notes": "· El padre en el extranjero debe firmar el poder consular (en el consulado más cercana) autorizando la salida del menor.\r\n· Este poder debe ser legalizado en el Ministerio de Relaciones Exteriores de la República Dominicana."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompañante",
                    "requirement_notes": "De la página principal con los datos biométricos."
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos."
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-uno-de-los-padres/tiene-autorizacion-de-viaje-del-menordel-tribunal-ninos-ninas-y-adolescentes": [
        {
            "id": "1.2.7",
            "label": "Tiene autorización de viaje del menor del tribunal Niños, Niñas y Adolescentes",
            "desc": "Cuando el menor viaja con la persona que tiene la guarda legal con autorización de viaje ",
            "type": "document",
            "slug": "tiene-autorizacion-de-viaje-del-menordel-tribunal-ninos-ninas-y-adolescentes",
            "requirements": [
                {
                    "requirement": "Autorización judicial (sentencia, auto o resolución) que autoriza el viaje del Menor",
                    "requirement_notes": "· Ir al tribunal de niños, niñas y adolescentes\r\n· Solicitar la sentencia donde se les otorga la Guarda Legal y Autorización de viaje del menor"
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la cédula de identidad del padre o madre que realiza la solicitud",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompañante",
                    "requirement_notes": "De la página principal con los datos biométricos."
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos."
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-uno-de-los-padres/viajara-a-una-actividad-cultural-escolar-religiosa-deportiva-u-otra": [
        {
            "id": "1.2.8",
            "label": "Viajará a una actividad cultural, escolar, religiosa, deportiva u otra",
            "desc": "Cuando uno de los padres autoriza al otro a viajar con el menor para participar en actividad cultural, escolar, religiosa, deportiva u otra.",
            "type": "document",
            "slug": "viajara-a-una-actividad-cultural-escolar-religiosa-deportiva-u-otra",
            "requirements": [
                {
                    "requirement": "Poder Notarial del padre que no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría. ",
                    "requirement_notes": "· El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en PuntoGOB Sambil"
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la cédula de identidad del padre o madre que realiza la solicitud",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompañante",
                    "requirement_notes": "De la página principal con los datos biométricos."
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos."
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-uno-de-los-padres/uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor": [
        {
            "id": "1.2.9",
            "label": "Uno de los padres o tutores se niega a autorizar el viaje o está ausente en la vida del menor",
            "desc": "Cuando uno de los padres se niega a autorizar el viaje o está ausente en la vida del menor.",
            "type": "document",
            "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
            "requirements": [
                {
                    "requirement": "Sentencia judicial que autoriza el viaje del Menor o sentencia judical que otorga la autoridad parental unilateral al padre que viaja",
                    "requirement_notes": "· Ir al tribunal de niños, niñas y adolescentes\r\n· Solicitar la sentencia donde se les otorga la patria potestad "
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la cédula de identidad del padre o  madre que realiza la solicitud",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del padre acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del padre acompañante",
                    "requirement_notes": "De la página principal con los datos biométricos."
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos."
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-uno-de-los-padres/no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir": [
        {
            "id": "1.2.10",
            "label": "No veo el caso del menor o tengo dudas para elegir",
            "desc": "No veo el caso del menor o tengo dudas para elegir",
            "type": "not_found",
            "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
            "children": []
        }
    ],
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-un-tercero": [
        {
            "id": "1.3",
            "label": "Viajará con un tercero ",
            "desc": "Cuando ambos padres o tutor legal autoriza a otra persona a viaja con el menor (familiares, amigos, aerolínea, centro educativo, liga deportiva, institución cultural, entre otros)",
            "type": null,
            "slug": "viajara-con-un-tercero",
            "children": [
                {
                    "id": "1.3.1",
                    "label": "Viajará con la aerolínea",
                    "desc": "Cuando el menor viaja con la Aerolínea y cuenta con la autorización de ambos padres, padre, madre o tutor legal",
                    "type": "document",
                    "slug": "viajara-con-la-aerolinea",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial de ambos padres, padre, madre o tutor (según el caso) legal autorizando la salida del menor del país con la aerolínea, legalizado por procuraduría o sentencia judicial",
                            "requirement_notes": "· El padre que no viaja debe firmar el poder notarial autorizando la salida del menor\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en PuntoGOB Sambil"
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la cédula de la o las personas que autorizan",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
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
                    "label": "Viajará con el colegio, centro educativo o institución cultural",
                    "desc": "Cuando el menor viaja con  una academia, centro educativo o institución cultural, y cuenta con la autorización de los padres, padre, madre o tutor legal",
                    "type": "document",
                    "slug": "viajara-con-el-colegio-centro-educativo-o-institucion-cultural",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial de los padres o tutores, autorizando la salida del menor del país con el centro educativo, legalizado por procuraduría",
                            "requirement_notes": "· Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerolínea. \r\n· Este poder debe ser legalizado en la Procuraduría General de la República.\r\n· Los padres de todos los menores pueden hacer un solo poder notarial, donde estén las firmas de todos los padres que autorizan la salida de los menores."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompañante",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        }
                    ],
                    "children": []
                },
                {
                    "id": "1.3.3",
                    "label": "Viajará con academia, selección o liga deportiva",
                    "desc": "Cuando el menor viaja con  una academia, selecció o liga deportiva, y cuenta con la autorización de ambos padres, padre, madre o tutor legal",
                    "type": "document",
                    "slug": "viajara-con-academia-seleccion-o-liga-deportiva",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial (colectivo o individual) de los padres, autorizando la salida del o los menores del país, legalizado por procuraduría. En caso de que los padres esten fuera del pais, debera entregar el poder consular. En caso de que uno de los padres no quiere que viaje o no este presente en la vida del menor, debera entregar Autorizacion Judicial. ",
                            "requirement_notes": "· Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerolínea. \r\n· Este poder debe ser legalizado en la Procuraduría General de la República.\r\n· Los padres de todos los menores pueden hacer un solo poder notarial, donde estén las firmas de todos los padres que autorizan la salida de los menores."
                        },
                        {
                            "requirement": "Carta o comunicación de la organización (Academia, iglesia o liga Deportiva) local especificando el motivo del viaje",
                            "requirement_notes": "Opcional"
                        },
                        {
                            "requirement": "Carta de invitación de la actividad a la que asistirá el menor",
                            "requirement_notes": "Opcional"
                        },
                        {
                            "requirement": "Fotos o copias de las actas de nacimiento originales del (de los)  menor(es) , con el código QR legible  ",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompañante o responsable",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        }
                    ],
                    "children": []
                },
                {
                    "id": "1.3.4",
                    "label": "Viajará con la persona que posee la guarda custodia (de hecho o legal)",
                    "desc": "Cuando el menor viaja con la persona que tiene la guarda legal con autorización de viaje ",
                    "type": "document",
                    "slug": "viajara-con-la-persona-que-posee-la-guarda-custodia-(de-hecho-o-legal)",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial de ambos padres, autorizando la salida del menor del país con el guarda custodia (de hecho o legal), legalizado por procuraduría",
                            "requirement_notes": "· Ambos padres deben firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Fotos o copias de las cédulas de identidad del padre y de la madre; o del tutor ",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la cédula del acompañante ( si aplica)",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompañante",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        }
                    ],
                    "children": []
                },
                {
                    "id": "1.3.5",
                    "label": "El menor tiene solo apellido materno y no viajará con su madre ",
                    "desc": "Cuando el menor ha sido declarado solo por la madre y es ella quien autoriza a otra persona a viajar con el menor",
                    "type": "document",
                    "slug": "el-menor-tiene-solo-apellido-materno-y-no-viajara-con-su-madre-",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial de la madre, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría",
                            "requirement_notes": "· La madre debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la cédula de identidad de la madre ",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la cédula de identidad del acompañante (si aplica)",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompañante",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        }
                    ],
                    "children": []
                },
                {
                    "id": "1.3.6",
                    "label": "Uno de los padres ha fallecido y no viajará con el padre sobreviviente",
                    "desc": "Cuando el menor viaja con la persona que ha autorizado el padre o madre sobreviviente",
                    "type": "document",
                    "slug": "uno-de-los-padres-ha-fallecido-y-no-viajara-con-el-padre-sobreviviente",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial del padre sobreviviente, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría",
                            "requirement_notes": "· El padre sobreviviente debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                        },
                        {
                            "requirement": "Acta de defunción del padre fallecido  con codigo QR y legible",
                            "requirement_notes": "Si el padre o madre fallece en el extranjero, debe presentar Acta de defunción extranjera (Certificate of Death). Aquellas que no sean en ingles, portuges, italiano deben ser traducidas ya que el personal no domina otros idiomas"
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la cédula de identidad del padre o madre que realiza la solicitud",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompañante",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        }
                    ],
                    "children": []
                },
                {
                    "id": "1.3.7",
                    "label": "Viajará con una persona autorizada por el tutor legal ",
                    "desc": "Cuando el menor viaja con la persona que ha autorizado el tutor legal",
                    "type": "document",
                    "slug": "viajara-con-una-persona-autorizada-por-el-tutor-legal-",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial del tutor (es) legal, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría",
                            "requirement_notes": "· El tutor legal debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la cédula de identidad de el o los tutores que realizan la solicitud",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompañante",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                        },
                        {
                            "requirement": "Sentencia que otorga la tutoría legal del menor",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Cédula del acompañante",
                            "requirement_notes": null
                        }
                    ],
                    "children": []
                },
                {
                    "id": "1.3.8",
                    "label": "Viajará con abuelos, tíos, amigos u otras personas que no son los padres",
                    "desc": "Cuando el menor viaja con terceros que han sido autorizado los padres o tutores legales",
                    "type": "document",
                    "slug": "viajara-con-abuelos-tios-amigos-u-otras-personas-que-no-son-los-padres",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial de los padres, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría",
                            "requirement_notes": "· Ambos padres deben firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Fotos o copia sde las cédulas de identidad de ambos padres o tutor (es) ",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompañante",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        },
                        {
                            "requirement": "Cédula del acompañante ",
                            "requirement_notes": null
                        }
                    ],
                    "children": []
                },
                {
                    "id": "1.3.9",
                    "label": "Uno de los padres o tutores se niega a autorizar el viaje o está ausente en la vida del menor",
                    "desc": "Cuando no se tiene la autorización de viaje de parte de uno de los padres",
                    "type": "document",
                    "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
                    "requirements": [
                        {
                            "requirement": "Sentencia Judicial que otorga la autorización de viaje del menor",
                            "requirement_notes": "· Ir al tribunal de niños, niñas y adolescentes\r\n· Solicitar la sentencia donde se les otorga la autorización de viaje "
                        },
                        {
                            "requirement": "Poder Notarial del padre que tiene la autorización de viaje y no viaja, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría",
                            "requirement_notes": "· El padre debe firmar el poder notarial autorizando la salida del menor\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil"
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la cédula de identidad del padre o madre que realiza la solicitud",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Cédula de identidad del acompañante (si aplica)",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompañante",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
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
    ],
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-un-tercero/viajara-con-la-aerolinea": [
        {
            "id": "1.3.1",
            "label": "Viajará con la aerolínea",
            "desc": "Cuando el menor viaja con la Aerolínea y cuenta con la autorización de ambos padres, padre, madre o tutor legal",
            "type": "document",
            "slug": "viajara-con-la-aerolinea",
            "requirements": [
                {
                    "requirement": "Poder Notarial de ambos padres, padre, madre o tutor (según el caso) legal autorizando la salida del menor del país con la aerolínea, legalizado por procuraduría o sentencia judicial",
                    "requirement_notes": "· El padre que no viaja debe firmar el poder notarial autorizando la salida del menor\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en PuntoGOB Sambil"
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la cédula de la o las personas que autorizan",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                },
                {
                    "requirement": "Boleto o reserva del viaje",
                    "requirement_notes": null
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-un-tercero/viajara-con-el-colegio-centro-educativo-o-institucion-cultural": [
        {
            "id": "1.3.2",
            "label": "Viajará con el colegio, centro educativo o institución cultural",
            "desc": "Cuando el menor viaja con  una academia, centro educativo o institución cultural, y cuenta con la autorización de los padres, padre, madre o tutor legal",
            "type": "document",
            "slug": "viajara-con-el-colegio-centro-educativo-o-institucion-cultural",
            "requirements": [
                {
                    "requirement": "Poder Notarial de los padres o tutores, autorizando la salida del menor del país con el centro educativo, legalizado por procuraduría",
                    "requirement_notes": "· Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerolínea. \r\n· Este poder debe ser legalizado en la Procuraduría General de la República.\r\n· Los padres de todos los menores pueden hacer un solo poder notarial, donde estén las firmas de todos los padres que autorizan la salida de los menores."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompañante",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-un-tercero/viajara-con-academia-seleccion-o-liga-deportiva": [
        {
            "id": "1.3.3",
            "label": "Viajará con academia, selección o liga deportiva",
            "desc": "Cuando el menor viaja con  una academia, selecció o liga deportiva, y cuenta con la autorización de ambos padres, padre, madre o tutor legal",
            "type": "document",
            "slug": "viajara-con-academia-seleccion-o-liga-deportiva",
            "requirements": [
                {
                    "requirement": "Poder Notarial (colectivo o individual) de los padres, autorizando la salida del o los menores del país, legalizado por procuraduría. En caso de que los padres esten fuera del pais, debera entregar el poder consular. En caso de que uno de los padres no quiere que viaje o no este presente en la vida del menor, debera entregar Autorizacion Judicial. ",
                    "requirement_notes": "· Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerolínea. \r\n· Este poder debe ser legalizado en la Procuraduría General de la República.\r\n· Los padres de todos los menores pueden hacer un solo poder notarial, donde estén las firmas de todos los padres que autorizan la salida de los menores."
                },
                {
                    "requirement": "Carta o comunicación de la organización (Academia, iglesia o liga Deportiva) local especificando el motivo del viaje",
                    "requirement_notes": "Opcional"
                },
                {
                    "requirement": "Carta de invitación de la actividad a la que asistirá el menor",
                    "requirement_notes": "Opcional"
                },
                {
                    "requirement": "Fotos o copias de las actas de nacimiento originales del (de los)  menor(es) , con el código QR legible  ",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompañante o responsable",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-un-tercero/viajara-con-la-persona-que-posee-la-guarda-custodia-(de-hecho-o-legal)": [
        {
            "id": "1.3.4",
            "label": "Viajará con la persona que posee la guarda custodia (de hecho o legal)",
            "desc": "Cuando el menor viaja con la persona que tiene la guarda legal con autorización de viaje ",
            "type": "document",
            "slug": "viajara-con-la-persona-que-posee-la-guarda-custodia-(de-hecho-o-legal)",
            "requirements": [
                {
                    "requirement": "Poder Notarial de ambos padres, autorizando la salida del menor del país con el guarda custodia (de hecho o legal), legalizado por procuraduría",
                    "requirement_notes": "· Ambos padres deben firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                    "requirement_notes": null
                },
                {
                    "requirement": "Fotos o copias de las cédulas de identidad del padre y de la madre; o del tutor ",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la cédula del acompañante ( si aplica)",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompañante",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-un-tercero/el-menor-tiene-solo-apellido-materno-y-no-viajara-con-su-madre-": [
        {
            "id": "1.3.5",
            "label": "El menor tiene solo apellido materno y no viajará con su madre ",
            "desc": "Cuando el menor ha sido declarado solo por la madre y es ella quien autoriza a otra persona a viajar con el menor",
            "type": "document",
            "slug": "el-menor-tiene-solo-apellido-materno-y-no-viajara-con-su-madre-",
            "requirements": [
                {
                    "requirement": "Poder Notarial de la madre, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría",
                    "requirement_notes": "· La madre debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la cédula de identidad de la madre ",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la cédula de identidad del acompañante (si aplica)",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompañante",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-un-tercero/uno-de-los-padres-ha-fallecido-y-no-viajara-con-el-padre-sobreviviente": [
        {
            "id": "1.3.6",
            "label": "Uno de los padres ha fallecido y no viajará con el padre sobreviviente",
            "desc": "Cuando el menor viaja con la persona que ha autorizado el padre o madre sobreviviente",
            "type": "document",
            "slug": "uno-de-los-padres-ha-fallecido-y-no-viajara-con-el-padre-sobreviviente",
            "requirements": [
                {
                    "requirement": "Poder Notarial del padre sobreviviente, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría",
                    "requirement_notes": "· El padre sobreviviente debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                },
                {
                    "requirement": "Acta de defunción del padre fallecido  con codigo QR y legible",
                    "requirement_notes": "Si el padre o madre fallece en el extranjero, debe presentar Acta de defunción extranjera (Certificate of Death). Aquellas que no sean en ingles, portuges, italiano deben ser traducidas ya que el personal no domina otros idiomas"
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la cédula de identidad del padre o madre que realiza la solicitud",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompañante",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-un-tercero/viajara-con-una-persona-autorizada-por-el-tutor-legal-": [
        {
            "id": "1.3.7",
            "label": "Viajará con una persona autorizada por el tutor legal ",
            "desc": "Cuando el menor viaja con la persona que ha autorizado el tutor legal",
            "type": "document",
            "slug": "viajara-con-una-persona-autorizada-por-el-tutor-legal-",
            "requirements": [
                {
                    "requirement": "Poder Notarial del tutor (es) legal, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría",
                    "requirement_notes": "· El tutor legal debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la cédula de identidad de el o los tutores que realizan la solicitud",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompañante",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                },
                {
                    "requirement": "Sentencia que otorga la tutoría legal del menor",
                    "requirement_notes": null
                },
                {
                    "requirement": "Cédula del acompañante",
                    "requirement_notes": null
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-un-tercero/viajara-con-abuelos-tios-amigos-u-otras-personas-que-no-son-los-padres": [
        {
            "id": "1.3.8",
            "label": "Viajará con abuelos, tíos, amigos u otras personas que no son los padres",
            "desc": "Cuando el menor viaja con terceros que han sido autorizado los padres o tutores legales",
            "type": "document",
            "slug": "viajara-con-abuelos-tios-amigos-u-otras-personas-que-no-son-los-padres",
            "requirements": [
                {
                    "requirement": "Poder Notarial de los padres, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría",
                    "requirement_notes": "· Ambos padres deben firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                    "requirement_notes": null
                },
                {
                    "requirement": "Fotos o copia sde las cédulas de identidad de ambos padres o tutor (es) ",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompañante",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                },
                {
                    "requirement": "Cédula del acompañante ",
                    "requirement_notes": null
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-un-tercero/uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor": [
        {
            "id": "1.3.9",
            "label": "Uno de los padres o tutores se niega a autorizar el viaje o está ausente en la vida del menor",
            "desc": "Cuando no se tiene la autorización de viaje de parte de uno de los padres",
            "type": "document",
            "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
            "requirements": [
                {
                    "requirement": "Sentencia Judicial que otorga la autorización de viaje del menor",
                    "requirement_notes": "· Ir al tribunal de niños, niñas y adolescentes\r\n· Solicitar la sentencia donde se les otorga la autorización de viaje "
                },
                {
                    "requirement": "Poder Notarial del padre que tiene la autorización de viaje y no viaja, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría",
                    "requirement_notes": "· El padre debe firmar el poder notarial autorizando la salida del menor\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil"
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la cédula de identidad del padre o madre que realiza la solicitud",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Cédula de identidad del acompañante (si aplica)",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompañante",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-dominicano-y-no-posee-otra-nacionalidad/viajara-con-un-tercero/no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir": [
        {
            "id": "1.3.10",
            "label": "No veo el caso del menor o tengo dudas para elegir",
            "desc": "No veo el caso del menor o tengo dudas para elegir",
            "type": "not_found",
            "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
            "children": []
        }
    ],
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero": [
        {
            "id": "2",
            "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero ",
            "desc": null,
            "type": null,
            "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero"
        }
    ],
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais": [
        {
            "id": "2.1",
            "label": "El menor ha estado más de 6 meses en el país",
            "desc": null,
            "type": null,
            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
            "children": [
                {
                    "id": "2.1.1",
                    "label": "Viajará con uno de los padres",
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
                                    "requirement": "Poder Notarial del padre o madre que no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría",
                                    "requirement_notes": "· El padre que no viaja debe firmar el poder notarial autorizando la salida del menor\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en PuntoGOB "
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la cédula de identidad del padre o madre que realiza la solicitud",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompañante",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                                }
                            ],
                            "children": []
                        },
                        {
                            "id": "2.1.1.2",
                            "label": "Viajará con la persona que posee la guarda legal",
                            "desc": "Cuando el menor viaja con la persona que tiene la guarda legal de este",
                            "type": "document",
                            "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
                            "requirements": [
                                {
                                    "requirement": "Poder Notarial de los padres, autorizando la salida del menor del país con el guarda, legalizado por procuraduría",
                                    "requirement_notes": "· Ambos padres o tutores deben firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompañante",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                                }
                            ],
                            "children": []
                        },
                        {
                            "id": "2.1.1.3",
                            "label": "El menor tiene solo apellido materno y viajará con su madre ",
                            "desc": "Cuando el menor ha sido declarado solo por la madre y es ella quien le acompaña a viajar",
                            "type": "not_required_permission",
                            "slug": "el-menor-tiene-solo-apellido-materno-y-viajara-con-su-madre-",
                            "children": []
                        },
                        {
                            "id": "2.1.1.4",
                            "label": "Viajará con uno de sus padres y el otro ha fallecido",
                            "desc": "Cuando el menor viaja acompañado por su único padre o madre que aún está vivo",
                            "type": "not_required_permission",
                            "slug": "viajara-con-uno-de-sus-padres-y-el-otro-ha-fallecido",
                            "children": []
                        },
                        {
                            "id": "2.1.1.5",
                            "label": "El menor fue adoptado por personas extranjeras y viajará por primera vez",
                            "desc": "Cuando el menor viaja por primera vez luego de ser adoptado por personas extranjeras",
                            "type": "document",
                            "slug": "el-menor-fue-adoptado-por-personas-extranjeras-y-viajara-por-primera-vez",
                            "requirements": [
                                {
                                    "requirement": "Sentencia del tribunal  de niños, niñas y adolescentes que evidencie la adopción",
                                    "requirement_notes": "· Ir al tribunal de niños, niñas y adolescentes\r\n· Solicitar la sentencia donde se les otorga la adopción, original y certificada. "
                                },
                                {
                                    "requirement": "Poder Notarial del padre que tiene la patria potestad y no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría",
                                    "requirement_notes": "· El padre debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la cédula o pasaporte del otro padre que autoriza",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del otro padre adoptivo que viaja con el menor",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                                }
                            ],
                            "children": []
                        },
                        {
                            "id": "2.1.1.6",
                            "label": "Uno de los padres vive en el extranjero y autoriza el viaje",
                            "desc": "Cuando el menor viaja acompañado por el padre o madre que está en el país, y el padre o madre en el extranjero es quien autoriza la salida del menor",
                            "type": "document",
                            "slug": "uno-de-los-padres-vive-en-el-extranjero-y-autoriza-el-viaje",
                            "requirements": [
                                {
                                    "requirement": "Poder consular otorgado en el país en donde se encuentra el padre (debe ser apostillado y sellado en cancilleria) o Poder Notarial legalizado del país donde se encuentre el padre en  original con apostilla de la Haya",
                                    "requirement_notes": "· El padre en el extranjero debe firmar el poder consular (en el consulado más cercana) autorizando la salida del menor.\r\n· Este poder debe ser legalizado en el Ministerio de Relaciones Exteriores de la República Dominicana."
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompañante",
                                    "requirement_notes": "De la página principal con los datos biométricos."
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la página principal con los datos biométricos."
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                                }
                            ],
                            "children": []
                        },
                        {
                            "id": "2.1.1.7",
                            "label": "Tiene autorización de viaje del menor del tribunal Niños, Niñas y Adolescentes",
                            "desc": "Cuando el menor viaja con la persona que tiene la guarda legal con autorización de viaje",
                            "type": "document",
                            "slug": "tiene-autorizacion-de-viaje-del-menordel-tribunal-ninos-ninas-y-adolescentes",
                            "requirements": [
                                {
                                    "requirement": "Autorización judicial (sentencia, auto o resolución) que autoriza el viaje del Menor",
                                    "requirement_notes": "· Ir al tribunal de niños, niñas y adolescentes\r\n· Solicitar la sentencia donde se les otorga la Guarda Legal y Autorización de viaje del menor"
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la cédula de identidad del padre o madre que realiza la solicitud",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompañante",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                                }
                            ],
                            "children": []
                        },
                        {
                            "id": "2.1.1.8",
                            "label": "Viajará a una actividad cultural, escolar o deportiva",
                            "desc": "Cuando uno de los padres autoriza al otro a viajar con el menor para participar en actividad cultural, escolar, religiosa, deportiva u otra.",
                            "type": "document",
                            "slug": "viajara-a-una-actividad-cultural-escolar-o-deportiva",
                            "requirements": [
                                {
                                    "requirement": "Poder Notarial del padre que no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría",
                                    "requirement_notes": "· El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en PuntoGOB Sambil"
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la cédula de identidad del padre o madre que realiza la solicitud",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompañante",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                                }
                            ],
                            "children": []
                        },
                        {
                            "id": "2.1.1.9",
                            "label": "Uno de los padres o tutores se niega a autorizar el viaje o está ausente en la vida del menor",
                            "desc": "Cuando uno de los padres se niega a autorizar el viaje o está ausente en la vida del menor.",
                            "type": "document",
                            "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
                            "requirements": [
                                {
                                    "requirement": "Sentencia judicial que autoriza el viaje del Menor o sentencia judical que otorga la autoridad parental unilateral al padre que viaja",
                                    "requirement_notes": "· Ir al tribunal de niños, niñas y adolescentes\r\n· Solicitar la sentencia donde se les otorga la patria potestad "
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la cédula de identidad del padre o  madre que realiza la solicitud",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del padre acompañante",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del padre acompañante",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
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
                    "label": "Viajará con un tercero ",
                    "desc": null,
                    "type": null,
                    "slug": "viajara-con-un-tercero",
                    "children": [
                        {
                            "id": "2.1.2.1",
                            "label": "Viajará con la aerolínea",
                            "desc": "Cuando el menor viaja con la Aerolínea y cuenta con la autorización de ambos padres, padre, madre o tutor legal",
                            "type": "document",
                            "slug": "viajara-con-la-aerolinea",
                            "requirements": [
                                {
                                    "requirement": "Poder Notarial de ambos padres, padre, madre o tutor (según el caso) legal autorizando la salida del menor del país con la aerolínea, legalizado por procuraduría o sentencia judicial",
                                    "requirement_notes": "· El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en PuntoGOB Sambil"
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la cédula de la o las personas que autorizan",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
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
                            "label": "Viajará con el colegio, centro educativo o institución cultural",
                            "desc": "Cuando el menor viaja con  una academia, centro educativo o institución cultural, y cuenta con la autorización de los padres, padre, madre o tutor legal",
                            "type": "document",
                            "slug": "viajara-con-el-colegio-centro-educativo-o-institucion-cultural",
                            "requirements": [
                                {
                                    "requirement": "Poder Notarial de los padres o tutores, autorizando la salida del menor del país con el centro educativo, legalizado por procuraduría",
                                    "requirement_notes": "· Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerolínea. \r\n· Este poder debe ser legalizado en la Procuraduría General de la República.\r\n· Los padres de todos los menores pueden hacer un solo poder notarial, donde estén las firmas de todos los padres que autorizan la salida de los menores."
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompañante",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                                }
                            ],
                            "children": []
                        },
                        {
                            "id": "2.1.2.3",
                            "label": "Viajará con academia, selección o liga deportiva",
                            "desc": "Cuando el menor viaja con  una academia, selecció o liga deportiva, y cuenta con la autorización de ambos padres, padre, madre o tutor legal",
                            "type": "document",
                            "slug": "viajara-con-academia-seleccion-o-liga-deportiva",
                            "requirements": [
                                {
                                    "requirement": "Poder Notarial (colectivo o individual) de los padres, autorizando la salida del o los menores del país, legalizado por procuraduría. En caso de que los padres esten fuera del pais, debera entregar el poder consular. En caso de que uno de los padres no quiere que viaje o no este presente en la vida del menor, debera entregar Autorizacion Judicial. ",
                                    "requirement_notes": "· Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerolínea. \r\n· Este poder debe ser legalizado en la Procuraduría General de la República.\r\n· Los padres de todos los menores pueden hacer un solo poder notarial, donde estén las firmas de todos los padres que autorizan la salida de los menores."
                                },
                                {
                                    "requirement": "Carta o comunicación de la organización (Academia, iglesia o liga Deportiva) local especificando el motivo del viaje",
                                    "requirement_notes": "Opcional"
                                },
                                {
                                    "requirement": "Carta de invitación de la actividad a la que asistira el menor",
                                    "requirement_notes": "Opcional"
                                },
                                {
                                    "requirement": "Fotos o copias de las actas de nacimiento originales del (de los)  menor(es) , con el código QR legible  ",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompañante o responsable",
                                    "requirement_notes": "De la página principal con los datos biométricos."
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la página principal con los datos biométricos."
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                                }
                            ],
                            "children": []
                        },
                        {
                            "id": "2.1.2.4",
                            "label": "Viaja con la persona que posee la guarda custodia (de hecho o legal)",
                            "desc": "Cuando el menor viaja con la persona que tiene la guarda legal con autorización de viaje ",
                            "type": "document",
                            "slug": "viaja-con-la-persona-que-posee-la-guarda-custodia-(de-hecho-o-legal)",
                            "requirements": [
                                {
                                    "requirement": "Poder Notarial de ambos padres, autorizando la salida del menor del país con el guarda custodia (de hecho o legal), legalizado por procuraduría. ",
                                    "requirement_notes": "· Ambos padres deben firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Fotos o copias de las cédulas de identidad del padre y de la madre; o del tutor ",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la cédula del acompañante ( si aplica)",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompañante",
                                    "requirement_notes": "De la página principal con los datos biométricos."
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la página principal con los datos biométricos."
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                                }
                            ],
                            "children": []
                        },
                        {
                            "id": "2.1.2.5",
                            "label": "El menor tiene solo apellido materno y no viajará con su madre ",
                            "desc": "Cuando el menor ha sido declarado solo por la madre y es ella quien autoriza a otra persona a viajar con el menor",
                            "type": "document",
                            "slug": "el-menor-tiene-solo-apellido-materno-y-no-viajara-con-su-madre-",
                            "requirements": [
                                {
                                    "requirement": "Poder Notarial de la madre, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría",
                                    "requirement_notes": "· La madre debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la cédula de identidad de la madre ",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la cédula de identidad del acompañante (si aplica)",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompañante",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                                }
                            ],
                            "children": []
                        },
                        {
                            "id": "2.1.2.6",
                            "label": "Uno de los padres ha fallecido y no viajará con el padre sobreviviente",
                            "desc": "Cuando el menor viaja con la persona que ha autorizado el padre o madre sobreviviente",
                            "type": "document",
                            "slug": "uno-de-los-padres-ha-fallecido-y-no-viajara-con-el-padre-sobreviviente",
                            "requirements": [
                                {
                                    "requirement": "Poder Notarial del padre sobreviviente, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría",
                                    "requirement_notes": "· El padre sobreviviente debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la cédula de identidad del padre o madre que realiza la solicitud",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompañante",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                                },
                                {
                                    "requirement": "Acta de defunción del padre fallecido  con codigo QR legible",
                                    "requirement_notes": null
                                }
                            ],
                            "children": []
                        },
                        {
                            "id": "2.1.2.7",
                            "label": "Viajará con una persona autorizada por el tutor legal ",
                            "desc": "Cuando el menor viaja con la persona que ha autorizado el tutor legal",
                            "type": "document",
                            "slug": "viajara-con-una-persona-autorizada-por-el-tutor-legal-",
                            "requirements": [
                                {
                                    "requirement": "Poder Notarial del tutor (es) legal, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría",
                                    "requirement_notes": "· El tutor legal debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la cédula de identidad de el o los tutores que realizan la solicitud",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompañante",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                                },
                                {
                                    "requirement": "Sentencia que otorga la tutoría legal del menor",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Cédula del acompañante",
                                    "requirement_notes": null
                                }
                            ],
                            "children": []
                        },
                        {
                            "id": "2.1.2.8",
                            "label": "Viajará con abuelos, tíos, amigos u otras personas que no son los padres",
                            "desc": "Cuando el menor viaja con terceros que han sido autorizado los padres o tutores legales",
                            "type": "document",
                            "slug": "viajara-con-abuelos-tios-amigos-u-otras-personas-que-no-son-los-padres",
                            "requirements": [
                                {
                                    "requirement": "Poder Notarial de los padres, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría",
                                    "requirement_notes": "· Ambos padres deben firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Fotos o copia sde las cédulas de identidad de ambos padres o tutor (es) ",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompañante",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                                },
                                {
                                    "requirement": "Cédula del acompañante ",
                                    "requirement_notes": null
                                }
                            ],
                            "children": []
                        },
                        {
                            "id": "2.1.2.9",
                            "label": "Uno de los padres o tutores se niega a autorizar el viaje o está ausente en la vida del menor",
                            "desc": "Cuando uno de los padres se niega a autorizar el viaje o está ausente en la vida del menor",
                            "type": "document",
                            "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
                            "requirements": [
                                {
                                    "requirement": "Sentencia Judicial que otorga la autorización de viaje del menor",
                                    "requirement_notes": "· Ir al tribunal de niños, niñas y adolescentes\r\n· Solicitar la sentencia donde se les otorga la autorización de viaje "
                                },
                                {
                                    "requirement": "Poder Notarial del padre que tiene la autorización de viaje y no viaja, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría",
                                    "requirement_notes": "· El padre debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la cédula de identidad del padre o madre que realiza la solicitud",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Cédula de identidad del acompañante (si aplica)",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompañante",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
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
        }
    ],
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres": [
        {
            "id": "2.1.1",
            "label": "Viajará con uno de los padres",
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
                            "requirement": "Poder Notarial del padre o madre que no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría",
                            "requirement_notes": "· El padre que no viaja debe firmar el poder notarial autorizando la salida del menor\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en PuntoGOB "
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la cédula de identidad del padre o madre que realiza la solicitud",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompañante",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        }
                    ],
                    "children": []
                },
                {
                    "id": "2.1.1.2",
                    "label": "Viajará con la persona que posee la guarda legal",
                    "desc": "Cuando el menor viaja con la persona que tiene la guarda legal de este",
                    "type": "document",
                    "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial de los padres, autorizando la salida del menor del país con el guarda, legalizado por procuraduría",
                            "requirement_notes": "· Ambos padres o tutores deben firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompañante",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        }
                    ],
                    "children": []
                },
                {
                    "id": "2.1.1.3",
                    "label": "El menor tiene solo apellido materno y viajará con su madre ",
                    "desc": "Cuando el menor ha sido declarado solo por la madre y es ella quien le acompaña a viajar",
                    "type": "not_required_permission",
                    "slug": "el-menor-tiene-solo-apellido-materno-y-viajara-con-su-madre-",
                    "children": []
                },
                {
                    "id": "2.1.1.4",
                    "label": "Viajará con uno de sus padres y el otro ha fallecido",
                    "desc": "Cuando el menor viaja acompañado por su único padre o madre que aún está vivo",
                    "type": "not_required_permission",
                    "slug": "viajara-con-uno-de-sus-padres-y-el-otro-ha-fallecido",
                    "children": []
                },
                {
                    "id": "2.1.1.5",
                    "label": "El menor fue adoptado por personas extranjeras y viajará por primera vez",
                    "desc": "Cuando el menor viaja por primera vez luego de ser adoptado por personas extranjeras",
                    "type": "document",
                    "slug": "el-menor-fue-adoptado-por-personas-extranjeras-y-viajara-por-primera-vez",
                    "requirements": [
                        {
                            "requirement": "Sentencia del tribunal  de niños, niñas y adolescentes que evidencie la adopción",
                            "requirement_notes": "· Ir al tribunal de niños, niñas y adolescentes\r\n· Solicitar la sentencia donde se les otorga la adopción, original y certificada. "
                        },
                        {
                            "requirement": "Poder Notarial del padre que tiene la patria potestad y no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría",
                            "requirement_notes": "· El padre debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la cédula o pasaporte del otro padre que autoriza",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del otro padre adoptivo que viaja con el menor",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        }
                    ],
                    "children": []
                },
                {
                    "id": "2.1.1.6",
                    "label": "Uno de los padres vive en el extranjero y autoriza el viaje",
                    "desc": "Cuando el menor viaja acompañado por el padre o madre que está en el país, y el padre o madre en el extranjero es quien autoriza la salida del menor",
                    "type": "document",
                    "slug": "uno-de-los-padres-vive-en-el-extranjero-y-autoriza-el-viaje",
                    "requirements": [
                        {
                            "requirement": "Poder consular otorgado en el país en donde se encuentra el padre (debe ser apostillado y sellado en cancilleria) o Poder Notarial legalizado del país donde se encuentre el padre en  original con apostilla de la Haya",
                            "requirement_notes": "· El padre en el extranjero debe firmar el poder consular (en el consulado más cercana) autorizando la salida del menor.\r\n· Este poder debe ser legalizado en el Ministerio de Relaciones Exteriores de la República Dominicana."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompañante",
                            "requirement_notes": "De la página principal con los datos biométricos."
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos."
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                        }
                    ],
                    "children": []
                },
                {
                    "id": "2.1.1.7",
                    "label": "Tiene autorización de viaje del menor del tribunal Niños, Niñas y Adolescentes",
                    "desc": "Cuando el menor viaja con la persona que tiene la guarda legal con autorización de viaje",
                    "type": "document",
                    "slug": "tiene-autorizacion-de-viaje-del-menordel-tribunal-ninos-ninas-y-adolescentes",
                    "requirements": [
                        {
                            "requirement": "Autorización judicial (sentencia, auto o resolución) que autoriza el viaje del Menor",
                            "requirement_notes": "· Ir al tribunal de niños, niñas y adolescentes\r\n· Solicitar la sentencia donde se les otorga la Guarda Legal y Autorización de viaje del menor"
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la cédula de identidad del padre o madre que realiza la solicitud",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompañante",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        }
                    ],
                    "children": []
                },
                {
                    "id": "2.1.1.8",
                    "label": "Viajará a una actividad cultural, escolar o deportiva",
                    "desc": "Cuando uno de los padres autoriza al otro a viajar con el menor para participar en actividad cultural, escolar, religiosa, deportiva u otra.",
                    "type": "document",
                    "slug": "viajara-a-una-actividad-cultural-escolar-o-deportiva",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial del padre que no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría",
                            "requirement_notes": "· El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en PuntoGOB Sambil"
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la cédula de identidad del padre o madre que realiza la solicitud",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompañante",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        }
                    ],
                    "children": []
                },
                {
                    "id": "2.1.1.9",
                    "label": "Uno de los padres o tutores se niega a autorizar el viaje o está ausente en la vida del menor",
                    "desc": "Cuando uno de los padres se niega a autorizar el viaje o está ausente en la vida del menor.",
                    "type": "document",
                    "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
                    "requirements": [
                        {
                            "requirement": "Sentencia judicial que autoriza el viaje del Menor o sentencia judical que otorga la autoridad parental unilateral al padre que viaja",
                            "requirement_notes": "· Ir al tribunal de niños, niñas y adolescentes\r\n· Solicitar la sentencia donde se les otorga la patria potestad "
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la cédula de identidad del padre o  madre que realiza la solicitud",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del padre acompañante",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del padre acompañante",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
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
        }
    ],
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres/uno-de-los-padres-autoriza-al-otro-a-viajar": [
        {
            "id": "2.1.1.1",
            "label": "Uno de los padres autoriza al otro a viajar",
            "desc": "Cuando uno de los padres autoriza al otro a viajar con el menor",
            "type": "document",
            "slug": "uno-de-los-padres-autoriza-al-otro-a-viajar",
            "requirements": [
                {
                    "requirement": "Poder Notarial del padre o madre que no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría",
                    "requirement_notes": "· El padre que no viaja debe firmar el poder notarial autorizando la salida del menor\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en PuntoGOB "
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la cédula de identidad del padre o madre que realiza la solicitud",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompañante",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres/viajara-con-la-persona-que-posee-la-guarda-legal": [
        {
            "id": "2.1.1.2",
            "label": "Viajará con la persona que posee la guarda legal",
            "desc": "Cuando el menor viaja con la persona que tiene la guarda legal de este",
            "type": "document",
            "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
            "requirements": [
                {
                    "requirement": "Poder Notarial de los padres, autorizando la salida del menor del país con el guarda, legalizado por procuraduría",
                    "requirement_notes": "· Ambos padres o tutores deben firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompañante",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres/el-menor-tiene-solo-apellido-materno-y-viajara-con-su-madre-": [
        {
            "id": "2.1.1.3",
            "label": "El menor tiene solo apellido materno y viajará con su madre ",
            "desc": "Cuando el menor ha sido declarado solo por la madre y es ella quien le acompaña a viajar",
            "type": "not_required_permission",
            "slug": "el-menor-tiene-solo-apellido-materno-y-viajara-con-su-madre-",
            "children": []
        }
    ],
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres/viajara-con-uno-de-sus-padres-y-el-otro-ha-fallecido": [
        {
            "id": "2.1.1.4",
            "label": "Viajará con uno de sus padres y el otro ha fallecido",
            "desc": "Cuando el menor viaja acompañado por su único padre o madre que aún está vivo",
            "type": "not_required_permission",
            "slug": "viajara-con-uno-de-sus-padres-y-el-otro-ha-fallecido",
            "children": []
        }
    ],
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres/el-menor-fue-adoptado-por-personas-extranjeras-y-viajara-por-primera-vez": [
        {
            "id": "2.1.1.5",
            "label": "El menor fue adoptado por personas extranjeras y viajará por primera vez",
            "desc": "Cuando el menor viaja por primera vez luego de ser adoptado por personas extranjeras",
            "type": "document",
            "slug": "el-menor-fue-adoptado-por-personas-extranjeras-y-viajara-por-primera-vez",
            "requirements": [
                {
                    "requirement": "Sentencia del tribunal  de niños, niñas y adolescentes que evidencie la adopción",
                    "requirement_notes": "· Ir al tribunal de niños, niñas y adolescentes\r\n· Solicitar la sentencia donde se les otorga la adopción, original y certificada. "
                },
                {
                    "requirement": "Poder Notarial del padre que tiene la patria potestad y no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría",
                    "requirement_notes": "· El padre debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la cédula o pasaporte del otro padre que autoriza",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del otro padre adoptivo que viaja con el menor",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres/uno-de-los-padres-vive-en-el-extranjero-y-autoriza-el-viaje": [
        {
            "id": "2.1.1.6",
            "label": "Uno de los padres vive en el extranjero y autoriza el viaje",
            "desc": "Cuando el menor viaja acompañado por el padre o madre que está en el país, y el padre o madre en el extranjero es quien autoriza la salida del menor",
            "type": "document",
            "slug": "uno-de-los-padres-vive-en-el-extranjero-y-autoriza-el-viaje",
            "requirements": [
                {
                    "requirement": "Poder consular otorgado en el país en donde se encuentra el padre (debe ser apostillado y sellado en cancilleria) o Poder Notarial legalizado del país donde se encuentre el padre en  original con apostilla de la Haya",
                    "requirement_notes": "· El padre en el extranjero debe firmar el poder consular (en el consulado más cercana) autorizando la salida del menor.\r\n· Este poder debe ser legalizado en el Ministerio de Relaciones Exteriores de la República Dominicana."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompañante",
                    "requirement_notes": "De la página principal con los datos biométricos."
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos."
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres/tiene-autorizacion-de-viaje-del-menordel-tribunal-ninos-ninas-y-adolescentes": [
        {
            "id": "2.1.1.7",
            "label": "Tiene autorización de viaje del menor del tribunal Niños, Niñas y Adolescentes",
            "desc": "Cuando el menor viaja con la persona que tiene la guarda legal con autorización de viaje",
            "type": "document",
            "slug": "tiene-autorizacion-de-viaje-del-menordel-tribunal-ninos-ninas-y-adolescentes",
            "requirements": [
                {
                    "requirement": "Autorización judicial (sentencia, auto o resolución) que autoriza el viaje del Menor",
                    "requirement_notes": "· Ir al tribunal de niños, niñas y adolescentes\r\n· Solicitar la sentencia donde se les otorga la Guarda Legal y Autorización de viaje del menor"
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la cédula de identidad del padre o madre que realiza la solicitud",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompañante",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres/viajara-a-una-actividad-cultural-escolar-o-deportiva": [
        {
            "id": "2.1.1.8",
            "label": "Viajará a una actividad cultural, escolar o deportiva",
            "desc": "Cuando uno de los padres autoriza al otro a viajar con el menor para participar en actividad cultural, escolar, religiosa, deportiva u otra.",
            "type": "document",
            "slug": "viajara-a-una-actividad-cultural-escolar-o-deportiva",
            "requirements": [
                {
                    "requirement": "Poder Notarial del padre que no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría",
                    "requirement_notes": "· El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en PuntoGOB Sambil"
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la cédula de identidad del padre o madre que realiza la solicitud",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompañante",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres/uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor": [
        {
            "id": "2.1.1.9",
            "label": "Uno de los padres o tutores se niega a autorizar el viaje o está ausente en la vida del menor",
            "desc": "Cuando uno de los padres se niega a autorizar el viaje o está ausente en la vida del menor.",
            "type": "document",
            "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
            "requirements": [
                {
                    "requirement": "Sentencia judicial que autoriza el viaje del Menor o sentencia judical que otorga la autoridad parental unilateral al padre que viaja",
                    "requirement_notes": "· Ir al tribunal de niños, niñas y adolescentes\r\n· Solicitar la sentencia donde se les otorga la patria potestad "
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la cédula de identidad del padre o  madre que realiza la solicitud",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del padre acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del padre acompañante",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres/no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir": [
        {
            "id": "2.1.1.10",
            "label": "No veo el caso del menor o tengo dudas para elegir",
            "desc": "No veo el caso del menor o tengo dudas para elegir",
            "type": "not_found",
            "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
            "children": []
        }
    ],
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-un-tercero": [
        {
            "id": "2.1.2",
            "label": "Viajará con un tercero ",
            "desc": null,
            "type": null,
            "slug": "viajara-con-un-tercero",
            "children": [
                {
                    "id": "2.1.2.1",
                    "label": "Viajará con la aerolínea",
                    "desc": "Cuando el menor viaja con la Aerolínea y cuenta con la autorización de ambos padres, padre, madre o tutor legal",
                    "type": "document",
                    "slug": "viajara-con-la-aerolinea",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial de ambos padres, padre, madre o tutor (según el caso) legal autorizando la salida del menor del país con la aerolínea, legalizado por procuraduría o sentencia judicial",
                            "requirement_notes": "· El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en PuntoGOB Sambil"
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la cédula de la o las personas que autorizan",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
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
                    "label": "Viajará con el colegio, centro educativo o institución cultural",
                    "desc": "Cuando el menor viaja con  una academia, centro educativo o institución cultural, y cuenta con la autorización de los padres, padre, madre o tutor legal",
                    "type": "document",
                    "slug": "viajara-con-el-colegio-centro-educativo-o-institucion-cultural",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial de los padres o tutores, autorizando la salida del menor del país con el centro educativo, legalizado por procuraduría",
                            "requirement_notes": "· Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerolínea. \r\n· Este poder debe ser legalizado en la Procuraduría General de la República.\r\n· Los padres de todos los menores pueden hacer un solo poder notarial, donde estén las firmas de todos los padres que autorizan la salida de los menores."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompañante",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        }
                    ],
                    "children": []
                },
                {
                    "id": "2.1.2.3",
                    "label": "Viajará con academia, selección o liga deportiva",
                    "desc": "Cuando el menor viaja con  una academia, selecció o liga deportiva, y cuenta con la autorización de ambos padres, padre, madre o tutor legal",
                    "type": "document",
                    "slug": "viajara-con-academia-seleccion-o-liga-deportiva",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial (colectivo o individual) de los padres, autorizando la salida del o los menores del país, legalizado por procuraduría. En caso de que los padres esten fuera del pais, debera entregar el poder consular. En caso de que uno de los padres no quiere que viaje o no este presente en la vida del menor, debera entregar Autorizacion Judicial. ",
                            "requirement_notes": "· Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerolínea. \r\n· Este poder debe ser legalizado en la Procuraduría General de la República.\r\n· Los padres de todos los menores pueden hacer un solo poder notarial, donde estén las firmas de todos los padres que autorizan la salida de los menores."
                        },
                        {
                            "requirement": "Carta o comunicación de la organización (Academia, iglesia o liga Deportiva) local especificando el motivo del viaje",
                            "requirement_notes": "Opcional"
                        },
                        {
                            "requirement": "Carta de invitación de la actividad a la que asistira el menor",
                            "requirement_notes": "Opcional"
                        },
                        {
                            "requirement": "Fotos o copias de las actas de nacimiento originales del (de los)  menor(es) , con el código QR legible  ",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompañante o responsable",
                            "requirement_notes": "De la página principal con los datos biométricos."
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos."
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                        }
                    ],
                    "children": []
                },
                {
                    "id": "2.1.2.4",
                    "label": "Viaja con la persona que posee la guarda custodia (de hecho o legal)",
                    "desc": "Cuando el menor viaja con la persona que tiene la guarda legal con autorización de viaje ",
                    "type": "document",
                    "slug": "viaja-con-la-persona-que-posee-la-guarda-custodia-(de-hecho-o-legal)",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial de ambos padres, autorizando la salida del menor del país con el guarda custodia (de hecho o legal), legalizado por procuraduría. ",
                            "requirement_notes": "· Ambos padres deben firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Fotos o copias de las cédulas de identidad del padre y de la madre; o del tutor ",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la cédula del acompañante ( si aplica)",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompañante",
                            "requirement_notes": "De la página principal con los datos biométricos."
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos."
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                        }
                    ],
                    "children": []
                },
                {
                    "id": "2.1.2.5",
                    "label": "El menor tiene solo apellido materno y no viajará con su madre ",
                    "desc": "Cuando el menor ha sido declarado solo por la madre y es ella quien autoriza a otra persona a viajar con el menor",
                    "type": "document",
                    "slug": "el-menor-tiene-solo-apellido-materno-y-no-viajara-con-su-madre-",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial de la madre, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría",
                            "requirement_notes": "· La madre debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la cédula de identidad de la madre ",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la cédula de identidad del acompañante (si aplica)",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompañante",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        }
                    ],
                    "children": []
                },
                {
                    "id": "2.1.2.6",
                    "label": "Uno de los padres ha fallecido y no viajará con el padre sobreviviente",
                    "desc": "Cuando el menor viaja con la persona que ha autorizado el padre o madre sobreviviente",
                    "type": "document",
                    "slug": "uno-de-los-padres-ha-fallecido-y-no-viajara-con-el-padre-sobreviviente",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial del padre sobreviviente, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría",
                            "requirement_notes": "· El padre sobreviviente debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la cédula de identidad del padre o madre que realiza la solicitud",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompañante",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                        },
                        {
                            "requirement": "Acta de defunción del padre fallecido  con codigo QR legible",
                            "requirement_notes": null
                        }
                    ],
                    "children": []
                },
                {
                    "id": "2.1.2.7",
                    "label": "Viajará con una persona autorizada por el tutor legal ",
                    "desc": "Cuando el menor viaja con la persona que ha autorizado el tutor legal",
                    "type": "document",
                    "slug": "viajara-con-una-persona-autorizada-por-el-tutor-legal-",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial del tutor (es) legal, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría",
                            "requirement_notes": "· El tutor legal debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la cédula de identidad de el o los tutores que realizan la solicitud",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompañante",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                        },
                        {
                            "requirement": "Sentencia que otorga la tutoría legal del menor",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Cédula del acompañante",
                            "requirement_notes": null
                        }
                    ],
                    "children": []
                },
                {
                    "id": "2.1.2.8",
                    "label": "Viajará con abuelos, tíos, amigos u otras personas que no son los padres",
                    "desc": "Cuando el menor viaja con terceros que han sido autorizado los padres o tutores legales",
                    "type": "document",
                    "slug": "viajara-con-abuelos-tios-amigos-u-otras-personas-que-no-son-los-padres",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial de los padres, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría",
                            "requirement_notes": "· Ambos padres deben firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Fotos o copia sde las cédulas de identidad de ambos padres o tutor (es) ",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompañante",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        },
                        {
                            "requirement": "Cédula del acompañante ",
                            "requirement_notes": null
                        }
                    ],
                    "children": []
                },
                {
                    "id": "2.1.2.9",
                    "label": "Uno de los padres o tutores se niega a autorizar el viaje o está ausente en la vida del menor",
                    "desc": "Cuando uno de los padres se niega a autorizar el viaje o está ausente en la vida del menor",
                    "type": "document",
                    "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
                    "requirements": [
                        {
                            "requirement": "Sentencia Judicial que otorga la autorización de viaje del menor",
                            "requirement_notes": "· Ir al tribunal de niños, niñas y adolescentes\r\n· Solicitar la sentencia donde se les otorga la autorización de viaje "
                        },
                        {
                            "requirement": "Poder Notarial del padre que tiene la autorización de viaje y no viaja, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría",
                            "requirement_notes": "· El padre debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la cédula de identidad del padre o madre que realiza la solicitud",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Cédula de identidad del acompañante (si aplica)",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompañante",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
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
    ],
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-un-tercero/viajara-con-la-aerolinea": [
        {
            "id": "2.1.2.1",
            "label": "Viajará con la aerolínea",
            "desc": "Cuando el menor viaja con la Aerolínea y cuenta con la autorización de ambos padres, padre, madre o tutor legal",
            "type": "document",
            "slug": "viajara-con-la-aerolinea",
            "requirements": [
                {
                    "requirement": "Poder Notarial de ambos padres, padre, madre o tutor (según el caso) legal autorizando la salida del menor del país con la aerolínea, legalizado por procuraduría o sentencia judicial",
                    "requirement_notes": "· El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en PuntoGOB Sambil"
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la cédula de la o las personas que autorizan",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                },
                {
                    "requirement": "Boleto o reserva del viaje",
                    "requirement_notes": null
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-un-tercero/viajara-con-el-colegio-centro-educativo-o-institucion-cultural": [
        {
            "id": "2.1.2.2",
            "label": "Viajará con el colegio, centro educativo o institución cultural",
            "desc": "Cuando el menor viaja con  una academia, centro educativo o institución cultural, y cuenta con la autorización de los padres, padre, madre o tutor legal",
            "type": "document",
            "slug": "viajara-con-el-colegio-centro-educativo-o-institucion-cultural",
            "requirements": [
                {
                    "requirement": "Poder Notarial de los padres o tutores, autorizando la salida del menor del país con el centro educativo, legalizado por procuraduría",
                    "requirement_notes": "· Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerolínea. \r\n· Este poder debe ser legalizado en la Procuraduría General de la República.\r\n· Los padres de todos los menores pueden hacer un solo poder notarial, donde estén las firmas de todos los padres que autorizan la salida de los menores."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompañante",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-un-tercero/viajara-con-academia-seleccion-o-liga-deportiva": [
        {
            "id": "2.1.2.3",
            "label": "Viajará con academia, selección o liga deportiva",
            "desc": "Cuando el menor viaja con  una academia, selecció o liga deportiva, y cuenta con la autorización de ambos padres, padre, madre o tutor legal",
            "type": "document",
            "slug": "viajara-con-academia-seleccion-o-liga-deportiva",
            "requirements": [
                {
                    "requirement": "Poder Notarial (colectivo o individual) de los padres, autorizando la salida del o los menores del país, legalizado por procuraduría. En caso de que los padres esten fuera del pais, debera entregar el poder consular. En caso de que uno de los padres no quiere que viaje o no este presente en la vida del menor, debera entregar Autorizacion Judicial. ",
                    "requirement_notes": "· Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerolínea. \r\n· Este poder debe ser legalizado en la Procuraduría General de la República.\r\n· Los padres de todos los menores pueden hacer un solo poder notarial, donde estén las firmas de todos los padres que autorizan la salida de los menores."
                },
                {
                    "requirement": "Carta o comunicación de la organización (Academia, iglesia o liga Deportiva) local especificando el motivo del viaje",
                    "requirement_notes": "Opcional"
                },
                {
                    "requirement": "Carta de invitación de la actividad a la que asistira el menor",
                    "requirement_notes": "Opcional"
                },
                {
                    "requirement": "Fotos o copias de las actas de nacimiento originales del (de los)  menor(es) , con el código QR legible  ",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompañante o responsable",
                    "requirement_notes": "De la página principal con los datos biométricos."
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos."
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-un-tercero/viaja-con-la-persona-que-posee-la-guarda-custodia-(de-hecho-o-legal)": [
        {
            "id": "2.1.2.4",
            "label": "Viaja con la persona que posee la guarda custodia (de hecho o legal)",
            "desc": "Cuando el menor viaja con la persona que tiene la guarda legal con autorización de viaje ",
            "type": "document",
            "slug": "viaja-con-la-persona-que-posee-la-guarda-custodia-(de-hecho-o-legal)",
            "requirements": [
                {
                    "requirement": "Poder Notarial de ambos padres, autorizando la salida del menor del país con el guarda custodia (de hecho o legal), legalizado por procuraduría. ",
                    "requirement_notes": "· Ambos padres deben firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                    "requirement_notes": null
                },
                {
                    "requirement": "Fotos o copias de las cédulas de identidad del padre y de la madre; o del tutor ",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la cédula del acompañante ( si aplica)",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompañante",
                    "requirement_notes": "De la página principal con los datos biométricos."
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos."
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-un-tercero/el-menor-tiene-solo-apellido-materno-y-no-viajara-con-su-madre-": [
        {
            "id": "2.1.2.5",
            "label": "El menor tiene solo apellido materno y no viajará con su madre ",
            "desc": "Cuando el menor ha sido declarado solo por la madre y es ella quien autoriza a otra persona a viajar con el menor",
            "type": "document",
            "slug": "el-menor-tiene-solo-apellido-materno-y-no-viajara-con-su-madre-",
            "requirements": [
                {
                    "requirement": "Poder Notarial de la madre, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría",
                    "requirement_notes": "· La madre debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la cédula de identidad de la madre ",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la cédula de identidad del acompañante (si aplica)",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompañante",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-un-tercero/uno-de-los-padres-ha-fallecido-y-no-viajara-con-el-padre-sobreviviente": [
        {
            "id": "2.1.2.6",
            "label": "Uno de los padres ha fallecido y no viajará con el padre sobreviviente",
            "desc": "Cuando el menor viaja con la persona que ha autorizado el padre o madre sobreviviente",
            "type": "document",
            "slug": "uno-de-los-padres-ha-fallecido-y-no-viajara-con-el-padre-sobreviviente",
            "requirements": [
                {
                    "requirement": "Poder Notarial del padre sobreviviente, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría",
                    "requirement_notes": "· El padre sobreviviente debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la cédula de identidad del padre o madre que realiza la solicitud",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompañante",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                },
                {
                    "requirement": "Acta de defunción del padre fallecido  con codigo QR legible",
                    "requirement_notes": null
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-un-tercero/viajara-con-una-persona-autorizada-por-el-tutor-legal-": [
        {
            "id": "2.1.2.7",
            "label": "Viajará con una persona autorizada por el tutor legal ",
            "desc": "Cuando el menor viaja con la persona que ha autorizado el tutor legal",
            "type": "document",
            "slug": "viajara-con-una-persona-autorizada-por-el-tutor-legal-",
            "requirements": [
                {
                    "requirement": "Poder Notarial del tutor (es) legal, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría",
                    "requirement_notes": "· El tutor legal debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la cédula de identidad de el o los tutores que realizan la solicitud",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompañante",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                },
                {
                    "requirement": "Sentencia que otorga la tutoría legal del menor",
                    "requirement_notes": null
                },
                {
                    "requirement": "Cédula del acompañante",
                    "requirement_notes": null
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-un-tercero/viajara-con-abuelos-tios-amigos-u-otras-personas-que-no-son-los-padres": [
        {
            "id": "2.1.2.8",
            "label": "Viajará con abuelos, tíos, amigos u otras personas que no son los padres",
            "desc": "Cuando el menor viaja con terceros que han sido autorizado los padres o tutores legales",
            "type": "document",
            "slug": "viajara-con-abuelos-tios-amigos-u-otras-personas-que-no-son-los-padres",
            "requirements": [
                {
                    "requirement": "Poder Notarial de los padres, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría",
                    "requirement_notes": "· Ambos padres deben firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                    "requirement_notes": null
                },
                {
                    "requirement": "Fotos o copia sde las cédulas de identidad de ambos padres o tutor (es) ",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompañante",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                },
                {
                    "requirement": "Cédula del acompañante ",
                    "requirement_notes": null
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-un-tercero/uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor": [
        {
            "id": "2.1.2.9",
            "label": "Uno de los padres o tutores se niega a autorizar el viaje o está ausente en la vida del menor",
            "desc": "Cuando uno de los padres se niega a autorizar el viaje o está ausente en la vida del menor",
            "type": "document",
            "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
            "requirements": [
                {
                    "requirement": "Sentencia Judicial que otorga la autorización de viaje del menor",
                    "requirement_notes": "· Ir al tribunal de niños, niñas y adolescentes\r\n· Solicitar la sentencia donde se les otorga la autorización de viaje "
                },
                {
                    "requirement": "Poder Notarial del padre que tiene la autorización de viaje y no viaja, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría",
                    "requirement_notes": "· El padre debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la cédula de identidad del padre o madre que realiza la solicitud",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Cédula de identidad del acompañante (si aplica)",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompañante",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-un-tercero/no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir": [
        {
            "id": "2.1.2.10",
            "label": "No veo el caso del menor o tengo dudas para elegir",
            "desc": "No veo el caso del menor o tengo dudas para elegir",
            "type": "not_found",
            "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
            "children": []
        }
    ],
    "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero/el-menor-no-ha-estado-mas-de-6-meses-en-el-pais": [
        {
            "id": "2.2",
            "label": "El menor no ha estado más de 6 meses en el país",
            "desc": null,
            "type": "not_required_permission",
            "slug": "el-menor-no-ha-estado-mas-de-6-meses-en-el-pais",
            "children": []
        }
    ],
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana": [
        {
            "id": "3",
            "label": "El menor es extranjero con residencia en la República Dominicana ",
            "desc": null,
            "type": null,
            "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana"
        }
    ],
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais": [
        {
            "id": "3.1",
            "label": "El menor ha estado más de 6 meses en el país",
            "desc": null,
            "type": null,
            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
            "children": [
                {
                    "id": "3.1.1",
                    "label": "Viajará con uno de los padres",
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
                                    "requirement": "Poder Notarial del padre o madre que no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría",
                                    "requirement_notes": "· El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en PuntoGOB "
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la cédula de identidad del padre o madre que realiza la solicitud",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompañante",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                                }
                            ],
                            "children": []
                        },
                        {
                            "id": "3.1.1.2",
                            "label": "Viajará con la persona que posee la guarda legal",
                            "desc": "Cuando el menor viaja con la persona que tiene la guarda legal de este",
                            "type": "document",
                            "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
                            "requirements": [
                                {
                                    "requirement": "Poder Notarial de los padres, autorizando la salida del menor del país con el guarda, legalizado por procuraduría",
                                    "requirement_notes": "· Ambos padres o tutores deben firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompañante",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                                }
                            ],
                            "children": []
                        },
                        {
                            "id": "3.1.1.3",
                            "label": "El menor tiene solo apellido materno y viajará con su madre ",
                            "desc": "Cuando el menor ha sido declarado solo por la madre y es ella quien autoriza a otra persona a viajar con el menor",
                            "type": "not_required_permission",
                            "slug": "el-menor-tiene-solo-apellido-materno-y-viajara-con-su-madre-",
                            "children": []
                        },
                        {
                            "id": "3.1.1.4",
                            "label": "Viajará con uno de sus padres y el otro ha fallecido",
                            "desc": "Cuando el menor viaja acompañado por su único padre o madre que aún está vivo",
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
                                    "requirement": "Sentencia del tribunal  de niños, niñas y adolescentes que evidencie la adopción",
                                    "requirement_notes": "· Ir al tribunal de niños, niñas y adolescentes\r\n· Solicitar la sentencia donde se les otorga la adopción, original y certificada. "
                                },
                                {
                                    "requirement": "Poder Notarial del padre que tiene la patria potestad y no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría. ",
                                    "requirement_notes": "· El padre debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la cédula o pasaporte del otro padre que autoriza",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del otro padre adoptivo que viaja con el menor",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                                }
                            ],
                            "children": []
                        },
                        {
                            "id": "3.1.1.6",
                            "label": "Uno de los padres vive en el extranjero y autoriza el viaje",
                            "desc": "Cuando el padre o madre que reside en el extranjero autoriza al otro padre o madre que residen en la República Dominicana a viajar con el menor",
                            "type": "document",
                            "slug": "uno-de-los-padres-vive-en-el-extranjero-y-autoriza-el-viaje",
                            "requirements": [
                                {
                                    "requirement": "Poder consular otorgado en el país en donde se encuentra el padre (debe ser apostillado y sellado en cancilleria) o Poder Notarial legalizado del país donde se encuentre el padre en  original con apostilla de la Haya",
                                    "requirement_notes": "· El padre en el extranjero debe firmar el poder consular (en el consulado más cercana) autorizando la salida del menor.\r\n· Este poder debe ser legalizado en el Ministerio de Relaciones Exteriores de la República Dominicana."
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompañante",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                                }
                            ],
                            "children": []
                        },
                        {
                            "id": "3.1.1.7",
                            "label": "Tiene autorización de viaje del menor del tribunal Niños, Niñas y Adolescentes",
                            "desc": "Cuando el menor viaja con la persona que tiene la guarda legal con autorización de viaje",
                            "type": "document",
                            "slug": "tiene-autorizacion-de-viaje-del-menordel-tribunal-ninos-ninas-y-adolescentes",
                            "requirements": [
                                {
                                    "requirement": "Autorización judicial (sentencia, auto o resolución) que autoriza el viaje del Menor",
                                    "requirement_notes": "· Ir al tribunal de niños, niñas y adolescentes\r\n· Solicitar la sentencia donde se les otorga la Guarda Legal y Autorización de viaje del menor"
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la cédula de identidad del padre o madre que realiza la solicitud",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompañante",
                                    "requirement_notes": "De la página principal con los datos biométricos."
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la página principal con los datos biométricos."
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                                }
                            ],
                            "children": []
                        },
                        {
                            "id": "3.1.1.8",
                            "label": "Viajará a una actividad cultural, escolar, religiosa, deportiva u otra",
                            "desc": "Cuando uno de los padres autoriza al otro a viajar con el menor para participar en actividad cultural, escolar, religiosa, deportiva u otra.",
                            "type": "document",
                            "slug": "viajara-a-una-actividad-cultural-escolar-religiosa-deportiva-u-otra",
                            "requirements": [
                                {
                                    "requirement": "Poder Notarial del padre que no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría",
                                    "requirement_notes": "· El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en PuntoGOB Sambil"
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la cédula de identidad del padre o madre que realiza la solicitud",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompañante",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                                }
                            ],
                            "children": []
                        },
                        {
                            "id": "3.1.1.9",
                            "label": "Uno de los padres o tutores se niega a autorizar el viaje o está ausente en la vida del menor",
                            "desc": "Cuando uno de los padres se niega a autorizar el viaje o está ausente en la vida del menor.",
                            "type": "document",
                            "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
                            "requirements": [
                                {
                                    "requirement": "Sentencia judicial que autoriza el viaje del Menor o sentencia judical que otorga la autoridad parental unilateral al padre que viaja",
                                    "requirement_notes": "· Ir al tribunal de niños, niñas y adolescentes\r\n· Solicitar la sentencia donde se les otorga la patria potestad "
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la cédula de identidad del padre o  madre que realiza la solicitud",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del padre acompañante",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del padre acompañante",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
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
                    "label": "Viaja con un tercero ",
                    "desc": null,
                    "type": null,
                    "slug": "viaja-con-un-tercero",
                    "children": [
                        {
                            "id": "3.1.2.1",
                            "label": "Viajará con la aerolínea",
                            "desc": "Cuando el menor viaja con la Aerolínea y cuenta con la autorización de ambos padres, padre, madre o tutor legal",
                            "type": "document",
                            "slug": "viajara-con-la-aerolinea",
                            "requirements": [
                                {
                                    "requirement": "Poder Notarial de ambos padres, padre, madre o tutor (según el caso) legal autorizando la salida del menor del país con la aerolínea, legalizado por procuraduría o sentencia judicial.",
                                    "requirement_notes": "· El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en PuntoGOB Sambil"
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la cédula de la o las personas que autorizan",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la página principal con los datos biométricos."
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
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
                            "label": "Viajará con el colegio, centro educativo o institución cultural",
                            "desc": "Cuando el menor viaja con  una academia, centro educativo o institución cultural, y cuenta con la autorización de los padres, padre, madre o tutor legal",
                            "type": "document",
                            "slug": "viajara-con-el-colegio-centro-educativo-o-institucion-cultural",
                            "requirements": [
                                {
                                    "requirement": "Si ambos padres están en el país:\r\n\r\nPresentar un Poder Notarial (individual o conjunto) emitido por los padres, autorizando la salida del menor. Este poder debe estar legalizado por la Procuraduría General de la República\r\n\r\nSi uno o ambos padres están fuera del país:\r\n\r\nPresentar un Poder Consular emitido desde el país donde se encuentren, autorizando la salida del menor.\r\n\r\nSi uno de los padres no está de acuerdo o no está presente en la vida del menor:\r\n\r\nPresentar una Autorización Judicial, emitida por un tribunal competente, que permita la salida del menor.",
                                    "requirement_notes": "· Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerolínea. \r\n· Este poder debe ser legalizado en la Procuraduría General de la República.\r\n· Los padres de todos los menores pueden hacer un solo poder notarial, donde estén las firmas de todos los padres que autorizan la salida de los menores."
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompañante",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                                }
                            ],
                            "children": []
                        },
                        {
                            "id": "3.1.2.3",
                            "label": "Viajará con academia, selección o liga deportiva",
                            "desc": "Cuando el menor viaja con  una academia, selecció o liga deportiva, y cuenta con la autorización de ambos padres, padre, madre o tutor legal",
                            "type": "document",
                            "slug": "viajara-con-academia-seleccion-o-liga-deportiva",
                            "requirements": [
                                {
                                    "requirement": "Si ambos padres están en el país:\r\n\r\nPresentar un Poder Notarial (individual o conjunto) emitido por los padres, autorizando la salida del menor. Este poder debe estar legalizado por la Procuraduría General de la República.\r\n\r\nSi uno o ambos padres están fuera del país:\r\n\r\nPresentar un Poder Consular emitido desde el país donde se encuentren, autorizando la salida del menor.\r\n\r\nSi uno de los padres no está de acuerdo o no está presente en la vida del menor:\r\n\r\nPresentar una Autorización Judicial, emitida por un tribunal competente, que permita la salida del menor.",
                                    "requirement_notes": "· Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerolínea. \r\n· Este poder debe ser legalizado en la Procuraduría General de la República.\r\n· Los padres de todos los menores pueden hacer un solo poder notarial, donde estén las firmas de todos los padres que autorizan la salida de los menores."
                                },
                                {
                                    "requirement": "Carta o comunicación de la organización (Academia, iglesia o liga Deportiva) local especificando el motivo del viaje",
                                    "requirement_notes": "Opcional"
                                },
                                {
                                    "requirement": "Carta de invitación de la actividad a la que asistira el menor",
                                    "requirement_notes": "Opcional"
                                },
                                {
                                    "requirement": "Fotos o copias de las actas de nacimiento originales del (de los)  menor(es) , con el código QR legible  ",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Fotos o copias de las cédulas de identidad de los padres, madres o tutores",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Fotos o copias de la cédula de la persona que realiza la solicitud.",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Fotos o copias de las visas / residencias / permisos de estadías de menores",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompañante o responsable",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "Fotos o copias de los pasaportes de los menores",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente de cada menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                                }
                            ],
                            "children": []
                        },
                        {
                            "id": "3.1.2.4",
                            "label": "Viaja con la persona que posee la guarda custodia (de hecho o legal)",
                            "desc": "Cuando el menor viaja con la persona que tiene la guarda legal con autorización de viaje ",
                            "type": "document",
                            "slug": "viaja-con-la-persona-que-posee-la-guarda-custodia-(de-hecho-o-legal)",
                            "requirements": [
                                {
                                    "requirement": "Poder Notarial de ambos padres, autorizando la salida del menor del país con el guarda custodia (de hecho o legal), legalizado por procuraduría",
                                    "requirement_notes": "· Ambos padres deben firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Fotos o copias de las cédulas de identidad del padre y de la madre; o del tutor ",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la cédula del acompañante ( si aplica)",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompañante",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                                }
                            ],
                            "children": []
                        },
                        {
                            "id": "3.1.2.5",
                            "label": "El menor tiene solo apellido materno y no viajará con su madre ",
                            "desc": "Cuando el menor ha sido declarado solo por la madre y es ella quien autoriza a otra persona a viajar con el menor",
                            "type": "document",
                            "slug": "el-menor-tiene-solo-apellido-materno-y-no-viajara-con-su-madre-",
                            "requirements": [
                                {
                                    "requirement": "Poder Notarial de la madre, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría",
                                    "requirement_notes": "· La madre debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la cédula de identidad de la madre ",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la cédula de identidad del acompañante (si aplica)",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompañante",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                                }
                            ],
                            "children": []
                        },
                        {
                            "id": "3.1.2.6",
                            "label": "Uno de los padres ha fallecido y no viajará con el padre sobreviviente",
                            "desc": "Cuando el menor viaja con la persona que ha autorizado el padre o madre sobreviviente",
                            "type": "document",
                            "slug": "uno-de-los-padres-ha-fallecido-y-no-viajara-con-el-padre-sobreviviente",
                            "requirements": [
                                {
                                    "requirement": "Poder Notarial del padre sobreviviente, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría",
                                    "requirement_notes": "· El padre sobreviviente debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la cédula de identidad del padre o madre que realiza la solicitud",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompañante",
                                    "requirement_notes": "De la página principal con los datos biométricos."
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la página principal con los datos biométricos."
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                                },
                                {
                                    "requirement": "Acta de defunción del padre fallecido  con codigo QR legible",
                                    "requirement_notes": null
                                }
                            ],
                            "children": []
                        },
                        {
                            "id": "3.1.2.7",
                            "label": "Viajará con una persona autorizada por el tutor legal ",
                            "desc": "Cuando el menor viaja con la persona que ha autorizado el tutor legal",
                            "type": "document",
                            "slug": "viajara-con-una-persona-autorizada-por-el-tutor-legal-",
                            "requirements": [
                                {
                                    "requirement": "Poder Notarial del tutor (es) legal, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría",
                                    "requirement_notes": "· El tutor legal debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la cédula de identidad de el o los tutores que realizan la solicitud",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompañante",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                                },
                                {
                                    "requirement": "Sentencia que otorga la tutoría legal del menor",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Cédula del acompañante",
                                    "requirement_notes": null
                                }
                            ],
                            "children": []
                        },
                        {
                            "id": "3.1.2.8",
                            "label": "Viajará con abuelos, tíos, amigos u otras personas que no son los padres",
                            "desc": "Cuando el menor viaja con terceros que han sido autorizado los padres o tutores legales",
                            "type": "document",
                            "slug": "viajara-con-abuelos-tios-amigos-u-otras-personas-que-no-son-los-padres",
                            "requirements": [
                                {
                                    "requirement": "Poder Notarial de los padres, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría",
                                    "requirement_notes": "· Ambos padres deben firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Fotos o copia sde las cédulas de identidad de ambos padres o tutor (es) ",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompañante",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                                },
                                {
                                    "requirement": "Cédula del acompañante ",
                                    "requirement_notes": null
                                }
                            ],
                            "children": []
                        },
                        {
                            "id": "3.1.2.9",
                            "label": "Uno de los padres o tutores se niega a autorizar el viaje o está ausente en la vida del menor",
                            "desc": "Cuando uno de los padres se niega a autorizar el viaje o está ausente en la vida del menor.",
                            "type": "document",
                            "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
                            "requirements": [
                                {
                                    "requirement": "Sentencia Judicial que otorga la autorización de viaje del menor",
                                    "requirement_notes": "· Ir al tribunal de niños, niñas y adolescentes\r\n· Solicitar la sentencia donde se les otorga la autorización de viaje "
                                },
                                {
                                    "requirement": "Poder Notarial del padre que tiene la autorización de viaje y no viaja, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría",
                                    "requirement_notes": "· El padre debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                                },
                                {
                                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                                    "requirement_notes": null
                                },
                                {
                                    "requirement": "Foto o copia de la cédula de identidad del padre o madre que realiza la solicitud",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Cédula de identidad del acompañante (si aplica)",
                                    "requirement_notes": "Versión nueva"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del acompañante",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "Foto o copia del pasaporte del menor",
                                    "requirement_notes": "De la página principal con los datos biométricos"
                                },
                                {
                                    "requirement": "1 Foto 2x2 reciente del menor",
                                    "requirement_notes": "De frente, reciente y fondo claro"
                                },
                                {
                                    "requirement": "Recibo de pago del servicio ",
                                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
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
        }
    ],
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres": [
        {
            "id": "3.1.1",
            "label": "Viajará con uno de los padres",
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
                            "requirement": "Poder Notarial del padre o madre que no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría",
                            "requirement_notes": "· El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en PuntoGOB "
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la cédula de identidad del padre o madre que realiza la solicitud",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompañante",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        }
                    ],
                    "children": []
                },
                {
                    "id": "3.1.1.2",
                    "label": "Viajará con la persona que posee la guarda legal",
                    "desc": "Cuando el menor viaja con la persona que tiene la guarda legal de este",
                    "type": "document",
                    "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial de los padres, autorizando la salida del menor del país con el guarda, legalizado por procuraduría",
                            "requirement_notes": "· Ambos padres o tutores deben firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompañante",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                        }
                    ],
                    "children": []
                },
                {
                    "id": "3.1.1.3",
                    "label": "El menor tiene solo apellido materno y viajará con su madre ",
                    "desc": "Cuando el menor ha sido declarado solo por la madre y es ella quien autoriza a otra persona a viajar con el menor",
                    "type": "not_required_permission",
                    "slug": "el-menor-tiene-solo-apellido-materno-y-viajara-con-su-madre-",
                    "children": []
                },
                {
                    "id": "3.1.1.4",
                    "label": "Viajará con uno de sus padres y el otro ha fallecido",
                    "desc": "Cuando el menor viaja acompañado por su único padre o madre que aún está vivo",
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
                            "requirement": "Sentencia del tribunal  de niños, niñas y adolescentes que evidencie la adopción",
                            "requirement_notes": "· Ir al tribunal de niños, niñas y adolescentes\r\n· Solicitar la sentencia donde se les otorga la adopción, original y certificada. "
                        },
                        {
                            "requirement": "Poder Notarial del padre que tiene la patria potestad y no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría. ",
                            "requirement_notes": "· El padre debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la cédula o pasaporte del otro padre que autoriza",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del otro padre adoptivo que viaja con el menor",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        }
                    ],
                    "children": []
                },
                {
                    "id": "3.1.1.6",
                    "label": "Uno de los padres vive en el extranjero y autoriza el viaje",
                    "desc": "Cuando el padre o madre que reside en el extranjero autoriza al otro padre o madre que residen en la República Dominicana a viajar con el menor",
                    "type": "document",
                    "slug": "uno-de-los-padres-vive-en-el-extranjero-y-autoriza-el-viaje",
                    "requirements": [
                        {
                            "requirement": "Poder consular otorgado en el país en donde se encuentra el padre (debe ser apostillado y sellado en cancilleria) o Poder Notarial legalizado del país donde se encuentre el padre en  original con apostilla de la Haya",
                            "requirement_notes": "· El padre en el extranjero debe firmar el poder consular (en el consulado más cercana) autorizando la salida del menor.\r\n· Este poder debe ser legalizado en el Ministerio de Relaciones Exteriores de la República Dominicana."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompañante",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        }
                    ],
                    "children": []
                },
                {
                    "id": "3.1.1.7",
                    "label": "Tiene autorización de viaje del menor del tribunal Niños, Niñas y Adolescentes",
                    "desc": "Cuando el menor viaja con la persona que tiene la guarda legal con autorización de viaje",
                    "type": "document",
                    "slug": "tiene-autorizacion-de-viaje-del-menordel-tribunal-ninos-ninas-y-adolescentes",
                    "requirements": [
                        {
                            "requirement": "Autorización judicial (sentencia, auto o resolución) que autoriza el viaje del Menor",
                            "requirement_notes": "· Ir al tribunal de niños, niñas y adolescentes\r\n· Solicitar la sentencia donde se les otorga la Guarda Legal y Autorización de viaje del menor"
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la cédula de identidad del padre o madre que realiza la solicitud",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompañante",
                            "requirement_notes": "De la página principal con los datos biométricos."
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos."
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                        }
                    ],
                    "children": []
                },
                {
                    "id": "3.1.1.8",
                    "label": "Viajará a una actividad cultural, escolar, religiosa, deportiva u otra",
                    "desc": "Cuando uno de los padres autoriza al otro a viajar con el menor para participar en actividad cultural, escolar, religiosa, deportiva u otra.",
                    "type": "document",
                    "slug": "viajara-a-una-actividad-cultural-escolar-religiosa-deportiva-u-otra",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial del padre que no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría",
                            "requirement_notes": "· El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en PuntoGOB Sambil"
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la cédula de identidad del padre o madre que realiza la solicitud",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompañante",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        }
                    ],
                    "children": []
                },
                {
                    "id": "3.1.1.9",
                    "label": "Uno de los padres o tutores se niega a autorizar el viaje o está ausente en la vida del menor",
                    "desc": "Cuando uno de los padres se niega a autorizar el viaje o está ausente en la vida del menor.",
                    "type": "document",
                    "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
                    "requirements": [
                        {
                            "requirement": "Sentencia judicial que autoriza el viaje del Menor o sentencia judical que otorga la autoridad parental unilateral al padre que viaja",
                            "requirement_notes": "· Ir al tribunal de niños, niñas y adolescentes\r\n· Solicitar la sentencia donde se les otorga la patria potestad "
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la cédula de identidad del padre o  madre que realiza la solicitud",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del padre acompañante",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del padre acompañante",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
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
        }
    ],
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres/uno-de-los-padres-autoriza-al-otro-a-viajar": [
        {
            "id": "3.1.1.1",
            "label": "Uno de los padres autoriza al otro a viajar",
            "desc": "Cuando uno de los padres autoriza al otro a viajar con el menor",
            "type": "document",
            "slug": "uno-de-los-padres-autoriza-al-otro-a-viajar",
            "requirements": [
                {
                    "requirement": "Poder Notarial del padre o madre que no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría",
                    "requirement_notes": "· El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en PuntoGOB "
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la cédula de identidad del padre o madre que realiza la solicitud",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompañante",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres/viajara-con-la-persona-que-posee-la-guarda-legal": [
        {
            "id": "3.1.1.2",
            "label": "Viajará con la persona que posee la guarda legal",
            "desc": "Cuando el menor viaja con la persona que tiene la guarda legal de este",
            "type": "document",
            "slug": "viajara-con-la-persona-que-posee-la-guarda-legal",
            "requirements": [
                {
                    "requirement": "Poder Notarial de los padres, autorizando la salida del menor del país con el guarda, legalizado por procuraduría",
                    "requirement_notes": "· Ambos padres o tutores deben firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompañante",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres/el-menor-tiene-solo-apellido-materno-y-viajara-con-su-madre-": [
        {
            "id": "3.1.1.3",
            "label": "El menor tiene solo apellido materno y viajará con su madre ",
            "desc": "Cuando el menor ha sido declarado solo por la madre y es ella quien autoriza a otra persona a viajar con el menor",
            "type": "not_required_permission",
            "slug": "el-menor-tiene-solo-apellido-materno-y-viajara-con-su-madre-",
            "children": []
        }
    ],
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres/viajara-con-uno-de-sus-padres-y-el-otro-ha-fallecido": [
        {
            "id": "3.1.1.4",
            "label": "Viajará con uno de sus padres y el otro ha fallecido",
            "desc": "Cuando el menor viaja acompañado por su único padre o madre que aún está vivo",
            "type": "not_required_permission",
            "slug": "viajara-con-uno-de-sus-padres-y-el-otro-ha-fallecido",
            "children": []
        }
    ],
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres/el-menor-fue-adoptado-por-personas-extranjeras-y-viaja-por-primera-vez": [
        {
            "id": "3.1.1.5",
            "label": "El menor fue adoptado por personas extranjeras y viaja por primera vez",
            "desc": "Cuando el menor adoptado viaja con uno de los padres adoptivos",
            "type": "document",
            "slug": "el-menor-fue-adoptado-por-personas-extranjeras-y-viaja-por-primera-vez",
            "requirements": [
                {
                    "requirement": "Sentencia del tribunal  de niños, niñas y adolescentes que evidencie la adopción",
                    "requirement_notes": "· Ir al tribunal de niños, niñas y adolescentes\r\n· Solicitar la sentencia donde se les otorga la adopción, original y certificada. "
                },
                {
                    "requirement": "Poder Notarial del padre que tiene la patria potestad y no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría. ",
                    "requirement_notes": "· El padre debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la cédula o pasaporte del otro padre que autoriza",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del otro padre adoptivo que viaja con el menor",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres/uno-de-los-padres-vive-en-el-extranjero-y-autoriza-el-viaje": [
        {
            "id": "3.1.1.6",
            "label": "Uno de los padres vive en el extranjero y autoriza el viaje",
            "desc": "Cuando el padre o madre que reside en el extranjero autoriza al otro padre o madre que residen en la República Dominicana a viajar con el menor",
            "type": "document",
            "slug": "uno-de-los-padres-vive-en-el-extranjero-y-autoriza-el-viaje",
            "requirements": [
                {
                    "requirement": "Poder consular otorgado en el país en donde se encuentra el padre (debe ser apostillado y sellado en cancilleria) o Poder Notarial legalizado del país donde se encuentre el padre en  original con apostilla de la Haya",
                    "requirement_notes": "· El padre en el extranjero debe firmar el poder consular (en el consulado más cercana) autorizando la salida del menor.\r\n· Este poder debe ser legalizado en el Ministerio de Relaciones Exteriores de la República Dominicana."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompañante",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres/tiene-autorizacion-de-viaje-del-menordel-tribunal-ninos-ninas-y-adolescentes": [
        {
            "id": "3.1.1.7",
            "label": "Tiene autorización de viaje del menor del tribunal Niños, Niñas y Adolescentes",
            "desc": "Cuando el menor viaja con la persona que tiene la guarda legal con autorización de viaje",
            "type": "document",
            "slug": "tiene-autorizacion-de-viaje-del-menordel-tribunal-ninos-ninas-y-adolescentes",
            "requirements": [
                {
                    "requirement": "Autorización judicial (sentencia, auto o resolución) que autoriza el viaje del Menor",
                    "requirement_notes": "· Ir al tribunal de niños, niñas y adolescentes\r\n· Solicitar la sentencia donde se les otorga la Guarda Legal y Autorización de viaje del menor"
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la cédula de identidad del padre o madre que realiza la solicitud",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompañante",
                    "requirement_notes": "De la página principal con los datos biométricos."
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos."
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres/viajara-a-una-actividad-cultural-escolar-religiosa-deportiva-u-otra": [
        {
            "id": "3.1.1.8",
            "label": "Viajará a una actividad cultural, escolar, religiosa, deportiva u otra",
            "desc": "Cuando uno de los padres autoriza al otro a viajar con el menor para participar en actividad cultural, escolar, religiosa, deportiva u otra.",
            "type": "document",
            "slug": "viajara-a-una-actividad-cultural-escolar-religiosa-deportiva-u-otra",
            "requirements": [
                {
                    "requirement": "Poder Notarial del padre que no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría",
                    "requirement_notes": "· El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en PuntoGOB Sambil"
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la cédula de identidad del padre o madre que realiza la solicitud",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompañante",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres/uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor": [
        {
            "id": "3.1.1.9",
            "label": "Uno de los padres o tutores se niega a autorizar el viaje o está ausente en la vida del menor",
            "desc": "Cuando uno de los padres se niega a autorizar el viaje o está ausente en la vida del menor.",
            "type": "document",
            "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
            "requirements": [
                {
                    "requirement": "Sentencia judicial que autoriza el viaje del Menor o sentencia judical que otorga la autoridad parental unilateral al padre que viaja",
                    "requirement_notes": "· Ir al tribunal de niños, niñas y adolescentes\r\n· Solicitar la sentencia donde se les otorga la patria potestad "
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la cédula de identidad del padre o  madre que realiza la solicitud",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del padre acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del padre acompañante",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viajara-con-uno-de-los-padres/no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir": [
        {
            "id": "3.1.1.10",
            "label": "No veo el caso del menor o tengo dudas para elegir",
            "desc": "No veo el caso del menor o tengo dudas para elegir",
            "type": "not_found",
            "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
            "children": []
        }
    ],
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viaja-con-un-tercero": [
        {
            "id": "3.1.2",
            "label": "Viaja con un tercero ",
            "desc": null,
            "type": null,
            "slug": "viaja-con-un-tercero",
            "children": [
                {
                    "id": "3.1.2.1",
                    "label": "Viajará con la aerolínea",
                    "desc": "Cuando el menor viaja con la Aerolínea y cuenta con la autorización de ambos padres, padre, madre o tutor legal",
                    "type": "document",
                    "slug": "viajara-con-la-aerolinea",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial de ambos padres, padre, madre o tutor (según el caso) legal autorizando la salida del menor del país con la aerolínea, legalizado por procuraduría o sentencia judicial.",
                            "requirement_notes": "· El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en PuntoGOB Sambil"
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la cédula de la o las personas que autorizan",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos."
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
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
                    "label": "Viajará con el colegio, centro educativo o institución cultural",
                    "desc": "Cuando el menor viaja con  una academia, centro educativo o institución cultural, y cuenta con la autorización de los padres, padre, madre o tutor legal",
                    "type": "document",
                    "slug": "viajara-con-el-colegio-centro-educativo-o-institucion-cultural",
                    "requirements": [
                        {
                            "requirement": "Si ambos padres están en el país:\r\n\r\nPresentar un Poder Notarial (individual o conjunto) emitido por los padres, autorizando la salida del menor. Este poder debe estar legalizado por la Procuraduría General de la República\r\n\r\nSi uno o ambos padres están fuera del país:\r\n\r\nPresentar un Poder Consular emitido desde el país donde se encuentren, autorizando la salida del menor.\r\n\r\nSi uno de los padres no está de acuerdo o no está presente en la vida del menor:\r\n\r\nPresentar una Autorización Judicial, emitida por un tribunal competente, que permita la salida del menor.",
                            "requirement_notes": "· Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerolínea. \r\n· Este poder debe ser legalizado en la Procuraduría General de la República.\r\n· Los padres de todos los menores pueden hacer un solo poder notarial, donde estén las firmas de todos los padres que autorizan la salida de los menores."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompañante",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        }
                    ],
                    "children": []
                },
                {
                    "id": "3.1.2.3",
                    "label": "Viajará con academia, selección o liga deportiva",
                    "desc": "Cuando el menor viaja con  una academia, selecció o liga deportiva, y cuenta con la autorización de ambos padres, padre, madre o tutor legal",
                    "type": "document",
                    "slug": "viajara-con-academia-seleccion-o-liga-deportiva",
                    "requirements": [
                        {
                            "requirement": "Si ambos padres están en el país:\r\n\r\nPresentar un Poder Notarial (individual o conjunto) emitido por los padres, autorizando la salida del menor. Este poder debe estar legalizado por la Procuraduría General de la República.\r\n\r\nSi uno o ambos padres están fuera del país:\r\n\r\nPresentar un Poder Consular emitido desde el país donde se encuentren, autorizando la salida del menor.\r\n\r\nSi uno de los padres no está de acuerdo o no está presente en la vida del menor:\r\n\r\nPresentar una Autorización Judicial, emitida por un tribunal competente, que permita la salida del menor.",
                            "requirement_notes": "· Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerolínea. \r\n· Este poder debe ser legalizado en la Procuraduría General de la República.\r\n· Los padres de todos los menores pueden hacer un solo poder notarial, donde estén las firmas de todos los padres que autorizan la salida de los menores."
                        },
                        {
                            "requirement": "Carta o comunicación de la organización (Academia, iglesia o liga Deportiva) local especificando el motivo del viaje",
                            "requirement_notes": "Opcional"
                        },
                        {
                            "requirement": "Carta de invitación de la actividad a la que asistira el menor",
                            "requirement_notes": "Opcional"
                        },
                        {
                            "requirement": "Fotos o copias de las actas de nacimiento originales del (de los)  menor(es) , con el código QR legible  ",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Fotos o copias de las cédulas de identidad de los padres, madres o tutores",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Fotos o copias de la cédula de la persona que realiza la solicitud.",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Fotos o copias de las visas / residencias / permisos de estadías de menores",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompañante o responsable",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "Fotos o copias de los pasaportes de los menores",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente de cada menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                        }
                    ],
                    "children": []
                },
                {
                    "id": "3.1.2.4",
                    "label": "Viaja con la persona que posee la guarda custodia (de hecho o legal)",
                    "desc": "Cuando el menor viaja con la persona que tiene la guarda legal con autorización de viaje ",
                    "type": "document",
                    "slug": "viaja-con-la-persona-que-posee-la-guarda-custodia-(de-hecho-o-legal)",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial de ambos padres, autorizando la salida del menor del país con el guarda custodia (de hecho o legal), legalizado por procuraduría",
                            "requirement_notes": "· Ambos padres deben firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Fotos o copias de las cédulas de identidad del padre y de la madre; o del tutor ",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la cédula del acompañante ( si aplica)",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompañante",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                        }
                    ],
                    "children": []
                },
                {
                    "id": "3.1.2.5",
                    "label": "El menor tiene solo apellido materno y no viajará con su madre ",
                    "desc": "Cuando el menor ha sido declarado solo por la madre y es ella quien autoriza a otra persona a viajar con el menor",
                    "type": "document",
                    "slug": "el-menor-tiene-solo-apellido-materno-y-no-viajara-con-su-madre-",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial de la madre, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría",
                            "requirement_notes": "· La madre debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la cédula de identidad de la madre ",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la cédula de identidad del acompañante (si aplica)",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompañante",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                        }
                    ],
                    "children": []
                },
                {
                    "id": "3.1.2.6",
                    "label": "Uno de los padres ha fallecido y no viajará con el padre sobreviviente",
                    "desc": "Cuando el menor viaja con la persona que ha autorizado el padre o madre sobreviviente",
                    "type": "document",
                    "slug": "uno-de-los-padres-ha-fallecido-y-no-viajara-con-el-padre-sobreviviente",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial del padre sobreviviente, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría",
                            "requirement_notes": "· El padre sobreviviente debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la cédula de identidad del padre o madre que realiza la solicitud",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompañante",
                            "requirement_notes": "De la página principal con los datos biométricos."
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos."
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                        },
                        {
                            "requirement": "Acta de defunción del padre fallecido  con codigo QR legible",
                            "requirement_notes": null
                        }
                    ],
                    "children": []
                },
                {
                    "id": "3.1.2.7",
                    "label": "Viajará con una persona autorizada por el tutor legal ",
                    "desc": "Cuando el menor viaja con la persona que ha autorizado el tutor legal",
                    "type": "document",
                    "slug": "viajara-con-una-persona-autorizada-por-el-tutor-legal-",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial del tutor (es) legal, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría",
                            "requirement_notes": "· El tutor legal debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la cédula de identidad de el o los tutores que realizan la solicitud",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompañante",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                        },
                        {
                            "requirement": "Sentencia que otorga la tutoría legal del menor",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Cédula del acompañante",
                            "requirement_notes": null
                        }
                    ],
                    "children": []
                },
                {
                    "id": "3.1.2.8",
                    "label": "Viajará con abuelos, tíos, amigos u otras personas que no son los padres",
                    "desc": "Cuando el menor viaja con terceros que han sido autorizado los padres o tutores legales",
                    "type": "document",
                    "slug": "viajara-con-abuelos-tios-amigos-u-otras-personas-que-no-son-los-padres",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial de los padres, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría",
                            "requirement_notes": "· Ambos padres deben firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Fotos o copia sde las cédulas de identidad de ambos padres o tutor (es) ",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompañante",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                        },
                        {
                            "requirement": "Cédula del acompañante ",
                            "requirement_notes": null
                        }
                    ],
                    "children": []
                },
                {
                    "id": "3.1.2.9",
                    "label": "Uno de los padres o tutores se niega a autorizar el viaje o está ausente en la vida del menor",
                    "desc": "Cuando uno de los padres se niega a autorizar el viaje o está ausente en la vida del menor.",
                    "type": "document",
                    "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
                    "requirements": [
                        {
                            "requirement": "Sentencia Judicial que otorga la autorización de viaje del menor",
                            "requirement_notes": "· Ir al tribunal de niños, niñas y adolescentes\r\n· Solicitar la sentencia donde se les otorga la autorización de viaje "
                        },
                        {
                            "requirement": "Poder Notarial del padre que tiene la autorización de viaje y no viaja, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría",
                            "requirement_notes": "· El padre debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                        },
                        {
                            "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la cédula de identidad del padre o madre que realiza la solicitud",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Cédula de identidad del acompañante (si aplica)",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompañante",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos"
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
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
    ],
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viaja-con-un-tercero/viajara-con-la-aerolinea": [
        {
            "id": "3.1.2.1",
            "label": "Viajará con la aerolínea",
            "desc": "Cuando el menor viaja con la Aerolínea y cuenta con la autorización de ambos padres, padre, madre o tutor legal",
            "type": "document",
            "slug": "viajara-con-la-aerolinea",
            "requirements": [
                {
                    "requirement": "Poder Notarial de ambos padres, padre, madre o tutor (según el caso) legal autorizando la salida del menor del país con la aerolínea, legalizado por procuraduría o sentencia judicial.",
                    "requirement_notes": "· El padre que no viaja debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en PuntoGOB Sambil"
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la cédula de la o las personas que autorizan",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos."
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                },
                {
                    "requirement": "Boleto o reserva del viaje",
                    "requirement_notes": null
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viaja-con-un-tercero/viajara-con-el-colegio-centro-educativo-o-institucion-cultural": [
        {
            "id": "3.1.2.2",
            "label": "Viajará con el colegio, centro educativo o institución cultural",
            "desc": "Cuando el menor viaja con  una academia, centro educativo o institución cultural, y cuenta con la autorización de los padres, padre, madre o tutor legal",
            "type": "document",
            "slug": "viajara-con-el-colegio-centro-educativo-o-institucion-cultural",
            "requirements": [
                {
                    "requirement": "Si ambos padres están en el país:\r\n\r\nPresentar un Poder Notarial (individual o conjunto) emitido por los padres, autorizando la salida del menor. Este poder debe estar legalizado por la Procuraduría General de la República\r\n\r\nSi uno o ambos padres están fuera del país:\r\n\r\nPresentar un Poder Consular emitido desde el país donde se encuentren, autorizando la salida del menor.\r\n\r\nSi uno de los padres no está de acuerdo o no está presente en la vida del menor:\r\n\r\nPresentar una Autorización Judicial, emitida por un tribunal competente, que permita la salida del menor.",
                    "requirement_notes": "· Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerolínea. \r\n· Este poder debe ser legalizado en la Procuraduría General de la República.\r\n· Los padres de todos los menores pueden hacer un solo poder notarial, donde estén las firmas de todos los padres que autorizan la salida de los menores."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompañante",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viaja-con-un-tercero/viajara-con-academia-seleccion-o-liga-deportiva": [
        {
            "id": "3.1.2.3",
            "label": "Viajará con academia, selección o liga deportiva",
            "desc": "Cuando el menor viaja con  una academia, selecció o liga deportiva, y cuenta con la autorización de ambos padres, padre, madre o tutor legal",
            "type": "document",
            "slug": "viajara-con-academia-seleccion-o-liga-deportiva",
            "requirements": [
                {
                    "requirement": "Si ambos padres están en el país:\r\n\r\nPresentar un Poder Notarial (individual o conjunto) emitido por los padres, autorizando la salida del menor. Este poder debe estar legalizado por la Procuraduría General de la República.\r\n\r\nSi uno o ambos padres están fuera del país:\r\n\r\nPresentar un Poder Consular emitido desde el país donde se encuentren, autorizando la salida del menor.\r\n\r\nSi uno de los padres no está de acuerdo o no está presente en la vida del menor:\r\n\r\nPresentar una Autorización Judicial, emitida por un tribunal competente, que permita la salida del menor.",
                    "requirement_notes": "· Ambos padres deben firmar el poder notarial autorizando la salida del menor con la aerolínea. \r\n· Este poder debe ser legalizado en la Procuraduría General de la República.\r\n· Los padres de todos los menores pueden hacer un solo poder notarial, donde estén las firmas de todos los padres que autorizan la salida de los menores."
                },
                {
                    "requirement": "Carta o comunicación de la organización (Academia, iglesia o liga Deportiva) local especificando el motivo del viaje",
                    "requirement_notes": "Opcional"
                },
                {
                    "requirement": "Carta de invitación de la actividad a la que asistira el menor",
                    "requirement_notes": "Opcional"
                },
                {
                    "requirement": "Fotos o copias de las actas de nacimiento originales del (de los)  menor(es) , con el código QR legible  ",
                    "requirement_notes": null
                },
                {
                    "requirement": "Fotos o copias de las cédulas de identidad de los padres, madres o tutores",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Fotos o copias de la cédula de la persona que realiza la solicitud.",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Fotos o copias de las visas / residencias / permisos de estadías de menores",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompañante o responsable",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "Fotos o copias de los pasaportes de los menores",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente de cada menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viaja-con-un-tercero/viaja-con-la-persona-que-posee-la-guarda-custodia-(de-hecho-o-legal)": [
        {
            "id": "3.1.2.4",
            "label": "Viaja con la persona que posee la guarda custodia (de hecho o legal)",
            "desc": "Cuando el menor viaja con la persona que tiene la guarda legal con autorización de viaje ",
            "type": "document",
            "slug": "viaja-con-la-persona-que-posee-la-guarda-custodia-(de-hecho-o-legal)",
            "requirements": [
                {
                    "requirement": "Poder Notarial de ambos padres, autorizando la salida del menor del país con el guarda custodia (de hecho o legal), legalizado por procuraduría",
                    "requirement_notes": "· Ambos padres deben firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                    "requirement_notes": null
                },
                {
                    "requirement": "Fotos o copias de las cédulas de identidad del padre y de la madre; o del tutor ",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la cédula del acompañante ( si aplica)",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompañante",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viaja-con-un-tercero/el-menor-tiene-solo-apellido-materno-y-no-viajara-con-su-madre-": [
        {
            "id": "3.1.2.5",
            "label": "El menor tiene solo apellido materno y no viajará con su madre ",
            "desc": "Cuando el menor ha sido declarado solo por la madre y es ella quien autoriza a otra persona a viajar con el menor",
            "type": "document",
            "slug": "el-menor-tiene-solo-apellido-materno-y-no-viajara-con-su-madre-",
            "requirements": [
                {
                    "requirement": "Poder Notarial de la madre, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría",
                    "requirement_notes": "· La madre debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la cédula de identidad de la madre ",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la cédula de identidad del acompañante (si aplica)",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompañante",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viaja-con-un-tercero/uno-de-los-padres-ha-fallecido-y-no-viajara-con-el-padre-sobreviviente": [
        {
            "id": "3.1.2.6",
            "label": "Uno de los padres ha fallecido y no viajará con el padre sobreviviente",
            "desc": "Cuando el menor viaja con la persona que ha autorizado el padre o madre sobreviviente",
            "type": "document",
            "slug": "uno-de-los-padres-ha-fallecido-y-no-viajara-con-el-padre-sobreviviente",
            "requirements": [
                {
                    "requirement": "Poder Notarial del padre sobreviviente, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría",
                    "requirement_notes": "· El padre sobreviviente debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la cédula de identidad del padre o madre que realiza la solicitud",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompañante",
                    "requirement_notes": "De la página principal con los datos biométricos."
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos."
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                },
                {
                    "requirement": "Acta de defunción del padre fallecido  con codigo QR legible",
                    "requirement_notes": null
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viaja-con-un-tercero/viajara-con-una-persona-autorizada-por-el-tutor-legal-": [
        {
            "id": "3.1.2.7",
            "label": "Viajará con una persona autorizada por el tutor legal ",
            "desc": "Cuando el menor viaja con la persona que ha autorizado el tutor legal",
            "type": "document",
            "slug": "viajara-con-una-persona-autorizada-por-el-tutor-legal-",
            "requirements": [
                {
                    "requirement": "Poder Notarial del tutor (es) legal, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría",
                    "requirement_notes": "· El tutor legal debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la cédula de identidad de el o los tutores que realizan la solicitud",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompañante",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                },
                {
                    "requirement": "Sentencia que otorga la tutoría legal del menor",
                    "requirement_notes": null
                },
                {
                    "requirement": "Cédula del acompañante",
                    "requirement_notes": null
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viaja-con-un-tercero/viajara-con-abuelos-tios-amigos-u-otras-personas-que-no-son-los-padres": [
        {
            "id": "3.1.2.8",
            "label": "Viajará con abuelos, tíos, amigos u otras personas que no son los padres",
            "desc": "Cuando el menor viaja con terceros que han sido autorizado los padres o tutores legales",
            "type": "document",
            "slug": "viajara-con-abuelos-tios-amigos-u-otras-personas-que-no-son-los-padres",
            "requirements": [
                {
                    "requirement": "Poder Notarial de los padres, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría",
                    "requirement_notes": "· Ambos padres deben firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                    "requirement_notes": null
                },
                {
                    "requirement": "Fotos o copia sde las cédulas de identidad de ambos padres o tutor (es) ",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompañante",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                },
                {
                    "requirement": "Cédula del acompañante ",
                    "requirement_notes": null
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viaja-con-un-tercero/uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor": [
        {
            "id": "3.1.2.9",
            "label": "Uno de los padres o tutores se niega a autorizar el viaje o está ausente en la vida del menor",
            "desc": "Cuando uno de los padres se niega a autorizar el viaje o está ausente en la vida del menor.",
            "type": "document",
            "slug": "uno-de-los-padres-o-tutores-se-niega-a-autorizar-el-viaje-o-esta-ausente-en-la-vida-del-menor",
            "requirements": [
                {
                    "requirement": "Sentencia Judicial que otorga la autorización de viaje del menor",
                    "requirement_notes": "· Ir al tribunal de niños, niñas y adolescentes\r\n· Solicitar la sentencia donde se les otorga la autorización de viaje "
                },
                {
                    "requirement": "Poder Notarial del padre que tiene la autorización de viaje y no viaja, autorizando la salida del menor del país con el acompañante, legalizado por procuraduría",
                    "requirement_notes": "· El padre debe firmar el poder notarial autorizando la salida del menor.\r\n· Este poder debe ser legalizado en la Procuraduría General de la República o en el PuntoGOB Sambil."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original del menor, con el código QR legible  ",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la cédula de identidad del padre o madre que realiza la solicitud",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Cédula de identidad del acompañante (si aplica)",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompañante",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-ha-estado-mas-de-6-meses-en-el-pais/viaja-con-un-tercero/no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir": [
        {
            "id": "3.1.2.10",
            "label": "No veo el caso del menor o tengo dudas para elegir",
            "desc": "No veo el caso del menor o tengo dudas para elegir",
            "type": "not_found",
            "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
            "children": []
        }
    ],
    "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana/el-menor-no-ha-estado-mas-de-6-meses-en-el-pais": [
        {
            "id": "3.2",
            "label": "El menor no ha estado más de 6 meses en el país",
            "desc": null,
            "type": "not_required_permission",
            "slug": "el-menor-no-ha-estado-mas-de-6-meses-en-el-pais",
            "children": []
        }
    ],
    "el-menor-tiene-estadia-temporal-como-estudiante-deportista-o-artista": [
        {
            "id": "4",
            "label": "El menor tiene estadía temporal como estudiante, deportista o artista",
            "desc": null,
            "type": null,
            "slug": "el-menor-tiene-estadia-temporal-como-estudiante-deportista-o-artista"
        }
    ],
    "el-menor-tiene-estadia-temporal-como-estudiante-deportista-o-artista/el-menor-ha-estado-mas-de-6-meses-en-el-pais": [
        {
            "id": "4.1",
            "label": "El menor ha estado más de 6 meses en el país",
            "desc": null,
            "type": null,
            "slug": "el-menor-ha-estado-mas-de-6-meses-en-el-pais",
            "children": [
                {
                    "id": "4.1.1",
                    "label": "El menor viajará acompañado con la persona o entidad autorizada con la que entró y se dirigirse a su país de origen",
                    "desc": "EL menor saldra del país con la misma persona u organizació con la que ingresó, y se dirige al mismo país de origen.",
                    "type": "document",
                    "slug": "el-menor-viajara-acompanado-con-la-persona-o-entidad-autorizada-con-la-que-entro-y-se-dirigirse-a-su-pais-de-origen",
                    "requirements": [
                        {
                            "requirement": "Poder notarial extranjero autorizando la salida del menor",
                            "requirement_notes": "Debe ser recibido en original y debe contener la apostilla de La Haya en original. Debe ser traducido al español y legalizada ante la procuraduría."
                        },
                        {
                            "requirement": "Acta de nacimiento del menor",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del acompañante",
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
                    "label": "El menor viajará acompañado de ambos padres",
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
                    "label": "El menor viajará con uno de los padres",
                    "desc": "Cuando uno de los padres autoriza al otro a viajar con el menor",
                    "type": "document",
                    "slug": "el-menor-viajara-con-uno-de-los-padres",
                    "requirements": [
                        {
                            "requirement": "Poder Notarial del padre o madre que no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría",
                            "requirement_notes": "· El padre que no viaja debe firmar el poder notarial autorizando la salida del menor"
                        },
                        {
                            "requirement": null,
                            "requirement_notes": "· Este poder debe ser legalizado en la Procuraduría General de la República o en PuntoGOB "
                        },
                        {
                            "requirement": "Acta de nacimiento del menor",
                            "requirement_notes": null
                        },
                        {
                            "requirement": "Foto o copia de la cédula del pasaporte del padre o madre que realiza la solicitud",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del otro padre que autoriza",
                            "requirement_notes": "Versión nueva"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                            "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                        },
                        {
                            "requirement": "Foto o copia del pasaporte del menor",
                            "requirement_notes": "De la página principal con los datos biométricos."
                        },
                        {
                            "requirement": "1 Foto 2x2 reciente del menor",
                            "requirement_notes": "De frente, reciente y fondo claro"
                        },
                        {
                            "requirement": "Recibo de pago del servicio ",
                            "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
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
        }
    ],
    "el-menor-tiene-estadia-temporal-como-estudiante-deportista-o-artista/el-menor-ha-estado-mas-de-6-meses-en-el-pais/el-menor-viajara-acompanado-con-la-persona-o-entidad-autorizada-con-la-que-entro-y-se-dirigirse-a-su-pais-de-origen": [
        {
            "id": "4.1.1",
            "label": "El menor viajará acompañado con la persona o entidad autorizada con la que entró y se dirigirse a su país de origen",
            "desc": "EL menor saldra del país con la misma persona u organizació con la que ingresó, y se dirige al mismo país de origen.",
            "type": "document",
            "slug": "el-menor-viajara-acompanado-con-la-persona-o-entidad-autorizada-con-la-que-entro-y-se-dirigirse-a-su-pais-de-origen",
            "requirements": [
                {
                    "requirement": "Poder notarial extranjero autorizando la salida del menor",
                    "requirement_notes": "Debe ser recibido en original y debe contener la apostilla de La Haya en original. Debe ser traducido al español y legalizada ante la procuraduría."
                },
                {
                    "requirement": "Acta de nacimiento del menor",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompañante",
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
        }
    ],
    "el-menor-tiene-estadia-temporal-como-estudiante-deportista-o-artista/el-menor-ha-estado-mas-de-6-meses-en-el-pais/el-menor-viajara-acompanado-de-ambos-padres": [
        {
            "id": "4.1.2",
            "label": "El menor viajará acompañado de ambos padres",
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
        }
    ],
    "el-menor-tiene-estadia-temporal-como-estudiante-deportista-o-artista/el-menor-ha-estado-mas-de-6-meses-en-el-pais/el-menor-viajara-con-uno-de-los-padres": [
        {
            "id": "4.1.3",
            "label": "El menor viajará con uno de los padres",
            "desc": "Cuando uno de los padres autoriza al otro a viajar con el menor",
            "type": "document",
            "slug": "el-menor-viajara-con-uno-de-los-padres",
            "requirements": [
                {
                    "requirement": "Poder Notarial del padre o madre que no viaja, autorizando la salida del menor del país con el otro padre, legalizado por procuraduría",
                    "requirement_notes": "· El padre que no viaja debe firmar el poder notarial autorizando la salida del menor"
                },
                {
                    "requirement": null,
                    "requirement_notes": "· Este poder debe ser legalizado en la Procuraduría General de la República o en PuntoGOB "
                },
                {
                    "requirement": "Acta de nacimiento del menor",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la cédula del pasaporte del padre o madre que realiza la solicitud",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia del pasaporte del otro padre que autoriza",
                    "requirement_notes": "Versión nueva"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía o trabajo del acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia / permiso de estadía del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos."
                },
                {
                    "requirement": "1 Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente, reciente y fondo claro"
                },
                {
                    "requirement": "Recibo de pago del servicio ",
                    "requirement_notes": "Puede realizarse en línea o presencial con el impuesto del BanReservas a nombre del padre, madre o tutor."
                }
            ],
            "children": []
        }
    ],
    "el-menor-tiene-estadia-temporal-como-estudiante-deportista-o-artista/el-menor-ha-estado-mas-de-6-meses-en-el-pais/no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir": [
        {
            "id": "4.1.4",
            "label": "No veo el caso del menor o tengo dudas para elegir",
            "desc": "No veo el caso del menor o tengo dudas para elegir",
            "type": "not_found",
            "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
            "children": []
        }
    ],
    "el-menor-tiene-estadia-temporal-como-estudiante-deportista-o-artista/el-menor-no-ha-estado-mas-de-6-meses-en-el-pais": [
        {
            "id": "4.2",
            "label": "El menor no ha estado más de 6 meses en el país",
            "desc": null,
            "type": "not_required_permission",
            "slug": "el-menor-no-ha-estado-mas-de-6-meses-en-el-pais",
            "requirements": [
                {
                    "requirement": "No requiere el permiso",
                    "requirement_notes": "No lo requiere si el menor viaja acompañado con una de las personas con las que entro y se dirigirse a su pais de origen."
                }
            ],
            "children": [
                {
                    "id": "4.2.1",
                    "label": "No se requiere permiso.",
                    "desc": "EL menor saldra del país con la misma persona u organizació con la que ingresó, y se dirige al mismo país de origen.",
                    "type": null,
                    "slug": "no-se-requiere-permiso.",
                    "children": []
                }
            ]
        }
    ],
    "el-menor-tiene-estadia-temporal-como-estudiante-deportista-o-artista/el-menor-no-ha-estado-mas-de-6-meses-en-el-pais/no-se-requiere-permiso.": [
        {
            "id": "4.2.1",
            "label": "No se requiere permiso.",
            "desc": "EL menor saldra del país con la misma persona u organizació con la que ingresó, y se dirige al mismo país de origen.",
            "type": null,
            "slug": "no-se-requiere-permiso.",
            "children": []
        }
    ],
    "el-menor-es-hijo-a-de-personal-de-organismos-internacionales-acreditados-en-el-pais": [
        {
            "id": "5",
            "label": "El menor es hijo/a de personal de organismos internacionales acreditados en el país",
            "desc": null,
            "type": null,
            "slug": "el-menor-es-hijo-a-de-personal-de-organismos-internacionales-acreditados-en-el-pais"
        }
    ],
    "el-menor-es-hijo-a-de-personal-de-organismos-internacionales-acreditados-en-el-pais/el-menor-viajara-acompanado-de-ambos-padres": [
        {
            "id": "5.1",
            "label": "El menor viajará acompañado de ambos padres",
            "desc": "Cuando el menor viaja con ambos padres",
            "type": "not_required_permission",
            "slug": "el-menor-viajara-acompanado-de-ambos-padres",
            "requirements": [
                {
                    "requirement": "Nada",
                    "requirement_notes": "No requiere presentar PSM en Control Migratorio"
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-hijo-a-de-personal-de-organismos-internacionales-acreditados-en-el-pais/el-menor-viajara-con-uno-de-los-padres": [
        {
            "id": "5.2",
            "label": "El menor viajará con uno de los padres",
            "desc": "Cuando el menor viaja con uno de los padres ",
            "type": "document",
            "slug": "el-menor-viajara-con-uno-de-los-padres",
            "requirements": [
                {
                    "requirement": "Poder consular de la embajada, consulado o representación del país en donde se encuentra el padre (debe ser apostillado y sellado en cancilleria) o Poder Notarial del país donde se encuentre el padre en  original apostilla de la Haya",
                    "requirement_notes": "· El padre en el extranjero debe firmar el poder consular autorizando la salida del menor."
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original, con el código QR legible  ",
                    "requirement_notes": "Versión reciente con código QR o número de evento."
                },
                {
                    "requirement": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la cédula del otro padre que autoriza",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la visa / residencia del acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompañante",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente y reciente"
                },
                {
                    "requirement": "Recibo de pago",
                    "requirement_notes": "Puede realizarse en línea o presencial en BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-hijo-a-de-personal-de-organismos-internacionales-acreditados-en-el-pais/el-menor-viajara-con-un-tercero": [
        {
            "id": "5.3",
            "label": "El menor viajará con un tercero ",
            "desc": null,
            "type": "document",
            "slug": "el-menor-viajara-con-un-tercero",
            "requirements": [
                {
                    "requirement": "Poder consular de la embajada, consulado o representación del país en donde se encuentran los padres (debe ser apostillado y sellado en cancilleria) o Poder Notarial del país donde se encuentren los padres en  original apostilla de la Haya",
                    "requirement_notes": "· Los padres en el extranjero deben firmar el poder consular autorizando la salida del menor"
                },
                {
                    "requirement": "Foto o copia de acta de nacimiento original, con el código QR legible  ",
                    "requirement_notes": "Versión reciente con código QR o número de evento."
                },
                {
                    "requirement": "Foto o copia de la cédula de identidad del padre, madre o tutor que realiza la solicitud",
                    "requirement_notes": null
                },
                {
                    "requirement": "Foto o copia de la visa / residencia del acompañante",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia de la visa / residencia del menor",
                    "requirement_notes": "Si viaja a un país que requiera visa o residencia"
                },
                {
                    "requirement": "Foto o copia del pasaporte del acompañante",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "Foto o copia del pasaporte del menor",
                    "requirement_notes": "De la página principal con los datos biométricos"
                },
                {
                    "requirement": "Foto 2x2 reciente del menor",
                    "requirement_notes": "De frente y reciente"
                },
                {
                    "requirement": "Recibo de pago",
                    "requirement_notes": "Puede realizarse en línea o presencial en BanReservas a nombre del padre, madre o tutor"
                }
            ],
            "children": []
        }
    ],
    "el-menor-es-hijo-a-de-personal-de-organismos-internacionales-acreditados-en-el-pais/no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir": [
        {
            "id": "5.4",
            "label": "No veo el caso del menor o tengo dudas para elegir",
            "desc": null,
            "type": "not_found",
            "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir",
            "children": []
        }
    ],
    "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir": [
        {
            "id": "6",
            "label": "No veo el caso del menor o tengo dudas para elegir",
            "desc": "No veo el caso del menor o tengo dudas para elegir",
            "type": "not_found",
            "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir"
        }
    ],
    "/": [
        {
            "id": "1",
            "label": "El menor es dominicano y no posee otra nacionalidad",
            "desc": null,
            "type": null,
            "slug": "el-menor-es-dominicano-y-no-posee-otra-nacionalidad"
        },
        {
            "id": "2",
            "label": "El menor es dominicano pero tiene doble nacionalidad y/o reside en el extranjero ",
            "desc": null,
            "type": null,
            "slug": "el-menor-es-dominicano-pero-tiene-doble-nacionalidad-y-o-reside-en-el-extranjero"
        },
        {
            "id": "3",
            "label": "El menor es extranjero con residencia en la República Dominicana ",
            "desc": null,
            "type": null,
            "slug": "el-menor-es-extranjero-con-residencia-en-la-republica-dominicana"
        },
        {
            "id": "4",
            "label": "El menor tiene estadía temporal como estudiante, deportista o artista",
            "desc": null,
            "type": null,
            "slug": "el-menor-tiene-estadia-temporal-como-estudiante-deportista-o-artista"
        },
        {
            "id": "5",
            "label": "El menor es hijo/a de personal de organismos internacionales acreditados en el país",
            "desc": null,
            "type": null,
            "slug": "el-menor-es-hijo-a-de-personal-de-organismos-internacionales-acreditados-en-el-pais"
        },
        {
            "id": "6",
            "label": "No veo el caso del menor o tengo dudas para elegir",
            "desc": "No veo el caso del menor o tengo dudas para elegir",
            "type": "not_found",
            "slug": "no-veo-el-caso-del-menor-o-tengo-dudas-para-elegir"
        }
    ]
}