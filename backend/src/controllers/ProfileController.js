const ProfileController = require("./../services/ProfileService");

module.exports = {
  async index(req, res) {
    try {
      const { authorization } = req.headers;

      if (authorization) {
        const passwords = await ProfileController.index(req.params.id);
        return res.json(passwords);
      }
    } catch (err) {
      return res.status(400).send({
        error: "Erro ao listar as senhas do usuário."
      });
    }
  }
};
