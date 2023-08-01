// var twoSum = function(nums, target) {
//     for(let i = 0; i < nums.length;  i++){
//         for(let j = 0; j < nums.length;  j++){
//             if(i == j) continue
//             if(nums[i] + nums[j] == target) return [i,j]
//         }
//     }
// };

var twoSum = function(nums, target) {
    const temp = [];
    for(let i = 0; i < nums.length; i++){
        const diff = target - nums[i];
        if(temp[diff] !== undefined) return [i, temp[diff]] 
        else temp[nums[i]] = i 
    }
};

console.log(twoSum([2,11,7,15], 9))