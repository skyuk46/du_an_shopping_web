import "../../containers/admin/index.scss";
import { Button, Modal, Table } from "antd";
import { useState } from "react";
import { deleteUser, searchUser } from "../../stores/user/user.action";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";

function ViewUserTemplate(props) {
  const { userList } = props;
  const DeleteUser = (id) => {
    props.deleteUser(
      { id, token: window.localStorage.getItem("token") },
      () => {
        props.searchUser();
      }
    );
    setOpenDialog(false);
  };

  const closeDialog = () => {
    setOpenDialog(false);
  };

  const [openDialog, setOpenDialog] = useState(false);
  const [deleteId, setDeleteId] = useState(0);

  const dataSource = userList.map((user, index) => ({
    key: index,
    id: user.id,
    fullName: user.full_name,
    phone: user.phone,
    email: user.email,
    address: user.address,
  }));

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Họ và tên",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
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
        onOk={() => DeleteUser(deleteId)}
        title="Xác nhận xóa người dùng"
        cancelText="Không"
        okText="Có"
      >
        <div>Bạn có chắc muốn xóa người dùng mã {deleteId} không?</div>
      </Modal>
      <div class="template-container">
        <div id="title">Danh sách người dùng</div>
        <Table dataSource={dataSource} columns={columns}></Table>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  deleteUser,
  searchUser,
};

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(ViewUserTemplate)
);
