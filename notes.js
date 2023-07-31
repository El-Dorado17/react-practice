/* //? 1 - Intro

    What is React? 
        Library, not a framework, focused on UI

        *REACT EXPRESSES STATE AS HTML*                 //misc notes:
                                                        UseEffect Observes
                                                        UseState Establishes

                                                        (function to run) = {updates state variable} 
                                                        [state to observe]
                                                        - state flows downward -
*/

/* //? 2 - Hello World
(deleted most of App.js to observe direct changes on DOM)
*/

/* //? 3 - FOLDER STRUCTURE

1 - DOM Renders public/index.html

2 - index.html contains <div id="root"></div>

3 - index.js contains:
        const root = ReactDOM.createRoot(document.getElementById('root'));  //!<-- ...in here
        root.render(
        <React.StrictMode>
            <App /> //! <--- Render this component...
        </React.StrictMode>
        );
    3A - Here it's basically saying to render the <App /> component in index.html's root/div tag

4 - App.js contains the html that will get passed along all the other modules and onto the browser!


    DOM
      ^--index.html
            ^--index.js
                ^--App.js
                    ^--CODE 
*/

/* //? 4 - COMPONENT TYPES

1 - Stateless Functional Components
            SFC's are literally Javascript functions:
                function Welcome(props){
                    return <h1> Hello, {props.name} <h1>
                }

2 - Stateful Class Component
            ES6 Classes that MUST contain a render method that returns HTML:
                class Welcome extends React.Component {
                    render() {
                        return <h1> Hello, {this.props.name} <h1>
                    }
                }
                //* I am unfamiliar with classes
    
 components - reusable code and can be nested within other components. building blocks of react projects
*/

/* //? 5 - FUNCTINONAL COMPONENTS

    Javascript function accepts input of propertues and returns HTML that describes UI 

**SEE GREET.JS FOR EXAMPLES AND EXPLANATIONS**
*/

/*//? 6 - CLASS COMPONENTS

Class Components are ES6 Classes components that can receive props as input and output html/jsx
    -It can maintain private internal state (meaning it can keep 
        information private to that component and describe UI)

    FUNCTIONAL VS CLASS
            
        Functional
            -Simple functions; use as much as possible
            -no need for 'this' keyword
            -Mainly responsible for UI - no need to keep track of state; makes debug easier

        Class
            -More feature-rich (complex UI logic)
            -Maintain their own state
            -provide lifecycle hooks??

*/

/*//? 7 - HOOKS UPDATE
        (the video notes above were from BEFORE React introduced Hooks)
        Hooks allows us to USE STATE //!WITHOUT WRITING A CLASS
        so basically I need a different tutorial video for hooks once I'm done with this tutorial
        to understand what hooks help us with!
        He goes into hooks later anyway! All is well
*/

/*//? 8 - JSX
Extension to Javascript that mixes XML into JavaScript
JSX makes code simpler and familiar & ultimately transpiles to pure JScript in browser

JSX condenses space - cleaner and more readable code
*/

/*//? Props
*/

/*//? State
*/

/*//? setState
*/

/*//? Destructuring Props & State
*/

