"use strict";

var app = {
  title: "Indecision App",
  subtitle: "An application to help you with difficult decisions",
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderIndecisionApp();
  }
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  renderIndecisionApp();
};

var optionsList = function optionsList() {
  return app.options.map(function (item) {
    return React.createElement(
      "li",
      null,
      item
    );
  });
};

// Create remove all button above list 
// onClick -> wipe the array -> rerender


var appRoot = document.getElementById('app');

var numbers = [99, 55, 1000];

var renderIndecisionApp = function renderIndecisionApp() {

  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      "p",
      null,
      app.subtitle
    ),
    React.createElement(
      "p",
      null,
      app.options.length > 0 ? "Here are your options" : "No options"
    ),
    React.createElement(
      "p",
      null,
      app.options.length
    ),
    React.createElement(
      "button",
      { onClick: onRemoveAll },
      "Remove all"
    ),
    React.createElement(
      "ol",
      null,
      /*  Map over app.options getting back and array of lis (set key and text) */
      app.options.map(function (option) {
        return React.createElement(
          "li",
          { key: option },
          "Option: ",
          option
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add option"
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

// create a render function that renders the new jsx 
// Call it right away
// Call it after the options array is added to

renderIndecisionApp();
