import React from 'react'

function FunctionClick() {

    function clickHandler(){
        console.log('Button was clicked')
    }

  return (
    <div>
        <button onClick={clickHandler}>Click</button> 
    </div>
  )
}

export default FunctionClick

//Don't put () on clickHandler in line 11 - it is a 
//function but when parenth are added

//it becomes a function call - when refreshed or initially rendered
// it is already there :/