const Code = require('@hapi/code');
const Lab = require('@hapi/lab');

const { expect } = Code;
const { after, before, describe, it } = exports.lab = Lab.script();

describe('index route', () => {

  before(() => {});

  after(() => {} );

  it('returns true when 1 + 1 equals 2', () => {
      expect(1+1).to.equal(2);
  });
});
