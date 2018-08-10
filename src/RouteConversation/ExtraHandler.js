// BlankFile.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */ 
import { ModalSection, ModalInnerSection, FlexSection } from '../ComponentsLibrary/Section';
import { SimpleButton } from '../ComponentsLibrary/Button';
/* *
 * Hojas de Estilo y Constantes
 * */ 
class ExtraHandler extends Component {
    render() {
        return (
            <ModalSection>
            <ModalInnerSection noPadding relative>  
                <FlexSection>
                    <SimpleButton onClick={ (e) => { this.props.onExtraClose ? this.props.onExtraClose(e) : null } }>Cancelar</SimpleButton>
                    <SimpleButton onClick={ (e) => { this.props.onExtraCreate ? this.props.onExtraCreate(e) : null } }>Crear</SimpleButton>
                </FlexSection>      
            </ModalInnerSection>
            </ModalSection>
        );
    }
}

export default ExtraHandler;