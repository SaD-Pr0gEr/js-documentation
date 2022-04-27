// let x = 1;
// x = -x;
// alert(x);
// let x = 23, y = 2;
// alert(y - x);

// Maths
// + - * / % **
// console.log(x + y);
// console.log(x - y * (x + 10));
// console.log(x * y ** (x - 10));
// console.log(x / y + (x / 10));
// console.log(x % y ** (x % 10));
// console.log(x ** y % (x * 10));

// let s = "my" + " " + "string";
// console.log(s + 1);
// console.log(2 + s);
// console.log(2 - "2");
// console.log('6' - "2");
// console.log('6' / 2);

// // No effect on numbers
// let x = 1;
// console.log(+x); // 1
// let y = -2;
// console.log(+y); // -2
//
// // Converts non-numbers
// console.log(+true);
// console.log(+"");

// let apples = "2";
// let oranges = "3";
// both values converted to numbers before the binary plus
// console.log(+apples + +oranges); // 5
// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5

// let a = 1;
// let b = 2;
// let c = 3 - (a = b + 1);
// console.log(a); // 3
// console.log(c); // 0

// let a, b, c;
// a = b = c = 2 + 2;
// console.log(a); // 4
// console.log(b); // 4
// console.log(c); // 4

// let n = 2;
// n += 5; // now n = 7 (same as n = n + 5)
// n *= 2; // now n = 14 (same as n = n * 2)
// console.log(n); // 14

// let n = 2;
// n *= 3 + 5;
// console.log(n) // 16  (right part evaluated first, same as n *= 8)

// let counter = 2;
// counter++;
// console.log(counter);
// counter--;
// console.log(counter);
// ++counter;
// console.log(counter);
// --counter;
// console.log(counter);
// console.log(2 ** counter++);
// console.log(2 * counter++);


//Bitwise-operators
// AND ( & )
// OR ( | )
// XOR ( ^ )
// NOT ( ~ )
// LEFT SHIFT ( << )
// RIGHT SHIFT ( >> )
// ZERO-FILL RIGHT SHIFT ( >>> )

console.log(true & false | false)
console.log(true | false)
console.log(1 ^ false)

// let a = (3 + "4");
// console.log(a); // 7 (the result of 3 + 4)

// for (let a = 1, b = 3, c = a * b; a < 10; a++) {
//     console.log(a * b);
// }

// let a = 1, b = 1;
// let c = ++a; // ?
// let d = b++; // ?
// console.log(c);
// console.log(d);
