import Provider from "../contexto/Provider";
import "./App.css";
import Nav from "./Nav";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Pagina1 from "../paginas/Pagina1";
import Pagina2 from "../paginas/Pagina2";
import Pagina3 from "../paginas/Pagina3";
import Pagina4 from "../paginas/Pagina4";
import Pagina5 from "../paginas/Pagina5";
import Pagina6 from "../paginas/Pagina6";
import Error404 from "../paginas/Error404";

const App = () => {
  return (
    <Provider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" />
          <Route path="/pagina1" element={<Pagina1 />} />
          <Route path="/pagina2" element={<Pagina2 />} />
          <Route path="/pagina3" element={<Pagina3 />} />
          <Route path="/pagina4" element={<Pagina4 />} />
          <Route path="/pagina5" element={<Pagina5 />} />
          <Route path="/pagina6" element={<Pagina6 />} />

          <Route path="/paginas/error" element={<Error404 />} />
          <Route path="*" element={<Navigate to="/paginas/error" />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
