export function DateNow () {


    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
      const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ]
    


    const dateString = new Date()

    const year = dateString.getFullYear()

    const  date = dateString.getDate()

    const month = dateString.getMonth()

    const day = dateString.getDay()

    const hr = dateString.getHours()

    const min = dateString.getMinutes()

    const monthName = months[month]

    const dayName = days[day]

    return '<b>'+ dayName + '</b> ' + date + ' ' + monthName + ' ' + year + ' at ' + hr + ':'+min
    




}