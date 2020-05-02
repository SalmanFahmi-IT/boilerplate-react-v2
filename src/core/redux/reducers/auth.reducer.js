import { getLocalStorageValue } from '../../utils/auth';

const initialState = {
	SID: getLocalStorageValue('SID'),
};

export default function authenticationReducer(state = initialState, action = {}) {
	switch (action.type) {
		case 'CHECK_AUTHORIZATION':
			return {
				...state,
				SID: action.sid,
			};

		default:
			return state;
	}
}
