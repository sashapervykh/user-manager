import React from "react";
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

interface DataType {
  key: React.Key;
  name: string;
  job: string;
  email: string;
  lastSeenAt: string;
}

const columns: TableColumnsType<DataType> = [
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

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    job: "developer",
    email: "aa@aa.aa",
    lastSeenAt: new Date().toLocaleString(),
  },
  {
    key: "2",
    name: "Jim Green",
    job: "doctor",
    email: "bb@bb.bb",
    lastSeenAt: new Date().toLocaleString(),
  },
  {
    key: "3",
    name: "Kat Fane",
    job: "policemen",
    email: "cc@cc.cc",
    lastSeenAt: new Date().toLocaleString(),
  },
  {
    key: "4",
    name: "Karen Miles",
    job: "lawyer",
    email: "dd@dd.dd",
    lastSeenAt: new Date().toLocaleString(),
  },
];

const rowSelection: TableProps<DataType>["rowSelection"] = {
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
  return (
    <>
      <div className="d-flex flex-column w-100 h-100 justify-content-center">
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
          <Table<DataType>
            rowSelection={{ type: "checkbox", ...rowSelection }}
            columns={columns}
            dataSource={data}
            size="large"
          />
        </div>
      </div>
    </>
  );
}
