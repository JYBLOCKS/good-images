import { Stack } from "@mui/material";
import DisplayImage from "../DisplayImage";
import { ImageState } from "../../redux/imageSlice";
import { grey } from "@mui/material/colors";

function ListImages({ images }: { images: ImageState[] }) {
  return (
    <Stack
      direction={"column"}
      overflow={"auto"}
      spacing={4}
      sx={{ backgroundColor: grey[300] }}
      width={"100%"}
      height={"100%"}
    >
      {images.map((item) => (
        <DisplayImage key={`image-${item.id}`} id={item.id} url={item.url} />
      ))}
    </Stack>
  );
}

export default ListImages;
