import { useEffect } from "react";

import { Main, Header } from "./styled";

const Page = ({ children, title, meta, setMainTarget, ...rest }) => {
  useEffect(() => {
    setMainTarget("restricted");
  }, [setMainTarget]);

  return (
    <>
      {meta}

      <Main>
        <Header>{title}</Header>
        {children}
      </Main>
    </>
  );
};

export default Page;
