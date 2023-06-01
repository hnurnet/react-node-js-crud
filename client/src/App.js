import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Read from "./pages/Read";
import Create from "./pages/Create";
import Update from "./pages/Update";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/read/:id" element={<Read />}/>
    <Route path="/create" element={<Create />}/>
    <Route path="/edit/:id" element={<Update />}/>
    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
