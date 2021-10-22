import styled from "styled-components";

const PictureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & img {
    border-radius: 100%;
    width: 3rem;
    height: 3rem;
  }
`;

export default PictureContainer;
