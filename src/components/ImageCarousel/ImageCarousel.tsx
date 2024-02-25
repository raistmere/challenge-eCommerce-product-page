import styles from "./ImageCarousel.module.css";

// Images && Icons
import productImage1 from "../../assets/images/image-product-1.jpg";
import productThumb1 from "../../assets/images/image-product-1-thumbnail.jpg";
import productThumb2 from "../../assets/images/image-product-2-thumbnail.jpg";
import productThumb3 from "../../assets/images/image-product-3-thumbnail.jpg";
import productThumb4 from "../../assets/images/image-product-4-thumbnail.jpg";
import leftArrow from "../../assets/images/icon-previous.svg";
import rightArrow from "../../assets/images/icon-next.svg";
import closeIcon from "../../assets/images/icon-close.svg";
import { useState } from "react";

type Props = {
    largeImageGallery: Array<{src: string, alt: string}>,
    closeCarouselMethod: () => void
}

const ImageCarousel = (props: Props) => {
    const [galleryIndex, setGalleryIndex] = useState<number>(0);

    const nextImage = () => {
        if(galleryIndex >= props.largeImageGallery.length - 1) {
            setGalleryIndex(0);
        } else {
            setGalleryIndex((prev) => prev + 1);
        }
    }

    const previousImage = () => {
        if(galleryIndex <= 0) {
            setGalleryIndex(props.largeImageGallery.length - 1);
        } else {
            setGalleryIndex((prev) => prev - 1);
        }
    }

    return (
        <div id={styles.imageCarouselWrapper}>
            <div className={styles.CarouselBox}>
                <button className={styles.closeButton} aria-label="x close button" onClick={() => props.closeCarouselMethod()}>
                    <img src={closeIcon} alt="An X icon" />
                </button>
                <div className={styles.bigImageBox}>
                    <img src={props.largeImageGallery[galleryIndex].src} alt={props.largeImageGallery[galleryIndex].alt}/>
                    <button className={styles.leftArrowButton} aria-label="previous image arrow button" onClick={() => previousImage()}>
                        <img src={leftArrow} alt="A left arrow icon" />
                    </button>
                    <button className={styles.rightArrowButton} aria-label="next image arrow button" onClick={() => nextImage()}>
                        <img src={rightArrow} alt="A right arrow icon" />
                    </button>
                </div>
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
    )
}

export default ImageCarousel;