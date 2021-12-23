import React from 'react'
import ReactDOM from 'react-dom'
import { Provider} from 'react-redux'
import App from './App'
import store from './components/redux/root-reducer'
import './styles.scss'


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
