import { describe, expect, test, vi} from "vitest"
import { render } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import App from "./App";

// Arrange
const ren = render(<App />);
const user = userEvent.setup();

describe("Cart Functionality", () => {
    // Arrange
    const openCartButton = ren.getByRole("button", {name: "open cart"});

    test("Check if we can open the Cart", async () => {
        // Act
        await user.click(openCartButton);
        // Assert
        expect(ren.getByRole("heading", {name: "Cart"})).toBeTruthy;
    });

    test("Check if we can close the Cart", async () => {
        // Act
        await user.click(openCartButton);
        // Assert
        const cartBoxElement = ren.queryByRole("heading", {name: "Cart"});
        expect(cartBoxElement).toEqual(null);
    });
});

describe("Popup Nav Functionality", () => {
    test("Check if we can open the popup nav element", async () => {
        // Act
        await user.click(ren.getByRole("button", {name: "open popup nav menu"}))
        // Assert
        expect(ren.queryByRole("button", {name: "close popup nav menu"})).not.toBeNull();
    });

    test("Check if we can close the popup nav element", async () => {
        // Act
        await user.click(ren.getByRole("button", {name: "close popup nav menu"}));
        // Assert
        expect(ren.queryByRole("button", {name: "close popup nav menu"})).toBeNull();
    });
});