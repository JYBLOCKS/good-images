import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setAllImages } from "../redux/imageSlice";
import { useGetPicturesQuery } from "../api";

export function useGetAllImages() {
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
  const images = useSelector((state: RootState) => state.images) ?? [];
  return { images };
}
