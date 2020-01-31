import React from "react";

const Person = props => {
  return (
    <div>
      <h2 onClick={props.click}>
        I'm a person, my name is {props.name} and my age is {props.age}
      </h2>
      <input
        type="text"
        onChange={props.changed}
        value={props.name}
      ></input>
    </div>
  );
};

export default Person;
