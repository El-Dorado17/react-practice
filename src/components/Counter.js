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
    // this.setState({
    //     count: this.state.count + 1
        
    // }, 
    // () => {
    //     console.log('Callback value', this.state.count)
    //     }
    // )
    // console.log(this.state.count) //console.log is being called before the state is set, so the console log is 1 number behind
    this.setState((prevState)=> ({
        count: prevState.count+1
    }))
}
//to do this AFTER STATE is updated, pass a callback function as the second parameter of the setState function



incrementFive() { //Tried to increment by five with this function alone, but it wouldn't work because 
                    //we the original increment function was going off of the CURRENT state
                    //when it should always be going off previous state + 1
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
}



  render() { //TODO: This is the render method - literally just displays what's here
    return (
      <div>
        <div>Count: {this.state.count} </div>
        <button onClick={()=>this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Counter


