import React from 'react';
import { shallow, configure } from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter(), disableLifecycleMethods: false });

describe('App', () => {
    const app = shallow(<App/>)
    it('Render', () => {
        expect(app).toMatchSnapshot();
    });
    it('should contain `Wallet` component ', () => {
        expect(app.find('Connect(Wallet)').exists()).toBe(true)
    });

    it('should contain `Loot` component ', () => {
        expect(app.find('Connect(Loot)').exists()).toBe(true)
    });
});