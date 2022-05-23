import "../../containers/admin/index.scss";
import { Button, Modal, Table } from "antd";
import { useState } from "react";
import {
  deleteCategory,
  searchCategory,
} from "../../stores/category/category.action";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";

function ViewCategoryTemplate(props) {
  const { categoryList } = props;
  const DeleteCategory = (id) => {
    props.deleteCategory(
      { id, token: window.localStorage.getItem("token") },
      () => {
        props.searchCategory();
        setOpenDialog(false);
      }
    );
  };

  const closeDialog = () => {
    setOpenDialog(false);
  };

  const [openDialog, setOpenDialog] = useState(false);
  const [deleteId, setDeleteId] = useState(0);

  const dataSource = categoryList.map((category, index) => ({
    key: index,
    id: category.id,
    name: category.name,
    description: category.description,
  }));

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tên loại sản phẩm",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "",
      dataIndex: "id",
      key: "edit",
      width: "100px",
      render: (id) => {
        return (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              setOpenDialog(true);
              setDeleteId(id);
            }}
          >
            Xóa
          </Button>
        );
      },
    },
  ];

  return (
    <>
      <Modal
        visible={openDialog}
        onCancel={closeDialog}
        onOk={() => DeleteCategory(deleteId)}
        title="Xác nhận xóa loại mặt hàng"
        cancelText="Không"
        okText="Có"
      >
        <div>Bạn có chắc muốn xóa loại mặt hàng mã {deleteId} không?</div>
      </Modal>
      <div class="template-container">
        <div id="title">Danh sách loại sản phẩm</div>
        <Table dataSource={dataSource} columns={columns}></Table>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  deleteCategory,
  searchCategory,
};

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(ViewCategoryTemplate)
);
