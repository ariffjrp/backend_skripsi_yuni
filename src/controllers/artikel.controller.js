const artikelService = require('../services/artikel.service');

class ArtikelController {
    static async getArtikelByKategori(req, res) {
        try {
            const kategori = req.params.kategori;
            if (!kategori) {
                throw new Error('Kategori tidak boleh kosong');
            }
            const artikel = await artikelService.getArtikelByKategori(kategori);
            console.info(artikel);
            res.status(200).send({ data : artikel });
        } catch (error) {
            console.error('Error fetching articles by category:', error);
            res.status(500).json({ error: error.message });
        }
    }

    static async getArtikelByTanggal(req, res) {
        try {
            const artikel = await artikelService.getArtikelByTanggal();
            res.status(200).send({ data : artikel });
        } catch (error) {
            console.error('Error fetching articles by date:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = ArtikelController;
