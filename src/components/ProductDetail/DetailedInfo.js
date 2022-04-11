import { Row, Col } from "antd";

function DetailedInfo({ product }) {
  return (
    <>
      <div style={{ fontSize: "24px", fontWeight: "100" }}>Về sản phẩm</div>
      <div className="product-detailed-info">
        <div className="details">
          <div className="title">THÔNG TIN CHI TIẾT</div>
          <div className="content">
            {product.image && (
              <center>
                <img src={product?.image[0]?.link} alt="desImg" width="350px" />
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
    </>
  );
}

export default DetailedInfo;
