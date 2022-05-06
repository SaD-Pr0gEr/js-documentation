// let user = new Object(); // "object constructor" syntax
// let user = {};

// let user = {     // an object
//     name: "John",  // by key "name" store value "John"
//     age: 30        // by key "age" store value 30
//   };
// delete user.age;

// let user = {
//     name: "John",
//     age: 30,
//     "likes birds": true  // multiword property name must be quoted
//   };

// let user = {};
// user["likes birds"] = true;
// alert(user["likes birds"]); // true
// delete user["likes birds"];

// let key = "likes birds";
// // same as user["likes birds"] = true;
// user[key] = true;

// let user = {
//     name: "John",
//     age: 30
// };
// let key = "name";
// alert( user.key ) // undefined

// let fruit = prompt("Which fruit to buy?", "apple");
// let bag = {
//   [fruit]: 5, // the name of the property is taken from the variable fruit
// };
// alert( bag.apple ); // 5 if fruit="apple"

// let fruit = prompt("Which fruit to buy?", "apple");
// let bag = {};
// // take property name from the fruit variable
// bag[fruit] = 5;

// let fruit = 'apple';
// let bag = {
//   [fruit + 'Computers']: 5 // bag.appleComputers = 5
// };

// function makeUser(name, age) {
//     return {
//       name: name,
//       age: age,
//       // ...other properties
//     };
//   }
  
//   let user = makeUser("John", 30);
//   alert(user.name); // John

// function makeUser(name, age) {
//     return {
//       name, // same as name: name
//       age,  // same as age: age
//       // ...
//     };
//   }

// let user = {
//     name,  // same as name:name
//     age: 30
//   };

// these properties are all right
// let obj = {
//     for: 1,
//     let: 2,
//     return: 3
//   };
//   alert( obj.for + obj.let + obj.return );

// let obj = {
//     0: "test" // same as "0": "test"
//   };
//   // both alerts access the same property (the number 0 is converted to string "0")
//   alert( obj["0"] ); // test
//   alert( obj[0] ); // test (same property)

// let user = { name: "John", age: 30 };
// alert( "age" in user ); // true, user.age exists
// alert( "blabla" in user ); // false, user.blabla doesn't exist

// let user = { age: 30 };
// let key = "age";
// alert( key in user );

// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
// };
// for (let key in user) {
//     console.log(key);  // name, age, isAdmin
//     console.log(user[key]); // John, 30, true
// }
