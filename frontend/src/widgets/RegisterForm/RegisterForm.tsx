import { Button, Form, Input } from "antd";
import type { FormProps } from "antd";
import { comparePasswords } from "./models/comparePasswords";
import { useAuth } from "../../features/auth/models/hooks/useAuth";

type FieldType = {
  firstName: string;
  lastName: string;
  job?: string;
  email: string;
  password: string;
  confirmation: string;
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export function RegisterForm() {
  const { isLoading, register } = useAuth();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    await register(values);
  };

  return (
    <>
      <Form
        initialValues={{ remember: false }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="fs-5"
        layout="vertical"
        validateTrigger={["onSubmit"]}
      >
        <Form.Item<FieldType>
          label="First name:"
          name="firstName"
          rules={[{ required: true, message: "Please input your first name!" }]}
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
        <Form.Item<FieldType> label="Job:" name="job">
          <Input size="large" />
        </Form.Item>
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
            { required: true, message: "Please input your password!" },
            comparePasswords("confirmation"),
          ]}
        >
          <Input.Password size="large" />
        </Form.Item>
        <Form.Item<FieldType>
          label="Confirm password:"
          name="confirmation"
          rules={[
            { required: true, message: "Please confirm your password!" },
            comparePasswords("password"),
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
            disabled={isLoading ? true : false}
          >
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
