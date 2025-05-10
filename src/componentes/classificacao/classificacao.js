// import Card from "../card/card";
import Card from "../card/card";
import "./classificacao.css";

const Classificacao = (props) => {
  return (
    <section
      className="classificacao"
      style={{ backgroundColor: props.corSecundaria }}
    >
      <h3 style={{ borderColor: props.corPrimaria }}>{props.anime}</h3>
      <div className="cards">
        {props.listaAnime.map((card) => (
          <Card
            anime={card.anime}
            imagem={card.imagem}
            classificação={card.classificação}
          />
        ))}
      </div>
    </section>
  );
};

export default Classificacao;
