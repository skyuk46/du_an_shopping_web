import { useState } from "react"
import OrderButton from "../Button/OrderButton";
import { Modal } from "antd";
import { withTranslation } from "react-i18next";

function Bill(props) {
  const { cartDetail, setOrderComplete, t } = props;
  const [loggedIn, setLoggedIn] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);

  var totalPriceWithOutDeliverFee = 0;
  cartDetail.forEach(detail => {
    totalPriceWithOutDeliverFee += +detail.total_price
  })

  var totalPrice = totalPriceWithOutDeliverFee + 28000;

  const closeDialog = () => {
    setOpenDialog(false);
  }

  const redirectToLogin = () => {

  }

  return (
    <>
      {
        !loggedIn && <Modal
          title={t('bill.requestLogin')}
          visible={openDialog}
          onClose={closeDialog}
          onOk={redirectToLogin}
          okText={t('bill.nextTime')}
          cancelText={t('user.login')}
        >
          <div>
            Bạn phải đăng nhập mới có thể đặt hàng
          </div>
        </Modal>
      }
      <div id="order-container">
        <div>Tạm tính: <span>{totalPriceWithOutDeliverFee}đ</span></div>
        <div>Phí vận chuyển: <span>28000đ</span></div>
        <div>Thành tiền: <span>{totalPrice}đ</span></div>
        <div><i>(Đã bao gồm VAT)</i></div>
        <OrderButton setOrderComplete={setOrderComplete} setOpenDialog={setOpenDialog} setLoggedIn={setLoggedIn} cartDetail={cartDetail} />
      </div>
    </>
  );
}

export default withTranslation()(Bill);