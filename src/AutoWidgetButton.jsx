import { useContext, useEffect } from 'react';
import { Context } from './Context'

const AutoWidgetButton = () => {
  const {
    autoWidgetCountdown,
    setAutoWidgetCountdown,
    buttonDisplay,
    updateButtonDisplay,
    setAutoWidgetOn,
    setWidgetInterval,
    autoIncrement,
  } = useContext(Context)

  const onWidgetClick = () => {
    setWidgetInterval(1000);
    setAutoWidgetOn(true);
    setAutoWidgetCountdown(null);
  }

  const autoWidgetOff = () => {
    setAutoWidgetOn(false);
    setWidgetInterval(0);
    updateButtonDisplay('autoWidgetButton', true);
    setAutoWidgetCountdown(0)
  }

  return(<>
    {buttonDisplay.autoWidgetButton === true && (
      <button
        onClick={onWidgetClick}
      >
        Turn on Auto-Widget
      </button>
    )}
    {buttonDisplay.autoWidgetButton === false && (
      <button
        onClick={autoWidgetOff}
      >
        Turn off Auto-Widget
      </button>
    )}
    {buttonDisplay.autoWidgetButton === null && (
      <div>
        {autoWidgetCountdown} products until auto-widget
      </div>
    )}
  </>)
}


export default AutoWidgetButton;
