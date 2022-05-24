import "../../containers/admin/index.scss";
import { Input, Button, Table, Modal } from "antd";
import { useState } from "react";
import { updateUser, searchUser } from "../../stores/user/user.action";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";

function EditUserTemplate(props) {
  const { userList } = props;
  const [editFirstName, setEditFistName] = useState("");
  const [editLastName, setEditLastName] = useState("");
  const [editPhone, setEditPhone] = useState("");
  const [editAddress, setEditAddress] = useState("");
  const [editingId, setEditingId] = useState(-1);

  const Save = () => {
    let request = {
      id: editingId,
      fist_name: editFirstName,
      last_name: editLastName,
      phone: editPhone,
      address: editAddress,
      token: window.localStorage.getItem("token"),
    };
    props.updateUser(request, () => {
      props.searchUser();
      setEditingId(null);
    });
  };

  const dataSource = userList.map((user, index) => ({
    key: index,
    id: user.id,
    firstName: user.first_name,
    lastName: user.last_name,
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
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Họ",
      dataIndex: "firstName",
      key: "firstName",
      render: (firstName, row) => {
        const { id } = row;
        if (editingId === id)
          return (
            <Input
              value={editFirstName}
              onChange={(event) => setEditFistName(event.target.value)}
            />
          );
        else return firstName;
      },
    },
    {
      title: "Tên",
      dataIndex: "lastName",
      key: "lastName",
      render: (lastName, row) => {
        const { id } = row;
        if (editingId === id)
          return (
            <Input
              value={editLastName}
              onChange={(event) => setEditLastName(event.target.value)}
            />
          );
        else return lastName;
      },
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
      render: (phone, row) => {
        const { id } = row;
        if (editingId === id)
          return (
            <Input
              value={editPhone}
              onChange={(event) => setEditPhone(event.target.value)}
            />
          );
        else return phone;
      },
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
      render: (address, row) => {
        const { id } = row;
        if (editingId === id)
          return (
            <Input
              value={editAddress}
              onChange={(event) => setEditAddress(event.target.value)}
            />
          );
        else return address;
      },
    },
    {
      title: "",
      dataIndex: "id",
      key: "edit",
      width: "100px",
      render: (id, row) => {
        const { firstName, lastName, phone, address } = row;
        return (
          <Button
            onClick={() => {
              setEditingId(id);
              setEditFistName(firstName);
              setEditLastName(lastName);
              setEditPhone(phone);
              setEditAddress(address);
            }}
          >
            Sửa
          </Button>
        );
      },
    },
  ];
  return (
    <div className="template-container">
      <div id="title">
        Sửa thông tin người dùng
        <Button
          onClick={Save}
          variant="contained"
          style={{ backgroundColor: "green", color: "white" }}
        >
          Lưu
        </Button>
      </div>
      <Table dataSource={dataSource} columns={columns}></Table>
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  updateUser,
  searchUser,
};

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(EditUserTemplate)
);
