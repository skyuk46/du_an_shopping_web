import { Button, Modal } from "antd";
import { useState } from "react";
import {
  getCartDetail,
  createCart,
  updateCart,
} from "../../stores/cart/cart.action";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";

function AddToCartButton(props) {
  const { product, amount, flexDirection = "row" } = props;
  const [openLoginModal, setOpenLoginModal] = useState(false);

  const AddToCart = () => {
    if (!window.localStorage.getItem("token")) setOpenLoginModal(true);
    else {
      props.getCartDetail({ token: window.localStorage.getItem("token") }, () => {
        const { cartDetail } = props;
        const productInCart = cartDetail.find(
          (i) => i.product.id === product.id
        );
        if (!productInCart)
          props.createCart(
            {
              token: window.localStorage.getItem("token"),
              product_id: product.id,
              amount: 1,
              total_price: product.price,
            },
            () => {
              props.getCartDetail({ token: window.localStorage.getItem("token") });
            }
          );
        else
          props.updateCart(
            {
              id: productInCart.id,
              token: window.localStorage.getItem("token"),
              product_id: product.id,
              amount,
              total_price: product.price * amount,
            },
            () => {
              props.getCartDetail({ token: window.localStorage.getItem("token") });
            }
          );
      });
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <Modal
        visible={openLoginModal}
        title="Thông báo"
        onCancel={() => setOpenLoginModal(false)}
        onOk={() => setOpenLoginModal(false)}
      >
        <p>Bạn cần đăng nhập để thêm sản phẩm vào giỏ</p>
      </Modal>
      {flexDirection === "column" ? (
        <Button onClick={AddToCart} className="shop-button" block>
          Thêm vào giỏ
        </Button>
      ) : (
        <Button onClick={AddToCart} className="shop-button" block>
          Thêm vào giỏ
        </Button>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartDetail: state.cart.cartDetail,
});

const mapDispatchToProps = {
  getCartDetail,
  createCart,
  updateCart,
};

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(AddToCartButton)
);
