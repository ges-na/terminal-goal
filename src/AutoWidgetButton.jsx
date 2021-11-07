import { useContext } from 'react';
import { Context } from './Context'

const AutoWidgetButton = () => {
  const {
    autoWidgetCountdown,
    setAutoWidgetCountdown,
    buttonDisplay,
    setAutoWidgetOn,
    setWidgetInterval,
    autoIncrement,
  } = useContext(Context)

  const onWidgetClick = () => {
    setWidgetInterval(1000);
    setAutoWidgetOn(true);
    setAutoWidgetCountdown(null);
  }

  if (buttonDisplay.autoWidgetButton === true) {
    return (
      <button onClick={onWidgetClick}>Turn on Auto-Widget</button>
    )
  }
  if (buttonDisplay.autoWidgetButton === false) {
    return (
      <div>
        {autoWidgetCountdown} products until auto-widget
      </div>
    )
  }
  return <></>
}

export default AutoWidgetButton;
