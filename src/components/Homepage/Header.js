import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import userIcon from "../../assets/images/user-icon.png";
import cartIcon from "../../assets/images/cart.png";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import SearchResultProduct from "./SearchResultProduct";
import { withTranslation } from "react-i18next";
import { SearchOutlined } from "@ant-design/icons";
import "../../containers/home/home.scss";
import { logout } from "../../stores/auth/auth.action";
import { redirectRouter } from "../../utils/router";
import { getCartDetail } from "../../stores/cart/cart.action";
import { searchProductsByName } from "../../stores/product/product.action";
import { Row, Col, Menu, Input, Dropdown, Badge } from "antd";

function Header(props) {
  const [displaySearchResult, setDisplaySearchResult] = useState("none");
  const { t, cartDetail, searchProductList } = props;

  useEffect(function () {
    if (window.localStorage.getItem("token"))
      props.getCartDetail({ token: window.localStorage.getItem("token") });
  }, []);

  const logOutMenu = (
    <Menu>
      <Menu.Item>
        <a onClick={() => LogOut()}>{t("user.logout")}</a>
      </Menu.Item>
    </Menu>
  );

  const logInMenu = (
    <Menu>
      <Menu.Item>
        <a onClick={() => redirectRouter("/login")}>{t("user.login")}</a>
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
      content: `Giỏ hàng của bạn ${cartDetail ? cartDetail.length : 0
        } sản phẩm`,
      link: "/cart",
    },
  ];

  const SearchProduct = async (e) => {
    if (e.target.value === "") setDisplaySearchResult("none");
    else {
      props.searchProductsByName({ search_name: e.target.value }, () => {
        setDisplaySearchResult('block')
      });
    }
  };

  const LogOut = () => {
    props.logout({ token: window.localStorage.getItem("token") });
  };

  return (
    <>
      <div id="header-container">
        <Row style={{ height: "inherit" }}>
          <Col span={4}>
            <Link to="/">
              <img id="logo" src={logo} alt="logo" />
            </Link>
          </Col>
          <Col span={8} style={{ display: "table" }}>
            <div id="search-bar">
              <Input
                placeholder={t("common.searchPlaceholder")}
                onChange={SearchProduct}
                prefix={<SearchOutlined />}
                style={{ borderRadius: "10px" }}
                size={"large"}
              />
              <div
                style={{
                  position: "absolute",
                  top: "75px",
                  zIndex: "100",
                  display: displaySearchResult,
                  border: "solid 1px black",
                  backgroundColor: "white",
                  width: "100%",
                  height: '350px',
                  overflowY: 'auto'
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
                {searchProductList.map((i) => {
                  return (
                    <SearchResultProduct
                      setDisplaySearchResult={setDisplaySearchResult}
                      product={i}
                      key={i.id}
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
                  {i.link === "/login" &&
                    window.localStorage.getItem("userInfo") ? (
                    <div className="icon">
                      <Dropdown overlay={logOutMenu} placement="bottom">
                        <img height="38" src={i.icon} alt="userIcon" />
                      </Dropdown>
                    </div>
                  ) : i.link === "/login" &&
                    !window.localStorage.getItem("userInfo") ? (
                    <div className="icon">
                      <Dropdown overlay={logInMenu} placement="bottom">
                        <img height="38" src={i.icon} alt="userIcon" />
                      </Dropdown>
                    </div>
                  ) : i.link === "/cart" &&
                    window.localStorage.getItem("userInfo") ? (
                    <Link
                      to={i.link}
                      id="content"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <Badge count={cartDetail ? cartDetail.length : 0}>
                        <img height="38" src={i.icon} alt="userIcon" />
                      </Badge>
                      <span style={{ marginLeft: "10px" }}>{i.content}</span>
                    </Link>
                  ) : (
                    <Link
                      to={i.link}
                      id="content"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <img height="38" src={i.icon} alt="userIcon" />{" "}
                      {i.content}
                    </Link>
                  )}
                </>
              );
            })}
          </Col>
        </Row>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  cartDetail: state.cart.cartDetail,
  searchProductList: state.product.searchProductList,
});

const mapDispatchToProps = { logout, getCartDetail, searchProductsByName };

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(Header)
);
