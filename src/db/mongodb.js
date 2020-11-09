const MongoClient = require('mongodb').MongoClient;

const uri = process.env.URI_MONGODB;

const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

try {
	client.connect();
} catch (err) {
	console.error(err);
}

module.exports = { client };
