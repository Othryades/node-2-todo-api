const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// var id = '5b03e3e58ed565a22d57e97011';
var id = '5b02a30c3d9eb54867f91fa7';

if (!ObjectID.isValid(id)) {
  console.log('Id not valid')
}

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found')
//   }
//   console.log('Todo by id', todo);
// }).catch((e) => console.log(e))

User.findById(id).then((user) => {
  if (!user) {
    return console.log('unable to find user');
  }
  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e)
});
