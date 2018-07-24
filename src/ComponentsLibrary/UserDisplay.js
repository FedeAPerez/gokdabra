import styled from 'styled-components';
import React from 'react';
import Text from './Text';
import Section from './Section';

const UserDisplay = ({...props, children}) => {
    return (
        <Section noLaterals withBorders {...props}>
            <Text bolded noMargin>{props.userShowName}</Text>
            <Text secondary noMargin>{'@'+props.userName}</Text>
            <Text noMargin topMargin>{props.userDescription}</Text>
        </Section>
    );
};

export default UserDisplay;
export {
    UserDisplay
};