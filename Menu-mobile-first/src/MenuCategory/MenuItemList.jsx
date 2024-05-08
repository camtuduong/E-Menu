import headWrapper_Bg from "../assets/wrapperHead.jpg";

function MenuItemList() {
  return (
    <>
      <div className="menu-item-list__item">
        <article className="menu-item">
          <div className="base-lazy menu-item-image _loaded">
            <div className="base-lazy__loader">
              <img src={headWrapper_Bg} alt="" />
            </div>
          </div>
          <div className="menu-item-content">
            {/* body tab */}
            <div className="menu-item-body">
              <div className="menu-item-header">
                <div class="menu-item-title">
                  <span>DEEP FRIED EGG FISH</span>
                </div>
              </div>
              <div className="menu-item-description base-text-collapse">
                <p>Deep fried Egg Fishes served with Tamarind Sauce.</p>
                <p>Cá Trứng chiên giòn Xốt Me.</p>
              </div>
            </div>
            {/* footer */}
            <div className="menu-item-footer">
              <div>
                <div className="menu-item-price menu-item-price--regular">
                  <span className="menu-item-price__current">
                    <b>199.000</b> <span>₫</span>
                  </span>
                </div>
              </div>
              <div className="order-action order-action--regular">
                <button className="order-action-button _remove ripple focus">
                  -
                </button>
                <span className="order-action-count">0</span>
                <button className="order-action-button _add ripple focus">
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
export default MenuItemList;
