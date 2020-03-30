const connection = require("./../database/connection");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  try {
    const { username, password } = req.body;

    const [user] = await connection("users")
      .where("username", username)
      .select(["id", "username", "password"]);

    if (!user) {
      return res.send({
        error: "Usuário não encontrado."
      });
    }

    if (!(await bcrypt.compare(password, user.password))) {
      throw new Error();
    }

    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
      expiresIn: 86400
    });

    return res.json({ id: user.id, username: user.username, token });
  } catch (err) {
    return res.status(401).send({
      error: "Usuário ou senha inválidos, tente novamente."
    });
  }
};
