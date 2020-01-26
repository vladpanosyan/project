
module.exports = (sequelize, DataTypes) => {
    var Question = sequelize.define('Questions', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        question: {
            type: DataTypes.TEXT
        },
        isDeleted: {
            type: DataTypes.BOOLEAN    
        },
        time: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        
    }, {
        timestamps: false,
        tableName: 'questions'
    });

    Question.associate = function (models) {
        Question.belongsTo(models.Portals, {
            // as: "portal",
            as: "quToPortal",
            foreignKey: 'portalId',
        });
        Question.belongsTo(models.Nicknames, {
            as: 'nickss',
            foreignKey: 'nicknameId',
        });
        Question.belongsToMany(models.Nicknames, {
            as: 'question_likes',
            through: 'nicks_likes',
            foreignKey: 'questionId',
            timestamps: false
        })
        Question.belongsToMany(models.Users, {
            through: 'users_likes',
            foreignKey: 'questionId',
            timestamps: false
        })
        Question.hasMany(models.Answers, {
            foreignKey: 'questionId'
        })
        Question.hasMany(models.Nick_likes, {
            as: 'questionManyLikes',
            foreignKey: 'questionId'
        })
    };

    return Question;
};