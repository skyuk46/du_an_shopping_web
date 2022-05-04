import "../../containers/admin/index.scss";
import { Button } from "antd";
import { PlusOutlined, EyeOutlined, EditOutlined } from "@ant-design/icons";
import { searchCategory } from "../../stores/category/category.action";
import { searchProduct } from "../../stores/product/product.action";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";

function Table(props) {
  const {
    name,
    addProductTemplate,
    viewProductTemplate,
    editProductTemplate,
    setAddProductTemplate,
    setViewProductTemplate,
    setEditProductTemplate,
    addCategoryTemplate,
    viewCategoryTemplate,
    editCategoryTemplate,
    setAddCategoryTemplate,
    setViewCategoryTemplate,
    setEditCategoryTemplate,
    viewOrderTemplate,
    setViewOrderTemplate,
  } = props;

  const AddTemplate = () => {
    if (name === "Product")
      if (addProductTemplate === false) setAddProductTemplate(true);
      else setAddProductTemplate(false);
    else if (name === "Category")
      if (addCategoryTemplate === false) setAddCategoryTemplate(true);
      else setAddCategoryTemplate(false);
  };

  const ViewTemplate = async () => {
    if (name === "Product")
      if (viewProductTemplate === false) {
        setViewProductTemplate(true);
        props.searchProduct();
      } else {
        setViewProductTemplate(false);
      }
    else if (name === "Order") {
      if (viewOrderTemplate === false) {
        setViewOrderTemplate(true);
      } else {
        setViewOrderTemplate(false);
      }
    } else if (name === "Category") {
      if (viewCategoryTemplate === false) {
        setViewCategoryTemplate(true);
        props.searchCategory();
      } else {
        setViewCategoryTemplate(false);
      }
    }
  };

  const EditTemplate = async () => {
    if (name === "Product") {
      if (editProductTemplate === false) {
        setEditProductTemplate(true);
        props.searchProduct();
      } else {
        setEditProductTemplate(false);
      }
    }
    if (name === "Category") {
      if (editCategoryTemplate === false) {
        setEditCategoryTemplate(true);
        props.searchCategory();
      } else {
        setEditCategoryTemplate(false);
      }
    }
  };

  return (
    <div class="table-container">
      <b>{name}</b>
      <span>
        {name === "Order" || name === "Customer" ? (
          <Button
            className="float_right"
            icon={<PlusOutlined />}
            disabled
            onClick={AddTemplate}
          >
            Thêm
          </Button>
        ) : (
          <Button
            className="float_right"
            icon={<PlusOutlined />}
            onClick={AddTemplate}
          >
            Thêm
          </Button>
        )}
      </span>
      <span>
        <Button
          className="float_right"
          icon={<EyeOutlined />}
          onClick={ViewTemplate}
        >
          Xem
        </Button>
      </span>
      <span>
        {name === "Order" ? (
          <Button
            className="float_right"
            disabled
            icon={<EditOutlined />}
            onClick={EditTemplate}
          >
            Sửa
          </Button>
        ) : (
          <Button
            className="float_right"
            icon={<EditOutlined />}
            onClick={EditTemplate}
          >
            Sửa
          </Button>
        )}
      </span>
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  searchCategory,
  searchProduct,
};

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(Table)
);
