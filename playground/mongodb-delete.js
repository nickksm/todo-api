const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
      return console.log('Unable to connect to MongoDB Server')
    }

    console.log('Connection Successful')

    // deleteMany --> Delete many documents at once that matches criteria.
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne ---> Delete only one document
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete --> delete a doc, and get a report back what you deleted
    // db.collection('Todos').findOneAndReplace({text: 'Eat lunch'}).then((result) => {
    // console.log(result);
    // }

  
    
    //db.close();
});