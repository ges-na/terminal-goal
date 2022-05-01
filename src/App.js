import { useEffect, useState } from 'react';
import * as d3 from 'd3';
import './App.css';
import { Context } from './Context'
import Counter from './Counter'
import Product from './Product'
import AutoWidget from './AutoWidget'
import PieChart from './PieChart'


const data = [
  {'label': 'apples', 'value': 10},
  {'label': 'bananas', 'value': 20},
  {'label': 'cherries', 'value': 5},
  {'label': 'oranges', 'value': 30},
]

function App() {
  const productCost = 2
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

  const updateButtonDisplay = () => {
    setButtonDisplay({
      productButton: getProductStatus(),
      autoWidgetButton: getAutoWidgetStatus(),
    })
  }

  const getProductStatus = () => {
    // TODO: this is where the magic happens
  }

  const getAutoWidgetStatus = () => {
    // TODO: this is where the magic happens
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
        <div>
          <PieChart data={data} innerRadius={0} outerRadius={100} />
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
