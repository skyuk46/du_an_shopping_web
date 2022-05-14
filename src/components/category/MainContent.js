import CategoryProductList from "./CategoryProductList";
import CatergorySortOption from "./CategorySortOption";
// import CategoryFilterOption from "./CategoryFilterOption";
import React from "react";
import { useState, useEffect } from "react";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import { Row, Col } from "antd";
import { getProductByCategory } from "../../stores/product/product.action";

function MainContent(props) {
  const { t, productList, id } = props;
  const [sortName, setSortName] = useState("");
  const [sortPrice, setSortPrice] = useState("");

  useEffect(
    function () {
      document.title = t("category.product");
      props.getProductByCategory({
        id,
        sort_name: sortName,
        sort_price: sortPrice,
      });
    },
    [id, sortName, sortPrice, t]
  );

  return (
    <>
      <Row>
        <Col span={3} offset={19} id="maincontent-container" >
          <CatergorySortOption
            setSortName={setSortName}
            setSortPrice={setSortPrice}
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col offset={3} />
        <Col span={19}>
          <CategoryProductList productList={productList} />
        </Col>
      </Row>
    </>
  );
}

const mapStateToProps = (state) => ({
  productList: state.product.productList,
});

const mapDispatchToProps = {
  getProductByCategory,
};

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(MainContent)
);
