import React from 'react';
import { Route, Routes } from "react-router-dom";

import FormBarbeiro from './views/barbeiro/FormBarbeiro';
import FormCliente from './views/cliente/FormCliente';
import FormCorte from './views/corte/FormCorte';
import Home from './views/home/Home';
import Inicio from './views/inicio/Inicio';

function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="form-cliente" element={ <FormCliente/> } />
                <Route path="form-barbeiro" element={ <FormBarbeiro/> } />
                <Route path="form-corte" element={ <FormCorte/> } />
                <Route path="form-inicio" element={ <Inicio/> } />
            </Routes>
        </>
    )
}

export default Rotas
