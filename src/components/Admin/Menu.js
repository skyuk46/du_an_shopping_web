import "../../containers/admin/index.scss";
import { Menu } from "antd";
import { searchCategory } from "../../stores/category/category.action";
import { searchProduct } from "../../stores/product/product.action";
import { searchUser } from "../../stores/user/user.action";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function ShopMenu(props) {
  const {
    setAddProductTemplate,
    setViewProductTemplate,
    setEditProductTemplate,
    setAddCategoryTemplate,
    setViewCategoryTemplate,
    setEditCategoryTemplate,
    setViewOrderTemplate,
    setViewReviewTemplate,
    setViewUserTemplate,
    setEditUserTemplate,
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
      setViewUserTemplate(false);
      setEditUserTemplate(false);
    } else if (key === "AddCategory") {
      setAddProductTemplate(false);
      setEditProductTemplate(false);
      setViewProductTemplate(false);
      setAddCategoryTemplate(true);
      setEditCategoryTemplate(false);
      setViewCategoryTemplate(false);
      setViewOrderTemplate(false);
      setViewReviewTemplate(false);
      setViewUserTemplate(false);
      setEditUserTemplate(false);
    } else if (key === "ViewProduct") {
      setAddProductTemplate(false);
      setEditProductTemplate(false);
      setViewProductTemplate(true);
      setAddCategoryTemplate(false);
      setEditCategoryTemplate(false);
      setViewCategoryTemplate(false);
      setViewOrderTemplate(false);
      setViewReviewTemplate(false);
      setViewUserTemplate(false);
      setEditUserTemplate(false);
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
      setViewUserTemplate(false);
      setEditUserTemplate(false);
    } else if (key === "ViewUser") {
      setAddProductTemplate(false);
      setEditProductTemplate(false);
      setViewProductTemplate(false);
      setAddCategoryTemplate(false);
      setEditCategoryTemplate(false);
      setViewCategoryTemplate(false);
      setViewOrderTemplate(false);
      setViewReviewTemplate(false);
      setViewUserTemplate(true);
      setEditUserTemplate(false);
      props.searchUser({ token: window.localStorage.getItem("token") });
    } else if (key === "ViewCategory") {
      setAddProductTemplate(false);
      setEditProductTemplate(false);
      setViewProductTemplate(false);
      setAddCategoryTemplate(false);
      setEditCategoryTemplate(false);
      setViewCategoryTemplate(true);
      setViewOrderTemplate(false);
      setViewReviewTemplate(false);
      setViewUserTemplate(false);
      setEditUserTemplate(false);
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
      setViewUserTemplate(false);
      setEditUserTemplate(false);
    } else if (key === "EditProduct") {
      setAddProductTemplate(false);
      setEditProductTemplate(true);
      setViewProductTemplate(false);
      setAddCategoryTemplate(false);
      setEditCategoryTemplate(false);
      setViewCategoryTemplate(false);
      setViewOrderTemplate(false);
      setViewReviewTemplate(false);
      setViewUserTemplate(false);
      setEditUserTemplate(false);
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
      setViewUserTemplate(false);
      setEditUserTemplate(false);
      props.searchCategory();
    } else if (key === "EditUser") {
      setAddProductTemplate(false);
      setEditProductTemplate(false);
      setViewProductTemplate(false);
      setAddCategoryTemplate(false);
      setEditCategoryTemplate(false);
      setViewCategoryTemplate(false);
      setViewOrderTemplate(false);
      setViewReviewTemplate(false);
      setViewUserTemplate(false);
      setEditUserTemplate(true);
      props.searchUser({ token: window.localStorage.getItem("token") });
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
          label: "Xem s???n ph???m",
          type: "",
        },
        {
          key: "EditProduct",
          icon: null,
          children: null,
          label: "S???a s???n ph???m",
          type: "",
        },
        {
          key: "AddProduct",
          icon: null,
          children: null,
          label: "Th??m s???n ph???m",
          type: "",
        },
      ],
      label: "S???n ph???m",
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
          label: "Xem danh m???c",
          type: "",
        },
        {
          key: "EditCategory",
          icon: null,
          children: null,
          label: "S???a danh m???c",
          type: "",
        },
        {
          key: "AddCategory",
          icon: null,
          children: null,
          label: "Th??m danh m???c",
          type: "",
        },
      ],
      label: "Danh m???c",
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
          label: "Xem ????n h??ng",
          type: "",
        },
      ],
      label: "????n h??ng",
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
          label: "Xem b??nh lu???n",
          type: "",
        },
      ],
      label: "B??nh lu???n",
      type: "",
    },
    {
      key: "User",
      icon: null,
      children: [
        {
          key: "ViewUser",
          icon: null,
          children: null,
          label: "Xem ng?????i d??ng",
          type: "",
        },
        {
          key: "EditUser",
          icon: null,
          children: null,
          label: "S???a ng?????i d??ng",
          type: "",
        },
      ],
      label: "Ng?????i d??ng",
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
        defaultOpenKeys={["Product", "Category", "Order", "Review", "User"]}
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
  searchUser,
};

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(ShopMenu)
);
