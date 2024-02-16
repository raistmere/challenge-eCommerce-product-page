import { useState } from 'react';
import styles from "./ProductPage.module.css";
import productImage1 from "../../assets/images/image-product-1.jpg";
import leftArrow from "../../assets/images/icon-previous.svg";
import rightArrow from "../../assets/images/icon-next.svg";
import minusIcon from "../../assets/images/icon-minus.svg";
import plusIcon from "../../assets/images/icon-plus.svg";
import cartIcon from "../../assets/images/icon-cart.svg";

type Props = {
  productName: string,
}

const ProductPage = (props: Props) => {
  const [product, setProduct] = useState();
  const [count, setCount] = useState(0);

  const fetchProductInfo = () => {
    // Fetch product from database using fetch() api
  }

  const addToCart = () => {
    // Add current product to the cart based on count
  }

  return (
    <div id={styles.productPage}>
      <div className={styles.productImageBox}>
        <img src={productImage1} alt="A picture of the product" className='productImage'/>
        <div className={styles.arrowButtonBox}>
          <button className={styles.prevButton}>
            <img src={leftArrow} alt="A previous arrow icon" />
          </button>
          <button className={styles.nextButton}>
            <img src={rightArrow} alt="A next arrow icon" />
          </button>
        </div>
      </div>
      <div className={styles.productContentBox}>
        <div className={styles.productInfoBox}>
          <button>SNEAKER COMPANY</button>
          <h2>Fall Limited Edition Sneakers</h2>
          <p>
            These low-profile sneakers are your perfect casual wear companion. Featuring a durable
            rubber outer sole,they'll withstand everything the weather can offer.
          </p>
          <div className={styles.productPriceBox}>
            <h2>$125.00</h2>
            <p className={styles.productDiscount}>50%</p>
            <p className={styles.productOriginalPrice}>$250.00</p>
          </div>
        </div>
        <div className={styles.productQtyBox}>
          <button>
            <img src={minusIcon} alt="A minus icon" />
          </button>
          <p>0</p>
          <button>
            <img src={plusIcon} alt="A plus icon" />
          </button>
        </div>
        <button onClick={addToCart} className={styles.addCartButton}>
          <img src={cartIcon} alt="A cart icon" />
          <h2>Add to Cart</h2>
          </button>
      </div>
    </div>
  )
}

export default ProductPage;