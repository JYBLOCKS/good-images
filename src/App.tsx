import { Stack } from "@mui/material";
import ImageList from "./components/ImageList";
import ImageManager from "./components/ImageManager";

function App() {
  return (
    <Stack direction={"row"} width={"100%"} height={"100vh"} p={0} m={0}>
      <ImageList/>
      <ImageManager/>
    </Stack>
  );
}

export default App;
