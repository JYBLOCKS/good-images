import { TextField, Button, Typography, Stack } from "@mui/material";
import { addNewImage } from "../../../redux/imageSlice";
import { useState } from "react";
import * as labels from "./labels";
import * as dataCy from "./data-cy";
import { grey } from "@mui/material/colors";
import { useDispatch } from "react-redux";

export default function AddImageForm() {
  const dispatch = useDispatch();
  const [newImage, setNewImage] = useState<string>("");
  const [file, setFile] = useState<string>("");

  const reset = () => {
    setFile("");
    setNewImage("");
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    setFile(event.target.value as string);
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (typeof event?.target?.result === "string") {
          const base64Image = event.target.result as string;
          setNewImage(base64Image);
        }
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const onClick = () => {
    dispatch(addNewImage(newImage));
    reset();
  };

  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      spacing={2}
    >
      <Typography variant="h6" textAlign={"center"} color={grey[800]}>
        {labels.ADD_TITLE}
      </Typography>
      <TextField
        type="file"
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        value={file}
        sx={{ width: { xs: "90%", md: "70%" } }}
        onChange={onChange}
      />
      {newImage.length > 0 && (
        <Button
          variant="contained"
          sx={{ width: { xs: "90%", md: "40%" }, height: 56 }}
          data-cy={dataCy.ADD_BUTTON}
          onClick={onClick}
        >
          {labels.ADD_BUTTON}
        </Button>
      )}
    </Stack>
  );
}
