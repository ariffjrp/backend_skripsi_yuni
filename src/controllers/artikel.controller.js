const artikelService = require('../services/artikel.service');

class ArtikelController {
    static async getArtikelByKategori(req, res) {
        try {
            const kategori = req.params.kategori;
            const page = parseInt(req.query.page) || 1;

            if (!kategori) {
                throw new Error('Kategori tidak boleh kosong');
            }

            const result = await artikelService.getArtikelByKategori(kategori, page);
            console.info(result);
            res.status(200).send(result);
        } catch (error) {
            console.error('Error fetching articles by category:', error);
            res.status(500).json({ error: error.message });
        }
    }

    static async getArtikelByTanggal(req, res) {
        try {
            const page = parseInt(req.query.page) || 1;
            const result = await artikelService.getArtikelByTanggal(page);
            res.status(200).send(result);
        } catch (error) {
            console.error('Error fetching articles by date:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = ArtikelController;
