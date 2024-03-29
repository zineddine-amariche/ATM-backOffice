import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SetModePayload = {
  mode: "dark" | "light";
};

export interface ThemeType {
  mode: "dark" | "light";
}

const initialState: ThemeType = {
  mode: "dark",
};

export const AppTheme = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<ThemeType>) => {
      state.mode = action.payload.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = AppTheme.actions;

export default AppTheme.reducer;
