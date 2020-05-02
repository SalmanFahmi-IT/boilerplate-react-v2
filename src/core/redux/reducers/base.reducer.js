/**
 * Higher Order Reducer for CRUD
 * @param {*} name
 */
import { initialState, default_types, actions } from './helpers';

export default function CreateCrudReducer(_module) {
	const types = [...default_types, ..._module.types];
	const reducer = function CrudReducer(state = initialState, action) {
		const { data } = action;
		const _mod = types.find((opt) => actions(_module.name, opt.type).includes(action.type));

		if (_mod && Object.keys(_mod).length > 0) {
			if (action.type === `REQUEST_${_module.name}_${_mod.type}`) {
				return Object.assign({}, state, {
					loading: true,
					success: false,
				});
			} else if (action.type === `RECEIVE_${_module.name}_${_mod.type}`) {
				return _mod.fn(state, data);
			} else if (action.type === `FAILED_${_module.name}_${_mod.type}`) {
				return Object.assign({}, state, {
					error: true,
					loading: false,
					success: false,
				});
			}
		}

		return state;
	};
	return reducer;
}
