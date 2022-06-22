import React from "react";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setBarcodeData } from "../../services/barcode/barcodeSlice";

const BarcodeScannerComponent = dynamic(
  () => import("react-qr-barcode-scanner"),
  { ssr: false }
);

const handleBarcode = (
  err,
  result,
  setBarcodeDataAction,
  handleBarcodeAction
) => {
  if (result) {
    setBarcodeDataAction(result);
    return handleBarcodeAction();
  }

  return null;
  // TODO: валидация ошибки, если код не считался
};

function BarcodeReader({ setBarcodeDataAction, handleBarcodeAction }) {
  return (
    <BarcodeScannerComponent
      width="100%"
      height={200}
      onUpdate={(err, result) =>
        handleBarcode(err, result, setBarcodeDataAction, handleBarcodeAction)
      }
    />
  );
}

const mapStateToProps = ({ barcodeService }) => ({
  barcodeData: barcodeService.barcode,
});

const mapDispatchToProps = {
  setBarcodeDataAction: setBarcodeData,
  handleBarcodeAction: handleBarcode,
};

BarcodeReader.propTypes = {
  setBarcodeDataAction: PropTypes.func.isRequired,
  handleBarcodeAction: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BarcodeReader);
