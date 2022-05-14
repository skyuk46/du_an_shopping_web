import Product from "../Homepage/Product";
import { List } from "antd";

function CategoryProductList(props) {
  const { productList } = props;
  return (
    <List
      grid={{ gutter: 16, column: 5 }}
      dataSource={productList}
      renderItem={item => (
        <List.Item>
          <Product product={item} />
        </List.Item>
      )}
    />
  );
}

export default CategoryProductList;
