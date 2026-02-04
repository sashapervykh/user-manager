import React, { useEffect } from "react";
import { Button, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import Title from "antd/es/typography/Title";
import {
  ClearOutlined,
  DeleteOutlined,
  LockOutlined,
  UnlockOutlined,
} from "@ant-design/icons";
import { useUser } from "../../entities/user/model/useUser";
import { useUsersList } from "../../features/users/model/useUsersList";
import type { TableUser } from "../../features/users/model/types/TableUser";

const columns: TableColumnsType<TableUser> = [
  {
    title: "Name",
    dataIndex: "name",
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
    title: "Last Seen",
    dataIndex: "lastSeenAt",
  },
];

const rowSelection: TableProps<TableUser>["rowSelection"] = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows,
    );
  },
};

export function UsersPage() {
  const { user } = useUser();
  const { users, getUsers } = useUsersList();

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="d-flex flex-column w-100 h-100">
        <Title className="text-center mt-0 mb-2">
          Hello, {user?.firstName}!
        </Title>
        <Title className="text-center mt-0 mb-4" level={2}>
          Let's manage some users!
        </Title>
        <div className="d-flex gap-1 h-3rem ms-auto me-0 mb-3">
          <Button className="h-100" type="primary" size="large">
            Block <LockOutlined />
          </Button>
          <Button className="h-100" type="primary" size="large">
            <UnlockOutlined />
          </Button>
          <Button className="h-100" type="primary" size="large">
            <DeleteOutlined />
          </Button>
          <Button className="h-100" type="primary" size="large">
            <ClearOutlined />
          </Button>
        </div>
        <div>
          <Table<TableUser>
            rowSelection={{ type: "checkbox", ...rowSelection }}
            columns={columns}
            dataSource={users}
            size="large"
          />
        </div>
      </div>
    </>
  );
}
