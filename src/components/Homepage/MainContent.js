import "../../containers/home/home.scss";
import { useEffect, useState } from "react";
import CategoryProductList from "./CategoryProductList";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import { searchCategory } from "../../stores/category/category.action";
import { searchProduct } from "../../stores/product/product.action";

function MainContent(props) {
  const { categoryList, productList } = props;
  useEffect(async function () {
    props.searchCategory();
    props.searchProduct();
  }, []);

  return (
    <div id="maincontent-container">
      {categoryList.map((i) => {
        return (
          <>
            <CategoryProductList list={productList.filter(product => product.category.id === i.id)} category={i.name} categoryId={i.id} />
            <center>
              <Link style={{ textDecoration: "none" }} to={`category/${i.id}`}>
                <Button variant="outlined" color="secondary">
                  Xem tất cả
                </Button>
              </Link>
            </center>
          </>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => ({
  categoryList: state.category.categoryList,
  productList: state.product.productList
});

const mapDispatchToProps = { searchCategory, searchProduct };

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(MainContent));
