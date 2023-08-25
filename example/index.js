const { Client } = require('pg');
const config = require('./connectionStrings.json');

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0


/*
client.connect()
    .then(result => {
        console.log("Connected to the DB");
    })
    .catch(err => {
        console.error("Connection error", err.stack);
    });
*/

class ConnectDB {


    async processConnections() {

        for (const connectionStr of config.connections) {

            const client = new Client({
                connectionString: connectionStr
            });

            try {
                await client.connect()
                console.log(`Connected for ${connectionStr}`);

                const query = "SELECT * FROM pg_indexes limit 1";
                const result= await client.query(query);
                console.log(result);

                await client.end();
                console.log(`Disconnected for ${connectionStr}`);
            }
            catch (err) {
                console.log(`Error for ${connectionStr}`, err.stack);
            }
        }
    }

}

let obj1 = new ConnectDB();
obj1.processConnections();
