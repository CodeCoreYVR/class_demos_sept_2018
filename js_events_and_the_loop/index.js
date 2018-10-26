// JS: Document Object Model

// Selecting Nodes

// In the following, <node> can be replaced with
// any node object or the `document` object.

// <node>.querySelector(<css-query>)
// Finds the **first** node that matches the <css-query>.
// Replace <css-query> with any valid CSS selector written
// as a string.

const toxicTim = document.querySelector("#toxic-tim");
const teamSalmon = document.querySelector(".team.salmon");
const firstDiv = document.querySelector("div");
// returns only the first div in the document

// <node>.querySelectorAll(<css-query>)
// Finds **all** nodes that match the <css-query>.
// It returns nodes in object called a NodeList which can
// be iterated with `for .. of` loops and the `.forEach()`
// method.

const allDoggoFighters = document.querySelectorAll(".doggo.fighter");
const allDivs = document.querySelectorAll("div");

// Iteration example:

// for (let node of allDoggoFighters) {
//   console.log(node.id);
// }

// allDoggoFighters.forEach(node => console.log(node.id));

// Exercise: Picking Doggos

// 1. Select Moneybags Michael & Larry The Lion

document.querySelectorAll("#moneybags-michael, #larry-the-lion");

// 2. Select all Team Teal Doggos, but the first

document.querySelectorAll(".team.teal .doggo:not(:first-child)");

// 3. Select the second doggo in every team

document.querySelectorAll(".team .doggo:nth-child(2)");

// Selecting in the Family

// To select siblings nodes, use the properties:

toxicTim.nextElementSibling;
toxicTim.previousElementSibling;

// They return `null` if no sibling can be found.

// Use the `children` property to select the children node of
// a node. It returns an array-like object (i.e. HTMLCollection)
// of Nodes.

teamSalmon.children[1].children;

// Use `parentElement` property to return the parent node of a node.

toxicTim.parentElement; // <div class=​"roster">​…​</div>​
toxicTim.parentElement.parentElement; // <div class=​"team salmon">​…​</div>​
toxicTim.parentElement.parentElement.parentElement; // <div class=​"teams">​…​</div>​

// <node>.matches(<css-query>)
// Returns `true` if <node> matches the <css-query>. It returns
// `false` otherwise.

toxicTim.matches("h1"); // false
toxicTim.matches(".doggo"); // true
toxicTim.matches("div"); // true
toxicTim.matches(".team div"); // true

// <node>.closest(<css-query>)
// Searches all ancestor <node> including itself
// for first that matches <css-query>. It returns `null`
// if no ancestors matches <css-query>. Like a reverse of
// .querySelector(...).

// Manipulating Nodes

// Changing Inline Styles

// Nodes have a `style` property that can be sued to
// manipulate the inline styles of an HTML element.
// This is the same as adding CSS to the "style"
// attribute of a tag.

// With the . notation, use camelCase to refer
// CSS property names.

// toxicTim.style.border = "20px solid aquamarine";
// toxicTim.style.backgroundImage = "url(images/paws.jpg)";

// With the [] notation, you can write the CSS property
// names in kebab-case.

// toxicTim.style["border-radius"] = "10px";

// To read the HTML text inside of a node, use the <node>.innerHTML
// property.

teamSalmon.innerHTML;

// Assigning to the property will replace the HTML inside of the
// node with the value assigned. You can assign strings that look like
// HTML and they will be processed as such.

// teamSalmon.innerHTML = "<h1>HI HI!</h1>";

// Use <node>.outerHTML to get the HTML that's inside <node>
// including itself.

toxicTim.outerHTML;

// Reading and Writing to HTML attributes

// All common HTML attributes that are part of the HTML specification
// are accessible as properties of Nodes. You read them or assign them
// to change their values.

toxicTim.id; // "toxic-tim"
toxicTim.class; // undefined (doesn't exist use the one below)
toxicTim.className; // "doggo fighter"
toxicTim.href; // for anchors
toxicTim.name; // for inputs

// To create your own custom attributes, you must use alternate
// methods.

// <node>.getAttribute(<attribute-name>)
// Returns the value of an HTML attribute with name
// <attribute-name> from <node> even if its a custom
// attribute.

toxicTim.getAttribute("id"); // "toxic-tim"
toxicTim.getAttribute("class"); // "doggo fighter"

// <node>.setAttribute(<attribute-name>, <attribute-value>)
// Sets or updates an attribute of name <attribute-name> with
// value of <attribute-value>.

toxicTim.setAttribute("data-method", "delete");
toxicTim.setAttribute("data-target", "#navbar-nav");
toxicTim.setAttribute("favourite-wizard", "Gandalf");

// <node>.removeAttribute(<attribute-name>)
// Removes attribute named <attribute-name> from <node>

// Manipulating Classes

// <node>.classList is property that returns a DOMTokenList.
// This is an array-like object containing all the classes of
// a Node. You can use methods on this object to add, remove
// or toggle individual classes.

// <node>.classList.add(<class-name>, <class-name>, ...)
// Adds all <class-name> arguments as classes to <node>

toxicTim.classList.add("labourer");
toxicTim.classList.add("starfighter", "mutant");

// <node>.classList.remove(<class-name>, <class-name>, ...)
// Remove all <class-name> arguments from <node>'s classes.

toxicTim.classList.remove("labourer", "mutant");
toxicTim.classList.remove("starfighter");

// <node>.classList.toggle(<class-name>)
// Removes <class-name> if exists. Adds it if doesn't.

toxicTim.classList.toggle("invisible"); // adds it
toxicTim.classList.toggle("invisible"); // removes it

// Remove Nodes

// <node>.remove()
// Removes <node> from the DOM
// toxicTim.remove()

// Exercise: Vandalise the Arena

// 1.

// for (let node of document.querySelectorAll(".teams > *")) {
//   node.style.backgroundColor = "fuchsia";
// }

// 2.

// document.querySelectorAll(".doggo").forEach(node => {
//   node.innerHTML = `<h1>Rob The Slob</h1>`;

//   // 3.

//   node.style.backgroundImage = `url(https://accelerator-origin.kkomando.com/wp-content/uploads/2013/11/cat.jpg)`;
// });

// Creating Nodes

// document.createElement(<tag-name>)
// To create a node, use the method above with the name
// of the tag (e.g. "p", "div", "form", etc.)

const drillBitDarel = document.createElement("div");

drillBitDarel.id = "drill-bit-darel";
drillBitDarel.classList.add("doggo", "fighter");
drillBitDarel.style.backgroundImage = `url(./images/drill_bit_darel.jpg)`;

// <parent-node>.append(<child-node>, <child-node>, ...)
// Adds all <child-node> arguments as the last children of <parent-node>

const h1 = document.createElement("h1");
h1.innerText = "Drill Bit Darel";
drillBitDarel.append(h1);

// teamSalmon is node that's already in the DOM. Appending drillBitDarel
// to it will add the node to the DOM.
teamSalmon.querySelector(".roster").append(drillBitDarel);

// <parent-node>.prepend(<child-node>, <child-node>, ...)
// Adds all <child-node> arguments as the first children of <parent-node>
teamSalmon.querySelector(".roster").prepend(drillBitDarel);

// <node>.cloneNode(<deep?>)
// To make copies of <node>, use the cloneNode method.
// This will duplicate a node without its descendents unless
// `true` is passed as argument.

teamSalmon
  .querySelector(".roster")
  .prepend(
    drillBitDarel.cloneNode(),
    drillBitDarel.cloneNode(true),
    drillBitDarel.cloneNode(),
    drillBitDarel.cloneNode(true)
  );

// <parent-node>.insertBefore(<child-node>, <child-sibling-node>)
// https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore

// <node>.insertAdjacentElement(<position>, <inserted-node>)
// https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
