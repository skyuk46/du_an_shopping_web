import { Link } from "react-router-dom";
import "../../containers/home/home.scss";

function SearchResultProduct(props) {
  const { product, setDisplaySearchResult } = props;
  return (
    <Link
      onClick={() => setDisplaySearchResult("none")}
      style={{ textDecoration: "none", color: "black" }}
      to={`/product/${product.id}`}
    >
      <div className="search-result-product-container">
        <img src={product.image?.length > 0 ? product.image[0].link : ''} width="100" alt="img" />
        <div style={{ marginLeft: "20px" }}>
          <div>{product.name}</div>
          <div style={{ color: "red" }}>{product.price}đ</div>
        </div>
      </div>
    </Link>
  );
}

export default SearchResultProduct;
