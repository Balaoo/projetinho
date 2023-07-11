import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Menu } from "semantic-ui-react";

class MenuSistema extends React.Component {

    state = {
        activeItem: 'home'
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        return (
            <>
                <Menu inverted>

                    <Menu.Item
                        name='home'
                        active={this.state.activeItem === 'home'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to='/'
                    />
                    <Menu.Item
                        name='cliente'

                        active={this.state.activeItem === 'cliente'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to='/form-cliente'
                    />

                    <Menu.Item
                        name='cortes'
                        active={this.state.activeItem === 'corte'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to='/form-produto'
                    />
                    
                    <Menu.Menu className='navbar__item--pc'>
                        <Dropdown item text='Produto'>
                            <Dropdown.Menu>
                                <Dropdown.Item 
                                    name='categoria'
                                    active={this.state.activeItem === 'categoria'}
                                    onClick={this.handleItemClick}
                                    text='Categoria de Produto' 
                                    as={Link} 
                                    to='/list-categoria-produto'
                                />
                                <Dropdown.Item
                                    name='produto'
                                    active={this.state.activeItem === 'produto'}
                                    onClick={this.handleItemClick}
                                    text='Produto' 
                                    as={Link} 
                                    to='/list-produto'
                                />
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Menu>

                    <Menu.Item
                        name='barbeiro'
                        active={this.state.activeItem === 'barbeiro'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to='/form-entregador'
                    />
                    <Menu.Item
                        name='inicio'
                        active={this.state.activeItem === 'barbeiro'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to='/form-inicio'
                    />
                    <Menu.Item
                        name='inicio2'
                        active={this.state.activeItem === 'barbeiro'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to='/form-inicio2'
                    />
                    <Menu.Item
                        name='agenda'
                        active={this.state.activeItem === 'barbeiro'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to='/form-agenda'
                    />


                </Menu>
            </>
        )
    }
}

export default MenuSistema;
