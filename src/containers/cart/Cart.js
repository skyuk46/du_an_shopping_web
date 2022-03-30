import './index.css'
import Header from '../../components/Homepage/Header'
// import Footer from '../../components/Homepage/Footer'
// import MainContent from '../../components/Cart/MainContent'
import { useEffect } from "react"
import { withTranslation } from 'react-i18next'
import { Row, Col } from 'antd'

function Cart(props) {
  const { t } = props;
  useEffect(
    function () {
      document.title = t('cart.title')
    }
    , []);

  return (
    <div id="cart">
      <Header />
      <Row container direction="row" justifyContent="space-evenly" spacing={4}>
        <Col item md={2} sm={false} xs={false}></Col>
        <Col direction="row" item md={8} sm={12} xs={12}>
          {/* <MainContent /> */}
        </Col>
        <Col item md={2} sm={false} xs={false}></Col>
      </Row>
      {/* <Footer /> */}
    </div>
  );
}

export default withTranslation()(Cart);