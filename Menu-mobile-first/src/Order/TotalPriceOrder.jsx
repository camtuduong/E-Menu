function TotalPriceOrder() {
  <>
    <>
      <span>Total: </span>
      <div className="menu-item-price menu-item-price--regular">
        <span className="menu-item-price__current">
          {/* số tiền sẽ được cộng dồn dựa trên tiền của Item */}
          <b>998.000</b> <span>₫</span>
          {/* Này chỉ là Vd */}
        </span>
      </div>
    </>
  </>;
}
export default TotalPriceOrder;
