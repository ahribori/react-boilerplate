/*
	Sub Reducer
 */
import * as types from '../actions/ActionTypes';

/*
 	Reducer는 state를 받아 state의 복사본에 action을 반영하는데,
	처음에는 state가 없기 때문에, 초기값을 상수 형태로 지정해야 한다.
 */
const initialState = {
	color: [255, 255, 255]
};

/*
 	Reducer: 순수 함수로 작성되어야 한다.
 	(Network, DB Connection 금지, 인수 변경 금지, Date.now, Math.random 같은 함수 사용 금지)

	(priviousState, action) => newState
 */
export default function ui(state = initialState, action) {
	if (action.type === types.SET_COLOR) {
		return {
			color: action.color
		}
	} else {
		return state;
	}
}