// ✅ designStore.js
import { create } from 'zustand';

const useDesignStore = create((set) => ({
  createdProduct: null,
  setCreatedProduct: (product) => {
    console.log("🧠 Zustand store updated with:", product); // <== MUST FIRE
    set({ createdProduct: product });
  },
}));

export default useDesignStore;
