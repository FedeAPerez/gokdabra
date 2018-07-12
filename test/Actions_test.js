const chai = require('chai');
const actions = require('../src/redux/actions/actions');
const actionType = require('../src/redux/actions/actions_type');
const expect = chai.expect();

describe('Debería ', function() {
    it(
        'debería',
        (done) => {
            const expectedObject = {
                type: actionType.START_FETCHING,
                requested_at : 'hola'
            };

            expect(actions.startFetching()).to.deep.equal(expectedObject);
        }
    );
});