import GeneralInfo from "./GeneralInfo"
import DetailedInfo from "./DetailedInfo";
import { Row, Col, Breadcrumb } from "antd";
import '../../containers/product/index.scss'

function MainContent({ product }) {
  return (
    <Row style={{ margin: "30px" }}>
      <Col>
        <Breadcrumb>
          <Breadcrumb.Item>
            <a href='/'>Trang chủ</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            {product.name}
          </Breadcrumb.Item>
        </Breadcrumb>
        <br />
        <GeneralInfo product={product} />
        <DetailedInfo product={product} />
      </Col>
    </Row>
  );
}

export default MainContent;