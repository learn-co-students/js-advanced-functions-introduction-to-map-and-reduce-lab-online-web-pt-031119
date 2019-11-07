// Your code here
function mapToNegativize(sourceArray) {
  let returnedArray = [];
  sourceArray.forEach(function(element) {
    returnedArray.push(element * -1);
  });
  return returnedArray;
}

function mapToNoChange(sourceArray) {
  let returnedArray = [];
  sourceArray.forEach(function(element) {
    returnedArray.push(element);
  });
  return returnedArray;
}

function mapToDouble(sourceArray) {
  let returnedArray = [];
  sourceArray.forEach(function(element) {
    returnedArray.push(element * 2);
  });
  return returnedArray;
}

function mapToSquare(sourceArray) {
  let returnedArray = [];
  sourceArray.forEach(function(element) {
    returnedArray.push(element * element);
  });
  return returnedArray;
}

function reduceToTotal(sourceArray, startingPoint) {
  let total = startingPoint || 0;
  sourceArray.forEach(function(element) {
    total += element;
  });
  return total;
}

function reduceToAllTrue(sourceArray) {
  let flag = true;
  sourceArray.forEach(function(element) {
    if (element == false) {
      flag = false;
    }
  });
  return flag;
}

function reduceToAnyTrue(sourceArray) {
  let flag = false;
  sourceArray.forEach(function(element) {
    if (element == true) {
      flag = true;
    }
  });
  return flag;
}
