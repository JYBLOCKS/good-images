import { Button, Typography, useMediaQuery } from "@mui/material";
import { useDispatch } from "react-redux";
import { clearSelectedImage } from "../../redux/imageSlice";
import * as labels from "./labels";
import * as dataCy from "./data-cy";
import { red } from "@mui/material/colors";

function SelectImage({ id, url }: { id: number | undefined; url?: string }) {
  const dispatch = useDispatch();
  const isMobile = !useMediaQuery("(min-width:600px)");

  return (
    <>
      {url && id !== undefined ? (
        <>
          <img
            src={url}
            alt={`image-${id}`}
            width={isMobile ? "70%" : 400}
            height={isMobile ? 150 : 400}
          />
          <Button
            variant="contained"
            sx={{
              width: 200,
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
        </>
      ) : (
        <Typography variant="h6" textAlign={"center"}>
          {labels.NO_IMAGE_SELECTED}
        </Typography>
      )}
    </>
  );
}

export default SelectImage;
