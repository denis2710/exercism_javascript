'use strict'

module.exports = { 
  gigasecond: (birthday) => { 
    const seconds = birthday.getSeconds() + 1000000000
    birthday.setSeconds(seconds)
    return birthday
  }
}