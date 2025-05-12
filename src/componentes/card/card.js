import "./card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="cabecalho" style={{ backgroundColor: props.corPrimaria }}>
        <img src={props.imagem} alt={props.anime}/>
      </div>
      <div className="rodape">
        <h4>{props.anime}</h4>
        {/* <h5>{props.classificação}</h5> */}
      </div>
    </div>
  );
};

export default Card;
