
function mapToNegativize(sourceArray) {
  const negatives = []
  for (const n of sourceArray) {
    const newNegative = n * -1
    negatives.push(newNegative)
  }
  return negatives
}

function mapToNoChange(sourceArray) {
  return sourceArray
}

function mapToDouble(sourceArray) {
  const doubles = []
  for (const n of sourceArray) {
    const newDouble = n * 2
    doubles.push(newDouble)
  }
  return doubles
}

function mapToSquare(sourceArray) {
  const squared = []
  for (const n of sourceArray) {
    const newSquare = n * n
    squared.push(newSquare)
  }
  return squared
}

function reduceToTotal(sourceArray, startingPoint=0) {
  let total = startingPoint
  for (const price of sourceArray) {
    total = startingPoint += price
  }
  return total
}

function reduceToAllTrue(sourceArray) {
  let result = undefined
  for (const x of sourceArray) {
    result = !!x
  }
  return result
}

function reduceToAnyTrue(sourceArray) {
  for (const x of sourceArray) {
    if (x) {
      return true
    }
  }
  return false
}
