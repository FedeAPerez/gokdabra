import styled from 'styled-components';
import React from 'react';

const TextComponent = styled.p`
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    text-align: ${ props => props.centered ? 'center' : 'left' };
    font-size: 1rem;
    color: ${ props => props.secondary ? '#454949' : 'black' };
    color: ${ props => ( props.secondary && props.warning ) ? '#d63031' : '#454949' };
    margin: ${ props => props.noMargin ? '0rem auto' : '1rem auto' };
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