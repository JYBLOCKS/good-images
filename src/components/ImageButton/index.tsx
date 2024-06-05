import { Button, Stack, useMediaQuery } from "@mui/material";
import { selectImage } from "../../redux/imageSlice";
import "./ImageButton.css";
import { useDispatch } from "react-redux";

export default function ImageButton({ id, url }: { id: number; url: string }) {
  const dispatch = useDispatch();
  const isMobile = !useMediaQuery("(min-width:600px)");
  return (
    <Stack component={Button} onClick={() => dispatch(selectImage({ id }))}>
      <img
        className="imageButton"
        src={url}
        alt={`image-${id}`}
        width={isMobile ? "70%" : 400}
        height={isMobile ? 150 : 400}
      />
    </Stack>
  );
}
