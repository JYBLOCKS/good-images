import { Picture } from "../types";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASEURL = "https://picsum.photos/v2/list";

const ImageApi = createApi({
  reducerPath: "imageAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: BASEURL,
  }),
  tagTypes: ["Pictures"],
  endpoints: (build) => ({
    // The query accepts a number and returns a Post
    getPictures: build.query<Picture[], { limit: number }>({
      query: ({ limit = 30 }) => ({ url: `?limit=${limit}` }),
    }),
  }),
});

export const { useGetPicturesQuery } = ImageApi;

export default ImageApi;
