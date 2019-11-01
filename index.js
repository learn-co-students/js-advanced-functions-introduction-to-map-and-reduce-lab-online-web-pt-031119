// Your code here

const mapToNegativize = (src) => {
    let r = []
    for (let i = 0; i < src.length; i++ ) {
      r.push(-1 * src[i])
    }
    return r
  }
  
const mapToNoChange = (sourceArray) => {
   let r = []
   for (let i = 0; i < sourceArray.length; i++) {
       r.push(sourceArray[i])
   }
  return r
}

const mapToDouble = (sourceArray) => {
    let r = []
    for (let i = 0; i < sourceArray.length; i++) {
        r.push(sourceArray[i] * 2 )
    }
   return r
 }

 const mapToSquare = (sourceArray) => {
    let r = []
    for (let i = 0; i < sourceArray.length; i++) {
        r.push(sourceArray[i] * sourceArray[i] )
    }
   return r
 }

 const reduceToTotal = (sourceArray, startingPoint= 0) => {
    let r = startingPoint
    for (let i = 0; i < sourceArray.length; i++) {
        r = sourceArray[i] + r
    }
   return r
 }


 const reduceToAllTrue = (sourceArray) => {
    let r = null
    for (let i = 0; i < sourceArray.length; i++) {
        if (!sourceArray[i]) return false
    }
   return true
 }

 const reduceToAnyTrue = (sourceArray) => {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i]) return true
    }
   return false
 }