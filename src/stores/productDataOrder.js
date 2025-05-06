
import { create } from "zustand";
import  { orders }  from "../datas/mockingOrder";

const useDataStore = create(() => ({
  items: orders,

}));

export default useDataStore;
