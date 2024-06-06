import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ImageList from ".";
import { ImageState } from "../../types";

const url = (id: number) => `https://picsum.photos/id/${id}/1000/1000`;
const images: ImageState[] = [
  { id: 0, url: url(0), selected: false },
  { id: 1, url: url(1), selected: false },
  { id: 2, url: url(2), selected: false },
  { id: 3, url: url(3), selected: false },
  { id: 4, url: url(4), selected: false },
  { id: 5, url: url(5), selected: false },
  { id: 6, url: url(6), selected: false },
  { id: 7, url: url(7), selected: false },
  { id: 8, url: url(8), selected: false },
  { id: 9, url: url(9), selected: false },
  { id: 10, url: url(10), selected: false },
  { id: 11, url: url(11), selected: false },
  { id: 12, url: url(12), selected: false },
  { id: 13, url: url(13), selected: false },
  { id: 14, url: url(14), selected: false },
  { id: 15, url: url(15), selected: false },
  { id: 16, url: url(16), selected: false },
  { id: 17, url: url(17), selected: false },
  { id: 18, url: url(18), selected: false },
  { id: 19, url: url(19), selected: false },
  { id: 20, url: url(20), selected: false },
  { id: 21, url: url(21), selected: false },
  { id: 22, url: url(22), selected: false },
  { id: 23, url: url(23), selected: false },
  { id: 24, url: url(24), selected: false },
  { id: 25, url: url(25), selected: false },
  { id: 26, url: url(26), selected: false },
  { id: 27, url: url(27), selected: false },
  { id: 28, url: url(28), selected: false },
  { id: 29, url: url(29), selected: false },
];

vi.mock("../../hooks", () => ({
  useGetAllImages: () => ({ images }),
  useDisableButtons: () => ({}),
  useScrollDown: () => ({}),
}));

vi.mock("use-debounce", () => ({
  useDebouncedCallback: vi.fn(),
}));

// Mock componente ImageButton
vi.mock("../ImageButton", () => ({
  default: vi.fn(() => <div role="img" />),
}));

describe("ImageList", () => {
  it("should display 30 images", () => {
    render(<ImageList />);
    const imageButtons = screen.queryAllByRole("img");
    expect(imageButtons).toHaveLength(30);
  });
});
