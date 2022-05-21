import "../../containers/admin/index.scss";
import { Menu } from "antd";
import { searchCategory } from "../../stores/category/category.action";
import { searchProduct } from "../../stores/product/product.action";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function ShopMenu(props) {
  const {
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
    viewReviewTemplate,
    setViewReviewTemplate,
  } = props;

  const [key, setKey] = useState("ViewProduct");

  useEffect(
    function () {
      renderMenu();
    },
    [key]
  );

  const renderMenu = () => {
    if (key === "AddProduct") {
      setAddProductTemplate(true);
      setEditProductTemplate(false);
      setViewProductTemplate(false);
      setAddCategoryTemplate(false);
      setEditCategoryTemplate(false);
      setViewCategoryTemplate(false);
      setViewOrderTemplate(false);
      setViewReviewTemplate(false);
    } else if (key === "AddCategory") {
      setAddProductTemplate(false);
      setEditProductTemplate(false);
      setViewProductTemplate(false);
      setAddCategoryTemplate(true);
      setEditCategoryTemplate(false);
      setViewCategoryTemplate(false);
      setViewOrderTemplate(false);
      setViewReviewTemplate(false);
    } else if (key === "ViewProduct") {
      setAddProductTemplate(false);
      setEditProductTemplate(false);
      setViewProductTemplate(true);
      setAddCategoryTemplate(false);
      setEditCategoryTemplate(false);
      setViewCategoryTemplate(false);
      setViewOrderTemplate(false);
      setViewReviewTemplate(false);
      props.searchProduct();
    } else if (key === "ViewOrder") {
      setAddProductTemplate(false);
      setEditProductTemplate(false);
      setViewProductTemplate(false);
      setAddCategoryTemplate(false);
      setEditCategoryTemplate(false);
      setViewCategoryTemplate(false);
      setViewOrderTemplate(true);
      setViewReviewTemplate(false);
    } else if (key === "ViewCategory") {
      setAddProductTemplate(false);
      setEditProductTemplate(false);
      setViewProductTemplate(false);
      setAddCategoryTemplate(false);
      setEditCategoryTemplate(false);
      setViewCategoryTemplate(true);
      setViewOrderTemplate(false);
      setViewReviewTemplate(false);
      props.searchCategory();
    } else if (key === "ViewReview") {
      setAddProductTemplate(false);
      setEditProductTemplate(false);
      setViewProductTemplate(false);
      setAddCategoryTemplate(false);
      setEditCategoryTemplate(false);
      setViewCategoryTemplate(false);
      setViewOrderTemplate(false);
      setViewReviewTemplate(true);
    } else if (key === "EditProduct") {
      setAddProductTemplate(false);
      setEditProductTemplate(true);
      setViewProductTemplate(false);
      setAddCategoryTemplate(false);
      setEditCategoryTemplate(false);
      setViewCategoryTemplate(false);
      setViewOrderTemplate(false);
      setViewReviewTemplate(false);
      props.searchProduct();
    } else if (key === "EditCategory") {
      setAddProductTemplate(false);
      setEditProductTemplate(false);
      setViewProductTemplate(false);
      setAddCategoryTemplate(false);
      setEditCategoryTemplate(true);
      setViewCategoryTemplate(false);
      setViewOrderTemplate(false);
      setViewReviewTemplate(false);
      props.searchCategory();
    }
  };

  const items = [
    {
      key: "Product",
      icon: null,
      children: [
        {
          key: "ViewProduct",
          icon: null,
          children: null,
          label: "Xem sản phẩm",
          type: "",
        },
        {
          key: "EditProduct",
          icon: null,
          children: null,
          label: "Sửa sản phẩm",
          type: "",
        },
        {
          key: "AddProduct",
          icon: null,
          children: null,
          label: "Thêm sản phẩm",
          type: "",
        },
      ],
      label: "Sản phẩm",
      type: "",
    },
    {
      key: "Category",
      icon: null,
      children: [
        {
          key: "ViewCategory",
          icon: null,
          children: null,
          label: "Xem danh mục",
          type: "",
        },
        {
          key: "EditCategory",
          icon: null,
          children: null,
          label: "Sửa danh mục",
          type: "",
        },
        {
          key: "AddCategory",
          icon: null,
          children: null,
          label: "Thêm danh mục",
          type: "",
        },
      ],
      label: "Danh mục",
      type: "",
    },
    {
      key: "Order",
      icon: null,
      children: [
        {
          key: "ViewOrder",
          icon: null,
          children: null,
          label: "Xem đơn hàng",
          type: "",
        },
      ],
      label: "Đơn hàng",
      type: "",
    },
    {
      key: "Review",
      icon: null,
      children: [
        {
          key: "ViewReview",
          icon: null,
          children: null,
          label: "Xem bình luận",
          type: "",
        },
      ],
      label: "Bình luận",
      type: "",
    },
  ];

  const onClick = (e) => {
    setKey(e.key);
  };

  return (
    <div
      style={{
        width: 256,
      }}
    >
      <Menu
        onClick={onClick}
        style={{
          width: 256,
        }}
        defaultSelectedKeys={["ViewProduct"]}
        defaultOpenKeys={["ViewProduct"]}
        mode="inline"
        items={items}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  searchCategory,
  searchProduct,
};

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(ShopMenu)
);
