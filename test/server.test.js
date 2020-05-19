'use strict';

const Code = require('@hapi/code');
const Lab = require('@hapi/lab');
const { init } = require('../server');
const { expect } = Code;
const { afterEach, beforeEach, describe, it } = exports.lab = Lab.script();

describe('index route', () => {
  
  let server;
  
  beforeEach(async() => {
    server = await init();
  });

  afterEach(async() => { 
    await server.stop() 
  });

  it('responds with a 200', async() => {
    const res = await server.inject({
      method: 'get',
      url: '/'
    });
    expect(res.statusCode).to.equal(200);
  });
});
