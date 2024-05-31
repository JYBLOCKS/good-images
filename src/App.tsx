import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import ListImages from "./components/ListImages";
import PresentAndAddImage from "./components/PresentAndAddImage";

function App() {
  const images = useSelector((state: RootState) => state.images);
  const imageSelected = images.find((item) => !!item.selected);
  return (
    <Stack direction={"row"} width={"100%"} height={"100vh"} p={0} m={0}>
      <ListImages images={images} />
      <PresentAndAddImage id={imageSelected?.id} url={imageSelected?.url} />
    </Stack>
  );
}

export default App;
