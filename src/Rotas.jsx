import React from 'react';
import { Route, Routes } from "react-router-dom";

import Agenda from './views/Agenda/Agenda';
import FormBarbeiro from './views/barbeiro/FormBarbeiro';
import FormCliente from './views/cliente/FormCliente';
import FormCorte from './views/corte/FormCorte';
import Home from './views/home/Home';
import Inicio from './views/inicio/Inicio';
import Inicio2 from './views/inicio2/Inicio2';



function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="form-cliente" element={ <FormCliente/> } />
                <Route path="form-barbeiro" element={ <FormBarbeiro/> } />
                <Route path="form-corte" element={ <FormCorte/> } />
                <Route path="form-inicio" element={ <Inicio/> } />
                <Route path="form-inicio2" element={ <Inicio2/> } />
                <Route path="form-agenda" element={ <Agenda/> } />

            </Routes>
        </>
    )
}

export default Rotas
