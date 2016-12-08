import React from 'react';

export default class ContactCreate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			phone: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	handleChange(e) {
		let nextState = {};
		nextState[e.target.name] = e.target.value;
		this.setState(nextState);
	}

	handleClick() {
		const contact = {
			name: this.state.name,
			phone: this.state.phone
		};

		this.props.onCreate(contact);

		this.setState({
			name: '',
			phone: ''
		});

		this.nameInput.focus();
	}

	handleKeyPress(e) {
		if(e.charCode === 13) {
			this.handleClick();
		}
	}

	render() {
		return (
			<div>
				<h2>Create Contact</h2>
				<p>
					<input
						type="text"
						name="name"
						placeholder="name"
						value={this.state.name}
						onChange={this.handleChange}
						/*
							1. ref를 이용해 기능을 구현하기 전, 다른 방법이 없는지 먼저 찾아볼 것.
							2. constructor, render 메소드 내부에서는 ref에 접근할 수 없음.
						*/
						ref={(ref) => { this.nameInput = ref }}
					/>
					<input
						type="text"
						name="phone"
						placeholder="phone"
						value={this.state.phone}
						onChange={this.handleChange}
						onKeyPress={this.handleKeyPress}
					/>
				</p>
				<button onClick={this.handleClick}>Create</button>
			</div>
		)
	}
}

ContactCreate.propTypes = {
	onCreate: React.PropTypes.func
};

ContactCreate.defaultProps = {
	onCreate: () => {
		console.error('onCreate not defined');
	}
};