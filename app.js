import React from "react";
import ReactDOM from 'react-dom/client';
const parent=React.createElement('div',{id:'parent'},
    [React.createElement('div',{id:'child'},
    [React.createElement('h1',{},'Hello i am h1 tag'),React.createElement('h2',{},'Hello i am h2 tag')]),
    React.createElement('div',{id:'child2'},
    [React.createElement('h3',{},'Hello i am h3 tag'),React.createElement('h4',{},'Hello i am h4 tag')])])

const heading =React.createElement('h1',{id:'heading'},'Hello world')
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent);