import { useContext } from 'react';
import { Context } from './Context'

const ProductButton = () => {
  const {
    counter,
    productCost,
    buttonDisplay,
    makeProduct,
  } = useContext(Context)

  return (<>
    {console.log(counter, productCost, buttonDisplay.productButton)}
    {Boolean(buttonDisplay.productButton !== null) && (
      <button
        disabled={!buttonDisplay.productButton}
        onClick={makeProduct}
      >
        Make product
      </button>
    )}
  </>)
}

export default ProductButton;
