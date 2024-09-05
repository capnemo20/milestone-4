// finding smallest number from an array

const nums = [167, 190, 120, 165, 137];
let smallest = nums[0];
for (let i =1; i<nums.length; i++){
    if(nums[i]<smallest){
        smallest = nums[i];
    }
}

console.log(smallest);