import { useState } from "react";
import CafeCategoryList from "../CafeList/CafeCategoryList";
import MenuCategoryLayout from "../MenuCategory/MenuCategoryLayout";
import MenuListItem from "./MenuListItem";
import { IoIosSearch } from "react-icons/io";
function MenuChoose() {
  const [selectedMenu, setSelectedMenu] = useState("promotion");
  function handleMenuSelectChange(index) {
    setSelectedMenu(index);
  }

  return (
    <>
      <div className="menu-list right-fade">
        <div className="base-scrollbar">
          <MenuListItem
            onSelectChange={handleMenuSelectChange}
            // Nhận Id từ MenuList
          />
        </div>
      </div>
      {/* Các db về body của menu home */}
      <div className="cafe-list">
        <div className="cafe-list-body">
          <div class="menu-item-search">
            <div class="menu-item-search-form _open" search-value="">
              <form action="" class="menu-item-search-form-field">
                <div
                  class="base-form-input base-form-input--regular"
                  type="search"
                  placeholder="Search"
                >
                  <input
                    type="search"
                    placeholder="Search"
                    class="base-form-input-input"
                  />
                </div>
                <button
                  class="round-button focus _expand-clickable ripple menu-item-search-form-button"
                  aria-label="Search"
                >
                  <IoIosSearch />
                </button>
              </form>
            </div>
            <div className="category-list">
              {selectedMenu === "promotion" && <CafeCategoryList />}
              {selectedMenu === "food" && <CafeCategoryList />}
              {selectedMenu === "drinks" && <CafeCategoryList />}

              {/* Btn hiện lên khi có món đang được tích chọn */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuChoose;
