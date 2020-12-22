import React from 'react'
import ReactDOM from 'react-dom'
import Homepage from '../components/Homepage';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

const App = () => (
  <Homepage />
)


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})
