 import * as constants from './constants'
 import  * as actions from './balance'


 it('create an actions action balance', () => {
     
    const balance = 0
    const expectedAction = {type: constants.SET_BALANCE, balance}

    expect(actions.setBalance(balance)).toEqual(expectedAction)
 });

 it('should create an actions to deposit into the balanced ', () => {
    const deposit = 10
    const expectedAction =  {type: constants.DEPOSIT, deposit}
    
    expect(actions.deposit(deposit)).toEqual(expectedAction )
 });


 it('creates an action to withdraw from the balance', () => {
   const withdrawal = 10;
 
   const expectedAction = { type: constants.WITHDRAW, withdrawal };
 
   expect(actions.withdraw(withdrawal)).toEqual(expectedAction);
 });