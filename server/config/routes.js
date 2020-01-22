const cakesController = require('../controller/cakes');

module.exports = function (app) {
  app.get('/api/cakes', cakesController.index);
  app.post('/api/cakes', cakesController.create);
  app.post('/api/rating', cakesController.rate);
  app.put('/api/cakes/:id', cakesController.update);
  app.get('/api/cakes/:id', cakesController.getById);
  app.delete('/api/cakes/:id', cakesController.delete);
}