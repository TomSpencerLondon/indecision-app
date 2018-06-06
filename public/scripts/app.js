"use strict";

console.log("App.js is running!");

// JSX JavaScript XML

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Indecision App"
  ),
  React.createElement(
    "p",
    null,
    "This is some info"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Element One"
    ),
    React.createElement(
      "li",
      null,
      "Element Two"
    )
  )
);

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Tom Spencer"
  ),
  React.createElement(
    "p",
    null,
    "Age: 39"
  ),
  React.createElement(
    "p",
    null,
    "Location: Brighton"
  )
);

// Create a templateTwo variable (JSX expression)
// div h1 -> Tom Spencer p -> age: p -> location: render templateTwo instead of template

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
