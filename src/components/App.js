/*
 ES6 문법으로
 var React = require('react');
 와 동일한 뜻이다.
 */
import React from 'react';
import Contact from './Contact'

class App extends React.Component {
	render() {
		return (
			<Contact/>
	);
	}
}
/*
 ES6 문법으로
 module.export = App;
 과 동일한 뜻이다.
 */
export default App;