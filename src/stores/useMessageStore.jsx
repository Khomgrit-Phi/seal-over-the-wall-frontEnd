// src/store/useMessageStore.js
import { create } from 'zustand';

export const useMessageStore = create((set) => ({
  message: '',      // Initial state for the message
  setMessage: (msg) => set({ message: msg }),
}));