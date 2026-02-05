import type { ReactNode } from "react";
import {
  USER_CONTROLS_TYPES,
  type UserControlsType,
} from "../lib/userControlsTypes";
import {
  ClearOutlined,
  DeleteOutlined,
  LockOutlined,
  UnlockOutlined,
} from "@ant-design/icons";
import { useUsersList } from "../../../features/users/model/useUsersList";

interface ControlsAction {
  key: UserControlsType;
  children: ReactNode;
  tooltip: string;
  handleClick: () => Promise<void>;
}

export const useControlsActions = () => {
  const { blockUsers, unblockUsers } = useUsersList();
  const controlsActions: ControlsAction[] = [
    {
      key: USER_CONTROLS_TYPES.BLOCK,
      tooltip: "Block selected",
      children: (
        <>
          Block <LockOutlined />
        </>
      ),
      handleClick: blockUsers,
    },
    {
      key: USER_CONTROLS_TYPES.UNBLOCK,
      tooltip: "Unblock selected",
      children: <UnlockOutlined />,
      handleClick: unblockUsers,
    },
    {
      key: USER_CONTROLS_TYPES.DELETE,
      tooltip: "Delete selected",
      children: <DeleteOutlined />,
      handleClick: blockUsers,
    },
    {
      key: USER_CONTROLS_TYPES.DELETE_UNVERIFIED,
      tooltip: "Delete all unverified",
      children: <ClearOutlined />,
      handleClick: blockUsers,
    },
  ];

  return { controlsActions };
};
