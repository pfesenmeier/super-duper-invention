const Code = require('@hapi/code');
const Lab = require('@hapi/lab');
const Server = require('../server.js');

const { expect } = Code;
const { after, before, describe, it } = exports.lab = Lab.script();

describe('index route', () => {
	const payload = {
          url: '/'
	};
	Server.inject(payload);
	it('should return \' hello world \'', () => {
	  const response = Server.inject(payload);
	  expect(response === 'hello world');
	});
});
