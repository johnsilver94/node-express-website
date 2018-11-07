const faker = require('faker');

const models = require('./models');

const owner = '5bdf2170b9ac80018c22e801';

module.exports = () => {
  models.Post.remove()
    .then(() => {
      Array.from({ length: 20 }).forEach(() => {
        models.Post.create({
          title: faker.lorem.words(5),
          body: faker.lorem.words(100),
          owner
        })
          .then(console.log)
          .catch(console.log);
      });
    })
    .catch(console.log);
};
