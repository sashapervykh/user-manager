import { Typography } from "antd";
import { useLocation } from "react-router-dom";

const { Text } = Typography;

export function NotFoundPage() {
  const { pathname } = useLocation();

  return (
    <Text className="d-flex fs-5 justify-content-center text-center mt-5">
      Page {pathname} does not exist on our site. Check your input please and
      try again.
    </Text>
  );
}
