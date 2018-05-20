// MessageHandlerContainer.js
/*
 Código librerías de externos
 */
import React, { Component } from 'react';

/*
 Código Propio y librerías desarrolladas por KDABRA
 */

import './Menu.css';
const __MENU_CONTAINER_CLASS = "menu-container";
const __MENU_ITEM_CLASS = "menu-item";
const __MENU_ITEM_ID = "menu-item-";

class MenuContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options : [
                {
                    'id_menu_item':'start',
                    'label' : '¡Conocer Más!',
                    'icon_src' : '/content/images/cart.svg',
                    'show_message' : 'Quiero conocer tus productos!'
                },
                {
                    'id_menu_item':'opening_hours',
                    'label' : 'Horarios de atención',
                    'icon_src' : '/content/images/hours.svg',
                    'show_message' : '¿En qué horarios trabajás?'
                },
                {
                    'id_menu_item':'talk_agent',
                    'label' : 'At. al Cliente',
                    'icon_src' : '/content/images/chat.svg',
                    'show_message' : 'Me gustaría hablar con un representante.'
                },
                {
                    'id_menu_item':'map',
                    'label' : 'Lugar de Trabajo',
                    'icon_src' : '/content/images/map.svg',
                    'show_message' : '¿En qué zonas trabajás?'
                },
                {
                    'id_menu_item':'contact',
                    'label' : 'Contacto',
                    'icon_src' : '/content/images/contact.svg',
                    'show_message' : '¿Me podrías pasar un número de contacto?'
                },
                {
                    'id_menu_item':'payments',
                    'label' : 'Medios de Pago',
                    'icon_src' : '/content/images/payments.svg',
                    'show_message' : '¿Cuáles son las formas de pago?'
                },
            ]
        };
    }

    handleClick(e, value) {
        e.preventDefault();
        var element;
        const isElement = p => p.id_menu_item === value;
        element = this.state.options.find(isElement);
        this.props.submitMessageMenuItem(value, element.show_message);
    }

    render() {
        return(
            <div className= { __MENU_CONTAINER_CLASS }>
                {
                    this.state.options.map(
                        (element, key) => {
                            return (
                                <div className= { __MENU_ITEM_CLASS }
                                    key= { __MENU_ITEM_ID + key }
                                    onClick= { (e) => this.handleClick(e, element.id_menu_item) }
                                    value= { element.id_menu_item }
                                >
                                    <img
                                        src= { element.icon_src }
                                        key= { __MENU_ITEM_ID + key + '-img'}
                                    />
                                    <span>
                                    {
                                        element.label
                                    }
                                    </span>
                                </div>
                            );
                        }
                    )
                }
            </div>
        );
    }
}

export default MenuContainer;