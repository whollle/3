import { DataTypes } from 'sequelize';

export default (sequelize) => {
  return sequelize.define('Movie', {
    title: { type: DataTypes.STRING, allowNull: false },
    genre: { type: DataTypes.STRING },
    duration: { type: DataTypes.INTEGER }
  });
};