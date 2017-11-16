import {payEth} from '../ethServices'


const PAY_OWNER = "PAY_OWNER"
const CURRENT_UPDATE = 'CURRENT_UPDATE'

const initialState = {
    currentAmount: 0,
    amountPaidToDate:0,
    message: "nothing yet"
}

export const payOwner = (amount) => ({type:PAY_OWNER, payload:amount})
export const updateValue = (val) => ({type:CURRENT_UPDATE, payload:val})


export const makePayment = (amount) => {
    return (dispatch) => {
       // dispatch(showMessage('paying...'))
        payEth(amount)
        console.log('test')
            //then(res=>dispatch(payOwner(amount)))
    }
}


export default function (state=initialState, action){
    switch (action.type) {
        case PAY_OWNER:
           return {...state, amountPaidToDate: state.amountPaidToDate+=action.payload}
        case CURRENT_UPDATE:
            return {...state, currentAmount: action.payload}
        default:
           return state
    }
}