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
                <li class="name">{t('common.customerSupport')}</li>
                <li>{t('common.paymentPolicy')}</li>
                <li>{t('common.deliveryPolicy')}</li>
                <li>{t('common.refundPolicy')}</li>
              </ul>
            </div>
            <div class="info-column">
              <ul>
                <li class="name">{t('common.customerCare')}</li>
                <li>{t('common.onlineNumber')}</li>
                <li>{t('common.contactEmail')}</li>
              </ul>
            </div>
          </div>
          <div id="offices">
            <div class="office">
              <div class="name">{t('common.mainOffice')}</div>
              <div class="address">
                {t('common.address')}
              </div>
            </div>
            <div class="office">
              <div class="name">{t('common.hcmOffice')}</div>
              <div class="address">
                {t('common.none')}
              </div>
            </div>
            <div class="office">
              <div class="name">{t('common.hnOffice')}</div>
              <div class="address">
                {t('common.address')}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default withTranslation()(Footer);