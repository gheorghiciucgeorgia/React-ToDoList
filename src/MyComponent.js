import React, { Component } from "react";
import pre from "pug-to-react-element";
 
// config indentation size in range from 2 (default) to 4 if it needs
// pre.tabSize = 4;
 
const markup = `
 
div() 0#[span() 1]2#[span() 3]4
div()
  div() 5
    6
    span() 7
    8
div() 9
    div() 10
      div() 11
    input(type="tel" required)
 
`;
 
class MyComponent extends Component {
    render() {
        return pre(markup);
    }
}
 
export default MyComponent;