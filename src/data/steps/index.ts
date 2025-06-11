import type { IFormData } from '@/components/features/Home/hooks/useFormNavigation';
import { Documentation } from './Documentation';
import { SpecialConditionsPresent } from './SpecialConditionsPresent'
import { StatusMigrationMinor } from './StatusMigrationMinor'
import { TravelingWithMinor } from './TravelingWithMinor'

interface Step {
    title: string;
    description: string;
    component: (props: { value: string; setValue: (value: string) => void; payload: IFormData; }) => React.ReactNode;
    message?: string; // Optional message for additional context
}

export const STEPS: Step[] = [
    {
        title: "¿Cuál es el estatus migratorio del menor?",
        description: "Elige el estatus del menor según su nacionalidad o residencia haciendo click en alguna de las opciones.",
        component: StatusMigrationMinor,
        message: "Antes de iniciar su solicitud, asegúrese de que todos los documentos requeridos estén actualizados, especialmente la cédula, el pasaporte y el visado.",
    },
    {
        title: "¿Con quién viajará el menor?",
        description: "Selecciona la opción que mejor describa con quién realizará el viaje el menor. Esto nos ayudará a determinar si se requiere una autorización adicional.",
        component: TravelingWithMinor,
        message: "Antes de continuar, verifique quién acompañará al menor en el viaje, ya que esto determinará el tipo de autorización que deberá presentar."
    },
    {
        title: "¿Se presenta alguna de estas condiciones especiales?",
        description: "Indique si el menor se encuentra en alguna de las siguientes situaciones, ya que esto puede cambiar los requisitos para su permiso de salida.",
        component: SpecialConditionsPresent,
        message: "Antes de continuar, asegúrese de conocer si el menor está en alguna situación especial, como la ausencia de uno de los padres, fallecimiento, custodia legal o si ha sido adoptado."
    },
    {
        title: "Requisitos y pasos para tu caso",
        description: "",
        component: Documentation,
    },
]

export const STEP_NOT_FOUND = {
    title: "No necesitas permiso para este caso",
    description: "Según la información que proporcionaste, el menor no necesita tramitar un permiso de salida. Aun así, te recomendamos llevar consigo los documentos personales básicos (pasaporte, acta de nacimiento y visa si aplica), ya que podrían ser solicitados por las autoridades al momento del viaje.",
    component: null,
}