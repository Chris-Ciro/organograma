import './field.css'

const Field = (props) =>{
    return (
        <div className="field">
            <label> {props.label} </label>
            <input required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )

}

export default Field