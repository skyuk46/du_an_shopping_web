// import { insertNewOrder } from "../../services/api/apiService";
import { useSelector } from "react-redux";
import { Button } from "antd";

function OrderButton({
  setOrderComplete,
  setOpenDialog,
  setLoggedIn,
  deleteAllCart,
  idList,
  quantityList,
}) {
  const username = useSelector((state) => state.userLogIn.username);
  const customer_id = useSelector((state) => state.userLogIn.customer_id);

  const Order = async () => {
    if (username !== "") {
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
