import { useState, useEffect } from "react";
import { QrReader } from "react-qr-reader";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string"; // Thêm dòng này

function ScanQrCode() {
  const [scanResult, setScanResult] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = queryString.parse(location.search);
    const qrCode = queryParams.qr;

    if (qrCode) {
      setScanResult(qrCode);
      // Xử lý logic với qrCode tại đây
      // Ví dụ: Hiển thị qrCode trên màn hình và xóa tham số qr trên URL
      console.log("Scanned QR Code:", qrCode);
      // Hiển thị qrCode trên màn hình
      // Ví dụ: <p>QR Code: {qrCode}</p>

      // Xóa tham số qr trên URL
      const newSearch = queryString.stringify({
        ...queryParams,
        qr: undefined,
      });
      navigate({ search: newSearch });
    }
  }, [location.search]); // Thêm dependencies vào đây

  const handleScan = (data) => {
    if (data) {
      setScanResult(data);
      navigate(`?qr=${encodeURIComponent(data)}`);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  return (
    <div>
      <h1>Scan QR Code</h1>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%" }}
      />
      <p>{scanResult}</p>
    </div>
  );
}

export default ScanQrCode;
