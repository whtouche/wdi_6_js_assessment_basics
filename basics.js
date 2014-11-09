///// Question 1
// Write a loop that would log each element of the array below to the console,
// prefixed with the text "I have a " (so "I have a cat", "I have a dog", etc.)
var pets = ['cat', 'dog', 'snake'];
pets.forEach(function(pet){//Pass anonymous function
  console.log("I have a " + pet);
});

//OR
for(var i = 0; i < pets.length; i++) {
  console.log('I have a ' + pets[i]);
}

///// Question 2
// Change my friend's hair color to "green", without modifying the line below.
var friend = { name: 'Chris', age: 27, hairColor: 'blue' };
//(WRONG)
friend.hairColor[0] = 'green';

//Answers
friend['hairColor'] = 'green';
friend.hairColor = 'green';

///// Question 3
// The function below is problematic. Write code that demonstrates the problem,
// then modify the function (preserving its purpose) to remove the problem.
//(WRONG)
var square_plus_one = function(n){
  squared = n * n; //Problematic because this is a global variable
  return squared + 1;
};

//Answer
var square_plus_one = function(n){
  var squared = n * n; //Fixed by adding var
  return squared + 1;
};

///// Question 4
// Translate the Ruby method defined below into a JavaScript function.

/*
def greet(name, excited = false)
  greeting = "Hi, #{name} here!"
  if excited
    greeting.upcase
  else
    greeting
  end
end
*/
//(WRONG)
function greet(name, excited, greeting) {
  console.log(arguments);
  if(excited === undefined){ greeting = 'Hi' + ', ' + name + " here!"; }
  return greeting;
}

//Answer
function greet(name, excited) {
  excited = excited || false; //Unnecessary, but makes explicit what excited is
  var greeting = 'Hi, ' + name + ' here!';
  if(excited) {//Returns false if value of excited is undefined
    return greeting.toUpperCase();
  } else {
    return greeting;
  }
}
///// Question 5
// Write a function called `twice` that accepts both a value and another
// function as arguments, and calls the provided function twice, both times
// with the value as an argument. Below is an example value and function.
//(WRONG)
var phrase = 'Odelay!';
var shoutIt = function(text){
  console.log(text.toUpperCase());
};

function twice(value, func) {
  func(value);
  func(value);
}

twice(phrase, shoutIt);//Uses shoutIt (as func) on value (as phrase[Odelay!])
