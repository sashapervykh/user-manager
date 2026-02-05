import type { User } from "../../../../entities/user/model/types/user";

export interface UserResponseDto {
  user: User;
  token: string;
}
