export function solve(x, y) { 
  try{ 
    const pointX = distanceToPoints(x)
    const pointY = distanceToPoints(y)

    return pointX < pointY ? pointX : pointY
    
  } catch (err) { 
    return null
  }
}

function distanceToPoints (distance) {
  if( isNaN(distance) ) throw "distance is not a number"
  
  if(distance <= 1) return 10 

  if(distance <= 5) return 5  

  if(distance <= 10) return 1 

  return 0
}