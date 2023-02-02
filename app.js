// function getALLSum2(...nums) {
   
//     let sum = nums.reduce((a, b) => a+= b)/2
//     console.log(sum);
// }

// getALLSum2(4, 4, 4, 4, 4)


// const nums = [5, 7, 8, 9, 10, 22, 30];
// const getAverage = (numbers) => { let sum = 0;
//      for (let i = 0; i < numbers.length; i += 1)
//      {sum += numbers[i]; } return sum / numbers.length;}; 
//      console.log(getAverage(nums));


const numbers = [2, 3, 3, 5, 7]

num = 0;
for (let i = 0; i < numbers.length; i++){
    num = numbers[i]
    sum = num + num
    result = sum / numbers.length
}
console.log(result);