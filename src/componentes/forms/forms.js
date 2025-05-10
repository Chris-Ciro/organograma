import "./forms.css";
import Field from "../fields/field.js";
import Combobox from "../combobox/combobox.js";
import Button from "../button/button.js";
import { useState } from "react";

const Forms = (props) => {
  const rating = ['',"Excelente", "Muito bom", "Normal", "Ruim", "Horrível"];

  const [anime, setAnime] = useState("");
  const [imagem, setImagem] = useState("");
  const [classificação, setClassificação] = useState("");

  const save = (event) => {
    event.preventDefault();
    props.listaAnimeOK({
      anime,
      imagem,
      classificação,
    });
    setAnime("");
    setImagem("");
    setClassificação(""); 
  };

  return (
    <section className="forms">
      <form onSubmit={save}>
        <h2> Preencha os dados para criar o card do anime </h2>
        <Field
          obrigatorio={true}
          label="Anime"
          placeholder="Digite o nome do anime..."
          valor={anime}
          change={(valor) => {
            setAnime(valor);
          }}
        ></Field>
        {/* <Field obrigatorio={true} label="Classificação" placeholder='Informe a classificação do anime...'></Field> */}
        <Field
          obrigatorio={true}
          label="Imagem"
          placeholder="Informe a URL da imagem do anime..."
          valor={imagem}
          change={(valor) => {
            setImagem(valor);
          }}
        ></Field>
        <Combobox
          label="Classificação"
          itens={rating}
          valor={classificação}
          change={(valor) => {
            setClassificação(valor);
          }}
        ></Combobox>
        <Button>ENVIAR</Button>
      </form>
    </section>
  );
};

export default Forms;
