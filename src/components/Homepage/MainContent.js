import "../../style/Homepage.css";
import { useEffect, useState } from "react";
import CategoryProductList from "./CategoryProductList";
import { getAllCategories } from "../../services/api/apiService";
import { Link } from "react-router-dom";

function MainContent() {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(async function () {
    let res = await getAllCategories();
    setCategoryList(res.data.data);
  }, []);

  return (
    <div id="maincontent-container">
      {categoryList.map((i) => {
        return (
          <>
            <CategoryProductList category={i.name} categoryId={i.id} />
            <center>
              <Link style={{ textDecoration: "none" }} to={`category/${i.id}`}>
                <Button variant="outlined" color="secondary">
                  Xem tất cả
                </Button>
              </Link>
            </center>
          </>
        );
      })}
    </div>
  );
}

export default MainContent;
