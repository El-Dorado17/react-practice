/*

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