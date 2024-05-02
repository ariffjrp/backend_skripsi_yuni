const ArtikelController = require('../controllers/artikel.controller');

module.exports = function (app) {
    app.use((req, res, next) => {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept',
        );
        next();
    });

    app.get('/v1/api/artikel/getkategori/:kategori', ArtikelController.getArtikelByKategori);
    app.get('/v1/api/artikel/tanggal', ArtikelController.getArtikelByTanggal);
};
