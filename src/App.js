import { useEffect, useState } from 'react';
import './App.css';
import { Context } from './Context'
import Counter from './Counter'
import Product from './Product'
 import AutoWidget from './AutoWidget'


function App() {
  const productCost = 1
  let [counter, setCounter] = useState(0);
  let [productCount, setProductCount] = useState(0);
  let [autoWidgetCountdown, setAutoWidgetCountdown] = useState(productCost)
  let [buttonDisplay, setButtonDisplay] = useState({autoWidgetButton: null, productButton: null})
  let [autoWidgetOn, setAutoWidgetOn] = useState(false)
  let [widgetInterval, setWidgetInterval] = useState(0)

  useEffect(() => {
    let widgetTimer
    if (!widgetInterval) {
      clearInterval(widgetTimer);
      return;
    }
    widgetTimer = setInterval(() => {
      setCounter(counter => counter + 1);
    }, widgetInterval)
    return () => clearInterval(widgetTimer);
  }, [widgetInterval]);

  const updateButtonDisplay = (buttonName, value) => {
    setButtonDisplay({
      ...buttonDisplay,
      [buttonName]: value,
    })
  }

  function makeProduct() {
    setCounter(counter - productCost);
    setProductCount(productCount + 1);
    setAutoWidgetCountdown(autoWidgetCountdown - 1);
  }

  return (
    <div className="App">
      <Context.Provider value={{
        counter,
        setCounter,
        productCost,
        productCount,
        setProductCount,
        autoWidgetCountdown,
        setAutoWidgetCountdown,
        buttonDisplay,
        updateButtonDisplay,
        autoWidgetOn,
        setAutoWidgetOn,
        setWidgetInterval,
        makeProduct,
      }}>
      <header className="App-header">
        <div className="counter-box">
          <Counter />
        </div>
        <div className="counter-box">
          <Product />
        </div>
        <div className="counter-box">
          <AutoWidget />
        </div>
      </header>
      </Context.Provider>
    </div>
  );
}

export default App;
