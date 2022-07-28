module.exports = function check(str, bracketsConfig) {
  let obj={};
  for (let i=0; i < bracketsConfig.length; i++){
    obj[bracketsConfig[i][1]]=bracketsConfig[i][0];
  }
  const arr=[];
 
  for(let i=0; i< str.length; i++){
    let currentSymbol=str[i];
    let topSymbol=arr[arr.length-1];
    if (arr.length === 0){
      
       arr.push(currentSymbol);       
      } else if (topSymbol === obj[currentSymbol]){
        arr.pop()
      }else{
        arr.push(currentSymbol);
      }

  }
  return arr.length === 0;
}

