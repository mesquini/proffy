import db from "../database/connection";

class CreateConnectionService {
  async run(user_id: number) {
    await db("connections").insert({
      user_id,
    });
  }
}

export default new CreateConnectionService();
