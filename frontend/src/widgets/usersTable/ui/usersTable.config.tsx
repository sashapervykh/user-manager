import type { TableColumnsType } from "antd";
import type { TableUser } from "../../../features/users/model/types/TableUser";

export const COLUMNS: TableColumnsType<TableUser> = [
  {
    title: "Name",
    dataIndex: "name",
    defaultSortOrder: "ascend",
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: "Job",
    dataIndex: "job",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Last Seen",
    dataIndex: "lastLoginAt",
  },
];
