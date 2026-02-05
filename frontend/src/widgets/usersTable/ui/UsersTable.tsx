import { Table, type TableProps } from "antd";
import type { TableUser } from "../../../features/users/model/types/TableUser";
import { useUsersList } from "../../../features/users/model/useUsersList";
import { useEffect } from "react";
import { COLUMNS } from "./usersTable.config";

export function UsersTable() {
  const { users, setSelectedUsers, getUsers } = useUsersList();
  const rowSelection: TableProps<TableUser>["rowSelection"] = {
    onChange: (selectedRowKeys: React.Key[]) => {
      setSelectedUsers(selectedRowKeys);
    },
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div>
        <Table<TableUser>
          rowSelection={{ type: "checkbox", ...rowSelection }}
          columns={COLUMNS}
          dataSource={users}
          size="large"
        />
      </div>
    </>
  );
}
