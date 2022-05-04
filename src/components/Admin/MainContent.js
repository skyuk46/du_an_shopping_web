import "../../containers/admin/index.scss";
import Feature from "./Feature";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import { useState } from "react";
import AddProductTemplate from "./AddProductTemplate"
import ViewProductTemplate from "./ViewProductTemplate";
import EditProductTemplate from './EditProductTemplate'
import ViewOrderTemplate from './ViewOrderTemplate'
import AddCategoryTemplate from "./AddCategoryTemplate";
import ViewCategoryTemplate from "./ViewCategoryTemplate";
import EditCategoryTemplate from "./EditCategoryTemplate";

function MainContent(props) {
  const { categoryList, productList } = props;
  const featureList = [
    {
      featureName: "Quản lý thông tin",
      tableList: ["Product", "Order", "Category", "Customer"],
    },
  ];

  const [addProductTemplate, setAddProductTemplate] = useState(false);
  const [viewProductTemplate, setViewProductTemplate] = useState(false);
  const [editProductTemplate, setEditProductTemplate] = useState(false);

  const [viewOrderTemplate, setViewOrderTemplate] = useState(false);

  const [addCategoryTemplate, setAddCategoryTemplate] = useState(false);
  const [viewCategoryTemplate, setViewCategoryTemplate] = useState(false);
  const [editCategoryTemplate, setEditCategoryTemplate] = useState(false);

  return (
    <Row id="content-container">
      <Col span={11}>
        <div id="title">Chức năng admin</div>
        {featureList.map((i) => {
          return (
            <Feature
              featureName={i.featureName}
              tableList={i.tableList}
              addProductTemplate={addProductTemplate}
              viewProductTemplate={viewProductTemplate}
              editProductTemplate={editProductTemplate}
              addCategoryTemplate={addCategoryTemplate}
              viewCategoryTemplate={viewCategoryTemplate}
              editCategoryTemplate={editCategoryTemplate}
              viewOrderTemplate={viewOrderTemplate}
              setAddProductTemplate={setAddProductTemplate}
              setViewProductTemplate={setViewProductTemplate}
              setEditProductTemplate={setEditProductTemplate}
              setAddCategoryTemplate={setAddCategoryTemplate}
              setViewCategoryTemplate={setViewCategoryTemplate}
              setEditCategoryTemplate={setEditCategoryTemplate}
              setViewOrderTemplate={setViewOrderTemplate}
            />
          );
        })}
        {addCategoryTemplate && <AddCategoryTemplate />}
        {viewCategoryTemplate && (
          <ViewCategoryTemplate categoryList={categoryList} />
        )}
        {editCategoryTemplate && (
          <EditCategoryTemplate categoryList={categoryList} />
        )}
      </Col>
      <Col span={13}>
        {
          addProductTemplate && <AddProductTemplate />
        }
        {
          viewProductTemplate && <ViewProductTemplate productList={productList} />
        }
        {
          viewOrderTemplate && <ViewOrderTemplate />
        }
        {
          editProductTemplate && <EditProductTemplate productList={productList} />
        }
      </Col>
    </Row>
  );
}

const mapStateToProps = (state) => ({
  categoryList: state.category.categoryList,
  productList: state.product.productList
});

const mapDispatchToProps = {};

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(MainContent)
);
