/*
 Código librerías de externos
 */
import React, { Component } from 'react';

class MessageComponent extends Component {
    getMessageHtml() {
		return { __html: this.props.messageOb.message }
	}

	getMessageTitleHTML() {
		return { __html: this.props.messageOb.message_title }
	}

    render() {
        return(
            <article className={"message"}>
                <section className={ this.props.messageOb.class_used }>
				    { this.props.messageOb.message_title && <p dangerouslySetInnerHTML={ this.getMessageTitleHTML() }></p> }
                    { this.props.messageOb.message && <p dangerouslySetInnerHTML={ this.getMessageHtml() }></p> }
                </section>
            </article>
        );
    }
}

export default MessageComponent;