import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getAllPictures } from "../api";

export interface ImageState {
  id: number;
  url: string;
  selected: boolean;
}

async function fetchImages() {
  const pictures = await getAllPictures().then((pictures) => {
    return pictures.map((item) => ({
      id: Number(item.id),
      url: item.download_url,
      selected: false,
    }));
  });
  return pictures;
}

export const imageSlice = createSlice({
  name: "images",
  initialState: await fetchImages(),
  reducers: {
    addNewImage: (state, action: PayloadAction<string>) => {
      const id = state[state.length - 1].id + 1;
      state.push({
        id,
        url: action.payload,
        selected: false,
      });
    },
    selectImage: (state, action: PayloadAction<{ id: number }>) => {
      const hasSelectedImage = state.some((item) => item.selected === true);
      if (hasSelectedImage) {
        state.forEach((_, index) => {
          state[index].selected = false;
        });
      }

      const indexSelectedImage = state.findIndex(
        (item) => item.id === action.payload.id
      );
      state[indexSelectedImage].selected = true;
    },
    clearSelectedImage: (state) => {
      state.forEach((_, index) => {
        state[index].selected = false;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewImage, selectImage, clearSelectedImage } =
  imageSlice.actions;

export default imageSlice.reducer;
