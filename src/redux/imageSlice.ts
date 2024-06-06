import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { ImageState } from "../types";

const initialState: ImageState[] = [];

export const imageSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    setAllImages: (state, action: PayloadAction<ImageState[]>) =>
      (state = action.payload),
    addNewImage: (state, action: PayloadAction<string>) => {
      let id = 0;
      if (state) {
        id = state[state.length - 1]?.id + 1;
      }

      state.push({
        id,
        url: action.payload,
        selected: false,
      });
    },
    selectImage: (state, action: PayloadAction<{ id: number }>) => {
      const indexBeforeImage = state.findIndex((item) => item.selected);
      if (indexBeforeImage !== -1) {
        state[indexBeforeImage].selected = false;
      }
      const indexSelectedImage = state.findIndex(
        (item) => item.id === action.payload.id
      );
      state[indexSelectedImage].selected = true;
    },
    clearSelectedImage: (state, action: PayloadAction<{ id: number }>) => {
      const indexSelectedImage = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (indexSelectedImage > -1) {
        state[indexSelectedImage].selected = false;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewImage, selectImage, clearSelectedImage, setAllImages } =
  imageSlice.actions;

export const selectedImage = createSelector(
  (state: RootState) => state.images,
  (images) =>
    images[images.findIndex((item) => item.selected)] ?? {
      id: undefined,
      url: undefined,
      selected: false,
    }
);

export default imageSlice.reducer;
