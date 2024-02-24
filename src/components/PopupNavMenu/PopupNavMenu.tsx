import styles from "./PopupNavMenu.module.css";
import closeButton from "../../assets/images/icon-close.svg";

type Props = {
    closeMethod: Function
}

const PopupNavMenu = (props: Props) => {
    return (
        <div id={styles.popupNavMenu}>
            <div className={styles.content}>
                <button aria-label="close popup nav menu" onClick={() => props.closeMethod()}>
                    <img src={closeButton} alt="an x icon" />
                </button>
                <nav>
                    <a href="">Collections</a>
                    <a href="">Men</a>
                    <a href="">Women</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                </nav>
            </div>
        </div>
    );
};

export default PopupNavMenu;