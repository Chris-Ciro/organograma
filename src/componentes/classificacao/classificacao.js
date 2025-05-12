// import Card from "../card/card";
import Card from "../card/card";
import "./classificacao.css";

const Classificacao = (props) => {
  return (
    props.listaAnime.length > 0 && // Verifica se a lista de animes não está vazia
    <section
      className="classificacao"
      style={{ backgroundColor: props.corSecundaria }}
    >
      <h3 style={{ borderColor: props.corPrimaria }}>{props.anime}</h3>
      <div className="cards">
        {props.listaAnime.map((card) => (
          <Card
            key={card.anime}
            corPrimaria={props.corPrimaria}
            corSecundaria={props.corSecundaria} 
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
