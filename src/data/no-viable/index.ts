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
                    desc: "Lunes a viernes de 8:00 am. a 4:00 pm."
                }
            },
            {
                branch: {
                    label: "Oficina Santiago",
                    address: "Gral. Eusebio Manzueta 21, Santiago",
                },
                time: {
                    label: "Horario de servicio",
                    desc: "Lunes a viernes de 8:00 a.m. – 8:00 p.m"
                }
            },
            {
                branch: {
                    label: "Oficina Puerto Planta",
                    address: "Parada 57 Av. Bulevard Del Faro, Parque del este",
                },
                time: {
                    label: "Horario de servicio",
                    desc: "Lunes a viernes de 8:00 a.m. – 5:00 p.m"
                }
            },
            {
                branch: {
                    label: "Oficina Punta Cana",
                    address: "Parada 57 Av. Bulevard Del Faro, Parque del este",
                },
                time: {
                    label: "Horario de servicio",
                    desc: "Lunes a viernes de 8:00 a.m. – 5:00 p.m"
                }
            }
        ]
    },
    {
        title: "Puedes visitar cualquier Punto GOB",
        data: [
            {
                branch: {
                    label: "Punto GOB Megacentro",
                    address: "Av. San Vicente de Paúl 321, Santo Domingo Este.",
                },
                time: {
                    label: "Horario de servicio",
                    desc: ["Lunes a viernes de 8:00 a.m. – 8:00 p.m.", "Sábados de 8:00 a.m. – 2:00 p.m."]
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
                        "Lunes a viernes de 8:00 a.m. – 8:00 p.m",
                        "Sábados de 9:00 a.m – 6:00 p.m."
                    ]
                }
            },
            {
                branch: {
                    label: "Punto GOB Parque del Este",
                    address: "Parada 57 Av. Bulevard Del Faro, Parque del este",
                },
                time: {
                    label: "Horario de servicio",
                    desc: "Lunes a viernes de 8:00 a.m. – 5:00 p.m"
                }
            },
            {
                branch: {
                    label: "Punto GOB Santo Domingo Oeste",
                    address: "Occidental Mall. Av. Prolongación 27 de Febrero.",
                },
                time: {
                    label: "Horario de servicio",
                    desc: [
                        "Lunes a viernes de 8:00 a.m. – 8:00 p.m",
                        "Sábados de 9:00 a.m – 6:00 p.m."
                    ]
                }
            },
            {
                branch: {
                    label: "Punto GOB Santo Doming Norte",
                    address: "Av. Pdte. Jacobo Majluta Azar, Santo Domingo",
                },
                time: {
                    label: "Horario de servicio",
                    desc: [
                        "Lunes a viernes de 8:00 a.m. – 8:00 p.m.",
                        "Sábados de 9:00 a.m – 6:00 p.m."
                    ]
                }
            },
            {
                branch: {
                    label: "Punto GOB Santiago",
                    address: "La Sirena. Autopista Duarte Km 2 1/2, Santiago",
                },
                time: {
                    label: "Horario de servicio",
                    desc: [
                        "Lunes a viernes de 8:00 a.m. – 8:00 p.m.",
                        "Sábados de 9:00 a.m – 6:00 p.m."
                    ]
                }
            },
            {
                branch: {
                    label: "Punto GOB San Cristóbal",
                    address: "Supermercado Bravo. El Esfuerzo 3, San Cristóbal",
                },
                time: {
                    label: "Horario de servicio",
                    desc: [
                        "Lunes a viernes de 8:00 a.m. – 8:00 p.m.",
                        "Sábados de 9:00 a.m – 6:00 p.m."
                    ]
                }
            },
        ]
    }
]