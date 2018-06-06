console.log("App.js is running!");


// JSX JavaScript XML

var template = (
<div>
  <h1>Indecision App</h1>
  <p>This is some info</p>
  <ol>
    <li>Element One</li>
    <li>Element Two</li>
  </ol>
</div>
);

var templateTwo = (
  <div>
    <h1>Tom Spencer</h1>
    <p>Age: 39</p>
    <p>Location: Brighton</p>
  </div>
)

// Create a templateTwo variable (JSX expression)
// div h1 -> Tom Spencer p -> age: p -> location: render templateTwo instead of template

var appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot);