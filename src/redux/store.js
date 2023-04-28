import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index' ;
import { configureStore } from '@reduxjs/toolkit';
import authenticateReducer from "./reducers/authenticateReducer";
import porductReducer from "./reducers/productReducer";

//let store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

 
const store = configureStore({             
    reducer:{                           
        auth : authenticateReducer,
        product: porductReducer
    }
})

export default store ;
