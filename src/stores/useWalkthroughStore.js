import { create } from 'zustand'

export const useWalkthroughStore = create((set) => ({
  run: true,
  stepIndex: 0,
  setStepIndex: (index) => set({ stepIndex: index }),
  stop: () => set({ run: false }),
}))