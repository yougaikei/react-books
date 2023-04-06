import createRootReducer from './Reducers'
import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

export const history = createBrowserHistory()

const store = createStore(
    createRootReducer(history),
    applyMiddleware(routerMiddleware(history))
)
export default store