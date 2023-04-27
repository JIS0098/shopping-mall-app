import { combineReducers } from "redux";
import authenticateReducer from "./authenticateReducer";
import porductReducer from "./productReducer";


export default combineReducers({ // 액션두개를 합쳐서 스토어로 한번에 보낸다.
    auth : authenticateReducer,
    product: porductReducer
}) ;