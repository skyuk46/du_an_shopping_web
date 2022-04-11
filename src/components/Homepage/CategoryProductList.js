import "../../containers/home/home.scss";
import Product from './Product'
import { useEffect, useState } from 'react'
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import { List } from "antd";

function CategoryProductList(props) {
  const { category, categoryId, list } = props;
  useEffect(
    async function () {
    }, []);

  return (
    <div>
      <div className="category-name">{category}</div>
      <List
        grid={{ gutter: 16, column: 5 }}
        dataSource={list}
        renderItem={item => (
          <List.Item>
            <Product product={item} />
          </List.Item>
        )}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {};

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(CategoryProductList));
