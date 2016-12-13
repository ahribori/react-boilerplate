/*
	Root Reducer
 */

/*
	Root Reducer는 Sub Reducer들의 state 복사본(action이 반영된)을 모아서
	Store에게 돌려준다.
	
	다음과 같이 combineReducers 도구로 Sub Reducer들을 합쳐준다.
 */
import { combineReducers } from 'redux';
import counter from './counter';
import ui from './ui';

const reducers = combineReducers({
	counter, ui
});

export default reducers;