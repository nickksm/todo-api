const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
      return console.log('Unable to connect to MongoDB Server')
    }

    console.log('Connection Successful')

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5c2681151029d7132807ebd6")
    },{
        $set: {
            name: 'Nick'
        }, 
        $inc: {
            age: +2
        }, 
    }, {
        returnOriginal: false
    }).then((x) => {
        console.log(x)
    });

    //db.close();
});