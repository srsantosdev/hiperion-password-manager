const UserService = require("./../services/UserService");

module.exports = {
  async create(req, res) {
    try {
      const user = await UserService.create(req.body);
      return res.json({ user });
    } catch (err) {
      return res.status(400).send({ error: "Erro ao criar o usuário." });
    }
  },

  async update(req, res) {
    try {
      const user = await UserService.update(req.body, req.params.id);
      return res.json({ user });
    } catch (err) {
      return res.status(400).send({ error: "Erro ao atualizar usuário." });
    }
  },

  async index(req, res) {
    try {
      const users = await UserService.index();
      return res.json(users);
    } catch (err) {
      return res.status(400).send({ error: "Erro ao listar os usuários." });
    }
  }
};
