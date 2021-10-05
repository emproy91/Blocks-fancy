/*
A1
Write a function called filterByValue which accepts an array of objects and a key 
and returns a new array with all the objects that contain that key.
Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"},
     {first: 'Tim', last:"Garcia", isCatOwner: true}, 
     {first: 'Matt', last:"Lane"}, 
     {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') 
     /// [{first: 'Tim', last:"Garcia", isCatOwner: true}, 
         {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

//R1//
const arr = [
  { first: "Elie", last: "Schoppik" },
  { first: "Tim", last: "Garcia", isCatOwner: true },
  { first: "Matt", last: "Lane" },
  { first: "Colt", last: "Steele", isCatOwner: true },
];

const key = "isCatOwner";

function filterByValue() {
  return arr.filter(function (value) {
    return key in value;
  });
}
console.log(filterByValue(arr, key));
//R1//

/*
A2
Write a function called find which accepts an array and a value and returns the 
first element in the array that has the same value as the second parameter or 
undefined if the value is not found in the array.
Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

//R2//
const a = [1, 2, 3, 4, 5];

function find(arr, searchValue) {
  var fArr = arr.filter(function (value) {
    return value === searchValue;
  });
  if (fArr.length > 0) return fArr[0];
}
console.log(find(a, 3));
console.log(find(a, 10));
//R2//

/*
A3
Write a function called findInObj which accepts an array of objects, a key, 
and some value to search for and returns the first found value in the arrayt.
Examples:
    findInObj([{first: 'Elie', last:"Schoppik"},
               {first: 'Tim', last:"Garcia", isCatOwner: true}, 
               {first: 'Matt', last:"Lane"}, 
               {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) 
     // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

//R3//
const arr = [
  { first: "Elie", last: "Schoppik" },
  { first: "Tim", last: "Garcia", isCatOwner: true },
  { first: "Matt", last: "Lane" },
  { first: "Colt", last: "Steele", isCatOwner: true },
];

const key = "isCatOwner";
const searchValue = true;

function findInObj() {
  var newArr = arr.filter(function (value) {
    return key in value && value[key] === searchValue;
  });
  if (newArr.length > 0) return newArr[0];
}
console.log(findInObj(arr, key, searchValue));
//R3//

/*
A4
Write a function called removeVowels which accepts a string and returns a 
new string with all of the vowels (both uppercased and lowercased) removed. 
Every character in the new string should be lowercased.
Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

//R4//
function removeVowels(str) {
  var arr = str.split("");
  var vowels = ["a", "e", "i", "u", "o"];
  return arr
    .filter(function (value) {
      return vowels.indexOf(value.toLowerCase()) === -1;
    })
    .join("")
    .toLowerCase();
}
console.log(removeVowels("Elie"));
console.log(removeVowels("TIM"));
console.log(removeVowels("ZZZZZZ"));
//R4//

/*
A5
Write a function called doubleOddNumbers which accepts an array and returns a 
new array with all of the odd numbers doubled (HINT - you can use map and fitler 
to double and then filter the odd numbers).
Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

//R5//
function doubleOddNumbers(arr) {
  arr2 = arr.filter((e) => e % 2 !== 0);
  return arr2.map(function (value1) {
    return value1 * 2;
  });
}
console.log(doubleOddNumbers([1, 2, 3, 4, 5]));
console.log(doubleOddNumbers([4, 4, 4, 4, 4]));
//R5//

/*
A6
Write a function called removeVowels which accepts a string and returns a 
new string with all of the vowels (both uppercased and lowercased) removed. 
Every character in the new string should be lowercased.
*This algorithm was repeated, so I changed its output to uppercase. *
Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

//R6//
function removeVowels(str) {
  var arr = str.split("");
  var vowels = ["a", "e", "i", "u", "o"];
  return arr
    .filter(function (value) {
      return vowels.indexOf(value.toLowerCase()) === -1;
    })
    .join("")
    .toUpperCase();
}
console.log(removeVowels("Elie"));
console.log(removeVowels("TIM"));
console.log(removeVowels("ZZZZZZ"));
//R6//

/*
A7
Write a function called extractKey which accepts an array of objects and 
some key and returns a new array with the value of that key in each object.
Examples:
    extractKey([{name: 'Elie'},
                {name: 'Tim'}, 
                {name: 'Matt'}, 
                {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

//R7//
const arr = [
  { name: "Elie" },
  { name: "Tim" },
  { name: "Matt" },
  { name: "Colt" },
];

const key = "name";

function extractKey() {
  return arr.flatMap(function (value) {
    return value[key];
  });
}
console.log(extractKey(arr, key));
//R7//

/*
A8
Write a function called extractValue which accepts an array of objects and 
a key and returns a new array with the value of each object at the key.
*this algorithm is somewhat confusing, so how it asks for the value of 
each object at the key in an array that is what it prints in terminal. *
Examples:
    var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

//R8//
const arr = [
  { name: "Elie" },
  { name: "Tim" },
  { name: "Matt" },
  { name: "Colt" },
];

const key = "name";

function extractValue() {
  return arr.flatMap((value) => [key, value]);
}
console.log(extractValue(arr, key));
//R8//

/*
A9
Write a function called vowelCount which accepts a string and returns an 
object with the keys as the vowel and the values as the number of times 
the vowel appears in the string. This function should be case insensitive 
so a lowercase letter and uppercase letter should count.
Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

//R9//
function vowelCount(str) {
  let splitArr = str.toLowerCase().split("");
  // console.log(splitArr);
  let obj = {};
  let vowels = "aeiuo"; //["a", "e", "i", "u", "o"];

  splitArr.forEach(function (letter) {
    if (vowels.indexOf(letter.toLowerCase()) !== -1) {
      if (letter in obj) {
        obj[letter]++;
      } else {
        obj[letter] = 1;
      }
    }
    //retrun obj;
  });
  console.log(obj);
}
vowelCount("Elie");
vowelCount("Tim");
vowelCount("Matt");
vowelCount("hmmm");
vowelCount("I Am awesome and so are you");
//R9//

/*
A10
Write a function called hasNoDuplicates which accepts an array and returns 
true if there are no duplicate values (more than one element in the array 
that has the same value as another). If there are any duplicates, the 
function should return false.
Examples:
    hasNoDuplicates([1,2,3,2]) // false
    hasNoDuplicates([1,2,3]) // true
*/

//R10//
function hasNoDuplicates(arr) {
  arr = [];
  result = arr.some((element, index) => {
    return arr.indexOf(element) !== index;
  });
  /*
var repeat = true;
if (result) {
  repeat = !result;
}*/
  console.log(result);
}
hasNoDuplicates([1, 2, 3, 2]);
hasNoDuplicates([1, 2, 3]);
//R10//

/*
A11
Write a function called addKeyAndValue which accepts an array of objects 
and returns the array of objects passed to it with each object now including 
the key and value passed to the function.
Examples:
    var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

//R11//
var arr = [
  { name: "Elie" },
  { name: "Tim" },
  { name: "Matt" },
  { name: "Colt" },
];
function addKeyAndValue(arr, key, value) {
  arr.forEach(function (val) {
    val[key] = value;
  });

  //return arr;
  console.log(arr);
}
addKeyAndValue(arr, "title", "Instructor");
//R11//

/*
A12
Write a function called partition which accepts an array and a callback and 
returns an array with two arrays inside of it. The partition function should 
run the callback function on each value in the array and if the result of 
the callback function at that specific value is true, the value should be 
placed in the first subarray. If the result of the callback function at that 
specific value is false, the value should be placed in the second subarray. 
Examples:
    function isEven(val){
        return val % 2 === 0;
    }
    var arr = [1,2,3,4,5,6,7,8];
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    var names = ['Elie', 'Colt', 'Tim', 'Matt'];
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

//R12//
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var names = ["Elie", "Colt", "Tim", "Matt"];

function isEven(val) {
  let pairs = arr.filter(function (val) {
    return val % 2 == 0;
  });
  //console.log(pairs);

  let odd = arr.filter(function (val) {
    return val % 2 !== 0;
  });
  //console.log(odd);
  val = [pairs, odd]
  console.log(val);
  return val;
}
isEven(arr);
/////

function isLongerThanThreeCharacters(val) {
    arr.forEach(function (val) {
        val = val.length < 3;
      });
  console.log(val);
  return val;
}
isLongerThanThreeCharacters(names);

function partition(arr, val) {
  acc = [];
  return arr.reduce(
    function (acc, next) {
      if (val(next)) {
        acc[0].push(next);
      } else {
        acc[1].push(next);
      }

      //return acc;
      console.log(acc);
    },
    [[], []]
  );
}
partition(arr, isEven);
partition(names, isLongerThanThreeCharacters);
//R12//

/*
A13
Write a function called hasCertainKey which accepts an array of objects and 
a key, and returns true if every single object in the array contains that key. 
Otherwise it should return false.
Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainKey(arr,'first') // true
    hasCertainKey(arr,'isCatOwner') // false
*/

//R13//
const arr = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
    {title: "Instructor", first: 'Matt', last:"Lane"}, 
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
];
//var key = '';
function hasCertainKey(arr, key){

    return arr.every(function(val, key){

        return val[key];
    });

}

console.log(hasCertainKey(arr,'first'));
console.log(hasCertainKey(arr,'isCatOwner'));
//R13//
