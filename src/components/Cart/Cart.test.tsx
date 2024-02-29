import { describe, expect, test} from "vitest";
import { render } from "@testing-library/react";
import Cart from "./Cart.tsx";

let mockCartList: Array<{ id:number, name:string, price:number, count:number }> = [
    {
        id: 1,
        name: "Fall Limited Edition Sneakers",
        price: 125,
        count: 3
    },
];

const mockUpdateCartListMethod = (index:number) => {
    const newCartList = mockCartList.slice(index, index);
    mockCartList = newCartList;
};

describe("Cart Functionality", () => {
    // Arrange
    const ren = render(<Cart items={mockCartList} updateCartMethod={mockUpdateCartListMethod}/>);

    test("Check if items appear in cart", () => {
        // Assert
        expect(ren.getByText("Fall Limited Edition Sneakers")).exist;
    });

    test("Check if item has the correct price, qty count, and total", () => {
        // Assert
        expect(ren.getByText(`$${mockCartList[0].price}.00 x ${mockCartList[0].count}`).textContent).toBe("$125.00 x 3");
        expect(ren.getByText(`$${mockCartList[0].count * mockCartList[0].price}`).textContent).toBe("$375");
    });
})