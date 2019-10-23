// Your code here
function mapToNegativize(sourceArray){
  let newArray = [];
  for(var i = 0; i<sourceArray.length; i++){
    newArray.push(sourceArray[i] * -1);
  };
  return newArray;
}

function mapToNoChange(sourceArray){
  return sourceArray;
}

function mapToDouble(sourceArray){
  let newArray = [];
  for(var i = 0; i<sourceArray.length; i++){
    newArray.push(sourceArray[i] * 2);
  };
  return newArray;
}

function mapToSquare(sourceArray){
  let newArray = [];
  for(var i=0; i<sourceArray.length; i++){
    newArray.push(Math.pow(sourceArray[i],2));
  };
  return newArray;
}

function reduceToTotal(sourceArray, startingPoint){
  if(startingPoint){
    let total = startingPoint;
    for(var i=0; i<sourceArray.length; i++){
      total += sourceArray[i];
    };
    return total;
  }else{
    let total = 0;
    for(var i=0; i<sourceArray.length; i++){
      total += sourceArray[i];
    };
    return total;
  }
}

function reduceToAllTrue(sourceArray){
  function isTrue(element){
    return element === true;
  };

  let newArray = [];
  for(var i=0; i<sourceArray.length; i++){
    if(sourceArray[i] === false){
      newArray.push(false);
    }else if(sourceArray[i] === null){
      newArray.push(false);
    }else{
      newArray.push(true);
    };
  };
  return newArray.every(isTrue);
}

function reduceToAnyTrue(sourceArray){
  function isTrue(element){
    return element === true;
  };

  let newArray = [];
  for(var i=0; i<sourceArray.length; i++){
    if(sourceArray[i] === false){
      newArray.push(false);
    }else if(sourceArray[i] === null){
      newArray.push(false);
    }else{
      newArray.push(true);
    };
  };
  return newArray.some(isTrue);
}