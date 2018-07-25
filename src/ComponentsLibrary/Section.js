import styled from 'styled-components';

const Section = styled.div`
    margin: 0rem auto;
    padding: 0rem;
    margin-right: ${ props => props.noLaterals ? '0rem' : '1rem'};
    margin-left: ${ props => props.noLaterals ? '0rem' : '1rem'};
    padding-top: ${ props => props.noPadding ? '0rem' : '1rem'};
    padding-bottom: ${ props => props.noPadding ? '0rem' : '1rem'};
    border-bottom: ${ props => props.withBottomBorders ? '1px solid #dfe6e9' : 'none'}
    position: ${ props => props.relative ? 'relative' : 'initial'};

    &:hover {
        background-color: ${ props => props.withHover ? '#f4f5f5' : 'inherit'};
        
        cursor: ${ props => props.withHover ? 'pointer' : 'inherit'};
    }

    &:active {
        background-color: ${ props => props.withHover ? '#f4f5f5' : 'inherit'};
    }
`;

export default Section;