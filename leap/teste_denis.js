const divisibleBy = number => div => number % div === 0

const yearDivisibleBy = divisibleBy(2000)

yearDivisibleBy(4)
