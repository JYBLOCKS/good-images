import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ImageList from ".";
import ImageButton from "../ImageButton";
import { RootState } from "../../redux/store";

const url = (id: number) => `https://picsum.photos/id/${id}/1000/1000`;

vi.mock("react-redux", () => ({
  useDispatch: vi.fn(),
  useSelector: vi.fn().mockReturnValue((state: RootState) => state.images),
}));

vi.mock("../../api", () => ({
  useGetPicturesQuery: vi.fn().mockReturnValue({
    data: new Array(30).map((_, index) => ({
      id: index.toString(),
      author: "name",
      width: 1000,
      height: 1000,
      url: url(index),
      download_url: url(index),
    })),
  }),
}));

vi.mock("../hooks/useGetAllImages", () => ({
  useGetAllImages: vi.fn().mockReturnValue({
    images: new Array(30).map((_, index) => ({
      id: index,
      url: url(index),
      selected: false,
    })),
  }),
}));

// Mock componente ImageButton
vi.mock("../ImageButton", () => ({
  default: vi.fn((id, url) => <ImageButton id={id} url={url} />),
}));

describe("ImageList", () => {
  it("should display 30 images", () => {
    render(<ImageList />);
    const imageButtons = screen.queryAllByRole("img");
    expect(imageButtons).toHaveLength(30);
  });
});
