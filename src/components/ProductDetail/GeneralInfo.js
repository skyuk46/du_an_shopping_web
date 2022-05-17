import { useState } from "react";
import AddToCartButton from "../Button/AddToCartButton";
import { Carousel, Row, Col, Input } from "antd";
import '../../containers/product/index.scss'

function GeneralInfo({ product }) {
  const [amount, setAmount] = useState(1);

  const onChangeQuantity = (value) => {
    setAmount(value);
  };

  const contentStyle = {
    height: "400px",
    color: "#fff",
    lineHeight: "200px",
    textAlign: "center",
    background: "#E8E8E8",
    padding: "30px",
  };
  return (
    <>
      <Row className="product-general-info">
        <Col span={10}>
          <Carousel autoplay infinite={false}>
            {product?.image?.map((img) => (
              <div key={img.link}>
                {/* <h1 style={contentStyle}>dasdas</h1> */}
                <div style={contentStyle}>
                  <center>
                    <img src={img.link} width="380px" alt="img" />
                  </center>
                </div>
              </div>
            ))}
          </Carousel>
        </Col>
        <Col span={12} offset={1} className="general-detail">
          <div className="title">{product.name}</div>
          <div className="info-row">
            <Col span={3} className="label">Giá sản phẩm</Col>
            <Col span={6} offset={1}>{product.price}đ</Col>
          </div>
          <div className="info-row">
            <Col span={3} className="label">Vận chuyển</Col>
            <Col span={6} offset={1} >Đơn vị chuyển phát Viettel Post</Col>
          </div>
          <div className="info-row">
            <Col span={3} className="label">
              <span>Chọn số lượng</span>
            </Col>
            <Col span={2} offset={1}>
              <Input
                onChange={(event) => onChangeQuantity(event.target.value)}
                type="number"
                defaultValue={1}
              />
            </Col>
          </div>
          <div style={{ width: '10vw' }}>
            <AddToCartButton product={product} amount={amount} />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default GeneralInfo;
