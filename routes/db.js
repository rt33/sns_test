class Database {
    constructor () {
        this.assert = require('assert');
        this.mongo = require('mongodb').MongoClient;

        this.url = 'mongodb://localhost:27017/';
        this.dbname;
        this.db;
    }

    async init () {
        this.dbname = 'twitter';
        // 失敗する
        let client = await this.mongo.connect(this.url);
        this.db = client.db(this.dbname);
    }

    async getTweetData () {
        const collection = this.db.collection('tweet');
        console.log(await collection.find({'user' : 'ffpinky'})); 
        return await collection.find({'user' : 'ffpinky'});
    }
}

module.exports = Database;