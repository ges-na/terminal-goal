import { useEffect, useContext } from 'react';
import { Context } from './Context'
import AutoWidgetButton from './AutoWidgetButton'

const AutoWidget = () => {
  const { autoWidgetCountdown, updateButtonDisplay } = useContext(Context)

  useEffect(() => {
    if (autoWidgetCountdown > 0) {
      updateButtonDisplay('autoWidgetButton', false)
    } else if (autoWidgetCountdown <= 0) {
      updateButtonDisplay('autoWidgetButton', true)
    }
  }, [autoWidgetCountdown])

  return(
    <div>
      <AutoWidgetButton />
    </div>
  )
}


export default AutoWidget;
