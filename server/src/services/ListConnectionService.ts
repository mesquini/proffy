import db from "../database/connection";

class ListConnectionService {
  async run() {
    const totalConnections = await db("connections").count("* as total");

    const { total } = totalConnections[0];

    return total;
  }
}

export default new ListConnectionService();
