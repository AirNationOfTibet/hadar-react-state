import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: { 
        name:'Tenzin',
        city: 'Minneapolis',
        zip: '55421'
      },
      userInputs: {
        name: '',
        city:'',
        zip: ''
      }
  }

    //Bind the context of 'this'
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange(event){
  //   console.log(event.target.value);
  //   //do not mutate the state (do not use old)
  //   this.setState({
  //     user: { 
  //       ...this.state.user,
  //       name: event.target.value,
  //     }
  //   })  // this.setState is a built in function from Component.
  // }

  
  // cityChange(event){
  //   this.setState({
  //     user: {
  //       ...this.state.user,
  //       city: event.target.value,

  //     }
  //   })
  // }

 //handleChangeFor does not need a bind because of the arrow function.
  handleChangeFor = (propertyName) => {
    //this is a function that returns a function
    return (event) =>  {
      this.setState({
        userInputs: {
          ...this.state.userInputs,
          [propertyName]: event.target.value,
      }
    })
  }
  }

  /*spread operator* ES6 
  const numberList= [2, 3, 4];
  const newNumber = 5;
  numberList.push(newNumber) DO NOT PUSH IN REACT IT IS A MUTATION

  the spread is  ...

  ... basically removes the brackets

  so:
  const newNumberList =[...numberList, newNumber];
  so this way it is equal to newNumberList = [2,3,4,5];

  now OBJECTS:

  const bowler = {
    name: 'Dane',
    lastBowlingScore: 135,
  }

  (the way to change it badly without spread)
  const newBowler = {
    name: bowler.name,
    lastBowlingScore: 129,
  }

  now with spread: (generally you want the spread first)
  const newBowler = {
    ...bowler,
    lastBowlingScore: 129
  }

  */
  handleSubmit(event){
    event.preventDefault();
    console.log(this.state.user);
    //we want to clear the inputs
    this.setState({
      user:{...this.state.userInputs},
      userInputs: { 
        name:'',
        city: '',
        zip: ''
      }
    })
  }


  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <form onSubmit={this.handleSubmit}>

          <input value={this.state.userInputs.name} onChange={this.handleChangeFor("name")}/><br/>
          You typed {this.state.user.name}<br/>

          <input value={this.state.userInputs.city} onChange={this.handleChangeFor("city")}/><br/>
          You also live in {this.state.user.city}<br/>

          <input value={this.state.userInputs.zip} onChange={this.handleChangeFor("zip")}/><br/>
          Your zip is {this.state.user.zip}<br/>

          <input type="submit" value="submit!" />
        </form>
      </div>
    );
  }
}

export default App;
