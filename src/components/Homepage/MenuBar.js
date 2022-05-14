import { useState } from "react";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import { Button, Row, Drawer, List } from "antd";
import { ShopOutlined } from "@ant-design/icons";
import { redirectRouter } from "../../utils/router";

function MenuBar(props) {
  const { categoryList } = props;
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (isOpen) => {
    setOpenDrawer(isOpen);
  };

  const redirectToCategoryProduct = (category) => {
    redirectRouter(`/category/${category.id}`);
  };

  const list = () => (
    <div
      role="presentation"
      onKeyDown={() => toggleDrawer(false)}
    >
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
    </div>
  );

  return (
    <Row
      style={{
        zIndex: "2",
        marginTop: "20px",
        backgroundColor: "white",
      }}
    >
      <Row></Row>
      <Row>
        <Button onClick={() => toggleDrawer(true)}>Danh mục sản phẩm</Button>
        <Drawer
          title="Danh mục sản phẩm"
          placement="left"
          visible={openDrawer}
          width={300}
          closable={false}
          onClose={() => toggleDrawer(false)}
        >
          {list()}
        </Drawer>
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
