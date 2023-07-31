import React from "react"; //Always import React

// function Greet () {
//     return <h1>Hello, Ely</h1>
// }

export const Greet = () => <h1>Hello, Ely</h1>

export default Greet
 //default export allows us to change the component name to WHATEVER we want in the module we call it in 
 //(literally can change it to import TACO and call TACO in the function and it works)

 //named exports
 //When export is included in the function declaration above, (i.e. export const Greet...) then it
 //will only go by the functions name in the module it's imported to 
 //! AND REQUIRES import { FunctionName } from "./path"