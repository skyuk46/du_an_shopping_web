import { Button } from "antd";

function DeleteAllCartButton({ setOpenDialog }) {
  return (
    <>
      <Button
        id="delete-all-cart-button"
        onClick={() => setOpenDialog(true)}
        variant="contained"
      >
        Xóa giỏ hàng
      </Button>
    </>
  );
}

export default DeleteAllCartButton;
