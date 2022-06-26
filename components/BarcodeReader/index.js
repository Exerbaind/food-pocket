import React from "react";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  setBarcodeData,
  handleBarcode,
} from "../../services/barcode/barcodeSlice";
import { S } from "./styles";

const BarcodeScannerComponent = dynamic(
  () => import("react-qr-barcode-scanner"),
  { ssr: false }
);

const handleUpdate = (
  err,
  result,
  setBarcodeDataAction,
  handleBarcodeAction
) => {
  if (result) {
    const { text } = result;
    const barcodeNumber = +text;
    setBarcodeDataAction(barcodeNumber);
    return handleBarcodeAction();
  }

  return null;
  // TODO: валидация ошибки, если код не считался
};

function BarcodeReader({ setBarcodeDataAction, handleBarcodeAction }) {
  return (
    <S.Container>
      <BarcodeScannerComponent
        width="100%"
        height="100%"
        onUpdate={(err, result) =>
          handleUpdate(err, result, setBarcodeDataAction, handleBarcodeAction)
        }
      />
    </S.Container>
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
