/*
 ES6 문법으로
 var React = require('react');
 와 동일한 뜻이다.
 */
import React from 'react';

class App extends React.Component {
	render() {
		return (
			<h1>Hello! World</h1>
	);
	}
}
/*
 ES6 문법으로
 module.export = App;
 과 동일한 뜻이다.
 */
export default App;