const person = {
  name: "Hitesh",
  greet() {
    console.log(`Hi I am ${this.name}`);
  },
};

person.greet(); //output: Hi I am Hitesh

const greetFunction = person.greet;
greetFunction(); //output: Hi I am undefined - the "this" context isn't passed here

const boundGreet = person.greet.bind({ name: "John" });
boundGreet();
