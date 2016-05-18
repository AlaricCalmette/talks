var interpreter = require('./generated')

var match = interpreter({
  city: {
    $eq: 'berlin'
  },
  population: {
    $lt: 10
  },
  awesome: {
    $eq: true
  },
  stuff: {
    $not: {
      $eq: 'data'
    }
  }
})

console.log(match.toString())
