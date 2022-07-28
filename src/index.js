 function check(str, bracketsConfig) {

  const arr=[];
  
  for(let i=0; i< str.length; i++){
    let currentSymbol=str[i];
    
    for(j in bracketsConfig){
      if (bracketsConfig[j][0] === currentSymbol){
        arr.push(currentSymbol);
        break;
      } else {
        let symbolPairIndex=''
        if(bracketsConfig[j][1]===currentSymbol){
          symbolPairIndex = j;
          if(bracketsConfig[symbolPairIndex][0] === arr[arr.length-1]){
            arr.pop();
            
          } else {
            arr.push(currentSymbol);
          }
        }
      }
         
      
    } 
    
    
  }

  console.log (arr);


  
}
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']]
check('111115611111111222288888822225577877778775555666677777777776622222', config6)
