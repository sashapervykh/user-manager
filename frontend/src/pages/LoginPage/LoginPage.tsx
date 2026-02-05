import Card from "antd/es/card/Card";
import Typography from "antd/es/typography";
import { AuthHint } from "../../shared/ui/AuthHint/AuthHint";
import { ROUTES } from "../../shared/config/routes";
import { AUTH_ACTIONS_TEXT } from "../../shared/const/authActionsText";
import { LoginForm } from "../../widgets/LoginForm/ui/LoginForm";

const { Title } = Typography;

export function LoginPage() {
  return (
    <>
      <Card className="d-flex m-auto p-5">
        <Title className="mb-3">Start Your Journey</Title>
        <LoginForm />
        <AuthHint
          question="Haven't registered yet?"
          href={ROUTES.REGISTER}
          action={AUTH_ACTIONS_TEXT.SIGN_UP}
        />
      </Card>
    </>
  );
}
