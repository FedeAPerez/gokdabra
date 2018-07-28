import styled from 'styled-components';
import React from 'react';

function getColor(props) {
    if(props.secondary) {
        return 'rgb(101, 119, 134)';
    }
    if(props.primary) {
        return '#e17055';
    }
    if(props.warning) {
        return '#d63031';
    }
}

const TextComponent = styled.p`
    font-family: 'Rubik', sans-serif;
    font-weight: ${ props => props.bolded ? '500' : '400' };
    text-align: ${ props => props.centered ? 'center' : 'left' };
    font-size: 1rem;
    color: ${ props => getColor(props) };
    margin: ${ props => props.noMargin ? '0rem auto' : '1rem auto' };
    margin-top: ${ props => {if(props.topMargin) return '1rem' } };
    
    margin-right: ${ props => {if(props.lateralMargin) return '1rem' } };
    
    margin-left: ${ props => {if(props.lateralMargin) return '1rem' } };
    padding: ${ props => {if(props.withPadding) return '1rem' } };
    background-color:  ${ props => {if(props.withBackground) return '#dfe6e9' } };
`;

const BoldText = styled.span`
    font-family: 'Rubik', sans-serif;
    font-size: 1rem;
    font-weight: ${ props => props.secondary ? '400' : '600'};
    color: black;
    display: inline;
`;

const Text = ({...props, children}) => {
    return (
        <TextComponent {...props}>
            {children}
        </TextComponent>
    );
};

export default Text;
export {
    Text,
    BoldText
};