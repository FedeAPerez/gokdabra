// BlankFile.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */ 
import { ModalSection, ModalCenteredInnerSection, FlexSection } from '../ComponentsLibrary/Section';
import  { TextOnboarding, Text, TextV2 } from '../ComponentsLibrary/Text';
import { RoundedButton } from '../ComponentsLibrary/Button';
import { getEmoji } from '../Models/Emoji';
/* *
 * Hojas de Estilo y Constantes
 * */ 
class OptInOnboarding extends Component {
    render() {
        return (
            <ModalSection flexCenter>
                <ModalCenteredInnerSection>
                    <TextV2 amazingSize noMargin centered>{getEmoji("1F575")}</TextV2>
                    <TextOnboarding centered noMargin>Hagamos esto personal...</TextOnboarding>
                    <Text secondary centered noMargin>Decinos cómo vas a usar KDABRA, así lo armamos para vos.</Text>
                    <FlexSection>
                        <RoundedButton>Usuario</RoundedButton>
                        <RoundedButton>{"Empresa " + getEmoji("1F3ED")}</RoundedButton>
                    </FlexSection>
                </ModalCenteredInnerSection>
            </ModalSection>
        );
    }
}

export default OptInOnboarding;