
/* Function Which Will Be Called After Every 1000ms */
setInterval(setClock, 1000)
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

/* setClock Function Which Will Have Ratio and setRotation Function*/
function setClock() {
  const currentDate = new Date()
  /* Since 1 Minute = 60 Seconds */
  const secondsRatio = currentDate.getSeconds() / 60
  /* Since 1 Hour = 60 Minutes  */
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  /* In Clock We Have Total 12 Hours  */
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}
/* Function Which Will Update --rotation Variable  */
function setRotation(element, rotationRatio) {
 element.style.setProperty('--rotation', rotationRatio * 360)
}
/* Whenever We Will Refresh Page Clock Will Not Get Stuck */
setClock()