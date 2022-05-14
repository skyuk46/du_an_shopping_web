import {Button} from "@material-ui/core"
import { filterPrice } from "../../services/filter/filterPriceService";
import { useDispatch, useSelector } from "react-redux"
import { setProductListOn } from "../../features/productListSlice";
import { getProductByCategory } from '../../services/api/apiService';
import {useState} from "@material-ui/core"

function CategoryFilterOption({id}) {
    const dispatch = useDispatch();

    const restoreProductList = async () => {
        let list = (await getProductByCategory(id)).data.data;
        dispatch(setProductListOn({"productList": list}));
    }   

    return (
        <div id="filter-option-container">
            Giá
            <ul>
                <li><Button onClick={() => filterPrice(dispatch, id, 0, 100000)}>Dưới 100.000đ</Button></li>
                <li><Button onClick={() => filterPrice(dispatch, id, 100000, 300000)}>Từ 100.000 đến 300.000đ</Button></li>
                <li><Button onClick={() => filterPrice(dispatch, id, 300000, 500000)}>Từ 300.000đ đến 500.000đ</Button></li>
                <li><Button onClick={() => filterPrice(dispatch, id, 500000, 1000000000)}>Trên 500.000đ</Button></li>
            </ul>
        </div>
    );
}

export default CategoryFilterOption;