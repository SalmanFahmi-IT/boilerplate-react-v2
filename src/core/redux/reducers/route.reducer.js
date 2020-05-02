import { Map } from 'immutable';

export default function scenesReducer(state = new Map() , action = {}) {
    switch (action.type) {
        case "INIT_APP":
            return {
                ...state,
                scene: action.params,
            };
    
        default:
            return state;
    }
}
