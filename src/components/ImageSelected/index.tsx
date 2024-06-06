import { Stack, Typography } from "@mui/material";
import { selectedImage } from "../../redux/imageSlice";
import * as labels from "./labels";
import { grey } from "@mui/material/colors";
import "./ImageSelected.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useState, useEffect } from "react";
import { ImageSelectedView } from "./components/ImageSelectedView";

export default function ImageSelected() {
  const { url, id } = useSelector((state: RootState) => selectedImage(state));

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id !== undefined && url) {
      setInterval(() => setLoading(false), 3000);
    }
    return () => {
      setLoading(true);
    };
  }, [id, url]);

  return (
    <>
      {url && id !== undefined ? (
        <ImageSelectedView url={url} id={id} loading={loading} />
      ) : (
        <Stack spacing={1}>
          <Typography variant="h6" textAlign={"center"} color={grey[800]}>
            {labels.LEGEND}
          </Typography>
          <Typography variant="h6" textAlign={"center"} color={grey[700]}>
            {labels.CHOOSE_PICTURE}
          </Typography>
        </Stack>
      )}
    </>
  );
}
