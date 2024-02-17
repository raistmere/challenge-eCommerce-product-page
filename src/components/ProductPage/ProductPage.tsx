import { useState } from 'react';
import styles from "./ProductPage.module.css";
import productImage1 from "../../assets/images/image-product-1.jpg";
import productThumb1 from "../../assets/images/image-product-1-thumbnail.jpg";
import productThumb2 from "../../assets/images/image-product-2-thumbnail.jpg";
import productThumb3 from "../../assets/images/image-product-3-thumbnail.jpg";
import productThumb4 from "../../assets/images/image-product-4-thumbnail.jpg";
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
        <div className={styles.mobile}>
          <img src={productImage1} alt="A picture of the product"/>
          <div className={styles.arrowButtonBox}>
            <button className={styles.prevButton}>
              <img src={leftArrow} alt="A previous arrow icon" />
            </button>
            <button className={styles.nextButton}>
              <img src={rightArrow} alt="A next arrow icon" />
            </button>
          </div>
        </div>
        <div className={styles.desktop}>
          <img src={productImage1} alt="A picture of the product"/>
          <div className={styles.thumbBox}>
            <button>
              <img src={productThumb1} alt="A picture of the product"/>
            </button>
            <button>
              <img src={productThumb2} alt="A thumbnail of the product" />
              </button>
            <button>
              <img src={productThumb3} alt="A thumbnail of the product" />
            </button>
            <button>
              <img src={productThumb4} alt="A thumbnail of the product" />
            </button>
          </div>
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