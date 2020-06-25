import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Loot }  from './Loot'

configure({ adapter: new Adapter(), disableLifecycleMethods: false });

describe('Loot Component', () => {
    const mockFetchbitcoin = jest.fn() 
    let props = {balance: 10, bitcoin: {} }
    let loot = shallow(<Loot {...props} fetchBitcoin={mockFetchbitcoin} />)


     it('should  render properly', () => {
        expect(loot).toMatchSnapshot();
     });
     describe('when mounted', () => {
    const mockFetchbitcoin = jest.fn() 

         beforeEach(() => {
             props.fetchBitcoin = mockFetchbitcoin
             loot = mount(<Loot {...props}  fetchBitcoin={mockFetchbitcoin} />)
         });

         it('should dispatches the fetchBitcoin() method receives from props ', () => {
             expect(mockFetchbitcoin).toHaveBeenCalled()
         });
     });

     describe('when there are valid bitcoin props', () => {
        beforeEach(() => {
          props.fetchBitcoin = mockFetchbitcoin
          props = { balance: 10, bitcoin: { bpi: { USD: { rate: '1,000' } } } };
          loot = shallow(<Loot {...props} fetchBitcoin={mockFetchbitcoin}/>);
        });
    
        it('displays the correct bitcoin value', () => {
          expect(loot.find('h3').text()).toEqual('Bitcoin balance: 0.01');
        });
      });
});
