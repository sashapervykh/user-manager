import Link from "antd/es/typography/Link";
import { ROUTES } from "../../../config/routes";

export function Logo() {
  return (
    <Link href={ROUTES.LOGIN} className="text-primary fs-1 fw-bold">
      THE APP
    </Link>
  );
}
