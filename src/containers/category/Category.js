import Header from "../../components/Homepage/Header";
import Footer from "../../components/Homepage/Footer";
import MainContent from "../../components/category/MainContent";
import { useParams } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";

function Category(props) {
  const { id } = useParams();

  return (
    <>
      <Header />
      <MainContent id={id} />
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
};

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(Category)
);
