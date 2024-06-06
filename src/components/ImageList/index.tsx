import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { Stack } from "@mui/material";
import { grey } from "@mui/material/colors";
import ImageButton from "../ImageButton";
import useGetAllImages from "../../hooks/ImageHook";

export default function ImageList() {
  const { images } = useGetAllImages();
  const [clickedButton, setClickedButton] = useState(null);
  const [disableButtons, setDisableButtons] = useState(false);

  const enableButtons = useDebouncedCallback(() => {
    setDisableButtons(false);
    setClickedButton(null);
  }, 3000);

  const handleButtonClick = useDebouncedCallback((buttonId) => {
    setDisableButtons(true);
    setClickedButton(buttonId);
    enableButtons();
  });

  return (
    <Stack
      direction={"column"}
      overflow={"auto"}
      spacing={4}
      sx={{ backgroundColor: grey[300] }}
      width={"100%"}
      height={"100%"}
    >
      {images.map((item) => (
        <ImageButton
          key={`image-${item.id}`}
          id={item.id}
          url={item.url}
          clickedButton={clickedButton}
          disableButtons={disableButtons}
          handleButtonClick={handleButtonClick}
        />
      ))}
    </Stack>
  );
}
