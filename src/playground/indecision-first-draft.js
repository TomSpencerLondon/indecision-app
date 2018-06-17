const app = {
  title: "Indecision App", 
  subtitle: "An application to help you with difficult decisions",
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;
  if(option){
    app.options.push(option);
    e.target.elements.option.value = "";
    renderIndecisionApp();
  }
};

const onRemoveAll = () => {
  app.options = []
  renderIndecisionApp();
}

const optionsList = () => {
  return app.options.map((item) => <li>{item}</li>) 
}

const onMakeDecision = () => {
  const randomNumber = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNumber];
  alert(option);
}; 

// Create remove all button above list 
// onClick -> wipe the array -> rerender


const appRoot = document.getElementById('app');

const numbers = [99, 55, 1000];

const renderIndecisionApp = () => {

  const template = (
    <div>
      <h1>{ app.title }</h1>
      { app.subtitle && <p>{app.subtitle}</p> }
    
      <p>{ app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      
      <button onClick={onRemoveAll}>
      Remove all
      </button>
        
      <ol>
      { /*  Map over app.options getting back and array of lis (set key and text) */
        app.options.map((option) => <li key={option}>{option}</li>)
      }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>
          Add option
        </button>
      </form>
    </div>
    );
    
    ReactDOM.render(template, appRoot);

}



// create a render function that renders the new jsx 
// Call it right away
// Call it after the options array is added to

renderIndecisionApp();