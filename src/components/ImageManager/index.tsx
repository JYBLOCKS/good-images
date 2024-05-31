import { Stack } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import AddImageForm from "../forms/AddImage";
import ImageSelected from "../ImageSelected";

interface ImageManagerProps {
  id?: number;
  url?: string;
}

export default function ImageManager({ id, url }: ImageManagerProps) {
  return (
    <Stack
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={8}
      sx={{ backgroundColor: blueGrey[200] }}
      width={"100%"}
      height={"100%"}
    >
      <ImageSelected id={id} url={url} />
      <AddImageForm />
    </Stack>
  );
}
