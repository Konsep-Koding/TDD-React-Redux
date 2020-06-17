import balanceReducer from './balance'
import balanceReducer2  from './balance'
import * as constant from '../actions/constants.js'
import balance from './balance'

 describe('balanceReducer', () => {

    describe('when initializing  ', () => {
         const balance = 10
        it('should set a balance ', () => {
            expect(balanceReducer(undefined, {type: constant.SET_BALANCE, balance})).toEqual(balance)
        });
   
       //  For check the user cookies
        describe('re-installling ', () => {
            it('should read the balance from the cookies', () => {
                expect(balanceReducer2(undefined, {})).toEqual(balance)
            });
        });
    });

  

     it('should deposits into the balanced', () => {
         const deposit = 10 
         const initialState = 5
         expect(balanceReducer(initialState, {type: constant.DEPOSIT, deposit})).toEqual(initialState + deposit)
     });

     it('should withdraws from balance ', () => {
          const withdrawal = 10
          const initialState = 10 

          expect(balanceReducer(initialState, {type: constant.WITHDRAW, withdrawal})).toEqual(initialState - withdrawal)
     });
 });