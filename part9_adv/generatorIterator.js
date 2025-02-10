//The asterisk makes it into a generator
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

let gen = numberGenerator();
let genTwo = numberGenerator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value); //note the undefined result

console.log(genTwo.next().value);
console.log(genTwo.next().value);
