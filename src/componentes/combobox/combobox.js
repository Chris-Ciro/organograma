import "./combobox.css";

const Combobox = (props) => {
  return (
    <div className="combobox">
      <label> {props.label} </label>

      <select value={props.valor} onChange={(event) => props.change(event.target.value)}>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default Combobox;
