// // Your code here

let sourceArray = [1, 2, 3, -9]

let dune = ["paul", "gurney", "vladimir", "jessica", "chani"]

let sourceArray2 = [1,2,3]

let sourceArray3 = [1, 2, true, "razmatazz"]

let sourceArray4 = [ false, null, null, null, true]

let mapToNegativize = ele => {
  return sourceArray.map(number => {
    return number*-1
  })
}

let mapToNoChange = ele => {
  return dune.map(name => {
    return name
  })
}

let mapToDouble = ele => {
  return sourceArray.map(number => {
    return number*2
  })
}

let mapToSquare = ele => {
  return sourceArray.map(number => {
    return number ** 2
  })
}





//works with starting point
// let reduceToTotal = ele => {
//   return sourceArray2.reduce((total, element) => {
//     return element + total
//   }, 100)
// }


function reduceToTotal(sourceArray2, startingPoint=0) {
  let total = startingPoint
  for (let i=0; i < sourceArray2.length; i++) {
    total = sourceArray2[i] + total
  }
  return total
}
//
// let reduceToTotal = ele => {
//   return sourceArray2.reduce((total, element, startingPoint=0) => {
//     return element + total
//   }, 100)
// }

// function reduceToTotal(sourceArray2, startingPoint) {
//   return sourceArray2.reduce(total, element) {
//     return element + total}, startingPoint)
// }

// let reduceToAllTrue = ele => {
//   return sourceArray3.reduce((total, element) {
//     if (total == true) {
//       return true
//     } else {
//       return false
//     }
//   })
// }

function reduceToAllTrue(sourceArray) {
  for (let i=0; i < sourceArray.length; i++) {
    if (!sourceArray[i]) {
      return false
      }
    }
    return true
  }


//instead of returning false, return true if any elements are truthy

function reduceToAnyTrue(sourceArray) {
  for (let i=0; i < sourceArray.length; i++) {
    if (!!sourceArray[i]) {
      return true
    }
  }
  return false
}
