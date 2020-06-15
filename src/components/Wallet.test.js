import React from 'react';
import { shallow, configure } from 'enzyme';
import Wallet from './Wallet';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter(), disableLifecycleMethods: false });

describe('Wallet', () => {
    const wallet = shallow(<Wallet/>)
    it('Render', () => {
        expect(wallet).toMatchSnapshot();
});
});