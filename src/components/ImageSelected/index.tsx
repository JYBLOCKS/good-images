import { Button, Stack, Typography, useMediaQuery } from "@mui/material";
import { useDispatch } from "react-redux";
import { clearSelectedImage } from "../../redux/imageSlice";
import * as labels from "./labels";
import * as dataCy from "./data-cy";
import { grey, red } from "@mui/material/colors";
import "./ImageSelected.css";

export default function ImageSelected({
  id,
  url,
}: {
  id: number | undefined;
  url?: string;
}) {
  const dispatch = useDispatch();
  const isMobile = !useMediaQuery("(min-width:600px)");

  return (
    <>
      {url && id !== undefined ? (
        <Stack
          spacing={2}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
        >
          <img
            className="imageSelected"
            src={url}
            alt={`image-${id}`}
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
            onClick={() => dispatch(clearSelectedImage())}
            data-testid={dataCy.CLEAR_BUTTON}
          >
            {labels.CLEAR_BUTTON}
          </Button>
        </Stack>
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
