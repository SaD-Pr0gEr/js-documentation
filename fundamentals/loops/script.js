// let i = 0;
// while (i < 3) { // shows 0, then 1, then 2
//   alert( i );
//   i++;
// }

// do while
// let i = 0;
// do {
//     console.log(i)
//     i++;
// } while (i < 3);

// for
// for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
//     console.log(i)
// }
// let i = 0; // we have 'i' already declared and assigned
// for (; i < 3; i++) { // no need for "begin"
//   alert( i ); // 0, 1, 2
// }
// let i = 0;
// for (; i < 3;) {
//   alert( i++ );
// }
// for (;;) {
//     console.log(1)
// }

// let sum = 0;
// while (true) {
//   let value = +prompt("Enter a number", '');
//   if (!value) break; // (*)
//   sum += value;
// }
// alert( 'Sum: ' + sum );

// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) continue;
//   alert(i); // 1, then 3, 5, 7, 9
// }

// for (let i = 0; i < 3; i++) {
//
//   for (let j = 0; j < 3; j++) {
//
//     let input = prompt(`Value at coords (${i},${j})`, '');
//     if (!input) break; // (*)
//   }
// }
// alert('Done!');
