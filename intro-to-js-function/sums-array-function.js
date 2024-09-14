function sumOfNumbers(numbers){
    let sum = 0;
    for (const number of numbers){
        console.log(number);
        sum = sum+number;
    }
    return sum;
}

const nums = [43, 45,52, 83, 11, 85, 48 ]
const sum = sumOfNumbers(nums);
console.log("sum of numbers is:", sum);