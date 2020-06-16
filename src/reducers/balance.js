 import * as constant from '../actions/constants'
 
  const balance = (state = 0, action) => {
      switch(action.type) {
           case constant.SET_BALANCE:
               return action.balance
           case constant.DEPOSIT:
               return state + action.deposit  
           case constant.WITHDRAW:
               return state - action.withdrawal
            default: 
                return state
      }
 }


 export default balance