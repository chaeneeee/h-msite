
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch,faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
const Navbar = ({ authenticate, setAuthenticate }) => {
    const menuList = ['여성', 'Divided','남성', '신생아/유아', '아동', 'H&M Home' , 'Sale', '지속가능성' ]
    const navigate = useNavigate() 
    
    
    const goToLogin=() => {
     navigate("/login")
    }
  
  //   const search = (event) => {
  //     if (event.key === 'Enter') {
  //         console.log('search')
  //         let keyword=event.target.value
  //         navigate(`/?q=${keyword}`)

  //     }

  // }
 
  let [width, setWidth] = useState(0);
// 따로 설정부분 





  const onCheckEnter = (event) => {
    if (event.key === "Enter") {
      navigate(`?q=${event.target.value}`);
    }
  };


    return (

      // 사이드 메뉴 다시보기 
   <div>
      <div className="side-menu" style={{ width: width }}>
        <button className="closebtn" onClick={() => setWidth(0)}>
          &times;
        </button>
        <div className="side-menu-list" id="menu-list">
          {menuList.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>
      <div className="nav-header">
        <div className="burger-menu hide">
          <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
        </div>

      
{/* 로그인 로그아웃 다시 해보기 */}




        <div className='login-button' onClick={goToLogin}>
         
      <FontAwesomeIcon icon={faUser} />
      <div>로그인</div>
     
        </div>
      <div className='nav-section'>
        <Link to= "/">
        <img width={100}
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx34_BYfREZvjzO9J0fY02osH8hrHcYZLLPQuPKViulg&s'/>
        </Link></div>       
       
            <div className='menu-area'>
            <ul className='menu-list'>
                {menuList.map(menu=><li>{menu}</li>)}
            </ul>
           

            <div className='search-area'>
                <FontAwesomeIcon icon= {faSearch}/>
                <input type="text"  onKeyPress={onCheckEnter} placeholder='제품검색' className='input-area'/>
            </div>
        </div>


    </div>
  </div> )
}

export default Navbar
