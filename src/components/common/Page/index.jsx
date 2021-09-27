import Nav from "../Nav";
import Aside from "../Aside";
import { Wrapper, Main, Header } from "./styled";

const Page = ({ children, title, meta }) => {
  return (
    <>
      {meta}
      <Wrapper>
        <Nav />

        <Main>
          <Header>{title}</Header>
          {children}
        </Main>

        <Aside />
      </Wrapper>
    </>
  );
};

export default Page;
