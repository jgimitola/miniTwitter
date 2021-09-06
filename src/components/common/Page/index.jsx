import Nav from "../Nav";
import Aside from "../Aside";
import { Wrapper, Main, Header } from "./styled";

const Page = ({ children, title }) => {
  return (
    <>
      {children}
      <Wrapper>
        <Nav />

        <Main>
          <Header>{title}</Header>
        </Main>

        <Aside />
      </Wrapper>
    </>
  );
};

export default Page;
