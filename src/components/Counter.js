import React, { Component } from 'react'

class Counter extends Component {

constructor(props) { // TODO: This constructor is our initial state
  super(props)

  this.state = {
     count: 0
  }
}

increment(){ //TODO: This increment function sets the state after the increment button is clicked and 
            //TODO: gives a callback function of the updated state to see in the console
            //TODO: Parameter 1 is the logic (count + 1)
            //TODO: Parameter 2 is an arrow function that c-logs the new state of count
    this.setState({
        count: this.state.count + 1
        
    }, 
    () => {
        console.log('Callback value', this.state.count)
        }
    )
    console.log(this.state.count) //console.log is being called before the state is set, so the console log is 1 number behind
}
//to do this AFTER STATE is updated, pass a callback function as the second parameter of the setState function

  render() { //TODO: This is the render method - literally just displays what's here
    return (
      <div>
        <div>Count: {this.state.count} </div>
        <button onClick={()=>this.increment()}>Increment</button>
      </div>
    )
  }
}

export default Counter


