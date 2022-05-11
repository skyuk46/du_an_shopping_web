import "./index.scss";
import { updateCart, deleteCart } from "../../stores/cart/cart.action";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import { Button } from "antd";
import { useState } from "react";

function ProductInCart(props) {
  const { index, cartDetail, refreshData } = props;
  let [amount, setAmount] = useState(cartDetail[index].amount);
  const price = cartDetail[index].product.price * amount;

  const UpdateCart = () => {
    props.updateCart(
      {
        id: cartDetail[index].id,
        token: window.localStorage.getItem("token"),
        amount,
        total_price: cartDetail[index].product.price * amount,
      },
      () => {
        refreshData();
      }
    );
  };

  const DeleteCart = () => {
    props.deleteCart(
      { id: cartDetail[index].id, token: window.localStorage.getItem("token") },
      () => {
        props.getCartDetail({ token: window.localStorage.getItem("token") });
      }
    );
  };

  const amountMinus = () => {
    setAmount(amount--);
    UpdateCart();
  };

  const amountPlus = () => {
    setAmount(amount++);
    UpdateCart();
  };

  return (
    <li>
      <img
        src={cartDetail[index].product.image[0].link}
        width="120"
        height="90"
        alt="img"
      />
      <div id="name">
        <div>{cartDetail[index].product.name}</div>
        <div>Loại: {cartDetail[index].product.category.name}</div>
        <br />
      </div>
      <div id="price">{price}đ</div>
      <div id="amount">
        <div>
          <Button onClick={amountMinus}>-</Button>
          <div id="amount-number">{amount}</div>
          <Button onClick={amountPlus}>+</Button>
        </div>
      </div>
      <div className="delete-button">
        <Button
          onClick={DeleteCart}
          style={{ fontSize: "12px" }}
          color="secondary"
        >
          Xóa mặt hàng
        </Button>
      </div>
    </li>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  updateCart,
  deleteCart,
};

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(ProductInCart)
);
