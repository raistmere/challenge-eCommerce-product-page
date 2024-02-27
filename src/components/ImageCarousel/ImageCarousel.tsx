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

    const viewImage = (index: number) => {
        setGalleryIndex(index);
    }

    return (
        <div id={styles.imageCarouselWrapper}>
            <div className={styles.CarouselBox}>
                <button className={styles.closeButton} aria-label="x close button" onClick={() => props.closeCarouselMethod()}>
                    {/* <img src={closeIcon} alt="An X icon" /> */}
                    <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                        <path className={styles.pathCloseIcon} d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/>
                    </svg>
                </button>
                <div className={styles.bigImageBox}>
                    <img src={props.largeImageGallery[galleryIndex].src} alt={props.largeImageGallery[galleryIndex].alt}/>
                    <button className={styles.leftArrowButton} aria-label="previous image arrow button" onClick={() => previousImage()}>
                        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                            <path className={styles.pathLeftArrow} d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/>
                        </svg>
                    </button>
                    <button className={styles.rightArrowButton} aria-label="next image arrow button" onClick={() => nextImage()}>
                        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                            <path className={styles.pathRightArrow} d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/>
                        </svg>
                    </button>
                </div>
                <div className={styles.thumbBox}>
                    <button className={galleryIndex === 0 ? styles.selectedThumbnail : ""} aria-label="view first large image button" onClick={() => viewImage(0)}>
                        <img src={productThumb1} alt="A picture of the product"/>
                    </button>
                    <button className={galleryIndex === 1 ? styles.selectedThumbnail : ""} aria-label="view second large image button" onClick={() => viewImage(1)}>
                        <img src={productThumb2} alt="A thumbnail of the product" />
                    </button>
                    <button className={galleryIndex === 2 ? styles.selectedThumbnail : ""} aria-label="view third large image button" onClick={() => viewImage(2)}>
                        <img src={productThumb3} alt="A thumbnail of the product" />
                    </button>
                    <button className={galleryIndex === 3 ? styles.selectedThumbnail : ""} aria-label="view fourth large image button" onClick={() => viewImage(3)}>
                        <img src={productThumb4} alt="A thumbnail of the product" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ImageCarousel;