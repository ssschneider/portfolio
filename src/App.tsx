import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer"
import Header from "./components/header"
import Contato from "./pages/contato"
import Home from "./pages/home"
import Projetos from "./pages/projetos"
import Sobre from "./pages/sobre"

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sobre" element={<Sobre />}/>
        <Route path="/projetos" element={<Projetos />}/>
        <Route path="/contato" element={<Contato />}/>
      </Routes>
      < Footer />
      </BrowserRouter>
      
    </>
  )
}

export default App
