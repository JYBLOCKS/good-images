import { Stack } from "@mui/material";
import ImageButton from "../ImageButton";
import { ImageState } from "../../redux/imageSlice";
import { grey } from "@mui/material/colors";

export default function ImageList({ images }: { images: ImageState[] }) {
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
        <ImageButton key={`image-${item.id}`} id={item.id} url={item.url} />
      ))}
    </Stack>
  );
}
