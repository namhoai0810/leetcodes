// tim vi tri cua target trong day nums
// neu tim duoc tra ve vi tri cua target trong nums
// neu khong tra ve vi tri cua target nen nam trong nums

// phuong phap duyet tu dau den cuoi 
// neu num[i] == target in ra vi tri i
// neu target nam giua 2 so i va i +1 tra ve vi tri i + 1
// neu khong in ra vi tri cua i cuoi day


var removeElement = function (nums, target ){
    for(i = 0; i<nums.length; i++){
        if(nums[i] == target){
            return i;
        }
        else if(nums[i] < target && nums[i+1] > target){
            return i+1;
        }
    }
    return nums.length;
}

let arr = [1,3,5,6];
let target = 2;
const a = removeElement(arr,target);
console.log(a);