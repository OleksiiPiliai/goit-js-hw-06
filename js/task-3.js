function getElementWidth(content, padding, border) {
  const numericContent = parseFloat(content);
  const numericPadding = parseFloat(padding);
  const numericBorder = parseFloat(border);

  const totalWidth = numericContent + ((numericPadding + numericBorder) * 2);
  return totalWidth;
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));