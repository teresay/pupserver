const { db, User, Dog, Event, Location } = require("./src/db/models/index");

const users = [
  {
    firstName: "Arya",
    lastName: "Stark",
    userName: "aryastark",
    password: "arya",
    email: "arya@w.com",
    homeAddress: "400 43rd",
    location: "(40.765854,-73.990896)"
  },
  {
    firstName: "Sansa",
    lastName: "Stark",
    userName: "sansastark",
    password: "sansa",
    email: "sansa@w.com",
    homeAddress: "400 43rd",
    location: "(40.765887,-73.994866)"
  }
];

const dogs = [
  {
    name: "Nymeria",
    birthday: "2018-05-10",
    breed: "Direwolf",
    weight: 70,
    description: "nymeria",
    fixed: true
  },
  {
    name: "Lady",
    birthday: "2018-05-10",
    breed: "Direwolf",
    weight: 60,
    description: "lady",
    fixed: true
  }
];

const events = [
  {
    name: "Play 1",
    eventDate: "2018-06-20",
    startTime: "12:00:00",
    endTime: "14:00:00",
    access: "private"
  },
  {
    name: "Play 2",
    eventDate: "2018-06-25",
    startTime: "10:00:00",
    endTime: "11:00:00",
    access: "public"
  }
];

const locations = [
  {
    name: "Winterfell Park",
    address: "1 Winterfell",
    town: "North",
    state: "Westeros",
    zip: "00001"
  },
  {
    name: "DeWitt Park",
    address: "12th Av",
    town: "New York",
    state: "New York",
    zip: "10036"
  }
];


const seed = () =>
  Promise.all(users.map(user => User.create(user)))
    .then(() => Promise.all(dogs.map(dog => Dog.create(dog))))
    .then(() => Promise.all(events.map(event => Event.create(event))))
    .then(() =>
      Promise.all(locations.map(location => Location.create(location)))
    );


const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
