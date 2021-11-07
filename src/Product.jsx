import { useContext, useEffect } from 'react';
import { Context } from './Context'
import ProductButton from './ProductButton.jsx'


const Product = () => {
  const { counter, productCost, productCount, updateButtonDisplay } = useContext(Context)

  useEffect(() => {
    if (counter >= productCost) {
      updateButtonDisplay('productButton', true)
    }
    if (counter < productCost) {
      updateButtonDisplay('productButton', false)
    }
  }, [counter, productCost])

  return (
    <div>
      <span>there are {productCost} widgets to a product</span>
      <div>
        <span>Products: {productCount}</span>
      </div>
      <div>
        <ProductButton />
      </div>
    </div>
  )
}

export default Product;
