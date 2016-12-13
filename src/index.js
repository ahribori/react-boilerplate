import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// createStore를 redux에서 불러온다
import { createStore } from 'redux';

// root reducer를 불러온다.
import reducers from './reducers';

//view layer binding 도구인 'react-redux'를 불러온다
import { Provider } from 'react-redux';

// createStore에 root reducer를 인자로 전달해 store를 만든다.
const store = createStore(reducers);

const rootElement = document.getElementById('root');
// App 컴포넌트의 props로 store를 전달해서 데이터를 읽고 변화를 줄수 있는데 상당히 구조가 복잡해지게 된다.
// 바인딩을 쉽고 편하게 할 수 있는 방법은 'react-redux'라는 view layer binding 도구를 사용하는 것이다.
ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>
	, rootElement);