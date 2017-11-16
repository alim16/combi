
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

//uncomment and import/setup redux saga
//import {composeWithDevTools} from 'redux-devtools-extension'
//import redux-saga


import messageReducer from './reducers/message'
import paymentReducer from './reducers/payment'

const reducer = combineReducers({
    message: messageReducer,
    payment: paymentReducer
})

export default createStore(reducer
//, composeWithDevTools(applyMiddle(redux-saga))
, composeWithDevTools(applyMiddleware(thunk))
)

