const ArtikelController = require('../controllers/artikel.controller');

module.exports = function (app) {
  app.use((req, res, next) => {
      res.header(
          'Access-Control-Allow-Headers',
          'x-access-token, Origin, Content-Type, Accept',
      );
      next();
  });

  /**
   * @swagger
   * /v1/api/artikel/getkategori/{kategori}:
   *   get:
   *     tags:
   *       - Artikel Management
   *     summary: Get Artikel by Kategori
   *     description: Get all articles by a specific category.
   *     parameters:
   *       - name: kategori
   *         in: path
   *         description: Kategori ID
   *         required: true
   *         schema:
   *           type: integer
   *       - name: page
   *         in: query
   *         description: Page number
   *         required: false
   *         schema:
   *           type: integer
   *           default: 1
   *     responses:
   *       200:
   *         description: Successfully retrieved articles.
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 articles:
   *                   type: array
   *                   description: List of articles.
   *                 total:
   *                   type: integer
   *                   description: Total number of pages.
   *                 pages:
   *                   type: integer
   *                   description: Total number of pages.
   *                 currentPage:
   *                   type: integer
   *                   description: Total number of pages.
   *                 data:
   *                   type: string
   *                   description: Total number of pages.
   *       400:
   *         description: Bad request.
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 message:
   *                   type: string
   *                   description: Error message.
   *                   example: Invalid request parameters.
   *       500:
   *         description: Internal server error.
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 message:
   *                   type: string
   *                   description: Error message.
   *                   example: Failed to fetch articles. Please try again later.
   */
  app.get('/v1/api/artikel/getkategori/:kategori', ArtikelController.getArtikelByKategori);

  /**
   * @swagger
   * /v1/api/artikel/tanggal:
   *   get:
   *     tags:
   *       - Artikel Management
   *     summary: Get Artikel by date
   *     description: Get all articles by a specific date.
   *     parameters:
   *       - name: page
   *         in: query
   *         description: Page number
   *         required: false
   *         schema:
   *           type: integer
   *           default: 1
   *     responses:
   *       200:
   *         description: Successfully retrieved articles.
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 articles:
   *                   type: array
   *                   description: List of articles.
   *                 total:
   *                   type: integer
   *                   description: Total number of articles.
   *                 pages:
   *                   type: integer
   *                   description: Total number of pages.
   *                 currentPage:
   *                   type: integer
   *                   description: Current page number.
   *                 data:
   *                   type: string
   *                   description: Additional data.
   *       400:
   *         description: Bad request.
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 message:
   *                   type: string
   *                   description: Error message.
   *                   example: Invalid request parameters.
   *       500:
   *         description: Internal server error.
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 message:
   *                   type: string
   *                   description: Error message.
   *                   example: Failed to fetch articles. Please try again later.
   */
  app.get('/v1/api/artikel/tanggal', ArtikelController.getArtikelByTanggal);
};
