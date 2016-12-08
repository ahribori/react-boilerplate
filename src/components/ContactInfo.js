import React from 'react';

class ContactInfo extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div onClick={this.props.onClick}>
				{this.props.contact.name} {this.props.contact.phone}
			</div>
		)
	}
}

export default ContactInfo