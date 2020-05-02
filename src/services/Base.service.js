/**
 * Global service
 *
 */
import { apiActionCreator } from '../core/redux/actions/base.action';

export default class BaseService {
	constructor(name) {
		this.service_name = name;
	}

	getAll() {
		return apiActionCreator(this.service_name, 'GET', null, null);
	}

	createOrUpdate(key, model) {
		const method = key ? 'PUT' : 'POST';
		return apiActionCreator(this.service_name, method, key, model);
	}

	delete(key) {
		return apiActionCreator(this.service_name, 'DELETE', key, null);
	}

	search(model) {
		const service_tag = `${this.service_name}_search`;
		return apiActionCreator(service_tag, 'POST', null, model);
	}

	getById(id) {
		const service_tag = `${this.service_name}_resume`;
		return apiActionCreator(service_tag, 'POST', null, id);
	}
}
