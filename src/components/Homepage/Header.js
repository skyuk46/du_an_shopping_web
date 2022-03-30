import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import userIcon from "../../assets/images/user-icon.png";
import cartIcon from "../../assets/images/cart.png";
import { useSelector, useDispatch, connect } from "react-redux";
import { useState } from "react";
import SearchResultProduct from "./SearchResultProduct";
import { withTranslation } from "react-i18next";
import { SearchOutlined } from '@ant-design/icons';
import "../../containers/home/home.scss";
import { logout } from "../../stores/auth/auth.action";
import { redirectRouter } from "../../utils/router";
// import { getProductByWord } from "../../services/api/apiService";
// import MenuBar from "./MenuBar";
// import { getProductNumber } from "../../features/productSelectedSlice";
import { Row, Col, Menu, Button, Input, Dropdown } from "antd";

function Header(props) {
  const dispatch = useDispatch();
  // dispatch(
  //     getProductNumber({
  //         number: JSON.parse(window.localStorage.getItem("numberOfItem")),
  //     })
  // );
  // var productSelected = useSelector((state) => state.productSelected.value);
  // const username = useSelector((state) => state.userLogIn.username);
  const [searchResult, setSearchResult] = useState([]);
  const [displaySearchResult, setDisplaySearchResult] = useState("none");
  const { t } = props;

  const logOutMenu = (
    <Menu>
      <Menu.Item>
        <a onClick={() => LogOut()}>
          {t('user.logout')}
        </a>
      </Menu.Item>
    </Menu>
  );

  const logInMenu = (
    <Menu>
      <Menu.Item>
        <a onClick={() => redirectRouter('/login')}>
          {t('user.login')}
        </a>
      </Menu.Item>
    </Menu>
  );

  const iconList = [
    {
      icon: userIcon,
      content: "Đăng nhập, đăng ký",
      link: "/login",
    },
    {
      icon: cartIcon,
      content: "Giỏ hàng của bạn 0 sản phẩm",
      link: "/cart",
    },
  ];

  const SearchProduct = async (e) => {
    if (e.target.value === "") setDisplaySearchResult("none");
    else {
      // let res = await getProductByWord(e.target.value);
      // setSearchResult(res.data.data);
      // setDisplaySearchResult("");
    }
  };

  const LogOut = () => {
    props.logout({ token: window.localStorage.getItem('token') })
  };

  return (
    <>
      <div id="header-container">
        <Row style={{ height: 'inherit' }} direction="row" justifyContent="space-evenly" spacing={4}>
          <Col span={4}>
            <Link to="/">
              <img
                id="logo"
                src={logo}
                alt="logo"
              />
            </Link>
          </Col>
          <Col span={8} style={{ display: 'table' }}>
            <div id="search-bar">
              <Input
                placeholder={t('common.searchPlaceholder')}
                onChange={SearchProduct}
                prefix={<SearchOutlined />}
                style={{ borderRadius: '10px' }}
                size={"large"}
              />
              <div
                style={{
                  position: "absolute",
                  top: "38px",
                  zIndex: "1",
                  display: displaySearchResult,
                  border: "solid 1px black",
                  backgroundColor: "white",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    color: "red",
                    marginBottom: "10px",
                    fontSize: "20px",
                    textAlign: "center",
                  }}
                >
                  Sản phẩm gợi ý
                </div>
                {searchResult.map((i) => {
                  return (
                    <SearchResultProduct
                      setDisplaySearchResult={setDisplaySearchResult}
                      product={i}
                    />
                  );
                })}
              </div>
            </div>
          </Col>
          <Col span={4} offset={8} id="icon-container">
            {iconList.map((i) => {
              return (
                <>
                  {i.link === "/login" && window.localStorage.getItem('userInfo') ? (
                    <div className="icon">
                      <Dropdown overlay={logOutMenu} placement="bottom" >
                        <img height="38" src={i.icon} alt="userIcon" />
                      </Dropdown>
                    </div>
                  ) : (i.link === "/login" && !window.localStorage.getItem('userInfo')) ? (
                    <div className="icon">
                      <Dropdown overlay={logInMenu} placement="bottom" >
                        <img height="38" src={i.icon} alt="userIcon" />
                      </Dropdown>
                    </div>) : (
                    <Link
                      to={i.link}
                      id="content"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <img height="38" src={i.icon} alt="userIcon" /> {i.content}
                    </Link>
                  )}
                </>
              );
            })}
          </Col>
          <Row item md={2} sm={false} xs={false}></Row>
        </Row>
        {/* <MenuBar /> */}
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = { logout };

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Header));
