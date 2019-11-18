// Your code here
function mapToNegativize(sourceArray) {
    let negNum = []
    for (let i = 0; i < sourceArray.length; i++) {
        negNum.push(-1 * sourceArray[i])
    }
    return negNum
}

function mapToNoChange(sourceArray) {
    let sameNum = []
    for (let i = 0; i < sourceArray.length; i++) {
        sameNum.push(sourceArray[i])
    }
    return sameNum
}

function mapToDouble(sourceArray) {
    let doubleNum = []
    for (let i = 0; i < sourceArray.length; i++) {
        doubleNum.push(sourceArray[i] * 2)
    }
    return doubleNum
}

function mapToSquare(sourceArray) {
    let squareNum = []
    for (let i = 0; i < sourceArray.length; i++) {
        squareNum.push(sourceArray[i] ** 2)
    }
    return squareNum
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    let total = startingPoint
    for (let i = 0; i < sourceArray.length; i++) {
        total = total + sourceArray[i]
    }
    return total
}

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (!sourceArray[i]) return false
    }
    return true
}

function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i]) return true
    }
    return false
}