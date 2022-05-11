import "./index.scss";
import ProductInCart from "./ProductInCart";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Bill from "./Bill";
import { useState, useEffect } from "react";
import GreenTick from "../../assets/images/green-tick.jpg";
import DeleteAllCartButton from "../Button/DeleteAllCartButton";
import { Modal, Button, Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { getCartDetail, deleteAllCarts } from "../../stores/cart/cart.action";

function MainContent(props) {
  const { cartDetail, productList } = props;
  const [orderComplete, setOrderComplete] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(function () {
    if (window.localStorage.getItem("token"))
      props.getCartDetail(window.localStorage.getItem("token"));
  }, [props]);

  const DeleteAllCart = () => {
    props.deleteAllCarts(
      { token: window.localStorage.getItem("token") },
      () => {
        refreshData();
      }
    );
  };

  const refreshData = () => {
    props.getCartDetail({ token: window.localStorage.getItem("token") });
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
        <Row id="cart-container">
          <Col span={16}>
            <Modal
              visible={openDialog}
              onCancel={closeDialog}
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
                <br />
                <ul id="product-list">
                  {cartDetail.map((i, index) => {
                    return (
                      <ProductInCart
                        getCartDetail={props.getCartDetail}
                        index={index}
                        key={i.amount}
                        cartDetail={cartDetail}
                        refreshData={refreshData}
                      />
                    );
                  })}
                </ul>
              </div>
            }
          </Col>
          <Col span={8}>
            <Bill cartDetail={cartDetail} setOrderComplete={setOrderComplete} />
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
  deleteAllCarts,
};

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(MainContent)
);
