import React from "react";

import { ISingleRecipeInfo } from "../../types";
import { StyledRecipeInfo } from "./SingleRecipeInfo.styles";

const SingleRecipeInfo = ({ header, content }: ISingleRecipeInfo) => {
  return (
    <StyledRecipeInfo>
      <span>{header}:</span> {content}
    </StyledRecipeInfo>
  );
};

export default SingleRecipeInfo;
