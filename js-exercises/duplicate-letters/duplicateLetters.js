function duplicateLetters(...args) {
  let str = args[0];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    let a = 0;
    for(let j = i; j < str.length; j++){
      if(str[i] == str[j]) a++;
    }
    if (a > count) count = a;
  }

  return count > 1 ? count : false;
}

export {
  duplicateLetters,
};