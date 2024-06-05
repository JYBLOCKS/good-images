import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import * as dataCy from "./data-cy";
import * as labels from "./labels";
import SelectImage from ".";

const url = "https://example.com/image.jpg";
const id = 123;

vi.mock("react-redux", () => ({
  useDispatch: vi.fn(),
  useSelector: vi.fn().mockReturnValue({ url, id }),
}));

describe("SelectImage", () => {
  it("should display an image", () => {
    render(<SelectImage />);
    const image = screen.getByRole("img");
    expect(image).toBeDefined();
    const clearButton = screen.getByTestId(dataCy.CLEAR_BUTTON);
    expect(clearButton).toBeDefined();
  });
  it("should display a text", () => {
    render(<SelectImage />);
    const textNoSelectAnyImage = screen.getByText(labels.LEGEND);
    expect(textNoSelectAnyImage).toBeDefined();
    const textChoosePicture = screen.getByText(labels.CHOOSE_PICTURE);
    expect(textChoosePicture).toBeDefined();
  });
});
