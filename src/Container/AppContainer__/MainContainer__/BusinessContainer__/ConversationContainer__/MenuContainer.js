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
                    'label' : 'Horarios de atención',
                    'icon_src' : '/content/images/hours.svg'
                },
                {
                    'label' : 'At. al Cliente',
                    'icon_src' : '/content/images/chat.svg'
                },
                {
                    'label' : 'Lugar de Trabajo',
                    'icon_src' : '/content/images/map.svg'
                },
                {
                    'label' : 'Contacto',
                    'icon_src' : '/content/images/contact.svg'
                },
            ]
        }
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