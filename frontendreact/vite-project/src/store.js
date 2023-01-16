import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// import reducer from '../reducers/gameReducer';
import gameReducer from './reducers/gameReducer';

const store = createStore(gameReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;