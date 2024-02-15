import './App.css'
import ProductPage from "./components/ProductPage/ProductPage.tsx";
import hamIcon from "./assets/images/icon-menu.svg";
import cartIcon from "./assets/images/icon-cart.svg";
import avatarIcon from "./assets/images/image-avatar.png";

function App() {

  return (
    <div id="wrapper">
      {/* Main header that will only load once instead of having header for each page when redirecting. Will always be static at the top*/}
      <header>
        <div className="leftSide">
          <button>
            <img src={hamIcon} alt="A hamburger nav icon"/>
          </button>
          <h1>sneakers</h1>
        </div>
        <div className="rightSide">
          <button>
            <img src={cartIcon} alt="A cart icon" />
          </button>
          <img src={avatarIcon} alt="An account avatar icon"/>
        </div>
      </header>

      {/* This main tag will be the main content and any routes that redirect to other parts of the web app. */}
      <main>
        {/* Possible routes: Home, Contact us, About us, etc */}
        <ProductPage productName='Sneaker'/>
      </main>

      {/* There isn't a footer yet but most websites would have some type of content info at the moment like: contact, about, etc 
          Currently using the footer as a space gap between main content and bottom of the page*/}
      <footer></footer>
    </div>
  )
}

export default App
