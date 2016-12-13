/*
	우직한 컴포넌트
 */
import React, { Component, PropTypes } from 'react';

const propTypes = {
	number: PropTypes.number
};
const defaultProps = {
	number: -1
};

export default class Value extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<h1>{this.props.number}</h1>
			</div>
		);
	}
}

Value.propTypes = propTypes;

Value.defaultProps = defaultProps;