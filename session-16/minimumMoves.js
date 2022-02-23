arr1 = [123,543];
arr2 = [321,279];

function minimumMoves(arr1, arr2) {
  let moveCounter = 0;
  const arr1ToString = arr1.toString(); 
  const arr2ToString = arr2.toString();
   
  for(let i=0; i < arr2ToString.length; i++) {
    
    let num1 = parseInt(arr1ToString[i]);
    let num2 = parseInt(arr2ToString[i]);
    
     if (num1 === num2) {
       continue
     }
     else if (num1 > num2) {
       moveCounter += (num1 - num2);
     } 
     else if (num1 < num2) {
       moveCounter += (num2 - num1);
     }
     
   }
  console.log(moveCounter)
}

minimumMoves(arr1, arr2);