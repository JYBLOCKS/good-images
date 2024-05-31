import { Button, Stack, useMediaQuery } from "@mui/material";
import { useDispatch } from "react-redux";
import { selectImage } from "../../redux/imageSlice";

function DisplayImage({ id, url }: { id: number; url: string }) {
  const dispatch = useDispatch();
  const isMobile = !useMediaQuery("(min-width:600px)");
  return (
    <Stack component={Button} onClick={() => dispatch(selectImage({ id }))}>
      <img
        src={url}
        alt={`image-${id}`}
        width={isMobile ? "70%" : 400}
        height={isMobile ? 150 : 400}
      />
    </Stack>
  );
}

export default DisplayImage;
