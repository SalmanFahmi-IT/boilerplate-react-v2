/***
 *
 * Reducer helpers
 */
export const initialState = {
	data: [],
	item: {},
	loading: false,
	success: false,
	error: false,
};

export function actions(name, type) {
	const custom_type = `${String(name).toUpperCase()}_${String(type).toUpperCase()}`;
	return [`REQUEST_${custom_type}`, `RECEIVE_${custom_type}`, `FAILED_${custom_type}`];
}

export function GetAll(state, payload) {
	if (payload !== null) {
		if (payload instanceof Array) {
			return Object.assign({}, state, {
				data: payload,
				loading: false,
				success: true,
			});
		} else {
			return Object.assign({}, state, {
				item: payload,
				loading: false,
				success: true,
			});
		}
	}
}

export function Create(state, payload) {
	return Object.assign({}, state, {
		data: [payload, ...state.data],
		item: payload,
		loading: false,
		success: true,
	});
}

export function Update(state, payload) {
	return;
}

export function Delete(state, payload) {
	return;
}

export const default_types = [
	{ type: `GET`, fn: GetAll },
	{ type: `POST`, fn: Create },
	{ type: `PUT`, fn: Update },
	{ type: `DELETE`, fn: Delete },
];
