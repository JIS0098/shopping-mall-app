


function loginUser(id,password){ //dispatch로 아이디와 비번을 받는다.
    return (dispatch,getState)=>{
        dispatch({type:"LOGIN-SUCCESS",payload:{id,password}});
    }
}

export const authenticateAction ={loginUser}