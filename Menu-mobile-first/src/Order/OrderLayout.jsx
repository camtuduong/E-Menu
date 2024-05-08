import { GoArrowLeft } from "react-icons/go";
import OrderItem from "./OrderItem";
import TotalPriceOrder from "./TotalPriceOrder";
import OrderEmpty from "./OrderEmpty";
import BtnBack from "../Component/BtnBack";

function Order() {
  return (
    <div className="Order">
      <div className="place-nav">
        <div className="place-nav__inner wrapper">
          <BtnBack />
        </div>
      </div>
      <h2 className="h2">
        <span>My order:</span>
      </h2>

      <div className="order-item-list">
        {/* Tab của từng món ăn */}
        <OrderItem />
      </div>
      {/* Hiện tại không được hiện do chưa viết Event 
          Nếu copy code từ TotalPrice qua thì vẫn sẽ hiện , ở đây cớ thể là co CSS
      */}
      <div class="order-total-price">
        {/* <TotalPriceOrder /> */}
        <span>Total: </span>
        <div className="menu-item-price menu-item-price--regular">
          <span className="menu-item-price__current">
            {/* số tiền sẽ được cộng dồn dựa trên tiền của Item */}
            <b>998.000</b> <span>₫</span>
            {/* Này chỉ là Vd */}
          </span>
        </div>
      </div>
    </div>
  );
}
export default Order;
