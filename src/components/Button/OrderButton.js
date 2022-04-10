// import { insertNewOrder } from "../../services/api/apiService";
import { Button } from "antd";

function OrderButton({
  setOrderComplete,
  setOpenDialog,
  setLoggedIn,
  deleteAllCart,
  idList,
  quantityList,
}) {
  const username = window.localStorage.getItem('userInfo')
  const customer_id = window.localStorage.getItem('userId')

  const Order = async () => {
    if (username) {
      const data = {
        status: "Đã đặt",
        customerId: customer_id,
        productId: idList,
        quantity: quantityList,
      };
      // await insertNewOrder(data);
      setOrderComplete(true);
      deleteAllCart();
    } else {
      setLoggedIn(false);
    }
  };

  return (
    <>
      <Button
        onClick={() => {
          Order();
          setOpenDialog(true);
        }}
        style={{ backgroundColor: "red", color: "white" }}
        fullWidth
        variant="contained"
      >
        Đặt hàng
      </Button>
    </>
  );
}

export default OrderButton;
