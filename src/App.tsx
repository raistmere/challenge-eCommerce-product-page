import './App.css'
import ProductPage from './components/ProductPage/ProductPage.tsx';

function App() {

  return (
    <div id="wrapper">
      {/* Main header that will only load once instead of having header for each page when redirecting. Will always be static at the top*/}
      <header>
        <div className="leftSide">
          <img src="" alt="" className="logo" />
          <nav></nav>
        </div>
        <div className="rightSide">
          <div className="cartBox">Cart</div>
          <div className="accountBox">Account</div>
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
