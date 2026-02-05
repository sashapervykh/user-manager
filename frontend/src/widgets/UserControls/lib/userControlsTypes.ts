export const USER_CONTROLS_TYPES = {
  BLOCK: "BLOCK",
  UNBLOCK: "UNBLOCK",
  DELETE: "DELETE",
  DELETE_UNVERIFIED: "DELETE_UNVERIFIED",
} as const;

export type UserControlsType =
  (typeof USER_CONTROLS_TYPES)[keyof typeof USER_CONTROLS_TYPES];
