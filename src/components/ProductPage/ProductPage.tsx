import { ReactElement, useRef, useState } from 'react';
import styles from "./ProductPage.module.css";
import ImageCarousel from '../ImageCarousel/ImageCarousel';

// Images && Icons
import productImage1 from "../../assets/images/image-product-1.jpg";
import productImage2 from "../../assets/images/image-product-2.jpg";
import productImage3 from "../../assets/images/image-product-3.jpg";
import productImage4 from "../../assets/images/image-product-4.jpg";
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
  product: {
      id: number,
      name: string,
  },
  addMethod: Function,
}

const ProductPage = (props: Props) => {
  const [popupCarouselView, setPopupCarouselView] = useState<boolean>(false);
  const [qtyCount, setQtyCount] = useState<number>(0);
  // For now we will store all large images into an array to access them when we start switching them
  // based on the thumnail we select. We will use the largeImageIndex to select the correct src & alt strings.
  const [largeImageIndex, setLargeImageIndex] = useState<number>(0);
  const largeImageGallery = useRef<Array<{src: string, alt: string}>>([
    {
      src:`${productImage1}`,
      alt: "first large product image",
    },
    {
      src: `${productImage2}`,
      alt: "second large product image",
    },
    {
      src: `${productImage3}`,
      alt: "third large product image",
    },
    {
      src: `${productImage4}`,
      alt: "fourth large product image",
    },
  ]);


  const fetchData = () => {
    // Here we would use the props.id to fetch the correct data for the product the user is trying to see.
    // We don't have to do it for this challenge but I want to show that this ProductPage is resusable and scalable if need be
    // fetch(...../props.id)
  }

  const incrementCount = () => {
    setQtyCount((prev) => prev + 1);
  }

  const decrementCount = () => {
    if(qtyCount === 0) return;
    setQtyCount((prev) => prev - 1);
  }

  const incrementLargeImageIndex = () => {
    if(largeImageIndex >= largeImageGallery.current.length - 1) {
      setLargeImageIndex(0);
    } else {
      setLargeImageIndex((prev) => prev + 1);
    }
  }

  const decrementLargeImageIndex = () => {
    if(largeImageIndex <= 0) {
      setLargeImageIndex(largeImageGallery.current.length - 1);
    } else {
      setLargeImageIndex((prev) => prev - 1);
    }
  }

  const openPopupCarouselView = () => {
    setPopupCarouselView(true);
  }

  const closePopupCarouselView = () => {
    setPopupCarouselView(false);
  }

  return (
    <div id={styles.productPage}>
      <div className={styles.productImageBox}>
        <div className={styles.mobile}>
          <img src={largeImageGallery.current[largeImageIndex].src} alt={"mobile " + largeImageGallery.current[largeImageIndex].alt}/>
          <div className={styles.arrowButtonBox}>
            <button className={styles.prevButton} aria-label='previous image button' onClick={() => decrementLargeImageIndex()}>
              <img src={leftArrow} alt="A previous arrow icon" />
            </button>
            <button className={styles.nextButton} aria-label='next image button' onClick={() => incrementLargeImageIndex()}>
              <img src={rightArrow} alt="A next arrow icon" />
            </button>
          </div>
        </div>
        <div className={styles.desktop}>
          <button className={styles.popupCarouselButton} aria-label='open popup image carousel' onClick={() => openPopupCarouselView()}>
            <img src={largeImageGallery.current[largeImageIndex].src} alt={"desktop " + largeImageGallery.current[largeImageIndex].alt}/>
          </button>
          <div className={styles.thumbBox}>
            <button className={largeImageIndex === 0 ? styles.selectedThumbnail : ""} onClick={() => setLargeImageIndex(0)}>
              <img src={productThumb1} alt="select first image thubmnail"/>
            </button>
            <button className={largeImageIndex === 1 ? styles.selectedThumbnail : ""} onClick={() => setLargeImageIndex(1)}>
              <img src={productThumb2} alt="select second image thubmnail" />
            </button>
            <button className={largeImageIndex === 2 ? styles.selectedThumbnail : ""} onClick={() => setLargeImageIndex(2)}>
              <img src={productThumb3} alt="select third image thubmnail" />
            </button>
            <button className={largeImageIndex === 3 ? styles.selectedThumbnail : ""} onClick={() => setLargeImageIndex(3)}>
              <img src={productThumb4} alt="select fourth image thubmnail" />
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
          <button aria-label="Decrement count" onClick={decrementCount}>
            <img src={minusIcon} alt="A minus icon" />
          </button>
          <h3 aria-description="Prdouct quantity to add to cart">{qtyCount}</h3>
          <button aria-label="Increment count" onClick={incrementCount}>
            <img src={plusIcon} alt="A plus icon" />
          </button>
        </div>
        <button className={styles.addCartButton} onClick={() => { props.addMethod(qtyCount) }}>
          <img src={cartIcon} alt="A cart icon" />
          <h2>Add to Cart</h2>
        </button>
      </div>

      {/* Image Carousel that only shows up when the user clicks on the main product image (not the thumbnails) */}
      {popupCarouselView &&
        <ImageCarousel largeImageGallery={largeImageGallery.current} closeCarouselMethod={closePopupCarouselView}/>
      }
    </div>
  )
}

export default ProductPage;