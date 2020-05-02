/***
 * Module Proposition
 * @param data
 * @param state
 */
import { GetAll } from '../redux/reducers/helpers';

// Actions
function getBareme(state, data) {
    if (data !== null) {
        return Object.assign({}, state, {
            bareme: data,
            loading: false,
            success: true,
        });
    }
}

// config
const module_config = {
    name: 'PROPOSITION',
    types: [
        { type: "SEARCH_POST", fn: GetAll },
        { type: "BAREME_POST", fn: getBareme },
        { type: "RESUME_POST", fn: GetAll },
    ]
}

export default module_config;
