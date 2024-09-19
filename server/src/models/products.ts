import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

// Define Product model attributes
interface ProductAttributes {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[]; // Array of image URLs
    creationAt: Date;
    updatedAt: Date;
    categoryId: number; // Foreign key to Category, if needed later
}

// Optional is a TypeScript utility type that makes the 'id' field optional when creating a new Product entry
interface ProductCreationAttributes extends Optional<ProductAttributes, 'id'> { }

// Define the Product model class
export class Product extends Model<ProductAttributes, ProductCreationAttributes> implements ProductAttributes {
    public id!: number;
    public title!: string;
    public price!: number;
    public description!: string;
    public images!: string[];
    public readonly creationAt!: Date;
    public readonly updatedAt!: Date;
    public categoryId!: number; // Foreign key to Category
}

// Initialize the Product model
export function ProductFactory(sequelize: Sequelize): typeof Product {
    Product.init(
        {
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
        },
        {
            tableName: 'products',
            sequelize,
        }
    );

    return Product;
}
