// ComponentsLibraryView.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */ 
import { Text, BoldText } from './Text';
import Title from './Title';
import Section from './Section';
import { TextGlobe, KdabraTextGlobe, TextGlobeArticle } from './TextGlobe';
import Button from './Button';
import CheckBox from './CheckBox';
/* *
 * Hojas de Estilo y Constantes
 * */ 
class ComponentsLibraryView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isBusiness: false
        };
    }
    handleButtonsClick(e) {
        e.preventDefault();
    }

    handleBusinessChange(e) {
        e.preventDefault();
        this.setState({ isBusiness : !this.state.isBusiness });
    }

    render() {
        return(
            <main>
                <Section>
                    <Title h1>Librería de componentes - KDABRA</Title>
                    <Text>Esta librería busca unificar los componentes que se usan en todo el sitio</Text>
                </Section>
                <Section>
                    <Title h2>Texto</Title>
                    <Text>Este es un mensaje de muestra.</Text>
                    <Text>Este es un texto <BoldText>destacado</BoldText> que sigue.</Text>
                </Section>
                <Section>
                    <Title h2>Globos</Title>
                    
                    <KdabraTextGlobe>Este es un mensaje de KDABRA</KdabraTextGlobe>

                    <TextGlobeArticle> Este es un mensaje de prueba</TextGlobeArticle>
                    
                    <TextGlobeArticle sender> Este es un mensaje de prueba del usuario</TextGlobeArticle>
                </Section>
                <Section>
                    <Title h2>Botones</Title>
                    <Button onClick={this.handleButtonsClick} disabled>Completá los datos</Button>
                    <Button onClick={this.handleButtonsClick}>Crear una cuenta</Button>
                    <Button primary onClick={this.handleButtonsClick}>Ingresar</Button>
                    <CheckBox onClick={this.handleBusinessChange.bind(this)} checked={this.state.isBusiness} >Soy una empresa</CheckBox>

                </Section>
            </main>
        );
    }
}

export default ComponentsLibraryView;