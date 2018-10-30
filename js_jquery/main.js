// JS: JQuery

// Selecting Nodes

// Use the $ function to select nodes.

// $(<css-query>)
// It returns a list of nodes (JQuery list) that contain all of the
// nodes that match the <css-query>, much like <node>.querySelectorAll.

$(".small.black");
$("#purple-container");
$("#purple-container > *");

// $() will always multiple nodes if possible. Use the method
// <jquery-list>.first() to return the first matching node.
$(".shape").first();

// Use <jquery-list>.eq(<node-index>) to a node from the list
// at position <node-index>. This returns the node inside of
// a jquery list allowing to keep using jquery methods on it.

// If you instead use [] to do this, you will get a regular
// node by itself where you won't be able to use jQuery methods.
$(".shape").eq(0);
$(".shape").eq(2);
$(".shape").eq(4);

// Exercise: Try Selection

// 1.
$("button:nth-of-type(2)");
$("button").eq(1);

// 2.
$("li a");

// 3.
$(".blue.circle").length;

// Attributes, Classes & Removal

// 1.

// The following replace the "href" attribute from all anchors in the
// jQuery list with "http://nyan.cat".
$("a").attr("href", "http://nyan.cat");

// When using any method on a jQuery list that performs a change (or a write),
// it will do it for **every node** in the list at once.
// With regular JS, you would have to iterator over the nodes.

// When using methods read on the jQuery list, it will only return a value
// for the first node on the list.

$("a").attr("href"); // returns the value of "href" for the first
// anchor.

// 2. Remove "blue" classes and add "red" class.

// In jQuery, most methods for jQuery list return the jQuery list. This
// means that you can method after method after method.
$(".blue")
  .removeClass("blue")
  .addClass("red");
// In the example above, we remove the class "blue", get the jQuery list,
// then add the class "red"

// Exercise: Practice

// 1. Set the “class” attribute of all anchors
// to “highlight” with attr method.

// This is not the preferred to edit the classes of a node
// unless you want to replace all of the classes at once.
$("a").attr("class", "highlight");
// Otherwise, you should the methods addClass, removeClass and toggleClass.

// 2. Replace all “circle” classes with the “diamond” class.
$(".circle")
  .removeClass("circle")
  .addClass("diamond");

// 3. Remove all shapes in the green & purple container.
$("#green-container, #purple-container").empty();

$("#green-container, #purple-container")
  .children(".shape")
  .remove();

$("#green-container .shape, #purple-container .shape").remove();

// Use the <jquery-list>.html() to read the innerHTML of a node.
// Pass it an argument to replace the contents of that with that argument.
// This replace contents of all nodes in the jquery list at once.
$("#button-1").html(); //  "Button 1"
$("#button-1").html("Launch Doggos");
$("a")
  .html("Nyan Invasion")
  .addClass("highlight")
  .attr("href", "http://nyan.cat");

// Exercise: Practice
// 1. Replace contents of every "td" with "yass"
$("td").html("yass");

// 2. Select parents of all td tags
// <jquery-list>.parent() will return the parents of all
// the nodes in the <jquery-list> without duplicates.
$("td").parent();

// <jquery-list>.parents() unline `parent` will return all ancestors
// of the nodes in the jquery-list without duplicates.
$("td").parents();
// The returned ancestors can be filtered with a css query. This acts
// like <node>.closest(<css-query>) for regular nodes.
$("td").parents("tbody");

// Create, append and prepend nodes

// Use the $ function with a string containing HTML to create
// nodes.

// The below renders the following string into a
// "small blue square" node and returns it in a jQuery list.
$(`<div class="small blue square shape"></div>`);

// Use <jquery-list>.append(<jquery-list>) or <jquery-list>.prepend(<jquery-list>)
// to add a node to another node.

$("#purple-container")
  .append($(`<div class="small blue square shape"></div>`))
  .prepend($(`<div class="small blue square shape"></div>`));

// For more jQuery methods, checkout the documentation:
// https://api.jquery.com/

// Listening for Events

// Any JS that requires the DOM (e.g. listeners, selecting nodes, etc)
// should be executed only once the DOM is fully loaded. To do this,
// use the "DOMContentLoaded" on the "document" object.
document.addEventListener("DOMContentLoaded", () => {
  $(".blue.circle").on("mouseenter", event => {
    console.log("Blue Circle: Go Away!");
  });
});

// The code below is a jQuery shortcut for doing
// document.addEventListener("DOMContentLoaded", () => { })
$(() => {
  $(".blue.circle").on("mouseleave", event => {
    console.log("Blue Circle: Come back!");
  });
});

// Demo: Event Practice

$(() => {
  $("#button-2").on("click", event => {
    const { currentTarget } = event;

    console.log("Disabling button");
    $(currentTarget).attr("disabled", true);
  });

  $("#button-3").on("click", event => {
    $("#button-message").html("Button 3 was clicked");
  });

  $("tr").on("mouseenter", event => {
    const { currentTarget } = event;
    $(currentTarget).addClass("highlight");
  });

  $("tr").on("mouseleave", event => {
    const { currentTarget } = event;
    $(currentTarget).removeClass("highlight");
  });
});
