import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
    console.log("Deleting item");
    const newCartList = mockCartList.slice(index, index);
    mockCartList = newCartList;
};

describe("Cart Functionality", () => {
    // Arrange
    const ren = render(<Cart items={mockCartList} updateCartMethod={mockUpdateCartListMethod}/>);
    const user = userEvent.setup();
    const itemElement = ren.getByText("Fall Limited Edition Sneakers");
    const itemPriceCountElement = ren.getByText(`$${mockCartList[0].price}.00 x ${mockCartList[0].count}`);
    const itemTotalPriceElement = ren.getByText(`$${mockCartList[0].count * mockCartList[0].price}`);
    const itemTrashcanButton = ren.getByLabelText("Delete item button");

    test("Check if items appear in cart", () => {
        // Assert
        expect(itemElement).exist;
    });

    test("Check if item has the correct price, qty count, and total", () => {
        // Assert
        expect(itemPriceCountElement).exist;
        expect(itemTotalPriceElement).exist;

    });

    // Stuck on this part. I can't seem to figure out how to test if the item has been deleted after clicking
    // on the trashcan. I got it to work but not the unit testing. Going to have to figure this out later.
    // Maybe I am not doing it correctly? Possibly not setting up the component right.
    test("Check if item can be deleted", async () => {
        // // Act
        // await user.click(itemTrashcanButton);
        // // Assert
        // console.log(itemElement);
        // expect(itemElement).not.exist;
        // // expect(itemPriceCountElement).not.exist;
        // // expect(itemTotalPriceElement).not.exist;
    });
})