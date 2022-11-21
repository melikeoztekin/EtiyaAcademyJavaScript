import { users } from "../data/users.js";
import BaseService from "./BaseService.js";

export default class UserService extends BaseService {
  constructor() {
    super(users);
  }
}
