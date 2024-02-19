import './App.css'
import { useState } from 'react';
import ProductPage from "./components/ProductPage/ProductPage.tsx";
import hamIcon from "./assets/images/icon-menu.svg";
import logoImg from "./assets/images/logo.svg";
import cartIcon from "./assets/images/icon-cart.svg";
import avatarIcon from "./assets/images/image-avatar.png";

function App() {
  const [cartView, setCartView] = useState<boolean>(false);


  const addToCart = (productID: number) => {
    console.log(`Adding product ${productID} to cart.`);
  }

  return (
    <div id="wrapper">
      {/* Main header that will only load once instead of having header for each page when redirecting. Will always be static at the top*/}
      <header>
        <div className="leftSide">
          <button aria-label="open nav menu">
            <img src={hamIcon} alt="A hamburger nav icon"/>
          </button>
          <img src={logoImg} alt="Company logo" />
          <nav>
            <a href="">DESKTOP: Collections</a>
            <a href="">Men</a>
            <a href="">Women</a>
            <a href="">About</a>
            <a href="">Contact</a>
          </nav>
        </div>
        <div className="rightSide">
          <button aria-label='open cart' onClick={() => setCartView(!cartView)}>
            <img src={cartIcon} alt="A cart icon" />
          </button>
          <img src={avatarIcon} alt="An account avatar icon"/>
        </div>
      </header>

      {/* This main tag will be the main content and any routes that redirect to other parts of the web app. */}
      <main>
        {/* Possible routes: Home, Contact us, About us, etc */}
        {/* I add an assumption that the ProductPage component would be reusable therefore it requires a product id to fetch data to populate component. */}
        {/* But for the challenge, we aren't required to mimic any api calls to fetch data so for now the ID would be useless and only for demostration */}
        {/* The id would be popluated based on what product the user wants to see */}
        <ProductPage id={12345} addToCart={addToCart}/>
      </main>

      {/* We want to only render the cart box when we have clicked on the cart button */}
      {cartView && 
        <div className="cartBox">
          <h2>Cart</h2>
          <div className="cartItemBox">
            <p>Your cart is empty.</p>
          </div>
        </div>
      }
      

      {/* There isn't a footer yet but most websites would have some type of content info at the moment like: contact, about, etc 
          Currently using the footer as a space gap between main content and bottom of the page*/}
      <footer></footer>
    </div>
  )
}

export default App
