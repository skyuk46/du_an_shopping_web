import "../../containers/admin/index.scss";
import { Table } from "antd";
import { useEffect } from "react";
import {
  searchOrder,
} from "../../stores/order/order.action";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import { ORDER_STATUS } from "../../common/constant";

function ViewOrderTemplate(props) {
  const { orderList, t } = props;

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
    status: ORDER_STATUS.find(status => status.value === order.status)?.label
  }));

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: t('order.product'),
      dataIndex: "product",
      key: "product",
      render: (product) => {
        const { name } = product;
        return name;
      }
    },
    {
      title: t('order.quantity'),
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: t('order.total'),
      dataIndex: "total",
      key: "total",
    },
    {
      title: t('order.shippedDate'),
      dataIndex: "shippedDate",
      key: "shippedDate",
    },
    {
      title: t('order.status'),
      dataIndex: "status",
      key: "status",
    },
  ]

  return (
    <>
      <div class="template-container">
        <div id="title">{t('order.list')}</div>
        <Table dataSource={dataSource} columns={columns}>
        </Table>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  orderList: state.order.orderList
});

const mapDispatchToProps = {
  searchOrder,
};

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(ViewOrderTemplate)
);
