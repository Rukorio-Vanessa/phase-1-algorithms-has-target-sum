function hasTargetSum(array, target) {
  // Write your algorithm here
  const arrayValuesViewed = {}
  for(const num of array){
    //since target=num + targetNum(val that gives target when added to num)
    let targetNum = target - num
    if (targetNum in arrayValuesViewed) 
    return true
    arrayValuesViewed[num] = true
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  Runtime: O(n^2)-(quadratic-nested iteration)
  Space: O(n)
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  Inside thhe function 'hasTargetSum' define an object that holds the array numbers that have been viewed
  We then define a for loop that iterates through each number inside the array
   Taking into account that the target is the result of the sum of 2 values, i.e;
    the num in the array and another number we can define the other number as;
       'targetNum' given by the difference when num is taken away from target value
  Using a conditional statement we then check if any key on our object is the targetNum that when added to num gives us the target value
       return true if condition is met else we add the num to the object we defined
  However if we reach the end of the array without the condition being met;
       we return false     
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));
  //true
  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));
  //true
  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
  //false
}

module.exports = hasTargetSum;
