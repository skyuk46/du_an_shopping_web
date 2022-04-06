import './index.scss'
// import { updateCart, deleteCart } from '../../features/productSelectedInformationSlice'
// import { productDecrement } from '../../features/productSelectedSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'antd'

function ProductInCart({product, index}) {
    const productAmount = useSelector((state) => state.productSelectedInformation.products[index].amount);
    const productPrice = useSelector((state) => state.productSelectedInformation.products[index].price * productAmount);

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
        let amount = productAmount - 1;
        if (amount > 0)
            UpdateCart(amount);
    }

    const amountPlus = () => {
        let amount = productAmount + 1;
        UpdateCart(amount);
    }

    return (
        <li>
            <img src={product.image} alt="img" />
            <div id="name">
                <div>{product.name}</div>
                <br />
                <Button onClick={DeleteCart} style={{fontSize: "12px"}} color="secondary">Xóa mặt hàng</Button>            
            </div>
            <div id="price">{productPrice}đ</div>
            <div id="amount">
                <div>
                    <Button onClick={amountMinus} variant="contained">-</Button>                
                    <div id="amount-number">{productAmount}</div>
                    <Button onClick={amountPlus} variant="contained">+</Button>            
                </div>
            </div>
        </li>
    );
}

export default ProductInCart;