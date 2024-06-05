import { Stack } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import AddImageForm from "../forms/AddImage";
import ImageSelected from "../ImageSelected";

export default function ImageManager() {
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
      <ImageSelected/>
      <AddImageForm />
    </Stack>
  );
}
