import "./forms.css";
import Field from "../fields/field.js";
import Combobox from "../combobox/combobox.js";
import Button from "../button/button.js";

const Forms = () => {
  const rating = ["Excelente", "Muito bom", "Normal", "Ruim", "Horrível"];

  const save = (event) => {
    event.preventDefault();
    console.log("Formulário enviado");
  };

  return (
    <section className="forms">
      <form onSubmit={save}>
        <h2> Preencha os dados para criar o card do anime </h2>
        <Field
          obrigatorio={true}
          label="Anime"
          placeholder="Digite o nome do anime..."
        ></Field>
        {/* <Field obrigatorio={true} label="Classificação" placeholder='Informe a classificação do anime...'></Field> */}
        <Field
          obrigatorio={true}
          label="Imagem"
          placeholder="Informe a URL da imagem do anime..."
        ></Field>
        <Combobox label="Classificação" itens={rating}></Combobox>
        <Button>ENVIAR</Button>
      </form>
    </section>
  );
};

export default Forms;
