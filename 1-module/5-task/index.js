function truncate(str, maxlength) {
  // ваш код...function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}
}
