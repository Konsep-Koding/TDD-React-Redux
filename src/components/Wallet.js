import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deposit, withdraw } from '../actions/balance'

 
 export class Wallet extends Component {
     constructor(props) {
         super(props)
         this.state = {
             balance: undefined
         }
     }
// On change Text test
    updateBalance = event =>  this.setState({balance: parseInt(event.target.value)})
    deposit = () => this.props.deposit(this.state.balance)
    withdraw = () => this.props.withdraw(this.state.balance)
    render() {
        return (
          <div>
              <h3 className='balance'>Wallet balance: {this.props.balance}</h3>
              <br/>
              <input className='input-wallet' type='number' required onChange={this.updateBalance}/>
              <button className='btn-deposit' onClick={this.deposit}> Deposit </button>
              <button className='btn-withdraw' onClick={this.withdraw}> Withdraw </button>

          </div>
        )
    }
}
export default connect(state => state, {deposit, withdraw})(Wallet)

 