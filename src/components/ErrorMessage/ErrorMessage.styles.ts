import styled from "styled-components";

export const StyledErrorMessage = styled.p`
  color: red;
  font-size: 1rem;
  margin: 5px 0;
  padding: 5px 10px;
  border-radius: 20px;
  text-align: center;
  width: fit-content;
  align-self: center;
  background-color: ${({ theme }) => theme.colors.error};
`;
