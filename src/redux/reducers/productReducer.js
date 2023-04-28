import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  productList: [],
};

// function porductReducer(state=initialState,action){
// 	let {type,payload} =action;
//     switch(type) {
//         case "GET_RPODUCT_SUCCESS":
//             return{...state, productList:payload.data};
//         default:
//             return{...state};

//     };
// }

// export default porductReducer // reducer 추출

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getAllProducts(state, action) {
      state.productList = action.payload.data;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
