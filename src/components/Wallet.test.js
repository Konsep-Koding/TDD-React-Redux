import React from 'react';
import { shallow, configure } from 'enzyme';
import { Wallet  } from './Wallet';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter(), disableLifecycleMethods: false });

describe('Wallet', () => {
    const props =  {balance : 20 }

    const wallet = shallow(<Wallet {...props}/>)
    it('Render', () => {
        expect(wallet).toMatchSnapshot();
});
    it('should dispay data balance', () => {

        expect(wallet.find('.balance').text()).toEqual('Wallet balance: 20')
    });

    it('should create an input deposit into or withdraw from the balance', () => {
        expect(wallet.find('.input-wallet').exists()).toBe(true)
    });

   describe('when user typpe into wallet input', () => {
     const userBalance = '25'
     // On change Text test before this
     beforeEach(() => {
         wallet.find('.input-wallet').simulate('change', {target:{value: userBalance}})
     });
    // And the we simulated that 
     it('should updates the local wallet balance in `state`  and converts in to a numbers', () => {
         expect(wallet.state().balance).toEqual(parseInt(userBalance, 10))
     });
   });

});