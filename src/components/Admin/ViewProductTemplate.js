import "../../containers/admin/index.scss";
import { Button, Modal } from "antd"
import { useState } from "react"
import { searchProduct, deleteProduct } from "../../stores/product/product.action"
import { withTranslation } from "react-i18next"
import { connect } from "react-redux"

function ViewProductTemplate(props) {
  const { productList } = props;
  const DeleteProduct = async (id) => {
    setOpenDialog(false);
    props.deleteProduct(id).then(res => {
      props.searchProduct()
    });
  }

  const closeDialog = () => {
    setOpenDialog(false);
  }

  const [openDialog, setOpenDialog] = useState(false);
  const [deleteId, setDeleteId] = useState(0);

  return (<>
    <Modal visible={openDialog} title="Xác nhận xóa mặt hàng" onCancel={closeDialog} onOk={() => DeleteProduct(deleteId)} okText="Có" cancelText="Không">
      <div>Bạn có chắc muốn xóa mặt hàng mã {deleteId} không?</div>
    </Modal>
    <div class="template-container">
      <div id="title">Danh sách mặt hàng</div>
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
            return <tr>
              <td>{i.id}</td>
              <td>{i.name}</td>
              <td>{i.price}</td>
              <td>{i.categoryId}</td>
              <td>{i.status}</td>
              <td>{i.description}</td>
              <td>{i.quantityInStock}</td>
              <td><img src={i.images} alt="img" /></td>
              <td><Button variant="contained" color="secondary" onClick={() => { setOpenDialog(true); setDeleteId(i.id); }}>Xóa</Button></td>
            </tr>
          })
        }
      </table>
    </div>
  </>
  );
}

const mapStateToProps = (state) => ({
  success: state.product.success,
  productList: state.product.productList
});

const mapDispatchToProps = {
  searchProduct,
  deleteProduct
};

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(ViewProductTemplate)
);
