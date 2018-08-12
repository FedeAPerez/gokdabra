import PropTypes from 'prop-types';
import React from 'react';
import Text from './Text';
import Section from './Section';
import Card from './Card';
/**
 * @augments {Setting<{settingName: string, settingDescrption: string}}, State>}
 */
const Event = ({ ...props, children}) => {
    
    return (
        <Card noPadding noLaterals>
        <Section noPadding relative>
            <Text bolded noMargin>{props.userName}</Text>
            <Text noMargin>{"El " + props.date + " a las " + props.hour}</Text>
        </Section>
        </Card>
    );
};

export default Event;
export {
    Event
}