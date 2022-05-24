import "../../containers/admin/index.scss";
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
import ViewReviewTemplate from "./ViewReviewTemplate";
import ViewUserTemplate from "./ViewUserTemplate";
import EditUserTemplate from "./EditUserTemplate";
import ShopMenu from './Menu'

function MainContent(props) {
  const { categoryList, productList, userList } = props;

  const [addProductTemplate, setAddProductTemplate] = useState(false);
  const [viewProductTemplate, setViewProductTemplate] = useState(false);
  const [editProductTemplate, setEditProductTemplate] = useState(false);

  const [viewOrderTemplate, setViewOrderTemplate] = useState(false);

  const [addCategoryTemplate, setAddCategoryTemplate] = useState(false);
  const [viewCategoryTemplate, setViewCategoryTemplate] = useState(false);
  const [editCategoryTemplate, setEditCategoryTemplate] = useState(false);

  const [viewReviewTemplate, setViewReviewTemplate] = useState(false);

  const [viewUserTemplate, setViewUserTemplate] = useState(false)
  const [editUserTemplate, setEditUserTemplate] = useState(false)

  return (
    <Row className="admin-container">
      <Col span={3}>
        <ShopMenu
          setAddProductTemplate={setAddProductTemplate}
          setViewProductTemplate={setViewProductTemplate}
          setEditProductTemplate={setEditProductTemplate}
          setAddCategoryTemplate={setAddCategoryTemplate}
          setViewCategoryTemplate={setViewCategoryTemplate}
          setEditCategoryTemplate={setEditCategoryTemplate}
          setViewOrderTemplate={setViewOrderTemplate}
          setViewReviewTemplate={setViewReviewTemplate}
          setViewUserTemplate={setViewUserTemplate}
          setEditUserTemplate={setEditUserTemplate}
        />
      </Col>
      <Col className="menu-content-container" span={21}>
        {addCategoryTemplate && <AddCategoryTemplate />}
        {viewCategoryTemplate && (
          <ViewCategoryTemplate categoryList={categoryList} />
        )}
        {editCategoryTemplate && (
          <EditCategoryTemplate categoryList={categoryList} />
        )}
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
        {
          viewReviewTemplate && <ViewReviewTemplate />
        }
        {
          viewUserTemplate && <ViewUserTemplate userList={userList} />
        }
        {
          editUserTemplate && <EditUserTemplate userList={userList} />
        }
      </Col>
    </Row>
  );
}

const mapStateToProps = (state) => ({
  categoryList: state.category.categoryList,
  productList: state.product.productList,
  userList: state.user.userList
});

const mapDispatchToProps = {};

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(MainContent)
);
