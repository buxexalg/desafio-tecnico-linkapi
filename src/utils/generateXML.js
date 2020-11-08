const { create } = require('xmlbuilder2');
const { version } = require('prettier');

const generateXML = async (WonDeals) => {
	const products = [];
	const date = WonDeals.won_time.split(' ')[0].split('-');

	const pedido = {
		pedido: {
			data: date[2] + '/' + date[1] + '/' + date[0],
			cliente: {
				nome: WonDeals.org_name,
				tipoPessoa: 'J',
				fone: WonDeals.person_id.phone.value,
				email: WonDeals.person_id.email.value,
			},
			itens: {},
			parcelas: {
				parcela: {
					data: date[2] + '/' + date[1] + '/' + date[0],
					vlr: WonDeals.formatted_value,
				},
			},
		},
	};
	WonDeals.products.forEach((elemento) => {
		const product = {
			item: {
				codigo: elemento.product_id,
				descricao: elemento.name,
				un: 'un',
				qtde: elemento.quantity,
				vlr_unit: elemento.item_price,
			},
		};

		products.push(product);
		pedido.pedido.itens = products;
	});

	const doc = create({ version: '1.0', encoding: 'UTF-8' }, pedido);
	const xml = doc.end({ prettyPrint: true });
	return xml;
};

module.exports = { generateXML };
