import React, { useEffect, useState } from "react";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import Title from "antd/es/typography/Title";
import { useUser } from "../../entities/user/model/useUser";
import { useUsersList } from "../../features/users/model/useUsersList";
import type { TableUser } from "../../features/users/model/types/TableUser";
import { UsersControls } from "../../widgets/UserControls/ui/UserControls";

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
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Last Seen",
    dataIndex: "lastLoginAt",
  },
];

export function UsersPage() {
  const { user } = useUser();
  const { users, getUsers, blockUsers } = useUsersList();
  const [chosenUsers, setChosenUsers] = useState<React.Key[]>([]);

  const rowSelection: TableProps<TableUser>["rowSelection"] = {
    onChange: (selectedRowKeys: React.Key[]) => {
      setChosenUsers(selectedRowKeys);
    },
  };

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
        <UsersControls />
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
