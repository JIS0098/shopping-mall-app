import { Routes, Route,} from 'react-router-dom'
import './App.css';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import Navbar from './component/Navbar';
import { useState } from 'react';
import PrivateRoute from './route/PrivateRoute';



//1. 전체 상품페이지, 로그인페이지, 상품상세 페이지가 필요하다.
//2. 전체 상품페이지 -전체 상품을 볼수있다
//3. 로그인버튼을 누르면 로그인 페이지가 나온다.
//3. 상품디테일을 눌렀으나 로그인이 안된경우 로그인페이지가 먼저 나온다
//4. 로그인이 되어있을 경우 상품 디테일페이지를 볼수있다.
//5. 로그아웃 버튼을 누르면 로그아웃이 된다.
//5. 로그아웃이 되면 상품 디테일페이지를 볼수없다, 다시 로그인페이지가 보인다.
//6. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
//7. 상품을 검색할수 있다.


function App() {
  const [authenticate,setAuthenticate] =useState(false) 



  return (

    <div className="App">
      <Navbar/> {/*페이지 변경 시에도 고정을 위해 <Navbar/>를 <Routes> 보다 상단에 적어준다*/}
      <Routes>
        <Route path="/" element={<ProductAll/>}/>
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>}/>
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>}/>
      </Routes>
    </div>
  );
}

export default App;
