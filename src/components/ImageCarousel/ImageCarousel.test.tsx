import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import ImageCarousel from "./ImageCarousel";
import userEvent from "@testing-library/user-event";

const mockLargeImageGallery: Array<{ src: string, alt: string}> = [
    {
        src: "/firstImage.jpg",
        alt: "first large image"
    },
    {
        src: "/secondImage.jpg",
        alt: "second large image"
    },
    {
        src: "/firstImage.jpg",
        alt: "first large image"
    },
]

const mockCloseCarouselMethod = () => {
    console.log("Closing image carousel");
}

describe("Image Carousel Functionality", () => {
    // Arrange
    const ren = render(<ImageCarousel largeImageGallery={mockLargeImageGallery} closeCarouselMethod={mockCloseCarouselMethod}/>);
    const user = userEvent.setup();

    test("Check if right/left arrows swap big image", async () => {
        // Act
        await user.click(ren.getByRole("button", {name:"next image arrow button"}));
        // Assert
        expect(ren.queryByAltText(mockLargeImageGallery[1].alt)).not.toBeNull();
        // Act 
        await user.click(ren.getByRole("button", {name: "previous image arrow button"}));
        // Assert
        expect(ren.queryByAltText(mockLargeImageGallery[0].alt)).not.toBeNull();
    });

    test("Check if clicking on thumbnails will swap big image", async () => {
        // Act
        await user.click(ren.getByRole("button", {name: "view second large image button"}));
        // Assert

    });
})