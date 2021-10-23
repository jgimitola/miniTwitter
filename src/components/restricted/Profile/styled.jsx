import styled from "styled-components";

import { tweetcard_gray } from "../../../lib/ui/colors";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Picture = styled.img`
  width: 8.3rem;
  height: auto;
  margin-top: 4rem;
  border-radius: 50%;
`;

export const Name = styled.h1`
  margin: 0;
  margin-top: 1rem;
  font-size: 1.5rem;
`;

export const Username = styled.h2`
  margin: 0;
  color: ${tweetcard_gray};
  font-size: 1em;
`;
