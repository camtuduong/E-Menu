import headWrapper_Bg from "../assets/wrapperHead.jpg";
import { Link } from "react-router-dom";
function CafeCategoryList() {
  return (
    <>
      <div className="category-list__item">
        <div className="category-item">
          <Link
            to="menu\test"
            style={{ backgroundImage: `url(${headWrapper_Bg})` }}
            className="category-item__link focus"
          >
            <p className="h2">.</p>
          </Link>
        </div>
      </div>
      <div className="category-list__item">
        <div className="category-item">
          <Link
            to="menu\test"
            style={{ backgroundImage: `url(${headWrapper_Bg})` }}
            className="category-item__link focus"
          >
            <p className="h2">.</p>
          </Link>
        </div>
      </div>
    </>
  );
}
export default CafeCategoryList;
