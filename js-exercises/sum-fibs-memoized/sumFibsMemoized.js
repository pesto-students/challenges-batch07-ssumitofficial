function sumFibs(num) {
  if(!num || isNaN(num)) throw new Error('Invalid Parameter');

  let sum = 1;
  let num1 = 0, num2 = 1;
  let nextNum = num1 + num2;

  while(nextNum <= num){
    if(nextNum % 2 != 0){
      sum += nextNum;
    }
    num1 = num2;
    num2 = nextNum;
    nextNum = num1 + num2;
  }

  return sum;
}

function cacheFunction(cachedFn) {
  let cache = {};
  return function(num){
    if(num in cache){
      return cache[num];
    }
    else{
      cache[num] = cachedFn(num);
      return cache[num];
    }
  }
}

export { sumFibs, cacheFunction };
