/* eslint-disable @typescript-eslint/no-unused-expressions */
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface Store {
  number: number;
  name: string,
  surname: string,
  setNewName: (newName: string) => void;
  setNewSurname: (newSurname: string) => void;
  increase: () => void;
  decrease: () => void;
}

export const useStore = create<Store>(devtools(
  persist(
    (set, get) => ({
      number: 0,
      name: '',
      surname: '',
      setNewName: (newName) => set({ name: newName }),
      setNewSurname: (newSurname) => set({ surname: newSurname }),
      increase: () => set({ number: get().number + 1 }),
      decrease: () => set({ number: get().number - 1 }),
    }),

    {
      name: 'number',
      getStorage: () => localStorage,
    },
  ),
));
