import React, { useState } from "react";
import { useHistory } from "react-router-dom";


function UserForm({addColor}) {

  const [form, updateForm] = useState({name: "", hex:"#ffffff"}); //setting initial vals
  const history = useHistory(); //getting useHistory

  function handleChange(e) {
    e.persist(); //synthetic evt no longer pooled so this doesn't do anything actually
    updateForm(f => ({ ...f, [e.target.name]: e.target.value })); //updating form with user's chosen vals
  }

  function handleSubmit(e) {
    e.preventDefault();
    addColor({ [form.name]: form.hex }); //inputting vals into func handed down from App
    history.push("/colors"); //pushing colors onto history
  }

  const {hex, name} = form; //destructuring form

  return (
    <div className="NewColor">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Color name</label>
          <input
            name="name"
            id="name"
            placeholder="Enter color name"
            onChange={handleChange}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="hex">Color value</label>
          <input
            type="color"
            name="hex"
            id="hex"
            onChange={handleChange}
            value={hex}
          />
        </div>
        <input type="Submit" value="Add this color" readOnly />
      </form>
    </div>
  );
}

export default UserForm;
