import { describe, expect, test} from "vitest"
import { render } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import App from "./App";

// describe("Mobile Features", () => {
//     window.innerWidth = 300;
//     window.innerHeight = 900;
//     window.dispatchEvent(new Event('resize'));


//     test("Check if hamburger will open nav menu", () => {
//         const ren = render(<App />);
//         const user = userEvent.setup();
//         const navMenuElement = ren.getByLabelText("mobileNavMenu");
//         console.log(navMenuElement.textContent);
//     })
// })

describe("Cart Functionality", () => {
    // Arrange
    const ren = render(<App />);
    const user = userEvent.setup();
    const openCartButton = ren.getByRole("button", {name: "open cart"});

    test(("Check if we can open the Cart"), async () => {
        // Act
        await user.click(openCartButton);
        // Assert
        expect(ren.getByRole("heading", {name: "Cart"})).toBeTruthy;
    });

    test(("Check if we can close the Cart"), async () => {
        // Act
        await user.click(openCartButton);
        // Assert
        const cartBoxElement = ren.queryByRole("heading", {name: "Cart"});
        expect(cartBoxElement).toEqual(null);
    });
})