

import App from './App.jsx'
import { Provider } from 'react-redux'
import './index.css'
import ReactDOM from 'react-dom/client'

import {store} from "./app/store"
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Provider store={store}>

    <App />
    </Provider>
  
)
