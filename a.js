const mongodb = require('mongodb');

name()

async function name() {
    const client = await mongodb.MongoClient.connect(
        'mongosb address', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    );
    var a = await client.db('orendapush').collection('bebeklikdata').find({ _id:"fQFWYVYpSoI1EgWEZSNEuv:APA91bGuCI1hLf2aK076whVBPk-dWB75CDhfVtfgpSbyX7K3ZOGeuqMVV0kLWj7T_LPK1qv2S_oIgalYDGxzPcGgzYAR3v2KtfLqtt69l9pPYzMF6xqnY8gOcdVNJDXYvX1PWe53RIzg" }).toArray()
    console.log(a);

}
