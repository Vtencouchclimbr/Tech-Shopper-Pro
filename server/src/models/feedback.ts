import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

// Define Category model attributes
interface CategoryAttributes {
    id: number;
    name: string;
    image: string;
    creationAt: Date;
    updatedAt: Date;
}

// Define Feedback model attributes with Category as a foreign key relation
interface FeedbackAttributes {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string;
    creationAt: Date;
    updatedAt: Date;
    categoryId: number;
}

// Optional is a TypeScript utility type that makes some properties optional.
// FeedbackCreationAttributes extends Optional to make the 'id' field optional when creating a new Feedback entry.
interface FeedbackCreationAttributes extends Optional<FeedbackAttributes, 'id'> { }

// Define the Category model class
export class Category extends Model<CategoryAttributes> implements CategoryAttributes {
    public id!: number;
    public name!: string;
    public image!: string;
    public readonly creationAt!: Date;
    public readonly updatedAt!: Date;
}

// Define the Feedback model class
export class Feedback extends Model<FeedbackAttributes, FeedbackCreationAttributes> implements FeedbackAttributes {
    public id!: number;
    public title!: string;
    public price!: number;
    public description!: string;
    public images!: string;
    public readonly creationAt!: Date;
    public readonly updatedAt!: Date;
    public categoryId!: number; // Foreign key to Category
}

// Initialize the Category model
export function CategoryFactory(sequelize: Sequelize): typeof Category {
    Category.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            image: {
                type: DataTypes.STRING,
                allowNull: true,
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
        },
        {
            tableName: 'categories',
            sequelize,
        }
    );

    return Category;
}

// Initialize the Feedback model
export function FeedbackFactory(sequelize: Sequelize): typeof Feedback {
    Feedback.init(
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
                type: DataTypes.STRING,
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
                references: {
                    model: 'categories',  // Foreign key to Category model
                    key: 'id',
                },
            },
        },
        {
            tableName: 'feedbacks',
            sequelize,
        }
    );

    return Feedback;
}

// Establish association between Feedback and Category models
export function applyAssociations() {
    Feedback.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });
    Category.hasMany(Feedback, { foreignKey: 'categoryId', as: 'feedbacks' });
}
