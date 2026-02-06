import Title from "antd/es/typography/Title";
import { useUser } from "../../entities/user/model/useUser";
import { UsersControls } from "../../widgets/UserControls/ui/UserControls";
import { UsersTable } from "../../widgets/UsersTable/ui/UsersTable";

export function UsersPage() {
  const { user } = useUser();
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
        <UsersTable />
      </div>
    </>
  );
}
