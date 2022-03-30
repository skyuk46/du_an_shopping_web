import { Link } from "react-router-dom"
import AddToCartButton from '../Button/AddToCartButton'

function Product({ flexDirection = "row", product }) {
  return (
    <div class="product">
      {
        (flexDirection === "row")
          ? <>
            <ImageListItem key={product.imgages}>
              <Link to={`/products/${product.id}`}><img src={product.images} alt="img" /></Link>
              <ImageListItemBar
                title={product.name}
                subtitle={<p>Giá: {product.price}đ</p>}
              />
            </ImageListItem>
            <AddToCartButton flexDirection={flexDirection} product={product} />
          </>
          : <>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img src={product.images} alt="img" />
              <div style={{ width: "100%", textAlign: "center" }}>{product.name}</div>
              <div style={{ width: "100%", fontWeight: "bold", textAlign: "center" }}>{<p>{product.price}đ</p>}</div>
              <AddToCartButton flexDirection={flexDirection} product={product} />
            </div>
          </>
      }
    </div>
  );
}

export default Product;