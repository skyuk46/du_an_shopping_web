import "../../containers/admin/index.scss";
import { Button, Modal, Table } from "antd";
import { useState } from "react";
import {
  searchProduct,
  deleteProduct,
} from "../../stores/product/product.action";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";

function ViewProductTemplate(props) {
  const { productList } = props;
  const DeleteProduct = async (id) => {
    setOpenDialog(false);
    props.deleteProduct(
      { id, token: window.localStorage.getItem("token") },
      () => {
        props.searchProduct();
      }
    );
  };

  const closeDialog = () => {
    setOpenDialog(false);
  };

  const [openDialog, setOpenDialog] = useState(false);
  const [deleteId, setDeleteId] = useState(0);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
      render: (name, row) => {
        return name;
      },
    },
    {
      title: "Loại sản phẩm",
      dataIndex: "category",
      key: "category",
      render: (params, row) => {
        const { category } = row;
        return category.name;
      },
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      render: (price, row) => {
        return price;
      },
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
      render: (quantity, row) => {
        return quantity;
      },
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
      render: (description, row) => {
        return description;
      },
    },
    {
      title: "Ảnh",
      dataIndex: "image",
      key: "image",
      render: (image, row) => {
        return (
          <div class="image-container">
            {image.map((img) => (
              <img src={img.link} width="120" height="120" alt="img" />
            ))}
          </div>
        );
      },
    },
    {
      title: "",
      dataIndex: "id",
      key: "edit",
      width: "100px",
      render: (id, row) => {
        return (
          <Button
            onClick={() => {
              setDeleteId(id);
              setOpenDialog(true);
            }}
          >
            Xóa
          </Button>
        );
      },
    },
  ];

  const dataSource = productList.map((p) => ({
    id: p.id,
    name: p.name,
    price: p.price,
    quantity: p.quantity,
    description: p.description,
    category: p.category,
    image: p.image,
  }));

  return (
    <>
      <Modal
        visible={openDialog}
        title="Xác nhận xóa mặt hàng"
        onCancel={closeDialog}
        onOk={() => DeleteProduct(deleteId)}
        okText="Có"
        cancelText="Không"
      >
        <div>Bạn có chắc muốn xóa mặt hàng mã {deleteId} không?</div>
      </Modal>
      <div class="template-container">
        <div id="title">Danh sách mặt hàng</div>
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  success: state.product.success,
  productList: state.product.productList,
});

const mapDispatchToProps = {
  searchProduct,
  deleteProduct,
};

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(ViewProductTemplate)
);
