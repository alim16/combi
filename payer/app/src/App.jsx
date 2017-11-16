import React,{Component} from 'react'
import {connect} from 'react-redux'
import {makePayment,updateValue} from './reducers/payment'

import Message from './components/Message'


class App extends Component{

    handleInputChange = (evt)=>{
       const value = evt.target.value
       this.props.updateValue(value)
    }


    handleSubmit = (evt) => {
        evt.preventDefault()
        this.props.makePayment(this.props.amount)
    }

    render(){
        const {amount} = this.props
        return (
        <div>
            <Message message=""/>
            <br/>
            <form onSubmit={this.handleSubmit}>
                <label>
                Enter Value:
                <input type="text" 
                //onChange={this.handleInputChange}
                value={amount}
                onChange={this.handleInputChange}
                />
                </label>
                <br/>
                <input type="submit" value="Submit" className="btn btn-primary"/>
            </form>
            
        </div>
        )
    }
}


export default connect(
    (state) => ({amount:state.payment.currentAmount}),
    {updateValue,makePayment}
)(App)
//export default App