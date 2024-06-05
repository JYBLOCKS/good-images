import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { useEffect } from "react";
import { useGetPicturesQuery } from "../api";
import { setAllImages } from "../redux/imageSlice";

export default function useGetAllImages() {
  const dispatch = useDispatch();
  const { data } = useGetPicturesQuery({ limit: 30 });
  useEffect(() => {
    if (data) {
      const result =
        data.map((item) => ({
          id: Number(item.id),
          url: item.download_url,
          selected: false,
        })) ?? [];
      dispatch(setAllImages(result));
    }
    return () => {};
  }, [data]);
  const images = useSelector((state: RootState) => state.images);
  return { images };
}
