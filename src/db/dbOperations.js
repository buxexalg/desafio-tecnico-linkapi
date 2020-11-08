const Bling = require('../controllers/bling');
const Client = require('../db/mongodb');

const dbUpload = async (ctx) => {
	const orders = await Bling.getOrders(ctx);

	const database = Client.client.db('LinkAPI');
	const collection = database.collection('pedidos_bling');

	collection.drop();

	for (const elemento of orders.retorno.pedidos) {
		await collection.insertOne(elemento);
	}
};

const dbGet = async (ctx) => {
	const database = Client.client.db('LinkAPI');
	const collection = database.collection('pedidos_bling');

	const items = await collection.find({}).toArray();
	ctx.body = items;
};

module.exports = { dbUpload, dbGet };
