import type { HierarchyNode } from "@/data";
import { create } from "zustand";

interface FormDataState {
    formData: HierarchyNode;
    historySteps: Partial<HierarchyNode>[];
    navigationStack: string[];
    show: boolean;
    pushToStack: (id: string) => void;
    popFromStack: () => string | undefined
    setShow: (show: boolean) => void;
    setFormData: (data: FormDataState['formData']) => void;
    resetFormData: () => void;
    setHistoryStep: (step: HierarchyNode) => void;
}

export const useFormDataStore = create<FormDataState>((set, get) => ({
    formData: {} as FormDataState['formData'],
    historySteps: [],
    show: false,
    setShow: (show) => set({ show }),
    navigationStack: [],
    pushToStack: (id) =>
        set((state) => ({
            navigationStack: [...state.navigationStack, id],
        })),
    popFromStack: () => {
        let popped: string | undefined;
        set((state) => {
            state?.historySteps?.pop();
            const newStack = [...state.navigationStack];
            popped = newStack.pop();
            return { navigationStack: newStack };
        });
        return popped;
    },

    setFormData: (data) => {

        const historyStepData = [...get().historySteps, { label: data.label, slug: data.slug }];

        const historySteps = Array.from(
            new Map(historyStepData.map((item) => [item.slug, item])).values()
        )

        return set({ formData: data, historySteps })
    },

    setHistoryStep: data => {

        const historyStepData = [...get().historySteps, { label: data.label, slug: data.slug }];

        const historySteps = Array.from(
            new Map(historyStepData.map((item) => [item.slug, item])).values()
        )

        return set({ historySteps })

    },

    resetFormData: () => set({ formData: {} as FormDataState['formData'], navigationStack: [], historySteps: [] }),
}));