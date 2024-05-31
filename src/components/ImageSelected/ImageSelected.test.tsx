import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import * as dataCy from "./data-cy";
import * as labels from "./labels";
import SelectImage from ".";

vi.mock("react-redux", () => {
  return { useDispatch: vi.fn() };
});

describe("SelectImage", () => {
  it("should display an image", () => {
    render(<SelectImage id={0} url="https://picsum.photos/id/0/1000/1000" />);
    const image = screen.getByRole("img");
    expect(image).toBeDefined();
    const clearButton = screen.getByTestId(dataCy.CLEAR_BUTTON);
    expect(clearButton).toBeDefined();
  });
  it("should display a text", () => {
    render(<SelectImage id={undefined} />);
    const textNoSelectAnyImage = screen.getByText(labels.LEGEND);
    expect(textNoSelectAnyImage).toBeDefined();
    const textChoosePicture = screen.getByText(labels.CHOOSE_PICTURE);
    expect(textChoosePicture).toBeDefined();
  });
});
