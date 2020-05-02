/**
 * Global service
 *
 */
import { apiActionCreator } from '../core/redux/actions/base.action';
import BaseService from './Base.service';

export default class PropositionService extends BaseService {
	constructor(name) {
		super(name);
		this.service_name = name;
	}

	getBareme(model) {
		const service_tag = `${this.service_name}_bareme`
		return apiActionCreator(service_tag, 'POST', null, model);
	}

	getProposition(model) {
		const service_tag = `${this.service_name}_Resume`
		return apiActionCreator(service_tag, 'POST', null, model);
	}
}
