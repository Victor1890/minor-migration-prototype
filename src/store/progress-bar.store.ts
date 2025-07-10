import { create } from 'zustand';

type ProgessBarState = {
    progress: number;
    setProgress: (value: number) => void;
    resetProgress: () => void;
};

export const useProgressBarStore = create<ProgessBarState>((set) => ({
    progress: 0,
    setProgress: (value) => set({ progress: value }),
    resetProgress: () => set({ progress: 0 }),
}));