import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ListImages from ".";

vi.mock("react-redux", () => {
  return { useDispatch: vi.fn() };
});

describe("ImageList", () => {
  it("should display 30 images", () => {
    render(
      <ListImages
        images={[...Array(30)].map((_, index) => ({
          id: index,
          url: `https://picsum.photos/id/${index}/1000/1000`,
          selected: false,
        }))}
      />
    );
    const images = screen.queryAllByRole("img");
    expect(images.length).toBe(30);
  });
});
