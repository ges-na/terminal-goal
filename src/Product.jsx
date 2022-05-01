import { useContext, useEffect } from 'react';
import { Context } from './Context'
import ProductButton from './ProductButton.jsx'


const Product = () => {
  const { counter, productCost, productCount, updateButtonDisplay } = useContext(Context)

  // useEffect(() => {
  // TODO: use this to monitor whether a change needs to be made to buttonDisplay (be conservative, exit as early as possible!!); if a change needs to be made, call updateButtonDisplay (don't pass anything) to update all buttonDisplay state variables; do the same in AutoWidget
    // if (counter >= productCost) {
    //   updateButtonDisplay('productButton', true)
    // } else if (counter < productCost) {
    //   updateButtonDisplay('productButton', false)
    // }
  // }, [counter, productCost])

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
