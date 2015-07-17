// Problem 1
var people = [
  {name: 'Chuck', age: 22},
  {name: 'Brian', age: 46},
  {name: 'Michelle', age: 16},
  {name: 'Mike', age: 102},
  {name: 'Barbara', age: 66}
];


function oldestPerson() {
  var result;
  var newVar = 0;
  for (var i = 0; i < people.length; i++) {
   if  (people[i].age > newVar) {
       newVar = people[i].age;
       result = people[i].name;
     }
    };
    return result;
  }

console.log(oldestPerson());

// Problem 2 and Problem 3


function longestWord(str) {
var theWord = "";
var ignores = /\W/;
var strArr =  str.split(ignores);
for (var i = 0; i < strArr.length; i++) {
  if (strArr[i].length > theWord.length) {
   theWord = strArr[i];
  }
}
return theWord;
}
console.log(longestWord("Here is a test...... to see if it will return, the largest word!"));

// Problem 4

function factorial(num) {
var total = 1;
  for (var i = num;i>0;i--) {
    total*=i;
  }
  return total;
}
var randm = Math.floor(Math.random() * 100);

console.log(factorial(randm));
