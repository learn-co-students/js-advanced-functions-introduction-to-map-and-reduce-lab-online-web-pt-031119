// Your code here
function mapToNegativize(sourceArray){
    let newArray = []
    sourceArray.forEach(element => {
        newArray.push(element * -1)
    });
    return newArray
}

function mapToNoChange(sourceArray){
    let newArray = []
    sourceArray.forEach(element => {
        newArray.push(element)
    });
    return newArray
}

function mapToDouble(sourceArray){
    let newArray = []
    sourceArray.forEach(element => {
        newArray.push(element * 2)
    });
    return newArray
}

function mapToSquare(sourceArray){
    let newArray = []
    sourceArray.forEach(element => {
        newArray.push(element ** 2)
    });
    return newArray
}

function reduceToTotal(sourceArray, startingPoint = 0){
    sourceArray.forEach(element => {
       startingPoint += element
    });
    return startingPoint
}

function reduceToAllTrue(sourceArray){
    let value = true
    sourceArray.forEach(element => {
       if (element) {
           value = true
       } else {
           value = false
       }
    });
    return value
}

function reduceToAnyTrue(sourceArray){
    let value = false
    sourceArray.forEach(element => {
       if (element) {
           value = true
       }
    });
    return value
}
