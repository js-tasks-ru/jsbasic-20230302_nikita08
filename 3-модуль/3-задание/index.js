function camelize(str) {
 function camelize(str) {
  return str
  .split('-')
  .map((word, index)=>index ==0? word : word[0].
  toUpperCase() + word.sloce(1))
  .join('');
} // ваш код...
}
