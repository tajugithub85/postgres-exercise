const { Client } = require('pg');
require('dotenv').config();

const config = {
	user: process.env.PGUSER,
	password: process.env.PGPASSWORD,
	host: process.env.PGHOST,
	database: process.env.PGDATABASE,
 	port: process.env.PGPORT
	
 }	
const client = new Client(config);
client.connect();

async function getStudents(){
	const result = await client.query("SELECT * FROM fishes");

}
getStudents().then(() => process.exit(0));

module.exports = client
