function OrderItem() {
  return (
    <div className="order-item _in-order order-item--regular">
      <div className="order-item-header">
        <h3 className="order-item-title">
          PICK 3 FROM 5 WITH A TOWER OF BEER COCKTAIL
        </h3>
      </div>
      <div className="order-item-footer">
        <div className="order-item-price">
          <div className="menu-item-price menu-item-price--small">
            <span className="menu-item-price__current">
              <b>799.000</b> <span>₫</span>
            </span>
          </div>
        </div>
        <div className="order-item-count">
          <div className="order-action order-action--small order-action--value">
            <button className="order-action-button _remove ripple focus">
              –
            </button>
            <span className="order-action-count">1</span>
            <button className="order-action-button _add ripple focus">+</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OrderItem;
