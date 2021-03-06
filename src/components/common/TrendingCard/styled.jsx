import styled from "styled-components";
import { tweetcard_gray, border_gray } from "../../../lib/ui/colors";

export const Container = styled.div`
  display: flex;
  flex-flow: wrap row;

  padding-top: 0.8rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 0;
  min-height: 80px;

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
