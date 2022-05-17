// import { insertNewOrder } from "../../services/api/apiService";
import { Button } from "antd";
import { createOrder } from "../../stores/order/order.action";
import { deleteAllCarts, getCartDetail } from "../../stores/cart/cart.action";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";

function OrderButton(props) {
  const { setOrderComplete, setOpenDialog, setLoggedIn, cartDetail } = props;

  const Order = () => {
    if (window.localStorage.getItem("userId")) {
      cartDetail.forEach((detail) => {
        const params = {
          token: window.localStorage.getItem("token"),
          product_id: detail.product.id,
          amount: detail.amount,
          total_price: detail.total_price,
        };
        props.createOrder(params);
      });
      setOrderComplete(true);
      props.deleteAllCarts(
        { token: window.localStorage.getItem("token") },
        () => {
          props.getCartDetail({ token: window.localStorage.getItem("token") });
        }
      );
    } else {
      setLoggedIn(false);
    }
  };

  return (
    <>
      <Button
        disabled={cartDetail.length === 0}
        onClick={() => {
          Order();
          setOpenDialog(true);
        }}
        style={{ backgroundColor: "red", color: "white" }}
      >
        Đặt hàng
      </Button>
    </>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  createOrder,
  deleteAllCarts,
  getCartDetail,
};

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(OrderButton)
);
