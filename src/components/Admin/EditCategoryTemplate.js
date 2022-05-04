import "../../containers/admin/index.scss";
import { Input, Button, Table, Modal } from "antd";
import { useState } from "react";
import {
  updateCategory,
  searchCategory,
} from "../../stores/category/category.action";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";

function EditCategoryTemplate(props) {
  const { categoryList } = props;
  const [editName, setEditName] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [isSave, setIsSave] = useState(false);
  const [editingId, setEditingId] = useState(-1);

  const Save = () => {
    let request = {
      id: editingId,
      name: editName,
      description: editDescription,
      token: window.localStorage.getItem("token"),
    };
    props.updateCategory(request, () => {
      props.searchCategory();
      setIsSave(true);
    });
  };

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
      render: (name, row) => {
        const { id } = row;
        if (editingId === id)
          return (
            <Input
              value={editName}
              onChange={(event) => setEditName(event.target.value)}
            />
          );
        else return name;
      },
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
      render: (description, row) => {
        const { id } = row;
        if (editingId === id)
          return (
            <Input
              value={editDescription}
              onChange={(event) => setEditDescription(event.target.value)}
            />
          );
        else return description;
      },
    },
    {
      title: "",
      dataIndex: "id",
      key: "edit",
      width: "100px",
      render: (id, row) => {
        const { name, description } = row;
        return (
          <Button
            onClick={() => {
              setEditingId(id);
              setIsSave(false);
              setEditName(name);
              setEditDescription(description);
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
        Sửa thông tin loại sản phẩm
        <Button
          onClick={Save}
          variant="contained"
          style={{ backgroundColor: "green", color: "white" }}
        >
          Lưu
        </Button>
        <Modal visible={isSave} footer={null}>
          Đã lưu
        </Modal>
      </div>
      <Table dataSource={dataSource} columns={columns}>
      </Table>
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  updateCategory,
  searchCategory,
};

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(EditCategoryTemplate)
);
