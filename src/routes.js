import Dashboard from './scenes/_dashboard';
import Propositions from './scenes/proposition';
import NewProposition from './scenes/proposition/PropalSaveForm';
import Resume from './scenes/proposition/Resume.container'
import Contrats from './scenes/contrat'
const routes = [
	{ path: '/dashboard', exact: false, component: Dashboard },
	{ path: '/propositions', exact: true, component: Propositions },
	{ path: '/propositions/:id', exact: true, component: Resume },
	{ path: '/newproposition', exact: false, component: NewProposition },
	{ path: '/contrats', exact: false, component: Contrats },
];

export default routes;
