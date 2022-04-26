import "../../containers/admin/index.scss";
import { Input, Button } from "antd"
import { Fragment, useState } from "react"
import { searchProduct, updateProduct } from "../../stores/product/product.action"
import { withTranslation } from "react-i18next"
import { connect } from "react-redux"

function EditProductTemplate(props) {
  // const { productList } = props;
  // const [isEdit, setIsEdit] = useState(false);
  // const [isSave, setIsSave] = useState(false);
  // const [editingId, setEditingId] = useState(-1);

  // const Save = async () => {
  //   let request = {
  //     "id": id,
  //     "name": name,
  //     "price": price,
  //     "categoryId": categoryId,
  //     "status": status,
  //     "description": description,
  //     "quantityInStock": quantityInStock,
  //     "images": images
  //   }
  //   props.updateProduct(request).then(res => {
  //     setIsSave(true);
  //     props.searchProduct();
  //     setIsEdit(false);
  //   });
  // }

  return (
    <div class="template-container">
      {/* <div id="title">
        Sửa thông tin mặt hàng
        <Button onClick={Save} variant="contained" style={{ backgroundColor: "green", color: "white" }}>Lưu</Button>
        {
          isSave
            ? <span id="isSave">Đã lưu</span>
            : <span></span>
        }
      </div>
      <table>
        <tr>
          <th>Mã sản phẩm</th>
          <th>Tên sản phẩm</th>
          <th>Giá</th>
          <th>Loại mặt hàng</th>
          <th>Trạng thái</th>
          <th>Mô tả</th>
          <th>Số lượng</th>
          <th>Ảnh</th>
          <th></th>
        </tr>
        {
          productList.map(i => {
            if (editingId === i.id) {
              id = i.id;
              name = i.name;
              price = i.price;
              categoryId = i.categoryId;
              status = i.status;
              description = i.description;
              quantityInStock = i.quantityInStock;
              images = i.images;
            }

            return (<Fragment>
              {
                (isEdit && editingId === i.id)
                  ? <tr>
                    <td><Input placeholder={i.id} onChange={(e) => id = e.target.value} fullWidth size="small" variant="outlined" /></td>
                    <td><Input placeholder={i.name} onChange={(e) => name = e.target.value} fullWidth size="small" variant="outlined" /></td>
                    <td><Input placeholder={i.price} onChange={(e) => price = e.target.value} fullWidth size="small" variant="outlined" /></td>
                    <td><Input placeholder={i.categoryId} onChange={(e) => categoryId = e.target.value} fullWidth size="small" variant="outlined" /></td>
                    <td><Input placeholder={i.status} onChange={(e) => status = e.target.value} fullWidth size="small" variant="outlined" /></td>
                    <td><Input id="description-textfield" multiline placeholder={i.description} onChange={(e) => description = e.target.value} fullWidth size="medium" variant="outlined" /></td>
                    <td><Input placeholder={i.quantityInStock} onChange={(e) => quantityInStock = e.target.value} fullWidth size="small" variant="outlined" /></td>
                    <td><img width="100px" src={i.images} alt="img" /></td>
                    <td><Button onClick={() => { setIsEdit(false); setEditingId(-1); }}>Dừng sửa</Button></td>
                  </tr>
                  : <tr>
                    <td>{i.id}</td>
                    <td>{i.name}</td>
                    <td>{i.price}</td>
                    <td>{i.categoryId}</td>
                    <td>{i.status}</td>
                    <td>{i.description}</td>
                    <td>{i.quantityInStock}</td>
                    <td><img width="100px" src={i.images} alt="img" /></td>
                    <td><Button onClick={() => { setIsEdit(true); setEditingId(i.id); setIsSave(false) }}>Sửa</Button></td>
                  </tr>
              }
            </Fragment>
            )
          })
        }
      </table> */}
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
