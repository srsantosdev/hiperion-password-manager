const connection = require("./../database/connection");

module.exports = {
  create: async data => {
    try {
      const [password_id] = await connection("passwords").insert({ ...data });

      const [password] = await connection("passwords")
        .where("id", password_id)
        .select("*");
      return password;
    } catch (err) {
      throw err;
    }
  },
  index: async () => {
    try {
      const passwords = await connection("passwords").select("*");
      return passwords;
    } catch (err) {
      throw err;
    }
  },
  delete: async (id, user_id) => {
    try {
      const password_user_id = await connection("passwords")
        .where("id", id)
        .select("user_id");

      if (password_user_id !== user_id) {
        return false;
      }

      await connection("passwords")
        .where("id", id)
        .delete();
      return true;
    } catch (err) {
      throw err;
    }
  }
};
