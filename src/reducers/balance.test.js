import balanceReducer from './balance'
 import * as constant from '../actions/constants.js'

 describe('balanceReducer', () => {
     it('should set a balance ', () => {
         const balance = 10

         expect(balanceReducer(undefined, {type: constant.SET_BALANCE, balance})).toEqual(balance)

     });
 });