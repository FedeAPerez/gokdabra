import styled from 'styled-components';
import React from 'react';
import Text from './Text';
import Section from './Section';

const UserDisplay = ({...props, children}) => {
    return (
        <Section noLaterals withBottomBorders {...props} onClick={props.onClick}>
            <Text bolded noMargin>{props.userShowName}</Text>
            <Text secondary noMargin>{'@'+props.userName}</Text>
            {   props.userDescription &&
                <Text noMargin topMargin>{props.userDescription}</Text>
            }
        </Section>
    );
};

export default UserDisplay;
export {
    UserDisplay
};