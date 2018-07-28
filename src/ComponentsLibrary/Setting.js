import styled from "../../node_modules/styled-components";
import React from 'react';
import Text from './Text';
import Section from './Section';

const Setting = ({ ...props, children}) => {
    
    var childrenText = children || props.settingDescrption;
    return (
        <Section noLaterals withBottomBorders withHover {...props} onClick={props.onClick}>
        <Section noPadding relative>
            <Text bolded noMargin>{props.settingName}</Text>
            {
                childrenText &&
                <Text noMargin>{childrenText}</Text>
            }
        </Section>
        </Section>
    );
};

export default Setting;