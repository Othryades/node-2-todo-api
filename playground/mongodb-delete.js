// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongoDB');
  }
  console.log('Connected to MongoDB');

  // deleteMany
  // db.collection('Todos').deleteMany({text: "Eat lunch"}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Moris'}).then((result) => {
  //   console.log(result);
  // });
  // db.collection('Users').findOneAndDelete({_id: new ObjectID("5afd6ce165759d7527141170")}).then((result) => {
  //   console.log(result);
  // });



  // db.close();


});
