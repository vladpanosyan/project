
module.exports = (sequelize, DataTypes) => {
    var Answer = sequelize.define('Answers', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        answer: {
            type: DataTypes.TEXT
        },
        time: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        
    }, {
        timestamps: false,
        tableName: 'answers'
    });

    Answer.associate = function (models) {
        Answer.belongsTo(models.Questions, {
            foreignKey: 'questionId',
            as: 'answerToQuestion'
        });
        Answer.belongsTo(models.Users, {
            foreignKey: 'userId',
            as: 'answerToUser'
        });
    };

    return Answer;
};