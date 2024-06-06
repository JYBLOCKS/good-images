import { Skeleton, Stack, useMediaQuery } from "@mui/material";

export const ImageSkeleton = () => {
  const isMobile = !useMediaQuery("(min-width:600px)");
  return (
    <Stack
      spacing={2}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
    >
      <Skeleton
        variant="rounded"
        width={isMobile ? "70%" : 400}
        height={isMobile ? 150 : 400}
        sx={{ margin: "auto" }}
      />
    </Stack>
  );
};
