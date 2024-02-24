import { describe, expect, test } from "vitest";
import { act, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductPage from "./ProductPage";

// Default product id that will be used for mocking purposes
const mockProductItem: { id:number, name:string, count:number } = {
        id: 1,
        name: "Fall Limited Edition Sneakers",
        count: 3
};
// We want to create a mock addToCart callback function that will confirm that clicking on the
// add to cart button will call the callback. We verify this using the mockAddResult. 
let mockAddResult: string = "";
const mockAddToCart = () => {
    mockAddResult = `Adding product ${mockProductItem.id} to cart.`;
}

// Arrange
const ren = render(<ProductPage product={mockProductItem} addMethod={mockAddToCart}/>);
const user = userEvent.setup();

describe("Product quantity counter functionality", () => {
    // Arrange
    const counter = ren.getByRole("heading", {name: "0"});
    const plusButton = ren.getByRole("button", {name: "Increment count"});
    const minusButton = ren.getByRole("button", {name: "Decrement count"});

    test("Increment qty counter", async () => {
        // Act
        await user.click(plusButton);
        // Assert
        expect(counter.textContent).toBe("1");
    });

    test("Decrement qty counter", async () => {
        // Act
        await user.click(minusButton);
        // Assert
        expect(counter.textContent).toBe("0");
    })

    test("Counter can't go below 0", async () => {
        // Act
        await user.click(minusButton);
        // assert
        expect(counter.textContent).toBe("0");
    })
});

describe("Cart Button Functionality", () => {
    // Arrange
    const addButton = ren.getByRole("button", {name: /Add to Cart/i});

    test("Check if add to cart button works", async () => {
        // Act
        await user.click(addButton);
        // Assert
        expect(mockAddResult).toBe(`Adding product ${mockProductItem.id} to cart.`);
    });
})

describe("Image Carousel Functioanility", async () => {

    // This works on live but for some reason I still can't test responsive design with unit tests.
    // I been manipulating window. or globalThis. but never resized the window. No solution as of now.
    // test("Check right then left arrows on mobile image carousel", () => {
    //     // Act
    //     user.click(ren.getByRole("button", {name: "next image button"}));
    //     // Assert
    //     expect(ren.queryByAltText("mobile second large product image")).not.toBeNull();
    //     // Act
    //     user.click(ren.getByRole("button", {name: "previous image button"}));
    //     // Assert
    //     expect(ren.queryByAltText("mobile first large product image")).not.toBeNull();
    // });

    test("Check if pressing desktop thumnail image will switch large product image", async () => {
        // Act
        await user.click(ren.getByRole("button", {name: "select second image thubmnail"}));
        // Assert
        expect(ren.queryByAltText("desktop second large product image")).not.toBeNull();
    });

    test("Check if we can open popup image carousel", async () => {
        // Act
        await user.click(ren.getByRole("button", {name: "open popup image carousel"}));
        // Assert
        expect(ren.queryByRole("button", {name: "x close button"})).not.toBeNull();
    });

    test("Check if we can close popup image carousel", async () => {
        // Act
        await user.click(ren.getByRole("button", {name: "x close button"}));
        // Assert
        expect(ren.queryByRole("button", {name: "x close button"})).toBeNull();
    });
});