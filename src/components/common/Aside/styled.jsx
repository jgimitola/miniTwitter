import styled from "styled-components";

export const RightSidebar = styled.div`
  flex: 0.3;
  @media (max-width: 1024px) {
    & {
      display: none;
    }
  }
`;

export const TrendContainer = styled.div`
  margin-top: 15px;
  margin-left: 20px;
  padding: 20px;
  background-color: #f5f8fa;
  border-radius: 20px;

  & > h2 {
    font-size: 18px;
    font-weight: 800;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 20px;
  margin-top: 10px;
  margin-left: 20px;
  background-color: #e7ecf0;

  & > input {
    border: none;
    margin-left: 1rem;
    height: 2rem;
    background-color: transparent;
    border-radius: 50px;
  }

  & > input:focus {
    outline: none;
  }
`;
