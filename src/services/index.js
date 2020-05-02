import BaseService from '../services/Base.service';
import PropositionService from './Proposition.service';
import * as _module from '../core/modules';

const clientService = new BaseService(_module.client.name);
const produitService = new BaseService(_module.produit.name);
const formeJuridiqueService = new BaseService(_module.formejuiridique.name);
const natureBiensService = new BaseService(_module.naturebiens.name);
const propositionService = new PropositionService(_module.proposition.name);
const typePersonneService = new BaseService(_module.typepersonne.name);
const chiffresClesService = new BaseService(_module.chiffrecles.name);
const typeFraisService = new BaseService(_module.typefrais.name);
const TVAService = new BaseService(_module.tva.name);
const ProduitCategoriesService = new BaseService(_module.produitCategory.name);
const ContratService = new BaseService(_module.contrat.name);

export {
	clientService,
	produitService,
	formeJuridiqueService,
	natureBiensService,
	propositionService,
	typePersonneService,
	chiffresClesService,
	typeFraisService,
	TVAService,
	ProduitCategoriesService,
	ContratService,
};
