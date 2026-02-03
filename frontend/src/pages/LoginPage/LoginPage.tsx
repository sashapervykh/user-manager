import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import Card from "antd/es/card/Card";
import Typography from "antd/es/typography";
import { AuthHint } from "../../shared/ui/AuthHint/AuthHint";
import { ROUTES } from "../../shared/config/routes";
import { AUTH_ACTIONS_TEXT } from "../../shared/const/authActionsText";

const { Title } = Typography;

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export function LoginPage() {
  return (
    <>
      <Card className="d-flex m-auto p-5">
        <Title className="mb-3">Start Your Journey</Title>
        <Form
          initialValues={{ remember: false }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="fs-5"
          layout="vertical"
        >
          <Form.Item<FieldType>
            label="Email:"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password:"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password size="large" />
          </Form.Item>

          <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            label={null}
          >
            <Checkbox className="fs-5">Remember me</Checkbox>
          </Form.Item>

          <Form.Item label={null}>
            <Button
              className="fs-5 w-100"
              type="primary"
              htmlType="submit"
              size="large"
            >
              Sign In
            </Button>
          </Form.Item>
          <AuthHint
            question="Haven't registered yet?"
            href={ROUTES.REGISTER}
            action={AUTH_ACTIONS_TEXT.SIGN_UP}
          />
        </Form>
      </Card>
    </>
  );
}
