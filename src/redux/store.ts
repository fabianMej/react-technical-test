import { createStore, applyMiddleware, compose }  from 'redux';
import { centerReducer } from './reducers/CenterReducer';
import thunk from 'redux-thunk';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    }
  }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(centerReducer, composeEnhancers( applyMiddleware(thunk) ));

export default  store;