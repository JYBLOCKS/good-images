import { Button, Skeleton, Stack, useMediaQuery } from "@mui/material";
import { selectImage } from "../../redux/imageSlice";
import "./ImageButton.css";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

interface ImageButtonProps {
  id: number;
  url: string;
}
export default function ImageButton({ id, url }: Readonly<ImageButtonProps>) {
  const dispatch = useDispatch();
  const isMobile = !useMediaQuery("(min-width:600px)");

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id !== undefined && url) {
      setInterval(() => setLoading(false), 3000);
    }
    return () => {};
  }, [id, url]);

  const onHandleSelectImage = () => {
    dispatch(selectImage({ id }));
  };

  return !loading ? (
    <Stack component={Button} onClick={onHandleSelectImage}>
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
