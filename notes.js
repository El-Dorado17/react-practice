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
                    ^--COMPONENTS that contain logic
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

/*//? 9 - Props
props is short for properties - optional input component can accept

When specifying a component, you can include additional attributes and render them dynamically

Functional Component uses props.attribute (see Greet.js)
Class Component uses this.props.attribute (see Welcome.js)

PROPS ARE IMMUTABLE : Their value cannot be changed
*/

/*//? 10 - State
Another way to influence what renders on screen

props vs state
        
        A)Props get passed to component
        B)Immutable

        C)  props in Functional Components 
            & 
            this.props in Class Components


        A)State is managed within component
        B)State can be changed!
        
        C)  useState hook Functional Components
            this.state Class Components

        Ultimately both hold info for the UI

        state is an object privately maintained inside a component

        setState sets state in a class component

        In this video we manipulated state with an event-handler (onClick) (See Message.js)


*/

/*//? 11 - setState
installed react snippets extension

Don't update state directly; make function that manipulates it with this.setState (see Counter..js)
AND work off of the previous state if it's continuous updating/manipulation. (previousState + 1)

*/

/*//? 12 - Destructuring Props & State

Basically having the prop local rather than in a different module
*/

/*//? 13 - EventHandling
        see ClassClick and FunctionClick modules

*/

        
//   {/* <FunctionClick/>
//       <ClassClick/>
//       <EventBind/> */}
//       {/* <Message/> */}
//       {/* <Counter/> */}
//       {/*<Greet name="Bruce" heroName="Batman"> 
//         <p>This is children props</p> 
//       </Greet>
//       <Greet name="Clark" heroName="Superman">
//         <button>Action</button>
//       </Greet>
//       <Greet name="Diana" heroName="Wonder Woman"/>

//       <Welcome name="Bruce" heroName="Batman"/>
//       <Welcome name="Clark" heroName="Superman"/>
//       <Welcome name="Diana" heroName="Wonder Woman"/>
//       <Hello/> */}
    

/*//? 14 - Binding Event Handlers


*/


//! Shortcut for writing a functional component: rfc + tab

/* //* Use State:

Fundamental hook allows us to add state to functional components. //! Class-based are pretty old and outdated

function Counter() {
  const [count, setCount] = useState(0); // Initial value is 0
    'count' is the current state value
    'setCount' is the function to update the state
}




useEffect
    typically watches for something (in the dependency array)
    to change, so that the EFFECT can be executed

    For example:

    useEffect(()=>{
        side effect goes here (i.e. change everything to yellow)
    } [dependencies]) (i.e. when the state changes)


useContext, and useReducer

small project
state management
api integraion

*/


/*
? COUNTER
usestate and useeffect

function ViewCounter() {
    const [viewCount, setViewCount] = useState(0);

useEffect(() => {
    /Get the current view count from local storage
    const storedViewCount = localStorage.getItem('viewCount');

    / If a view count is stored, update the state with it
    if (storedViewCount) {
        setViewCount(parseInt(storedViewCount));
    } else {
        / If no view count is stored, initialize it to 0
        setViewCount(0);
    }
}, []);

useEffect(() => {
    / Update the view count in local storage
    localStorage.setItem('viewCount', viewCount.toString());
}, [viewCount]);

*/