import { syncDb, Cinema, Movie, Session } from './models/index.js';

const seed = async () => {
  try {
    await syncDb();

    const cinemas = await Cinema.bulkCreate([
      { name: 'Октябрь', address: 'ул. Новая, 10' },
      { name: 'Мир', address: 'пр. Мира, 45' },
      { name: 'Космос', address: 'ул. Гагарина, 5' }
    ]);

    const movies = await Movie.bulkCreate([
      { title: 'Интерстеллар', genre: 'Фантастика', duration: 169 },
      { title: 'Начало', genre: 'Триллер', duration: 148 },
      { title: 'Джентльмены', genre: 'Комедия/Криминал', duration: 113 }
    ]);

    await Session.bulkCreate([
      { time: '12:00', price: 300, cinemaId: cinemas[0].id, movieId: movies[0].id },
      { time: '15:30', price: 350, cinemaId: cinemas[0].id, movieId: movies[1].id },
      { time: '19:00', price: 400, cinemaId: cinemas[1].id, movieId: movies[0].id },
      { time: '21:00', price: 450, cinemaId: cinemas[1].id, movieId: movies[2].id },
      { time: '18:00', price: 380, cinemaId: cinemas[2].id, movieId: movies[1].id }
    ]);

    console.log('База данных успешно заполнена тестовыми данными');
  } catch (error) {
    console.error('Ошибка при заполнении данных:', error);
  }
};

seed();
