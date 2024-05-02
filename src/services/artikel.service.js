const db = require('../models');
const { Artikel } = db;
const { Op } = require('sequelize');

class ArtikelService {
    async getArtikelByKategori(kategori) {
        try {
            const artikel = await Artikel.findAll({ where: { kategori } });
            console.info(artikel);
            return artikel;
        } catch (err) {
            console.error(err);
            throw new Error('Internal error: ' + err.message);
        }
    }

    async getArtikelByTanggal() {
        try {
            const artikel = await Artikel.findAll({
                order: [['tanggal', 'DESC']]
            });
            return artikel;
        } catch (err) {
            console.error(err);
            throw new Error('Failed to fetch articles by date');
        }
    } 
}

module.exports = new ArtikelService();
