import {productActions}from "../reducers/productReducer" 

function getProducts( searchQuery){
    return async(dispatch,getState)=>{
    let url = `http://localhost:5000/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    //dispatch({type:"GET_RPODUCT_SUCCESS", payload:{data}});

    dispatch(productActions.getAllProducts({data})) 
    //  payload의 값은 해당함수에 매개변수로 넣어준다.
}
}

export const productAction ={getProducts}

