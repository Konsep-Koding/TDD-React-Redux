 import * as constant from '../actions/constants'
 import {read_cookie, bake_cookie} from 'sfcookies'

 const BALANCE_COOKIE = 'BALANCE_COOKIE'
  const balance = (state = 0, action) => {
      let balance
      switch(action.type) {
           case constant.SET_BALANCE:
               balance = action.balance
                break 
           case constant.DEPOSIT:
               balance = state + action.deposit  
                break
           case constant.WITHDRAW:
               balance = state - action.withdrawal
                break
            default: 
                balance = parseInt(read_cookie(BALANCE_COOKIE), 10) || state 
      }

      bake_cookie(BALANCE_COOKIE, balance)
      return balance
 }


 export default balance