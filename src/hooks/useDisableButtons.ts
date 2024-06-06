import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export function useDisableButtons() {
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
  return { clickedButton, disableButtons, handleButtonClick };
}
