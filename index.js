const mapToNegativize = (sourceArray) => {
    const result = []
    for (const element of sourceArray) {
       let num = element * -1 
       result.push(num) 
    }
    return result 
}

const mapToNoChange = (sourceArray) => {
    return sourceArray 
}

const mapToDouble = (sourceArray) => {
    const result = []
    for (const element of sourceArray) {
        let num = element * 2
        result.push(num)
    }
    return result 
}

const mapToSquare = (sourceArray) => {
    const result = []
    for (const element of sourceArray) {
        let num = element * element 
        result.push(num) 
    }
    return result 
}

const reduceToTotal = (sourceArray, startingPoint=0) => {
    let result = startingPoint    
    for (const element of sourceArray) {
        result = startingPoint += element        
    }
    return result  
}

const reduceToAllTrue = (sourceArray) => {
    let result = undefined
    for (const element of sourceArray) {
        result = !!element  
    }
    return result 
}

const reduceToAnyTrue = (sourceArray) => {
    for (const element of sourceArray) {
        if (element) {
            return true 
        }
    }
    return false 
}









