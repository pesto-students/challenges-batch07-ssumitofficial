const sumEvenArgs = (...args) => {
  if(args.length === 0) return 0;

  let sum = 0;
  for(let arg of args){
    if(isNaN(arg)) continue;

    if(arg % 2 === 0) sum += arg;
  }

  return sum;
};

export { sumEvenArgs };
