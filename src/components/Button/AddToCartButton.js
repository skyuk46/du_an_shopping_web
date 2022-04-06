import { productIncrement } from "../../features/productSelectedSlice";
import { useDispatch } from "react-redux";
import { addCart } from "../../features/productSelectedInformationSlice";
import { Button } from "antd";

function AddToCartButton({ product, amount = 1, flexDirection = "row" }) {
  const dispatch = useDispatch();
  const AddToCart = () => {
    dispatch(productIncrement());
    try {
      var cart = JSON.parse(window.localStorage.getItem("cart"));
      if (cart === null) throw "Cart is empty";
      cart.push({
        name: product.name,
        price: product.price,
        image: product.images,
        amount: amount,
        id: product.id,
      });
      window.localStorage.setItem(
        "numberOfItem",
        JSON.stringify(
          parseInt(JSON.parse(window.localStorage.getItem("numberOfItem"))) + 1
        )
      );
      window.localStorage.setItem("cart", JSON.stringify(cart));
    } catch (e) {
      let products = [
        {
          name: product.name,
          price: product.price,
          image: product.images,
          amount: amount,
          id: product.id,
        },
      ];
      window.localStorage.setItem("cart", JSON.stringify(products));
      window.localStorage.setItem("numberOfItem", JSON.stringify(1));
    }
    dispatch(
      addCart({
        name: product.name,
        price: product.price,
        image: product.images,
        amount: amount,
        id: product.id,
      })
    );
  };

  return (
    <>
      {flexDirection == "column" ? (
        <Button
          style={{ maxHeight: "70px" }}
          onClick={AddToCart}
          variant="contained"
          color="secondary"
        >
          Thêm vào giỏ
        </Button>
      ) : (
        <Button
          onClick={AddToCart}
          fullWidth
          variant="contained"
          color="secondary"
        >
          Thêm vào giỏ
        </Button>
      )}
    </>
  );
}

export default AddToCartButton;
