import "../../style/Admin.css"

function ViewOrderTemplate({orderList}) {
    return(
        <div class="template-container">
            <div id="title">Danh sách đơn hàng</div>
            <center>
                <table>
                    <tr>
                        <th>Mã đơn hàng</th>
                        <th>Trạng thái</th>
                        <th>Mã khách hàng</th>
                        <th>Mã sản phẩm</th>
                        <th>Số lượng</th>
                    </tr>
                    {
                        orderList.map(i => {
                            return <tr>
                                <td>{i.orderId}</td>
                                <td>{i.status}</td>
                                <td>{i.customerId}</td>
                                <td>{i.productId}</td>
                                <td>{i.quantity}</td>
                            </tr>
                        })
                    }
                </table>
            </center>
        </div>
    );
}

export default ViewOrderTemplate;