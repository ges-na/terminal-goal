import { useContext } from 'react';
import { Context } from './Context'

const ProductButton = () => {
  const {
    buttonDisplay,
    makeProduct,
  } = useContext(Context)

  return (<>
    {buttonDisplay.productButton && (
      <button onClick={makeProduct}>Make product</button>
    )}
  </>)
}

export default ProductButton;
