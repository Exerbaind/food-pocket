import React, { useEffect } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { S } from "./styles";

import { handleHideMessage } from "../../services/message/messageSlice";

function MessagePopup({ isActive, text, handleHideMessageAction }) {
  useEffect(() => {
    setTimeout(() => {
      handleHideMessageAction();
    }, 3000);
  }, [!!isActive]);

  return (
    <S.MessageContainer active={isActive}>
      <AiOutlineCheckCircle color="#FFFFFF" />
      <S.MessageText>{text}</S.MessageText>
    </S.MessageContainer>
  );
}

const mapStateToProps = ({ messageService }) => ({
  isActive: messageService.isActive,
  text: messageService.text,
});

const mapDispatchToProps = {
  handleHideMessageAction: handleHideMessage,
};

MessagePopup.propTypes = {
  isActive: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  handleHideMessageAction: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagePopup);