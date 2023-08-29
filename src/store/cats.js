import { produce } from 'immer';
import { create } from 'zustand';

export const useCatsStore = create((set) => ({
  cats: [
    {
      id: crypto.randomUUID(),
      name: '찐빵',
      age: 2,
      gender: 'male',
    },
    {
      id: crypto.randomUUID(),
      name: '뭉치',
      age: 2,
      gender: 'male',
    },
  ],

  addCat: (catInfo) =>
    set(
      produce((state) => {
        state.cats.push({
          id: crypto.randomUUID(),
          ...catInfo,
        });
      })
    ),

  removeCat: (removeCatName) =>
    set(
      produce((state) => {
        const removeCatIndex = state.cats.findIndex(
          (cat) => cat.name === removeCatName
        );
        state.cats.splice(removeCatIndex, 1);
      })
    ),
}));
