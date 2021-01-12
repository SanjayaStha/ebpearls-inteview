var items = [7,4,8,10,1,2,2,3,4]


// script to return an array with unique value
Array.prototype.max = function() {
    return Math.max.apply(null, this);
  };
  
function getUniqueValue(items){
    return Array.from(new Set(items))
}

function getArrayInAsc(items){
    return items.sort(function(a,b){return a-b})

}

function getMaxValue(items){
    return items.max()
}

function getSumValue(items){
    return items.reduce(function(a,b){return a+b})
}

function getSecondMax(items){
    let temArr = items.sort(function(a,b){return b-a})
    return temArr[temArr.length - 2]

}