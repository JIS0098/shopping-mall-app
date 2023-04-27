import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];

  const navigate = useNavigate();
  const goToLoginPage = () => {
    navigate("/login");
  };
  const search = (event) => {
    if (event.key === "Enter") {
      //입력한 검색어를 읽어와서 url을 바꿔준다
      let keyword = event.target.value; //원하는 상품으로 url 바꾸기
      navigate(`/?q=${keyword}`);
    }
  };
  const goToHomePage = () => {
    navigate("/");
  };

  const authenticate = useSelector((state)=>state.auth.authenticate);

  return (
    <div>
      <div>
        <div className="login-button">
          {authenticate ? ( // 삼항연산식은 리턴부분에도 사용이 가능하다.
            <div onClick={() => authenticate(false)}>
              <FontAwesomeIcon icon={faUser} />
              <span style={{ cursor: "pointer" }}>로그아웃</span>
            </div>
          ) : (
            <div onClick={() => navigate("/login")}>
              <FontAwesomeIcon icon={faUser} />
              <span style={{ cursor: "pointer" }}>로그인</span>
            </div>
          )}
        </div>
      </div>

      <div className="nav-section">
        <img
          onClick={goToHomePage}
          width={100}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/800px-H%26M-Logo.svg.png"
        ></img>
      </div>
      <div className="menu-array">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <div className="menu-search">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" onKeyDown={(event) => search(event)} />
          {/*컨트롤 쉬프트는 인식x*/}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
