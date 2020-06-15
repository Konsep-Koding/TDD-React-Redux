import balanceReducer from './balance'
 import * as constant from '../actions/constants.js'

 describe('balanceReducer', () => {
     it('should set a balance ', () => {
         const balance = 10

         expect(balanceReducer(undefined, {type: constant.SET_BALANCE, balance})).toEqual(balance)
     });

     it('should deposits into the balanced', () => {
         const deposit = 10 
         const initialState = 5
         expect(balanceReducer(initialState, {type: constant.DEPOSIT, deposit})).toEqual(initialState + deposit)
     });
 });