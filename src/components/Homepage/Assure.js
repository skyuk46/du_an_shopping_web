import Assure1 from "../../assets/images/assure1.png"
import Assure2 from "../../assets/images/assure2.png"
import Assure3 from "../../assets/images/assure3.png"
import Assure4 from "../../assets/images/assure4.png"

function Assure() {
    return (
        <div id="assure-container">
            <div class="assure">
                <img src={Assure1} width="120px" alt="1" />
                <div class="assure-name">Sản phẩm an toàn</div>
            </div>
            <div class="assure">
                <img src={Assure2} width="120px" alt="2" />
                <div class="assure-name">Chất lượng cam kết</div>
            </div>
            <div class="assure">
                <img src={Assure3} width="120px" alt="3" />
                <div class="assure-name">Dịch vụ vượt trội</div>
            </div>
            <div class="assure">
                <img src={Assure4} width="120px" alt="4" />
                <div class="assure-name">Giao hàng nhanh chóng</div>
            </div>           
        </div>
    );
}

export default Assure;