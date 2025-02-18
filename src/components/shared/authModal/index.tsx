import { FC } from "react";
import * as S from "./styled";
import { Description, Title } from "./components";
import Content from "./components/content";
import { Form } from "./components/form";
import HasAccount from "./components/hasAccount";
import CompanyAuthLink from "./components/companyAuthLink";

const AuthModal: FC = () => (
  <Content>
    <S.Text>
      <Title />
      <Description />
    </S.Text>
    <Form />
    <HasAccount />
    <CompanyAuthLink />
  </Content>
);

export default AuthModal;
