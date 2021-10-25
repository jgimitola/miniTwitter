import styled from "styled-components";
import { tweetcard_gray, border_gray, primary } from "../../../lib/ui/colors";

export const Container = styled.div`
  display: flex;
  flex-flow: wrap row;

  padding-top: 0.8rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 0;
  min-height: 100px;

  border-bottom: 1px solid ${border_gray};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 3px;
`;

export const Name = styled.span`
  font-weight: bold;
  color: black;
`;

export const UserName = styled.span`
  margin: 0 0.3rem 0 0.4rem;
`;

export const Date = styled.span`
  margin-left: 0.3rem;
`;

export const Header = styled.p`
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0 0 0.5rem 0;

  color: ${tweetcard_gray};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  max-width: 50ch;
  line-height: 22px;
  word-wrap: break-word;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 4rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  svg {
    margin: 0 auto;
    transform: scale(2.5);
  }

  & button {
    display: flex;
    flex-direction: row;
  }
`;

export const Button = styled.button`
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  padding: 8px;

  &:hover {
    color: ${primary};
  }

  svg {
    width: 6px;
    height: 6px;
    margin-right: 0.5rem;
    padding-top: 2px;
  }
  &:hover svg {
    fill: ${primary};
  }
`;
