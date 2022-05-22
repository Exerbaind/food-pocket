import React, { useState, useEffect } from "react";

import { isMobile } from "react-device-detect";

export const checkDevice = () => {
  const [mobile, setMobile] = useState();

  useEffect(() => {
    setMobile(isMobile);
  }, []);

  return {
    isMobile: mobile,
  };
};
