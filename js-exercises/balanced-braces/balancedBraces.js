function balancedBraces(str) {
  const openBraces = ["(", "[", "{"];
  const closeBraces = [")", "]", "}"];
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];

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