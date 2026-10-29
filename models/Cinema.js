import { DataTypes } from 'sequelize';

export default (sequelize) => {
  return sequelize.define('Cinema', {
    name: { type: DataTypes.STRING, allowNull: false },
    address: { type: DataTypes.STRING }
  });
};