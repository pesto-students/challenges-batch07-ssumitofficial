function rot13(str) {
  if(!str || typeof str != 'string') throw new Error('Invalid Parameter');

  const codeA = 'A'.charCodeAt(0);
  const codeZ = 'Z'.charCodeAt(0);
  let result = '';

  for(let i = 0; i < str.length; i++){
    let charCode = str.charCodeAt(i);

    if(charCode >= codeA && charCode <= codeZ){
      charCode = ((charCode - codeA + 13) % 26) + codeA;
    }

    result += String.fromCharCode(charCode);
  }

  return result;
}

export {
  rot13,
};
