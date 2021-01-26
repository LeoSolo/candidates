export const getConvertedTime = (ms) => {
  let days = Math.floor(ms / 86400000).toString(),
    timeLeft = ms % 86400000,
    hours = Math.floor(timeLeft / 3600000).toString()
  
  timeLeft = timeLeft % 3600000
  
  let minutes = (Math.floor(timeLeft / 60000)).toString()

  if (days.length < 2) days = '0' + days
  if (hours.length < 2) hours = '0' + hours
  if (minutes.length < 2) minutes = '0' + minutes
  
  return {
    days: days,
    hours: hours,
    minutes: minutes
  }
}