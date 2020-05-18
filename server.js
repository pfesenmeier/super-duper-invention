'use strict';



const Hapi = require('@hapi/hapi');

const server = Hapi.server({
  port: 3000,
  host: 'localhost'
});
server.route({
  method: 'GET',
  path: '/',
  handler: (request , h) => {
  return 'Hello World!';
 }
});

exports.init = async() => {

  await server.initialize();
  return server;
};

exports.start = async() => {

  await server.start();
  console.log(`server running at ${server.info.uri}`);
  return server;
}

proccess.on('Unhandled Rejection', (err) => {
  console.log(err);
  proccess.exit(1);
})