import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import { Row, Col, Input, Button, Divider, Rate } from "antd";
import { getReviewByProductId, createReview } from "../../stores/review/review.action";
import { getProductDetail } from "../../stores/product/product.action";
import { useEffect, useState } from "react";
import addNotification from "../../common/toast";
import { NOTIFICATION_TYPE } from "../../common/constant";
import '../../containers/product/index.scss'

function DetailedInfo(props) {
  const { product, reviewList } = props;
  const [content, setContent] = useState('')
  const [rate, setRate] = useState(0)

  useEffect(function () {
    if (product.id)
      props.getReviewByProductId(product.id);
  }, [product]);

  const submitReview = () => {
    if (!content) {
      addNotification('Bạn chưa nhập nhận xét', NOTIFICATION_TYPE.ERROR)
      return;
    }
    const params = {
      token: window.localStorage.getItem("token"),
      product_id: product.id,
      content,
      rate_number: rate
    }

    props.createReview(params, () => {
      setRate(0)
      setContent('')
      props.getProductDetail(product.id)
    })
  }

  return (
    <>
      <div style={{ fontSize: "24px", fontWeight: "100" }}>Về sản phẩm</div>
      <div className="product-detailed-info">
        <div className="details">
          <div className="title">THÔNG TIN CHI TIẾT</div>
          <div className="content">
            {product.image && (
              <center>
                <img
                  src={product?.image.length > 0 ? product?.image[0]?.link : ""}
                  alt="desImg"
                  width="350px"
                />
              </center>
            )}
            <br />
            <Row>
              <Col span={5} className="header">
                Giới thiệu sản phẩm
              </Col>
              <Col span={16} className="des_content">
                {product.description}
              </Col>
            </Row>
            <Row>
              <Col span={5} className="header">
                Thông tin sản phẩm
              </Col>
              <Col span={16} className="des_content"></Col>
            </Row>
            <div style={{ fontWeight: "bold", fontSize: "18px" }}>
              Hướng dẫn sử dụng:
            </div>
            <div style={{ fontWeight: "bold", fontSize: "18px" }}>
              Hướng dẫn bảo quản:
            </div>
            <div style={{ fontWeight: "bold", fontSize: "18px" }}>Lưu ý:</div>
          </div>
          <Divider />
          <div className="comment-container">
            <h2>Nhận xét</h2>
            {
              reviewList.map(review => (
                <span key={review.id}>
                  <div style={{fontSize: '18px'}}><b>{review.user.full_name}</b></div>
                  <div className="comment">
                    <Row><Rate value={review.rate_number} disabled /> </Row>
                    <br />
                    <Row>Nhận xét: {review.content}</Row>
                  </div>
                </span>
              ))
            }
            {window.localStorage.getItem("token") && (
              <>
                <Rate value={rate} onChange={(value) => setRate(value)} />
                <Input.TextArea multiple rows={2} onChange={(event) => setContent(event.target.value)} />
                <Row style={{ justifyContent: 'right', marginTop: '10px' }}>
                  <div>
                    <Button type="primary" onClick={submitReview}>Gửi</Button>
                  </div>
                </Row>
              </>
            )}
          </div>
        </div>
        <div className="parameters">
          <div className="title">THÔNG SỐ</div>
          <Row className="parameter">
            <Col span={6} className="name">
              Thương hiệu
            </Col>
            <Col span={4} className="content"></Col>
          </Row>
          <Row className="parameter">
            <Col span={6} className="name">
              Xuất xứ
            </Col>
            <Col span={6} className="content">
              Nước ngoài
            </Col>
          </Row>
          <Row className="parameter">
            <Col span={6} className="name">
              Khối lượng
            </Col>
            <Col span={6} className="content">
              ? Kg
            </Col>
          </Row>
        </div>
      </div>
      <div>

      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  reviewList: state.review.reviewList
});

const mapDispatchToProps = {
  getReviewByProductId,
  createReview,
  getProductDetail
};

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(DetailedInfo)
);
