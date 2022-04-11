import Assure1 from "../../assets/images/assure1.png"
import Assure2 from "../../assets/images/assure2.png"
import Assure3 from "../../assets/images/assure3.png"
import Assure4 from "../../assets/images/assure4.png"

function Assure() {
    return (
        <div id="assure-container">
            <div className="assure">
                <img src={Assure1} width="120px" alt="1" />
                <div className="assure-name">Sản phẩm an toàn</div>
            </div>
            <div className="assure">
                <img src={Assure2} width="120px" alt="2" />
                <div className="assure-name">Chất lượng cam kết</div>
            </div>
            <div className="assure">
                <img src={Assure3} width="120px" alt="3" />
                <div className="assure-name">Dịch vụ vượt trội</div>
            </div>
            <div className="assure">
                <img src={Assure4} width="120px" alt="4" />
                <div className="assure-name">Giao hàng nhanh chóng</div>
            </div>           
        </div>
    );
}

export default Assure;