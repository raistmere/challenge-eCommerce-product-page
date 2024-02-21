import { describe, expect, test} from "vitest"
import { render } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import App from "./App";

describe("Cart Functionality", () => {
    // Arrange
    const ren = render(<App />);
    const user = userEvent.setup();
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
})