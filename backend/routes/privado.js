const express = require('express')
const RestaurantesController = require('../controllers/RestaurantesController')
const ProdutosController = require('../controllers/ProdutosController')
const ProdutosFavoritosController = require('../controllers/ProdutosFavoritosController')
const PedidosController = require('../controllers/PedidosController')
const PedidosRestauranteController = require('../controllers/PedidosRestauranteController')
const router = express.Router()

router.get('/restaurantes', RestaurantesController.index)
router.post('/restaurantes', RestaurantesController.store)
router.put('/restaurantes/:id', RestaurantesController.update)
router.delete('/restaurantes/:id', RestaurantesController.destroy)
router.get('/restaurantes/:id', RestaurantesController.show)

router.get('/produtos', ProdutosController.index)
router.post('/produtos', ProdutosController.store)
router.put('/produtos/:id', ProdutosController.update)
router.delete('/produtos/:id', ProdutosController.destroy)

router.get('/produtos-favoritos', ProdutosFavoritosController.index)
router.post('/produtos-favoritos', ProdutosFavoritosController.store)
router.delete('/produtos-favoritos', ProdutosFavoritosController.destroy)

router.get('/pedidos', PedidosController.index)
router.get('/pedidos/:id', PedidosController.show)
router.post('/pedidos', PedidosController.store)
router.put('/pedidos/:id', PedidosController.update)
router.delete('/pedidos/:id', PedidosController.destroy)
router.post('/pedidos/:id/produtos/:produto_id', PedidosController.addProduto)
router.delete('/pedidos/:id/produtos/:produto_id', PedidosController.destroyProduto)

router.get('/pedidos-restaurante', PedidosRestauranteController.index)
router.put('/pedidos-restaurante/:id/confirmado', PedidosRestauranteController.updateConfirmado)
router.put('/pedidos-restaurante/:id/saiu-entrega', PedidosRestauranteController.updateSaiuEntrega)
router.put('/pedidos-restaurante/:id/entregue', PedidosRestauranteController.updateEntregue)

module.exports = router