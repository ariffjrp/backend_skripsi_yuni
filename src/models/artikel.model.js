const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Artikel extends Model {
        static associate(models) {
            // Define associations here, e.g.:
            // this.belongsTo(models.User, { foreignKey: 'userId' });
        }
    }

    Artikel.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        judul: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        kategori: {
            type: DataTypes.INTEGER,
        },
        deskripsi: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        tanggal: {
            type: DataTypes.DATEONLY,  // Change this as per your requirement
        },
        deletedAt: {
            type: DataTypes.DATE,
            field: 'deleted_at',
        },
    }, {
        sequelize,
        modelName: 'Artikel',
        paranoid: true,
        timestamps: true,
        underscored: true,
    });

    return Artikel;
};
