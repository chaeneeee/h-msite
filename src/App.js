import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import PrivateRoute from './route/PrivateRoute';

//1. 전체 상품페이지 , 로그인 , 상품상세페이지
//1.1 navbar 만들기 
//2. 전체 상품페이지에서는 전체상품을 볼 수 있다
///3. 로그인 버튼을 누르면 로그인 페이지가 나온다
//4. 상품 디테일을 눌렀으나 로그인이 안되어있을경우 로그인 페이지가 먼저 나옴
//5. 로그인이 되었을 경우 상품디테일 페이지를 볼 수 있다.
//6. 로그아웃 버튼을 누르면 로그아웃이 된더
//7. 로그아웃이되면 상품상세페이자를 볼 수 없다 다시 로그인 페이지가 본다
//8. 로그인 을 하면 로그아웃이 뜨고 로그아웃이 되면 로그인 버튼이 뜬다
//9. 상품을 검색할 수 있다 .

// 페이지에 공통되게 뜨는 네브바 같은 건 Route 위에 작성한다
function App() {
  let [authenticate, setAuthenticate] = useState(false); //true 면 로그인 됨 false 면 로그인 안됨 
  useEffect(()=>{
    console.log("aaaa" , authenticate)
  },[authenticate]);
  return (
  <div>
      <Navbar/>
      <Routes>
        <Route path="/Login" element={<Login setAuthenticate={setAuthenticate} />} /> 
        <Route path="/" element= {<ProductAll/>} /> 
        <Route path="/Product/:id" element= {<PrivateRoute authenticate/>} /> 
      </Routes>
  </div>
  );
}
export default App;
