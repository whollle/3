import { DataTypes } from 'sequelize';

export default (sequelize) => {
  return sequelize.define('Session', {
    time: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false }
  });
};
