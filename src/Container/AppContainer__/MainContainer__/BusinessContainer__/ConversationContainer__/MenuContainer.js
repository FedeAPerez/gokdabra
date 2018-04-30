// MessageHandlerContainer.js
/*
 Código librerías de externos
 */
import React, { Component } from 'react';

/*
 Código Propio y librerías desarrolladas por KDABRA
 */
const __MENU_CONTAINER_CLASS = "menu-container";
const __MENU_ITEM_CLASS = "menu-item";
const __MENU_ITEM_ID = "menu-item-";

class MenuContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options : [
                {
                    'id_menu_item':'opening_hours',
                    'label' : 'Horarios de atención',
                    'icon_src' : '/content/images/hours.svg'
                },
                {
                    'id_menu_item':'talk_agent',
                    'label' : 'At. al Cliente',
                    'icon_src' : '/content/images/chat.svg'
                },
                {
                    'id_menu_item':'map',
                    'label' : 'Lugar de Trabajo',
                    'icon_src' : '/content/images/map.svg'
                },
                {
                    'id_menu_item':'contact',
                    'label' : 'Contacto',
                    'icon_src' : '/content/images/contact.svg'
                },
            ]
        }
    }

    handleClick(e, value) {
        e.preventDefault();
        var showMessage;
        switch(value) {
            case "map":
                showMessage = "¿En qué zonas trabajás?"
                break;
            case "talk_agent":
                showMessage = "Me gustaría hablar con un representante."
                break;
            case "opening_hours":
                showMessage = "¿En qué horarios trabajás?"
                break;
            case "contact":
                showMessage = "¿Me podrías pasar un número de contacto?"
                break;
        }
        this.props.submitMessageMenuItem(value, showMessage);
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