import { selectedImage } from "../../redux/imageSlice";
import "./ImageSelected.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ImageSelectedView } from "./components/ImageSelectedView";
import ImageEmptyView from "./components/ImageEmptyView";
import { useLoading } from "../../hooks";

export default function ImageSelected() {
  const { url, id } = useSelector((state: RootState) => selectedImage(state));
  const { loading } = useLoading(id, url);
  return (
    <>
      {url && id !== undefined ? (
        <ImageSelectedView url={url} id={id} loading={loading} />
      ) : (
        <ImageEmptyView />
      )}
    </>
  );
}
