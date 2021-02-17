function balancedBraces(str) {
  const openBraces = ["(", "[", "{"];
  const closeBraces = [")", "]", "}"];
  const stack = [];

  for (const ch of str) {

    if (openBraces.includes(ch)) {
      stack.push(ch);
    }
    if (closeBraces.includes(ch)) {
      const lastBrace = stack.pop();

      if (openBraces.indexOf(lastBrace) !== closeBraces.indexOf(ch)) return false;
    }
  }

  return stack.length === 0;
}

export {
  balancedBraces,
};