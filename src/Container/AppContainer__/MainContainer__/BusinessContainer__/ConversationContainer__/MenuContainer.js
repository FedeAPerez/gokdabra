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
                    'label' : 'Horarios de atención'
                },
                {
                    'label' : 'At. al Cliente'
                },
                {
                    'label' : 'Lugar de Trabajo'
                },
                {
                    'label' : 'Contacto'
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
                                <span className= { __MENU_ITEM_CLASS }
                                    key= { __MENU_ITEM_ID + key }
                                >
                                {
                                    element.label
                                }
                                </span>
                            );
                        }
                    )
                }
            </div>
        );
    }
}

export default MenuContainer;