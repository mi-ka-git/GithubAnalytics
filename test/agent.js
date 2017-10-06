const request = require('superagent');
const { username, token } = require('../auth.json');
const chai = require('chai');
const fs = require('fs');

const owner = 'lognaume';
const repo = 'HEIGVD-PRO-Project';
const url = `https://api.github.com/repos/${owner}/${repo}`;

const should = chai.should();

describe('the Github API', () => {
  it('allows me to get a list of pull requests', (done) => {
    request
      .get(url)
      .auth(username, token)
      .set('Accept', 'application/vnd.github.v3+json')
      .end((err, res) => {
        should.not.exist(err);
        should.exist(res);
        fs.writeFileSync('./response.json', JSON.stringify(res, null, 2));
        done();
      });
  });
});