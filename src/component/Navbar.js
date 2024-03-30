import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faX, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const [isActive, setIsActive] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const inputRef = useRef(null);
  const goToHome = () => {
    navigate("/");
  };
  const menuClick = () => {
    setIsActive(!isActive);
  };
  const navigate = useNavigate();
  const searchClick = () => {
    setIsShow(!isShow);
  };

  const menuList = [ "여성","Divided","남성","신생아/유아","아동","H&M Home","Sale","지속가능성",
  ];
  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value; 
      navigate(`/?q=${keyword}`);
  
    }
  };
  return (
    <header className="header">
      <div >
        {authenticate ? (
          <div onClick={() => setAuthenticate(false)} className="login-button">
            <FontAwesomeIcon icon={faUser} />
            <div style={{ cursor: "pointer" }}>로그아웃</div>
          </div>
        ) : (
          <div onClick={() => navigate("/login")} className="login-button">
            <FontAwesomeIcon icon={faUser} />
            <div style={{ cursor: "pointer" }}>로그인</div>
          </div>
        )}
      </div>
      <div className="nav-section">
        <img
          className="logo-img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx34_BYfREZvjzO9J0fY02osH8hrHcYZLLPQuPKViulg&s
          "

          onClick={goToHome}
        ></img>
      </div>

      <div className="menu-area">
        <button className="menu-btn" onClick={menuClick}>
          <FontAwesomeIcon icon={faBars} />
        </button>

        <nav className={"menu-list " + (isActive ? "active" : "")}>
          <ul>
            {menuList.map((menu) => (
              <li key={menu}>{menu}</li>
            ))}
          </ul>
          <button className="close-btn" onClick={menuClick}>
            <FontAwesomeIcon icon={faX} />
          </button>
        </nav>

        <div className="menu-search ">
          <FontAwesomeIcon
            icon={faSearch}
            className="search-btn"
            onClick={searchClick}
          />
          <input
            type="text"
            onKeyDown={(event) => search(event)}
            placeholder="Search"
            ref={inputRef}
          />
          <button className="search-close" onClick={searchClick}>
            <FontAwesomeIcon icon={faX} />
          </button>
        </div>

        <div
          className={"bg-area " + (isActive ? "active" : "")}
          onClick={menuClick}
        ></div>
      </div>
    </header>
  );
};

export default Navbar;
