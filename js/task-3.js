function getElementWidth(content, padding, border) {
    const nPx = content + ((padding + border) * 2);
    return nPx
}
getElementWidth("50px", "8px", "4px")
getElementWidth("60px", "12px", "8.5px")
getElementWidth("200px", "0px", "0px")