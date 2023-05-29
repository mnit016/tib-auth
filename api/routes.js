'use strict';
module.exports = function(app) {
  var autlContrl = require('./controllers/AuthController');

  // todoList Routes
  app.route('/auth/:key')
    .get(autlContrl.get)

};
