const numbers = [1, 2, 3];
const letters = ['a', 'b', 'c'];

function zipList(nums, letter) {
  const newArray = [];
  for (let i = 0; i < numbers.length; i++){
    newArray.push(letter[i]);
    newArray.push(nums[i]);
  }
  return newArray;
}
console.log(zipList(numbers, letters));

function zipListTheSimpleWay(nums, letter) {
  return _.flatten(_.zip(nums, letter));
}
console.log(zipListTheSimpleWay(numbers, letters));
