## Closure Exercises

1. Write a function called `multiplyBy` that takes a `number` as an argument and returns a function. Returned function takes another `number` as an argument and returns the multiplication of both the numbers.

```js
// Your code goes here
function multiplyBy(num){
  return function inner(a){
    return num * a;
  }
}
console.log(final) // 30

const double = multiplyBy(2);
const final = double(15); // final should be 30
```

2. Write a function called `fullName` that takes a string `firstName` as an argument and returns a function. Returned function takes another string `lastName` as an argument and returns full name.

```js
// Your code goes here
function fullName(firstName){
  return function(lastName){
    return firstName+' ' +lastName
  }
}
console.log(final)

const name = fullName("Will");
const final = name("Smith"); // final should be "Will Smith"
```

3. Write a function called `isInBetween` which takes two parameter `a` and `b` and returns a function. When you call the returned function with any number it returns `true` if the value is in between `a` and `b`.

```js
function isInBetween(a, b) {
   function check(c){
    if(a <= c && c <= b){
    return true;
  }else{
  return false;
  }
}
  return check;
}

const isChild = isInBetween(10, 100);
isChild(21); // true
isChild(45); // true
isChild(103); // false
```

4. Write a function call `letsWishThem` that take one parameter `string` called `greeting` and returns a fucntion that takes another argument called `message`.

```js
function letsWishThem(greeting) {
  return function(message){
    return greeting+" "+message
  }
}

const callWithHey = letsWishThem("Hey");
const callWithHello = letsWishThem("Hello");
callWithHey("Arya"); // Hey Arya
callWithHello("How Are You?"); // Hello How Are You?
```

5. Write a function called `addGame` which takes a string (name of the game) and returns a function calling that will increment the score by one and print something like `Score of Basketball is 1`.

```js
function addGame(gameName) {
  let count1 = 0;
  function count(){
    count1 = count1 + 1;
    console.log(`Your score of ${gameName} is ${count1}`)
  }
  return count;
}

// Output
const hockey = addGame("Hockey");
hockey(); // Your score of Hockey is 1
hockey(); // Your score of Hockey is 2
const cricket = addGame("Cricket");
cricket(); // Your score of Cricket is 2
cricket(); // Your score of Cricket is 2
```

6. Write a function called `getCard` which takes one of these options (club, spade, heart, dimond) returns a function calling that function returns random card (2,3,4,5,6,7,8,9,10,J, Q, K, A) of that suit.

```js
function getCard(suit) {
  if(suit == "Club" || suit == "Spade" || suit == "heart" || suit == "diamond"){
  function randomIntFromInterval(min=2, max=14) {
  var myVal = Math.floor(Math.random() * (max - min + 1) + min);
  if(myVal === 11 ){
  myVal = 'J'
  }
  else if(myVal === 12 ){
     myVal = 'Q'
  }
  else if(myVal === 13 ){
     myVal = 'K'
  }
  else if(myVal === 14){
    myVal = 'A'
  }
  else  myVal == myVal

  return `${myVal} ${suit}`
}
return randomIntFromInterval()
}

// Output
const randomClub = addGame("Club");
randomClub(); // Card is: 6 Club
randomClub(); // Card is: A Club
const randomSpade = addGame("Spade");
randomSpade(); // Card is: 6 Spade
randomSpade(); // Card is: A Spade
```
