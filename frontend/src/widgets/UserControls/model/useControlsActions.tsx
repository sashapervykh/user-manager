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
  type: UserControlsType;
  buttonContent: ReactNode;
  tooltip: string;
  handleClick: () => Promise<void>;
}

export const useControlsActions = () => {
  const { blockUsers, unblockUsers } = useUsersList();
  const controlsActions: ControlsAction[] = [
    {
      type: USER_CONTROLS_TYPES.BLOCK,
      tooltip: "Block selected",
      buttonContent: (
        <>
          Block <LockOutlined />
        </>
      ),
      handleClick: blockUsers,
    },
    {
      type: USER_CONTROLS_TYPES.UNBLOCK,
      tooltip: "Unblock selected",
      buttonContent: <UnlockOutlined />,
      handleClick: unblockUsers,
    },
    {
      type: USER_CONTROLS_TYPES.DELETE,
      tooltip: "Delete selected",
      buttonContent: <DeleteOutlined />,
      handleClick: blockUsers,
    },
    {
      type: USER_CONTROLS_TYPES.DELETE_UNVERIFIED,
      tooltip: "Delete all unverified",
      buttonContent: <ClearOutlined />,
      handleClick: blockUsers,
    },
  ];

  return { controlsActions };
};
