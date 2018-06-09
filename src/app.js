const app = {
  title: "Indecision App", 
  subtitle: "An application to help you with difficult decisions",
  options: ["One", "Two"]
}

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;
  if(option){
    app.options.push(option);
    e.target.elements.option.value = "";
  }
}

const template = (
<div>
  <h1>{ app.title }</h1>
  { app.subtitle && <p>{app.subtitle}</p> }
  <p>{ app.options.length > 0 ? "Here are your options" : "No options"}</p>
  <ol>
    <li>Element One</li>
    <li>Element Two</li>
  </ol>
  <form onSubmit={onFormSubmit}>
    <input type="text" name="option" />
    <button>
      Add option
    </button>
  </form>
</div>
);

const appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot);
