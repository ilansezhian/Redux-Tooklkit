import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasksList: [],
  selectedTask: {},
};

const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    //Action Creators
    addTaskToList: (state, action) => {
      const id = Math.random() * 100;
      const task = { ...action.payload, id };
      state.tasksList.push(task);
    },
    removeFromList: (state, action) => {
      state.tasksList = state.tasksList.filter(
        (task) => task.id !== action.payload.id
      );
    },
    updateTaskInList: (state, action) => {
      state.tasksList = state.tasksList.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    },
    setSelectedTask: (state, action) => {
      state.selectedTask = action.payload;
    },
  },
});

export const {
  addTaskToList,
  removeFromList,
  updateTaskInList,
  setSelectedTask,
} = tasksSlice.actions;

export default tasksSlice.reducer;
