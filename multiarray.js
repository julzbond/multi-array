module.exports = locate;

function locate (arr,value){
  var isTrue = false;
  for (var i = 0; i < arr.length; i++){
    if (arr[i] === value){
      return true;
    }
    if (Array.isArray(arr[i])) {
      isTrue = locate(arr[i], value);
    }
  }
  return isTrue;
};