import bitcoinReducer from './bitcoin'
import { FETCH_BITCOIN } from '../actions/constants'


describe('bitcoin reducer', () => {
    const bitcoinData = {bpi: 'bitcoin price index'}
     
    it('should fetch and set bitcoin data', () => {

        expect(bitcoinReducer({}, {type: FETCH_BITCOIN, bitcoin: bitcoinData })).toEqual(bitcoinData)


    });
});