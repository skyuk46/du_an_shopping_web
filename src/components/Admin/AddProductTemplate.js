import "../../containers/admin/index.scss";
import { Input, Button } from "antd";
import { useState } from "react";
import { createProduct } from "../../stores/product/product.action";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";

function AddProductTemplate() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [categoryId, setCategoryId] = useState();
  const [status, setStatus] = useState();
  const [description, setDescription] = useState("");
  const [quantityInStock, setQuantityInStock] = useState();
  const [images, setImages] = useState(null);
  const [isAdded, setIsAdded] = useState(false);
  const [isAddFailed, setIsAddFailed] = useState(false);

  const AddProduct = async (props) => {
    const formData = new FormData();

    formData.append("myFile", images, images.name);

    const request = {
      id: id,
      name: name,
      price: price,
      categoryId: categoryId,
      status: status,
      description: description,
      quantityInStock: quantityInStock,
    };

    try {
      props.createProduct(request);
      setIsAdded(true);
    } catch (e) {
      setIsAddFailed(true);
    }
  };

  return (
    <div class="template-container">
      {isAddFailed ? (
        <div>
          <div style={{ fontSize: "20px", color: "red", marginBottom: "10px" }}>
            Thêm hàng thất bại, thông tin chưa đúng hoặc thiếu thông tin
          </div>
          <Button
            onClick={() => setIsAddFailed(false)}
            variant="contained"
            color="secondary"
          >
            Thêm lại
          </Button>
        </div>
      ) : (
        <>
          {isAdded ? (
            <div>
              <div
                style={{
                  fontSize: "20px",
                  color: "green",
                  marginBottom: "10px",
                }}
              >
                Mặt hàng đã được thêm
              </div>
              <Button
                onClick={() => setIsAdded(false)}
                variant="contained"
                color="secondary"
              >
                Tiếp tục thêm
              </Button>
            </div>
          ) : (
            <>
              <div id="title">Thêm mặt hàng</div>
              <Input
                onChange={(e) => {
                  setId(e.target.value);
                }}
                fullWidth
                size="small"
                label="Mã sản phẩm"
                type="number"
                variant="outlined"
              />
              <Input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                fullWidth
                size="small"
                label="Tên sản phẩm"
                type="search"
                variant="outlined"
              />
              <Input
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                fullWidth
                size="small"
                label="Giá sản phẩm"
                type="number"
                variant="outlined"
              />
              <Input
                onChange={(e) => {
                  setCategoryId(e.target.value);
                }}
                fullWidth
                size="small"
                label="Mã loại sản phẩm"
                type="number"
                variant="outlined"
              />
              <Input
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
                fullWidth
                size="small"
                label="Trạng thái"
                type="search"
                variant="outlined"
              />
              <Input
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                fullWidth
                size="small"
                label="Mô tả sản phẩm"
                type="search"
                variant="outlined"
              />
              <Input
                onChange={(e) => {
                  setQuantityInStock(e.target.value);
                }}
                fullWidth
                size="small"
                label="Số lượng sản phẩm"
                type="number"
                variant="outlined"
              />
              <span style={{ color: "grey" }}>Ảnh sản phẩm: </span>
              <input
                onChange={(e) => setImages(e.target.files[0])}
                accept="image/*"
                id="icon-button-file"
                type="file"
              />
              <div>
                <Button
                  onClick={AddProduct}
                  variant="contained"
                  style={{ color: "white", backgroundColor: "red" }}
                >
                  Thêm
                </Button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  success: state.product.success,
});

const mapDispatchToProps = {
  createProduct,
};

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(AddProductTemplate)
);
