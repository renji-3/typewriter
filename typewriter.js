const sentence = "hello there from lighthouse labs";



let time = 100;

// let type = function() {
//   for (const char of sentence) {
//     process.stdout.write(char);
//   }
//   time += 50;
// };




for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, time);
  time += 50;
}


