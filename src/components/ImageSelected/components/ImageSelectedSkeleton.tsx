import { Skeleton, Stack, useMediaQuery } from "@mui/material";

export const ImageSelectedSkeleton = () => {
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
      />
      <Skeleton
        variant="rounded"
        width={isMobile ? "70%" : "40%"}
        height={56}
      />
    </Stack>
  );
};
