
const bcrypt = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('Users', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING(60),
            unique: {
                args: true,
                msg: 'The email you entered is already exist'
            },
        },
        firstName: {
            type: DataTypes.STRING(50)
        },
        lastName: {
            type: DataTypes.STRING(50)
        },
        password: DataTypes.STRING(),
        img: {
            type: DataTypes.STRING()
        },
        time: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        // time1: {
        //     allowNull: false,
        //     type: Sequelize.DATE,
        //     defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
        // }
    }, {
        timestamps: false,
        tableName: 'users',
        
        // defaultScope: {
        //     exclude: ['password']
        // }
        // classMethods: {
        //     async generateHash(password) {
        //         const salt = await bcrypt.genSalt(10);
        //         return bcrypt.hash(password, salt);
        //     },
        //     async validPassword(password) {
        //         return bcrypt.compare(password, this.password);
        //     }
        // }
        // classMethods:
    });

    User.associate = function (models) {
        User.hasMany(models.Portals, {
            foreignKey: 'userId',
            // as: 'port'
        });
        User.hasMany(models.Answers, {
            foreignKey: 'userId',
            // as: 'port'
        });
        User.belongsToMany(models.Questions, {
            through: 'users_likes',
            foreignKey: 'userId',
            timestamps: false
        })
    };

    User.generateHash = async(password) => {
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(password, salt);
    }

    User.validPassword = async(password, hashPassword) => {
        return bcrypt.compare(password, hashPassword);
    }

    return User;
};