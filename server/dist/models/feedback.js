import { DataTypes, Model } from 'sequelize';
// The Feedback class extends Sequelize's Model class and implements FeedbackAttributes to enforce the structure of feedback records.
export class Feedback extends Model {
}
// The FeedbackFactory function initializes the Feedback model with its attributes and configurations.
// This function will be used in the Express.js application to set up the Feedback table in the PostgreSQL database.
export function FeedbackFactory(sequelize) {
    Feedback.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true, // Automatically incrementing ID for each feedback entry.
            primaryKey: true, // Primary key for the Feedback table.
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false, // Email field cannot be null.
        },
        feedbackType: {
            type: DataTypes.STRING,
            allowNull: true, // Feedback type can be null, defaults to 'user feedback'.
            defaultValue: 'user feedback'
        },
        feedback: {
            type: DataTypes.TEXT,
            allowNull: false, // Feedback content cannot be null.
        },
    }, {
        tableName: 'feedbacks', // Name of the table in PostgreSQL.
        sequelize, // The Sequelize instance that connects to PostgreSQL.
    });
    return Feedback; // Returns the initialized model to be used in the application.
}
