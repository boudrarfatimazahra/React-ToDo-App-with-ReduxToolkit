import { createSlice } from "@reduxjs/toolkit";

const ListTaskSlice = createSlice({
  name: "list",
  initialState: {
    list: [
      {
        id: 1,
        title: "Buy milk, eggs, bread, and fruits.",
        statut: false,
      },
      {
        id: 2,
        title: "Finish the quarterly report.",
        statut: false,
      },
      {
        id: 3,
        title: "Respond to emails from clients.",
        statut: false,
      },
      {
        id: 4,
        title: "Read at least one chapter of a book.",
        statut: false,
      },
    ],
  },
  reducers: {
    addTodo(state, action) {
      state.list = [...state.list, action.payload];
    },
    deleteTodo(state, action) {
      state.list = [
        ...state.list.filter((item) => item.title !== action.payload),
      ];
    },
    statutTodo(state, action) {
      state.list = [
        ...state.list.map((item) =>
          item.title === action.payload
            ? { ...item, statut: !item.statut }
            : item
        ),
      ];
    },
    editTodo(state, action) {
      state.list[state.list.indexOf(
        state.list.find(el =>
          el.id === action.payload.id)
      )] = action.payload

      console.log("state:", state.list);
    },
  },
});

export default ListTaskSlice.reducer;
export const { addTodo, deleteTodo, statutTodo, editTodo } =
  ListTaskSlice.actions;
