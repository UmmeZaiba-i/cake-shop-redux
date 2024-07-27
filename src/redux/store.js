import {createStore} from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'; -  this is for npm redux-devtools which is depricated - no longer used
import { rootReducer } from './rootReducer'
// Redux Logger is a middleware that logs every action dispatched in a Redux application, 
// along with the state before and after the action is processed
// so this actually logs in the console which helps the developers to undertand the flow of data and states changes in our app 
// import logger from 'redux-logger'


// here dont use window._redux devtools along with applymiddleware logger
// const store = createStore(rootReducer, applyMiddleware(logger))
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store