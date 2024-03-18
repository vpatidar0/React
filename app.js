import React from "react";
import ReactDOM from 'react-dom/client';
import store from "./store";
import { addTask, completedTask, removeTask } from "./action";
// Pure react or js it is core of  React
const parent=React.createElement('div',{id:'parent'},
    [React.createElement('div',{id:'child'},
    [React.createElement('h1',{},'Hello i am h1 tag'),React.createElement('h2',{},'Hello i am h2 tag')]),
    React.createElement('div',{id:'child2'},
    [React.createElement('h3',{},'Hello i am h3 tag'),React.createElement('h4',{},'Hello i am h4 tag')])])

// React createElement => ReactElement (JS Object) =>HTMLElement(render)
const heading =React.createElement('h1',{id:'heading'},'Hello world');
const root = ReactDOM.createRoot(document.getElementById('root'));


// it call every time when same action on redux
const unsubscribe= store.subscribe(()=>{
    console.log('subscribe',store.getState())
})

store.dispatch(addTask("Task 1"))

// unsubscribe main not call subscribe
// unsubscribe()  
console.log(store.getState(),'store')

store.dispatch(removeTask(1))
console.log(store.getState(),'store')
store.dispatch(addTask("Task 1"))

store.dispatch(completedTask(2))


// Create a h1 tag using jsx  JSX - is not HTML in JS - It is HTML or XML like syntax  
// JSX this code Transpiled before it reaches the JS Engine
// JSX => React.createElement => ReactElement (JS Object) =>HTMLElement(render)
// JSX => Babel transpiled it to React.createElement => ReactElement (JS Object) => HTMLElement(render)
// React Component
const em=<span>span</span>
const jsxHeading =(<div> <h1 id="heading"> {em} Hello JSX </h1></div>);

// React Function Component
const Title=()=>(
    <div>Hello</div>
)
const number=100;
const number1=100;
// Component Compositions
const HeadingComponent=()=>{
    return <div><Title/>{jsxHeading}<h1>{number+number1}</h1><h1 className="heading">Hello world ok</h1></div>;
}
console.log(jsxHeading,heading,root);
root.render(<HeadingComponent/>);