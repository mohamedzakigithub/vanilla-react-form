import "./Form.css";
import { useState } from "react";

export default function Index() {
  const [formState, setFormState] = useState({
    name: "",
    age: "",
    email: "",
  });

  function handleChange(evt) {
    const value = evt.target.value;
    setFormState({
      ...formState,
      [evt.target.name]: value,
    });
  }

  return (
    <div className="form">
      <div className="inputSection">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formState.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={formState.age}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formState.email}
          onChange={handleChange}
        />
      </div>

      <div className="outputSection">
        <div className="output">
          <i>Name</i>
          <strong>{formState.name}</strong>
        </div>
        <div className="output">
          <i>Age</i>
          <strong>{formState.age}</strong>
        </div>
        <div className="output">
          <i>Email</i>
          <strong>{formState.email}</strong>
        </div>
      </div>
    </div>
  );
}
