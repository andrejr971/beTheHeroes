import connection from '../../database/index';

class SessionController {
  async store(req, res) {
    const { id } = req.body;

    const ong = await connection('ongs')
          .where('id', id)
          .select('name')
          .first();

    if (!ong) {
      return res.status(400).json({ error: 'Ong não encontrada pelo ID' })
    }
    
    return res.json(ong);
  }
}

export default new SessionController();