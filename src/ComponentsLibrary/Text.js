import styled from 'styled-components';

const Text = styled.p`
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    text-align: left;
    font-size: 1rem;
`;

const BoldText = Text.extend`
    font-weight: 600;
    display: inline;
`;
export default Text;
export {
    Text,
    BoldText
};