import { Button, Skeleton, Stack, useMediaQuery } from "@mui/material";
import { useDispatch } from "react-redux";
import { selectImage } from "../../redux/imageSlice";
import { useLoading } from "../../hooks";
import "./ImageButton.css";

interface ImageButtonProps {
  id: number;
  url: string;
  clickedButton: number | null;
  disableButtons: boolean;
  handleButtonClick: Function;
}
export default function ImageButton({
  id,
  url,
  clickedButton,
  disableButtons,
  handleButtonClick,
}: Readonly<ImageButtonProps>) {
  const dispatch = useDispatch();
  const isMobile = !useMediaQuery("(min-width:600px)");
  const { loading } = useLoading(id, url);

  const onHandleSelectImage = () => {
    dispatch(selectImage({ id }));
    handleButtonClick(id);
  };

  return !loading ? (
    <Stack
      component={Button}
      onClick={onHandleSelectImage}
      disabled={disableButtons}
      sx={{
        filter:
          disableButtons && clickedButton !== id ? "grayscale(100%)" : "none",
      }}
    >
      <img
        className="imageButton"
        src={url}
        alt=""
        width={isMobile ? "70%" : 400}
        height={isMobile ? 150 : 400}
      />
    </Stack>
  ) : (
    <Stack>
      <Skeleton
        variant="rounded"
        width={isMobile ? "70%" : 400}
        height={isMobile ? 150 : 400}
        sx={{ margin: "auto" }}
      />
    </Stack>
  );
}
