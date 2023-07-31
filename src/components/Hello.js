import React from "react";

//Component written with JSX
// const Hello = () => {
//     return (
//         <div className='fakeClass'>
//             <h1>Hello, Ely</h1>
//         </div>
//     )
// }

//JSX elements prevent us from calling React.createElement nested within itself 100 times if needed.


//Without JSX
const Hello = () => {
    return React.createElement(
        'div', 
        {id:"hello", className:'fakeClass'}, 
        React.createElement('h1', null, 'Hello, Ely') )
}
//React provides a CreateElement Method
//param 1: string specifying HTML element to render
//param 2: any optional properties like className, id, etc
//param 3: children of HTML element

//originally written like this: 
    //return React.createElement('div', null, '<h1>', 'Hello, Ely')
    //but h1 doesn't render as a node - ren ders as text within the div tag
    //so we need to re-createElement to incorporate a proper h1

export default Hello