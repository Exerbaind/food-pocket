import React from "react";
import { S } from "./styles";

import { tabsData } from "./data";
import { handleCurrentForm } from "../../services/modalForm/modalFromSlice";
import { connect } from "react-redux";

const renderTab = (item, index, handleCurrentFormAction) => {
  const { name, form } = item;

  return (
    <S.Tab key={index} onClick={() => handleCurrentFormAction(form)}>
      <S.TabName>{name}</S.TabName>
    </S.Tab>
  );
};

function TabBar({ currentForm, handleCurrentFormAction }) {
  return (
    <S.TabBarContainer>
      <S.TabBar>
        {tabsData &&
          tabsData.map((item, index) =>
            renderTab(item, index, handleCurrentFormAction)
          )}
        <S.ActiveTab currentForm={currentForm} />
      </S.TabBar>
    </S.TabBarContainer>
  );
}

const mapStateToProps = ({ modalFormService }) => ({
  currentForm: modalFormService.currentForm,
});

const mapDispatchToProps = {
  handleCurrentFormAction: handleCurrentForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(TabBar);