import { useState } from 'react';
import Product from '../Product/Product.tsx';

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
    <div className="productPage">
      <Product productName={props.productName}/>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  )
}

export default ProductPage;