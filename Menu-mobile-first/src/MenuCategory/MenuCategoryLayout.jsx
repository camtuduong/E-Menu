import BtnBack from "../Component/BtnBack";
import MenuItemList from "./MenuItemList";

function MenuCategoryLayout() {
  return (
    <>
      <div className="menu-category-page">
        <div className="place-nav">
          <div className="place-nav__inner wrapper">
            <BtnBack />
          </div>
        </div>
        <section className="menu-item-list">
          <h2 className="menu-item-list__title h2">
            <span>CHEF RECOMMEND</span>
            {/*Thay doi theo doi tuong duoc bam vao*/}
          </h2>
          {/* tab menu list item sẽ được nhân lên khi thêm data vào db */}
          <MenuItemList />
        </section>
      </div>
    </>
  );
}
export default MenuCategoryLayout;
