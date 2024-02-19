import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductPage from "./ProductPage";

// Default product id that will be used for mocking purposes
const MOCK_PRODUCT_ID: number = 12345;
// We want to create a mock addToCart callback function that will confirm that clicking on the
// add to cart button will call the callback. We verify this using the mockAddResult. 
let mockAddResult: string = "";
const mockAddToCart = (productID: number) => {
    mockAddResult = `Adding product ${MOCK_PRODUCT_ID} to cart.`;
}

// Arrange
const ren = render(<ProductPage id={MOCK_PRODUCT_ID} addToCart={mockAddToCart}/>);
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

describe("Add to Cart button functionality", () => {
    // Arrange
    const addButton = ren.getByRole("button", {name: /Add to Cart/i});

    test("Check if add to cart button works", async () => {
        // Act
        await user.click(addButton);
        // Assert
        expect(mockAddResult).toBe(`Adding product ${MOCK_PRODUCT_ID} to cart.`);
    });
})