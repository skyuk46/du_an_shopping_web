import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../components/Homepage/Header";
import Footer from "../../components/Homepage/Footer";
import MainContent from "../../components/ProductDetail/MainContent";
import "./index.scss";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import { getProductDetail } from "../../stores/product/product.action";

function ProductDetail(props) {
  const { productDetail } = props;
  const { id } = useParams();

  useEffect(function () {
    props.getProductDetail(id);
  }, [id]);

  return (
    <div>
      <Header />
      <MainContent product={productDetail} />
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  productDetail: state.product.productDetail
});

const mapDispatchToProps = {
  getProductDetail
};

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(ProductDetail)
);
