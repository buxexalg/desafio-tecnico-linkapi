const pipedrive = require('pipedrive');
const { checkTokenExpiry } = require('pipedrive/lib/OAuthManager');
const { sucessoRequisicao } = require('./response');

pipedrive.Configuration.apiToken = process.env.PIP_TOKEN;

/**
 * Função que retorna um array de objetos com todos os produtos associados a uma certa oportunidade, que é buscada pelo id.
 */
const getProductByDealID = async (id) => {
	const input = [];
	input['id'] = id;

	const products = await pipedrive.DealsController.listProductsAttachedToADeal(
		input
	);

	return products.data;
};

/**
 * Função que retorna todas as oportunidades ganhas com os produtos associadas a elas do Pipedrive.
 */
const getWonDealsWithProducts = async (ctx) => {
	const input = [];
	input['status'] = 'won';
	const deals = await pipedrive.DealsController.getAllDeals(input);

	for (const elemento of deals.data) {
		elemento['products'] = await getProductByDealID(elemento.id);
	}

	sucessoRequisicao(ctx, deals.data)
	return deals.data;
};

module.exports = { getWonDealsWithProducts, getProductByDealID };
