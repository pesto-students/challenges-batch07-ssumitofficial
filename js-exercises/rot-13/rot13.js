function rot13(str) {
  if (!str || typeof str != 'string') throw new Error('Invalid Parameter');

  const codeA = 'A'.charCodeAt(0);
  const codeZ = 'Z'.charCodeAt(0);
  let result = '';

  for (let ch of str) {
    let charCode = ch.charCodeAt(0);

    if (charCode >= codeA && charCode <= codeZ) {
      charCode = ((charCode - codeA + 13) % 26) + codeA;
    }

    result += String.fromCharCode(charCode);
  }

  return result;
}

export {
  rot13,
};