// Create a component VisibilityToggle, render(), constructor bind and default state
// handleToggleVisibility
// visibility ->s false toggle true / false 

class VisibilityToggle extends React.Component {
  
  constructor(props){
    super(props);

    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    
    this.state = {
      title: "Visibility Toggle",
      visibility: false
    };
  }

  handleToggleVisibility(){
    this.setState((prevState)=> {
      return {
        visibility: !prevState.visibility
      };
    });
  }

  render(){
    return(
        <div>
          <h1>{this.state.title}</h1>
          <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? "Hide details" : "Show details"}
          </button>
          
          {this.state.visibility && <p>Hey! These are some details you can now see!</p> }
        </div>
    );
  }

}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const appRoot = document.getElementById('app');

// let visibility = false;

// const toggleVisibility = () => {
//   visibility = !visibility; 
//   renderVisibilityToggle();
//   return visibility;
// }

// const renderVisibilityToggle = () => {

//   const template = (

//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>
//       {visibility ? "Hide details" : "Show details"}
//       </button>
      
//       {visibility && <p>Hey! These are some details you can now see!</p> }
//     </div>
//   )

//   ReactDOM.render(template, appRoot);

// }

// renderVisibilityToggle()