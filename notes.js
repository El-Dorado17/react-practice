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

