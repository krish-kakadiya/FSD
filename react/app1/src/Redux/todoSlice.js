import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    if (!response.ok) throw new Error('Network response error');
    return response.json();
  }
);
const initialState = {
    items: [],
    loading: false,
    error: null
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers:{
      
    },
    extraReducers: (builder) => {
        builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    }
})

export default todoSlice.reducer;