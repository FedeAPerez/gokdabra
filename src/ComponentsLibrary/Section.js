import styled from 'styled-components';

const Section = styled.div`
    margin: 0rem auto;
    padding: 0rem;
    margin-right: ${ props => props.noLaterals ? '0rem' : '1rem'};
    margin-left: ${ props => props.noLaterals ? '0rem' : '1rem'};
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-bottom: ${ props => props.withBottomBorders ? '1px solid #dfe6e9' : 'none'}
`;

export default Section;