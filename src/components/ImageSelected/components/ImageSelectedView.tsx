import { Stack, Button, useMediaQuery } from "@mui/material";
import { red } from "@mui/material/colors";
import { clearSelectedImage } from "../../../redux/imageSlice";
import { useDispatch } from "react-redux";
import * as labels from "../labels";
import * as dataCy from "../data-cy";
import { ImageSelectedSkeleton } from "./ImageSelectedSkeleton";
import { useLoading } from "../../../hooks";

export const ImageSelectedView = ({
  url,
  id,
}: Readonly<{ url: string; id: number }>) => {
  const dispatch = useDispatch();
  const isMobile = !useMediaQuery("(min-width:600px)");
  const { loading } = useLoading(id, url);
  
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
          width: { xs: "70%", md: "40%" },
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
    <ImageSelectedSkeleton />
  );
};
