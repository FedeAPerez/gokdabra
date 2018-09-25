import PropTypes from 'prop-types';
import React from 'react';
import Text from './Text';
import { Section, TransparentSection} from './Section';

/**
 * @augments {Setting<{settingName: string, settingDescrption: string}}, State>}
 */
const Setting = ({ ...props, children}) => {
    
    var childrenText = props.settingDescrption || children ;
    return (
        <Section noLaterals withBottomBorders {...props} onClick={(e) => { props.onClick ? props.onClick(e, props.value) : null }}>
        <TransparentSection disabled={props.disabled} noPadding relative>
            <Text bolded noMargin>{props.settingName}</Text>
            <Text noMargin>{childrenText}</Text>
            {
                // if children -> renderizar como modal
            }
        </TransparentSection>
        </Section>
    );
};

Setting.propTypes = {
    settingName: PropTypes.string
};

export default Setting;
export {
    Setting
}