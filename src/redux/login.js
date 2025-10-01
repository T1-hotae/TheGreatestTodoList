import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../lib/SupabaseClient";

//세션 불러오기
export const loadSession = createAsyncThunk("login/loadSession", async () => {
  const { data } = await client.auth.getSession();
  return data.session;
});

// 로그인
export const signInWithGithub = createAsyncThunk("login/signIn", async () => {
  const { data, error } = await client.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: "http://localhost:5173/",
    },
  });
  if (error) throw error;
  return data;
});

// 로그아웃
export const signOut = createAsyncThunk("login/signOut", async () => {
  await client.auth.signOut();
  return null;
});

const authSlice = createSlice({
  name: "login",
  initialState: {
    session: null,
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      //loadSeesion
      .addCase(loadSession.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loadSession.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.session = action.payload;
      })
      .addCase(loadSession.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      //signIn
      .addCase(signInWithGithub.fulfilled, (state, action) => {
        state.session = action.payload?.session ?? null;
      })

      //signOut
      .addCase(signOut.fulfilled, (state) => {
        state.session = null;
      });
  },
});

export default authSlice.reducer;
