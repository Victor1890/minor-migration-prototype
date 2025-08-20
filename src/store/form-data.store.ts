import type { HierarchyNode } from "@/data";
import { create } from "zustand";

interface FormDataState {
    formData: HierarchyNode;
    historySteps: Partial<HierarchyNode>[];
    show: boolean;
    popHistoryStep: () => void;
    setShow: (show: boolean) => void;
    setFormData: (data: FormDataState['formData']) => void;
    resetFormData: () => void;
    setHistoryStep: (step: HierarchyNode) => void;
}

export const useFormDataStore = create<FormDataState>((set, get) => ({
    formData: {} as FormDataState['formData'],
    historySteps: [],
    show: false,
    popHistoryStep: () => {
        const historySteps = get().historySteps.slice(0, -1);
        return set({ historySteps });
    },
    setShow: (show) => set({ show }),

    setFormData: (data) => {

        const historyStepData = [...get().historySteps, { label: data.label, slug: data.slug }];

        const historySteps = Array.from(
            new Map(historyStepData.map((item) => [item.slug, item])).values()
        ).filter((item) => Boolean(item.slug));

        return set({ formData: data, historySteps })
    },

    setHistoryStep: data => {

        const historyStepData = [...get().historySteps, { label: data.label, slug: data.slug }];

        const historySteps = Array.from(
            new Map(historyStepData.map((item) => [item.slug, item])).values()
        )

        return set({ historySteps })

    },

    resetFormData: () => set({
        formData: {} as FormDataState['formData'],
        historySteps: [],
        show: false
    }),
}));