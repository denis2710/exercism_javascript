class GigaSecond { 
  gigasecond (date) {
    let gs = new Date(null).setSeconds(Math.pow(10, 9))
    console.log({gs})
    // return date.setSeconds(date.getTime() + gs.getTime() )
 
  }
}

const gs = new GigaSecond()
const dt = gs.gigasecond(new Date(Date.UTC(2015, 8, 14)));
const expect = new Date(Date.UTC(2047, 4, 23, 1, 46, 40))



console.log(dt)
console.log(expect)





