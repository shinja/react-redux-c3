const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const generatePeriodSequence = (start, end) => {
  let startMonth = start.split('-')[0]
  let startYear = parseInt(start.split('-')[1])
  let endMonth = end.split('-')[0]
  let endYear = parseInt(end.split('-')[1])

  let periods = []

  for (; startYear <= endYear; startYear++) {
    if (startYear === endYear) {
      periods.push(...months.slice(months.indexOf(startMonth), months.indexOf(endMonth) + 1)
        .map((month) => (month + '-' + startYear)))
    } else {
      periods.push(...months.slice(months.indexOf(startMonth))
        .map((month) => (month + '-' + startYear)))
    }
    startMonth = months[0]
  }

  return periods
}

const filterByPeriod = (stat, start, end) => {
  const periods = generatePeriodSequence(start, end)
  return periods.reduce((prev, period) => {
    let record = stat.find(record => record['TimePeriod'] === period)
    record && prev.push(record)
    return prev
  }, [])
}

export {
  filterByPeriod
}
