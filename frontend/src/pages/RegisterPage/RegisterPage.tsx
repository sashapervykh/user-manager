import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import Card from "antd/es/card/Card";
import Typography from "antd/es/typography";
import { AuthHint } from "../../shared/ui/AuthHint/AuthHint";
import { ROUTES } from "../../shared/config/routes";
import { AUTH_ACTIONS_TEXT } from "../../shared/const/authActionsText";

const { Title } = Typography;

type FieldType = {
  firstName?: string;
  lastName?: string;
  job?: string;
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

export function RegisterPage() {
  return (
    <>
      <Card className="d-flex m-auto ps-5 pe-5">
        <Title className="mb-3">Join Your Colleagues</Title>
        <Form
          initialValues={{ remember: false }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="fs-5"
          layout="vertical"
        >
          <Form.Item<FieldType>
            label="First name:"
            name="firstName"
            rules={[
              { required: true, message: "Please input your first name!" },
            ]}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item<FieldType>
            label="Last name:"
            name="lastName"
            rules={[
              { required: true, message: "Please input your second name!" },
            ]}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item<FieldType>
            label="Job:"
            name="job"
            rules={[{ message: "Please input your job!" }]}
          >
            <Input size="large" />
          </Form.Item>
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
            label="Confrim password:"
            name="password"
            rules={[
              { required: true, message: "Please confirm your password!" },
            ]}
          >
            <Input.Password size="large" />
          </Form.Item>
          <Form.Item label={null}>
            <Button
              className="fs-5 w-100"
              type="primary"
              htmlType="submit"
              size="large"
            >
              Sign Up
            </Button>
          </Form.Item>
          <AuthHint
            question="Have registered already?"
            href={ROUTES.LOGIN}
            action={AUTH_ACTIONS_TEXT.SIGN_IN}
          />
        </Form>
      </Card>
    </>
  );
}
