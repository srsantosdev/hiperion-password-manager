const PasswordService = require("./../services/PasswordService");

module.exports = {
  async create(req, res) {
    try {
      const { authorization } = req.headers;

      if (authorization) {
        const password = await PasswordService.create({
          ...req.body
        });
        return res.json({ password });
      }
      return res
        .status(401)
        .send({ error: "Esta operação necessita de autenticação." });
    } catch (err) {
      return res.status(400).send({
        error: "Erro ao criar a senha."
      });
    }
  },

  async index(req, res) {
    try {
      const passwords = await PasswordService.index();
      return res.json(passwords);
    } catch (err) {
      return res.status(400).send({
        error: "Erro ao listar as senhas."
      });
    }
  },

  async delete(req, res) {
    try {
      const { authorization, user_id } = req.headers;

      if (authorization) {
        if (await PasswordService.delete(req.params.id, user_id)) {
          return res.status(204);
        } else {
          res.status(401).send({
            error: "Sem autorização para deletar esta senha."
          });
        }
      }
      return res
        .status(401)
        .send({ error: "Esta operação necessita de autenticação." });
    } catch (err) {
      return res.status(400).send({
        error: "Erro ao deletar senha."
      });
    }
  }
};
