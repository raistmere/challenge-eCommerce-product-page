import './App.css'
import { useEffect, useRef, useState } from 'react';
import ProductPage from "./components/ProductPage/ProductPage.tsx";
import PopupNavMenu from './components/PopupNavMenu/PopupNavMenu.tsx';
import Cart from './components/Cart/Cart.tsx';
import hamIcon from "./assets/images/icon-menu.svg";
import logoImg from "./assets/images/logo.svg";
import cartIcon from "./assets/images/icon-cart.svg";
import avatarIcon from "./assets/images/image-avatar.png";

function App() {
  const [cartView, setCartView] = useState<boolean>(false);
  const [popupNavView, setPopupNavView] = useState<boolean>(false);
  const [cartList, setCartList] = useState<Array<{ id:number, name:string, price: number, count:number }>>([]);
  const [cartCount, setCartCount] = useState<number>(0);
  const currentProduct = useRef<{ id:number, name:string, price:number }>({id:1234, name:"Fall Limited Edition Sneakers", price: 125});

  useEffect(() => {
    let count = cartList.reduce((total, item) => total + item.count, 0);
    setCartCount(count);
  }, [cartList])

  const addToCart = (qtyCount: number) => {
    const newItem = { id: currentProduct.current.id, name: currentProduct.current.name, price: currentProduct.current.price, count: qtyCount};
    let item = cartList.find((element) => element.id === newItem.id ? element : null);
    if(item?.count) {
      newItem.count += item.count;
      let newList = cartList.map((element) => element.id === newItem.id ? newItem : element);
      setCartList(newList);
    }
    else {
      setCartList((prev) => [...prev, newItem]);
    }
  }

  const closePopupNav = () => {
    setPopupNavView(false);
  }

  return (
    <div id="wrapper">
      {/* Main header that will only load once instead of having header for each page when redirecting. Will always be static at the top*/}
      <header>
        <div className="leftSide">
          <button aria-label="open popup nav menu" onClick={() => setPopupNavView(true)}>
            <img src={hamIcon} alt="A hamburger nav icon"/>
          </button>
          <img src={logoImg} alt="Company logo" />
          <nav>
            <a href="">Collections</a>
            <a href="">Men</a>
            <a href="">Women</a>
            <a href="">About</a>
            <a href="">Contact</a>
          </nav>
        </div>
        <div className="rightSide">
          <button aria-label='open cart' onClick={() => setCartView(!cartView)}>
            {/* <img src={cartIcon} alt="A cart icon" /> */}
            <svg xmlns="http://www.w3.org/2000/svg">
              <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fillRule="nonzero"/>
            </svg>
            <div className="cartCountBox">
              {cartCount !== 0 &&
                <p>
                  {cartCount}
                </p>
              }
            </div>
          </button>
          <img className='avatarIcon' src={avatarIcon} alt="An account avatar icon"/>
        </div>
      </header>

      {/* This main tag will be the main content and any routes that redirect to other parts of the web app. */}
      <main>
        {/* Possible routes: Home, Contact us, About us, etc */}
        {/* I add an assumption that the ProductPage component would be reusable therefore it requires a product id to fetch data to populate component. */}
        {/* But for the challenge, we aren't required to mimic any api calls to fetch data so for now the ID would be useless and only for demostration */}
        {/* The id would be popluated based on what product the user wants to see */}
        <ProductPage product={currentProduct.current} addMethod={addToCart}/>
      </main>

      {/* We want to only render the cart box when we have clicked on the cart button */}
      {cartView && 
        <Cart items={cartList} updateCartMethod={setCartList}/>
      }

      {/* We want to only render the popup nav menu when we have clicked on the hamburger open nav menu button*/}
      {popupNavView &&
        <PopupNavMenu closeMethod={closePopupNav}/>
      }

      {/* There isn't a footer yet but most websites would have some type of content info at the moment like: contact, about, etc 
          Currently using the footer as a space gap between main content and bottom of the page*/}
      <footer></footer>
    </div>
  )
}

export default App
