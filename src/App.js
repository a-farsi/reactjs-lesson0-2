import React, { Component } from "react";
import "./App.css";
import Person from "./Person";

class App extends Component {
  state = {
    persons: [
      { name: "Karouer", age: 24 },
      { name: "Pjhsyue", age: 25 },
      { name: "Xwiayr", age: 29 }
    ],
    showPersons: false
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  deletePersonHandler(personIndex) {
    const newPersons = [...this.state.persons];
    newPersons.splice(personIndex, 1);
    this.setState({ persons: newPersons });
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((pers, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={pers.name}
                age={pers.age}
                key={index}
              ></Person>
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>How to use lists in react</h1>
        <button onClick={this.togglePersonHandler}>toggle persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
