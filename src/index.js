import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// component file
import TodoContainer from "./functionBased/components/TodoContainer"
//stylesheet
import './functionBased/App.css'
import { BrowserRouter as Router } from "react-router-dom"

//ReactDOM.render(<TodoContainer />, document.getElementById('root') )

ReactDOM.render(
    <React.StrictMode>
      <Router>
        <TodoContainer />
      </Router>
    </React.StrictMode>,
    document.getElementById("root")
  )

//var element = React.createElement('h1', {className: 'greeting'}, 'Hello Kiran, The whole world is yours. enjoy');
//ReactDOM.render(element, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

//const element = <h1>Hello, from create React App </h1>
//ReactDOM.render(element, document.getElementById('root'))
