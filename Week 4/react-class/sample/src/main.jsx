import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <>
    <h1> bhai mai normal func hu </h1>
    <App />
    </>
  )
}

const reactElement = {
  type : 'a',
  props :{
      href : 'https://react.dev',
      target : '_blank',
  },
  children : "click me to visit react documentation"
}

const newElement = (
  <a href="http://google.com" target="_blank" >Google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  newElement
)
