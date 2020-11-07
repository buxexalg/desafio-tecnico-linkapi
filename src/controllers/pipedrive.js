const pipedrive = require('pipedrive');

pipedrive.Configuration.apiToken = process.env.PIP_TOKEN;

const getWonDeals = async () => {
	const input = [];
	input['status'] = 'won'
	const deals = await pipedrive.DealsController.getAllDeals(input);

	return deals;
};

module.exports = { getWonDeals };
