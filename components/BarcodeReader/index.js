import React, { useState } from "react";
import dynamic from "next/dynamic";

const BarcodeScannerComponent = dynamic(
  () => import("react-qr-barcode-scanner"),
  { ssr: false }
);

function BarcodeReader() {
  const [data, setData] = useState("Not Found");
  const [torchOn, setTorchOn] = useState(false);

  return (
    <>
      <BarcodeScannerComponent
        width={500}
        height={500}
        torch={torchOn}
        onUpdate={(err, result) => {
          if (result) setData(result.text);
        }}
      />
      <p>{data}</p>
      <button onClick={() => setTorchOn(!torchOn)}>
        Switch Torch {torchOn ? "Off" : "On"}
      </button>
    </>
  );
}

export default BarcodeReader;
