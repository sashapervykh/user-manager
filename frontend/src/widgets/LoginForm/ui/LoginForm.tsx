import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { useAuth } from "../../../features/auth/models/hooks/useAuth";

type FieldType = {
  email: string;
  password: string;
};

export function LoginForm() {
  const { login, isLoading } = useAuth();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    login(values);
  };
  return (
    <>
      {" "}
      <Form
        initialValues={{ remember: false }}
        onFinish={onFinish}
        autoComplete="off"
        className="fs-5"
        layout="vertical"
        validateTrigger={["onSubmit"]}
      >
        <Form.Item<FieldType>
          label="Email:"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Invalid email format!" },
          ]}
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password:"
          name="password"
          rules={[
            {
              required: true,
              whitespace: true,
              message: "Please input your password!",
            },
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
            disabled={isLoading}
          >
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
