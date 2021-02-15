
function curry(fn){
  return function curryFunction(...args){
    if(args.length >= fn.length){
      return fn.apply(this, args);
    }

    return function(...additionArgs){
      return curryFunction.apply(this, args.concat(additionArgs));
    }
  }
}

export {
  curry,
};
