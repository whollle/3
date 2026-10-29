import { Op } from 'sequelize';
import { Cinema, Movie, Session } from './models/index.js';

const runQueries = async () => {
  try {
    console.log('\nfindAll(): Все фильмы');
    const allMovies = await Movie.findAll({ raw: true });
    console.log(allMovies);

    console.log('\nfindByPk(): Кинотеатр по ID');
    const cinema = await Cinema.findByPk(1, { raw: true });
    console.log(cinema);

    console.log('\nfindAll({ where: {...} }): Фильтр сеансов дешевле 400 руб');
    const cheapSessions = await Session.findAll({
    where: {
        price: {
        [Op.lt]: 400
        }
    },
    raw: true
    });
    console.log(cheapSessions);

    console.log('\nfindAll({ include: ... }): Кинотеатры со всеми их сеансами');
    const cinemasWithSessions = await Cinema.findAll({
      include: [{ model: Session, as: 'sessions' }]
    });
    console.log(JSON.stringify(cinemasWithSessions, null, 2));

    console.log('\ncreate(): Создание нового фильма');
    const newMovie = await Movie.create({
      title: 'Матрица',
      genre: 'Экшен',
      duration: 136
    });
    console.log(newMovie.toJSON());

  } catch (error) {
    console.error('Ошибка выполнения запросов:', error);
  }
};

runQueries();
