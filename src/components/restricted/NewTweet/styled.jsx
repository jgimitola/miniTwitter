import styled from "styled-components";

import { border_gray, primary } from "../../../lib/ui/colors";

export const Container = styled.div`
  display: flex;
  padding: 1rem 0;
  padding-left: 1rem;
  border-top: 1px solid ${border_gray};
  border-bottom: 1px solid ${border_gray};
`;

export const CreateTweetControls = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-left: 0.3rem;
`;

export const TweetArea = styled.textarea`
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  margin-bottom: 0.2rem;
  resize: none;
  height: 4rem;
  outline: none;
  border: none;
  overflow: visible;

  &::focus {
    outline: none;
  }
`;

export const TweetButton = styled.button`
  width: 5rem;
  padding: 0.4rem 1rem;
  align-self: flex-end;

  color: white;
  background-color: ${primary};

  font-size: 15px;
  font-weight: bold;
  border: none;
  border-radius: 16px;
`;
