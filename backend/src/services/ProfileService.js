const connection = require("./../database/connection");

module.exports = {
  index: async user_id => {
    try {
      const passwords = await connection("passwords")
        .where("user_id", user_id)
        .select("*");

      return passwords;
    } catch (err) {
      throw err;
    }
  }
};
