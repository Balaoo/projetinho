import React from 'react';
import { Route, Routes } from "react-router-dom";

import FormCliente from './views/cliente/FormCliente';
import FormBarbeiro from './views/barbeiro/FormBarbeiro';
import Home from './views/home/Home';
import FormCorte from './views/corte/FormCorte';

function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="form-cliente" element={ <FormCliente/> } />
                <Route path="form-barbeiro" element={ <FormBarbeiro/> } />
                <Route path="form-corte" element={ <FormCorte/> } />
            </Routes>
        </>
    )
}

export default Rotas
