import styles from "./Cart.module.css";
import productThumbnail from "../../assets/images/image-product-1-thumbnail.jpg";
import trashcanIcon from "../../assets/images/icon-delete.svg";

type Props = {
    items: Array<{
            id: number,
            name: string,
            count: number
        }>
}

const Cart = (props: Props) => {
    
    const createItems = () => {
        if(props.items.length <= 0) return (<p>Your cart is empty.</p>);

        return (
            <div className={styles.cartItem}>
                <img src={productThumbnail} alt="Product thumbnail" />
                <div className="textBox">
                    <h3>{props.items[0].name}</h3>
                    <p>$125.00 x {props.items[0].count} ${125 * props.items[0].count}</p>
                </div>
                <button className={styles.deleteItemButton} aria-label="Delete item button">
                    <img src={trashcanIcon} alt="Delete trashcan image" />
                </button>
            </div>
        );
    };

    return (
        <div className={styles.cartBox}>
        <h2>Cart</h2>
        <div className={styles.cartItemBox}>
          {createItems()}
        </div>
      </div>
    );
};

export default Cart;