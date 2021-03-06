const Pipedrive = require('../controllers/pipedrive');
const GenerateXML = require('../utils/generateXML');
const axios = require('axios').default;
const { sucessoRequisicao } = require('./response');

/**
 * Função que exporta para o Bling as oportunidades ganhas do pipedrive em conjunto com os seus produtos.
 */
const exportOrder = async (ctx) => {
	const Deals = await Pipedrive.getWonDealsWithProducts(ctx);
	ctx.body = '';

	for (deal of Deals) {
		const xml = await GenerateXML.generateXML(deal);
		var options = {
			method: 'POST',
			url: 'https://bling.com.br/Api/v2/pedido/json/',
			params: {
				apikey: process.env.BLING_TOKEN,
				xml: xml,
			},
			headers: { 'Content-Type': 'application/xml' },
		};

		axios
			.request(options)
			.then(function (response) {
				console.log(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	}
};

/**
 * Função que retorna todos os pedidos registrados no Bling.
 */
const getOrders = async (ctx) => {
	const options = {
		method: 'GET',
		url: 'https://bling.com.br/Api/v2/pedidos/json',
		params: {
			apikey: process.env.BLING_TOKEN,
		},
		headers: {
			apikey: process.env.BLING_TOKEN,
		},
	};

	return axios
		.request(options)
		.then(function (response) {
			sucessoRequisicao(ctx, response.data);
			return response.data;
		})
		.catch(function (error) {
			console.error(error);
		});
};

module.exports = { exportOrder, getOrders };
