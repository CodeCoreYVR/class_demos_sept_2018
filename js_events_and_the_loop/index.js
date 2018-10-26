// JS: Events & The Loop

// Events

const toxicTim = document.querySelector("#toxic-tim");
const teamSalmon = document.querySelector(".team.salmon");

// <node>.addEventListener(<event-name>, <listener-callback>)
// This method allows us to react to events that occur
// on a node or in the browser.

// It's first arg. is a string that refers to an event name.
// You can get a list of supported event names from:
// https://developer.mozilla.org/en-US/docs/Web/Events

// Its second arg. is a callback named "listener" that
// is called when the event is triggered. Much like setTimeout,
// it is asynchronous.

teamSalmon.addEventListener("click", function(event) {
  // The `event` object contains a host of useful
  // information about the triggered event including
  // the position of the cursor, which modifier where
  // held at the time, which node was clicked, etc.

  console.log(`=======================`);
  console.log("type:", event.type);
  // The `target` property refers to the node that
  // originally triggered the event. In the case of a "click"
  // event, this is the node where the cursor was located
  // at the time the click happened.

  // The `target` will always be a descendent of the
  // `currentTarget` or the `currentTarget`.
  console.log("target:", event.target);

  // The `currentTarget` property refers to the node that
  // that calls the `addEventListener` method.
  console.log("currentTarget:", event.currentTarget);

  // Inside the listener, `this` is set to the
  // the `currentTarget`. Avoid using `this`, because
  // it can easily forced into other values. Use
  // `currentTarget` whenever you use `this`.
  console.log("this:", this);
});

// Exercise: Last in Queue
// document.querySelectorAll(".team .doggo").forEach(node => {
//   node.addEventListener("click", event => {
//     const currentTarget = event.currentTarget;

//     currentTarget.closest(".roster").append(currentTarget);
//   });
// });

// document.querySelector(".teams").addEventListener("click", event => {
//   // Event Delegation
//   const doggo = event.target.closest(".doggo");

//   if (doggo) {
//     doggo.closest(".roster").append(doggo);
//   }
// });

// Demo: Mouse & The Doggo

document.querySelectorAll(".team .doggo").forEach(node => {
  node.addEventListener("dblclick", event => {
    const currentTarget = event.currentTarget;

    // BAD!!!
    // currentTarget.style.filter = "invert(1)";

    // GOOD!!!
    currentTarget.classList.toggle("inverted");
  });
});

const teams = document.querySelector(".teams");

teams.addEventListener("mousedown", event => {
  const doggo = event.target.closest(".doggo");
  if (doggo) {
    doggo.classList.add("rotate180");
  }
});

teams.addEventListener("mouseup", event => {
  const doggo = event.target.closest(".doggo");
  if (doggo) {
    doggo.classList.remove("rotate180");
  }
});

// Form & Input Events

// Demo: Type Loudly
const keySound = () =>
  new Audio(`sounds/vintage-keyboard-${Math.ceil(Math.random() * 5)}.wav`);

document.querySelectorAll("input").forEach(node => {
  node.addEventListener("input", event => {
    // console.log(event);
    const currentTarget = event.currentTarget;
    // To get the user inputed contents of an input, read
    // the value property of the `currentTarget` presuming
    // that it's the input node.
    // console.log(currentTarget.value);
    keySound().play();
  });
});

// Demo: Preview Doggo on Submit
document
  .querySelector("#application-form")
  .addEventListener("submit", event => {
    // Use `event.preventDefault()` method to
    // prevent events from triggering its normal
    // behaviour. This stops anchors & forms from causing
    // the browser to make a request.
    event.preventDefault();

    // console.log("Form submitted!");
    // console.log(event);

    // To easily get all input values from a form's
    // descent nodes, use the FormData constructor
    // with a form node as its argument.
    const form = event.currentTarget;
    const formData = new FormData(form);

    // To get a value of an input from the FormData object,
    // use the `get` method with the `name` of the input field.

    console.log(formData.get("name"));
    console.log(formData.get("picture-url"));
    console.log(formData.get("team-name"));

    // To list all of the data inside of FormData object,
    // you must iterate over it or transform into an array.
    for (let fieldData of formData.entries()) {
      // fieldData is a an array of 2 elements
      // where the first is the `name` of the input and
      // the second is the `value` of the input.
      console.log(fieldData);
    }

    // Transforms formData into an array
    console.log(Array.from(formData.entries()));

    const blankDoggo = document.querySelector(".doggo.blank");

    blankDoggo.style.backgroundImage = `url(${formData.get("picture-url")})`;
    blankDoggo.querySelector("h1").innerText = formData.get("name");
  });

// Keyboard Events

// Demo: Shortcut to Nyancat

document.addEventListener("keydown", event => {
  // console.log(event);

  // Destructuring Assignment
  const { keyCode, key, altKey, ctrlKey, shiftKey, metaKey } = event;
  // const keyCode = event.keyCode;
  // const key = event.key;
  // const altKey = event.altKey;
  // const ctrlKey = event.ctrlKey;
  // const shiftKey = event.shiftKey;
  // const metaKey = event.metaKey;

  console.log(
    "key:",
    key,
    "keyCode:",
    keyCode,
    "altKey:",
    altKey,
    "ctrlKey:",
    ctrlKey,
    "shiftKey:",
    shiftKey,
    "metaKey:",
    metaKey
  );

  if (keyCode === 78 /* n */ && altKey && ctrlKey) {
    console.log("You pressed the correct keys. Here's a 🌟");
    location.href = "http://nyan.cat";
  }
});
