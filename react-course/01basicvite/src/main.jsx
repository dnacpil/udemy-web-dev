import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const ReactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
        children: 'Click me to visit google'
}


function MyApp(){
  return (
    <div>
      <h1>Custom React app</h1>
    </div>
  )
}

const AnotherElement = (
  <a href="https://www.google.com" target="_blank">
    Click me to visit google
  </a>
)

const ActualReactElement = React.createElement(
  'a',
  {
    href: 'https://www.google.com',
    target: '_blank'
  },
  'Click me to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(

    <App />
 
)
