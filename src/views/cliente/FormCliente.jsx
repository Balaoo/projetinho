import axios from "axios";
import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import { ENDERECO_API } from '../../views/util/Constantes';
import { formatarData } from '../../views/util/Util';

export default function FormCliente() {

    const { state } = useLocation();

    const [idCliente, setIdCliente] = useState();
    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();
    const [dataNascimento, setDataNascimento] = useState();
    const [foneCelular, setFoneCelular] = useState();
    const [foneFixo, setFoneFixo] = useState();

    useEffect(() => {

        if (state != null && state.id != null) {

            axios.get(ENDERECO_API + "api/cliente/" + state.id)
                .then((response) => {

                    setIdCliente(response.data.id)
                    setNome(response.data.nome)
                    setCpf(response.data.cpf)
                    setDataNascimento(formatarData(response.data.dataNascimento))
                    setFoneCelular(response.data.foneCelular)
                    setFoneFixo(response.data.foneFixo)
                })
        }

    }, [state])

    function salvar() {

        let clienteRequest = {

            nome: nome,
            cpf: cpf,
            dataNascimento: dataNascimento,
            foneCelular: foneCelular,
            foneFixo: foneFixo
        }

        if (idCliente != null) { //Alteração:

            axios.put(ENDERECO_API + "api/cliente/" + idCliente, clienteRequest)
                .then((response) => { console.log('Cliente alterado com sucesso.') })
                .catch((error) => { console.log('Erro ao alter um cliente.') })

        } else { //Cadastro:

            axios.post(ENDERECO_API + "api/cliente", clienteRequest)
			.then((response) => { console.log('Cliente cadastrado com sucesso.') })
			.catch((error) => { console.log('Erro ao incluir o cliente.') })
		}
    }

    return (

        <div>

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    {idCliente === undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Cliente &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                    }
                    {idCliente != undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Cliente &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
                    }

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    onInvalid={e => e.target.setCustomValidity("Prenchimento obrigatório")}
                                    onInput={F => F.target.setCustomValidity('')}
                                    fluid
                                    label='Nome'
                                    maxLength="100"
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'>
                                    <InputMask
                                        required
                                        onInvalid={e => e.target.setCustomValidity("Prenchimento obrigatório")}
                                        onInput={F => F.target.setCustomValidity('')}
                                        mask="999.999.999-99"
                                        value={cpf}
                                        onChange={e => setCpf(e.target.value)}
                                    />
                                </Form.Input>

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Fone Celular'
                                    width={6}>
                                    <InputMask
                                        mask="(99) 9999.9999"
                                        value={foneCelular}
                                        onChange={e => setFoneCelular(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fone Fixo'
                                    width={6}>
                                    <InputMask
                                        mask="(99) 9999.9999"
                                        value={foneFixo}
                                        onChange={e => setFoneFixo(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Data Nascimento'
                                    width={6}
                                >
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                        value={dataNascimento}
                                        onChange={e => setDataNascimento(e.target.value)}
                                    />
                                </Form.Input>

                            </Form.Group>

                        </Form>

                        <div style={{ marginTop: '4%' }}>

                            <Form.Group widths='equal' style={{ marginTop: '4%', justifyContent: 'space-between' }}>

                                <Button
                                    tabIndex='8'
                                    label='Voltar'
                                    circular
                                    color='orange'
                                    icon='reply'
                                    as={Link}
                                    to='/list-cliente'
                                />

                                <Button
                                    tabIndex='9'
                                    label='Salvar'
                                    circular
                                    color='blue'
                                    icon='save'
                                    floated='right'
                                    onClick={() => salvar()}
                                />

                            </Form.Group>

                        </div>

                    </div>

                </Container>
            </div>
        </div>

    );

}