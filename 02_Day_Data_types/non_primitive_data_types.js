let nums = [1, 2, 3]
nums[0] = 10
console.log(nums) // [10, 2, 3]

let nums = [1, 2, 3]
let numbers = [1, 2, 3]
console.log(nums == numbers) // false 
// | the comparison operator is comparing is Object A == Object B? they are 2 different items
// it will pass if ObjectA == ObjectA

let userOne = {
  name: 'Asabeneh',
  role: 'teaching',
  country: 'Finland'
}
let userTwo = {
  name: 'Asabeneh',
  role: 'teaching',
  country: 'Finland'
}
console.log(userOne == userTwo) // false | user1 and user2 are also 2 different objects

/* Rule of thumb, we do not compare non-primitive data types. 
Do not compare arrays, functions, or objects. 
Non-primitive values are referred to as reference types, 
because they are being compared by reference instead of value. 
Two objects are only strictly equal if they refer to the same underlying object.
*/
// --------------------------------------------------------

numbers = nums
console.log(nums == numbers)  // true

userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}
userTwo = userOne
console.log(userOne == userTwo)  // true