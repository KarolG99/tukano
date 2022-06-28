import React from "react";

import { IErrorMessage } from "../../types";
import { StyledErrorMessage } from "./ErrorMessage.styles";

const ErrorMessage = ({ message }: IErrorMessage) => {
  return <StyledErrorMessage>{message}</StyledErrorMessage>;
};

export default ErrorMessage;
