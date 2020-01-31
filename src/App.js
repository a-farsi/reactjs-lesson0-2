import React, { Component } from "react";
import "./App.css";
import Person from "./Person";

class App extends Component {
  state = {
    persons: [
      { id: "aeze", name: "Karouer", age: 24 },
      { id: "dgdaz", name: "Pjhsyue", age: 25 },
      { id: "fkjs", name: "Xwiayr", age: 29 }
    ],
    showPersons: false
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  deletePersonHandler = personIndex => {
    const newPersons = [...this.state.persons];
    newPersons.splice(personIndex, 1);
    this.setState({ persons: newPersons });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    console.log("id is: ", id);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const otherPersons = [...this.state.persons];
    otherPersons[personIndex] = person;
    console.log(otherPersons);
    this.setState({ persons: otherPersons });
    console.log(this.state.persons);
  };

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
                key={pers.id}
                changed={e => {
                  this.nameChangeHandler(e, pers.id);
                }}
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
