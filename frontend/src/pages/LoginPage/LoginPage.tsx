import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import Card from "antd/es/card/Card";
import Typography from "antd/es/typography";
import Link from "antd/es/typography/Link";

const { Title, Text } = Typography;

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
        <Title className="mb-5">Start Your Journey</Title>
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

          <Text className="fs-6">
            Haven't registered yet?{" "}
            <Link href="register" className="fs-6">
              Sign Up
            </Link>{" "}
          </Text>
        </Form>
      </Card>
    </>
  );
}
