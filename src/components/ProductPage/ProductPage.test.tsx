import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductPage from "./ProductPage";

describe("Product quantity counter functionality", () => {
    // Arrange
    const ren = render(<ProductPage />);
    const user = userEvent.setup();
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