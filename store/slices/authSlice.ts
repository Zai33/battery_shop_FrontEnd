import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const checkAuth = createAsyncThunk("auth/checkAuth", async () => {
  const res = await fetch("http://localhost:5000/api/v1/auth/check", {
    method: "GET",
    credentials: "include",
  });
  const data = await res.json();
  return data.loggedIn;
});

interface AuthState {
  loggedIn: boolean;
  loading: boolean;
}

const initialState: AuthState = {
  loggedIn: false,
  loading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.loggedIn = false;
    },
    login: (state) => {
      state.loggedIn = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(checkAuth.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(checkAuth.fulfilled, (state, action) => {
      state.loggedIn = action.payload;
      state.loading = false;
    });
    builder.addCase(checkAuth.rejected, (state) => {
      state.loggedIn = false;
      state.loading = false;
    });
  },
});

export const { logout, login } = authSlice.actions;
export default authSlice.reducer;
