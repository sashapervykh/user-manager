import Card from "antd/es/card/Card";
import Typography from "antd/es/typography";
import { AuthHint } from "../../shared/ui/AuthHint/AuthHint";
import { ROUTES } from "../../shared/config/routes";
import { AUTH_ACTIONS_TEXT } from "../../shared/const/authActionsText";
import { RegisterForm } from "../../widgets/RegisterForm/RegisterForm";

const { Title } = Typography;

export function RegisterPage() {
  return (
    <>
      <Card className="d-flex m-auto ps-5 pe-5">
        <Title className="mb-3">Join Your Colleagues</Title>
        <RegisterForm />
        <AuthHint
          question="Have registered already?"
          href={ROUTES.LOGIN}
          action={AUTH_ACTIONS_TEXT.SIGN_IN}
        />
      </Card>
    </>
  );
}
