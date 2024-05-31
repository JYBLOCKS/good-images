import { TextField, Button } from "@mui/material";
import { addNewImage } from "../../../redux/imageSlice";
import { useState } from "react";
import * as labels from "./labels";
import * as dataCy from "./data-cy";
import { useDispatch } from "react-redux";

export default function AddImageForm() {
  const dispatch = useDispatch();
  const [newImage, setNewImage] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
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
  return (
    <>
      <TextField
        type="file"
        label="Select Image"
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        onChange={handleFileChange}
      />
      {newImage.length > 0 && (
        <Button
          variant="contained"
          sx={{ width: 200, height: 56 }}
          data-cy={dataCy.ADD_BUTTON}
          onClick={() => dispatch(addNewImage(newImage))}
        >
          {labels.ADD_BUTTON}
        </Button>
      )}
    </>
  );
}
