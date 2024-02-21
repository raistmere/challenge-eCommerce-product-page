import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Cart from "./Cart.tsx";

const mockCartList: Array<{ id:number, name:string, count:number }> = [
    {
        id: 1,
        name: "Fall Limited Edition Sneakers",
        count: 3
    },
];

describe("Cart Functionality", () => {
    // Arrange
    const ren = render(<Cart items={mockCartList} />);
    const user = userEvent.setup();
    const item = ren.getByText("Fall Limited Edition Sneakers");

    test("Check if items appear in cart", () => {
        // Assert
        expect(item).exist;
    });

    test("Check if item has the correct qty count", () => {
        
    });
})