import React from 'react';
import { Route, Routes } from "react-router-dom";

import Agenda from './views/Agenda/Agenda';
import FormCategoriaProduto from './views/categoriaproduto/FormCategoriaProduto';
import ListCategoriaProduto from './views/categoriaproduto/ListCategoriaProduto';
import FormCliente from './views/cliente/FormCliente';
import ListCliente from './views/cliente/ListCliente';
import FormEntregador from './views/entregador/FormEntregador';
import ListEntregador from './views/entregador/ListEntregador';
import Home from './views/home/Home';
import Inicio from './views/inicio/Inicio';
import Inicio2 from './views/inicio2/Inicio2';
import FormProduto from './views/produto/FormProduto';
import ListProduto from './views/produto/ListProduto';


function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="list-cliente" element={<ListCliente />} />
                <Route path="form-cliente" element={<FormCliente />} />
                <Route path="list-entregador" element={<ListEntregador />} />
                <Route path="form-entregador" element={<FormEntregador />} />
                <Route path="list-produto" element={<ListProduto />} />
                <Route path="form-produto" element={<FormProduto />} />
                <Route path="form-inicio" element={<Inicio />} />
                <Route path="form-inicio2" element={<Inicio2 />} />
                <Route path="form-agenda" element={<Agenda />} />

                <Route  path="/list-categoria-produto"  element={ <ListCategoriaProduto /> }  />

                <Route path="/form-categoria-produto" element={<FormCategoriaProduto />  }/>
            </Routes>
        </>
    )
}

export default Rotas
