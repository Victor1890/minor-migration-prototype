import type { HierarchyNode } from "@/data";
import { create } from "zustand";

interface FormDataState {
    formData: HierarchyNode;
    navigationStack: string[];
    pushToStack: (id: string) => void;
    popFromStack: () => string | undefined
    show: boolean;
    setShow: (show: boolean) => void;
    setFormData: (data: FormDataState['formData']) => void;
    resetFormData: () => void;
}

export const useFormDataStore = create<FormDataState>((set) => ({
    formData: {} as FormDataState['formData'],

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
            const newStack = [...state.navigationStack];
            popped = newStack.pop();
            return { navigationStack: newStack };
        });
        return popped;
    },

    setFormData: (data) => set({ formData: data }),
    resetFormData: () => set({ formData: {} as FormDataState['formData'], navigationStack: [] }),
}));