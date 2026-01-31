import { DatabaseError } from "./DatabaseError.js";

export class DuplicationError extends DatabaseError {
  constructor() {
    super("Email already exists", 409);
    this.name = "Duplication Error";
  }
}
