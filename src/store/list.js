import { create } from 'zustand';

const listStore = (set) => ({
  list: [
    {
      id: crypto.randomUUID(),
      title: 'Zustand는 츄스탄트로 발음합니다.',
    },
  ],

  addItem: (newItemTitle) =>
    set((state) => ({
      list: [
        ...state.list,
        {
          id: crypto.randomUUID(),
          title: newItemTitle,
        },
      ],
    })),

  deleteItem: (deleteId) =>
    set((state) => ({
      list: state.list.filter((item) => item.id !== deleteId),
    })),
});

export const useListStore = create(listStore);
