function duplicateLetters(str) {
  if (!str) return false;

  let chars = {}
  for (let ch of str) {
    if (chars[ch]) chars[ch] += 1;
    else chars[ch] = 1;
  }

  let charValues = Object.values(chars);

  let maxCount = Math.max(...charValues);
  if (!maxCount || maxCount == 1) return false;

  return maxCount;
}

export {
  duplicateLetters,
};