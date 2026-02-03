import Link from "antd/es/typography/Link";

export function HeaderLink({
  text,
  address,
}: {
  text: string;
  address: string;
}) {
  return (
    <Link href={address} className="fs-5">
      {text}
    </Link>
  );
}
