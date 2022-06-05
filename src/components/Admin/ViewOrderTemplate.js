import "../../containers/admin/index.scss";
import { Table, Button, Modal } from "antd";
import { useEffect } from "react";
import { searchOrder, updateOrder } from "../../stores/order/order.action";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import { ORDER_STATUS } from "../../common/constant";
import { useState } from "react";

function ViewOrderTemplate(props) {
  const { orderList, t } = props;
  const [confirmId, setConfirmId] = useState(null);

  useEffect(function () {
    props.searchOrder();
  }, []);

  const dataSource = orderList.map((order, index) => ({
    key: index,
    id: order.id,
    product: order.product,
    quantity: order.amount,
    total: order.total_price,
    shippedDate: order.shipped_date,
    status: ORDER_STATUS.find((status) => status.value === order.status)?.label,
  }));

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: t("order.product"),
      dataIndex: "product",
      key: "product",
      render: (product) => {
        const { name } = product;
        return name;
      },
    },
    {
      title: t("order.quantity"),
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: t("order.total"),
      dataIndex: "total",
      key: "total",
    },
    {
      title: t("order.shippedDate"),
      dataIndex: "shippedDate",
      key: "shippedDate",
    },
    {
      title: t("order.status"),
      dataIndex: "status",
      key: "status",
    },
    {
      title: "",
      dataIndex: "id",
      key: "edit",
      width: "100px",
      render: (id, row) => {
        const { status } = row;
        return (
          <>
            {
              status === 'Chờ thanh toán' && (<Button
                onClick={() => {
                  setConfirmId(id);
                }}
              >
                Xác nhận đã thanh toán
              </Button>
              )
            }
          </>
        );
      },
    },
  ];

  const closeDialog = () => {
    setConfirmId(null);
  };

  const confirmOrder = (id) => {
    props.updateOrder(
      { id, status: "cancel", token: window.localStorage.getItem("token") },
      () => {
        props.searchOrder();
        setConfirmId(null);
      }
    );
  };

  return (
    <>
      <Modal
        visible={confirmId}
        onCancel={closeDialog}
        onOk={() => confirmOrder(confirmId)}
        title="Xác nhận đơn hàng đã thanh toán"
        cancelText="Không"
        okText="Có"
      >
        <div>
          Bạn có chắc chắn muốn xác nhận đã thanh toán cho đơn hàng {confirmId}{" "}
          không?
        </div>
      </Modal>
      <div class="template-container">
        <div id="title">{t("order.list")}</div>
        <Table dataSource={dataSource} columns={columns}></Table>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  orderList: state.order.orderList,
});

const mapDispatchToProps = {
  searchOrder,
  updateOrder,
};

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(ViewOrderTemplate)
);
