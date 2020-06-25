import rootReducer from './index'
describe('rootReducer', () => {

    it('should  initial the default state', () => {
        expect(rootReducer({}, {})).toEqual({balance:0, bitcoin:{}})
    });
});