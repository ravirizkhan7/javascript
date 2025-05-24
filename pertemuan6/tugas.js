let kelipatan = 12;

if (kelipatan % 3 === 0 && kelipatan % 5 === 0) {
  console.log("FizzBuzz");
} else if (kelipatan % 3 === 0) {
  console.log("Fizz");
} else if (kelipatan % 5 === 0) {
  console.log("Buzz");
} else {
  console.log("Tidak ada kelipatan 3 atau 5");
}
