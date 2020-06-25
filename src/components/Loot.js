import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchBitcoin } from '../actions/bitcoin'

export class Loot extends Component {
  componentDidMount() {
    this.props.fetchBitcoin();
  }

  computeBitcoin(){
     const bitcoin  = this.props.bitcoin

     if(Object.keys(bitcoin).length === 0) return '0.01'
     return this.props.balance / parseInt(bitcoin.bpi.USD.rate.replace(',', ''), 10)
  }
  render() {
    console.log('this', this.computeBitcoin())
    return (
      <h3>Bitcoin balance: {this.computeBitcoin()}</h3>
    )
  }
}

export default connect(state => state, { fetchBitcoin })(Loot);