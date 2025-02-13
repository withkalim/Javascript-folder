// sum of  two number is equal to target
var nums = [3,11,8,20,2,14,3,5];
var target = 10;

// first loop for take the number that we can to multiple
for(var i = 0; i < nums.length; i++){
    // console.log(nums[i]);

    // second loop for iteration with each number in array inside
    for(var j = i + 1; j < nums.length; j++){

        if(nums[i] + nums[j] == target){
            console.log(nums[i] , nums[j]);
        }
    }
}


// again test for prectice
var arrs = [2,5,9,4,14,10];
var target = 12;

for(var i=0; i<arrs.length; i++){

    for(var j = i + 1; j<arrs.length; j++){

        if(arrs[i] + arrs[j] === target){
            console.log(arrs[i], arrs[j]);
        }
    }
}