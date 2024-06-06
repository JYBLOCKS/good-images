import { useRef, useEffect, useState } from "react";
import { ImageState } from "../types";

const MAX_PRINTED_IMAGES = 30;

export function useScrollDown(images: ImageState[]) {
  const [partialImages, setPartialImages] = useState<ImageState[]>([]);
  const listEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      listEndRef.current &&
      images.length > MAX_PRINTED_IMAGES &&
      images.length !== partialImages.length
    ) {
      listEndRef.current.scrollIntoView({ behavior: "smooth" });
      setPartialImages(images);
    }
    return () => {};
  }, [images]);
  return { listEndRef };
}
