import "../../containers/admin/index.scss";
import { Table, Rate, Modal, Button } from "antd";
import { useEffect, useState } from "react";
import { searchReview, deleteReview } from "../../stores/review/review.action";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";

function ViewReviewTemplate(props) {
  const { reviewList, t } = props;
  const [openDialog, setOpenDialog] = useState(false);
  const [deleteId, setDeleteId] = useState(0);

  useEffect(function () {
    props.searchReview();
  }, []);

  const DeleteReview = (id) => {
    props.deleteReview(id, () => {
      setOpenDialog(false)
      props.searchReview()
    })
  }

  const closeDialog = () => {
    setOpenDialog(false);
  };

  const dataSource = reviewList?.map((review) => ({
    key: review.id,
    id: review.id,
    user: review.user.full_name,
    product: review.product.name,
    content: review.content,
    rate: review.rate_number,
  }));

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: t('review.user'),
      dataIndex: "user",
      key: "user",
    },
    {
      title: t('review.product'),
      dataIndex: "product",
      key: "product",
    },
    {
      title: t('review.content'),
      dataIndex: "content",
      key: "content",
    },
    {
      title: t('review.rate'),
      dataIndex: "rate",
      key: "rate",
      render: (rate) => {
        return (
          <Rate value={rate} />
        );
      }
    },
    {
      title: "",
      dataIndex: "id",
      key: "edit",
      width: "100px",
      render: (id, row) => {
        return (
          <Button
            onClick={() => {
              setDeleteId(id);
              setOpenDialog(true);
            }}
          >
            Xóa
          </Button>
        );
      },
    },
  ]

  return (
    <>
      <Modal
        visible={openDialog}
        title="Xác nhận xóa bình luận"
        onCancel={closeDialog}
        onOk={() => DeleteReview(deleteId)}
        okText="Có"
        cancelText="Không"
      >
        <div>Bạn có chắc muốn xóa bình luận mã {deleteId} không?</div>
      </Modal>
      <div class="template-container">
        <div id="title">{t('review.list')}</div>
        <Table dataSource={dataSource} columns={columns}>
        </Table>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  reviewList: state.review.reviewList
});

const mapDispatchToProps = {
  searchReview,
  deleteReview
};

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(ViewReviewTemplate)
);
