const MongoClient = require('mongodb').MongoClient;

const uri =
	'mongodb+srv://admin:102030@cluster0.zgofa.mongodb.net/Linkapi?retryWrites=true&w=majority';

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
