import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import * as dataCy from "./data-cy";
import * as labels from "./labels";
import SelectImage from ".";
import { RootState } from "../../redux/store";
import { selectedImage } from "../../redux/imageSlice";

vi.mock("react-redux", () => ({
  useDispatch: vi.fn(),
  useSelector: vi
    .fn()
    .mockReturnValue((state: RootState) => selectedImage(state)),
}));

vi.mock("../../hooks", () => ({
  useLoading: (_id: 0, _url: "https://picsum.photos/id/0/1000/1000") => ({
    loading: true,
  }),
}));

describe("SelectImage", () => {
  it("should display an image", () => {
    render(<SelectImage />);
    const image = screen.queryByRole("img");
    expect(image).toBeDefined();
    const clearButton = screen.queryByTestId(dataCy.CLEAR_BUTTON);
    expect(clearButton).toBeDefined();
  });
  it("should display a text", () => {
    render(<SelectImage />);
    const textNoSelectAnyImage = screen.queryAllByText(labels.LEGEND);
    expect(textNoSelectAnyImage).toBeDefined();
    const textChoosePicture = screen.queryAllByText(labels.CHOOSE_PICTURE);
    expect(textChoosePicture).toBeDefined();
  });
});
