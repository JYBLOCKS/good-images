import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ListImages from ".";

const url = "https://example.com/image.jpg";
const id = 123;

vi.mock("react-redux", () => ({
  useDispatch: vi.fn(),
  useSelector: vi.fn().mockReturnValue({ url, id }),
}));

describe("ImageList", () => {
  it("should display 30 images", () => {
    render(<ListImages />);
    const images = screen.queryAllByRole("img");
    expect(images.length).toBe(30);
  });
});
