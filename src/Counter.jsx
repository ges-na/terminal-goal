import { useContext, useEffect, useState } from 'react';
import { Context } from './Context'

const Counter = () => {
  const { counter, setCounter, autoWidgetCountdown, autoWidgetOn, setAutoWidgetOn } = useContext(Context)

  return (
    <div>
      <div>{autoWidgetOn ? "Auto-Widget on" : null}</div>
      <span>number of widgets: {counter}</span>
      <div>
        <button onClick={() => setCounter(counter + 1)}>make more widgets</button>
      </div>

    </div>
  )
}

export default Counter;
