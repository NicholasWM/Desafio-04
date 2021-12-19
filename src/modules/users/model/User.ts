import { v4 as uuidV4 } from "uuid";

class User {
  id: string;
  name: string;
  email: string;
  admin: boolean;
  updated_at: Date;
  created_at: Date;
  constructor() {
    if (!this.id) {
      this.admin = false;
      this.id = uuidV4();
    }
  }
}

export { User };
