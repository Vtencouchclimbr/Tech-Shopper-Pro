import { DataTypes, Model } from 'sequelize';
// Define the Product model class
export class Product extends Model {
}
// Initialize the Product model
export function ProductFactory(sequelize) {
    Product.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        images: {
            type: DataTypes.ARRAY(DataTypes.STRING), // Define images as an array of strings
            allowNull: false,
        },
        creationAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        tableName: 'products',
        sequelize,
    });
    return Product;
}
