import { Stack } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import AddImageForm from "../forms/AddImage";
import SelectImage from "../SelectImage";

interface PresentAndAddImageProps {
  id?: number;
  url?: string;
}

export default function PresentAndAddImage({
  id,
  url,
}: PresentAndAddImageProps) {
  return (
    <Stack
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={4}
      sx={{ backgroundColor: blueGrey[200] }}
      width={"100%"}
      height={"100%"}
    >
      <SelectImage id={id} url={url} />
      <AddImageForm />
    </Stack>
  );
}
