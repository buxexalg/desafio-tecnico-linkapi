const Bling = require('../controllers/bling');
const Client = require('../db/mongodb');
const {
	falhaRequisicao,
	sucessoRequisicao,
} = require('../controllers/response');

/**
 * Função responsável por fazer upload dos pedidos do Bling para o MongoDB.
 */
const dbUpload = async (ctx) => {
	const orders = await Bling.getOrders(ctx);

	if (!orders) {
		return falhaRequisicao(
			ctx,
			'Não existem pedidos registrados no Bling.',
			404
		);
	}

	const database = Client.client.db('LinkAPI');
	const collection = database.collection('pedidos_bling');

	collection.drop();

	for (const elemento of orders.retorno.pedidos) {
		await collection.insertOne(elemento);
	}

	return sucessoRequisicao(ctx, 'Banco atualizado com sucesso');
};

/**
 * Função que retorna os documentos do MongoDB.
 */
const dbGet = async (ctx) => {
	const database = Client.client.db('LinkAPI');
	const collection = database.collection('pedidos_bling');

	const items = await collection.find({}).toArray();
	items
		? sucessoRequisicao(ctx, items, 200)
		: falhaRequisicao(ctx, 'Não existem dados no banco.');
};

module.exports = { dbUpload, dbGet };
