'use strict';

const Code = require('@hapi/code');
const Lab = require('@hapi/lab');
const { init, stop } = require('../server');
const { expect } = Code;
const { after, before, describe, it } = exports.lab = Lab.script();

describe('index route', () => {
  let server;
  before(server = await init());

  after(server.stop());

  it('returns true when 1 + 1 equals 2', () => {
      expect(1+1).to.equal(2);
  });
});
