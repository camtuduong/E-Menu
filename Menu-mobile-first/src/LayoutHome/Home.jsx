import headWrapper_Bg from "../assets/wrapperHead.jpg";
import OrderLayout from "../Order/OrderLayout";
import BtnCheckOrder from "../Component/BtnCheckOrder";

import Sign from "../Component/Sign";
import Layout from "./Layout";
function LayoutHome() {
  return (
    <>
      <div className="place">
        <Sign />
        <div className="place-body">
          <div className="place-header wrapper">
            <div
              className="place-header__bg"
              style={{ backgroundImage: `url(${headWrapper_Bg})` }}
            ></div>
          </div>
          <div className="place-content wrapper">
            <div className="place-title">
              <span>Mi Case Restaurant</span>
            </div>
            <div className="place-info">
              <div className="place-info__address">
                <div className="place-info__block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    width="16"
                    height="16"
                    fill="currentColor"
                  >
                    {" "}
                    <g>
                      <circle
                        cx="128"
                        cy="104"
                        r="32"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="16"
                      ></circle>{" "}
                      <path
                        d="M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="16"
                      ></path>
                    </g>
                  </svg>{" "}
                  <span>
                    <a
                      href="http://maps.google.com/?q=19th Floor, Liberty Central Saigon Citypoint Hotel, Ho Chi Minh City, 59 - 61 Pasteur, District 1"
                      target="_blank"
                    >
                      Khu Công nghệ cao Xa Lộ Hà Nội, Hiệp Phú, Thủ Đức, Thành
                      phố Hồ Chí Minh, Việt Nam
                    </a>
                  </span>
                </div>{" "}
                <div className="place-info__block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    width="16"
                    height="16"
                    fill="currentColor"
                  >
                    {" "}
                    <g>
                      <path
                        d="M92.47629,124.81528a84.34782,84.34782,0,0,0,39.05334,38.8759,7.92754,7.92754,0,0,0,7.8287-.59231L164.394,146.40453a8,8,0,0,1,7.58966-.69723l46.837,20.073A7.97345,7.97345,0,0,1,223.619,174.077,48.00882,48.00882,0,0,1,176,216,136,136,0,0,1,40,80,48.00882,48.00882,0,0,1,81.923,32.381a7.97345,7.97345,0,0,1,8.29668,4.79823L110.31019,84.0571a8,8,0,0,1-.65931,7.53226L93.01449,117.00909A7.9287,7.9287,0,0,0,92.47629,124.81528Z"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="16"
                      ></path>
                    </g>
                  </svg>{" "}
                  <span itemprop="telephone">
                    <a href="tel:02838 22 5678">000 000 0000</a>
                  </span>
                </div>{" "}
                <div className="place-info__block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    width="16"
                    height="16"
                    fill="currentColor"
                  >
                    {" "}
                    <g>
                      <path
                        d="M92.91969,166.06177a50.7769,50.7769,0,0,1,70.145,0"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="16"
                      ></path>{" "}
                      <path
                        d="M58.97857,132.12064a98.75415,98.75415,0,0,1,138.02724,0"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="16"
                      ></path>{" "}
                      <path
                        d="M25.06379,98.17952a146.68225,146.68225,0,0,1,205.8568,0"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="16"
                      ></path>{" "}
                      <circle cx="128" cy="200" r="12"></circle>
                    </g>
                  </svg>
                  <span itemprop="wifi">
                    <span>micasacamon</span>
                  </span>
                </div>
              </div>
              <div className="place-info__description">
                <p>
                  All Prices Are Quoted In VND And Subjected To 5% Service
                  Charge &amp; VAT.
                </p>
              </div>
            </div>
            {/* Order thay thế cho cả phần này */}
            <Layout />
            <BtnCheckOrder />
            <div className="place-content__footer">
              <a href="/vi" className="focus nuxt-link-active">
                Mi case.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default LayoutHome;
