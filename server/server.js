/**
 * Demonstrated basic backend REST API
 *
 * NOTE: To avoid using any DB we have used a file based simple approach.
 * */

var Hapi = require('hapi'),
  DB = require('./DB');

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 9635,
  routes: { cors: true }
});

// Add the route
server.route({
  method: 'GET',
  path: '/item',
  handler: function (request, reply) {
    reply(DB.list());
  }
});

server.route({
  method: 'POST',
  path: '/item',
  handler: function (request, reply) {
    reply(DB.save(request.payload));
  }
});

server.route({
  method: 'DELETE',
  path: '/item/{id}',
  handler: function (request, reply) {
    reply(DB.remove(request.params.id));
  }
});

server.route({
  method: 'PUT',
  path: '/item/{id}',
  handler: function (request, reply) {
    reply(DB.update(request.params.id, request.payload));
  }
});

// Start the server
server.start(function () {
  console.log('Server running at:', server.info.uri);
});




