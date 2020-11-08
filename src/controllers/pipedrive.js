const pipedrive = require('pipedrive');
const { checkTokenExpiry } = require('pipedrive/lib/OAuthManager');

pipedrive.Configuration.apiToken = process.env.PIP_TOKEN;

const getProductByDealID = async (id) => {
	const input = [];
	input['id'] = id;

	const products = await pipedrive.DealsController.listProductsAttachedToADeal(
		input
	);

	return products.data;
};

const getWonDealsWithProducts = async (ctx) => {
	const input = [];
	input['status'] = 'won';
	const deals = await pipedrive.DealsController.getAllDeals(input);

	for (const elemento of deals.data) {
		elemento['products'] = await getProductByDealID(elemento.id);
	}
	ctx.body = deals.data;
	return deals.data;
};

module.exports = { getWonDealsWithProducts, getProductByDealID };
