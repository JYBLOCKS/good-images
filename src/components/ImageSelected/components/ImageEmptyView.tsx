import { Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import * as labels from "../labels";

export default function ImageEmptyView() {
  return (
    <Stack spacing={1}>
      <Typography variant="h6" textAlign={"center"} color={grey[800]}>
        {labels.LEGEND}
      </Typography>
      <Typography variant="h6" textAlign={"center"} color={grey[700]}>
        {labels.CHOOSE_PICTURE}
      </Typography>
    </Stack>
  );
}
