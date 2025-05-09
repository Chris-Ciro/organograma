// import { useState } from "react";
import "./field.css";

const Field = (props) => {
  // let valor = "";
  // const [valor, setValor] = useState("");
  const digite = (event) => {
    props.change(event.target.value);
  };
  return (
    <div className="field">
      <label> {props.label} </label>
      <input value={props.valor} onChange={digite} placeholder={props.placeholder} />
    </div>
  );
};

export default Field;
