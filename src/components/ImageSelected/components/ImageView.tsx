import { Stack, Button, useMediaQuery } from "@mui/material";
import { red } from "@mui/material/colors";
import { clearSelectedImage } from "../../../redux/imageSlice";
import { useDispatch } from "react-redux";
import * as labels from "../labels";
import * as dataCy from "../data-cy";
import { ImageSkeleton } from "./ImageSkeleton";

export const ImageView = ({
  url,
  id,
  loading,
}: Readonly<{ url: string; id: number; loading: boolean }>) => {
  const dispatch = useDispatch();
  const isMobile = !useMediaQuery("(min-width:600px)");
  return !loading ? (
    <Stack
      spacing={2}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
    >
      <img
        className="imageSelected"
        src={url}
        alt=""
        width={isMobile ? "70%" : 400}
        height={isMobile ? 150 : 400}
      />
      <Button
        variant="contained"
        sx={{
          width: { xs: "90%", md: "40%" },
          height: 56,
          backgroundColor: red[400],
          ":hover": {
            backgroundColor: red[600],
          },
        }}
        onClick={() => dispatch(clearSelectedImage({ id }))}
        data-testid={dataCy.CLEAR_BUTTON}
      >
        {labels.CLEAR_BUTTON}
      </Button>
    </Stack>
  ) : (
    <ImageSkeleton />
  );
};
