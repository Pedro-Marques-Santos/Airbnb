import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ListHause } from "./components/ListHause";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { ModalSearch } from "./components/ModalSearch";

export function App() {

  const [ stateModalSearch, setStateModalSearch ] = useState(false)

  function handleOnpenModalSearch() {
    setStateModalSearch(true)
  }

  function handleCloseModalSearch() {
    setStateModalSearch(false)
  }

  console.log( stateModalSearch )

  return (
    <>
      <Header openModalSearch={handleOnpenModalSearch} closeModalSearch={handleCloseModalSearch}/>
      <ListHause />
      <Footer />
      <ModalSearch isOpen={stateModalSearch} closeModalSearch={handleCloseModalSearch}/>
      <GlobalStyle />
    </>
  );
}