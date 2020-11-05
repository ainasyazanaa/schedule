module.exports = (sequelize, DataTypes) => {
    const Patient = sequelize.define('Patient', {
        ic: {
            type: DataTypes.STRING,
            unique: true
        },
        name: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING,
        phone_num: DataTypes.STRING
    });
    return Patient;

};