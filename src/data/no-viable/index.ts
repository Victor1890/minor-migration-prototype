interface BranchOfficeData {
    title: string;
    data: {
        branch: {
            label: string;
            address: string;
        };
        time: {
            label: string;
            desc: string | string[];
        };
    }[];
}


export const BRANCH_OFFICE_DATA: BranchOfficeData[] = [
    {
        title: "Puedes visitar nuestras oficinas",
        data: [
            {
                branch: {
                    label: "Oficina Principal",
                    address: "Autopista 30 de Mayo, Esquina Héroes De Luperón, Santo Domingo",
                },
                time: {
                    label: "Horario de servicio",
                    desc: ["Lunes a viernes de 8:00 a.m. a 3:30 p.m.", "Tel: 809 508 2555 Ext. 7010"]
                },
            },
            {
                branch: {
                    label: "Oficina Malecón Center",
                    address: "Av. George Washington No. 500, Zona Universitaria, Santo Domingo ",
                },
                time: {
                    label: "Horario de servicio",
                    desc: ["Lunes a viernes de 8:00 a.m. – 8:00 p.m. ", "Ext. 2009 - 2071"]
                },
            },
            {
                branch: {
                    label: "Oficina Santiago",
                    address: "Calle Gral. Eusebio Manzueta No. 21, Santiago de los Caballeros",
                },
                time: {
                    label: "Horario de servicio",
                    desc: [
                        "Lunes a viernes de 8:00 a.m. – 3:30 p.m.",
                        "Ext. 2205 - 2203 - 2206 - 2211"
                    ]
                }
            },
            {
                branch: {
                    label: "Oficina Puerto Plata",
                    address: "Calle Beller, No. 93, Puerto Plata",
                },
                time: {
                    label: "Horario de servicio",
                    desc: [
                        "Lunes a viernes de 8:00 a.m. – 3:30 p.m.",
                        "Ext. 3600 - 3601 - 3603 "
                    ]
                }
            },
            {
                branch: {
                    label: "Oficina Punta Cana",
                    address: "Blvd. 1ro. de Noviembre, Punta Cana",
                },
                time: {
                    label: "Horario de servicio",
                    desc: ["Lunes a viernes de 8:00 a.m. – 3:30 p.m.", "Ext. 3000 - 3001 - 3002 "]
                }
            }
        ]
    },
    {
        title: "Puedes visitar cualquier Punto GOB",
        data: [
            {
                branch: {
                    label: "Punto GOB Santo Domingo Norte",
                    address: "Av. Pdte. Jacobo Majluta Azar, Santo Domingo Norte",
                },
                time: {
                    label: "Horario de servicio",
                    desc: [
                        "Lunes a viernes de 8:00 a.m. – 8:00 p.m.",
                        "Sábados de 9:00 a.m. – 6:00 p.m."
                    ]
                }
            },
            {
                branch: {
                    label: "Punto GOB Sambil",
                    address: "Av. John F. Kennedy, Santo Domingo",
                },
                time: {
                    label: "Horario de servicio",
                    desc: [
                        "Lunes a viernes de 8:00 a.m. – 8:00 p.m.",
                        "Sábados de 9:00 a.m. – 6:00 p.m."
                    ]
                }
            },
            {
                branch: {
                    label: "Punto GOB San Cristóbal",
                    address: "Supermercado Bravo, El Esfuerzo 3, San Cristóbal",
                },
                time: {
                    label: "Horario de servicio",
                    desc: [
                        "Lunes a viernes de 8:00 a.m. – 8:00 p.m.",
                        "Sábados de 9:00 a.m. – 6:00 p.m."
                    ]
                }
            },
            {
                branch: {
                    label: "Punto GOB Santo Domingo Oeste",
                    address: "Occidental Mall, Av. Prolongación 27 de Febrero"
                },
                time: {
                    label: "Horario de servicio",
                    desc: [
                        "Lunes a viernes de 8:00 a.m. – 8:00 p.m.",
                        "Sábados de 9:00 a.m. – 6:00 p.m."
                    ]
                }
            },
        ]
    }
]