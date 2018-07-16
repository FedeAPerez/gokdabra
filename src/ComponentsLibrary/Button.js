import styled from "../../node_modules/styled-components";
import React from 'react';

const textstyles = `
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
`;

const paddingStyles = `
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
`;

const ButtonComponent = styled.button`
    ${paddingStyles}
    ${textstyles}

    border-radius: 0.5rem;
    min-width: 250px;
    background-color: ${ props => props.primary ? '#f16334' : 'white'};

    background-image: ${ props => props.primary ? 'linear-gradient( to bottom right, #f0932b, #f16334)' : 'none' };

    background-color: ${ props => props.disabled ? '#CAD3C8' : 'white'};

    background-image: ${ props => props.disabled ? 'none' : '' };

    display: block;
    margin: 1rem auto;

    color: ${ props => props.primary ? 'white' : 'black'};
    color: ${ props => props.disabled ? '#2C3A47' : ''};

    text-align: center;
    font-size: 1rem;

    border: ${ props => props.primary ? '0px' : '1px solid rgba(255,255,255,.5)' };

    -webkit-box-shadow: ${props => props.disabled ? 'none' : '0 1px 3px 0 rgba(0, 0, 0, .5)' } ;
    box-shadow: ${props => props.disabled ? 'none' : '0 1px 3px 0 rgba(0, 0, 0, .5)' } ;

    &:focus {
        outline: none;
    }

    &:hover {
        cursor: ${ props => props.disabled ? 'auto' : 'pointer'};
    }

    &:active {
        cursor: ${ props => props.disabled ? 'auto' : 'pointer'};
    }
`;

const Button = ({children, ...props}) => {
    return (
        <ButtonComponent 
            {...props}
            onClick={ props.onClick ? props.onClick.bind(this) : null }
        >
            {children}
        </ButtonComponent>
    );
};


export default Button;