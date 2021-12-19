import { v4 as uuidV4 } from "uuid";

class User {
  id?: string;
  name: string;
  email: string;
  admin?: boolean;
  updated_at?: Date;
  created_at?: Date;
  constructor() {
    this.updated_at = new Date();
    if (!this.id) {
      this.admin = false;
      this.created_at = new Date();
      this.id = uuidV4();
    }
  }
}

export { User };
