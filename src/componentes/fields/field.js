import "./field.css";

const Field = (props) => {
  let valor = "";
  const digite = (event) => {
    valor = event.target.value;
    // console.log(valor);
  };
  return (
    <div className="field">
      <label> {props.label} </label>
      <input value={valor} onChange={digite} placeholder={props.placeholder} />
    </div>
  );
};

export default Field;
