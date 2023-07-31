import React, { Component } from "react";
//also imported the Component class 

class Welcome extends Component {
    render(){
        return <h1>Welcome {this.props.name} a.k.a. {this.props.heroName}</h1>
    }
}
//Should extend the Component from react
//should also render some HTML or return null

export default Welcome