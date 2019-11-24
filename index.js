// Your code here
  
function mapToNegativize(sourceArray) {
    const negativizedArray = []
    sourceArray.forEach(number => negativizedArray.push(number * -1))
    return negativizedArray
}

function mapToNoChange(sourceArray) {
    const clonedArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        clonedArray.push(sourceArray[i])
    }
    return clonedArray
}

function mapToDouble(sourceArray) {
    let i = 0
    const doubledArray = []
    while (i < sourceArray.length) {
        doubledArray.push(sourceArray[i] * 2)
        i++
    }
    return doubledArray
}
function mapToSquare(sourceArray) {
    const squaredArray = []
    for (const num of sourceArray) {
        squaredArray.push(num ** 2)
    }
    return squaredArray
}

function reduceToTotal(sourceArray, startingPoint) {
    let sum = startingPoint || 0
    for (let i = 0; i < sourceArray.length; i++) {
        sum += sourceArray[i]
    }
    return sum
}

function reduceToAllTrue(sourceArray) {
    let truthiness
    for (const element of sourceArray) {
        truthiness = element ? true : false
    }
    return truthiness
}

function reduceToAnyTrue(sourceArray) {
    let truthiness = false
    sourceArray.forEach(element => element ? truthiness = true : null)
    return truthiness
}