import "../../containers/home/home.scss";
import logo from "../../assets/images/logo.png"
import certificate from '../../assets/images/certificate.png'
import Assure from './Assure';
import { withTranslation } from "react-i18next";
import { Row, Col } from "antd";

function Footer(props) {
  const { t } = props;
  return (
    <>
      <Assure />
      <Row id="footer-container">
        <Col span={21} offset={2}>
          <div id="footer">
            <div class="info-column">
              <img width="100px" src={logo} alt="logo" />
              <div>{t('common.companyName')}</div>
              <div>{t('common.companyId')}</div>
              <img src={certificate} width="140px" alt="certificate" />
            </div>
            <div class="info-column">
              <ul>
                <li class="name">{t('common.aboutUs')}</li>
                <li>{t('common.introduce')}</li>
                <li>{t('common.storeList')}</li>
                <li>{t('common.qualityManagement')}</li>
                <li>{t('common.rules')}</li>
                <li>{t('common.securityPolicy')}</li>
              </ul>
            </div>
            <div class="info-column">
              <ul>
                <li class="name">Hỗ trợ khách hàng</li>
                <li>Trung tâm hỗ trợ khách hàng</li>
                <li>Chính sách thanh toán</li>
                <li>Chính sách giao hàng</li>
                <li>Chính sách đổi trả</li>
                <li>Chính sách chiết khấu ưu đãi mua sắm</li>
              </ul>
            </div>
            <div class="info-column">
              <ul>
                <li class="name">Chăm sóc khách hàng</li>
                <li>Mua Online : 0247 1066866</li>
                <li>Email: cskh@winmart.masangroup.com</li>
              </ul>
            </div>
          </div>
          <div id="offices">
            <div class="office">
              <div class="name">Trụ sở chính:</div>
              <div class="address">
                Công Ty Cổ Phần Dịch Vụ Thương Mại Tổng Hợp VinCommerce
                Tầng 5, Mplaza SaiGon, 39 Lê Duẩn, Phường Bến Nghé, Quận 1, Thành Phố Hồ Chí Minh, Việt Nam.
              </div>
            </div>
            <div class="office">
              <div class="name">Địa chỉ giao dịch TP.HCM:</div>
              <div class="address">
                Công Ty Cổ Phần Dịch Vụ Thương Mại Tổng Hợp VinCommerce
                Tầng 5, Mplaza SaiGon, 39 Lê Duẩn, Phường Bến Nghé, Quận 1, Thành Phố Hồ Chí Minh.
              </div>
            </div>
            <div class="office">
              <div class="name">Địa chỉ giao dịch Hà Nội:</div>
              <div class="address">
                Công Ty Cổ Phần Dịch Vụ Thương Mại Tổng Hợp VinCommerce
                Tower 1, Times City, 458 Minh Khai, Phường Vĩnh Tuy, Quận Hai Bà Trưng, Thành phố Hà Nội.
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default withTranslation()(Footer);