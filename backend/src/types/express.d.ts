import { User } from "../models/entities/user.entity.js";

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}
