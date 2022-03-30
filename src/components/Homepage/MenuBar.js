import { useState, useEffect } from "react"
// import {categoryNavigation} from '../../services/navigation/categoryNavigationService'
import { useHistory } from "react-router-dom"
import { Button, Row, Col, Divider, Drawer, List, Typography } from "antd"

function MenuBar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [categoriesList, setCategoriesList] = useState([]);
  const history = useHistory();

  useEffect(
    async function () {
      setCategoriesList((await getAllCategories()).data.data);
    }
    , []);


  const toggleDrawer = (isOpen) => {
    setOpenDrawer(isOpen);
  }

  const list = () => (
    <div
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <List>
        {
          categoriesList.map((i) => (
            <>
              <List.Item onClick={() => categoryNavigation(i.id, history)} button key={i.name}>
                <List.Item.Meta avatar={<FastfoodIcon />} />
                <Typography primary={i.name} />
              </List.Item>
              <Divider />
            </>
          ))
        }
      </List>
    </div>
  );

  return (
    <Row style={{ zIndex: "2", borderBottom: "1px solid black", marginTop: "20px", paddingBottom: "5px", backgroundColor: "white" }} container>
      <Row item md={2} sm={false} xs={false}></Row>
      <Row item md={8} sm={12} xs={12}>
        <Button
          onClick={() => toggleDrawer(true)}
        >
          Danh mục sản phẩm
        </Button>
        <Drawer placement="left" visible={openDrawer} onClose={() => toggleDrawer(false)}>
          {list()}
        </Drawer>
      </Row>
      <Row item md={2} sm={false} xs={false}></Row>
    </Row>
  );
}

export default MenuBar;