import React from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

import DishForm from "./components/DishForm";
// import ProductForm from "./components/ProductForm";
// import MenuForm from "./components/MenuForm";

import { S } from "./styles";

const formsList = {
  dish: <DishForm />,
  //   product: <ProductForm />,
  //   menu: <MenuForm />,
};

function Forms({ currentForm }) {
  return <S.Container>{formsList[currentForm]}</S.Container>;
}

const mapStateToProps = ({ formService }) => ({
  currentForm: formService.currentForm,
});

Forms.propTypes = {
  currentForm: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Forms);
