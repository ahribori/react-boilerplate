// 여러 개를 import할 때에는 다음과 같이 하면 편하다.
import * as types from './ActionTypes';

// Action Creator
export function increment() {
	return {
		type: types.INCREMENT
	}
}

// Action Creator
export function decrement() {
	return {
		type: types.DECREMENT
	}
}

// Action Creator
export function setColor(color) {
	return {
		type: types.SET_COLOR,
		color
	}
}