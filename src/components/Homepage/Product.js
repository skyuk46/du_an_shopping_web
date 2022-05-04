import { Link } from "react-router-dom";
import "../../containers/home/home.scss";
import AddToCartButton from "../Button/AddToCartButton";
import { Card } from "antd";

function Product({ flexDirection = "row", product }) {
  return (
    <div className="product">
      {flexDirection === "row" ? (
        <>
          <Link to={`product/${product.id}`}>
            <img
              src={product?.image.length > 0 ? product?.image[0]?.link : ""}
              alt={product.name}
              className="image"
            />
            <Card>
              <center>{product.name}</center>
            </Card>
            <Card>
              <span style={{ marginRight: "3vw" }}>
                {product.price.replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ
              </span>
              <span>Còn lại: {product.quantity}</span>
            </Card>
          </Link>
          <AddToCartButton flexDirection={flexDirection} product={product} />
        </>
      ) : (
        <>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img src={product.images} alt="img" />
            <div style={{ width: "100%", textAlign: "center" }}>
              {product.name}
            </div>
            <div
              style={{ width: "100%", fontWeight: "bold", textAlign: "center" }}
            >
              {<p>{product.price}đ</p>}
            </div>
            <AddToCartButton flexDirection={flexDirection} product={product} />
          </div>
        </>
      )}
    </div>
  );
}

export default Product;
