import './index.scss'
import { updateCart, deleteCart } from '../../stores/cart/cart.action';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Button } from 'antd'

function ProductInCart(props) {
  const { cartItem, index } = props;
  const price = cartItem.product.price * cartItem.amount

  const UpdateCart = (amount) => {
    // dispatch(updateCart(
    //     {
    //         "index": index,
    //         "amount": amount,
    //     }
    // ));
  }

  const DeleteCart = () => {
    // dispatch(productDecrement());
    // dispatch(deleteCart(
    //     {
    //         "index": index,
    //     }
    // ));
    let cart = JSON.parse(window.localStorage.getItem("cart"));
    cart.splice(index, 1);
    window.localStorage.setItem("numberOfItem", JSON.stringify(parseInt(JSON.parse(window.localStorage.getItem("numberOfItem"))) - 1))
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }

  const amountMinus = () => {
    // let amount = productAmount - 1;
    // if (amount > 0)
    //   UpdateCart(amount);
  }

  const amountPlus = () => {
    // let amount = productAmount + 1;
    // UpdateCart(amount);
  }

  return (
    <li>
      <img src={cartItem.product.image[0].link} width="50" height="50" alt="img" />
      <div id="name">
        <div>{cartItem.product.name}</div>
        <br />
        <Button onClick={DeleteCart} style={{ fontSize: "12px" }} color="secondary">Xóa mặt hàng</Button>
      </div>
      <div id="price">{price}đ</div>
      <div id="amount">
        <div>
          <Button onClick={amountMinus} variant="contained">-</Button>
          {/* <div id="amount-number">{productAmount}</div> */}
          <Button onClick={amountPlus} variant="contained">+</Button>
        </div>
      </div>
    </li>
  );
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
  updateCart,
  deleteCart
};

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(ProductInCart)
);
