/**
 * ***********************
 * CUSTOM API MIDDELWARE *
 * ***********************
 * 1.A centralized solution, i.e, in one module
 * 2.Can handle various http methods: GET, POST, DELETE, and PUT
 * 3.Can handle setting custom headers
 * 4.Supports custom error handling, e.g to be sent to some external logging
 * sevice, or for handling authorisation errors
 * 5.Allows fo onSuccess and onFailure callbacks
 * 6.Supports labels for handling loading states
 *
 * Let's setup the middleware
 */
import axios from 'axios';

const SID = '';
const API_URL = process.env.REACT_APP_API_URL;
const API_PORT = process.env.REACT_APP_API_PORT;
const API_PATH = 'api';

const customMiddleware = (store) => (next) => (action) => {
	if (!action.meta || action.meta.type !== 'api') return next(action);

	const { method, params, model, type } = action.meta;
	const action_type = (action.type).toUpperCase();
	const url = action_type.replace('_', '/');
	const REQUEST_ACTION_TYPE = `REQUEST_${action_type}_${method}`;
	const RECEIVE_ACTION_TYPE = `RECEIVE_${action_type}_${method}`;
	const FAILED_ACTION_TYPE = `FAILED_${action_type}_${method}`;

	axios.defaults.baseURL = `${API_URL}:${API_PORT}/${API_PATH}`;
	axios.defaults.headers.common['Content-Type'] = 'application/json';
	axios.defaults.headers.common['Authorization'] = `Bearer ${SID}`;

	const axios_config = { method, url, data: model };

	store.dispatch({ type: REQUEST_ACTION_TYPE }); /* Dispatch request action */
	return new Promise((resolve, reject) => {
		axios
			.request(axios_config)
			.then(({ data }) => {
				store.dispatch({
					type: RECEIVE_ACTION_TYPE,
					data,
				}); /* Dispatch success action & send data to store */
				resolve(data);
			})
			.catch((error) => {
				store.dispatch({
					type: FAILED_ACTION_TYPE,
					error,
				}); /* Dispatch failed action if we have an error */
				reject(error);
			});
	});
};

export default customMiddleware;
