import styled, { keyframes } from "styled-components";
import { pulse } from "react-animations";

export const Animated = styled.div`
  animation: 2s ${keyframes`${pulse}`} infinite;
`;
