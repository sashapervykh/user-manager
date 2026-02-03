import Link from "antd/es/typography/Link";

interface Props {
  text: string;
  address: string;
  className?: string;
}

export function AddressLink({ text, address, className = "fs-5" }: Props) {
  return (
    <Link href={address} className={className}>
      {text}
    </Link>
  );
}
