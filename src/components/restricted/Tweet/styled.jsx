import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
  min-height: 100px;
`;

export const PictureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & img {
    border-radius: 100%;
    width: 3rem;
    height: 3rem;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 3px;
  .header {
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0;
    .user {
      font-weight: bold;
      margin-left: 5px;
    }

    .date {
      color: border_gray;
      margin-left: 5px;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
  }
`;
