import "./index.scss";
import ProductInCart from "./ProductInCart";
// import { productDeleteAll } from '../../features/productSelectedSlice'
// import { deleteAllCart, getCart } from '../../features/productSelectedInformationSlice'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Bill from "./Bill";
import { useState, useEffect } from "react";
import GreenTick from "../../assets/images/green-tick.jpg";
import DeleteAllCartButton from "../Button/DeleteAllCartButton";
import { Modal, Button, Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { getCartDetail } from "../../stores/cart/cart.action";

function MainContent(props) {
  const { cartDetail, productList } = props;
  const [orderComplete, setOrderComplete] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(function () {
    if (window.localStorage.getItem("token"))
      props.getCartDetail(window.localStorage.getItem("token"));
  }, []);

  const DeleteAllCart = () => {
    // dispatch(deleteAllCart());
    // dispatch(productDeleteAll());
    window.localStorage.removeItem("cart");
    window.localStorage.removeItem("numberOfItem");
  };

  const closeDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      {orderComplete ? (
        <div>
          <div id="order-complete">
            <div>Đơn hàng của quý khách đã được đặt thành công!</div>
            <img src={GreenTick} alt="green-tick" />
          </div>
        </div>
      ) : productList && productList.length === 0 ? (
        <div id="no-item-cart">
          <div>Không có mặt hàng nào trong giỏ</div>
          <Button href="/" variant="contained" color="secondary">
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              Quay lại trang chủ
            </Link>
          </Button>
        </div>
      ) : (
        <Row container id="cart-container">
          <Col span={8}>
            <Modal
              visible={openDialog}
              onClose={closeDialog}
              title="Xác nhận xóa giỏ hàng"
              onOk={DeleteAllCart}
              okText="Có"
              cancelText="Không"
            >
              <div>Bạn có chắc muốn xóa tất cả giỏ hàng không?</div>
            </Modal>
            {
              <div>
                <div>
                  <Link style={{ textDecoration: "none" }} to="/">
                    <Button
                      id="continue-buying-button"
                      variant="contained"
                      color="secondary"
                    >
                      Tiếp tục mua hàng
                    </Button>
                  </Link>
                  <DeleteAllCartButton setOpenDialog={setOpenDialog} />
                </div>
                {/* <ul id="product-list">
                      {
                        cartDetail.map((i, index) => {
                          return <ProductInCart product={i} index={index} />
                        })
                      }
                    </ul> */}
              </div>
            }
          </Col>
          <Col span={8}>
            <Bill
              productList={productList}
              setOrderComplete={setOrderComplete}
              deleteAllCart={DeleteAllCart}
            />
          </Col>
        </Row>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartDetail: state.cart.cartDetail,
});

const mapDispatchToProps = {
  getCartDetail,
};

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(MainContent)
);
