import { useEffect, useContext } from 'react';
import { Context } from './Context'
import AutoWidgetButton from './AutoWidgetButton'

const AutoWidget = () => {
  const { counter, autoWidgetCountdown, buttonDisplay, updateButtonDisplay } = useContext(Context)

  // useEffect(() => {
  // TODO: use this to monitor whether a change needs to be made to buttonDisplay (be conservative, exit as early as possible!!); if a change needs to be made, call updateButtonDisplay (don't pass anything) to update all buttonDisplay state variables; do the same in Product
    // if (autoWidgetCountdown > 0) {
    //   updateButtonDisplay('autoWidgetButton', null)
    // } else if (autoWidgetCountdown === 0) {
    //   updateButtonDisplay('autoWidgetButton', true)
    // } else if (autoWidgetCountdown === null) {
    //   updateButtonDisplay('autoWidgetButton', false)
    // }
  // }, [autoWidgetCountdown])

  return(
    <div>
      <AutoWidgetButton />
    </div>
  )
}


export default AutoWidget;
