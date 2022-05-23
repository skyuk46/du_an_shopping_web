import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import { Row, List } from "antd";
import { ShopOutlined } from "@ant-design/icons";
import { redirectRouter } from "../../utils/router";

function MenuBar(props) {
  const { categoryList } = props;

  const redirectToCategoryProduct = (category) => {
    redirectRouter(`/category/${category.id}`);
  };

  return (
    <Row
      style={{
        zIndex: "2",
        paddingLeft: "6.7vw",
      }}
    >
      <Row style={{
        backgroundColor: "#DCDCDC",
        padding: "30px",
        height: '450px',
        overflowY: 'auto'
      }}>
        <List>
          {categoryList.map((i) => (
            <>
              <List.Item key={i.id}>
                <div
                  onClick={() => redirectToCategoryProduct(i)}
                  style={{ fontSize: "18px", display: "block" }}
                >
                  <span style={{ display: "inline-block" }}>
                    <List.Item.Meta avatar={<ShopOutlined />} />
                  </span>
                  <span style={{ display: "inline-block" }}>{i.name}</span>
                </div>
              </List.Item>
            </>
          ))}
        </List>
      </Row>
    </Row>
  );
}

const mapStateToProps = (state) => ({
  categoryList: state.category.categoryList,
});

const mapDispatchToProps = {};

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(MenuBar)
);
