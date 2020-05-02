/**
 * ----------------------
 *  Basic Action creator
 * ----------------------
 *  1.Generate action types based on sevice name & method
 *
 * @param service
 * @param method
 * @param params
 * @param model
 */

export function apiActionCreator(service, method, params, model) {
	return {
		type: service,
		meta: {
			method,
			params,
			model,
			type: 'api',
		},
	};
}
