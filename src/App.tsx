import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import ImageList from "./components/ImageList";
import ImageManager from "./components/ImageManager";

function App() {
  const images = useSelector((state: RootState) => state.images);
  const imageSelected = images.find((item) => !!item.selected);
  return (
    <Stack direction={"row"} width={"100%"} height={"100vh"} p={0} m={0}>
      <ImageList images={images} />
      <ImageManager id={imageSelected?.id} url={imageSelected?.url} />
    </Stack>
  );
}

export default App;
