import "../../containers/admin/index.scss";
import { Input, Button, Table } from "antd"
import { useState } from "react"
import { searchProduct, updateProduct } from "../../stores/product/product.action"
import { withTranslation } from "react-i18next"
import { connect } from "react-redux"

function EditProductTemplate(props) {
  const { productList } = props;
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState(1);
  const [editQuantity, setEditQuantity] = useState(1);
  const [editDescription, setEditDescription] = useState("");
  const [isSave, setIsSave] = useState(false);
  const [editingId, setEditingId] = useState(-1);

  const Save = async () => {
    const imageList = productList.find(product => product.id === editingId)?.image
    let request = {
      "id": editingId,
      "name": editName,
      "price": editPrice,
      "categoryId": productList.find(product => product.id === editingId)?.category.id,
      "description": editDescription,
      "quantity": editQuantity,
      "product_file_main": imageList[0],
      "product_file_secondary": imageList.splice(1, imageList.length - 1),
      token: window.localStorage.getItem("token"),
    }
    props.updateProduct(request).then(res => {
      setIsSave(true);
      props.searchProduct();
    });
  }

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
        const { id } = row;
        if (editingId === id)
          return (
            <Input
              value={editPrice}
              onChange={(event) => setEditPrice(event.target.value)}
            />
          );
        else return price;
      },
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
      render: (quantity, row) => {
        const { id } = row;
        if (editingId === id)
          return (
            <Input
              value={editQuantity}
              onChange={(event) => setEditQuantity(event.target.value)}
            />
          );
        else return quantity;
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
      title: "Ảnh",
      dataIndex: "image",
      key: "image",
      render: (image, row) => {
        return (
          <div class="image-container">
            {
              image.map(img => (
                <img src={img.link} width="120" height="120" alt="img"/>
              ))
            }
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
  ]

  const dataSource = productList.map(p => ({
    id: p.id,
    name: p.name,
    price: p.price,
    quantity: p.quantity,
    description: p.description,
    category: p.category,
    image: p.image
  }))
  return (
    <div className="template-container">
      <div id="title">
        Sửa thông tin mặt hàng
        <Button onClick={Save} variant="contained" style={{ backgroundColor: "green", color: "white" }}>Lưu</Button>
        {
          isSave
            ? <span id="isSave">Đã lưu</span>
            : <span></span>
        }
      </div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  success: state.product.success,
  productList: state.product.productList
});

const mapDispatchToProps = {
  searchProduct,
  updateProduct,
};

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(EditProductTemplate)
);
