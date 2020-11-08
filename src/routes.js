const Router = require('koa-router');
const Pipedrive = require('./controllers/pipedrive');
const Bling = require('./controllers/bling');
const DBOperations = require('./db/dbOperations');

const { checkTokenExpiry } = require('pipedrive/lib/OAuthManager');

const router = new Router();

router.get('/deals', Pipedrive.getWonDealsWithProducts);

router.get('/orders', Bling.getOrders);

router.post('/export', Bling.exportOrder);

router.post('/upload', DBOperations.dbUpload);
router.get('/db', DBOperations.dbGet);

module.exports = router;
