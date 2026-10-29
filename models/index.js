import { Sequelize } from 'sequelize';
import defineCinema from './Cinema.js';
import defineMovie from './Movie.js';
import defineSession from './Session.js';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: false
});

const Cinema = defineCinema(sequelize);
const Movie = defineMovie(sequelize);
const Session = defineSession(sequelize);

Cinema.hasMany(Session, { foreignKey: 'cinemaId', as: 'sessions' });
Session.belongsTo(Cinema, { foreignKey: 'cinemaId' });

Movie.hasMany(Session, { foreignKey: 'movieId', as: 'sessions' });
Session.belongsTo(Movie, { foreignKey: 'movieId' });

const syncDb = async () => {
  await sequelize.sync({ force: true });
  console.log('Таблицы успешно синхронизированы.');
};

export { sequelize, Cinema, Movie, Session, syncDb };
