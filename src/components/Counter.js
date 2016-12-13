/*
	영민한 컴포넌트
 */

import React, {Component, PropTypes} from 'react';

import Value from './Value';
import Control from './Control';

// import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';
import * as actions from '../actions';

const propTypes = {};
const defaultProps = {};

class Counter extends React.Component {

	constructor(props) {
		super(props);
		this.setRandomColor = this.setRandomColor.bind(this);
	}

	setRandomColor() {
		const color = [
			Math.floor((Math.random() * 55) + 200),
			Math.floor((Math.random() * 55) + 200),
			Math.floor((Math.random() * 55) + 200)
		];

		this.props.handleSetColor(color)
	}

	render() {

		const color = this.props.color;
		const style = {
			background: `rgb(${color[0]}, ${color[1]}, ${color[2]})`
		};

		return (
			<div style={style}>
				<Value number={this.props.number}/>
				<Control
					onPlus={this.props.handleIncrement}
					onSubtract={this.props.handleDecrement}
					onRandomizeColor={this.setRandomColor}
				/>
			</div>
		);
	}
}

Counter.propTypes = propTypes;

Counter.defaultProps = defaultProps;

// state를 props로 바인딩 해준다.
const mapStateToProps = (state /* 이 컴포턴트의 state가 아니다 */) => {
	return {
		number: state.counter.number,
		color: state.ui.color
	}
};

// dispatch function을 props로 바인딩 해준다.
const mapDispatchToProps = (dispatch) => {
	// return bindActionCreators(actions, dispatch);
	return {
		handleIncrement: () => { dispatch(actions.increment()) },
		handleDecrement: () => { dispatch(actions.decrement()) },
		handleSetColor: (color) => { dispatch(actions.setColor(color)) }
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);