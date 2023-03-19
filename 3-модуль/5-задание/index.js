function getMinMax(str) {
  const inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';
function getMinMax(str) {
  let inputData =str.split(',');
  console.log(inputData);
  
  let inputData2 = inputData.map((el) => el.split(' '));
  
  let nums = [];
  
  inputData2.forEach((element) => {
    element.forEach((innerElement) => {
      if (innerElement==='') {
        return;
      }
      let num = parseFloat(innerElement,10);
      
      if(isNaN(num)) {
        return;
      }
      
      nums.push(num);
    })
  });
  
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  return{
    min,max
  }
}

console.log(getMinMax(inputData));// ваш код...
}
