import Header from '../../components/Homepage/Header'
import { useEffect } from "react";
import { withTranslation } from "react-i18next";
import './home.scss'
// import BannerList from '../../components/Homepage/BannerList';
// import MainContent from '../../components/Homepage/MainContent';
import Footer from '../../components/Homepage/Footer';

function Home(props) {
  const { t } = props;
  useEffect(
    function () {
      document.title = t('common.pageTitle')
    }
    , []);

  return (
    <div>
      <Header />
      {/* <BannerList />
      <MainContent /> */}
      <Footer />
    </div>
  );

}

export default withTranslation()(Home);
