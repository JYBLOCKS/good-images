import { Stack } from "@mui/material";
import ImageButton from "../ImageButton";
import { grey } from "@mui/material/colors";
import useGetAllImages from "../../hooks/ImageHook";

export default function ImageList() {
  const {images} = useGetAllImages();
  
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
