import { useState } from "react";
import Banner from "./componentes/banner/banner.js";
import Forms from "./componentes/forms/forms.js";
import Classificacao from "./componentes/classificacao/classificacao.js";

function App() {
  const cards = [
    {
      classificação: "Excelente",
      corPrimaria: "rgb(203, 144, 183)",
      corSecundaria: "rgb(84, 19, 98)",
    },
    {
      classificação: "Muito bom",
      corPrimaria: "rgb(199, 147, 187)",
      corSecundaria: "rgb(172, 115, 202)",
    },
    {
      classificação: "Normal",
      corPrimaria: "rgb(53, 134, 143)",
      corSecundaria: "rgb(61, 82, 214)",
    },
    {
      classificação: "Ruim",
      corPrimaria: "rgb(151, 178, 207)",
      corSecundaria: "rgb(81, 141, 159)",
    },
    {
      classificação: "Horrível",
      corPrimaria: "rgb(173, 102, 71)",
      corSecundaria: "rgb(178, 53, 29)",
    },
  ];

  const [listaAnime, setListaAnime] = useState([]);
  const novaLista = (anime) => {
    setListaAnime([...listaAnime, anime]);
  };

  return (
    <div className="App">
      <Banner />
      <Forms listaAnimeOK={(anime) => novaLista(anime)}></Forms>

      {cards.map((card) => (
        <Classificacao
          key={card.classificação}
          anime={card.classificação}
          corPrimaria={card.corPrimaria}
          corSecundaria={card.corSecundaria}
          listaAnime={listaAnime.filter((anime) => anime.classificação === card.classificação)}
        />
      ))}
    </div>
  );
}

export default App;
