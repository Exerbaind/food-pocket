import React, { useState } from "react";
import dynamic from "next/dynamic";

const BarcodeScannerComponent = dynamic(
  () => import("react-qr-barcode-scanner"),
  { ssr: false }
);

function BarcodeReader() {
  const [data, setData] = useState("Not Found");

  return (
    <>
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (result) setData(result.text);
        }}
      />
    </>
  );
}

export default BarcodeReader;
