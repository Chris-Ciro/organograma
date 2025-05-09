import { useState } from "react";
import Banner from "./componentes/banner/banner.js";
import Forms from "./componentes/forms/forms.js";

function App() {

    const[listaAnime, setListaAnime] = useState([]); 
    const novaLista = (anime) => {
      console.log(anime);
        setListaAnime([...listaAnime, anime]);
    };


  return (
    <div className="App">
      <Banner />
      <Forms listaAnimeOK={ anime => novaLista(anime)}></Forms>
    </div>
  );
}

export default App;
