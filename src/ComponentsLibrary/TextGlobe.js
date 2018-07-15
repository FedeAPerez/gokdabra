import styled from 'styled-components';
import React from 'react';
import { SSL_OP_CRYPTOPRO_TLSEXT_BUG } from 'constants';

const TextGlobe = styled.div`
    border-radius: 16px;
    border-bottom-left-radius: ${ props => props.sender ? '16px' : '2px' };

    border-bottom-right-radius: ${ props => props.sender ? '2px' : '16px' };
    float: ${ props => props.sender ? 'right' : 'none' };
    display: ${ props => props.sender ? 'block' : 'inline-block' };

    -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .5);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .5);

    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    margin: 0.5rem;
    position: relative;
    padding: 1rem;
    color: ${ props => props.sender ? 'white' : 'black'  };
    background-color: ${ props => props.sender ? 'cornflowerblue' : 'white' };
`;

const KdabraTextGlobe = TextGlobe.extend`
    background-color: #f16334;
    background-image: linear-gradient( to bottom right, #f0932b, #f16334);
    border-radius: 16px;
    display: block;
    text-align: center;
    float: none;
    color: white;
`;

const TextGlobeArticle = ({children, ...props}) => (
    <article>
    <TextGlobe {...props}>
        {children}
    </TextGlobe>
    </article>
);

export default TextGlobeArticle;
export {
    TextGlobe,
    KdabraTextGlobe,
    TextGlobeArticle
}