import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './real/App'
import Parent from './real/useContext'
// import App from './simpleExample/App.jsx'
// import PesaProvider from './simpleExample/context/usePesa.jsx'
// import PesaProvider2 from './simpleExample/context/usePesa2.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Parent>
    <App />
  </Parent>
)
