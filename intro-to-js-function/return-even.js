// return all even numbers of an array

function returnEven(array){
    let evenArray  = [];
    for (number of array){
        if(number%2===0){
            evenArray.push(number);

            
        }
        
    }
    return evenArray;
}

const arrayNums = [2,13, 42,55, 43,52, 96, 930]
const evenNumbers = returnEven(arrayNums);
console.log(evenNumbers);