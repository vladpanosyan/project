
module.exports = (sequelize, Sequelize) => {
    const Nick_like = sequelize.define('Nick_likes', {

        nicknameId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            
        },
        questionId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        
    }, {
        timestamps: false,
        tableName: 'nicks_likes',
    });

    Nick_like.associate = function (models) {
        Nick_like.belongsTo(models.Nicknames, {
            as: 'nick_likesToNikes',
            foreignKey: 'nicknameId',
            // as: 'nickToPortal'
        });
        
        Nick_like.belongsTo(models.Questions, {
            foreignKey: 'questionId',
            as: 'nick_likesToQuestions'
        });

    };

    return Nick_like;
};