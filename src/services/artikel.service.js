const db = require('../models');
const { Artikel } = db;
const { Op } = require('sequelize');

class ArtikelService {
    async getArtikelByKategori(kategori, page = 1, limit = 15) {
        const offset = (page - 1) * limit;
        try {
            const { count, rows } = await Artikel.findAndCountAll({
                where: { kategori },
                limit,
                offset
            });
            return {
                total: count,
                pages: Math.ceil(count / limit),
                currentPage: page,
                data: rows
            };
        } catch (err) {
            console.error(err);
            throw new Error('Internal error: ' + err.message);
        }
    }

    async getArtikelByTanggal(page = 1, limit = 15) {
        const offset = (page - 1) * limit;
        try {
            const { count, rows } = await Artikel.findAndCountAll({
                order: [['tanggal', 'DESC']],
                limit,
                offset
            });
            return {
                total: count,
                pages: Math.ceil(count / limit),
                data: rows
            };
        } catch (err) {
            console.error(err);
            throw new Error('Failed to fetch articles by date');
        }
    } 
}

module.exports = new ArtikelService();
