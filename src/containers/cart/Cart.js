import './index.scss'
import Header from '../../components/Homepage/Header'
import Footer from '../../components/Homepage/Footer'
import MainContent from '../../components/Cart/MainContent'
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
        <Col span={10} offset={2}>
          <MainContent />
        </Col>
      </Row>
      <Footer />
    </div>
  );
}

export default withTranslation()(Cart);