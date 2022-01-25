import React from "react";

const NewPersonForm = (props) => (
    <form>
        <h2>Add new number</h2>
        <div>name: <input value={props.newName} onChange={(evt) => props.setNewName(evt.target.value)} /></div>
        <div>number: <input value={props.newNumber} onChange={(evt) => props.setNewNumber(evt.target.value)} /></div>
        <div><button type="submit" onClick={props.handleSubmitClick}>add</button></div>
      </form>
)

export default NewPersonForm