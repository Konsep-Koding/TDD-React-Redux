 import * as constant from '../actions/constants'
 
  const balance = (state = 0, action) => {
      switch(action.type) {
           case constant.SET_BALANCE:
               return action.balance
           case constant.DEPOSIT:
               return state + action.deposit  
            default: 
                return state
      }
 }


 export default balance