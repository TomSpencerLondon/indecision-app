class IndecisionApp extends React.Component {
  render(){
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";
    const options = ["Thing one", "Thing two", "Thing four"];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    );
  }
}


class Header extends React.Component {
  render(){
    return (
      <div>
      <h1>{this.props.title}</h1>
      <h2>{this.props.subtitle}</h2>
      </div>
    );
  } 
}

class Action extends React.Component {

  handlePick(){
    alert('handlePick');
  }

  render(){
    return(
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    )
  }
}

// Add removeAll button to Options component 
// Set up handleRemoveAll alert message 
// Set up onClick to fire the method

class Options extends React.Component {

  constructor(props){
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }

  handleRemoveAll(){
    console.log(this.props.options)
    // alert('handleRemoveAll')
  }

  render(){
    return(
      <div>
      <button onClick={this.handleRemoveAll}>Remove All</button>
      {this.props.options.map((option) => <Option key={option} optionText={option}/>)}
      </div>
    );
  }
}

class Option extends React.Component {
  render(){
    return(
      <div>
        Option: {this.props.optionText}
      </div>
    );
  }
}

// Step one set up the form with the text input and submit button 
// Step Two wire up onSubmit - call a method 
// Define handleAddOption -> fetch value typed, -> If value then alert

class AddOption extends React.Component {

  handleAddOption(e){
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if(option){
      alert(option);
    }
  }

  render(){
    return(
      <div>
      <form onSubmit={this.handleAddOption}>
      <input type="text" name="option" />
      <button>
        Add option
      </button>
      </form>
      </div>
    );
  }
}





ReactDOM.render(<IndecisionApp />, document.getElementById('app'));