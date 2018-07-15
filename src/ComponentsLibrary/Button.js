import styled from "../../node_modules/styled-components";

const Button = styled.button`

    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;

    border-radius: 0.5rem;
    min-width: 250px;
    background-color: ${ props => props.primary ? '#f16334' : 'white'};
    background-image: ${ props => props.primary ? 'linear-gradient( to bottom right, #f0932b, #f16334)' : 'none' };
    color: black;
    display: block;
    margin: 1rem auto;

    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    color: ${ props => props.primary ? 'white' : 'black'};
    text-align: center;
    font-size: 1rem;

    border: ${props => props.primary ? '0px' : '1px solid #696666' };
    -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .5);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .5);
    &:focus {
        outline: none;
    }

    &:hover {
        cursor: pointer;
    }
    &:active {
        cursor: pointer;
    }
`;

export default Button;