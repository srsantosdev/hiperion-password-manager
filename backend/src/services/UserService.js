const connection = require("./../database/connection");
const bcrypt = require("bcrypt");

const UserService = {
  create: async data => {
    const { username, password, phone, email } = data;

    try {
      const objToRequest = {
        username,
        password: await bcrypt.hash(password, 10),
        email,
        phone
      };

      const [user_id] = await connection("users").insert(objToRequest);
      const [user] = await connection("users")
        .where("id", user_id)
        .select(["id", "username", "email", "phone"]);
      return user;
    } catch (err) {
      throw err;
    }
  },
  update: async (data, id) => {
    try {
      if (data.password) {
        await connection("users")
          .where("id", id)
          .update({ ...data, password: await bcrypt.hash(data.password, 10) });
      } else {
        await connection("users")
          .where("id", id)
          .update({ ...data });
      }

      const [user] = await connection("users")
        .where("id", id)
        .select(["id", "username", "email", "phone"]);
      return user;
    } catch (err) {
      console.log("erro", err);
      throw err;
    }
  },
  index: async () => {
    try {
      const users = await connection("users").select([
        "id",
        "username",
        "phone",
        "email"
      ]);
      return users;
    } catch (err) {
      throw err;
    }
  },
  delete: async id => {
    try {
      await connection("users")
        .where("id", id)
        .delete();
      return true;
    } catch (err) {
      throw err;
    }
  }
};

module.exports = UserService;
