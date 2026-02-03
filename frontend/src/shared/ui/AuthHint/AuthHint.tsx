import Typography from "antd/es/typography";
import Link from "antd/es/typography/Link";

const { Text } = Typography;

interface Props {
  question: string;
  href: string;
  action: string;
}

export function AuthHint({ question, href, action }: Props) {
  return (
    <Text className="fs-6 d-flex w-75 justify-content-between m-auto">
      {question}{" "}
      <Link href={href} className="fs-6">
        {action}
      </Link>{" "}
    </Text>
  );
}
