
import { create } from 'zustand';

type SetProgressArg = number | ((current: number) => number);
type ProgessBarState = {
    progress: number;
    setProgress: (value: SetProgressArg) => void;
    resetProgress: () => void;
};

export const useProgressBarStore = create<ProgessBarState>((set) => ({
    progress: 20,
    setProgress: (value) => {
        if (typeof value === 'function') {
            return set((state) => ({
                progress: value(state.progress),
            }));
        }

        return set({ progress: value });

    },
    resetProgress: () => set({ progress: 20 }),
}));