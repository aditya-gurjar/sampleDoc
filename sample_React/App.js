import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
	constructor() {
		super();
		this.state = { username: ''};
	}
	myChangeHandler = (event) => {
		this.setState({ username: event.target.value});
	}
	mySubmitHandler = (event) => {
		event.preventDefault();
		let enteredName = this.state.username;
		  if(enteredName=="") {
		    document.getElementById("result").innerHTML = 
		    "Please enter your name in the box before submitting!";
		  } else {
		    document.getElementById("result").innerHTML = 
		    "Hello " + enteredName + "!";
		  }
	}
	render() {
		return (
			<form onSubmit={this.mySubmitHandler} style={{textAlign:"center"}}>
				<h1 style = {{fontFamily:"Georgia"}}>Sample Page</h1> 
    		<h2>Please enter your name in the box below.</h2>
    		<input type="text" id="fname" name="fname" onChange={this.myChangeHandler} /><br /><br />
    		<input type="Submit" /><br /><br />
    		<p id="result"></p>
    	</form>
			);
	}
}


export default App;