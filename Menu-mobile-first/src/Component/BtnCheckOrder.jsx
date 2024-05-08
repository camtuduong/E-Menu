import { Link } from "react-router-dom";

function BtnCheckOrder() {
  return (
    <Link to="order" className="place-order focus">
      Show my order
    </Link>
  );
}
export default BtnCheckOrder;
