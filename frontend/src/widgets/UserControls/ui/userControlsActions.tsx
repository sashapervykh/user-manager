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

interface UserControlsAction {
  type: UserControlsType;
  buttonContent: ReactNode;
  tooltip: string;
}

export const UserControlsActions: UserControlsAction[] = [
  {
    type: USER_CONTROLS_TYPES.BLOCK,
    tooltip: "Block selected",
    buttonContent: (
      <>
        Block <LockOutlined />
      </>
    ),
  },
  {
    type: USER_CONTROLS_TYPES.DELETE_UNVERIFIED,
    tooltip: "Unblock selected",
    buttonContent: <UnlockOutlined />,
  },
  {
    type: USER_CONTROLS_TYPES.DELETE,
    tooltip: "Delete selected",
    buttonContent: <DeleteOutlined />,
  },
  {
    type: USER_CONTROLS_TYPES.DELETE_UNVERIFIED,
    tooltip: "Delete all unverified",
    buttonContent: <ClearOutlined />,
  },
];
