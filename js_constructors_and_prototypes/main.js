// Demo: ArrayExtras

function first(arr) {
  return arr[0];
}

const arrayExtras = {
  // `last` is a property whose value is
  // a function. This makes it a method.
  last: function last(arr) {
    return arr[arr.length - 1];
  },
  // You can assign an existing function to a property
  // to make a method.
  first: first,
  // You can use a short-hand syntax to create a method
  // where the `function` keyword is not necessary.
  // You can only use this when creating methods.
  take(arr, n) {
    return arr.slice(0, n);
  },
  // 👆 short-hand syntax for 👇
  // take: function take(arr, n) {
  //   return arr.slice(0, n);
  // }
  // Exercise: Add toObject
  // [['a', 1], ['b', 2], ['c', 3], ['a', 10]]
  toObject(arr) {
    let newObj = {};

    for (let value of arr) {
      newObj[value[0]] = value[1];
    }

    return newObj;
  }
};

const a = [["a", 1], ["b", 2], ["c", 3], ["a", 10]];

// Keyword "this"

// Demo: A Counter
// counter.set(10).inc().inc().inc().now()
// Exercise: Configurable Steps
const counter = {
  count: 0,
  step: 1,
  inc() {
    this.count += this.step;
    return this;
    // Increment a count by one
  },
  dec() {
    this.count -= this.step;
    return this;
  },
  now() {
    return this.count;
  },
  set(newCount) {
    this.count = newCount;
    return this;
  },
  setStep(newStep) {
    this.step = newStep;
    return this;
  }
};

// counst counter2 = Object.assign({}, counter);

// Demo: Can

if (false) {
  console.log("Inside script:", this); // the global Window object

  function whatsMyThis() {
    return this;
  }

  console.log("Inside regular function:", whatsMyThis());

  const can = {
    taloupe: "Hello!",
    touchThis() {
      return this;
    }
  };

  console.log("Inside can.touchThis():", can.touchThis());

  const cant = {
    amaran: "Things!",
    touchThis: can.touchThis,
    whatIsIt: whatsMyThis
  };

  console.log("Inside cant.touchThis():", cant.touchThis());
  console.log("Inside cant.whatIsIt():", cant.whatIsIt());
}
// Constructors

if (false) {
  function Doggo(name, age) {
    // console.log("Inside Doggo as a constructor:", this);
    // When a function is used as a constructor,
    // its `this` is an empty object that is an instance
    // of that constructor.
    this.name = name;
    this.age = age;
    // this.bark = ...
  }

  // Exercise: Doggo Learned Bark

  Doggo.prototype.bark = function() {
    return `${this.name} barks "Bork-bork!"`;
  };

  // const sonicSam = new Doggo("Sonic Sam", 7);

  function DoggoFighter(name, age, specialAbility) {
    // Methods and properties that we defined on `this`
    // inside of the constructor should be unique
    // to instances of that constructor.

    // Shared methods should go on the `prototype`.
    this.name = name;
    this.age = age;
    this.specialAbility = specialAbility;
  }

  // This method will set the prototype (i.e. __proto__) of
  // `DoggoFighter.prototype` to `Doggo.prototype`.
  Object.setPrototypeOf(DoggoFighter.prototype, Doggo.prototype);

  DoggoFighter.prototype.fight = function(doggo) {
    const winner = [this.name, doggo.name][Math.floor(Math.random() * 2)];
    return `${winner} won!`;
  };

  const bobBuilder = new Doggo("Bob Builder", 11);
  const sonicSam = new DoggoFighter("Sonic Sam", 8, "Screech!");

  // This means that DoggoFighter instances will inherit
  // from their prototype which will inherit from
  // Doggo's prototype.

  // The prototype of a constructor is not the same
  // as the prototype of the objects it creates
  Doggo.__proto__ === Doggo.prototype; // false;
  sonicSam.__proto__ === Doggo.prototype; // true;

  // The prototype of a constructor (being a function)
  // is the prototype of all functions
  Function.prototype === Doggo.__proto__; // true
}

// Demo: Doggos go to Class

class Doggo {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  bark() {
    return `${this.name} barks "Bork-Bork!"`;
  }
}

class DoggoFighter extends Doggo {
  // Doggo is the superclass of DoggoFighter
  constructor(name, age, specialAbility) {
    // `super` calls the `constructor` of the extended
    // class Doggo.
    super(name, age);
    this.specialAbility = specialAbility;
  }

  fight(doggo) {
    const winner = [this.name, doggo.name][Math.floor(Math.random() * 2)];
    return `${winner} won!`;
  }
}
