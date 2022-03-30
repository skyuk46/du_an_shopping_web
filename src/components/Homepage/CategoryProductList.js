import '../../style/Homepage.css'
import Product from './Product'
import { useEffect, useState } from 'react'
import { getProductByCategory } from '../../services/api/apiService'

function CategoryProductList({ category, categoryId }) {
    const [productList, setProductList] = useState([])
    useEffect(
        async function () {
            let res = await getProductByCategory(categoryId);
            setProductList(res.data.data);
        }, []);

    return (
        <div>
            <div class="category-name">{category}</div>
        </div>
    );
}

export default CategoryProductList;