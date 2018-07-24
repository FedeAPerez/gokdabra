import React from 'react';
import Text from './Text';
import Section from './Section';

const UserDisplay = ({...props, children}) => {
    return (
        <Section noLaterals withBottomBorders {...props} onClick={props.onClick}>
            <Section noPadding>
            <Text bolded noMargin>{props.userShowName}</Text>
            <Text secondary noMargin>{'@'+props.userName}</Text>
            {   (props.userDescription || props.userDescription === '') &&
                <Text noMargin topMargin>{props.userDescription}</Text>
            }
            </Section>
        </Section>
    );
};

export default UserDisplay;
export {
    UserDisplay
};