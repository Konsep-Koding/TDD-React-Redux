import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Loot }  from './Loot'

configure({ adapter: new Adapter(), disableLifecycleMethods: false });

describe('Loot Component', () => {
    const mockFetchbitcoin = jest.fn() 
    const props = {balance: 10, bitcoin: {} }
    let loot = shallow(<Loot {...props} fetchBitcoin={mockFetchbitcoin} />)


     it('should  render properly', () => {
        expect(loot).toMatchSnapshot();
     });
     describe('when mounted', () => {
         beforeEach(() => {
             props.fetchBitcoin = mockFetchbitcoin
             loot = mount(<Loot {...props}  fetchBitcoin={mockFetchbitcoin} />)
         });

         it('should dispatches the fetchBitcoin() method receives from props ', () => {
             expect(mockFetchbitcoin).toHaveBeenCalled()
         });
     });
});