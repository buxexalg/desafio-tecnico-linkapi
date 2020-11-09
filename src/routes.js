const Router = require('koa-router');

const Pipedrive = require('./controllers/pipedrive');
const Bling = require('./controllers/bling');
const DBOperations = require('./db/dbOperations');

const router = new Router();
/***
 * Endpoint que retorna todas as oportunidades ganhas com os produtos associadas a elas do Pipedrive.
 */
router.get('/deals', Pipedrive.getWonDealsWithProducts);

/**
 * Endpoint que retorna todos os pedidos registrados no Bling.
 */
router.get('/orders', Bling.getOrders);

/**
 * Endpoint que exporta para o Bling as oportunidades ganhas do pipedrive em conjunto com os seus produtos.
 */
router.post('/export', Bling.exportOrder);

/**
 * Endpoint que faz o upload para o MongoDB com todos os pedidos do Bling.
 */
router.post('/upload', DBOperations.dbUpload);

/**
 * Endpoint que retorna os documentos do MongoDB.
 */
router.get('/db', DBOperations.dbGet);

module.exports = router;
