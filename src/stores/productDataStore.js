import { create } from 'zustand';
import { orders } from '../datas/mockingOrder';
import { products } from '../datas/products';

const useDataStore = create((set) => ({
  items: products,
  orders: orders,
  test: 5,
  setItems: (newItems) => set({ items: newItems })
  // addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  // removeItem: (id) =>
  //   set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
}));

export default useDataStore;
