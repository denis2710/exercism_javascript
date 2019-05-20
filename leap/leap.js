const divisibleBy = number => div => number % div === 0

function Year(dateYear) {
  this.dateYear = dateYear

  this.yearDivisibleBy = divisibleBy(this.dateYear)

}

/**
* Check if parameter is a leap year or not
* @param int y
*/
export const isLeap = y => {
  let isLeap = false 
  const year = new Year(y)

  // leap year happens in each 4 years
  if ( year.yearDivisibleBy(4) ){ 
    isLeap = true
  }

  // leap year not happens at each 100 years
  if( year.yearDivisibleBy(100) ){
    isLeap = false 
  }

  // no matter what a leap year happens each 400 years
  if( year.yearDivisibleBy(400) ){ 
    isLeap = true
  }  
  
  return isLeap
}