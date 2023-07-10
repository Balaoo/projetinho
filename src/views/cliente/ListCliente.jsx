import axios from 'axios';
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Header, Menu,Form, Segment, Icon, Modal, Table } from 'semantic-ui-react';
import { ENDERECO_API } from '../../views/util/Constantes';
import { formatarData } from '../../views/util/Util';

class ListCliente extends React.Component {

    state = {

        openModal: false,
        idRemover: null,
        listaClientes: []

    }

    componentDidMount = () => {

        this.carregarLista();

    }

    carregarLista = () => {

        axios.get(ENDERECO_API + "api/cliente")
            .then((response) => {

                this.setState({
                    listaClientes: response.data
                })
            })

    }

    confirmaRemover = (id) => {

        this.setState({
            openModal: true,
            idRemover: id
        })

    }

    setOpenModal = (val) => {

        this.setState({
            openModal: val
        })

    };

    remover = async () => {

        await axios.delete(ENDERECO_API + 'api/cliente/' + this.state.idRemover)
            .then((response) => {

                this.setState({ openModal: false })
                console.log('Cliente removido com sucesso.')

                axios.get(ENDERECO_API + "api/cliente")
                    .then((response) => {

                        this.setState({
                            listaClientes: response.data
                        })
                    })
            })
            .catch((error) => {
                this.setState({ openModal: false })
                console.log('Erro ao remover um cliente.')
            })
    };

    render() {
        return (
            <div>



                <div style={{ marginTop: '3%' }}>

                    <Container textAlign='justified' >

                        <h2> Produto </h2>

                        <Divider />

                        <div style={{ marginTop: '4%' }}>

                            <Menu compact>
                                <Menu.Item
                                    name='menuFiltro'
                                    active={this.state.menuFiltro === true}
                                    onClick={this.handleMenuFiltro}
                                >
                                    <Icon name='filter' />
                                    Filtrar
                                </Menu.Item>
                            </Menu>

                            <Button
                                label='Novo'
                                circular
                                color='orange'
                                icon='clipboard outline'
                                floated='right'
                                as={Link}
                                to='/form-produto'
                            />

                            {this.state.menuFiltro ?

                                <Segment>
                                    <Form className="form-filtros">
                                        <Form.Input
                                            icon="search"
                                            value={this.state.codigo}
                                            onChange={this.handleChangeCodigo}
                                            label='Código do Produto'
                                            placeholder='Filtrar por Código do Produto'
                                            labelPosition='left'
                                            width={4}
                                        />
                                        <Form.Group widths='equal'>
                                            <Form.Input
                                                icon="search"
                                                value={this.state.titulo}
                                                onChange={this.handleChangeTitulo}
                                                label='Título'
                                                placeholder='Filtrar por título'
                                                labelPosition='left'
                                            />

                                            <Form.Select
                                                placeholder='Filtrar por Categoria'
                                                label='Categoria'
                                                options={this.state.listaCategoriaProduto}
                                                value={this.state.idCategoria}
                                                onChange={this.handleChangeCategoriaProduto}
                                            />
                                        </Form.Group>
                                    </Form>
                                </Segment> : ""
                            }
                            <br /><br /><br />

                            <Table color='orange' sortable celled>

                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Nome</Table.HeaderCell>
                                        <Table.HeaderCell>CPF</Table.HeaderCell>
                                        <Table.HeaderCell>Data de Nascimento</Table.HeaderCell>
                                        <Table.HeaderCell>Fone Celular</Table.HeaderCell>
                                        <Table.HeaderCell>Fone Fixo</Table.HeaderCell>
                                        <Table.HeaderCell textAlign='center'>Ações</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>

                                    {this.state.listaClientes.map(cliente => (

                                        <Table.Row key={cliente.id}>
                                            <Table.Cell>{cliente.nome}</Table.Cell>
                                            <Table.Cell>{cliente.cpf}</Table.Cell>
                                            <Table.Cell>{formatarData(cliente.dataNascimento)}</Table.Cell>
                                            <Table.Cell>{cliente.foneCelular}</Table.Cell>
                                            <Table.Cell>{cliente.foneFixo}</Table.Cell>
                                            <Table.Cell textAlign='center'>

                                                <Button
                                                    inverted
                                                    circular
                                                    color='green'
                                                    title='Clique aqui para editar os dados deste cliente'
                                                    icon>
                                                    <Link to="/form-cliente" state={{ id: cliente.id }} style={{ color: 'green' }}> <Icon name='edit' /> </Link>
                                                </Button> &nbsp;

                                                <Button
                                                    inverted
                                                    circular
                                                    color='red'
                                                    title='Clique aqui para remover este cliente'
                                                    icon
                                                    onClick={e => this.confirmaRemover(cliente.id)}>
                                                    <Icon name='trash' />
                                                </Button>

                                            </Table.Cell>
                                        </Table.Row>
                                    ))}

                                </Table.Body>
                            </Table>
                        </div>
                    </Container>
                </div>

                <Modal
                    basic
                    onClose={() => this.setOpenModal(false)}
                    onOpen={() => this.setOpenModal(true)}
                    open={this.state.openModal}
                >
                    <Header icon>
                        <Icon name='trash' />
                        <div style={{ marginTop: '5%' }}> Tem certeza que deseja remover esse registro? </div>
                    </Header>
                    <Modal.Actions>
                        <Button basic color='red' inverted onClick={() => this.setOpenModal(false)}>
                            <Icon name='remove' /> Não
                        </Button>
                        <Button color='green' inverted onClick={() => this.remover()}>
                            <Icon name='checkmark' /> Sim
                        </Button>
                    </Modal.Actions>
                </Modal>

            </div>
        )
    }
}

export default ListCliente;
