import { IoIosSearch } from "react-icons/io";
import CafeCategoryList from "./CafeCategoryList";
function CafeListLayout() {
  return (
    <>
      <div className="list">
        <div className="body-list">
          <div className="menu-item-search">
            <div search-value="" className="menu-item-search-form _open">
              <form action="" className="menu-item-search-form-field">
                <div
                  type="search"
                  placeholder="Search"
                  className="base-form-input base-form-input--regular"
                >
                  <input
                    type="text"
                    // value=""
                    placeholder="Search"
                    className="base-form-input-input"
                  />
                </div>
                <button
                  aria-label="Search"
                  className="round-button focus _expand-clickable ripple menu-item-search-form-button"
                >
                  <IoIosSearch />
                </button>
              </form>
            </div>
          </div>
          <div className="category-list">
            {/* tab được tạo mới mỗi khi thêm vào db 
              tab 1*/}
            <CafeCategoryList />

            {/* tab 2 */}
          </div>
        </div>
      </div>
    </>
  );
}
export default CafeListLayout;
