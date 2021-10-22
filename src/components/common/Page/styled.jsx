import styled from "styled-components";
import { border_gray } from "../../../lib/ui/colors";

export const Main = styled.div`
  flex: 0.4;
  border-right: 1px solid ${border_gray};
  min-width: fit-content;
  max-width: 600px;
  overflow-y: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Header = styled.h2`
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 15px 20px;
  background-color: white;
  margin-top: 0;
  margin-bottom: 0;

  border-bottom: 1px solid ${border_gray};

  & > h2 {
    font-size: 20px;
    font-weight: 800;
  }
`;
