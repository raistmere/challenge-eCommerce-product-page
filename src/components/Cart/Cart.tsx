import styles from "./Cart.module.css";
import productThumbnail from "../../assets/images/image-product-1-thumbnail.jpg";
import trashcanIcon from "../../assets/images/icon-delete.svg";

type Props = {
    items: Array<{
            id: number,
            name: string,
            price: number,
            count: number
        }>,
    updateCartMethod: Function
}

const Cart = (props: Props) => {
    
    // We loop through the items and create new elements to appear in the cart box.
    // Right now there is no loop but just a single item to test out the functionality. We are assuming
    // that there is only one item to add (which is true based off the challenge) but it will still function given
    // a array list of items.
    const createItems = () => {
        if(props.items.length <= 0) return (
            <div className={styles.emptyCartBox}>
                <p>Your cart is empty.</p>
            </div>
        );

        return (
            <div className={styles.cartItem}>
                <img src={productThumbnail} alt="prodcut image thumbnail" />
                <div className={styles.textBox}>
                    <h3>{props.items[0].name}</h3>
                    <div className={styles.priceBox}>
                        <p>$125.00 x {props.items[0].count}</p>
                        <p className={styles.totalPrice}>${props.items[0].price * props.items[0].count}</p>
                    </div>
                </div>
                {/* On click we want to go ahead and delete the item from the item list in our props */}
                <button className={styles.deleteItemButton} aria-label="delete item button" onClick={() => { deleteCartItem(0)}}>
                    <img src={trashcanIcon} alt="Delete trashcan image" />
                </button>
            </div>
        );
    };

    const deleteCartItem = (index:number) => {
        const newCartList = props.items.slice(index, index);
        props.updateCartMethod(newCartList);
    }

    return (
        <div className={styles.cartBox}>
            <h2>Cart</h2>
            <div className={styles.cartItemBox}>
                {createItems()}
            </div>
            {props.items.length > 0 &&
                <div className={styles.checkoutBox}>
                    <button className={styles.checkoutButton}>
                        Checkout
                    </button>
                </div>
            }
      </div>
    );
};

export default Cart;