'use strict';

function ConsecutiveSumExists(numsArr, sumValue) {
    let countIndex = 0
    let sum = 0;
    let index = -1;
    
    for (let i=0; i < numsArr.length; i++) {
        sum += numsArr[i];
        countIndex += 1;
        
        if (sum === sumValue) {
          index = i - countIndex;
          break
        }
        if (sum > sumValue) {
          sum = numsArr[i];
          countIndex = 0;
      }
    }
   
  console.log(index);
 
}

ConsecutiveSumExists([0,1,5,5,1,1,2,1,8,6], 7);

ConsecutiveSumExists([0,1,5,5,45,1,2,1,2,6], 7);