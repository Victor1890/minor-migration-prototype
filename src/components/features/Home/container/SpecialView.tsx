import { type HierarchyNode } from "@/data";
import { useMemo, type JSX } from "react";
import { Documentation } from "../components/Documentation";
import { NotFound } from "../components/NotFound";
import { NoViable } from "../components/NoViable";

export interface RenderSpecialView {
  title: string;
  description: string;
  render: JSX.Element;
  type: "not-found" | "no-viable" | "documentation";
}

export function specialView(formData: HierarchyNode) {
  const renderSpecialView = useMemo(() => {
    const noRequiredPermission = formData.type === "not_required_permission";
    if (noRequiredPermission) {
      return {
        title: "El menor no necesita permiso para salir del país",
        description:
          "No te preocupes, no necesitas un permiso especial para este caso.",
        render: <NotFound />,
        type: "not-found",
      };
    }

    const notViablePage = formData.type === "not_found";
    if (notViablePage) {
      return {
        title: "¿Tienes dudas o no ves el caso del menor entre las opciones?",
        description:
          "¡No te preocupes! Podemos ayudarte a identificar la opción correcta o guiarte paso a paso si no estás seguro",
        render: <NoViable />,
        type: "no-viable",
      };
    }

    const isDocumentationCase = Object.hasOwn(formData, "requirements");
    if (isDocumentationCase) {
      return {
        title: "Documentos obligatorios y pasos a seguir",
        description:
          "Antes de iniciar tu solicitud, asegúrate de contar con todos los documentos necesarios y seguir el paso a paso para completar el proceso sin contratiempos",
        render: <Documentation />,
        type: "documentation",
      };
    }

    return null;
  }, [formData]);

  return renderSpecialView as RenderSpecialView;
}
