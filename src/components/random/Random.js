import { useState,  useEffect } from "react";
import React from "react";

//I BUILT IT ON MY OWN!!! (before the local storage sections)
export function Random() {
  const initialCount = parseInt(localStorage.getItem('count')) || 0
  const [count, setCount] = useState(initialCount)

  const increment = () =>{
    setCount (count + 1 )
  }

  const decrement = () =>{
    setCount (count - 1)
  }

  const five = () =>{
    setCount (count + 5)
  }

  const timesFive = () =>{
    setCount (count * 5)
  }

  const reset = () =>{
    setCount(0)
  }

  const oops = () =>{
    alert('Effective. Power   لُلُصّبُلُلصّبُررً ॣ ॣh ॣ ॣ 冗')
  }

  useEffect(()=>{
    //update local storage when count changes
    localStorage.setItem('count', count.toString())
  }, [count])


return (
    <div>
      <p>Look I built this counter!:</p>
      <h3>{count}</h3>
      <button onClick={increment}>Increment Button</button>
      <br/>
      <button onClick={decrement}>Decrement</button>
      <br/>
      <br/>
      <button onClick={five}>+5</button> <button onClick={timesFive}>x5</button> 
      <br/>
      <button onClick={oops}>Dont click this</button> 
      <br/>
      <br/>
      <button onClick={reset}>Reset Count</button>
    </div>
  )
}











//So this is the counter that will reset upon refresh; but it IS possible to make it work
// off of LOCAL STORAGE so I can keep tracking something even if I refresh
/*
import React, { useState } from 'react';


export function Random(){

  const [count, setCount] = useState(0)
      count is the CURRENT value; setCount updates the state

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Click to increment!</button>
    </div>
  )
}


*/





// function Random () {

//     const greet =()=>{
//         alert('Aye!')
//     }
//     return (
//       <div>
//         <button onClick={greet}> Click Me?</button>
//       </div>
//   )
// }

// export default Random

//Okay I tried to do this on my own without a guide or tutorial and am failing
//I will look at it tomorrow!
//*GOT IT

