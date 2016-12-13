/*
	Sub Reducer
 */
import * as types from '../actions/ActionTypes';

/*
	Reducer는 state를 받아 state의 복사본에 action을 반영하는데,
 	처음에는 state가 없기 때문에, 초기값을 상수 형태로 지정해야 한다.
 */
const initialState = {
	number: 0
};

/*
	Reducer: 순수 함수로 작성되어야 한다.
	(Network, DB Connection 금지, 인수 변경 금지, Date.now, Math.random 같은 함수 사용 금지)
	
	(priviousState, action) => newState
 */
export default function counter(state = initialState, action) {
	switch(action.type) {
		case types.INCREMENT:
			return {
				...state,
				number: state.number + 1
			};
		case types.DECREMENT:
			return {
				...state,
				number: state.number -1
			};
		default:
			return state;

	}
}